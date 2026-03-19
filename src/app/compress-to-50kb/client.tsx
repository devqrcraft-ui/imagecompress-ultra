            {q:'Can I compress multiple images to 50KB at once?',a:'Yes — upload up to 50 images, set Exact KB Mode to 50, and compress all at once. Download as ZIP. All processing stays in your browser.'},
            {q:'What format should I use for 50KB government photos?',a:'JPEG — always, for government portals. Most portals explicitly require JPEG and will reject WebP or PNG even if the file size is correct.'},
"use client";
import Link from 'next/link';

const useCases = [
  { icon:'🏛️', title:'USCIS & US Gov Forms', desc:'USCIS immigration forms, TSA PreCheck enrollment, and passport renewal portals require photos under 50KB in JPEG format.' },
  { icon:'🎓', title:'Exam Portals (UPSC, SSC, NEET)', desc:'Indian government exam portals commonly cap photo uploads at 50KB. Submitting a larger file causes automatic rejection.' },
  { icon:'🇵🇰', title:'Pakistan NADRA & Visa', desc:'NADRA online services and several Pakistan visa portals require applicant photos strictly under 50KB.' },
  { icon:'💼', title:'Job & HR Portals', desc:'Many government job application portals in South Asia, the Middle East, and Eastern Europe enforce a 50KB photo limit.' },
];

const steps = [
  { n:'1', t:'Upload your image', d:'Click the upload area or drag your file. Accepts JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos). Up to 50 files at once.' },
  { n:'2', t:'Switch to Exact KB Mode', d:'Toggle the mode selector from Quality to Exact KB. Type 50 in the target size field.' },
  { n:'3', t:'Select JPEG for government portals', d:'Most government forms require JPEG. Select JPEG if submitting to USCIS, UPSC, NADRA, or similar portals. Use WebP for web use to get better quality.' },
  { n:'4', t:'Compress and download', d:'Click Compress. Your browser processes the image instantly — nothing uploaded. Download the 50KB JPEG directly to your device.' },
];

const tips = [
  { title:'Always use JPEG for government portals', desc:'Government and exam portals almost always require JPEG format specifically. WebP and PNG are often rejected even if the file size is correct.' },
  { title:'Resize dimensions to match portal requirements', desc:'Most portals specify exact pixel dimensions (e.g. 600×600px for passport photos). Resize to required dimensions first, then compress to 50KB for best quality.' },
  { title:'Use the original photo, not a screenshot', desc:'Compressing a screenshot adds extra artifacts. Always start from the original JPEG or PNG taken by the camera for the cleanest 50KB output.' },
  { title:'Check the portal requirements before uploading', desc:'Some portals require exactly 50KB (not just under 50KB). This tool hits the target within 1KB — well within any tolerance.' },
];

const faqItems = [
  { q:'How do I compress an image to exactly 50KB?', a:'Upload your image, switch to Exact KB Mode, type 50, and click Compress. Binary search finds the maximum quality that fits 50KB — within 1KB accuracy. No upload required.' },
  { q:'Why do government portals require 50KB?', a:'Legacy infrastructure on government portals sets strict upload limits. 50KB is common for USCIS, UPSC, SSC, NEET, and Pakistan NADRA portals. The limit ensures fast processing on older systems.' },
  { q:'Is it safe to compress passport photos to 50KB online?', a:'Yes — all processing runs in your browser. Your photo is never uploaded to any server. Other tools like 11zon and TinyPNG upload files to their servers, which is a privacy risk for ID documents.' },
  { q:'Can I compress multiple images to 50KB at once?', a:'Yes — upload up to 50 images, set Exact KB Mode to 50, and compress all at once. Download individually or as a ZIP. All processing stays in your browser.' },
  { q:'What format should I use for 50KB government photos?', a:'JPEG — always, for government portals. Most portals explicitly require JPEG and will reject WebP or PNG even if the file size is correct.' },
  { q:'How to compress image to 50KB on mobile?', a:'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap upload, select your photo, type 50 in Exact KB Mode, tap Compress. Saves directly to your device.' },
];

export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>

      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress to 50KB
        </div>

        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Image to <span style={{color:'#818cf8'}}>50KB</span> Free Online — No Upload, 100% Private
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'32px'}}>
          Compress JPG, PNG, WebP, AVIF, HEIC to exactly 50KB directly in your browser — no upload, no tracking, no watermark.
        </p>

        <div style={{background:'rgba(129,140,248,0.12)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>🎯 Compress to Exactly 50KB — Free</div>
          <p style={{fontSize:'13px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP, HEIC · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=50" style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
            ⚡ Open 50KB Compressor
          </Link>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>When Do You Need Exactly 50KB?</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginBottom:'16px'}}>A 50KB limit is one of the most common restrictions on government and exam portals worldwide. It sits between the ultra-strict 20KB required by some Indian portals and the more relaxed 100KB used by most web forms.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px',marginBottom:'40px'}}>
          {useCases.map((u,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{u.icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{u.title}</div>
              <div style={{fontSize:'12px',opacity:0.6,lineHeight:1.5}}>{u.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress an Image to 50KB — 4 Steps</h2>
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

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Best Practices for 50KB Images</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {tips.map((tip,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'10px',padding:'16px 20px',borderLeft:'3px solid #818cf8'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>✓ {tip.title}</div>
              <div style={{fontSize:'13px',opacity:0.65,lineHeight:1.6}}>{tip.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>CompressTo20KB vs Competitors — 50KB Compression</h2>
        <div style={{overflowX:'auto',marginBottom:'40px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Feature</th>
                <th style={{padding:'10px 12px',color:'#818cf8',fontWeight:800}}>CompressTo20KB</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>11zon</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>TinyPNG</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>iLoveIMG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['On-device (no upload)','✅ Yes','❌ Server','❌ Server','❌ Server'],
                ['Exact 50KB target','✅ Yes','⚠️ Approx','❌ No','❌ No'],
                ['Batch 50 files','✅ Yes','⚠️ Limited','⚠️ 20/month','⚠️ Limited'],
                ['HEIC (iPhone) support','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                ['Free unlimited','✅ Yes','⚠️ Limits','⚠️ 20/month','⚠️ Limits'],
                ['Safe for passport/ID','✅ 100%','❌ Uploads','❌ Uploads','❌ Uploads'],
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
            {href:'/compress-to-20kb',label:'📄 Compress to 20KB'},
            {href:'/compress-to-100kb',label:'📁 Compress to 100KB'},
            {href:'/compress-to-200kb',label:'📦 Compress to 200KB'},
            {href:'/compress-passport-photo',label:'🪪 Passport Photo'},
            {href:'/compress-for-uscis',label:'🏛️ For USCIS'},
            {href:'/compress-image-for-visa',label:'🛂 For Visa Applications'},
          ].map(({href,label})=>(
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'13px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
