"use client";
import Link from 'next/link';

const useCases = [
  { icon:'🛍️', title:'Ecommerce Product Photos', desc:'Product shots have to stay sharp enough for a zoom view but light enough to load quickly. A 200KB ceiling is a practical middle ground - set it, compress the batch, and check the result with the before/after slider.' },
  { icon:'✍️', title:'Blog & CMS Images', desc:'Hero images and inline photos are usually the heaviest part of an article. Fitting them under 200KB keeps the page light without hand-tuning a quality slider per image.' },
  { icon:'📨', title:'Email Newsletters', desc:'Heavy inline images slow rendering and can push a message over a provider\'s size cap. 200KB is a comfortable working number for a newsletter graphic.' },
  { icon:'📋', title:'Upload fields with a ceiling', desc:'When a form tells you the file must be 200KB or smaller, Target KB Mode is built for that job - type the number it printed. Where a form states a different figure, type that one instead; the ceiling on your screen outranks any number on this page.' },
];

const steps = [
  { n:'1', t:'Add your image', d:'Click the drop zone or drag files in. Accepts JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos). Up to 50 files at once.' },
  { n:'2', t:'Switch to Target KB Mode', d:'Toggle the mode selector from Quality to Target KB. Type 200 in the target size field.' },
  { n:'3', t:'Select your output format', d:'WebP is a good default, AVIF squeezes more when your browser supports it, and JPEG is the safe choice when the receiving site asks for it.' },
  { n:'4', t:'Compress and download', d:'Click Compress. Your browser does the work locally - no server upload. Download the result, which will be 200KB or under.' },
];

const tips = [
  { title:'Try WebP or AVIF before you lower quality further', desc:'Both usually hold more detail than JPEG at the same file size. Compress the same photo twice, compare the previews, and keep whichever you prefer - that comparison is more useful than any percentage we could quote you.' },
  { title:'Start from a sensibly sized image', desc:'A 5000x4000 px master squeezed to 200KB will look worse than one already close to your display size. This tool caps the longest side at 4096 px while it works, but it cannot resize to the exact width you wanted.' },
  { title:'200KB or 100KB - when does it matter?', desc:'Take the larger ceiling your form allows. 200KB leaves more room for fine text, fabric texture and product detail, which is usually where the smaller targets get muddy.' },
  { title:'Compress from the original, not a previous result', desc:'Every lossy re-save throws away more detail. Work from the original file where you can, and avoid re-running the same image through the tool several times.' },
];

