"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
import { faq } from './faq';
const steps=[
  {n:'1',t:'Open the DS-160 form at ceac.state.gov',d:'Go to the official US visa application portal. Select your embassy location and start a new application.'},
  {n:'2',t:'Prepare your photo',d:'JPEG format, 600×600 pixels minimum, white background, taken within 6 months. No glasses, no head coverings (except religious).'},
  {n:'3',t:'Compress to under 240KB',d:'The DS-160 only accepts JPEG files of 240KB or less. Use our tool below — pre-set to 200KB for a comfortable margin under the ceiling.'},
  {n:'4',t:'Upload on the Photo Upload page',d:'In the DS-160 form, find the photo upload section. Click Browse, select your compressed JPEG, and upload.'},
  {n:'5',t:'Verify the preview',d:'The portal shows a cropped preview. Make sure your face is centered and clearly visible before continuing.'},
];

const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "how to compress photo for ds160", "item": "https://www.compressto20kb.com/blog/how-to-compress-photo-for-ds160"}
    ]
  }
};

export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',fontFamily:'system-ui,sans-serif'}}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

<div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → DS-160 Photo Guide</div>
        <div style={{display:'inline-block',background:'rgba(251,191,36,0.1)',border:'1px solid rgba(251,191,36,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#fde68a'}}>🇺🇸 US Nonimmigrant Visa</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>How to Compress Photo for DS-160<br/><span style={{color:'#818cf8'}}>US Visa Application 2026</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By the CompressTo20KB Team &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p>
        </div>
        <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}>
          <img src="/images/blog/passport.svg" alt="how to compress photo for ds160 — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0,textTransform:'uppercase' as const,letterSpacing:'0.06em'}}>Key Takeaways</p>
          <ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}>
            <li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li>
            <li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong> — convert between formats in one click</li>
            <li>Lossy WebP runs about <strong style={{color:'#fff'}}>25–34% smaller</strong> than a comparable JPEG (Google's own figures)</li>
            <li>Free, no account, no watermark — <strong style={{color:'#fff'}}>targets from 5 to 5000 KB, up to 50 files per batch</strong></li>
            <li>Use the quality slider to find the sweet spot between size and sharpness</li>
          </ul>
        </div>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>The DS-160 at ceac.state.gov accepts a square JPEG of 240KB or less (travel.state.gov, checked October 2026). A photo straight from your phone is usually far bigger than that, so it needs compressing before you upload. Here is how to do it in under a minute.</p>
        <div style={{background:'rgba(251,191,36,0.08)',border:'1px solid rgba(251,191,36,0.2)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#fde68a'}}>📋 DS-160 Photo Requirements:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> JPEG format · 600×600 px minimum · Under 240KB · White background · Taken within 6 months · No glasses</span>
        </div>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',lineHeight:1.7,margin:'24px 0'}}>The 240KB, JPEG and 600–1200 pixel figures above are taken from the State Department digital image requirements pages (travel.state.gov), checked October 2026. The DS-160 itself is filed at ceac.state.gov.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Step-by-Step: Compress Photo for DS-160</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'36px'}}>
          {steps.map((s,i)=>(
            <div key={i} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'16px'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(251,191,36,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,flexShrink:0,color:'#fde68a'}}>{s.n}</div>
              <div><div style={{fontWeight:700,marginBottom:'4px'}}>{s.t}</div><div style={{fontSize:'15px',opacity:0.65,lineHeight:1.5}}>{s.d}</div></div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your DS-160 Photo (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.72,marginBottom:'20px'}}>Pre-set to 200KB JPEG — a comfortable margin under the State Department 240KB ceiling. The result comes back at or under that number, and your files never leave the browser.</p>
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
            {([['/compress-for-uscis','USCIS N-400'],['/blog/dv-lottery-photo-requirements','DV Lottery'],['/blog/us-passport-photo-requirements','US Passport'],['/compress-image-for-visa','Visa Photo Tool']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#c7d2fe',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
