"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
import { faq } from './faq';
const forms=[
  {form:'N-400',name:'Application for Naturalization',limit:'Printed 2×2 photos per form instructions'},
  {form:'DS-160',name:'Nonimmigrant Visa (B1/B2, F1, H1B) — State Department',limit:'Digital JPEG, 240KB max'},
  {form:'I-485',name:'Adjustment of Status (Green Card)',limit:'Printed 2×2 photos per form instructions'},
  {form:'I-130',name:'Petition for Alien Relative',limit:'See current form instructions'},
  {form:'US Passport Online',name:'Passport application/renewal — State Department',limit:'Digital JPEG, 240KB max'},
];
const steps=[
  {n:'1',t:'Check your photo dimensions',d:'Your photo must be at least 600×600 pixels (2×2 inches). If it is smaller, reshoot or upscale before compressing.'},
  {n:'2',t:'Ensure white background',d:'US government photo rules ask for a plain white or off-white background. No shadows, no patterns, no other people.'},
  {n:'3',t:'Upload your photo below',d:'Drag and drop or click to upload. Supports JPEG, PNG, HEIC from iPhone, and WebP.'},
  {n:'4',t:'Select Target KB Mode → 200KB',d:'Type 200 in the target field. That sits comfortably under the 240KB ceiling the State Department publishes for passport and visa uploads.'},
  {n:'5',t:'Choose JPEG format',d:'Passport and visa uploads ask for JPEG. Select JPEG in the format options.'},
  {n:'6',t:'Click Compress and download',d:'Your compressed photo is ready in seconds. Everything happens in your browser — no upload to any server.'},
];

const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "how to compress image for uscis", "item": "https://www.compressto20kb.com/blog/how-to-compress-image-for-uscis"}
    ]
  }
};

export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',fontFamily:'system-ui,sans-serif'}}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

<div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → USCIS Photo Compression Guide</div>
        <div style={{display:'inline-block',background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#fca5a5'}}>🇺🇸 USCIS · Immigration Forms</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>How to Compress Image for USCIS<br/><span style={{color:'#818cf8'}}>N-400 · I-485 · DS-160 · US Passport</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By the CompressTo20KB Team &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p>
        </div>
        <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}>
          <img src="/images/blog/passport.svg" alt="how to compress image for uscis — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0,textTransform:'uppercase' as const,letterSpacing:'0.06em'}}>Key Takeaways</p>
          <ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}>
            <li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li>
            <li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong> — convert between formats in one click</li>
            <li>Lossy WebP runs about <strong style={{color:'#fff'}}>25–34% smaller</strong> than comparable JPEG (Google’s own figures)</li>
            <li>Free, no account, no watermark — targets from 5 to 5000 KB, up to 50 files per batch</li>
            <li>Use the quality slider to find the sweet spot between size and sharpness</li>
          </ul>
        </div>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>If a US immigration or visa form asks for a digital photo, the file usually needs to be smaller than what your phone produces. This guide separates the limits that are actually published from the ones bloggers repeat, and shows how to compress any photo with a free tool that runs entirely in your browser.</p>
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#fca5a5'}}>📋 What is actually published:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> State Department passport and visa uploads: square JPEG, 600×600 to 1200×1200 px, 240KB max (travel.state.gov, checked October 2026). USCIS paper forms ask for printed 2×2 photos in their instructions; we found no universal digital KB cap on uscis.gov.</span>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Which Forms Ask for What</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Form','Purpose','Photo Limit'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{forms.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:700,color:'#818cf8'}}>{r.form}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.name}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.limit}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p style={{fontSize:'13px',opacity:0.7,marginTop:'-20px',marginBottom:'32px'}}>Note: the DS-160 is a State Department form filed at ceac.state.gov, not a USCIS form. When an online portal asks for a digital photo, it states its own limit on the upload screen — trust the screen.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Step-by-Step: Compress Photo for USCIS</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'36px'}}>
          {steps.map((s,i)=>(
            <div key={i} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'16px'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(239,68,68,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,flexShrink:0,color:'#fca5a5'}}>{s.n}</div>
              <div><div style={{fontWeight:700,marginBottom:'4px'}}>{s.t}</div><div style={{fontSize:'15px',opacity:0.65,lineHeight:1.5}}>{s.d}</div></div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your USCIS Photo Now (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.72,marginBottom:'20px'}}>Pre-set to 200KB JPEG, a comfortable margin under the 240KB ceiling the State Department publishes for DS-160 and DV Lottery uploads. USCIS does not publish that same digital-file limit, so treat this as our recommendation rather than a rule. private: the file is processed in your browser and never uploaded.</p>
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
            {([['/compress-for-uscis','USCIS Photo Tool'],['/blog/how-to-compress-photo-for-ds160','DS-160 Guide'],['/blog/dv-lottery-photo-requirements','DV Lottery'],['/blog/image-size-requirements-for-green-card','Green Card']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#c7d2fe',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