export default function ClientPage({ faq }: { faq: [string, string][] }) {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>

      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress to 200KB
        </div>

        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Image to <span style={{color:'#818cf8'}}>200KB</span> Free Online — No Upload, Private
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'32px'}}>
          Compress JPG, PNG, WebP, AVIF, HEIC to 200KB or under directly in your browser — no upload, no watermark, no account.
        </p>

        <div style={{background:'rgba(129,140,248,0.12)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>🎯 Compress to 200KB or under — Free</div>
          <p style={{fontSize:'15px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP, HEIC · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=200" style={{display:'inline-block',background:'linear-gradient(135deg,#4f46e5,#6d28d9)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
            ⚡ Open 200KB Compressor
          </Link>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>When Do You Need 200KB or under?</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginBottom:'16px'}}>200KB sits in the sweet spot for web images: large enough to retain sharp detail, small enough to load quickly on mobile connections. It is the go-to target for ecommerce product photos, blog hero images, and email newsletters where quality matters but speed cannot be sacrificed.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px',marginBottom:'40px'}}>
          {useCases.map((u,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{u.icon}</div>
              <div style={{fontWeight:700,fontSize:'15px',marginBottom:'4px'}}>{u.title}</div>
              <div style={{fontSize:'12px',opacity:0.72,lineHeight:1.5}}>{u.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress an Image to 200KB — 4 Steps</h2>
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

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Best Practices for 200KB Images</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {tips.map((tip,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'10px',padding:'16px 20px',borderLeft:'3px solid #818cf8'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>✓ {tip.title}</div>
              <div style={{fontSize:'15px',opacity:0.65,lineHeight:1.6}}>{tip.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>200KB vs 100KB vs 500KB — Which Should You Use?</h2>
        <div style={{overflowX:'auto',marginBottom:'40px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Target Size</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Best For</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Quality</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Load Speed</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['20KB','Government forms, passport photos','Low','⚡⚡⚡ Fastest'],
                ['100KB','Thumbnails, email, job portals','Good','⚡⚡⚡ Very fast'],
                ['200KB ← this page','Ecommerce, blogs, newsletters','Very good','⚡⚡ Fast'],
                ['500KB','Hero images, print-quality web','Excellent','⚡ Moderate'],
              ].map(([size,use,quality,speed],i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.06)',background:i===2?'rgba(99,102,241,0.1)':i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                  <td style={{padding:'10px 12px',fontWeight:700,color:i===2?'#818cf8':'rgba(255,255,255,0.8)'}}>{size}</td>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontSize:'12px'}}>{use}</td>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)',textAlign:'center' as const}}>{quality}</td>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)',textAlign:'center' as const,fontSize:'12px'}}>{speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {faq.map(([q,a],i)=>(
            <details key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'16px 20px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <summary style={{fontWeight:700,fontSize:'14px',color:'#a5b4fc',cursor:'pointer',listStyle:'none'}}>{q}</summary>
              <p style={{fontSize:'15px',opacity:0.7,marginTop:'10px',lineHeight:1.6}}>{a}</p>
            </details>
          ))}
        </div>


        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>What This Tool Does — So You Can Compare It Yourself</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginBottom:'16px'}}>Some rows of this table used to describe TinyPNG and Squoosh. They are gone: we cannot check what another service allows from here, and their features move without notice. Everything below is a claim about our own code, which we can actually read.</p>
        <div style={{overflowX:'auto' as const,marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse' as const,fontSize:'15px'}}>
            <thead><tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
              <th style={{textAlign:'left' as const,padding:'10px 12px',color:'rgba(255,255,255,0.9)',fontWeight:600}}>Detail</th>
              <th style={{textAlign:'left' as const,padding:'10px 12px',color:'#818cf8',fontWeight:800}}>This tool</th>
            </tr></thead>
            <tbody>
              {[
                ['Where the work happens','On your device — nothing is uploaded'],
                ['Target size','Type any number from 5 to 5000 KB; the result comes back at or under it'],
                ['Files per run','Up to 50, with a ZIP download or one at a time'],
                ['Accepted input','JPG, PNG, WebP, AVIF, HEIC'],
                ['Output formats','WebP, AVIF, JPEG, PNG'],
                ['Resize, crop, background removal','Not offered — file size and encoding only'],
                ['If the file is already under target','Returned unchanged, so no extra generation loss'],
              ].map(([feat,a])=>(
                <tr key={feat} style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
                  <td style={{padding:'9px 12px',color:'rgba(255,255,255,0.75)'}}>{feat}</td>
                  <td style={{padding:'9px 12px',color:'#4ade80',fontWeight:600}}>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontSize:'18px',fontWeight:700,marginBottom:'12px'}}>Related Tools</h2>
        <div style={{display:'flex',flexWrap:'wrap' as const,gap:'10px',marginBottom:'40px'}}>
          {[
            {href:'/',label:'🏠 Home — Image Compressor'},
            {href:'/compress-to-20kb',label:'📄 Compress to 20KB'},
            {href:'/compress-to-50kb',label:'📋 Compress to 50KB'},
            {href:'/compress-to-100kb',label:'📁 Compress to 100KB'},
            {href:'/compress-to-500kb',label:'📦 Compress to 500KB'},
            {href:'/compress-for-shopify',label:'🛍️ For Shopify'},
            {href:'/compress-for-email',label:'📧 For Email'},
          ].map(({href,label})=>(
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'15px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}