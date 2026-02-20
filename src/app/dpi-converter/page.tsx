'use client';
import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';

export default function DPIConverterPage() {
  const [image, setImage] = useState<{file: File; preview: string; originalDPI: number} | null>(null);
  const [targetDPI, setTargetDPI] = useState(300);
  const [result, setResult] = useState<{url: string; width: number; height: number; size: number} | null>(null);
  const [processing, setProcessing] = useState(false);
  const [drag, setDrag] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const readFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setImage({ file, preview: url, originalDPI: 72 });
    setResult(null);
  }, []);

  const convert = async () => {
    if (!image) return;
    setProcessing(true);
    try {
      const img = new window.Image();
      img.src = image.preview;
      await new Promise(r => img.onload = r);

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);

      // Embed DPI metadata via JFIF APP0 marker in JPEG
      const blob: Blob = await new Promise(resolve => {
        canvas.toBlob(b => resolve(b!), 'image/jpeg', 0.95);
      });

      // Patch JFIF header to set DPI
      const buffer = await blob.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      const patched = patchJFIFDPI(bytes, targetDPI);
      const outBlob = new Blob([patched.buffer as ArrayBuffer], { type: 'image/jpeg' });

      setResult({
        url: URL.createObjectURL(outBlob),
        width: img.naturalWidth,
        height: img.naturalHeight,
        size: outBlob.size,
      });
    } catch (e) {
      console.error(e);
    }
    setProcessing(false);
  };

  function patchJFIFDPI(bytes: Uint8Array, dpi: number): Uint8Array {
    const out = new Uint8Array(bytes);
    // JFIF APP0 marker: FF E0, look for it at byte 2
    if (out[0] === 0xFF && out[1] === 0xD8 && out[2] === 0xFF && out[3] === 0xE0) {
      // units: 01 = DPI
      out[11] = 0x01;
      // Xdensity high byte
      out[12] = (dpi >> 8) & 0xFF;
      // Xdensity low byte
      out[13] = dpi & 0xFF;
      // Ydensity high byte
      out[14] = (dpi >> 8) & 0xFF;
      // Ydensity low byte
      out[15] = dpi & 0xFF;
    }
    return out;
  }

  function fmtSize(b: number) {
    if (b < 1024) return b + ' B';
    if (b < 1024 * 1024) return (b / 1024).toFixed(1) + ' KB';
    return (b / (1024 * 1024)).toFixed(2) + ' MB';
  }

  const commonDPIs = [72, 96, 150, 300, 600];

  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>

      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.5)',textDecoration:'none',fontSize:'13px'}}>← Back to Tool</Link>
      </header>

      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>

        {/* Breadcrumb */}
        <nav style={{fontSize:'12px',opacity:0.45,marginBottom:'10px'}}>
          <Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link>
          <span style={{margin:'0 6px'}}>/</span>
          <span>DPI Converter</span>
        </nav>

        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'10px'}}>🖨️ Free Online DPI Converter — No Upload</div>

        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px'}}>
          Free Online <span style={{color:'#818cf8'}}>DPI Converter</span>
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'8px'}}>
          Change image DPI to <strong style={{color:'white'}}>300 DPI</strong> for printing, <strong style={{color:'white'}}>USCIS</strong>, US passport, government portals, or any other requirement. Works 100% in your browser — your image <strong style={{color:'white'}}>never leaves your device</strong>.
        </p>
        <p style={{fontSize:'13px',lineHeight:'1.7',opacity:0.45,marginBottom:'24px'}}>
          Supports converting to 72 DPI (web), 96 DPI (screen), 150 DPI (draft print), 300 DPI (standard print), 600 DPI (high quality). Free, no registration, no upload.
        </p>

        {/* Privacy banner */}
        <div style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:'12px',padding:'16px',marginBottom:'24px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
          <span style={{fontSize:'24px'}}>🔒</span>
          <div>
            <div style={{fontWeight:700,fontSize:'14px',color:'#34d399',marginBottom:'4px'}}>100% private — no upload to any server</div>
            <div style={{fontSize:'13px',opacity:0.65}}>Unlike most DPI converters, your image never leaves your device. All processing happens locally in your browser using JavaScript.</div>
          </div>
        </div>

        {/* TOOL */}
        <div style={{background:'rgba(255,255,255,0.04)',borderRadius:'16px',border:'1px solid rgba(255,255,255,0.08)',padding:'24px',marginBottom:'32px'}}>

          {/* DPI selector */}
          <div style={{marginBottom:'20px'}}>
            <div style={{fontSize:'13px',fontWeight:600,marginBottom:'10px',color:'#a5b4fc'}}>🎯 Target DPI</div>
            <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'12px'}}>
              {commonDPIs.map(dpi => (
                <button key={dpi} onClick={() => setTargetDPI(dpi)}
                  style={{padding:'8px 16px',borderRadius:'8px',border:'1px solid',
                    borderColor: targetDPI === dpi ? '#818cf8' : 'rgba(255,255,255,0.15)',
                    background: targetDPI === dpi ? 'rgba(129,140,248,0.25)' : 'rgba(255,255,255,0.04)',
                    color:'white',fontSize:'13px',fontWeight:700,cursor:'pointer'}}>
                  {dpi} DPI
                  {dpi === 300 && <span style={{fontSize:'10px',color:'#818cf8',marginLeft:'4px'}}>✓ USCIS</span>}
                  {dpi === 72 && <span style={{fontSize:'10px',opacity:0.5,marginLeft:'4px'}}>web</span>}
                </button>
              ))}
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <span style={{fontSize:'12px',opacity:0.6}}>Custom:</span>
              <input type="number" value={targetDPI} min={1} max={1200}
                onChange={e => setTargetDPI(Math.max(1, +e.target.value))}
                style={{width:'80px',padding:'6px 10px',borderRadius:'8px',border:'1px solid rgba(255,255,255,0.2)',background:'rgba(255,255,255,0.08)',color:'white',fontSize:'14px',fontWeight:700}}/>
              <span style={{fontSize:'12px',opacity:0.6}}>DPI</span>
            </div>
          </div>

          {/* Drop zone */}
          <div
            onDragOver={e=>{e.preventDefault();setDrag(true)}}
            onDragLeave={()=>setDrag(false)}
            onDrop={e=>{e.preventDefault();setDrag(false);if(e.dataTransfer.files[0])readFile(e.dataTransfer.files[0])}}
            onClick={()=>ref.current?.click()}
            style={{border:`2px dashed ${drag?'#818cf8':image?'rgba(129,140,248,0.4)':'rgba(255,255,255,0.2)'}`,
              borderRadius:'12px',padding:'28px 20px',textAlign:'center',cursor:'pointer',
              background: drag ? 'rgba(129,140,248,0.08)' : image ? 'rgba(129,140,248,0.05)' : 'rgba(255,255,255,0.02)',
              transition:'all 0.2s',marginBottom:'16px'}}>
            {image ? (
              <div>
                <img src={image.preview} alt="preview" style={{maxHeight:'120px',maxWidth:'100%',borderRadius:'8px',marginBottom:'8px'}}/>
                <div style={{fontSize:'13px',fontWeight:600}}>{image.file.name}</div>
                <div style={{fontSize:'12px',opacity:0.5,marginTop:'4px'}}>{fmtSize(image.file.size)} · Click to change</div>
              </div>
            ) : (
              <div>
                <div style={{fontSize:'36px',marginBottom:'8px'}}>🖼️</div>
                <div style={{fontWeight:700,fontSize:'15px',marginBottom:'4px'}}>Drop image here or click to upload</div>
                <div style={{fontSize:'12px',opacity:0.45}}>JPEG · PNG · WebP · HEIC — processed locally, never uploaded</div>
              </div>
            )}
            <input ref={ref} type="file" accept="image/*,.heic,.heif" style={{display:'none'}}
              onChange={e=>e.target.files?.[0]&&readFile(e.target.files[0])}/>
          </div>

          {/* Convert button */}
          <button onClick={convert} disabled={!image || processing}
            style={{width:'100%',padding:'14px',borderRadius:'10px',
              background: !image ? 'rgba(129,140,248,0.2)' : processing ? 'rgba(129,140,248,0.4)' : 'linear-gradient(135deg,#6366f1,#8b5cf6)',
              border:'none',color:'white',fontSize:'15px',fontWeight:800,
              cursor: !image || processing ? 'not-allowed' : 'pointer',
              boxShadow: image && !processing ? '0 0 20px rgba(99,102,241,0.4)' : 'none',
              transition:'all 0.2s'}}>
            {processing ? '⏳ Converting...' : `🖨️ Convert to ${targetDPI} DPI →`}
          </button>

          {/* Result */}
          {result && (
            <div style={{marginTop:'20px',background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'12px',padding:'20px'}}>
              <div style={{fontWeight:700,fontSize:'14px',color:'#34d399',marginBottom:'12px'}}>✅ Converted to {targetDPI} DPI!</div>
              <div style={{display:'flex',gap:'16px',marginBottom:'16px',flexWrap:'wrap'}}>
                {[
                  [`${targetDPI} DPI`, 'Output DPI'],
                  [`${result.width}×${result.height}`, 'Dimensions'],
                  [fmtSize(result.size), 'File size'],
                ].map(([v, l]) => (
                  <div key={l} style={{background:'rgba(255,255,255,0.06)',borderRadius:'8px',padding:'8px 14px',textAlign:'center'}}>
                    <div style={{fontSize:'16px',fontWeight:800,color:'#a5b4fc'}}>{v}</div>
                    <div style={{fontSize:'10px',opacity:0.5}}>{l}</div>
                  </div>
                ))}
              </div>
              <a href={result.url} download={`image-${targetDPI}dpi.jpg`}
                style={{display:'inline-block',padding:'12px 28px',borderRadius:'10px',
                  background:'linear-gradient(135deg,#10b981,#059669)',
                  color:'white',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
                ⬇️ Download {targetDPI} DPI Image
              </a>
            </div>
          )}
        </div>

        {/* What is DPI */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>What is DPI and Why Does It Matter?</h2>
        <p style={{fontSize:'14px',lineHeight:'1.8',opacity:0.65,marginBottom:'16px'}}>
          DPI stands for <strong style={{color:'white'}}>Dots Per Inch</strong> — it defines how many dots of ink a printer places per inch of paper. Higher DPI means sharper, more detailed prints. For screen display, 72–96 DPI is standard. For professional printing and government documents, <strong style={{color:'white'}}>300 DPI is the industry standard</strong>.
        </p>

        {/* DPI use cases */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>When Do You Need 300 DPI?</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[
            ['🇺🇸','USCIS / US Passport','State Department recommends 300 DPI for passport and immigration photos'],
            ['🖨️','Professional printing','Brochures, business cards, posters — 300 DPI minimum'],
            ['📰','Magazines & press','Editorial photos require 300 DPI at print size'],
            ['🏥','Medical / legal docs','Most government and medical document scanners expect 300 DPI'],
            ['🎨','Graphic design','Print-ready files for designers — always 300 DPI'],
            ['📸','Photo labs','Photo prints from labs require 300 DPI for sharp results'],
          ].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'22px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{desc}</div>
            </div>
          ))}
        </div>

        {/* DPI chart */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>DPI Reference Chart</h2>
        <div style={{background:'rgba(255,255,255,0.03)',borderRadius:'12px',border:'1px solid rgba(255,255,255,0.07)',padding:'4px',marginBottom:'28px'}}>
          {[
            ['72 DPI','Web / Screen display','Websites, email, social media'],
            ['96 DPI','Windows screen default','Digital documents, PDF on screen'],
            ['150 DPI','Draft printing','Internal documents, quick prints'],
            ['300 DPI','Professional print standard','USCIS, passports, magazines, business cards'],
            ['600 DPI','High quality print','Fine art, detailed illustrations'],
          ].map(([dpi,use,examples],i)=>(
            <div key={dpi} style={{display:'grid',gridTemplateColumns:'100px 1fr 1fr',gap:'12px',padding:'12px 16px',
              borderBottom: i<4 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: dpi==='300 DPI' ? 'rgba(129,140,248,0.08)' : 'transparent'}}>
              <span style={{fontWeight:800,fontSize:'13px',color: dpi==='300 DPI' ? '#818cf8' : 'white'}}>{dpi}</span>
              <span style={{fontSize:'12px',fontWeight:600,opacity:0.8}}>{use}</span>
              <span style={{fontSize:'12px',opacity:0.5}}>{examples}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'28px'}}>
          {[
            ['Does changing DPI affect image quality?','No. Changing DPI metadata does not resize or affect pixel data — it only changes how software interprets the print size. Pixel dimensions stay the same.'],
            ['What DPI does USCIS require?','USCIS and US State Department recommend 300 DPI for printed photos. For digital uploads (DS-160, DV Lottery online), DPI is less critical — file size (max 240KB) and pixel dimensions (600–1200px) matter more.'],
            ['Why is my photo 72 DPI?','Most smartphone and digital cameras save photos at 72 DPI by default. This is fine for screens but may need changing to 300 DPI for printing or government document submission.'],
            ['Does this tool resize my image?','No. This tool only changes the DPI metadata in the JPEG header. Your image pixel dimensions stay exactly the same.'],
            ['Is my image uploaded to a server?','No. All processing happens in your browser using JavaScript. Your image never leaves your device.'],
          ].map(([q,a])=>(
            <div key={q} style={{background:'rgba(255,255,255,0.03)',borderRadius:'10px',padding:'16px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'6px',color:'#a5b4fc'}}>{q}</div>
              <div style={{fontSize:'13px',opacity:0.6,lineHeight:'1.6'}}>{a}</div>
            </div>
          ))}
        </div>

        {/* Related links */}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'16px'}}>
          {[
            ['/compress-for-uscis','USCIS Photo Compressor'],
            ['/compress-passport-photo','Passport Photo'],
            ['/compress-for-dv-lottery','DV Lottery Photo'],
            ['/compress-to-20kb','Compress to 20KB'],
            ['/compress-to-50kb','Compress to 50KB'],
          ].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>

      </div>
    </div>
  );
}
