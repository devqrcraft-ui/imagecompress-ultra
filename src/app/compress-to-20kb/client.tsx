"use client";
import Link from 'next/link';

const steps = [
  { n:'1', t:'Add the photo you want to shrink', d:'Click the upload area or drop a file. JPEG, PNG, WebP and iPhone HEIC all work, and a file that starts out far above 20KB is normal — that is the job.' },
  { n:'2', t:'Set the target to 20', d:'Type 20 in Target KB mode, or press the Gov 20KB preset, which sets the target and JPEG output in one click.' },
  { n:'3', t:'Press Compress', d:'The page re-encodes your photo at a series of quality levels and keeps the best one that still lands under 20KB. It happens on your own device, so there is no queue and no upload wait.' },
  { n:'4', t:'Download, then read the size back', d:'Save the file and check its properties in your file manager. If the portal also sets a pixel size, resize to that first and compress again.' },
];

const limits = [
  { name:'US DS-160 visa application', url:'https://travel.state.gov', limit:'240KB', note:'JPEG, square, 600×600 to 1200×1200 px' },
  { name:'Pakistan e-Visa / NADRA', url:'https://visa.nadra.gov.pk', limit:'50KB', note:'JPEG, white background' },
  { name:'Japan visa (online)', url:'https://www.moj.go.jp', limit:'240KB', note:'45×45 mm, white background' },
  { name:'South Korea visa', url:'https://www.visa.go.kr', limit:'240KB', note:'35×45 mm, JPEG' },
  { name:'India e-Visa', url:'https://indianvisaonline.gov.in', limit:'300KB', note:'350×350 px, JPEG only' },
  { name:'China visa', url:'https://www.visaforchina.cn', limit:'120KB', note:'354×472 px, white background' },
];

const tips = [
  { title:'Resize before you compress', desc:'A 4000 px photo squeezed to 20KB turns into mush; the same face at 600×600 px stays sharp. Set the pixel size the portal asks for first, then let the KB target handle the rest.' },
  { title:'Start from the sharpest original', desc:'Compression can only throw information away. A fresh phone photo at full resolution gives the encoder more useful detail to keep than an image that was already compressed once.' },
  { title:'Watch out for faces and text', desc:'At 20KB, skin tones and edges are the first things to break. Zoom in to 100% before downloading — if the face looks blocky, crop tighter to the head and compress again.' },
  { title:'Batch the whole form set', desc:'Application packets often want a photo plus signatures and certificates. Add up to 50 files, keep the target at 20 and compress the set in one pass.' },
  { title:'Re-check the portal spec on the day you apply', desc:'Upload limits and pixel requirements change without notice. The numbers below were read from official sources in October 2026 — confirm them on the portal before you submit.' },
];

const faqItems = [
  { q:'How do I compress an image to 20KB?', a:'Add your image, switch the tool to Target KB mode, type 20 and press Compress. The compressor tests JPEG quality levels in your browser and keeps the best one whose output still fits inside 20KB.' },
  { q:'Is the result 20KB or under?', a:'It is 20KB or a little smaller, never larger. Encoders cannot hit a byte count exactly, so the tool takes the highest quality setting that stays under your target. A file a few kilobytes below 20KB is still a pass on every portal that caps uploads at 20KB.' },
  { q:'Does my image get uploaded to a server?', a:'No. Encoding runs locally in your browser. You can prove it: open DevTools, go to the Network tab, compress a photo and watch that no request leaves your machine with your image in it.' },
  { q:'Which portals actually limit photos to 20KB?', a:'A minority of exam and application portals cap uploads that low, and the limit is usually stated next to a pixel size. Large government portals set looser caps — the US DS-160 allows 240KB, Pakistan e-Visa 50KB, India e-Visa 300KB. A 20KB file fits under all of them, which is why it works as a safe fallback when the spec page is unclear.' },
  { q:'What format should I use for a 20KB photo?', a:'JPEG. Portals with very small caps almost always ask for JPEG, and it degrades more predictably than PNG at that size. WebP can hold slightly better quality per byte but is rejected by some older application systems.' },
  { q:'Can I compress several images to 20KB at once?', a:'Yes — add up to 50 files, keep the target at 20 and compress them in one pass. Download each file on its own or take the whole batch as a ZIP.' },
  { q:'Does it work with iPhone HEIC photos?', a:'Yes. HEIC and HEIF files from the Camera Roll are converted in the browser before compression, so you never have to export a JPEG copy first.' },
  { q:'How do I do this on a phone?', a:'Open compressto20kb.com in Safari or Chrome, tap upload, pick the photo, press the Gov 20KB preset, tap Compress. The finished file saves to your device — no app and no account.' },
];

