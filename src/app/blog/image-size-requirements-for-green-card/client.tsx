"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
import { faq } from './faq';
const forms=[
  {form:'I-485',name:'Application to Register Permanent Residence',limit:'2×2 printed per instructions',note:'Adjustment of Status (Green Card)'},
  {form:'I-130',name:'Petition for Alien Relative',limit:'2×2 printed per instructions',note:'Family-based immigration'},
  {form:'I-90',name:'Application to Replace Permanent Resident Card',limit:'New photo at biometrics',note:'Green Card renewal'},
  {form:'I-751',name:'Petition to Remove Conditions on Residence',limit:'2×2 printed per instructions',note:'Conditional Green Card removal'},
  {form:'I-131',name:'Application for Travel Document',limit:'2×2 printed per instructions',note:'Re-entry permit, refugee travel'},
];

const schemaData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.compressto20kb.com"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.compressto20kb.com/blog"},
      {"@type": "ListItem", "position": 3, "name": "image size requirements for green card", "item": "https://www.compressto20kb.com/blog/image-size-requirements-for-green-card"}
    ]
  }
};

export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',fontFamily:'system-ui,sans-serif'}}>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData.breadcrumb)}} />

<div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → Green Card Photo Requirements</div>
        <div style={{display:'inline-block',background:'rgba(52,211,153,0.1)',border:'1px solid rgba(52,211,153,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#6ee7b7'}}>🟢 Green Card · Permanent Residence</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Green Card Photo Size Requirements 2026<br/><span style={{color:'#818cf8'}}>I-485 · I-130 · I-90 · I-751</span></h1>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',marginBottom:'16px',marginTop:'4px'}}>Last updated May 2026 &nbsp;·&nbsp; By the CompressTo20KB Team &nbsp;·&nbsp; 5 min read</p>
                <div className="answer-first" style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'10px',padding:'16px 20px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#c8d0e7'}}><strong style={{color:'#818cf8'}}>Quick answer:</strong> Use our free compressor above — compress any image to your target size in seconds, directly in your browser. No upload, no account, no watermark. Supports JPEG, PNG, WebP, and AVIF.</p>
        </div>
        <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'10px',padding:'16px 20px',marginBottom:'24px'}}>
          <img src="/images/blog/passport.svg" alt="image size requirements for green card — compressto20kb.com" width={800} height={420} style={{width:'100%',height:'auto',borderRadius:'8px',margin:'24px 0'}} loading="lazy" /><p style={{fontSize:'13px',fontWeight:800,color:'#818cf8',marginBottom:'10px',marginTop:0,textTransform:'uppercase' as const,letterSpacing:'0.06em'}}>Key Takeaways</p>
          <ul style={{margin:0,paddingLeft:'18px',color:'#c8d0e7',fontSize:'14px',lineHeight:1.85}}>
            <li>All compression happens <strong style={{color:'#fff'}}>in your browser</strong> — images never leave your device</li>
            <li>Supports <strong style={{color:'#fff'}}>JPEG, PNG, WebP, AVIF</strong> — convert between formats in one click</li>
            <li>Lossy WebP runs about <strong style={{color:'#fff'}}>25–34% smaller</strong> than a comparable JPEG (Google's own figures)</li>
            <li>Free, no account, no watermark — <strong style={{color:'#fff'}}>targets from 5 to 5000 KB, up to 50 files per batch</strong></li>
            <li>Use the quality slider to find the sweet spot between size and sharpness</li>
          </ul>
        </div>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>USCIS green card forms ask for printed 2×2 inch photographs following each form instructions — uscis.gov does not publish a digital file-size (KB) limit (checked October 2026). Here is what each form wants, where the "240KB" figure really comes from, and how to compress a digital copy so it fits any upload box.</p>
        <div style={{background:'rgba(52,211,153,0.08)',border:'1px solid rgba(52,211,153,0.2)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#6ee7b7'}}>📋 What is actually published:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> USCIS forms request 2×2 inch (51×51 mm) printed photos per their instructions, with no KB cap on uscis.gov. The 240KB JPEG figure you see online comes from the State Department photo pages (travel.state.gov) for passports and visas, not from USCIS.</span>
        </div>
        <p style={{fontSize:'13px',color:'rgba(200,208,231,0.68)',lineHeight:1.7,margin:'24px 0'}}>Where a digital upload does appear in a US immigration flow, the practical reference is the State Department standard: square JPEG, 600×600 to 1200×1200 pixels, 240KB or less (travel.state.gov, checked October 2026). The 20KB figure is a folklore number, not a published rule.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Photo Requirements by Form</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'15px'}}>
            <thead><tr style={{background:'rgba(52,211,153,0.1)'}}>
              {['Form','Application','Photo Limit','Notes'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{forms.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:700,color:'#6ee7b7'}}>{r.form}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.name}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.limit}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.72,fontSize:'12px'}}>{r.note}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your Green Card Photo (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.72,marginBottom:'20px'}}>Pre-set to 200KB JPEG — a comfortable margin under the State Department 240KB reference ceiling, for any online upload box. The result comes back at or under that number, and your files never leave the browser.</p>
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
            {([['/compress-for-uscis','USCIS Photo Tool'],['/blog/how-to-compress-image-for-uscis','USCIS Guide'],['/blog/how-to-compress-photo-for-ds160','DS-160'],['/blog/us-passport-photo-requirements','US Passport']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#c7d2fe',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
