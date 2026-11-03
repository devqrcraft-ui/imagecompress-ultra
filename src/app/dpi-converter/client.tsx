'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { faq } from './faq';



export default function DPIConverterPage() {
  const [image, setImage] = useState<{file: File; preview: string} | null>(null);
  const [targetDPI, setTargetDPI] = useState(300);
  const [result, setResult] = useState<{url: string; width: number; height: number; size: number} | null>(null);
  const [processing, setProcessing] = useState(false);
  const [drag, setDrag] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  const readFile = useCallback((file: File) => {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Choose a JPEG, PNG, or WebP image.');
      return;
    }
    const url = URL.createObjectURL(file);
    setImage({ file, preview: url });
    setResult(null);
    setError(null);
  }, []);

  useEffect(() => {
    if (!image?.preview) return;
    return () => URL.revokeObjectURL(image.preview);
  }, [image?.preview]);

  useEffect(() => {
    if (!result?.url) return;
    return () => URL.revokeObjectURL(result.url);
  }, [result?.url]);

  const convert = async () => {
    if (!image) return;
    setProcessing(true);
    setError(null);
    try {
      const img = new window.Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('The selected image could not be decoded.'));
        img.src = image.preview;
      });

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('This browser could not create an image canvas.');
      ctx.drawImage(img, 0, 0);

      // Embed DPI metadata via JFIF APP0 marker in JPEG
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(b => b ? resolve(b) : reject(new Error('The browser could not encode the image.')), 'image/jpeg', 0.95);
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
      setError(e instanceof Error ? e.message : 'The image could not be converted.');
    } finally {
      setProcessing(false);
    }
  };

  function patchJFIFDPI(bytes: Uint8Array, dpi: number): Uint8Array {
    if (!Number.isInteger(dpi) || dpi < 1 || dpi > 0xFFFF) {
      throw new Error('DPI must be a whole number between 1 and 65535.');
    }
    const out = new Uint8Array(bytes);
    if (out.length < 18 || out[0] !== 0xFF || out[1] !== 0xD8 ||
        out[2] !== 0xFF || out[3] !== 0xE0 ||
        out[6] !== 0x4A || out[7] !== 0x46 || out[8] !== 0x49 ||
        out[9] !== 0x46 || out[10] !== 0x00) {
      throw new Error('The browser produced a JPEG without a supported JFIF header.');
    }
    out[13] = 0x01;
    out[14] = (dpi >> 8) & 0xFF;
    out[15] = dpi & 0xFF;
    out[16] = (dpi >> 8) & 0xFF;
    out[17] = dpi & 0xFF;
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
        <Link href="/" style={{color:'rgba(255,255,255,0.9)',textDecoration:'none',fontSize:'15px'}}>← Back to Tool</Link>
      </header>

      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>

        {/* Breadcrumb */}
        <nav style={{fontSize:'12px',opacity:0.64,marginBottom:'10px'}}>
          <Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link>
          <span style={{margin:'0 6px'}}>/</span>
          <span>DPI Converter</span>
        </nav>

        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'10px'}}>🖨️ Image DPI Converter Online — No Upload Required</div>

        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px'}}>
          Image <span style={{color:'#818cf8'}}>DPI Converter</span> — Change to 300 DPI Free
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'8px'}}>
          Set the print-density metadata in a JPEG. This changes neither pixel dimensions nor photo composition, and does not verify USCIS, passport, or other application rules. Processing runs in your browser — your image <strong style={{color:'white'}}>never leaves your device</strong>.
        </p>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.64,marginBottom:'24px'}}>
          Choose 72, 96, 150, 300, or 600 DPI metadata. The output is a JPEG and retains the same pixel dimensions; check the destination&apos;s exact requirements separately.
        </p>

        {/* Privacy banner */}
        <div style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:'12px',padding:'16px',marginBottom:'24px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
          <span style={{fontSize:'24px'}}>🔒</span>
          <div>
            <div style={{fontWeight:700,fontSize:'14px',color:'#34d399',marginBottom:'4px'}}>private — no upload to any server</div>
            <div style={{fontSize:'15px',opacity:0.65}}>Unlike most DPI converters, your image never leaves your device. All processing happens locally in your browser using JavaScript.</div>
          </div>
        </div>

        {/* TOOL */}
        <div style={{background:'rgba(255,255,255,0.04)',borderRadius:'16px',border:'1px solid rgba(255,255,255,0.08)',padding:'24px',marginBottom:'32px'}}>

          {/* DPI selector */}
          <div style={{marginBottom:'20px'}}>
            <div style={{fontSize:'15px',fontWeight:600,marginBottom:'10px',color:'#a5b4fc'}}>🎯 Target DPI</div>
            <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'12px'}}>
              {commonDPIs.map(dpi => (
                <button key={dpi} onClick={() => setTargetDPI(dpi)}
                  style={{padding:'8px 16px',borderRadius:'8px',border:'1px solid',
                    borderColor: targetDPI === dpi ? '#818cf8' : 'rgba(255,255,255,0.15)',
                    background: targetDPI === dpi ? 'rgba(129,140,248,0.25)' : 'rgba(255,255,255,0.04)',
                    color:'white',fontSize:'15px',fontWeight:700,cursor:'pointer'}}>
                  {dpi} DPI
                  {dpi === 300 && <span style={{fontSize:'10px',color:'#c7d2fe',marginLeft:'4px'}}>print</span>}
                  {dpi === 72 && <span style={{fontSize:'10px',opacity:0.68,marginLeft:'4px'}}>web</span>}
                </button>
              ))}
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <span style={{fontSize:'12px',opacity:0.72}}>Custom:</span>
              <input type="number" value={targetDPI} min={1} max={1200}
                onChange={e => setTargetDPI(Math.min(1200, Math.max(1, Math.trunc(Number(e.target.value) || 1))))}
                style={{width:'80px',padding:'6px 10px',borderRadius:'8px',border:'1px solid rgba(255,255,255,0.2)',background:'rgba(255,255,255,0.08)',color:'white',fontSize:'14px',fontWeight:700}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"dpi-converter","item":"https://www.compressto20kb.com/dpi-converter"}]}' }} />
              <span style={{fontSize:'12px',opacity:0.72}}>DPI</span>
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
                <img src={image.preview} alt="preview" style={{maxHeight:'120px',maxWidth:'100%',borderRadius:'8px',marginBottom:'8px'}} loading="lazy"/>
                <div style={{fontSize:'15px',fontWeight:600}}>{image.file.name}</div>
                <div style={{fontSize:'12px',opacity:0.68,marginTop:'4px'}}>{fmtSize(image.file.size)} · Click to change</div>
              </div>
            ) : (
              <div>
                <div style={{fontSize:'36px',marginBottom:'8px'}}>🖼️</div>
                <div style={{fontWeight:700,fontSize:'15px',marginBottom:'4px'}}>Drop image here or click to upload</div>
              <div style={{fontSize:'12px',opacity:0.64}}>JPEG · PNG · WebP in — saved as JPEG out, processed locally and never uploaded</div>
              </div>
            )}
              <input ref={ref} type="file" accept="image/jpeg,image/png,image/webp" style={{display:'none'}}
              onChange={e=>e.target.files?.[0]&&readFile(e.target.files[0])}/>
          </div>

          {/* Convert button */}
          <button onClick={convert} disabled={!image || processing}
            style={{width:'100%',padding:'14px',borderRadius:'10px',
              background: !image ? 'rgba(129,140,248,0.2)' : processing ? 'rgba(129,140,248,0.4)' : 'linear-gradient(135deg,#4f46e5,#6d28d9)',
              border:'none',color:'white',fontSize:'15px',fontWeight:800,
              cursor: !image || processing ? 'not-allowed' : 'pointer',
              boxShadow: image && !processing ? '0 0 20px rgba(99,102,241,0.4)' : 'none',
              transition:'all 0.2s'}}>
            {processing ? '⏳ Converting...' : `🖨️ Convert to ${targetDPI} DPI →`}
          </button>
          {error && <p role="alert" style={{color:'#fca5a5',fontSize:'14px',marginTop:'12px'}}>{error}</p>}

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
                    <div style={{fontSize:'10px',opacity:0.68}}>{l}</div>
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
          DPI stands for <strong style={{color:'white'}}>Dots Per Inch</strong>. It records the print density used to calculate physical print size from pixel dimensions. Changing this metadata does not add image detail or make a photo sharper on screen; the output keeps the same pixel dimensions.
        </p>

        {/* DPI use cases */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>When Should You Change DPI Metadata?</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[
            ['🖨️','Print layout','Set print density when a print workflow specifies a DPI value'],
            ['📐','Physical size','At fixed pixel dimensions, DPI metadata changes the calculated print size'],
            ['📄','Document workflow','Check whether the receiving service actually requires DPI metadata'],
            ['🔍','Image detail','For more detail, increase pixel dimensions from the original; DPI metadata alone cannot do this'],
            ['🎨','Design software','Use the exact density and pixel dimensions requested by the project'],
            ['📋','Applications','Follow the issuing authority’s photo rules; this tool does not verify them'],
          ].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'22px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'15px',marginBottom:'4px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.68}}>{desc}</div>
            </div>
          ))}
        </div>

        {/* DPI chart */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>DPI Reference Chart</h2>
        <div style={{background:'rgba(255,255,255,0.03)',borderRadius:'12px',border:'1px solid rgba(255,255,255,0.07)',padding:'4px',marginBottom:'28px'}}>
          {[
            ['72 DPI','Density metadata','At 1200 px, nominal print width is about 16.7 in'],
            ['96 DPI','Density metadata','At 1200 px, nominal print width is 12.5 in'],
            ['150 DPI','Density metadata','At 1200 px, nominal print width is 8 in'],
            ['300 DPI','Density metadata','At 1200 px, nominal print width is 4 in'],
            ['600 DPI','Density metadata','At 1200 px, nominal print width is 2 in'],
          ].map(([dpi,use,examples],i)=>(
            <div key={dpi} style={{display:'grid',gridTemplateColumns:'100px 1fr 1fr',gap:'12px',padding:'12px 16px',
              borderBottom: i<4 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: dpi==='300 DPI' ? 'rgba(129,140,248,0.08)' : 'transparent'}}>
              <span style={{fontWeight:800,fontSize:'15px',color: dpi==='300 DPI' ? '#c7d2fe' : 'white'}}>{dpi}</span>
              <span style={{fontSize:'12px',fontWeight:600,opacity:0.8}}>{use}</span>
              <span style={{fontSize:'12px',opacity:0.68}}>{examples}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'28px'}}>
          {faq.map(([q,a])=>(
            <div key={q} style={{background:'rgba(255,255,255,0.03)',borderRadius:'10px',padding:'16px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'6px',color:'#a5b4fc'}}>{q}</div>
              <div style={{fontSize:'15px',opacity:0.72,lineHeight:'1.6'}}>{a}</div>
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
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>

      </div>
    </div>
  );
}
