"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const forms=[
  {form:'I-485',name:'Application to Register Permanent Residence',maxKB:'240KB',dim:'2×2 in / 600×600 px',fmt:'JPEG'},
  {form:'I-130',name:'Petition for Alien Relative',maxKB:'240KB',dim:'2×2 in / 600×600 px',fmt:'JPEG'},
  {form:'I-90',name:'Application to Replace Green Card',maxKB:'240KB',dim:'2×2 in / 600×600 px',fmt:'JPEG'},
  {form:'I-131',name:'Application for Travel Document',maxKB:'240KB',dim:'2×2 in / 600×600 px',fmt:'JPEG'},
];
const faq=[
  {q:'What are the photo requirements for a green card application?',a:'USCIS requires a JPEG photo, 2×2 inches (600×600 pixels), under 240KB, with a plain white background, taken within the last 6 months.'},
  {q:'How do I compress my photo for the I-485 form?',a:'Upload your photo to our tool, select Exact KB mode, set the target to 200KB, choose JPEG, and compress. 200KB is safely under the 240KB limit.'},
  {q:'Do I need a professional photo for a green card?',a:'USCIS recommends professional photos but does not require them. Your photo must meet the technical requirements: white background, neutral expression, correct dimensions and file size.'},
  {q:'Can I submit the same photo for multiple USCIS forms?',a:'Yes, if the photo meets all requirements and was taken recently. Just compress it to under 240KB for each online form submission.'},
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
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → Green Card Photo Requirements
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Green Card Photo Size Requirements 2025<br/><span style={{color:'#818cf8'}}>I-485 · I-130 · I-90 · I-131</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Getting your green card photo requirements right is critical — USCIS will reject your application if the photo doesn't meet their exact specifications. Here's everything you need to know, plus a free tool to compress your photo instantly.</p>
        <div style={{background:'rgba(52,211,153,0.08)',border:'1px solid rgba(52,211,153,0.25)',borderRadius:'12px',padding:'16px 20px',marginBottom:'32px'}}>
          <strong style={{color:'#6ee7b7'}}>✅ Quick Summary:</strong>
          <span style={{opacity:0.8,fontSize:'14px'}}> JPEG format · 2×2 inches (600×600 px) · Under 240KB · White background · Recent photo</span>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Photo Requirements by Form</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Form','Purpose','Max File Size','Dimensions','Format'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{forms.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:700,color:'#a5b4fc'}}>{r.form}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.name}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.maxKB}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.dim}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.fmt}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Compress Your Green Card Photo — Free</h2>
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
              ['/compress-for-uscis','USCIS Compressor'],
              ['/compress-passport-photo-usa','US Passport'],
              ['/compress-image-for-visa','Visa Photo'],
              ['/compress-to-100kb','Compress to 100KB'],
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
