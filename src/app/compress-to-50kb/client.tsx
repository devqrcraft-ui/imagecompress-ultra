"use client";
import Link from 'next/link';
import { faq } from './faq';

const useCases = [
  { icon:'🪪', title:'ID and passport photos', desc:'Upload fields for identity documents often ask for a small portrait. Whatever number your own form prints, that is the number to type here.' },
  { icon:'📝', title:'Application forms', desc:'Older application systems tend to keep tight upload caps on attachments. This page is about 50KB because it is a common request, not a verified portal rule.' },
  { icon:'💼', title:'Job applications', desc:'Recruiting sites and HR systems vary widely on allowed attachment size. Shrinking the photo or document copy you attach usually takes a few seconds.' },
  { icon:'📧', title:'Email and messaging', desc:'Large attachments bounce or get downscaled by mail services. A 50KB portrait travels anywhere without eating the recipient inbox.' },
];

const steps = [
  { n:'1', t:'Upload your image', d:'Click the upload area or drag your file. Accepts JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos). Up to 50 files at once.' },
  { n:'2', t:'Switch to Target KB Mode', d:'Toggle the mode selector from Quality to Target KB. Type 50 in the target size field. The field accepts anything from 5 to 5000 KB.' },
  { n:'3', t:'Pick the output format', d:'Choose the format your form asks for. JPEG and WebP reach a small target with the least visible loss; a photograph saved as PNG rarely gets this small.' },
  { n:'4', t:'Compress and download', d:'Click Compress. Your browser processes the image locally — nothing is uploaded. Download the result, which will be at or under 50KB.' },
];

const tips = [
  { title:'Match the format your form asks for', desc:'If the upload field names JPEG, output JPEG — the tool can export WebP, AVIF, JPEG or PNG. Do not assume a newer format will be accepted when the form does not mention it.' },
  { title:'This tool does not resize or crop', desc:'It changes file size only. The longest side is capped at 4096 px and nothing is cropped or re-cropped to square. If your form also demands pixel dimensions, set those first in an editor, then compress here.' },
  { title:'Use the original photo, not a screenshot', desc:'Compressing a screenshot adds extra artifacts on top of the size reduction. Start from the original JPEG or PNG the camera produced for the cleanest 50KB result.' },
  { title:'Strictly under? Type one less', desc:'A 50KB target returns a file at or under 50KB. If your form says the file must be under 50KB rather than up to it, set 49 to keep a little headroom.' },
];

export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>

      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress to 50KB
        </div>

        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Image to <span style={{color:'#818cf8'}}>50KB</span> Free Online — No Upload, Private
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'32px'}}>
          Compress JPG, PNG, WebP, AVIF, HEIC to 50KB or under directly in your browser — no upload, no tracking, no watermark.
        </p>

        <div style={{background:'rgba(129,140,248,0.12)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>🎯 Compress to 50KB or under — Free</div>
          <p style={{fontSize:'15px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP, HEIC · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=50" style={{display:'inline-block',background:'linear-gradient(135deg,#4f46e5,#6d28d9)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
            ⚡ Open 50KB Compressor
          </Link>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>When Do You Need 50KB or under?</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginBottom:'16px'}}>Most people reach this page because an upload field has just told them the file has to be 50KB or smaller. We have not verified that figure against any specific portal, and upload limits change without notice, so treat it as the number your own form printed and type it in Target KB Mode. The tool takes you to 50KB or under — and stops there — but it cannot tell you whether a particular site will accept the file.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px',marginBottom:'40px'}}>
          {useCases.map((u,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{u.icon}</div>
              <div style={{fontWeight:700,fontSize:'15px',marginBottom:'4px'}}>{u.title}</div>
              <div style={{fontSize:'12px',opacity:0.72,lineHeight:1.5}}>{u.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress an Image to 50KB — 4 Steps</h2>
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

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Best Practices for 50KB Images</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {tips.map((tip,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'10px',padding:'16px 20px',borderLeft:'3px solid #818cf8'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>✓ {tip.title}</div>
              <div style={{fontSize:'15px',opacity:0.65,lineHeight:1.6}}>{tip.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>What This Tool Does — and Does Not Do</h2>
        <div style={{overflowX:'auto',marginBottom:'40px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Detail</th>
                <th style={{textAlign:'left',padding:'10px 12px',color:'#818cf8',fontWeight:800}}>This tool</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Where the image is processed','In your own browser — the file is not uploaded'],
                ['Files per batch','Up to 50 at a time'],
                ['Accepted input','JPG, PNG, WebP, AVIF, HEIC'],
                ['Output formats','WebP, AVIF, JPEG, PNG'],
                ['Target size range','5 to 5000 KB, treated as a ceiling'],
                ['Resize, crop, background removal','Not available — file size only'],
                ['If the file is already small enough','It comes back unchanged'],
                ['Cost','Free, no account, no watermark'],
              ].map(([feat,val],i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.06)',background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)',fontWeight:500}}>{feat}</td>
                  <td style={{padding:'10px 12px',color:'#e2e8f0'}}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {faq.map(([q, a], i)=>(
            <details key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'16px 20px',cursor:'pointer'}}>
              <summary style={{fontWeight:700,fontSize:'14px',color:'#a5b4fc',listStyle:'none'}}>{q}</summary>
              <div style={{fontSize:'15px',opacity:0.7,marginTop:'10px',lineHeight:1.6}}>{a}</div>
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
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'15px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
