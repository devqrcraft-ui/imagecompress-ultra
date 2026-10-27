"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
import { faq } from './faq';
const portals=[
  {portal:'US — DS-160 / online passport upload',limit:'under 240KB',format:'JPEG'},
  {portal:'UK — visa & immigration digital photo',limit:'600×750 px, under 6MB',format:'JPEG'},
  {portal:'Pakistan — e-Visa (NADRA)',limit:'under 50KB',format:'JPEG'},
  {portal:'India — e-Visa',limit:'350×350 px, under 300KB',format:'JPEG'},
  {portal:'Japan — visa (online submission)',limit:'under 240KB',format:'JPEG'},
  {portal:'Canada — IRCC online application',limit:'420×540 px, under 4MB',format:'JPEG'},
  {portal:'China — visa',limit:'354×472 px, under 120KB',format:'JPEG'},
];

const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "compress passport photo to 50kb", "item": "https://www.compressto20kb.com/blog/compress-passport-photo-to-50kb"}
    ]
  }
};

export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',fontFamily:'system-ui,sans-serif'}}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

<div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → Compress Passport Photo to 50KB</div>
        <div style={{display:'inline-block',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#818cf8'}}>🪪 Passport · Global</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Passport Photo to 50KB<br/><span style={{color:'#818cf8'}}>For Visa Portals Worldwide</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',marginBottom:'16px',marginTop:'4px'}}>Size limits checked against official portals in October 2026 &nbsp;·&nbsp; By the CompressTo20KB Team &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p>
        </div>
        <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}>
          <img src="/images/blog/passport.svg" alt="compress passport photo to 50kb — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0,textTransform:'uppercase' as const,letterSpacing:'0.06em'}}>Key Takeaways</p>
          <ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}>
            <li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li>
            <li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong> — convert between formats in one click</li>
            <li>WebP saves <strong style={{color:'#fff'}}>25–50% file size</strong> vs JPEG at the same visual quality</li>
            <li>No file size limit, no account required, <strong style={{color:'#fff'}}>100% free</strong></li>
            <li>Use the quality slider to find the sweet spot between size and sharpness</li>
          </ul>
        </div>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Document-upload ceilings run from a few tens of kilobytes to several megabytes, and only the one on your form matters. Set that number in Target KB Mode — 50KB, 20KB, 240KB or anything else — and the tool keeps the best quality that stays under it.</p>
        <blockquote style={{borderLeft:'3px solid #818cf8',paddingLeft:'16px',margin:'24px 0',color:'rgba(200,208,231,0.75)',fontSize:'14px',fontStyle:'italic'}}>
          Google's image guidance comes down to two moves: deliver the picture no larger than it is displayed, and compress until the bytes drop without the image visibly changing. That page is written for page speed, not document photos, but the same two moves decide how sharp a 50KB passport crop looks. <a href="https://developers.google.com/speed/docs/insights/OptimizeImages" rel="nofollow noopener noreferrer" target="_blank" style={{color:'#c7d2fe'}}>Google: optimize images</a>
        </blockquote>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Photo Size Limits by Portal</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Portal','Size Limit','Format'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{portals.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:600}}>{r.portal}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.limit}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.7}}>{r.format}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p style={{fontSize:'13px',opacity:0.68,lineHeight:1.6,marginBottom:'20px'}}>Every figure above was read from that portal's own published guidance in October 2026. Requirements change without notice — confirm on the page you upload from before submitting an application.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress to 50KB or under (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.72,marginBottom:'20px'}}>Switch to Target KB Mode and type your target size. Works for 20KB, 50KB, 100KB, 240KB — any portal requirement.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={50} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'15px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'15px'}}>
            {([['/compress-passport-photo-usa','US Passport Tool'],['/compress-for-uscis','USCIS Tool'],['/compress-to-20kb','Compress to 20KB'],['/blog/dv-lottery-photo-requirements','DV Lottery']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#c7d2fe',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
