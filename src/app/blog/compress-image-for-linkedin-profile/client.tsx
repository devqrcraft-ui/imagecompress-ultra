"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const specs=[
  {type:'Profile Photo',size:'400×400 px recommended',maxFile:'8MB',fmt:'JPEG or PNG',tip:'Use a professional headshot with a simple background'},
  {type:'Background Banner',size:'1584×396 px recommended',maxFile:'8MB',fmt:'JPEG or PNG',tip:'Keep important content away from edges'},
  {type:'Post Images',size:'1200×627 px recommended',maxFile:'5MB',fmt:'JPEG or PNG',tip:'Landscape format performs best in feed'},
  {type:'Article Cover',size:'1920×1080 px recommended',maxFile:'10MB',fmt:'JPEG or PNG',tip:'High-impact visual for thought leadership'},
];
const faq=[
  {q:'What is the best size for a LinkedIn profile photo?',a:'LinkedIn recommends 400×400 pixels for profile photos. The file must be JPEG or PNG under 8MB. For best quality, upload 800×800px — LinkedIn will display it at 400×400.'},
  {q:'Why does my LinkedIn profile photo look blurry?',a:'This usually happens when you upload a photo that is too small. Use at least 400×400 pixels, preferably 800×800. Compressing a large image keeps quality while reducing file size.'},
  {q:'What size is the LinkedIn background banner?',a:'The ideal LinkedIn background banner size is 1584×396 pixels. It will be cropped differently on mobile vs desktop, so keep key content in the center.'},
  {q:'Does LinkedIn compress images automatically?',a:'Yes, LinkedIn recompresses uploaded images. Starting with a high-quality, properly sized image ensures the final result looks sharp after LinkedIn\'s own compression.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-linkedin" style={{color:'white',textDecoration:'none'}}>LinkedIn Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → Compress Image for LinkedIn
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Image for LinkedIn Profile<br/><span style={{color:'#818cf8'}}>Perfect Size Guide 2025</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Your LinkedIn profile photo is often the first impression you make on recruiters and potential clients. Using the right image size ensures your profile looks sharp and professional on all devices.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'20px'}}>LinkedIn Image Size Specs</h2>
        <div style={{marginBottom:'32px'}}>
          {specs.map((s,i)=>(
            <div key={i} style={{marginBottom:'12px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'8px'}}>
                <strong style={{color:'#a5b4fc'}}>{s.type}</strong>
                <span style={{fontSize:'12px',opacity:0.5,background:'rgba(255,255,255,0.05)',padding:'2px 8px',borderRadius:'10px'}}>{s.fmt}</span>
              </div>
              <div style={{fontSize:'13px',opacity:0.7}}><span style={{color:'#34d399',fontWeight:700}}>{s.size}</span> · Max {s.maxFile}</div>
              <div style={{fontSize:'12px',opacity:0.5,marginTop:'4px'}}>💡 {s.tip}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Compress Your LinkedIn Photo — Free</h2>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="quality" defaultFormat="jpeg"/></div>
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
              ['/compress-for-linkedin','LinkedIn Tool'],
              ['/compress-for-email','Email Images'],
              ['/compress-for-squarespace','Squarespace'],
              ['/bulk-image-compressor','Bulk Compress'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with LinkedIn · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
