"use client";
import { useState, useCallback, useRef, useEffect } from 'react';
import { compressImage, compressToTargetKB, Format } from '@/utils/compressor';

type Mode = 'quality' | 'exactkb';

interface Preset {
  name: string;
  emoji: string;
  format: Format;
  quality: number;
  targetKB?: number;
  desc: string;
}

const PRESETS: Preset[] = [
  { name:'Shopify', emoji:'🛍️', format:'webp', quality:0.82, desc:'WebP, 82% quality' },
  { name:'Etsy',    emoji:'🎨', format:'jpeg', quality:0.85, desc:'JPEG, 85% quality' },
  { name:'Amazon',  emoji:'📦', format:'jpeg', quality:0.88, desc:'JPEG, 88% quality' },
  { name:'Instagram',emoji:'📸',format:'jpeg', quality:0.90, desc:'JPEG, 90% quality' },
  { name:'Gov 20KB',emoji:'🪪', format:'jpeg', quality:0.5, targetKB:20, desc:'20KB or under' },
  { name:'50KB',    emoji:'📄', format:'jpeg', quality:0.5, targetKB:50, desc:'50KB or under' },
];

const FMTS: [Format, string, string][] = [
  ['webp','WebP','Smaller than JPEG'],
  ['avif','AVIF','Smallest'],
  ['jpeg','JPEG','Compatible'],
  ['png','PNG','Lossless'],
];

type Img = {
  id: string; name: string; origSize: number;
  preview: string; file: File; status: 'pending'|'processing'|'done'|'error';
  compSize?: number; saved?: number; outUrl?: string;
  outBytes?: number; limitKB?: number; unchanged?: boolean; ms?: number; outFmt?: string;
  prog?: number; plabel?: string; t0?: number; err?: string;
};

function fmtSize(b: number) {
  if (b < 1024) return b + ' B';
  if (b < 1024*1024) return (b/1024).toFixed(1) + ' KB';

  return (b/(1024*1024)).toFixed(2) + ' MB';
}

