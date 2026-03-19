"use client";
import Link from 'next/link';

const requirements = [
  { icon:'📐', title:'Aspect Ratio', desc:'2:3 is optimal — 1000x1500px or 1080x1620px. Portrait pins get more feed real estate than square.' },
  { icon:'📁', title:'File Size', desc:'200-500KB for fast loading. Under 200KB may look soft after Pinterest re-compression. Over 1MB slows boards.' },
  { icon:'🖼️', title:'Format', desc:'JPEG for photos. PNG for graphics with text or transparent backgrounds. WebP supported in modern browsers.' },
  { icon:'📏', title:'Max Resolution', desc:'Pinterest accepts up to 2048×2048px. 1000x1500px is the sweet spot for quality vs file size.' },
];

const steps = [
  { n:'1', t:'Upload your pin image', d:'Drag & drop or click to select. Supports JPEG, PNG, WebP, HEIC up to 50MB. Up to 50 images at once.' },
  { n:'2', t:'Set target size — 300-500KB recommended', d:'Switch to Exact KB Mode and type 300 or 500. This gives Pinterest the best quality to work with when it re-compresses your pin.' },
  { n:'3', t:'Select JPEG format', d:'JPEG is safest for Pinterest cross-platform compatibility. Use PNG only for graphics with text or transparent elements.' },
  { n:'4', t:'Download and upload to Pinterest', d:'Click Compress, download your optimized image, and upload directly to Pinterest. No account needed for compression.' },
];

const faqItems = [
  { q:'What is the best image size for Pinterest pins?', a:'Pinterest recommends a 2:3 aspect ratio — 1000x1500px is ideal. For fast loading in feeds, aim for 200-500KB. JPEG works best for photos; PNG for graphics with text.' },
  { q:'How many KB should a Pinterest image be?', a:'For fast loading, aim for 200-500KB per pin. Under 200KB may look slightly soft after Pinterest re-compression. Over 1MB slows down your profile and board loading speed.' },
  { q:'Does Pinterest accept WebP images?', a:'Pinterest supports WebP uploads in modern browsers. However, JPEG is safer for cross-platform compatibility across all devices and Pinterest apps.' },
  { q:'Will my Pinterest images be uploaded to compress them?', a:'No. All compression runs locally in your browser. Your images never leave your device — unlike other tools that upload files to their servers.' },
  { q:'What aspect ratio is best for Pinterest?', a:'2:3 ratio is optimal — 1000x1500px or 1080x1620px. Portrait pins get more feed real estate than square or landscape. Avoid going taller than 1:2.1 ratio as Pinterest may crop them.' },
  { q:'Does compressing for Pinterest reduce quality?', a:'Using Exact KB Mode at 300-500KB preserves excellent quality. Pinterest re-compresses all uploads anyway — starting from a well-optimized file gives you the best final result.' },
];

export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-instagram" style={{color:'white',textDecoration:'none'}}>Instagram</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress for Pinterest
        </div>
        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Images for <span style={{color:'#e60023'}}>Pinterest</span> — Free, No Upload, 100% Private
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'32px'}}>
          Optimize your Pinterest pin photos to 200-500KB for fast loading and sharp display. JPEG, PNG, WebP — all processed in your browser. No upload, no signup, no limits.
        </p>

        <div style={{background:'rgba(230,0,35,0.1)',border:'1px solid rgba(230,0,35,0.3)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>📌 Compress for Pinterest — Free</div>
          <p style={{fontSize:'13px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=400" style={{display:'inline-block',background:'linear-gradient(135deg,#e60023,#c0001e)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
            ⚡ Open Pinterest Compressor
          </Link>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Pinterest Image Requirements 2026</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'12px',marginBottom:'40px'}}>
          {requirements.map((r,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{r.icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{r.title}</div>
              <div style={{fontSize:'12px',opacity:0.6,lineHeight:1.5}}>{r.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress Images for Pinterest — 4 Steps</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {steps.map(s=>(
            <div key={s.n} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px 20px'}}>
              <div style={{flexShrink:0,width:'36px',height:'36px',borderRadius:'50%',background:'#e60023',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'16px'}}>{s.n}</div>
              <div>
                <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>{s.t}</div>
                <div style={{fontSize:'13px',opacity:0.65,lineHeight:1.6}}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Why Use CompressTo20KB for Pinterest?</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'12px',marginBottom:'40px'}}>
          {[
            {icon:'🔒',t:'100% Private',d:'Files processed locally in your browser. Zero uploads to any server.'},
            {icon:'🎯',t:'Exact KB Control',d:'Hit 300KB, 400KB, or 500KB precisely — not just "smaller".'},
            {icon:'⚡',t:'Instant Results',d:'No waiting, no queue, no server delays. Compresses in seconds.'},
            {icon:'🆓',t:'Always Free',d:'No account, no subscription, no watermarks, no limits.'},
          ].map((f,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px',textAlign:'center' as const}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{f.icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{f.t}</div>
              <div style={{fontSize:'12px',opacity:0.6,lineHeight:1.5}}>{f.d}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {faqItems.map((item,i)=>(
            <details key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'16px 20px',cursor:'pointer'}}>
              <summary style={{fontWeight:700,fontSize:'14px',color:'#a5b4fc',listStyle:'none'}}>❓ {item.q}</summary>
              <div style={{fontSize:'13px',opacity:0.7,marginTop:'10px',lineHeight:1.6}}>{item.a}</div>
            </details>
          ))}
        </div>

        <h2 style={{fontSize:'18px',fontWeight:700,marginBottom:'12px'}}>Related Tools</h2>
        <div style={{display:'flex',flexWrap:'wrap' as const,gap:'10px',marginBottom:'40px'}}>
          {[
            {href:'/',label:'🏠 Home — Image Compressor'},
            {href:'/compress-for-instagram',label:'📸 For Instagram'},
            {href:'/compress-for-shopify',label:'🛍️ For Shopify'},
            {href:'/compress-for-etsy',label:'🎨 For Etsy'},
            {href:'/compress-for-email',label:'📧 For Email'},
            {href:'/compress-to-500kb',label:'📦 Compress to 500KB'},
          ].map(({href,label})=>(
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'13px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
