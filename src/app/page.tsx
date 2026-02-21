"use client";
import './ticker.css';
import { useState, useCallback, useRef, useEffect } from 'react';
import FAQSchema from '@/components/FAQSchema';
import { compressImage, compressToTargetKB, Format } from '@/utils/compressor';

type Mode = 'quality' | 'exactkb';

interface Preset {
  name: string;
  emoji: string;
  format: Format;
  quality: number;
  targetKB?: number;
  maxDim?: number;
  desc: string;
}

const PRESETS: Preset[] = [
  { name:'Shopify', emoji:'🛍️', format:'webp', quality:0.82, desc:'2048px WebP <1MB' },
  { name:'Etsy',    emoji:'🎨', format:'jpeg', quality:0.85, desc:'2000px JPG <1MB' },
  { name:'Amazon',  emoji:'📦', format:'jpeg', quality:0.88, desc:'2000px JPG white bg' },
  { name:'Instagram',emoji:'📸',format:'jpeg', quality:0.90, desc:'1080px JPG' },
  { name:'Gov 20KB',emoji:'🪪', format:'jpeg', quality:0.5, targetKB:20, desc:'Passport/Docs 20KB' },
  { name:'50KB',    emoji:'📄', format:'jpeg', quality:0.5, targetKB:50, desc:'Forms & portals 50KB' },
];

const FMTS: [Format, string, string][] = [
  ['webp','WebP','70% smaller'],
  ['avif','AVIF','Smallest'],
  ['jpeg','JPEG','Compatible'],
  ['png','PNG','Lossless'],
];

type Img = {
  id: string; name: string; origSize: number;
  preview: string; file: File; status: 'pending'|'processing'|'done'|'error';
  compSize?: number; saved?: number; outUrl?: string;
};

function fmtSize(b: number) {
  if (b < 1024) return b + ' B';
  if (b < 1024*1024) return (b/1024).toFixed(1) + ' KB';

  return (b/(1024*1024)).toFixed(2) + ' MB';
}

const faqData = [
    { q: 'Is this image compressor really free?', a: '100% free. No signup, no credit card, no watermarks. Compress unlimited images at no cost.' },
    { q: 'What image formats are supported?', a: 'JPEG, JPG, PNG, and WebP formats are supported.' },
    { q: 'Will compressing reduce image quality?', a: 'Our tool uses smart compression to minimize visible quality loss. You can preview before downloading.' },
    { q: 'Can I compress images for Etsy, Shopify, or Amazon?', a: 'Yes. Set your target size to meet each platform requirements. Works for all major e-commerce platforms.' },
    { q: 'Does it work for USCIS and government form photos?', a: 'Yes. Compress your photo to under 240KB for USCIS N-400, DS-160 visa forms, and US passport applications.' },
    { q: 'Is my image stored on your servers?', a: 'No. All compression happens in your browser. Your images are never uploaded to our servers.' },
  ];

const TICKER_ITEMS = [
  '⚡ 100% Free — No Signup Required',
  '🔒 Files Never Leave Your Device',
  '📦 Compress for Shopify · Etsy · Amazon',
  '🎯 Compress to Exact KB — 20KB · 50KB · 100KB',
  '🖼️ WebP · AVIF · JPEG · PNG · HEIC Support',
  '📱 Works on All Devices — Mobile · Tablet · Desktop',
  '🚀 Instant Compression in Your Browser',
  '✅ No Upload · No Server · 100% Private',
  '🗜️ Batch Up to 50 Images at Once',
  '💾 Save Space — Average 70% Size Reduction',
];