export default function CompressorTool({ initialTargetKB }: { initialTargetKB?: number }) {
  const [images, setImages] = useState<Img[]>([]);
  const [format, setFormat] = useState<Format>('webp');
  const [quality, setQuality] = useState(80);
  const [mode, setMode] = useState<Mode>('quality');
  const [targetKB, setTargetKB] = useState(initialTargetKB ?? 20);
  const [drag, setDrag] = useState(false);
  const [proc, setProc] = useState(false);
  const [activePreset, setActivePreset] = useState<string|null>(null);
  const [compareImg, setCompareImg] = useState<Img|null>(null);
  const [comparePos, setComparePos] = useState(50);
  const [clock, setClock] = useState(Date.now());
  const [index, setIndex] = useState(0);
  const [totals, setTotals] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!proc) return;
    const id = setInterval(() => setClock(Date.now()), 400);
    return () => clearInterval(id);
  }, [proc]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlTarget = Number(params.get('target'));
    if (params.get('mode') === 'exactkb' && Number.isFinite(urlTarget)) {
      setMode('exactkb');
      setTargetKB(Math.min(5000, Math.max(5, Math.round(urlTarget))));
      return;
    }
    try {
      const s = localStorage.getItem('cmp_settings');
      if (!s) return;
      const p = JSON.parse(s);
      setFormat(p.format||'webp');
      setQuality(p.quality||80);
      setMode(p.mode||'quality');
      if (initialTargetKB === undefined) setTargetKB(p.targetKB||20);
    } catch {}
  }, [initialTargetKB]);

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

  useEffect(()=>{
    const onPaste = (e: ClipboardEvent) => {
      const files = e.clipboardData?.files;
      if (files && files.length) addFiles(files);
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [addFiles]);

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
    setClock(Date.now());
    const todo = images.filter(i => i.status === 'pending');
    setTotals(todo.length);
    let finished = 0;
    for (const img of todo) {
      setIndex(finished + 1);
      setImages(p=>p.map(i=>i.id===img.id ? {...i, status:'processing', prog:0.04, plabel:'Starting…', t0:Date.now()} : i));
      let lastPaint = 0;
      try {
        const t0 = performance.now();
        const onProgress = (fraction: number, label: string) => {
          const now = performance.now();
          if (now - lastPaint < 90 && fraction < 1) return;
          lastPaint = now;
          setImages(p=>p.map(i=>i.id===img.id ? {...i, prog:fraction, plabel:label} : i));
        };
        const result = mode === 'exactkb'
          ? await compressToTargetKB(img.file, format, targetKB, onProgress)
          : await compressImage(img.file, format, quality/100, onProgress);
        setImages(p=>p.map(i=>i.id===img.id ? {
          ...i, status:'done', prog:1, plabel:undefined,
          compSize: result.compressedSize,
          saved: result.savedPercent,
          outUrl: URL.createObjectURL(result.file),
          outBytes: result.file.size,
          limitKB: mode === 'exactkb' ? targetKB : undefined,
          unchanged: !!result.unchanged,
          ms: Math.round(performance.now() - t0),
          outFmt: result.file.type || 'image/' + format,
        } : i));
      } catch (e) {
        setImages(p=>p.map(i=>i.id===img.id ? {...i, status:'error', prog:undefined, plabel:undefined, err: e instanceof Error ? e.message : 'Failed'} : i));
      }
      finished++;
    }
    setProc(false);
  };

  const done = images.filter(i=>i.status==='done').length;
  const doneImgs = images.filter(i=>i.status==='done' && i.compSize !== undefined);
  const totalIn = doneImgs.reduce((s,i)=>s+i.origSize,0);
  const totalOut = doneImgs.reduce((s,i)=>s+(i.compSize||0),0);
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
    <div style={{background:'#0f0c29',color:'#e2e8f0',borderRadius:'16px',padding:'18px 16px'}}>
    <style>{`@media (max-width: 600px) {
        .zip-btn { font-size: 11px !important; padding: 7px 10px !important; }
        .format-row { gap: 4px !important; }
        .preset-row { gap: 6px !important; }
      }
      `}</style>

      {/* TECH TRUST BLOCK */}
      <div style={{background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.2)',borderRadius:'10px',padding:'12px 16px',marginBottom:'16px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
        <span style={{fontSize:'20px',flexShrink:0}}>⚙️</span>
        <div>
          <div style={{fontSize:'15px',fontWeight:700,color:'#34d399',marginBottom:'4px'}}>How compression works — zero upload</div>
          <div style={{fontSize:'12px',opacity:0.65,lineHeight:1.6}}>All processing runs directly in your browser via <strong style={{color:'rgba(255,255,255,0.8)'}}>its own image decoding and encoding APIs</strong>. No pixels are ever sent to any server, so the tool works for passport photos, visa documents and other sensitive images.</div>
          <span style={{padding:'6px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.4)',background:'rgba(99,102,241,0.15)',color:'#a5b4fc',fontSize:'12px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'4px',whiteSpace:'nowrap'}}>📦 ZIP</span>
        </div>
      </div>

      {/* PRESETS */}
      <div style={{marginBottom:'16px'}}>
        <div style={{fontSize:'11px',fontWeight:600,opacity:0.68,textTransform:'uppercase',letterSpacing:'1px',marginBottom:'8px'}}>⚡ Quick Presets</div>
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

      {/* SIMPLE / ADVANCED TOGGLE */}
      <div style={{display:'flex',gap:'0',marginBottom:'16px',background:'rgba(255,255,255,0.05)',borderRadius:'10px',padding:'3px',border:'1px solid rgba(255,255,255,0.08)'}}>
        {([['simple','⚡ Simple'],['advanced','⚙️ Advanced']] as ['simple'|'advanced',string][]).map(([m,label])=>(
          <button key={m} onClick={()=>{if(m==='simple'){setMode('exactkb');} else {setMode('quality');}}}
            style={{flex:1,padding:'8px 0',borderRadius:'8px',border:'none',
              background: (m==='simple'&&mode==='exactkb')||(m==='advanced'&&mode==='quality') ? 'rgba(129,140,248,0.3)' : 'transparent',
              color:'white',fontSize:'15px',fontWeight:700,cursor:'pointer',transition:'background 0.2s'}}>
            {label}
          </button>
        ))}
      </div>

      {/* MODE TABS */}
      <div style={{display:'flex',gap:'8px',marginBottom:'14px'}}>
        {([['quality','🎚️ Quality Mode'],['exactkb','🎯 Target KB Mode']] as [Mode,string][]).map(([m,label])=>(
          <button key={m} onClick={()=>{setMode(m);setActivePreset(null);}}
            style={{padding:'8px 16px',borderRadius:'8px',border:'1px solid',
              borderColor: mode===m ? '#818cf8' : 'rgba(255,255,255,0.15)',
              background: mode===m ? 'rgba(129,140,248,0.25)' : 'transparent',
              color:'white',fontSize:'15px',fontWeight:600,cursor:'pointer'}}>
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
            <div style={{fontSize:'15px',fontWeight:700}}>{label}</div>
            <div style={{fontSize:'10px',opacity:0.68,marginTop:'2px'}}>{sub}</div>
          </button>
        ))}
      </div>

      {/* QUALITY or TARGET KB */}
      {mode==='quality' ? (
        <div style={{marginBottom:'14px',background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'12px 16px'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
            <span style={{fontSize:'15px',fontWeight:600}}>Quality</span>
            <span style={{fontSize:'15px',fontWeight:800,color:'#818cf8'}}>{quality}%</span>
          </div>
          <input type="range" min={10} max={100} value={quality} onChange={e=>setQuality(+e.target.value)} aria-label="Compression quality percentage"
            style={{width:'100%',accentColor:'#818cf8'}}/>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:'10px',opacity:0.62,marginTop:'4px'}}>
            <span>Smaller file</span><span>Better quality</span>
          </div>
        </div>
      ) : (
        <div style={{marginBottom:'14px',background:'rgba(129,140,248,0.08)',borderRadius:'10px',padding:'12px 16px',border:'1px solid rgba(129,140,248,0.3)'}}>
          <div style={{fontSize:'15px',fontWeight:600,marginBottom:'10px',color:'#a5b4fc'}}>🎯 Target file size</div>
          <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'10px'}}>
            {[20,50,100,200].map(kb=>(
              <button key={kb} onClick={()=>setTargetKB(kb)}
                style={{padding:'6px 14px',borderRadius:'8px',border:'1px solid',
                  borderColor: targetKB===kb ? '#818cf8' : 'rgba(255,255,255,0.15)',
                  background: targetKB===kb ? 'rgba(129,140,248,0.3)' : 'rgba(255,255,255,0.05)',
                  color:'white',fontSize:'15px',fontWeight:700,cursor:'pointer'}}>
                {kb} KB
              </button>
            ))}
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <span style={{fontSize:'12px',opacity:0.72}}>Custom:</span>
            <input type="number" value={targetKB} min={5} max={5000}
              onChange={e=>setTargetKB(Math.max(5,+e.target.value))}
              style={{width:'80px',padding:'4px 8px',borderRadius:'6px',border:'1px solid rgba(255,255,255,0.2)',background:'rgba(255,255,255,0.08)',color:'white',fontSize:'15px',fontWeight:700}}/>
            <span style={{fontSize:'12px',opacity:0.72}}>KB</span>
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
        <div style={{fontSize:'12px',opacity:0.64}}>JPG · PNG · WebP · AVIF · HEIC · Up to 50 files · Free</div>
        <div style={{fontSize:'11px',opacity:0.62,marginTop:'6px'}}>or press Ctrl+V / ⌘V to paste an image from the clipboard</div>
        <input ref={ref} type="file" accept="image/*,.heic,.heif" multiple style={{display:'none'}}
          onChange={e=>e.target.files&&addFiles(e.target.files)}/>
      </div>

      {/* HOW IT WORKS */}
      {images.length === 0 && (
        <div style={{display:'flex',gap:'0',marginBottom:'20px',background:'rgba(255,255,255,0.03)',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)'}}>
          {[
            {icon:'📁',step:'1',title:'Drop your image',desc:'JPG, PNG, WebP, HEIC — up to 50 files'},
            {icon:'🎯',step:'2',title:'Choose mode',desc:'Quality slider or target KB size'},
            {icon:'⬇️',step:'3',title:'Download free',desc:'Instant — no upload, no account'},
          ].map((s,i)=>(
            <div key={i} style={{flex:1,padding:'16px 12px',textAlign:'center',borderRight: i<2 ? '1px solid rgba(255,255,255,0.06)' : 'none'}}>
              <div style={{fontSize:'24px',marginBottom:'6px'}}>{s.icon}</div>
              <div style={{fontSize:'11px',fontWeight:800,color:'#818cf8',letterSpacing:'1px',marginBottom:'4px'}}>STEP {s.step}</div>
              <div style={{fontSize:'15px',fontWeight:700,marginBottom:'4px'}}>{s.title}</div>
              <div style={{fontSize:'11px',opacity:0.64,lineHeight:1.4}}>{s.desc}</div>
            </div>
          ))}
        </div>
      )}

      {/* IMAGE LIST */}
      {images.length > 0 && (
        <div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px',flexWrap:'wrap',gap:'8px'}}>
            <div style={{fontSize:'15px',fontWeight:600,opacity:0.7}}>{images.length} image{images.length>1?'s':''} · {done} compressed</div>
            <div style={{display:'flex',gap:'8px'}}>
              {done > 0 && (
                <button onClick={downloadZip} className="zip-btn"
                  style={{padding:'7px 16px',borderRadius:'8px',background:'rgba(16,185,129,0.2)',border:'1px solid rgba(16,185,129,0.4)',color:'#34d399',fontSize:'15px',fontWeight:700,cursor:'pointer'}}>
                  📦 ZIP All ({done})
                </button>
              )}
              <button onClick={compressAll} disabled={proc}
                style={{padding:'7px 20px',borderRadius:'8px',
                  background: proc ? 'rgba(129,140,248,0.3)' : 'linear-gradient(135deg,#4f46e5,#6d28d9)',
                  border:'none',color:'white',fontSize:'15px',fontWeight:700,cursor:proc?'not-allowed':'pointer'}}>
                {proc ? `⏳ Compressing ${index} of ${totals}…` : '⚡ Compress All'}
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
                  <div style={{fontSize:'10px',opacity:0.68}}>{l}</div>
                </div>
              ))}
            </div>
          )}

          {doneImgs.length > 0 && (
            <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'10px 16px',background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:'10px',padding:'12px 16px',marginBottom:'10px',fontSize:'13px'}}>
              <strong style={{color:'#34d399',fontWeight:800}}>{doneImgs.length} file{doneImgs.length>1?'s':''} processed</strong>
              <span style={{fontVariantNumeric:'tabular-nums'}}>{fmtSize(totalIn)} → <strong>{fmtSize(totalOut)}</strong></span>
              <span style={{color:'#34d399',fontWeight:700}}>{totalIn>0?Math.round((1-totalOut/totalIn)*100):0}% smaller</span>
              <span style={{opacity:0.7,fontVariantNumeric:'tabular-nums'}}>{(totalIn-totalOut).toLocaleString('en-US')} bytes saved</span>
              <button onClick={()=>document.getElementById('compress')?.scrollIntoView({behavior:'smooth',block:'center'})}
                style={{marginLeft:'auto',padding:'8px 14px',borderRadius:'8px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.2)',color:'white',fontSize:'13px',fontWeight:700}}>
                + Add more
              </button>
            </div>
          )}
          {images.map(img=>(
            <div key={img.id} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'6px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <img src={img.preview} alt={img.name} style={{width:'44px',height:'44px',objectFit:'cover',borderRadius:'6px',flexShrink:0}} loading="lazy"/>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:'12px',fontWeight:600,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{img.name}</div>
                <div style={{fontSize:'11px',opacity:0.68,marginTop:'2px'}}>
                  {fmtSize(img.origSize)}
                  {img.compSize && <span style={{color:'#34d399'}}> → {fmtSize(img.compSize)} <span style={{fontWeight:700}}>(-{img.saved}%)</span></span>}
                </div>
                {img.status === 'done' && img.outBytes !== undefined && (
                  <div style={{fontSize:'11px',marginTop:'3px',fontVariantNumeric:'tabular-nums',color: img.limitKB && img.outBytes > img.limitKB*1024 ? '#fbbf24' : 'rgba(255,255,255,0.55)'}}>
                    {img.outBytes.toLocaleString('en-US')} bytes out
                    {' · '}{img.outFmt?.replace('image/','').toUpperCase()}
                    {img.ms !== undefined && <> · {img.ms} ms</>}
                    {img.limitKB && (()=>{const pct=Math.min(100,Math.round((img.outBytes||0)/(img.limitKB*1024)*100));const over=(img.outBytes||0)>img.limitKB*1024;return(
                      <div style={{marginTop:'5px',height:'5px',borderRadius:'3px',background:'rgba(255,255,255,0.12)',overflow:'hidden',maxWidth:'280px'}}>
                        <div style={{height:'100%',width:pct+'%',background:over?'#fbbf24':'linear-gradient(90deg,#34d399,#10b981)'}}/>
                      </div>);})()}
                    {img.limitKB && (img.unchanged
                      ? <> · already under {img.limitKB} KB, left unchanged</>
                      : img.outBytes <= img.limitKB*1024
                        ? <> · fits under your {img.limitKB} KB limit</>
                        : <> · closest fit above {img.limitKB} KB</>)}
                  </div>
                )}
                {img.status==='processing' && (
                  <div style={{marginTop:'8px'}}>
                    <div className="cmp-track">
                      <div className="cmp-fill" style={{width:Math.max(4,Math.round((img.prog||0)*100))+'%'}}/>
                      <div className="cmp-shine"/>
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:'8px',marginTop:'6px',fontSize:'12px',color:'#c7d2fe'}}>
                      <span className="cmp-gear">⚙️</span>
                      <span style={{fontWeight:700,fontVariantNumeric:'tabular-nums'}}>{Math.round((img.prog||0)*100)}%</span>
                      <span style={{opacity:0.75,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{img.plabel||'Working…'}</span>
                      <span style={{marginLeft:'auto',opacity:0.72,fontVariantNumeric:'tabular-nums',flexShrink:0}}>
                        {img.t0 ? (Math.max(0, clock-img.t0)/1000).toFixed(1)+'s' : ''}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div style={{flexShrink:0,fontSize:'15px'}}>
                {img.status==='pending' && <span style={{opacity:0.62}}>⏸️ Ready</span>}
                {img.status==='error' && <span style={{color:'#f87171',fontSize:'12px'}}>❌ {img.err || 'Error'}</span>}
                {img.status==='done' && img.outUrl && (
                  <div style={{display:'flex',gap:'6px',flexShrink:0}}>
                    <button onClick={()=>setCompareImg(img)}
                      style={{padding:'5px 10px',borderRadius:'7px',background:'rgba(99,102,241,0.2)',border:'1px solid rgba(99,102,241,0.35)',color:'#a5b4fc',fontSize:'12px',fontWeight:700,cursor:'pointer'}}>
                      👁️
                    </button>
                    <a href={img.outUrl} download={getName(img)}
                      style={{padding:'7px 16px',borderRadius:'7px',background:'rgba(16,185,129,0.2)',border:'1px solid rgba(16,185,129,0.35)',color:'#34d399',fontSize:'15px',fontWeight:700,textDecoration:'none'}}>
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
            background: proc ? 'rgba(129,140,248,0.3)' : 'linear-gradient(135deg,#4f46e5,#6d28d9)',
            border:'none',color:'white',fontSize:'15px',fontWeight:800,cursor:proc?'not-allowed':'pointer',letterSpacing:'0.3px'}}>
          {proc ? `⏳ Compressing ${index} of ${totals}…` : `⚡ Compress ${images.filter(i=>i.status==='pending').length} Image${images.filter(i=>i.status==='pending').length>1?'s':''}`}
        </button>
      )}

      {/* BEFORE/AFTER COMPARE MODAL */}
      {compareImg && (
        <div onClick={()=>setCompareImg(null)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.85)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',padding:'20px'}}>
          <div onClick={e=>e.stopPropagation()} style={{background:'#1e1b4b',borderRadius:'16px',padding:'20px',maxWidth:'90vw',width:'600px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
              <div style={{fontSize:'14px',fontWeight:700}}>Before / After — {compareImg.name}</div>
              <button onClick={()=>setCompareImg(null)} style={{background:'none',border:'none',color:'white',fontSize:'20px',cursor:'pointer'}}>✕</button>
            </div>
            <div style={{position:'relative',overflow:'hidden',borderRadius:'10px',userSelect:'none',touchAction:'none'}}
              onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setComparePos(Math.min(98,Math.max(2,Math.round(((e.clientX-r.left)/r.width)*100))));}}
              onTouchMove={e=>{e.preventDefault();const r=e.currentTarget.getBoundingClientRect();setComparePos(Math.min(98,Math.max(2,Math.round(((e.touches[0].clientX-r.left)/r.width)*100))));}}>
              <img src={compareImg.outUrl} alt="after" style={{width:'100%',display:'block',borderRadius:'10px'}} loading="lazy"/>
              <div style={{position:'absolute',inset:0,overflow:'hidden',width:`${comparePos}%`}}>
                <img src={compareImg.preview} alt="before" style={{width:`${10000/comparePos}%`,maxWidth:'none',display:'block',borderRadius:'10px'}} loading="lazy"/>
              </div>
              <div style={{position:'absolute',top:0,bottom:0,left:`${comparePos}%`,width:'2px',background:'white',transform:'translateX(-50%)',cursor:'ew-resize'}}>
                <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',background:'white',borderRadius:'50%',width:'28px',height:'28px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',color:'#1e1b4b',fontWeight:900}}>{'|'}</div>
              </div>
              <div style={{position:'absolute',top:'8px',left:'8px',background:'rgba(0,0,0,0.6)',padding:'3px 8px',borderRadius:'6px',fontSize:'11px',fontWeight:700}}>BEFORE {fmtSize(compareImg.origSize)}</div>
              <div style={{position:'absolute',top:'8px',right:'8px',background:'rgba(16,185,129,0.8)',padding:'3px 8px',borderRadius:'6px',fontSize:'11px',fontWeight:700}}>AFTER {fmtSize(compareImg.compSize||0)}</div>
            </div>
            <div style={{marginTop:'12px',textAlign:'center',fontSize:'15px',opacity:0.68}}>Drag to compare · Click outside to close</div>
          </div>
        </div>
      )}
    </div>
  );
}
