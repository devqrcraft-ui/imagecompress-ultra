"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const requirements=[
  {item:'File format',value:'JPEG only'},
  {item:'File size',value:'Under 240KB'},
  {item:'Dimensions',value:'600×600 pixels minimum'},
  {item:'Background',value:'White or off-white'},
  {item:'Head position',value:'Centered, facing camera'},
  {item:'Expression',value:'Neutral, mouth closed'},
  {item:'Taken within',value:'Last 6 months'},
];
const faq=[
  {q:'What photo format does DS-160 require?',a:'The DS-160 form requires a JPEG photo under 240KB, at least 600×600 pixels, with a white or off-white background.'},
  {q:'My photo is 3MB — how do I reduce it to under 240KB?',a:'Use our free tool: upload your photo, select Exact KB mode, enter 200, choose JPEG, and compress. Done in seconds.'},
  {q:'Will the US Embassy reject my DS-160 if the photo is wrong?',a:'Yes. An incorrect photo is one of the most common reasons for DS-160 rejection. Always verify your photo meets all requirements before submitting.'},
  {q:'Can I use the same photo for DS-160 and my US visa interview?',a:'The DS-160 photo and the physical photo you bring to the interview should match. The online photo must be under 240KB; the physical photo must be printed 2×2 inches.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-image-for-visa" style={{color:'white',textDecoration:'none'}}>Visa Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → DS-160 Photo Compression
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>How to Compress Photo for DS-160<br/><span style={{color:'#818cf8'}}>US Visa Application Guide 2025</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>The DS-160 is the online nonimmigrant visa application form for the United States. Step 1 of submitting it is uploading a valid photo. This guide covers every requirement and shows you how to compress your photo to the required size in under a minute.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>DS-160 Photo Requirements Checklist</h2>
        <div style={{marginBottom:'32px'}}>
          {requirements.map((r,i)=>(
            <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',background:i%2===0?'rgba(255,255,255,0.03)':'transparent',borderRadius:'8px',fontSize:'14px'}}>
              <span style={{opacity:0.6}}>{r.item}</span>
              <span style={{fontWeight:700,color:'#a5b4fc'}}>{r.value}</span>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Compress Your DS-160 Photo — Free</h2>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([
              ['/compress-image-for-visa','Visa Photo Tool'],
              ['/compress-for-uscis','USCIS Tool'],
              ['/compress-passport-photo-usa','US Passport'],
              ['/compress-to-200kb','Compress to 200KB'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with US Department of State · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
