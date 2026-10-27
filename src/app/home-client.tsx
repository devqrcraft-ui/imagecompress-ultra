"use client";
import './ticker.css';
import CompressorTool from './compressor-tool';

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
  '💾 Save Space — Typical Reduction 50–90%',
];

export default function HomeClient() {
  return (
    <>
    <style>{`@media (max-width: 600px) {
        .desktop-nav { display: none !important; }
        .mobile-menu-btn { display: flex !important; }
        .layout-row { flex-direction: column !important; }
        .main-col { flex: none !important; max-width: 100% !important; width: 100% !important; }
      }`}</style>
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,-apple-system,sans-serif',color:'white'}}>

      {/* TOP TICKER */}
      <div style={{background:'linear-gradient(90deg,#6366f1,#8b5cf6,#22d3ee)',padding:'9px 0',overflow:'hidden',whiteSpace:'nowrap',fontSize:'15px',fontWeight:600,color:'white',letterSpacing:'0.2px'}}>
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
          <p style={{fontSize:'15px',opacity:0.55,marginBottom:'12px'}}>Free <strong style={{color:'rgba(255,255,255,0.8)'}}>online image compressor</strong> — compress image to 20KB, 50KB, or 100KB in your browser. No upload, private, no watermark.</p>
          {/* USP BULLETS */}
          <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'14px',fontSize:'12px'}}>
            {[
              'Target KB target (20–500KB)',
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

      {/* VERIFIABLE ADVANTAGES */}
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'24px 16px 0'}}>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px',textAlign:'center'}}>
          What This Compressor Does Differently
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'10px',marginBottom:'16px'}}>
          {[
            {icon:'🔒',title:'100% On-Device',desc:'Files are decoded and re-encoded in your browser with WebAssembly. Nothing is uploaded, so there is no server copy to retain.'},
            {icon:'🎯',title:'Target KB Mode',desc:'Set a target size — 20KB, 50KB, 100KB or any custom value — and the tool iterates quality until the output lands at or below that number.'},
            {icon:'📦',title:'Batch 50 Files',desc:'Queue up to 50 images in one session and download them together as a ZIP.'},
            {icon:'🆓',title:'Free, No Watermark',desc:'No signup and no watermark on output files.'},
          ].map((item,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'16px'}}>
              <div style={{fontSize:'22px',marginBottom:'8px'}}>{item.icon}</div>
              <div style={{fontSize:'14px',fontWeight:700,marginBottom:'6px'}}>{item.title}</div>
              <div style={{fontSize:'12px',opacity:0.55,lineHeight:1.6}}>{item.desc}</div>
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
          Built for Exact-Size Uploads
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'12px',marginBottom:'32px'}}>
          {[
            {icon:'🔒',title:'True no-upload processing',desc:'Every pixel stays on your device via WebAssembly — no server copy exists at any point in the workflow.'},
            {icon:'🎯',title:'Target KB targeting in main UI',desc:'Set 20KB, 50KB, 100KB or any target directly — not buried in advanced settings.'},
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


      {/* POPULAR PRESETS GRID */}
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
        <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>Popular Compression Presets</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px'}}>
          {[
            {href:'/compress-to-20kb',   label:'20 KB',     sub:'Gov portals & DS-160', color:'#818cf8'},
            {href:'/compress-to-50kb',   label:'50 KB',     sub:'Job applications',     color:'#818cf8'},
            {href:'/compress-to-100kb',  label:'100 KB',    sub:'University forms',     color:'#818cf8'},
            {href:'/compress-for-email', label:'Email',     sub:'Under 100KB, fast',    color:'#34d399'},
            {href:'/compress-for-shopify',label:'Shopify',  sub:'WebP under 1MB',       color:'#f59e0b'},
            {href:'/compress-for-pinterest',label:'Pinterest',sub:'1000×1500 optimized',color:'#f87171'},
          ].map(({href,label,sub,color})=>(
            <a key={href} href={href} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'14px 10px',borderRadius:'10px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.2)',color:'#fff',textDecoration:'none',textAlign:'center',transition:'background 0.2s'}}>
              <span style={{fontSize:'17px',fontWeight:800,color,marginBottom:'3px'}}>{label}</span>
              <span style={{fontSize:'11px',opacity:0.5,lineHeight:1.3}}>{sub}</span>
            </a>
          ))}
        </div>
      </div>

      {/* PLATFORMS CHIPS */}
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 40px'}}>
        <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>Compress Images For Specific Platforms</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'8px'}}>
          {[
            {href:'/compress-for-shopify',   label:'Shopify',   icon:'🛍️', sub:'WebP / JPEG · under 1MB'},
            {href:'/compress-for-etsy',      label:'Etsy',      icon:'🎨', sub:'JPEG · 2000px · under 1MB'},
            {href:'/compress-for-amazon',    label:'Amazon',    icon:'📦', sub:'JPEG white bg · 2000px'},
            {href:'/compress-for-instagram', label:'Instagram', icon:'📸', sub:'JPEG · 1080px · 200KB'},
            {href:'/compress-for-linkedin',  label:'LinkedIn',  icon:'💼', sub:'JPEG · 400×400 · 8MB max'},
            {href:'/compress-for-whatsapp',  label:'WhatsApp',  icon:'💬', sub:'JPEG · under 100KB'},
            {href:'/compress-for-wordpress', label:'WordPress', icon:'🌐', sub:'WebP · under 100KB'},
            {href:'/compress-for-email',     label:'Email',     icon:'📧', sub:'JPEG · under 100KB'},
            {href:'/compress-for-pinterest', label:'Pinterest', icon:'📌', sub:'JPEG · 1000×1500'},
            {href:'/compress-passport-photo',label:'Passport',  icon:'🪪', sub:'JPEG · 20–50KB'},
            {href:'/compress-to-20kb',       label:'20KB Exact',icon:'🎯', sub:'Gov forms & DS-160'},
            {href:'/compress-to-50kb',       label:'50KB Exact',icon:'📄', sub:'Job & exam portals'},
          ].map(({href,label,icon,sub})=>(
            <a key={href} href={href} style={{display:'flex',alignItems:'center',gap:'10px',padding:'11px 14px',borderRadius:'9px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.85)',textDecoration:'none',transition:'background 0.2s'}}>
              <span style={{fontSize:'18px',flexShrink:0}}>{icon}</span>
              <span style={{flex:1}}>
                <span style={{display:'block',fontSize:'15px',fontWeight:700}}>{label}</span>
                <span style={{display:'block',fontSize:'11px',opacity:0.45,marginTop:'1px'}}>{sub}</span>
              </span>
              <span style={{fontSize:'11px',opacity:0.3}}>→</span>
            </a>
          ))}
        </div>
      </div>
      {/* POPULAR TOOLS — internal links SEO block */}
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 48px'}}>
        <div style={{borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:'32px'}}>
          <div style={{fontSize:'15px',fontWeight:600,opacity:0.4,textTransform:'uppercase',letterSpacing:'1px',marginBottom:'16px'}}>Popular Tools</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {[
              {href:'/compress-to-20kb',   label:'Compress to 20KB'},
              {href:'/compress-to-50kb',   label:'Compress to 50KB'},
              {href:'/compress-to-100kb',  label:'Compress to 100KB'},
              {href:'/compress-to-200kb',  label:'Compress to 200KB'},
              {href:'/compress-to-500kb',  label:'Compress to 500KB'},
              {href:'/compress-for-email', label:'For Email'},
              {href:'/compress-for-shopify',label:'For Shopify'},
              {href:'/compress-for-etsy',  label:'For Etsy'},
              {href:'/compress-for-amazon',label:'For Amazon'},
              {href:'/compress-for-instagram',label:'For Instagram'},
              {href:'/compress-for-linkedin',  label:'For LinkedIn'},
              {href:'/compress-passport-photo',label:'Passport Photo'},
            ].map(({href,label})=>(
              <a key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>{label} →</a>
            ))}
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
