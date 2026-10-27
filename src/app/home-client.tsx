"use client";
import { useEffect, useState } from 'react';
import './ticker.css';
import CompressorTool from './compressor-tool';

function StickyCompressBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const zone = document.getElementById('compress');
    if (!zone) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { rootMargin: '-20% 0px' });
    io.observe(zone);
    return () => io.disconnect();
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => document.getElementById('compress')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
      className="sticky-cta"
      style={{ position: 'fixed', left: '12px', right: '12px', bottom: '12px', zIndex: 900,
        padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(129,140,248,0.6)',
        background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white',
        fontSize: '16px', fontWeight: 800, boxShadow: '0 8px 24px rgba(0,0,0,0.45)' }}>
      🗜️ Compress an image — no upload
    </button>
  );
}

const TICKER_ITEMS = [
  '⚡ 100% Free — No Signup Required',
  '🔒 Files Never Leave Your Device',
  '📦 Compress for Shopify · Etsy · Amazon',
  '🎯 Compress to Target KB — 20KB · 50KB · 100KB',
  '🖼️ WebP · AVIF · JPEG · PNG · HEIC Support',
  '📱 Works on All Devices — Mobile · Tablet · Desktop',
  '🚀 Instant Compression in Your Browser',
  '✅ No Upload · No Server · Private',
  '🗜️ Batch Up to 50 Images at Once',
  '💾 Exact byte counts before and after every run',
];

