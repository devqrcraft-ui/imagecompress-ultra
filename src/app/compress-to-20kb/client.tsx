"use client";
import Link from 'next/link';

const steps = [
  { n:'1', t:'Upload your photo', d:'Click upload or drag your image. Accepts JPEG, PNG, WebP, HEIC (iPhone photos). No file size limit.' },
  { n:'2', t:'Select Exact KB Mode — type 20', d:'Click the "Gov 20KB" preset or switch to Exact KB Mode and type 20. The tool locks onto your target.' },
  { n:'3', t:'Click Compress', d:'Binary search runs instantly in your browser. Hits 20KB within 1KB — no upload, no waiting.' },
  { n:'4', t:'Download your compressed image', d:'File saves directly to your device. Compress more or batch up to 50 images at once.' },
];

const useCases = [
  { icon:'🪪', title:'Aadhaar Card — India', desc:'UIDAI portal requires photo under 20KB JPEG for enrollment and updates' },
  { icon:'🛂', title:'Pakistan NADRA', desc:'Passport and CNIC application photo must be under 20KB' },
  { icon:'🏛️', title:'Ukraine Diia / Госпослуги', desc:'Government ID document upload portals enforce 20KB limit' },
  { icon:'📋', title:'US Visa DS-160', desc:'State Dept photo requirements for visa applications' },
  { icon:'🎓', title:'University Portals India', desc:'JEE, NEET, UPSC exam forms require 20KB photos' },
  { icon:'💼', title:'Job Application Portals', desc:'Workday and Greenhouse often limit profile photos to 20–50KB' },
];

const tips = [
  { title:'Use Gov 20KB preset', desc:'Click "Gov 20KB" on the main tool — sets Exact KB Mode to 20KB with JPEG in one click. Perfect for Aadhaar, DS-160, and NADRA forms.' },
  { title:'Start with a high-res original', desc:'Compressing a 4000px photo to 20KB loses less quality than compressing an already-small image. Always use the highest resolution original available.' },
  { title:'JPEG gives best ratio at 20KB', desc:'At 20KB, JPEG outperforms WebP for photos. WebP is better at larger sizes but JPEG handles extreme compression more gracefully.' },
  { title:'Batch compress up to 50 files', desc:'Need multiple photos at 20KB? Upload up to 50 images at once. All processed simultaneously in your browser.' },
];

const faqItems = [
  { q:'How do I compress an image to exactly 20KB?', a:'Switch to Exact KB Mode, type 20, select JPEG format, and click Compress. Binary search finds the maximum quality that fits 20KB — within 1KB accuracy.' },
  { q:'Does my image get uploaded to a server?', a:'No. Everything runs in your browser using WebAssembly. Your image never leaves your device — unlike 11zon, MinifyImage, and Cloudinary which upload files to their servers.' },
  { q:'Why do government forms require exactly 20KB?', a:'Government portals in India, Pakistan, Ukraine, and the US set strict limits due to legacy infrastructure. Aadhaar, NADRA passport forms, and DS-160 commonly require photos under 20KB.' },
  { q:'Does it work with iPhone HEIC photos?', a:'Yes — HEIC and HEIF photos from iPhone are automatically converted in your browser before compression. No upload needed, works directly from Camera Roll.' },
  { q:'How to compress image to 20KB on mobile?', a:'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, tap Gov 20KB preset, tap Compress. Downloads directly to your device. No app needed.' },
  { q:'Can I compress multiple images to 20KB at once?', a:'Yes — select up to 50 images at once. All compress to exactly 20KB simultaneously in your browser. Download individually or as a ZIP. Most competitors limit batch on free plans.' },
  { q:'Is this safer than 11zon for passport photos?', a:'Yes. 11zon, MinifyImage, and most online tools upload files to their servers — a real privacy risk for passport and ID photos. CompressTo20KB never transmits your image anywhere.' },
  { q:'How to compress JPG to 20KB without losing quality?', a:'Use Exact KB Mode — binary search finds the maximum quality that still fits 20KB. For best results, start with a high-resolution original. JPEG at 85–90% quality gives the best ratio.' },
];

