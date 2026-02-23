"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const forms=[
  {form:'N-400',name:'Application for Naturalization',limit:'240KB'},
  {form:'DS-160',name:'Nonimmigrant Visa (B1/B2, F1, H1B)',limit:'240KB'},
  {form:'I-485',name:'Adjustment of Status (Green Card)',limit:'240KB'},
  {form:'I-130',name:'Petition for Alien Relative',limit:'240KB'},
  {form:'US Passport Online',name:'Passport Renewal',limit:'240KB'},
];
const steps=[
  {n:'1',t:'Check your photo dimensions',d:'Your photo must be at least 600×600 pixels (2×2 inches). If it is smaller, reshoot or upscale before compressing.'},
  {n:'2',t:'Ensure white background',d:'USCIS requires a plain white or off-white background. No shadows, no patterns, no other people.'},
  {n:'3',t:'Upload your photo below',d:'Drag and drop or click to upload. Supports JPEG, PNG, HEIC from iPhone, and WebP.'},
  {n:'4',t:'Select Exact KB Mode → 200KB',d:'Type 200 in the target field. This gives you a safe margin below the 240KB USCIS limit.'},
  {n:'5',t:'Choose JPEG format',d:'USCIS only accepts JPEG. Select JPEG in the format options.'},
  {n:'6',t:'Click Compress and download',d:'Your compressed photo is ready in seconds. Everything happens in your browser — no upload to any server.'},
];
const faq=[
  {q:'What is the USCIS photo size requirement?',a:'USCIS requires photos in JPEG format, 2×2 inches (600×600 pixels), under 240KB for all online forms including N-400, DS-160, I-485, and US passport applications.'},
  {q:'What happens if my USCIS photo is over 240KB?',a:'The USCIS online portal will reject your upload with an error message. You must compress the photo and re-upload before you can continue with your application.'},
  {q:'Is 200KB safe for USCIS forms?',a:'Yes. 200KB gives you a comfortable margin below the 240KB limit and ensures your photo is accepted by the USCIS portal without issues.'},
  {q:'Can I use PNG for USCIS photo?',a:'No. USCIS requires JPEG format only. Our tool automatically converts your photo to JPEG during compression.'},
  {q:'Does compressing reduce photo quality?',a:'At 200KB, the quality loss is minimal and not visible on screen. USCIS officers review digital versions — a properly compressed JPEG at 200KB looks identical to the original.'},
  {q:'Is this tool affiliated with USCIS?',a:'No. This is an independent free tool. The official USCIS website is uscis.gov. Always submit your application directly through official government portals.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
          <Link href="/compress-for-uscis" style={{color:'white',textDecoration:'none'}}>USCIS Tool</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → USCIS Photo Compression Guide</div>
        <div style={{display:'inline-block',background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#fca5a5'}}>🇺🇸 USCIS · Immigration Forms</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>How to Compress Image for USCIS<br/><span style={{color:'#818cf8'}}>N-400 · I-485 · DS-160 · US Passport</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Every USCIS online form requires a JPEG photo under 240KB. If your photo is too large, the portal will reject it. This guide shows you how to compress any photo to meet USCIS requirements in under 60 seconds — free, no upload.</p>
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#fca5a5'}}>📋 USCIS Photo Requirements:</strong>
          <span style={{fontSize:'14px',opacity:0.85}}> JPEG only · 600×600 px (2×2 inches) · Under 240KB · White background · Taken within 6 months</span>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Which USCIS Forms Require Photo Compression?</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Form','Purpose','Photo Limit'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{forms.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:700,color:'#a5b4fc'}}>{r.form}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.name}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.limit}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Step-by-Step: Compress Photo for USCIS</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'36px'}}>
          {steps.map((s,i)=>(
            <div key={i} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'16px'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(239,68,68,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,flexShrink:0,color:'#fca5a5'}}>{s.n}</div>
              <div><div style={{fontWeight:700,marginBottom:'4px'}}>{s.t}</div><div style={{fontSize:'13px',opacity:0.65,lineHeight:1.5}}>{s.d}</div></div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your USCIS Photo Now (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>Pre-set to 200KB JPEG — safely under the USCIS 240KB limit. 100% private, files never leave your browser.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <p style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>Related guides:</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/compress-for-uscis','USCIS Photo Tool'],['/blog/how-to-compress-photo-for-ds160','DS-160 Guide'],['/blog/dv-lottery-photo-requirements','DV Lottery'],['/blog/image-size-requirements-for-green-card','Green Card']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with USCIS · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
