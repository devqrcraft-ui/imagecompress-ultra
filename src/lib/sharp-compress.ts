// src/lib/sharp-compress.ts
// FIX Bug #8: Web Streams API замість .pipe() — Edge Runtime compatible
import sharp      from "sharp";
import { put, del } from "@vercel/blob";

const MAX_DIMENSION = 3000; // px
const MAX_OUTPUT_W  = 2048; // px — resize якщо більше

export async function compressWithSharp(
  blobUrl: string,
  format:  "webp" | "avif" | "jpeg" | "png" = "webp",
  quality = 80,
): Promise<string> {
  // 1. Перевірка метаданих через перші 64KB (без завантаження всього файлу)
  const preview = await fetch(blobUrl, { headers: { Range: "bytes=0-65535" } });
  if (!preview.ok) throw new Error("BLOB_FETCH_FAILED");

  const chunk = Buffer.from(await preview.arrayBuffer());
  const meta  = await sharp(chunk).metadata();

  if (!meta.width || !meta.height) throw new Error("INVALID_IMAGE");
  if (meta.width > MAX_DIMENSION || meta.height > MAX_DIMENSION) {
    throw new Error("DIMENSIONS_TOO_LARGE");
  }
  if (meta.format === "gif") throw new Error("GIF_NOT_SUPPORTED");

  // 2. Завантажуємо повний файл
  const response = await fetch(blobUrl);
  if (!response.ok) throw new Error(`BLOB_FETCH_FAILED: ${response.status}`);

  const inputBuffer = Buffer.from(await response.arrayBuffer());

  // 3. Sharp pipeline — вибираємо формат
  let pipeline = sharp(inputBuffer, { failOnError: false })
    .resize({
      width:             Math.min(meta.width, MAX_OUTPUT_W),
      withoutEnlargement: true,
    });

  switch (format) {
    case "webp": pipeline = pipeline.webp({ quality, effort: 3 }); break;
    case "avif": pipeline = pipeline.avif({ quality, effort: 3 }); break;
    case "jpeg": pipeline = pipeline.jpeg({ quality, mozjpeg: true }); break;
    case "png":  pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true }); break;
  }

  const outputBuffer = await pipeline.toBuffer();

  // 4. Завантажуємо результат у Vercel Blob
  const ext      = format === "jpeg" ? "jpg" : format;
  const filename = `compressed/${Date.now()}-${crypto.randomUUID()}.${ext}`;
  const mimeMap  = { webp: "image/webp", avif: "image/avif", jpeg: "image/jpeg", png: "image/png" };

  const blob = await put(filename, outputBuffer, {
    access:      "public",
    contentType: mimeMap[format],
    addRandomSuffix: false,
  });

  // 5. Видаляємо input blob — звільняємо місце
  try { await del(blobUrl); } catch {}

  return blob.url;
}
