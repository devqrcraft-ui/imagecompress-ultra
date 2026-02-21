"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const faq=[
  {q:'How do I compress an image to exactly 50KB?',a:'Upload your image, switch to "Exact KB Mode", type 50, and click Compress. The tool automatically adjusts quality until your file is under 50KB.'},
  {q:'Which file formats can I compress to 50KB?',a:'JPEG, PNG, WebP, AVIF, and HEIC are all supported. We recommend JPEG for the smallest output at 50KB.'},
  {q:'Why do government forms require 50KB images?',a:'Many government portals in the USA, India, and Pakistan have strict upload limits. 50KB is a common requirement for passport photos, job applications, and ID documents.'},
  {q:'Is my photo safe when compressing to 50KB online?',a:'Completely safe. All compression happens inside your browser. Your image never touches our servers.'},
  {q:'Can I compress multiple images to 50KB at once?',a:'Yes — upload up to 50 images and compress them all to 50KB in one batch. Download individually or as a ZIP.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-to-100kb" style={{color:'white',textDecoration:'none'}}>100KB</Link>
          <Link href="/bulk-image-compressor" style={{color:'white',textDecoration:'none'}}>Bulk</Link>
        </div>
      </nav>
      <div style={{textAlign:'center',padding:'48px 16px 24px'}}>
        <h1 style={{fontSize:'clamp(28px,5vw,48px)',fontWeight:900,margin:'0 0 16px'}}>Compress Image to <span style={{color:'#818cf8'}}>50KB</span> Free Online</h1>
        <p style={{fontSize:'16px',opacity:0.65,maxWidth:'580px',margin:'0 auto 32px',lineHeight:1.6}}>Instantly reduce any photo to exactly 50KB. No upload, no server — 100% private. Perfect for government portals, job applications, and forms requiring 50KB images.</p>
      </div>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 16px 40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={50} defaultFormat="jpeg"/></div>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 16px 40px'}}>
        <h2 style={{fontSize:'22px',fontWeight:800,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'32px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>🔗 Also Try</div>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', '20KB'],['/compress-to-100kb','100KB'],['/compress-to-200kb','200KB'],['/bulk-image-compressor','Bulk'],['/compress-for-uscis','USCIS']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
