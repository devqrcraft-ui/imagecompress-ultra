"use client";
import { useState, useRef, useCallback } from "react";

type Format = "webp" | "avif" | "jpeg" | "png";
const FL: Record<Format, string> = { webp: "WebP", avif: "AVIF", jpeg: "JPEG", png: "PNG" };
const FT: Record<Format, string> = {
  webp: "Кращий баланс якості та розміру",
  avif: "Найменший розмір",
  jpeg: "Максимальна сумісність",
  png: "Без втрат, для прозорості",
};

interface Img {
  id: string; file: File; preview: string;
  status: "idle" | "uploading" | "processing" | "done" | "error";
  taskId?: string; outputUrl?: string;
  originalSize: number; compressedSize?: number; progress: number;
}

function fb(b: number) {
  if (b < 1024) return b + " B";
  if (b < 1048576) return (b / 1024).toFixed(1) + " KB";
  return (b / 1048576).toFixed(1) + " MB";
}
function gs(o: number, c: number) {
  return (((o - c) / o) * 100).toFixed(0) + "%";
}

export default function Home() {
  const [images, setImages] = useState<Img[]>([]);
  const [format, setFormat] = useState<Format>("webp");
  const [quality, setQuality] = useState(80);
  const [dragging, setDragging] = useState(false);
  const [saved, setSaved] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  const compress = useCallback(async (img: Img, fmt: Format, q: number) => {
    setImages(p => p.map(i => i.id === img.id ? { ...i, status: "uploading", progress: 15 } : i));
    try {
      const fd = new FormData();
      fd.append("file", img.file);
      fd.append("format", fmt);
      fd.append("quality", q.toString());
      const r = await fetch("/api/compress", { method: "POST", body: fd });
      if (!r.ok) throw new Error();
      const { taskId } = await r.json();
      setImages(p => p.map(i => i.id === img.id ? { ...i, status: "processing", taskId, progress: 40 } : i));
      let a = 0;
      const poll = async () => {
        if (a++ > 40) { setImages(p => p.map(i => i.id === img.id ? { ...i, status: "error" } : i)); return; }
        const d = await (await fetch(`/api/task/${taskId}`)).json();
        if (d.status === "done") {
          const c = Math.round(img.originalSize * (0.15 + (1 - q / 100) * 0.45));
          setImages(p => p.map(i => i.id === img.id ? { ...i, status: "done", outputUrl: d.outputBlobUrl, compressedSize: c, progress: 100 } : i));
          setSaved(s => s + (img.originalSize - c));
        } else if (d.status === "failed") {
          setImages(p => p.map(i => i.id === img.id ? { ...i, status: "error", progress: 0 } : i));
        } else {
          setImages(p => p.map(i => i.id === img.id ? { ...i, progress: Math.min(i.progress + 7, 90) } : i));
          setTimeout(poll, 1500);
        }
      };
      setTimeout(poll, 800);
    } catch {
      setImages(p => p.map(i => i.id === img.id ? { ...i, status: "error" } : i));
    }
  }, []);

  const addFiles = useCallback((files: File[]) => {
    const v = files.filter(f => f.type.startsWith("image/") && f.size < 20971520);
    const n: Img[] = v.map(f => ({ id: crypto.randomUUID(), file: f, preview: URL.createObjectURL(f), status: "idle", originalSize: f.size, progress: 0 }));
    setImages(p => [...p, ...n].slice(0, 10));
    n.forEach(i => compress(i, format, quality));
  }, [format, quality, compress]);

  const done = images.filter(i => i.status === "done").length;
  const busy = images.filter(i => i.status === "uploading" || i.status === "processing").length;

  return (
    <main style={{ minHeight: "100vh", padding: "40px 24px", position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }} className="fade-in">
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(124,94,246,0.12)", border: "1px solid rgba(124,94,246,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
          <span style={{ fontSize: 12, color: "#a78bfa", fontWeight: 700 }}>⚡ IMAGECOMPRESS PRO v3.5 ULTRA</span>
        </div>
        <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16, background: "linear-gradient(135deg,#f0eeff 0%,#a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Стисни зображення<br />без втрати якості
        </h1>
        <p style={{ color: "#8b7fa8", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>До 10 фото · WebP/AVIF/JPEG/PNG · Автоматична обробка</p>
      </div>

      {images.length > 0 && (
        <div className="stats-row fade-in" style={{ marginBottom: 24 }}>
          <div className="stat-box"><h3>{images.length}</h3><p>Завантажено</p></div>
          <div className="stat-box"><h3 style={{ color: "#10b981" }}>{done}</h3><p>Готово</p></div>
          <div className="stat-box"><h3 style={{ color: "#f59e0b" }}>{busy}</h3><p>В обробці</p></div>
          <div className="stat-box"><h3>{fb(saved)}</h3><p>Зекономлено</p></div>
        </div>
      )}

      <div className="card fade-in" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: "#8b7fa8", fontWeight: 600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>Формат</p>
        <div className="format-grid">
          {(Object.keys(FL) as Format[]).map(f => (
            <button key={f} className={`format-btn${format === f ? " active" : ""}`} onClick={() => setFormat(f)}>{FL[f]}</button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#7c5ef6", marginTop: 4 }}>{FT[format]}</p>
        <p style={{ fontSize: 13, color: "#8b7fa8", fontWeight: 600, margin: "20px 0 10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Якість</p>
        <div className="slider-wrap">
          <span className="slider-label">Менший</span>
          <input type="range" className="slider" min={40} max={100} value={quality} onChange={e => setQuality(+e.target.value)} />
          <span className="slider-label">Якісніший</span>
          <span className="slider-value">{quality}%</span>
        </div>
      </div>

      <div className={`dropzone fade-in${dragging ? " active" : ""}`} style={{ marginBottom: 28 }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); addFiles(Array.from(e.dataTransfer.files)); }}
        onClick={() => ref.current?.click()}>
        <input ref={ref} type="file" accept="image/*" multiple style={{ display: "none" }} onChange={e => e.target.files && addFiles(Array.from(e.target.files))} />
        <span className="dropzone-icon">{dragging ? "📂" : "🖼️"}</span>
        <p className="dropzone-title">{dragging ? "Відпусти!" : "Перетягни фото сюди"}</p>
        <p className="dropzone-sub">або клікни · до 10 файлів · макс 20MB</p>
        <div style={{ marginTop: 20 }}>
          <button className="btn-primary" style={{ pointerEvents: "none" }}>Вибрати файли</button>
        </div>
      </div>

      {done > 0 && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }} className="fade-in">
          <p style={{ color: "#8b7fa8", fontSize: 14 }}><span style={{ color: "#10b981", fontWeight: 700 }}>{done}</span> готово</p>
          <button className="btn-primary" onClick={async () => {
            for (const i of images.filter(x => x.status === "done" && x.outputUrl)) {
              const a = document.createElement("a");
              a.href = i.outputUrl!;
              a.download = i.file.name.replace(/\.[^.]+$/, `.${format}`);
              a.click();
              await new Promise(r => setTimeout(r, 200));
            }
          }}>⬇️ Скачати всі ({FL[format]})</button>
        </div>
      )}

      {images.length > 0 && (
        <div className="preview-grid">
          {images.map(img => (
            <div key={img.id} className="preview-item">
              <div style={{ position: "relative" }}>
                <img src={img.preview} alt="" />
                <button onClick={() => setImages(p => p.filter(i => i.id !== img.id))}
                  style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,.6)", border: "none", color: "white", borderRadius: "50%", width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>✕</button>
                <div style={{ position: "absolute", top: 8, left: 8 }}>
                  {img.status === "done" && <span className="badge badge-green">✓ Готово</span>}
                  {(img.status === "uploading" || img.status === "processing") && <span className="badge badge-purple">⏳</span>}
                  {img.status === "error" && <span className="badge" style={{ background: "rgba(239,68,68,.15)", color: "#ef4444" }}>✕ Помилка</span>}
                </div>
              </div>
              <div className="preview-info">
                <p className="preview-name">{img.file.name}</p>
                {(img.status === "uploading" || img.status === "processing") && (
                  <div className="progress-bar"><div className="progress-fill" style={{ width: `${img.progress}%` }} /></div>
                )}
                <div className="preview-sizes">
                  <span className="before">{fb(img.originalSize)}</span>
                  {img.compressedSize && <><span style={{ opacity: .4 }}>→</span><span className="after">{fb(img.compressedSize)}</span></>}
                </div>
                {img.compressedSize && <span className="preview-saved">−{gs(img.originalSize, img.compressedSize)}</span>}
                {img.outputUrl && (
                  <a href={img.outputUrl} download={img.file.name.replace(/\.[^.]+$/, `.${format}`)}
                    style={{ display: "block", marginTop: 10, textAlign: "center", padding: "8px", background: "rgba(124,94,246,.12)", color: "#a78bfa", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                    ⬇️ Завантажити
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 60, color: "#4a4060", fontSize: 13 }}>
        ImageCompress Pro v3.5 ULTRA
      </div>
    </main>
  );
}
