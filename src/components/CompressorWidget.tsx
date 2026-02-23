"use client";
import { useState, useCallback, useRef } from 'react';
import { compressImage, compressToTargetKB, Format } from '@/utils/compressor';
type Mode = 'quality' | 'exactkb';
interface CompressorWidgetProps { defaultMode?: Mode; defaultTargetKB?: number; defaultFormat?: Format; defaultQuality?: number; }
const FMTS: [Format, string, string][] = [['webp','WebP','70% smaller'],['avif','AVIF','Smallest'],['jpeg','JPEG','Compatible'],['png','PNG','Lossless']];
function fmtSize(b: number) { if(b<1024)return b+' B'; if(b<1024*1024)return(b/1024).toFixed(1)+' KB'; return(b/(1024*1024)).toFixed(2)+' MB'; }
type Img = { id:string;name:string;origSize:number;preview:string;file:File;status:'pending'|'processing'|'done'|'error';compSize?:number;saved?:number;outUrl?:string; };
function getName(img:Img){const dot=img.name.lastIndexOf('.');const base=dot>0?img.name.slice(0,dot):img.name;return base+'-compressed.jpg';}
export default function CompressorWidget({defaultMode='quality',defaultTargetKB=20,defaultFormat='webp',defaultQuality=82}:CompressorWidgetProps){
  const [images,setImages]=useState<Img[]>([]);
  const [format,setFormat]=useState<Format>(defaultFormat);
  const [quality,setQuality]=useState(defaultQuality);
  const [mode,setMode]=useState<Mode>(defaultMode);
  const [targetKB,setTargetKB]=useState(defaultTargetKB);
  const [drag,setDrag]=useState(false);
  const [proc,setProc]=useState(false);
  const ref=useRef<HTMLInputElement>(null);
  const addFiles=useCallback((files:FileList|File[])=>{
    const arr=Array.from(files).filter(f=>f.type.startsWith('image/')||f.name.toLowerCase().endsWith('.heic')||f.name.toLowerCase().endsWith('.heif')).slice(0,50);
    setImages(p=>[...p,...arr.map(f=>({id:crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2),name:f.name,origSize:f.size,preview:URL.createObjectURL(f),file:f,status:'pending' as const}))]);
  },[]);
  const compressAll=async()=>{
    if(!images.length||proc)return; setProc(true);
    for(const img of images){
      if(img.status!=='pending')continue;
      setImages(p=>p.map(i=>i.id===img.id?{...i,status:'processing'}:i));
      try{
        const result=mode==='exactkb'?await compressToTargetKB(img.file,format,targetKB):await compressImage(img.file,format,quality/100);
        setImages(p=>p.map(i=>i.id===img.id?{...i,status:'done',compSize:result.compressedSize,saved:result.savedPercent,outUrl:URL.createObjectURL(result.file)}:i));
      }catch{setImages(p=>p.map(i=>i.id===img.id?{...i,status:'error'}:i));}
    }
    setProc(false);
  };
  const done=images.filter(i=>i.status==='done').length;
  const downloadZip=async()=>{
    const{default:JSZip}=await import('jszip');
    const zip=new JSZip();
    for(const img of images.filter(i=>i.status==='done'&&i.outUrl)){const blob=await fetch(img.outUrl!).then(r=>r.blob());zip.file(getName(img),blob);}
    const blob=await zip.generateAsync({type:'blob'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='compressed-images.zip';a.click();
  };
  return(
    <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'16px',padding:'20px'}}>
      <div style={{display:'flex',gap:'8px',marginBottom:'16px'}}>
        {(['quality','exactkb'] as Mode[]).map(m=>(
          <button key={m} onClick={()=>setMode(m)} style={{padding:'8px 16px',borderRadius:'8px',border:'none',cursor:'pointer',fontWeight:700,fontSize:'13px',background:mode===m?'linear-gradient(135deg,#6366f1,#8b5cf6)':'rgba(255,255,255,0.06)',color:'white'}}>
            {m==='quality'?'🎚️ Quality Mode':'🎯 Exact KB Mode'}
          </button>
        ))}
      </div>
      <div style={{display:'flex',gap:'8px',marginBottom:'16px',flexWrap:'wrap'}}>
        {FMTS.map(([f,label,sub])=>(
          <button key={f} onClick={()=>setFormat(f)} style={{padding:'8px 14px',borderRadius:'8px',border:`1px solid ${format===f?'#6366f1':'rgba(255,255,255,0.1)'}`,background:format===f?'rgba(99,102,241,0.25)':'rgba(255,255,255,0.04)',color:'white',cursor:'pointer',fontSize:'12px'}}>
            <div style={{fontWeight:700}}>{label}</div><div style={{opacity:0.75,fontSize:'10px'}}>{sub}</div>
          </button>
        ))}
      </div>
      {mode==='quality'?(
        <div style={{marginBottom:'16px'}}>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:'12px',marginBottom:'6px'}}><span>Quality</span><span style={{color:'#a5b4fc',fontWeight:700}}>{quality}%</span></div>
          <input type="range" min={10} max={100} value={quality} onChange={e=>setQuality(+e.target.value)} aria-label="Compression quality percentage" style={{width:'100%',accentColor:'#6366f1'}}/>
        </div>
      ):(
        <div style={{marginBottom:'16px'}}>
          <div style={{fontSize:'12px',marginBottom:'6px'}}>Target size (KB)</div>
          <input type="number" min={5} max={10000} value={targetKB} onChange={e=>setTargetKB(+e.target.value)} style={{padding:'8px 12px',borderRadius:'8px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)',color:'white',fontSize:'14px',fontWeight:700,width:'120px'}}/>
          <span style={{fontSize:'12px',opacity:0.7,marginLeft:'8px'}}>KB</span>
        </div>
      )}
      <div onClick={()=>ref.current?.click()} onDrop={e=>{e.preventDefault();setDrag(false);addFiles(e.dataTransfer.files);}} onDragOver={e=>{e.preventDefault();setDrag(true);}} onDragLeave={()=>setDrag(false)}
        style={{border:`2px dashed ${drag?'#6366f1':'rgba(255,255,255,0.15)'}`,borderRadius:'12px',padding:'32px 20px',textAlign:'center',cursor:'pointer',background:drag?'rgba(99,102,241,0.08)':'rgba(255,255,255,0.02)',marginBottom:'16px'}}>
        <input ref={ref} type="file" multiple accept="image/*,.heic,.heif" style={{display:'none'}} onChange={e=>e.target.files&&addFiles(e.target.files)}/>
        <div style={{fontSize:'32px',marginBottom:'8px'}}>📁</div>
        <div style={{fontWeight:700,marginBottom:'4px'}}>Drop images here or click to upload</div>
        <div style={{fontSize:'12px',opacity:0.7}}>JPG · PNG · WebP · AVIF · HEIC · Up to 50 files · Free</div>
      </div>
      {images.length>0&&(
        <div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}>
            <span style={{fontSize:'13px',opacity:0.8}}>{images.length} image{images.length>1?'s':''}</span>
            <div style={{display:'flex',gap:'8px'}}>
              {done>0&&<button onClick={downloadZip} style={{padding:'7px 16px',borderRadius:'8px',background:'rgba(16,185,129,0.2)',border:'1px solid rgba(16,185,129,0.3)',color:'#34d399',fontSize:'13px',fontWeight:700,cursor:'pointer'}}>📦 ZIP All ({done})</button>}
              <button onClick={compressAll} disabled={proc} style={{padding:'7px 20px',borderRadius:'8px',background:proc?'rgba(129,140,248,0.3)':'linear-gradient(135deg,#6366f1,#8b5cf6)',border:'none',color:'white',fontSize:'13px',fontWeight:700,cursor:proc?'not-allowed':'pointer'}}>
                {proc?'⏳ Compressing...':'⚡ Compress All'}
              </button>
            </div>
          </div>
          {images.map(img=>(
            <div key={img.id} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'6px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <img src={img.preview} alt={img.name} style={{width:'44px',height:'44px',objectFit:'cover',borderRadius:'6px',flexShrink:0}}/>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:'12px',fontWeight:600,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{img.name}</div>
                <div style={{fontSize:'11px',opacity:0.7,marginTop:'2px'}}>{fmtSize(img.origSize)}{img.compSize&&<span style={{color:'#34d399'}}> → {fmtSize(img.compSize)} <span style={{fontWeight:700}}>(-{img.saved}%)</span></span>}</div>
              </div>
              <div style={{flexShrink:0}}>
                {img.status==='pending'&&<span style={{opacity:0.65,fontSize:'13px'}}>⏸️ Ready</span>}
                {img.status==='processing'&&<span style={{color:'#fbbf24',fontSize:'13px'}}>⏳ Processing…</span>}
                {img.status==='error'&&<span style={{color:'#f87171',fontSize:'13px'}}>❌ Error</span>}
                {img.status==='done'&&img.outUrl&&<a href={img.outUrl} download={getName(img)} style={{padding:'5px 12px',borderRadius:'7px',background:'rgba(16,185,129,0.2)',border:'1px solid rgba(16,185,129,0.35)',color:'#34d399',fontSize:'12px',fontWeight:700,textDecoration:'none'}}>⬇️ Save</a>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
