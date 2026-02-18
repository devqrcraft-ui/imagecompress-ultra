import imageCompression from 'browser-image-compression';

export type Format = 'webp' | 'avif' | 'jpeg' | 'png';

export interface CompressResult {
  file: File;
  originalSize: number;
  compressedSize: number;
  savedPercent: number;
}

// HEIC conversion using canvas
async function heicToFile(file: File): Promise<File> {
  try {
    // Try heic2any if available
    if (typeof window !== 'undefined' && (window as any).heic2any) {
      const blob = await (window as any).heic2any({ blob: file, toType: 'image/jpeg', quality: 0.9 });
      return new File([blob as Blob], file.name.replace(/\.heic$/i, '.jpg'), { type: 'image/jpeg' });
    }
  } catch {}
  // Fallback: decode via createImageBitmap
  try {
    const bitmap = await createImageBitmap(file);
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(bitmap, 0, 0);
    return new Promise(resolve => {
      canvas.toBlob(blob => {
        resolve(new File([blob!], file.name.replace(/\.heic$/i, '.jpg'), { type: 'image/jpeg' }));
      }, 'image/jpeg', 0.9);
    });
  } catch {}
  return file;
}

async function prepareFile(file: File): Promise<File> {
  if (file.type === 'image/heic' || file.type === 'image/heif' || file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif')) {
    return heicToFile(file);
  }
  return file;
}

export async function compressImage(
  file: File,
  format: Format,
  quality: number
): Promise<CompressResult> {
  const prepared = await prepareFile(file);
  const options = {
    maxSizeMB: 10,
    maxWidthOrHeight: 4096,
    useWebWorker: true,
    fileType: format === 'jpeg' ? 'image/jpeg' : format === 'png' ? 'image/png' : format === 'avif' ? 'image/avif' : 'image/webp',
    initialQuality: quality,
    onProgress: undefined,
  };
  const compressed = await imageCompression(prepared, options);
  return {
    file: compressed,
    originalSize: file.size,
    compressedSize: compressed.size,
    savedPercent: Math.round((1 - compressed.size / file.size) * 100),
  };
}

export async function compressToTargetKB(
  file: File,
  format: Format,
  targetKB: number
): Promise<CompressResult> {
  const prepared = await prepareFile(file);
  const targetBytes = targetKB * 1024;

  if (prepared.size <= targetBytes) {
    return {
      file: prepared,
      originalSize: file.size,
      compressedSize: prepared.size,
      savedPercent: 0,
    };
  }

  let lo = 0.05;
  let hi = 0.95;
  let bestFile: File = prepared;
  let iterations = 0;
  const mimeType = format === 'jpeg' ? 'image/jpeg' : format === 'png' ? 'image/png' : 'image/webp';

  while (hi - lo > 0.03 && iterations < 12) {
    const mid = (lo + hi) / 2;
    const options = {
      maxSizeMB: targetBytes / (1024 * 1024) * 1.1,
      maxWidthOrHeight: 4096,
      useWebWorker: true,
      fileType: mimeType,
      initialQuality: mid,
      onProgress: undefined,
    };
    try {
      const result = await imageCompression(prepared, options);
      if (result.size <= targetBytes) {
        lo = mid;
        bestFile = result;
      } else {
        hi = mid;
      }
    } catch {
      hi = mid;
    }
    iterations++;
  }

  if (bestFile.size > targetBytes) {
    try {
      const final = await imageCompression(prepared, {
        maxSizeMB: targetBytes / (1024 * 1024),
        maxWidthOrHeight: 4096,
        useWebWorker: true,
        fileType: mimeType,
        initialQuality: 0.1,
        onProgress: undefined,
      });
      if (final.size < bestFile.size) bestFile = final;
    } catch {}
  }

  return {
    file: bestFile,
    originalSize: file.size,
    compressedSize: bestFile.size,
    savedPercent: Math.round((1 - bestFile.size / file.size) * 100),
  };
}
