export type Format = 'webp' | 'avif' | 'jpeg' | 'png';

export interface CompressResult {
  file: File;
  originalSize: number;
  compressedSize: number;
  unchanged?: boolean;
  savedPercent: number;
}

export type ProgressFn = (fraction: number, label: string) => void;

const MAX_SIDE = 4096;
const MIN_SIDE = 160;

let encodeSupport: Partial<Record<Format, boolean>> = {};

function mimeFor(fmt: Format): string {
  if (encodeSupport[fmt] === undefined) {
    const probe = document.createElement('canvas');
    probe.width = 1; probe.height = 1;
    const want = 'image/' + fmt;
    encodeSupport[fmt] = probe.toDataURL(want).startsWith(want);
  }
  return encodeSupport[fmt] ? 'image/' + fmt : 'image/jpeg';
}

function encode(canvas: HTMLCanvasElement, type: string, quality?: number): Blob {
  const url = canvas.toDataURL(type, quality);
  if (!url.startsWith('data:' + type)) throw new Error('This browser cannot export ' + type + '.');
  const comma = url.indexOf(',');
  const bin = atob(url.slice(comma + 1));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type });
}

async function decode(file: File): Promise<ImageBitmap> {
  try {
    return await createImageBitmap(file, { imageOrientation: 'from-image' } as ImageBitmapOptions);
  } catch {
    const conv: any = typeof window !== 'undefined' ? (window as any).heic2any : undefined;
    if (!conv) throw new Error('This browser cannot open that file — convert it to JPEG first.');
    const blob: Blob = await conv({ blob: file, toType: 'image/jpeg' });
    return await createImageBitmap(blob);
  }
}

function dims(bitmap: ImageBitmap, scale: number) {
  const cap = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const s = cap * scale;
  return { w: Math.max(1, Math.round(bitmap.width * s)), h: Math.max(1, Math.round(bitmap.height * s)) };
}

function paint(bitmap: ImageBitmap, canvas: HTMLCanvasElement, scale: number, flatten: boolean) {
  const d = dims(bitmap, scale);
  canvas.width = d.w; canvas.height = d.h;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, d.w, d.h);
  if (flatten) { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, d.w, d.h); }
  ctx.drawImage(bitmap, 0, 0, d.w, d.h);
  return d;
}

function nameFor(file: File, type: string) {
  const ext = type === 'image/png' ? 'png' : type === 'image/webp' ? 'webp' : type === 'image/avif' ? 'avif' : 'jpg';
  return file.name.replace(/\.[^.]+$/, '') + '.' + ext;
}

function wrap(blob: Blob, file: File, type: string): File {
  return new File([blob], nameFor(file, type), { type });
}

function report(out: File, src: File, unchanged?: boolean): CompressResult {
  return {
    file: out,
    originalSize: src.size,
    compressedSize: out.size,
    savedPercent: src.size > 0 ? Math.min(99, Math.max(0, Math.round((1 - out.size / src.size) * 100))) : 0,
    unchanged,
  };
}

export async function compressImage(file: File, format: Format, quality: number, onProgress?: ProgressFn): Promise<CompressResult> {
  onProgress?.(0.2, 'Decoding image');
  const bitmap = await decode(file);
  const type = mimeFor(format);
  const canvas = document.createElement('canvas');
  paint(bitmap, canvas, 1, type === 'image/jpeg');
  onProgress?.(0.7, 'Encoding');
  const blob = encode(canvas, type, type === 'image/png' ? undefined : quality);
  bitmap.close?.();
  onProgress?.(1, 'Done');
  return report(wrap(blob, file, type), file);
}

export async function compressToTargetKB(file: File, format: Format, targetKB: number, onProgress?: ProgressFn): Promise<CompressResult> {
  const target = Math.max(1, Math.round(targetKB)) * 1024;
  const type = mimeFor(format);
  if (file.size <= target && file.type === type) return report(file, file, true);

  onProgress?.(0.12, 'Decoding image');
  const bitmap = await decode(file);
  const lossless = type === 'image/png';
  const canvas = document.createElement('canvas');

  let best: Blob | null = null;
  let step = 0;
  const deadline = Date.now() + 20000;

  async function shoot(scale: number, q: number, budget: number): Promise<{ blob: Blob; w: number; h: number } | null> {
    step++;
    const d = dims(bitmap, scale);
    onProgress?.(Math.min(0.95, step / budget), `${Math.round(q * 100)}% · ${d.w}×${d.h}`);
    if (Math.max(d.w, d.h) < MIN_SIDE) return null;
    paint(bitmap, canvas, scale, type === 'image/jpeg');
    const blob = encode(canvas, type, lossless ? undefined : q);
    if (!best || blob.size < best.size) best = blob;
    return { blob, w: d.w, h: d.h };
  }

  const full = dims(bitmap, 1);
  const megaPixels = Math.max(0.2, (full.w * full.h) / 1e6);

  if (lossless) {
    const probe = await shoot(1, 1, 8);
    if (probe && probe.blob.size > target) {
      const s = Math.min(1, Math.sqrt((target / probe.blob.size)));
      for (const scale of [s, s * 0.8, s * 0.65, s * 0.5, s * 0.4]) {
        const r = await shoot(Math.max(0.08, scale), 1, 8);
        if (!r || r.blob.size <= target || Date.now() > deadline) break;
      }
    }
  } else {
    const budget = 9;
    const qTop = 0.85, qProbe = 0.55;
    const guess = Math.min(1, Math.max(0.12, Math.sqrt((target * 3) / (0.16 * megaPixels * 1e6))));
    const probe = await shoot(guess, qProbe, budget);
    if (probe) {
      const perPx = probe.blob.size / Math.max(1, probe.w * probe.h);
      const wanted = Math.min(1, Math.max(0.06, Math.sqrt(target / (perPx * megaPixels * 1e6 * Math.pow(qTop / qProbe, 1.35)))));
      let chosen: { scale: number; q: number; blob: Blob } | null = null;

      for (const scale of [wanted, wanted * 0.8, wanted * 0.62, wanted * 0.45]) {
        for (const q of [qTop, 0.7, 0.55, 0.4]) {
          const r = await shoot(scale, q, budget);
          if (!r) break;
          if (r.blob.size <= target) { chosen = { scale, q, blob: r.blob }; break; }
        }
        if (chosen || Date.now() > deadline) break;
      }

      if (chosen) {
        let lo = chosen.q;
        let hi = Math.min(0.98, qTop + 0.08);
        let accepted = chosen.blob;
        if (lo < hi - 0.04) {
          for (let i = 0; i < 3 && hi - lo > 0.05; i++) {
            const mid = (lo + hi) / 2;
            const r = await shoot(chosen.scale, mid, budget);
            if (!r) break;
            if (r.blob.size <= target) { lo = mid; accepted = r.blob; } else { hi = mid; }
          }
        }
        best = accepted;
      }
    }
  }

  bitmap.close?.();
  if (!best) throw new Error('Could not read this image.');
  onProgress?.(1, 'Done');
  return report(wrap(best, file, type), file, false);
}