export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-to-50kb" style={{color:'white',textDecoration:'none'}}>50KB Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>

      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress to 20KB
        </div>

        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Image to <span style={{color:'#818cf8'}}>20KB</span> Free — No Upload, 100% Private
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'8px'}}>
          Reduce image size to exactly 20KB online. All processing happens in your browser — your files never leave your device.
        </p>
        <p style={{fontSize:'13px',opacity:0.5,marginBottom:'32px'}}>
          Supports JPEG · PNG · WebP · HEIC (iPhone) · Batch up to 50 images · No signup required
        </p>

        {/* CTA */}
        <div style={{background:'rgba(129,140,248,0.12)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>🎯 Compress to Exactly 20KB — Free</div>
          <p style={{fontSize:'13px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP, HEIC · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=20" style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
            ⚡ Open 20KB Compressor
          </Link>
        </div>

        {/* WHY */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>Why Compress an Image to Exactly 20KB?</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginBottom:'12px'}}>
          Millions search for <strong>compress image to 20KB</strong> every month. Online image compressor tools like 11zon or TinyPNG can reduce image size — but they upload your file to their servers and cannot hit an exact target. Our tool reduces image size to exactly 20KB using binary search compression, entirely in your browser.
        </p>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginBottom:'32px'}}>
          Most tools upload your photo to a server — a serious privacy concern for passport photos and ID documents. CompressTo20KB processes everything in your browser via WebAssembly. Your image is never transmitted anywhere.
        </p>

        {/* HOW TO */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress an Image to Exactly 20KB (Step-by-Step)</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {steps.map(s=>(
            <div key={s.n} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px 20px'}}>
              <div style={{flexShrink:0,width:'36px',height:'36px',borderRadius:'50%',background:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'16px'}}>{s.n}</div>
              <div>
                <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>{s.t}</div>
                <div style={{fontSize:'13px',opacity:0.65,lineHeight:1.6}}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* USE CASES */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>Best Uses for 20KB Images</h2>
        <p style={{fontSize:'13px',opacity:0.6,marginBottom:'16px',lineHeight:1.6}}>Government portals, university applications, and job boards all enforce strict file size limits. Here are the most common reasons people need to compress images to exactly 20KB:</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px',marginBottom:'40px'}}>
          {useCases.map((u,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{u.icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{u.title}</div>
              <div style={{fontSize:'12px',opacity:0.6,lineHeight:1.5}}>{u.desc}</div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>CompressTo20KB vs Competitors</h2>
        <div style={{overflowX:'auto',marginBottom:'40px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Feature</th>
                <th style={{padding:'10px 12px',color:'#818cf8',fontWeight:800}}>CompressTo20KB</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>11zon</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>MinifyImage</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>TinyPNG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['On-device (no upload)','✅ Yes','❌ Server','❌ Server','❌ Server'],
                ['Exact KB target','✅ Yes','⚠️ Approx','❌ No','❌ No'],
                ['Batch compression','✅ 50 files','⚠️ Limited','⚠️ Limited','⚠️ 20/month'],
                ['WebP / AVIF output','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                ['HEIC (iPhone) support','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                ['Free unlimited','✅ Yes','⚠️ Limits','⚠️ Limits','⚠️ 20/month'],
                ['Safe for passport/visa','✅ 100%','❌ Uploads','❌ Uploads','❌ Uploads'],
              ].map(([feat,...vals],i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.06)',background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)',fontWeight:500}}>{feat}</td>
                  {vals.map((v,j)=>(
                    <td key={j} style={{padding:'10px 12px',textAlign:'center' as const,color:j===0?'#4ade80':v.startsWith('✅')?'#4ade80':v.startsWith('❌')?'#f87171':'#fbbf24',fontWeight:j===0?800:500}}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TIPS */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Tips for Best Results at 20KB</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {tips.map((tip,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'10px',padding:'16px 20px',borderLeft:'3px solid #818cf8'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>✓ {tip.title}</div>
              <div style={{fontSize:'13px',opacity:0.65,lineHeight:1.6}}>{tip.desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {faqItems.map((item,i)=>(
            <details key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'16px 20px',cursor:'pointer'}}>
              <summary style={{fontWeight:700,fontSize:'14px',color:'#a5b4fc',listStyle:'none'}}>❓ {item.q}</summary>
              <div style={{fontSize:'13px',opacity:0.7,marginTop:'10px',lineHeight:1.6}}>{item.a}</div>
            </details>
          ))}
        </div>

        {/* RELATED */}
        <h2 style={{fontSize:'18px',fontWeight:700,marginBottom:'12px'}}>Related Tools</h2>
        <div style={{display:'flex',flexWrap:'wrap' as const,gap:'10px',marginBottom:'40px'}}>
          {[
            {href:'/',label:'🏠 Home — Image Compressor'},
            {href:'/compress-to-50kb',label:'📄 Compress to 50KB'},
            {href:'/compress-to-100kb',label:'📁 Compress to 100KB'},
            {href:'/compress-to-200kb',label:'📦 Compress to 200KB'},
            {href:'/compress-passport-photo',label:'🪪 Passport Photo'},
            {href:'/compress-for-ds160',label:'📋 DS-160 Photo'},
          ].map(({href,label})=>(
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'13px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
