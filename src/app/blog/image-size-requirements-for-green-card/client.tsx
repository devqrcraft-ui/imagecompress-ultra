"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const forms=[
  {form:'I-485',name:'Application to Register Permanent Residence',limit:'240KB',note:'Adjustment of Status (Green Card)'},
  {form:'I-130',name:'Petition for Alien Relative',limit:'240KB',note:'Family-based immigration'},
  {form:'I-90',name:'Application to Replace Permanent Resident Card',limit:'240KB',note:'Green Card renewal'},
  {form:'I-751',name:'Petition to Remove Conditions on Residence',limit:'240KB',note:'Conditional Green Card removal'},
  {form:'I-131',name:'Application for Travel Document',limit:'240KB',note:'Re-entry permit, refugee travel'},
];
const faq=[
  {q:'What photo size does USCIS require for I-485?',a:'USCIS requires a JPEG photo under 240KB, 2×2 inches (600×600 pixels), with a white background for I-485 Adjustment of Status applications.'},
  {q:'How many photos do I need for a green card application?',a:'For online I-485 filings, you upload one digital photo under 240KB. For paper filings, you typically need 2 printed 2×2 inch photos.'},
  {q:'Can I use the same photo for I-485 and I-130?',a:'Yes, if the photo meets requirements and was taken within the last 6 months. Both forms require the same USCIS standard: JPEG, 2×2 inches, under 240KB.'},
  {q:'What if my green card photo is rejected by USCIS?',a:'USCIS will send a Request for Evidence (RFE) or reject the upload. Compress your photo to under 200KB JPEG and resubmit.'},
  {q:'Does the I-90 green card renewal require a new photo?',a:'Yes. The I-90 online application requires a new digital photo under 240KB taken within the last 6 months.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'15px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
          <Link href="/compress-for-uscis" style={{color:'white',textDecoration:'none'}}>USCIS Tool</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → Green Card Photo Requirements</div>
        <div style={{display:'inline-block',background:'rgba(52,211,153,0.1)',border:'1px solid rgba(52,211,153,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#6ee7b7'}}>🟢 Green Card · Permanent Residence</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Green Card Photo Size Requirements 2025<br/><span style={{color:'#818cf8'}}>I-485 · I-130 · I-90 · I-751</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>All USCIS green card forms require a digital photo under 240KB in JPEG format. Here are the exact requirements for each form and how to compress your photo to meet them instantly.</p>
        <div style={{background:'rgba(52,211,153,0.08)',border:'1px solid rgba(52,211,153,0.2)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#6ee7b7'}}>📋 Green Card Photo Requirements:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> JPEG only · 2×2 inches (600×600 px) · Under 240KB · White background · Taken within 6 months · No glasses</span>
        </div>
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
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.6,fontSize:'12px'}}>{r.note}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your Green Card Photo (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>Pre-set to 200KB JPEG — safely under the 240KB USCIS limit for all green card forms.</p>
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
            {([['/compress-for-uscis','USCIS Photo Tool'],['/blog/how-to-compress-image-for-uscis','USCIS Guide'],['/blog/how-to-compress-photo-for-ds160','DS-160'],['/blog/us-passport-photo-requirements','US Passport']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