export default function Home() {
  const [images, setImages] = useState<Img[]>([]);
  const [format, setFormat] = useState<Format>('webp');
  const [quality, setQuality] = useState(80);
  const [mode, setMode] = useState<Mode>('quality');
  const [targetKB, setTargetKB] = useState(20);
  const [drag, setDrag] = useState(false);
  const [proc, setProc] = useState(false);
  const [activePreset, setActivePreset] = useState<string|null>(null);
  const [compareImg, setCompareImg] = useState<Img|null>(null);
  const [comparePos, setComparePos] = useState(50);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const s = localStorage.getItem('cmp_settings');
      if (s) { const p = JSON.parse(s); setFormat(p.format||'webp'); setQuality(p.quality||80); setMode(p.mode||'quality'); setTargetKB(p.targetKB||20); }
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem('cmp_settings', JSON.stringify({format,quality,mode,targetKB})); } catch {}
  }, [format,quality,mode,targetKB]);

  const addFiles = useCallback((files: FileList|File[]) => {
    const arr = Array.from(files).filter(f=>
      f.type.startsWith('image/') ||
      f.name.toLowerCase().endsWith('.heic') ||
      f.name.toLowerCase().endsWith('.heif')
    ).slice(0,50);
    setImages(p=>[...p, ...arr.map(f=>({
      id: (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36)),
      name: f.name,
      origSize: f.size, preview: URL.createObjectURL(f),
      file: f, status: 'pending' as const,
    }))]);
  }, []);

  const applyPreset = (preset: Preset) => {
    setActivePreset(preset.name);
    setFormat(preset.format);
    setQuality(Math.round(preset.quality * 100));
    if (preset.targetKB) { setMode('exactkb'); setTargetKB(preset.targetKB); }
    else setMode('quality');
  };

  const compressAll = async () => {
    if (!images.length || proc) return;
    setProc(true);
    for (const img of images) {
      if (img.status !== 'pending') continue;
      setImages(p=>p.map(i=>i.id===img.id ? {...i, status:'processing'} : i));
      try {
        const result = mode === 'exactkb'
          ? await compressToTargetKB(img.file, format, targetKB)
          : await compressImage(img.file, format, quality/100);
        setImages(p=>p.map(i=>i.id===img.id ? {
          ...i, status:'done',
          compSize: result.compressedSize,
          saved: result.savedPercent,
          outUrl: URL.createObjectURL(result.file),
        } : i));
      } catch {
        setImages(p=>p.map(i=>i.id===img.id ? {...i, status:'error'} : i));
      }
    }
    setProc(false);
  };

  const done = images.filter(i=>i.status==='done').length;
  const getName = (img: Img) => img.name.replace(/\.[^.]+$/,'') + '.' + format;

  const downloadAll = () => {
    images.filter(i=>i.status==='done'&&i.outUrl).forEach(img => {
      const a = document.createElement('a');
      a.href = img.outUrl!; a.download = getName(img); a.click();
    });
  };

  const downloadZip = async () => {
    const done = images.filter(i=>i.status==='done'&&i.outUrl);
    if (!done.length) return;
    try {
      const { default: JSZip } = await import('https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm' as any);
      const zip = new JSZip();
      await Promise.all(done.map(async img => {
        const res = await fetch(img.outUrl!);
        const blob = await res.blob();
        zip.file(getName(img), blob);
      }));
      const content = await zip.generateAsync({ type: 'blob' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(content);
      a.download = 'compressed-images.zip';
      a.click();
    } catch {
      downloadAll();
    }
  };

  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,-apple-system,sans-serif',color:'white'}}>

      {/* TOP TICKER */}
      <div style={{background:'linear-gradient(90deg,#6366f1,#8b5cf6,#22d3ee)',padding:'9px 0',overflow:'hidden',whiteSpace:'nowrap',fontSize:'13px',fontWeight:600,color:'white',letterSpacing:'0.2px'}}>
        <div style={{display:'inline-block',animation:'ticker 60s linear infinite'}}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t,i)=>(
            <span key={i} style={{padding:'0 36px'}}>{t}</span>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header style={{background:'#0a0a14',borderBottom:'1px solid #1a1a2e',padding:'0 16px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'56px',position:'sticky',top:0,zIndex:50}}>
        <a href='/' style={{textDecoration:'none',fontWeight:800,fontSize:'18px',color:'#fff',letterSpacing:'-0.5px'}}>Compress<span style={{color:'#22d3ee'}}>20KB</span></a>
        <nav style={{display:'flex',gap:'2px',alignItems:'center'}}>
          {([['/?mode=quality','🗜️ Compress'],['/compress-for-shopify','🛍️ Shopify'],['/compress-passport-photo','🪪 Passport'],['/faq','FAQ']] as [string,string][]).map(([href,label])=>(
            <a key={href} href={href} style={{color:'#8888bb',textDecoration:'none',fontSize:'12.5px',fontWeight:500,padding:'5px 8px',borderRadius:'7px',whiteSpace:'nowrap'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color='#fff';(e.currentTarget as HTMLElement).style.background='#1a1a30'}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color='#8888bb';(e.currentTarget as HTMLElement).style.background='transparent'}}>{label}</a>
          ))}
        </nav>
        <a href='#compress' style={{background:'linear-gradient(135deg,#6366f1,#22d3ee)',color:'#fff',fontSize:'13px',fontWeight:800,padding:'9px 18px',borderRadius:'100px',whiteSpace:'nowrap',textDecoration:'none',flexShrink:0,boxShadow:'0 0 20px rgba(99,102,241,0.5)',border:'1px solid rgba(255,255,255,0.2)'}}>📦 Download ZIP</a>
      </header>

      {/* AD TOP 728x90 */}
      <div style={{display:'flex',justifyContent:'center',padding:'8px 0',background:'rgba(0,0,0,0.2)'}}>
        <div style={{width:'100%',maxWidth:'728px',height:'90px',background:'rgba(255,255,255,0.04)',border:'1px dashed rgba(255,255,255,0.12)',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',color:'rgba(255,255,255,0.2)'}}>ADVERTISEMENT · 728×90</div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="layout-row" style={{display:'flex',maxWidth:'1200px',margin:'0 auto',padding:'16px',gap:'16px',alignItems:'flex-start'}}>

        {/* LEFT TOOL */}
        <div className="main-col" style={{flex:'0 0 70%',maxWidth:'70%'}}>

          <h1 style={{fontSize:'26px',fontWeight:800,marginBottom:'4px',letterSpacing:'-0.5px'}}>
            Compress Image to <span style={{color:'#818cf8'}}>20KB</span> Free Online
          </h1>
          <p style={{fontSize:'13px',opacity:0.5,marginBottom:'16px'}}>100% Private · Files never leave your browser · No upload needed</p>

          {/* PRESETS */}
          <div style={{marginBottom:'16px'}}>
            <div style={{fontSize:'11px',fontWeight:600,opacity:0.5,textTransform:'uppercase',letterSpacing:'1px',marginBottom:'8px'}}>⚡ Quick Presets</div>
            <div className="preset-row" style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
              {PRESETS.map(pr=>(
                <button key={pr.name} onClick={()=>applyPreset(pr)}
                  style={{padding:'6px 12px',borderRadius:'20px',border:'1px solid',
                    borderColor: activePreset===pr.name ? '#818cf8' : 'rgba(255,255,255,0.15)',
                    background: activePreset===pr.name ? 'rgba(129,140,248,0.2)' : 'rgba(255,255,255,0.05)',
                    color:'white',fontSize:'12px',fontWeight:600,cursor:'pointer',
                    display:'flex',alignItems:'center',gap:'4px'}}>
                  <span>{pr.emoji}</span><span>{pr.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* MODE TABS */}
          <div style={{display:'flex',gap:'8px',marginBottom:'14px'}}>
            {([['quality','🎚️ Quality Mode'],['exactkb','🎯 Exact KB Mode']] as [Mode,string][]).map(([m,label])=>(
              <button key={m} onClick={()=>{setMode(m);setActivePreset(null);}}
                style={{padding:'8px 16px',borderRadius:'8px',border:'1px solid',
                  borderColor: mode===m ? '#818cf8' : 'rgba(255,255,255,0.15)',
                  background: mode===m ? 'rgba(129,140,248,0.25)' : 'transparent',
                  color:'white',fontSize:'13px',fontWeight:600,cursor:'pointer'}}>
                {label}
              </button>
            ))}
          </div>

          {/* FORMAT */}
          <div className="format-row" style={{display:'flex',gap:'8px',marginBottom:'14px'}}>
            {FMTS.map(([f,label,sub])=>(
              <button key={f} onClick={()=>setFormat(f)}
                style={{flex:1,padding:'10px 8px',borderRadius:'10px',border:'1px solid',
                  borderColor: format===f ? '#818cf8' : 'rgba(255,255,255,0.12)',
                  background: format===f ? 'rgba(129,140,248,0.2)' : 'rgba(255,255,255,0.04)',
                  color:'white',cursor:'pointer',textAlign:'center'}}>
                <div style={{fontSize:'13px',fontWeight:700}}>{label}</div>
                <div style={{fontSize:'10px',opacity:0.5,marginTop:'2px'}}>{sub}</div>
              </button>
            ))}
          </div>

          {/* QUALITY or EXACT KB */}
          {mode==='quality' ? (
            <div style={{marginBottom:'14px',background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'12px 16px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
                <span style={{fontSize:'13px',fontWeight:600}}>Quality</span>
                <span style={{fontSize:'13px',fontWeight:800,color:'#818cf8'}}>{quality}%</span>
              </div>
              <input type="range" min={10} max={100} value={quality} onChange={e=>setQuality(+e.target.value)}
                style={{width:'100%',accentColor:'#818cf8'}}/>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'10px',opacity:0.4,marginTop:'4px'}}>
                <span>Smaller file</span><span>Better quality</span>
              </div>
            </div>
          ) : (
            <div style={{marginBottom:'14px',background:'rgba(129,140,248,0.08)',borderRadius:'10px',padding:'12px 16px',border:'1px solid rgba(129,140,248,0.3)'}}>
              <div style={{fontSize:'13px',fontWeight:600,marginBottom:'10px',color:'#a5b4fc'}}>🎯 Target file size</div>
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'10px'}}>
                {[20,50,100,200].map(kb=>(
                  <button key={kb} onClick={()=>setTargetKB(kb)}
                    style={{padding:'6px 14px',borderRadius:'8px',border:'1px solid',
                      borderColor: targetKB===kb ? '#818cf8' : 'rgba(255,255,255,0.15)',
                      background: targetKB===kb ? 'rgba(129,140,248,0.3)' : 'rgba(255,255,255,0.05)',
                      color:'white',fontSize:'13px',fontWeight:700,cursor:'pointer'}}>
                    {kb} KB
                  </button>
                ))}
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                <span style={{fontSize:'12px',opacity:0.6}}>Custom:</span>
                <input type="number" value={targetKB} min={5} max={5000}
                  onChange={e=>setTargetKB(Math.max(5,+e.target.value))}
                  style={{width:'80px',padding:'4px 8px',borderRadius:'6px',border:'1px solid rgba(255,255,255,0.2)',background:'rgba(255,255,255,0.08)',color:'white',fontSize:'13px',fontWeight:700}}/>
                <span style={{fontSize:'12px',opacity:0.6}}>KB</span>
              </div>
            </div>
          )}

          {/* DROP ZONE */}
          <div id="compress"
            onDragOver={e=>{e.preventDefault();setDrag(true);}}
            onDragLeave={()=>setDrag(false)}
            onDrop={e=>{e.preventDefault();setDrag(false);addFiles(e.dataTransfer.files);}}
            onClick={()=>ref.current?.click()}
            style={{border:`2px dashed ${drag?'#818cf8':'rgba(255,255,255,0.2)'}`,
              borderRadius:'14px',padding:'32px 20px',textAlign:'center',cursor:'pointer',
              background: drag ? 'rgba(129,140,248,0.1)' : 'rgba(255,255,255,0.03)',
              transition:'all 0.2s',marginBottom:'14px'}}>
            <div style={{fontSize:'36px',marginBottom:'8px'}}>📁</div>
            <div style={{fontWeight:700,fontSize:'15px',marginBottom:'4px'}}>Drop images here or click to upload</div>
            <div style={{fontSize:'12px',opacity:0.45}}>JPG · PNG · WebP · AVIF · HEIC · Up to 50 files · Free</div>
            <input ref={ref} type="file" accept="image/*,.heic,.heif" multiple style={{display:'none'}}
              onChange={e=>e.target.files&&addFiles(e.target.files)}/>
          </div>

          {/* AD BETWEEN TOOL AND RESULTS */}
          {images.length > 0 && (
            <div style={{display:'flex',justifyContent:'center',marginBottom:'14px'}}>
              <div style={{width:'100%',maxWidth:'728px',height:'90px',background:'rgba(255,255,255,0.04)',border:'1px dashed rgba(255,255,255,0.1)',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',color:'rgba(255,255,255,0.2)'}}>ADVERTISEMENT · 728×90</div>
            </div>
          )}

          {/* IMAGE LIST */}
          {images.length > 0 && (
            <div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px',flexWrap:'wrap',gap:'8px'}}>
                <div style={{fontSize:'13px',fontWeight:600,opacity:0.7}}>{images.length} image{images.length>1?'s':''} · {done} compressed</div>
                <div style={{display:'flex',gap:'8px'}}>
                  {done > 0 && (
                    <button onClick={downloadZip}
                      style={{padding:'7px 16px',borderRadius:'8px',background:'rgba(16,185,129,0.2)',border:'1px solid rgba(16,185,129,0.4)',color:'#34d399',fontSize:'13px',fontWeight:700,cursor:'pointer'}}>
                      📦 ZIP All ({done})
                    </button>
                  )}
                  <button onClick={compressAll} disabled={proc}
                    style={{padding:'7px 20px',borderRadius:'8px',
                      background: proc ? 'rgba(129,140,248,0.3)' : 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                      border:'none',color:'white',fontSize:'13px',fontWeight:700,cursor:proc?'not-allowed':'pointer'}}>
                    {proc ? '⏳ Compressing...' : '⚡ Compress All'}
                  </button>
                </div>
              </div>

              {done > 0 && (
                <div style={{display:'flex',gap:'12px',marginBottom:'12px',flexWrap:'wrap'}}>
                  {[
                    [`${done}`, 'Compressed'],
                    [fmtSize(images.filter(i=>i.status==='done'&&i.compSize).reduce((a,i)=>a+(i.origSize-i.compSize!),0)), 'Space saved'],
                    [`${Math.round(images.filter(i=>i.status==='done'&&i.saved&&i.saved>0).reduce((a,i)=>a+(i.saved!||0),0)/Math.max(images.filter(i=>i.status==='done'&&i.saved&&i.saved>0).length,1))}%`, 'Avg reduction'],
                  ].map(([v,l],i)=>(
                    <div key={i} style={{background:'rgba(255,255,255,0.07)',borderRadius:'8px',padding:'8px 14px',textAlign:'center'}}>
                      <div style={{fontSize:'18px',fontWeight:800,color:'#a5b4fc'}}>{v}</div>
                      <div style={{fontSize:'10px',opacity:0.5}}>{l}</div>
                    </div>
                  ))}
                </div>
              )}

              {images.map(img=>(
                <div key={img.id} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'6px',border:'1px solid rgba(255,255,255,0.07)'}}>
                  <img src={img.preview} alt={img.name} style={{width:'44px',height:'44px',objectFit:'cover',borderRadius:'6px',flexShrink:0}}/>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:'12px',fontWeight:600,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{img.name}</div>
                    <div style={{fontSize:'11px',opacity:0.5,marginTop:'2px'}}>
                      {fmtSize(img.origSize)}
                      {img.compSize && <span style={{color:'#34d399'}}> → {fmtSize(img.compSize)} <span style={{fontWeight:700}}>(-{img.saved}%)</span></span>}
                    </div>
                  </div>
                  <div style={{flexShrink:0,fontSize:'13px'}}>
                    {img.status==='pending' && <span style={{opacity:0.35}}>⏸️ Ready</span>}
                    {img.status==='processing' && <span style={{color:'#fbbf24'}}>⏳ Processing…</span>}
                    {img.status==='error' && <span style={{color:'#f87171'}}>❌ Error</span>}
                    {img.status==='done' && img.outUrl && (
                      <div style={{display:'flex',gap:'6px',flexShrink:0}}>
                        <button onClick={()=>setCompareImg(img)}
                          style={{padding:'5px 10px',borderRadius:'7px',background:'rgba(99,102,241,0.2)',border:'1px solid rgba(99,102,241,0.35)',color:'#a5b4fc',fontSize:'12px',fontWeight:700,cursor:'pointer'}}>
                          👁️
                        </button>
                        <a href={img.outUrl} download={getName(img)}
                          style={{padding:'5px 12px',borderRadius:'7px',background:'rgba(16,185,129,0.2)',border:'1px solid rgba(16,185,129,0.35)',color:'#34d399',fontSize:'12px',fontWeight:700,textDecoration:'none'}}>
                          ⬇️ Save
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {images.length > 0 && images.some(i=>i.status==='pending') && (
            <button onClick={compressAll} disabled={proc}
              style={{width:'100%',padding:'14px',marginTop:'10px',borderRadius:'10px',
                background: proc ? 'rgba(129,140,248,0.3)' : 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                border:'none',color:'white',fontSize:'15px',fontWeight:800,cursor:proc?'not-allowed':'pointer',letterSpacing:'0.3px'}}>
              {proc ? '⏳ Compressing...' : `⚡ Compress ${images.filter(i=>i.status==='pending').length} Image${images.filter(i=>i.status==='pending').length>1?'s':''}`}
            </button>
          )}

        </div>

        {/* RIGHT ADS — 30% */}
        <div className="right-col" style={{flex:'0 0 28%',maxWidth:'28%',display:'flex',flexDirection:'column',gap:'12px',position:'sticky',top:'72px'}}>
          <div style={{width:'100%',minHeight:'280px',background:'rgba(255,255,255,0.04)',border:'1px dashed rgba(255,255,255,0.12)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',color:'rgba(255,255,255,0.2)',flexDirection:'column',gap:'4px'}}>
            <span>AD</span><span>300×600</span>
          </div>
          <div style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:'10px',padding:'14px'}}>
            <div style={{fontSize:'13px',fontWeight:700,color:'#34d399',marginBottom:'8px'}}>🔒 Privacy First</div>
            {['Your images stay on your device','No server upload ever','No account required','GDPR compliant by design'].map((t,i)=>(
              <div key={i} style={{fontSize:'11px',opacity:0.75,padding:'3px 0',borderBottom: i<3 ? '1px solid rgba(255,255,255,0.05)':'none'}}>✓ {t}</div>
            ))}
          </div>
          <div style={{width:'100%',height:'160px',background:'rgba(255,255,255,0.04)',border:'1px dashed rgba(255,255,255,0.12)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',color:'rgba(255,255,255,0.2)',flexDirection:'column',gap:'4px'}}>
            <span>AD</span><span>300×250</span>
          </div>
        </div>

      </div>

      {/* SEO CONTENT */}
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'20px 16px 10px'}}>
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'10px'}}>Why Compress Images to 20KB?</h2>
        <p style={{fontSize:'13px',lineHeight:'1.7',opacity:0.65,marginBottom:'12px'}}>
          Government portals in India, Pakistan, USA, Ukraine require documents and passport photos under 20KB or 50KB. Our tool compresses images to an exact file size without uploading anything to a server — your files stay 100% private on your device.
        </p>
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'10px'}}>Compress Images for Shopify, Etsy & Amazon</h2>
        <p style={{fontSize:'13px',lineHeight:'1.7',opacity:0.65,marginBottom:'12px'}}>
          Use our free Shopify preset to compress product images to WebP under 1MB. Unlike paid apps like App Compressor ($10/month) that have been reported to accidentally delete store photos, our tool processes everything locally — zero risk, zero cost.
        </p>
      </div>

      {/* BOTTOM AD */}
      <div style={{display:'flex',justifyContent:'center',padding:'8px 0 16px',background:'rgba(0,0,0,0.2)'}}>
        <div style={{width:'100%',maxWidth:'728px',height:'90px',background:'rgba(255,255,255,0.04)',border:'1px dashed rgba(255,255,255,0.12)',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',color:'rgba(255,255,255,0.2)'}}>ADVERTISEMENT · 728×90</div>
      </div>

      {/* BEFORE/AFTER COMPARE MODAL */}
      {compareImg && (
        <div onClick={()=>setCompareImg(null)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.85)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',padding:'20px'}}>
          <div onClick={e=>e.stopPropagation()} style={{background:'#1e1b4b',borderRadius:'16px',padding:'20px',maxWidth:'90vw',width:'600px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
              <div style={{fontSize:'14px',fontWeight:700}}>Before / After — {compareImg.name}</div>
              <button onClick={()=>setCompareImg(null)} style={{background:'none',border:'none',color:'white',fontSize:'20px',cursor:'pointer'}}>✕</button>
            </div>
            <div style={{position:'relative',overflow:'hidden',borderRadius:'10px',userSelect:'none'}}
              onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setComparePos(Math.round(((e.clientX-r.left)/r.width)*100));}}
              onTouchMove={e=>{const r=e.currentTarget.getBoundingClientRect();setComparePos(Math.round(((e.touches[0].clientX-r.left)/r.width)*100));}}>
              <img src={compareImg.outUrl} alt="after" style={{width:'100%',display:'block',borderRadius:'10px'}}/>
              <div style={{position:'absolute',inset:0,overflow:'hidden',width:`${comparePos}%`}}>
                <img src={compareImg.preview} alt="before" style={{width:`${10000/comparePos}%`,maxWidth:'none',display:'block',borderRadius:'10px'}}/>
              </div>
              <div style={{position:'absolute',top:0,bottom:0,left:`${comparePos}%`,width:'2px',background:'white',transform:'translateX(-50%)',cursor:'ew-resize'}}>
                <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',background:'white',borderRadius:'50%',width:'28px',height:'28px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',color:'#1e1b4b',fontWeight:900}}>⟺</div>
              </div>
              <div style={{position:'absolute',top:'8px',left:'8px',background:'rgba(0,0,0,0.6)',padding:'3px 8px',borderRadius:'6px',fontSize:'11px',fontWeight:700}}>BEFORE {fmtSize(compareImg.origSize)}</div>
              <div style={{position:'absolute',top:'8px',right:'8px',background:'rgba(16,185,129,0.8)',padding:'3px 8px',borderRadius:'6px',fontSize:'11px',fontWeight:700}}>AFTER {fmtSize(compareImg.compSize||0)}</div>
            </div>
            <div style={{marginTop:'12px',textAlign:'center',fontSize:'13px',opacity:0.5}}>Drag to compare · Click outside to close</div>
          </div>
        </div>
      )}

    </div>
    <FAQSchema faqs={faqData} />
  );
}