export default function HomeClient() {
  return (
    <>
    <style>{`@media (max-width: 600px) {
        .layout-row { flex-direction: column !important; }
        .main-col { flex: none !important; max-width: 100% !important; width: 100% !important; }
      }`}</style>
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,-apple-system,sans-serif',color:'white'}}>

      {/* TOP TICKER */}
      <div style={{background:'linear-gradient(90deg,#4f46e5,#7c3aed,#0e7490)',padding:'9px 0',overflow:'hidden',whiteSpace:'nowrap',fontSize:'15px',fontWeight:600,color:'white',letterSpacing:'0.2px'}}>
        <div style={{display:'inline-block',animation:'ticker 60s linear infinite'}}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t,i)=>(
            <span key={i} style={{padding:'0 36px'}}>{t}</span>
          ))}
        </div>
      </div>
      {/* MAIN LAYOUT */}
      <div className="layout-row" style={{display:'flex',maxWidth:'1200px',margin:'0 auto',padding:'16px',gap:'16px',alignItems:'flex-start'}}>

        {/* LEFT TOOL */}
        <div className="main-col" style={{flex:'0 0 70%',maxWidth:'70%'}}>

          <h1 style={{fontSize:'26px',fontWeight:800,marginBottom:'4px',letterSpacing:'-0.5px'}}>
            Compress Image to <span style={{color:'#818cf8'}}>20KB</span> Free — Instant, No Upload, Private
          </h1>
          <p style={{fontSize:'15px',opacity:0.7,marginBottom:'12px'}}>Free <strong style={{color:'rgba(255,255,255,0.8)'}}>online image compressor</strong> — compress image to 20KB, 50KB, or 100KB in your browser. No upload, private, no watermark.</p>
          {/* USP BULLETS */}
          <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'14px',fontSize:'12px'}}>
            {[
              'Target KB Mode, 5–5000 KB',
              'On-device only, no upload',
              'Batch up to 50 images',
              'Works on mobile & desktop',
            ].map(b=>(
              <span key={b} style={{background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'20px',padding:'4px 10px',color:'rgba(255,255,255,0.7)',whiteSpace:'nowrap'}}>{b}</span>
            ))}
          </div>

          <CompressorTool initialTargetKB={20} />

        </div>
      </div>

      <StickyCompressBar />

      {/* VERIFIABLE ADVANTAGES */}
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'24px 16px 0'}}>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px',textAlign:'center'}}>
          What This Compressor Does Differently
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'10px',marginBottom:'16px'}}>
          {[
            {icon:'🔒',title:'100% On-Device',desc:'Your browser decodes the file and re-encodes it with its own image APIs. Nothing is uploaded, so there is no server copy to retain.'},
            {icon:'🎯',title:'Target KB Mode',desc:'Set a target size — 20KB, 50KB, 100KB or any custom value — and the tool iterates quality until the output lands at or below that number.'},
            {icon:'📦',title:'Batch 50 Files',desc:'Queue up to 50 images in one session and download them together as a ZIP.'},
            {icon:'🆓',title:'Free, No Watermark',desc:'No signup and no watermark on output files.'},
          ].map((item,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'16px'}}>
              <div style={{fontSize:'22px',marginBottom:'8px'}}>{item.icon}</div>
              <div style={{fontSize:'14px',fontWeight:700,marginBottom:'6px'}}>{item.title}</div>
              <div style={{fontSize:'12px',opacity:0.7,lineHeight:1.6}}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div style={{background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'10px',padding:'14px 18px',fontSize:'12px',opacity:0.75,lineHeight:1.7}}>
          <strong style={{color:'#a5b4fc'}}>Verify the no-upload claim yourself:</strong> open your browser DevTools, switch to the Network tab, then compress a file. No image request leaves your device — only page assets load. That is the whole privacy promise, and it is testable in about ten seconds.
        </div>
      </div>

      {/* BUILT FOR EXACT SIZE */}
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'32px 16px 0'}}>
        <h2 style={{fontSize:'20px',fontWeight:800,color:'#fff',marginBottom:'16px',letterSpacing:'-0.3px'}}>
          Built for size-capped uploads
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'12px',marginBottom:'32px'}}>
          {[
            {icon:'🔒',title:'True no-upload processing',desc:'Every pixel is decoded and re-encoded on your device — no server copy exists at any point in the workflow.'},
            {icon:'🎯',title:'A kilobyte ceiling, not a percentage',desc:'Type 20KB, 500KB or any number between 5 and 5000 straight into the main interface — not buried in advanced settings.'},
            {icon:'🗜️',title:'Batch up to 50 images at once',desc:'Compress a whole product set or photo album in one session, with an instant preview for each file.'},
            {icon:'⚡',title:'Presets for common platforms',desc:'Shopify, Etsy, Amazon, Instagram, passport photos — one click sets format and target size.'},
            {icon:'📱',title:'Works on phones',desc:'iPhone HEIC and Android gallery photos are processed locally — no app install required.'},
            {icon:'🆓',title:'100% free, no watermark',desc:'No subscription, no watermark, no signup required on any device — mobile, tablet or desktop.'},
          ].map(item=>(
            <div key={item.title} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(129,140,248,0.2)',borderRadius:'10px',padding:'18px'}}>
              <div style={{fontSize:'22px',marginBottom:'8px'}}>{item.icon}</div>
              <div style={{fontSize:'14px',fontWeight:700,color:'#fff',marginBottom:'6px'}}>{item.title}</div>
              <div style={{fontSize:'15px',color:'rgba(255,255,255,0.85)',lineHeight:1.65}}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>


      {/* TARGET SIZE PICKER */}
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 36px'}}>
        <h2 style={{fontSize:'20px',fontWeight:800,color:'#fff',marginBottom:'6px',letterSpacing:'-0.3px'}}>1. Choose a target size</h2>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.68)',marginBottom:'16px',lineHeight:1.45}}>Tap the limit your form asks for. The tool keeps the best quality that fits under it.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:'10px'}}>
          {[
            {href:'/compress-to-20kb',  label:'20 KB',  sub:'Gov portals & DS-160'},
            {href:'/compress-to-50kb',  label:'50 KB',  sub:'Job applications'},
            {href:'/compress-to-100kb', label:'100 KB', sub:'University forms'},
            {href:'/compress-to-200kb', label:'200 KB', sub:'Larger file limits'},
            {href:'/compress-to-500kb', label:'500 KB', sub:'Room for more detail'},
            {href:'/compress-to-1mb',   label:'1 MB',   sub:'Photo-quality uploads'},
          ].map(({href,label,sub})=>(
            <a key={href} href={href} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'72px',padding:'14px 10px',borderRadius:'12px',background:'rgba(129,140,248,0.09)',border:'1px solid rgba(129,140,248,0.28)',color:'#fff',textDecoration:'none',textAlign:'center',transition:'background 0.2s'}}>
              <span style={{fontSize:'19px',fontWeight:800,color:'#a5b4fc',marginBottom:'4px'}}>{label}</span>
              <span style={{fontSize:'13px',color:'rgba(255,255,255,0.68)',lineHeight:1.3}}>{sub}</span>
            </a>
          ))}
        </div>
      </div>

      {/* WHERE YOU ARE UPLOADING */}
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 40px'}}>
        <h2 style={{fontSize:'20px',fontWeight:800,color:'#fff',marginBottom:'6px',letterSpacing:'-0.3px'}}>2. Or pick where you are uploading</h2>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.68)',marginBottom:'16px',lineHeight:1.45}}>Each page opens the same tool with that site&rsquo;s format and size already set.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'10px'}}>
          {[
            {href:'/compress-for-email',     label:'Email',      icon:'📧', sub:'Small enough to send'},
            {href:'/compress-for-shopify',   label:'Shopify',    icon:'🛍️', sub:'WebP or JPEG, your ceiling'},
            {href:'/compress-for-etsy',      label:'Etsy',       icon:'🎨', sub:'Listing photos at Etsy resolution'},
            {href:'/compress-for-amazon',    label:'Amazon',     icon:'📦', sub:'Zoom-ready pixels, your file size'},
            {href:'/compress-for-instagram', label:'Instagram',  icon:'📸', sub:'Matches the 1080px resize'},
            {href:'/compress-for-linkedin',  label:'LinkedIn',   icon:'💼', sub:'Profile, banner, company'},
            {href:'/compress-for-whatsapp',  label:'WhatsApp',   icon:'💬', sub:'JPEG, kept small'},
            {href:'/compress-for-wordpress', label:'WordPress',  icon:'🌐', sub:'WebP for your media library'},
            {href:'/compress-for-pinterest', label:'Pinterest',  icon:'📌', sub:'JPEG · 1000×1500'},
            {href:'/compress-passport-photo',label:'Passport photo', icon:'🪪', sub:'JPEG under 240KB'},
            {href:'/visa-photo-compressor',  label:'Visa photo', icon:'🛂', sub:'DS-160, USCIS, green card'},
          ].map(({href,label,icon,sub})=>(
            <a key={href} href={href} style={{display:'flex',alignItems:'center',gap:'12px',minHeight:'56px',padding:'13px 14px',borderRadius:'12px',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.12)',color:'rgba(255,255,255,0.92)',textDecoration:'none',transition:'background 0.2s'}}>
              <span style={{fontSize:'20px',flexShrink:0}}>{icon}</span>
              <span style={{flex:1}}>
                <span style={{display:'block',fontSize:'16px',fontWeight:700}}>{label}</span>
                <span style={{display:'block',fontSize:'13px',color:'rgba(255,255,255,0.68)',marginTop:'2px',lineHeight:1.3}}>{sub}</span>
              </span>
              <span style={{fontSize:'16px',color:'rgba(255,255,255,0.68)'}}>→</span>
            </a>
          ))}
        </div>
      </div>

    </div>
    </>
  );
}
