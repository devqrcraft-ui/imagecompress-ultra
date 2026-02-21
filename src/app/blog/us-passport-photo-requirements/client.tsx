"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const reqs=[
  {item:'Size (print)',value:'2×2 inches (51×51 mm)'},
  {item:'Size (digital)',value:'600×600 pixels minimum'},
  {item:'File format',value:'JPEG'},
  {item:'File size (online)',value:'Under 240KB'},
  {item:'Background',value:'White or off-white'},
  {item:'Expression',value:'Neutral, both eyes open'},
  {item:'Glasses',value:'Not allowed (since 2016)'},
  {item:'Recency',value:'Taken within 6 months'},
  {item:'Head size',value:'1 to 1⅜ inches from chin to top of head'},
];
const faq=[
  {q:'What size should a US passport photo be?',a:'US passport photos must be 2×2 inches (51×51 mm) when printed. For online renewal, upload a JPEG of at least 600×600 pixels, under 240KB.'},
  {q:'Can I wear glasses in a US passport photo?',a:'No. The US Department of State stopped allowing glasses in passport photos in November 2016. You must remove glasses for your passport photo.'},
  {q:'What background color is required for a US passport photo?',a:'The background must be plain white or off-white. No patterns, shadows, or other colors are allowed.'},
  {q:'How do I apply for a US passport online?',a:'You can renew an eligible US passport online at travel.state.gov. You\'ll need to upload a digital photo in JPEG format, under 240KB.'},
  {q:'Can I take my own passport photo at home?',a:'Yes, for online renewal. Use a white wall as background, good lighting, and your smartphone. Then compress the photo to under 240KB using our free tool.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-passport-photo-usa" style={{color:'white',textDecoration:'none'}}>Passport Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → US Passport Photo Requirements 2025
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>US Passport Photo Requirements 2025<br/><span style={{color:'#818cf8'}}>Complete Official Guide</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Getting your passport photo wrong is one of the most common reasons for application rejection. This guide covers every official requirement from the US Department of State, plus a free tool to compress your digital photo to the required size.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Official Requirements Checklist</h2>
        <div style={{marginBottom:'32px'}}>
          {reqs.map((r,i)=>(
            <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',background:i%2===0?'rgba(255,255,255,0.03)':'transparent',borderRadius:'8px',fontSize:'14px'}}>
              <span style={{opacity:0.6}}>{r.item}</span>
              <span style={{fontWeight:700,color:'#a5b4fc'}}>{r.value}</span>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Compress Your Passport Photo — Free</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'16px'}}>Online passport renewal requires a JPEG under 240KB. Use our tool to compress your photo instantly.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([
              ['/compress-passport-photo-usa','US Passport Tool'],
              ['/compress-for-uscis','USCIS Tool'],
              ['/compress-image-for-visa','Visa Photo'],
              ['/compress-passport-photo','Passport Photo'],
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
