"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
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
const faq=[
  {q:'What size does a US passport photo need to be?',a:'A US passport photo must be 2×2 inches (51×51 mm), which is 600×600 pixels at 300 DPI. For online passport renewal, the digital file must be under 240KB in JPEG format.'},
  {q:'Can I take my own passport photo at home?',a:'Yes. You can take a passport photo at home with a smartphone if it meets State Department requirements: white background, good lighting, no shadows, JPEG under 240KB.'},
  {q:'How do I compress my passport photo to under 240KB?',a:'Use our free tool — upload your photo, select Exact KB Mode, set target to 200KB, choose JPEG, and download. The whole process takes under 30 seconds.'},
  {q:'Are glasses allowed in US passport photos?',a:'No. Since November 2016, the US State Department does not allow glasses in passport photos, even prescription glasses.'},
  {q:'How recent does my passport photo need to be?',a:'Your passport photo must have been taken within the last 6 months and must accurately represent your current appearance.'},
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

      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'15px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
          <Link href="/compress-passport-photo-usa" style={{color:'white',textDecoration:'none'}}>Passport Tool</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → US Passport Photo Requirements</div>
        <div style={{display:'inline-block',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#818cf8'}}>🪪 US Passport · State Department</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>US Passport Photo Requirements 2025<br/><span style={{color:'#818cf8'}}>Size, Format & How to Compress</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.55)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By Ethan Blake &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p>
        </div>
        <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}>
          <img src="/images/blog/passport.svg" alt="us passport photo requirements — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0,textTransform:'uppercase' as const,letterSpacing:'0.06em'}}>Key Takeaways</p>
          <ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}>
            <li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li>
            <li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong> — convert between formats in one click</li>
            <li>WebP saves <strong style={{color:'#fff'}}>25–50% file size</strong> vs JPEG at the same visual quality</li>
            <li>No file size limit, no account required, <strong style={{color:'#fff'}}>100% free</strong></li>
            <li>Use the quality slider to find the sweet spot between size and sharpness</li>
          </ul>
        </div>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>The US State Department has strict passport photo requirements. For online passport renewal, your photo must be JPEG, 600×600 pixels, and under 240KB. Here is everything you need to know.</p>
        <blockquote style={{borderLeft:'3px solid #818cf8',paddingLeft:'16px',margin:'24px 0',color:'rgba(200,208,231,0.75)',fontSize:'14px',fontStyle:'italic'}}>
          "Compress images to the smallest possible file size without sacrificing quality." — <a href="https://developers.google.com/speed/docs/insights/OptimizeImages" rel="nofollow" target="_blank" style={{color:'#818cf8'}}>Google PageSpeed Insights</a>
        </blockquote>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Official US Passport Photo Requirements</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'10px',marginBottom:'32px'}}>
          {requirements.map((r,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px'}}>
              <div style={{fontSize:'11px',opacity:0.5,marginBottom:'4px',textTransform:'uppercase',letterSpacing:'0.05em'}}>{r.label}</div>
              <div style={{fontWeight:700,fontSize:'14px'}}>{r.value}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your Passport Photo (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>Pre-set to 200KB JPEG — meets US passport online application requirements. 100% private.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'15px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <p style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>Related guides:</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'15px'}}>
            {([['/compress-passport-photo-usa','Passport Compressor'],['/compress-for-uscis','USCIS Tool'],['/blog/how-to-compress-photo-for-ds160','DS-160'],['/blog/dv-lottery-photo-requirements','DV Lottery']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#818cf8',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