export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>

      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress to 20KB
        </div>

        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Image to <span style={{color:'#818cf8'}}>20KB</span> Free — No Upload, 100% On Your Device
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'8px'}}>
          Get any photo under a 20KB upload limit in a few seconds. The tool keeps the highest quality that still fits, so you get the sharpest file the limit allows — and your image never leaves the browser.
        </p>
        <p style={{fontSize:'15px',opacity:0.5,marginBottom:'32px'}}>
          JPEG · PNG · WebP · HEIC (iPhone) · Batch up to 50 images · No signup, no watermark
        </p>

        {/* CTA */}
        <div style={{background:'rgba(129,140,248,0.12)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>🎯 Target 20KB — Free, In Your Browser</div>
          <p style={{fontSize:'15px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP, HEIC · Up to 50 files at once</p>
          <Link href="/?mode=exactkb&target=20" style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
            ⚡ Open the 20KB Compressor
          </Link>
        </div>

        {/* WHAT 20KB REALLY MEANS */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>What &quot;Compress to 20KB&quot; Really Means</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.75,marginBottom:'12px'}}>
          An upload limit is a ceiling, not a target. A portal that says &quot;maximum 20KB&quot; accepts a 19KB file and rejects a 21KB one, so the useful goal is the <strong>largest quality that stays under the line</strong> — not a file of exactly 20,000 bytes.
        </p>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.75,marginBottom:'12px'}}>
          This is how the encoder gets there: it treats JPEG quality as a range between 5% and 95%, encodes your photo at the midpoint, and moves the range up or down depending on whether that test came in under or over 20KB. It repeats until the range is about three percent wide — usually twelve encodes or fewer — and hands back the highest quality that passed. A photo already under 20KB comes back untouched rather than being re-encoded for nothing.
        </p>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.75,marginBottom:'32px'}}>
          The honest trade-off: at 20KB a full-frame selfie will not look like the original. Cropping to the head and shoulders first, at the pixel size the form asks for, is the single biggest quality win available at that file size.
        </p>

        {/* LIMITS CHECKED */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>Photo Size Limits We Checked</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'16px',lineHeight:1.6}}>
          People reach for 20KB because it clears every cap in the table below with room to spare. None of these portals asks for 20KB specifically — the requirement is whatever their own spec page says, and specs change. Figures read from official sources in October 2026.
        </p>
        <div style={{overflowX:'auto',marginBottom:'12px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Portal</th>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Upload limit</th>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Also specified</th>
              </tr>
            </thead>
            <tbody>
              {limits.map(l=>(
                <tr key={l.name} style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                  <td style={{padding:'10px 12px'}}>
                    <a href={l.url} target="_blank" rel="nofollow noopener noreferrer" style={{color:'#a5b4fc',textDecoration:'none'}}>{l.name}</a>
                  </td>
                  <td style={{padding:'10px 12px',color:'#4ade80',fontWeight:700}}>{l.limit}</td>
                  <td style={{padding:'10px 12px',fontSize:'12px',opacity:0.65}}>{l.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{fontSize:'13px',opacity:0.5,lineHeight:1.6,marginBottom:'40px'}}>
          A 20KB JPEG sits below all six limits, so it uploads even where the form is stricter than its own guidance. If the portal gives you a dimension as well as a size, do the resize first — compressing after a resize preserves far more detail than compressing a full-resolution frame down to 20KB.
        </p>

        {/* HOW TO */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress an Image to 20KB (Step-by-Step)</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {steps.map(s=>(
            <div key={s.n} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px 20px'}}>
              <div style={{flexShrink:0,width:'36px',height:'36px',borderRadius:'50%',background:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'16px'}}>{s.n}</div>
              <div>
                <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>{s.t}</div>
                <div style={{fontSize:'15px',opacity:0.65,lineHeight:1.6}}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* PRIVATE */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>Why On-Device Matters for Document Photos</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.75,marginBottom:'12px'}}>
          A passport or ID photo is one of the more sensitive things you can hand to a website. Tools that proxy your file through their backend keep a copy — sometimes for hours, sometimes longer, under a privacy policy you did not read.
        </p>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.75,marginBottom:'12px'}}>
          Here the decoding and re-encoding happen in the tab you are reading. No pixels are ever sent to any server, so the tool works for passport photos, visa documents, exam forms and other sensitive images.
        </p>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.75,marginBottom:'32px'}}>
          That claim is testable in about ten seconds: press F12, open the Network tab, compress a photo, then look at the requests. You will see page assets and analytics — nothing carrying your image.
        </p>

        {/* TIPS */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Tips for Best Results at 20KB</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {tips.map((tip,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'10px',padding:'16px 20px',borderLeft:'3px solid #818cf8'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>{tip.title}</div>
              <div style={{fontSize:'15px',opacity:0.65,lineHeight:1.6}}>{tip.desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {faqItems.map((item,i)=>(
            <details key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'16px 20px',cursor:'pointer'}}>
              <summary style={{fontWeight:700,fontSize:'14px',color:'#a5b4fc',listStyle:'none'}}>❓ {item.q}</summary>
              <div style={{fontSize:'15px',opacity:0.7,marginTop:'10px',lineHeight:1.6}}>{item.a}</div>
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
            {href:'/compress-for-ds160',label:'📋 DS-160 Photo (240KB)'},
            {href:'/visa-photo-compressor',label:'🌍 Visa Photo Requirements Hub'},
          ].map(({href,label})=>(
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'15px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
