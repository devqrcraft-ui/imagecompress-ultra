"use client";
import Link from 'next/link';

const steps = [
  { n:'1', t:'Add the photo you want to shrink', d:'Click the upload area or drop a file. JPEG, PNG, WebP and iPhone HEIC all work, and a file that starts out far above 20KB is normal — that is the job.' },
  { n:'2', t:'Set the target to 20', d:'Type 20 in Target KB mode, or press the Gov 20KB preset, which sets the target and JPEG output in one click.' },
  { n:'3', t:'Press Compress', d:'The page re-encodes your photo at a series of quality levels and keeps the best one that still lands under 20KB. It happens on your own device, so there is no queue and no upload wait.' },
  { n:'4', t:'Download, then read the size back', d:'Save the file and check its properties in your file manager. If the portal also sets a pixel size, resize to that first and compress again.' },
];

const tips = [
  { title:'Resize before you compress', desc:'A 4000 px photo squeezed to 20KB turns into mush; the same face at 600×600 px stays sharp. Set the pixel size the portal asks for first, then let the KB target handle the rest.' },
  { title:'Start from the sharpest original', desc:'Compression can only throw information away. A fresh phone photo at full resolution gives the encoder more useful detail to keep than an image that was already compressed once.' },
  { title:'Watch out for faces and text', desc:'At 20KB, skin tones and edges are the first things to break. Zoom in to 100% before downloading — if the face looks blocky, crop tighter to the head and compress again.' },
  { title:'Batch the whole form set', desc:'Application packets often want a photo plus signatures and certificates. Add up to 50 files, keep the target at 20 and compress the set in one pass.' },
  { title:'Check the official portal instructions', desc:'Confirm the current maximum and minimum file size, accepted format, pixel dimensions, and crop before compressing. A smaller file is not automatically a compliant file.' },
];

const faqItems = [
  { q:'How do I compress an image to 20KB?', a:'Add your image, switch the tool to Target KB mode, type 20 and press Compress. The compressor tests JPEG quality levels in your browser and keeps the best one whose output still fits inside 20KB.' },
  { q:'Is the result 20KB or under?', a:'The compressor aims to return a file at or below the selected 20KB target. Meeting a file-size cap alone does not guarantee acceptance: the destination may also require a particular format, pixel size, or minimum image quality.' },
  { q:'Does my image get uploaded to a server?', a:'No. Encoding runs locally in your browser. You can prove it: open DevTools, go to the Network tab, compress a photo and watch that no request leaves your machine with your image in it.' },
  { q:'Is 20KB a safe fallback for application portals?', a:'No. A 20KB file only addresses a possible maximum file-size limit. The application may have a lower minimum size, require specific dimensions or a particular format, or reject an image with insufficient quality. Check the official instructions first.' },
  { q:'What format should I use for a 20KB photo?', a:'Use a file format explicitly accepted by the destination. A small file can still be rejected if its format, pixel dimensions, crop, or image quality does not meet the application requirements.' },
  { q:'Can I compress several images to 20KB at once?', a:'Yes — add up to 50 files, keep the target at 20 and compress them in one pass. Download each file on its own or take the whole batch as a ZIP.' },
  { q:'Does it work with iPhone HEIC photos?', a:'Yes. HEIC and HEIF files from the Camera Roll are converted in the browser before compression, so you never have to export a JPEG copy first.' },
  { q:'How do I do this on a phone?', a:'Open compressto20kb.com in Safari or Chrome, tap upload, pick the photo, press the Gov 20KB preset, tap Compress. The finished file saves to your device — no app and no account.' },
];

export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>

      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress to 20KB
        </div>

        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Image to <span style={{color:'#818cf8'}}>20KB</span> Free — No Upload, 100% On Your Device
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'8px'}}>
          Compress a photo to 20KB or less in a few seconds. Check the destination&apos;s format, pixel dimensions, and any minimum size or quality rules too; a file-size cap alone does not guarantee acceptance.
        </p>
        <p style={{fontSize:'15px',opacity:0.68,marginBottom:'32px'}}>
          JPEG · PNG · WebP · HEIC (iPhone) · Batch up to 50 images · No signup, no watermark
        </p>

        {/* CTA */}
        <div style={{background:'rgba(129,140,248,0.12)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>🎯 Target 20KB — Free, In Your Browser</div>
          <p style={{fontSize:'15px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP, HEIC · Up to 50 files at once</p>
          <Link href="/?mode=exactkb&target=20" style={{display:'inline-block',background:'linear-gradient(135deg,#4f46e5,#6d28d9)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
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

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>A 20KB file is not a universal application setting</h2>
        <p style={{fontSize:'14px',opacity:0.72,marginBottom:'40px',lineHeight:1.6}}>
          Treat 20KB as a compression target only when the destination&apos;s current instructions call for it. Application portals can set minimum sizes, pixel dimensions, accepted formats, crops, and image-quality requirements. Check those details first; this tool does not verify compliance.
        </p>

        {/* HOW TO */}
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress an Image to 20KB (Step-by-Step)</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {steps.map(s=>(
            <div key={s.n} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px 20px'}}>
              <div style={{flexShrink:0,width:'36px',height:'36px',borderRadius:'50%',background:'#4f46e5',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'16px'}}>{s.n}</div>
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
            {href:'/compress-for-ds160',label:'📋 DS-160 Photo Tool'},
            {href:'/visa-photo-compressor',label:'🌍 Visa Photo Requirements Hub'},
          ].map(({href,label})=>(
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'15px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
