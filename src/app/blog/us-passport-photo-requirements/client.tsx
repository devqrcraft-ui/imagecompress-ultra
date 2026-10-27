"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
import { faq } from './faq';
const requirements=[
  {label:'Size',value:'2×2 inches (600×600 pixels minimum)'},
  {label:'Format',value:'JPEG only'},
  {label:'File size',value:'Under 240KB for online applications'},
  {label:'Background',value:'Plain white or off-white'},
  {label:'Recency',value:'Taken within the last 6 months'},
  {label:'Expression',value:'Neutral, mouth closed, eyes open'},
  {label:'Glasses',value:'Not allowed (since November 2016)'},
  {label:'Head coverings',value:'Not allowed except for religious reasons'},
];

const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "us passport photo requirements", "item": "https://www.compressto20kb.com/blog/us-passport-photo-requirements"}
    ]
  }
};

export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',fontFamily:'system-ui,sans-serif'}}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

<div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → US Passport Photo Requirements</div>
        <div style={{display:'inline-block',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#818cf8'}}>🪪 US Passport · State Department</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>US Passport Photo Requirements 2026<br/><span style={{color:'#818cf8'}}>Size, Format & How to Compress</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By the CompressTo20KB Team &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p>
        </div>
        <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}>
          <img src="/images/blog/passport.svg" alt="us passport photo requirements — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0,textTransform:'uppercase' as const,letterSpacing:'0.06em'}}>Key Takeaways</p>
          <ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}>
            <li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li>
            <li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong> — convert between formats in one click</li>
            <li>Lossy WebP runs about <strong style={{color:'#fff'}}>25–34% smaller</strong> than a comparable JPEG (Google's own figures)</li>
            <li>Free, no account, no watermark — <strong style={{color:'#fff'}}>targets from 5 to 5000 KB, up to 50 files per batch</strong></li>
            <li>Use the quality slider to find the sweet spot between size and sharpness</li>
          </ul>
        </div>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>The US State Department sets the passport photo rules. For an online renewal the file must be a square JPEG between 600×600 and 1200×1200 pixels and no larger than 240KB (travel.state.gov, checked October 2026). Here is everything you need to know.</p>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',lineHeight:1.7,margin:'24px 0'}}>The 240KB, JPEG and 600–1200 pixel figures on this page come from the State Department photo pages (travel.state.gov, checked October 2026). A "20KB passport photo" is a web myth, not a published rule — the real ceiling is 240KB.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Official US Passport Photo Requirements</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'10px',marginBottom:'32px'}}>
          {requirements.map((r,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px'}}>
              <div style={{fontSize:'11px',opacity:0.68,marginBottom:'4px',textTransform:'uppercase',letterSpacing:'0.05em'}}>{r.label}</div>
              <div style={{fontWeight:700,fontSize:'14px'}}>{r.value}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your Passport Photo (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.72,marginBottom:'20px'}}>Pre-set to 200KB JPEG, which keeps you inside the 240KB ceiling the State Department publishes for digital photos. Check the size and head-dimension rules on the official page before you submit - private, nothing is uploaded.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        {faq.map(([q, a], i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>{q}</summary>
            <p style={{marginTop:'10px',fontSize:'15px',opacity:0.7,lineHeight:1.6}}>{a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <p style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>Related guides:</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'15px'}}>
            {([['/compress-passport-photo-usa','Passport Compressor'],['/compress-for-uscis','USCIS Tool'],['/blog/how-to-compress-photo-for-ds160','DS-160'],['/blog/dv-lottery-photo-requirements','DV Lottery']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#c7d2fe',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
