import imageCompression from 'browser-image-compression';

export type Format = 'webp' | 'avif' | 'jpeg' | 'png';

export interface CompressResult {
  file: File;
  originalSize: number;
  compressedSize: number;
  savedPercent: number;
}

// Базова компресія по якості
export async function compressImage(
  file: File,
  format: Format,
  quality: number
): Promise<CompressResult> {
  const options = {
    maxSizeMB: 10,
    maxWidthOrHeight: 4096,
    useWebWorker: true,
    fileType: format === 'jpeg' ? 'image/jpeg' : format === 'png' ? 'image/png' : 'image/webp',
    initialQuality: quality,
    onProgress: undefined,
  };
  const compressed = await imageCompression(file, options);
  return {
    file: compressed,
    originalSize: file.size,
    compressedSize: compressed.size,
    savedPercent: Math.round((1 - compressed.size / file.size) * 100),
  };
}

// Exact KB — бінарний пошук якості
export async function compressToTargetKB(
  file: File,
  format: Format,
  targetKB: number
): Promise<CompressResult> {
  const targetBytes = targetKB * 1024;

  // Якщо файл вже менший — повертаємо як є
  if (file.size <= targetBytes) {
    return {
      file,
      originalSize: file.size,
      compressedSize: file.size,
      savedPercent: 0,
    };
  }

  let lo = 0.05;
  let hi = 0.95;
  let bestFile = file;
  let iterations = 0;

  while (hi - lo > 0.03 && iterations < 12) {
    const mid = (lo + hi) / 2;
    const options = {
      maxSizeMB: targetBytes / (1024 * 1024) * 1.1,
      maxWidthOrHeight: 4096,
      useWebWorker: true,
      fileType: format === 'jpeg' ? 'image/jpeg' : format === 'png' ? 'image/png' : 'image/webp',
      initialQuality: mid,
      onProgress: undefined,
    };
    try {
      const result = await imageCompression(file, options);
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

  // Фінальна спроба з maxSizeMB
  if (bestFile.size > targetBytes) {
    try {
      const final = await imageCompression(file, {
        maxSizeMB: targetBytes / (1024 * 1024),
        maxWidthOrHeight: 4096,
        useWebWorker: true,
        fileType: format === 'jpeg' ? 'image/jpeg' : 'image/webp',
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
