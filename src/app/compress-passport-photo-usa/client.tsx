"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const reqs=[
  {label:'Size',value:'2 × 2 inches (51 × 51 mm)'},
  {label:'Pixels',value:'600 × 600 px minimum'},
  {label:'Format',value:'JPEG / JPG only'},
  {label:'File size',value:'Under 240KB (online)'},
  {label:'Background',value:'Plain white or off-white'},
  {label:'Recency',value:'Taken within 6 months'},
  {label:'Expression',value:'Neutral, both eyes open'},
  {label:'Head position',value:'Front facing, centered'},
];
const faq=[
  {q:'What is the US passport photo size in KB?',a:'For online US passport renewal, the State Department requires a JPEG photo under 240KB. Our tool compresses to 200KB to safely meet this requirement.'},
  {q:'Can I use this for US passport renewal online?',a:'Yes. Upload your 2×2 inch passport photo, compress to 200KB JPEG, then upload to the State Department online renewal portal.'},
  {q:'What are the full US passport photo requirements?',a:'JPEG format, 2×2 inches (600×600 pixels minimum), white background, neutral expression, both eyes open, taken within 6 months, under 240KB.'},
  {q:'What if my passport photo is too large to upload?',a:'This is the most common issue! Upload your photo here, compress to 200KB JPEG, and it will be accepted by the online renewal portal.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'15px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-uscis" style={{color:'white',textDecoration:'none'}}>USCIS Forms</Link>
          <Link href="/compress-image-for-visa" style={{color:'white',textDecoration:'none'}}>Visa Photo</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <div style={{display:'inline-block',background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:'10px',padding:'8px 16px',fontSize:'15px',marginBottom:'20px',color:'#6ee7b7'}}>
          🇺🇸 Pre-set to 200KB JPEG — safely under the 240KB limit
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 16px'}}>Compress <span style={{color:'#818cf8'}}>US Passport Photo</span><br/>to Meet State Dept Requirements</h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'580px',margin:'0 auto 32px',lineHeight:1.6}}>Resize your passport photo to under 240KB JPEG for online US passport renewal. Takes 10 seconds. No upload, 100% private.</p>
      </div>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>US Passport Photo Requirements 2025</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'8px',marginBottom:'32px'}}>
          {reqs.map(r=>(
            <div key={r.label} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'12px 14px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{fontSize:'12px',opacity:0.55}}>{r.label}</span>
              <span style={{fontSize:'15px',fontWeight:700,color:'#a5b4fc'}}>{r.value}</span>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'15px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'32px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'15px'}}>
            {([['/', '20KB'],['/compress-for-uscis','USCIS Forms'],['/compress-image-for-visa','Visa Photo'],['/compress-to-50kb','50KB']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
