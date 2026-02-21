"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const steps=[
  {n:'1',title:'Open the compressor tool',desc:'Go to CompressTo20KB.com. No account needed, no installation.'},
  {n:'2',title:'Upload your passport photo',desc:'Click or drag your JPEG photo onto the upload area.'},
  {n:'3',title:'Switch to Exact KB Mode',desc:'Click the "Exact KB" tab and type 200 in the target field (safely under the 240KB USCIS limit).'},
  {n:'4',title:'Select JPEG format',desc:'USCIS requires JPEG format. Make sure JPEG is selected.'},
  {n:'5',title:'Download your compressed photo',desc:'Click Compress and download. Your photo is ready to upload to USCIS forms.'},
];
const faq=[
  {q:'What is the USCIS photo file size limit?',a:'USCIS requires photos under 240KB in JPEG format, 600×600 pixels (2×2 inches), with a white background.'},
  {q:'What happens if my photo is over 240KB?',a:'The USCIS online system will reject your application. You must compress the photo before uploading.'},
  {q:'Is it safe to compress my passport photo online?',a:'With CompressTo20KB, yes — all processing happens in your browser. Your photo is never sent to any server.'},
  {q:'Can I compress a PNG photo for USCIS?',a:'USCIS requires JPEG. Our tool automatically converts PNG to JPEG during compression.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-uscis" style={{color:'white',textDecoration:'none'}}>USCIS Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → How to Compress Image for USCIS
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>How to Compress Image for USCIS<br/><span style={{color:'#818cf8'}}>Step-by-Step Guide 2025</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'40px',lineHeight:1.7}}>USCIS requires all photos uploaded to their online forms to be in JPEG format, under 240KB, at 600×600 pixels. Most smartphone photos are 2–5MB — way too large. This guide shows you exactly how to compress your photo in under 60 seconds.</p>
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:'12px',padding:'16px 20px',marginBottom:'36px'}}>
          <strong style={{color:'#fca5a5'}}>⚠️ USCIS Photo Requirements:</strong>
          <span style={{opacity:0.8,fontSize:'14px'}}> JPEG · 600×600 px (2×2 inches) · Under 240KB · White background</span>
        </div>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'20px'}}>Step-by-Step: Compress Photo for USCIS</h2>
        {steps.map((s,i)=>(
          <div key={i} style={{display:'flex',gap:'16px',marginBottom:'20px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}>
            <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'rgba(99,102,241,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:'16px',flexShrink:0}}>{s.n}</div>
            <div><strong style={{fontSize:'15px'}}>{s.title}</strong><p style={{fontSize:'13px',opacity:0.65,margin:'4px 0 0',lineHeight:1.6}}>{s.desc}</p></div>
          </div>
        ))}
        <h2 style={{fontSize:'22px',fontWeight:800,margin:'40px 0 16px'}}>Try It Now — Free USCIS Photo Compressor</h2>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <p style={{margin:'0 0 12px',fontSize:'13px',opacity:0.7}}>Related tools:</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([
              ['/compress-for-uscis','USCIS Compressor'],
              ['/compress-passport-photo-usa','US Passport Photo'],
              ['/compress-image-for-visa','Visa Photo'],
              ['/compress-to-50kb','Compress to 50KB'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with USCIS · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
