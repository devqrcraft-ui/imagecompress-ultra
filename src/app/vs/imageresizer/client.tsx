"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const compare = [
  { feature: 'Free images', us: '✅ Unlimited', them: '⚠️ Limited free tier' },
  { feature: 'Exact KB mode', us: '✅ Yes', them: '❌ No' },
  { feature: 'Bulk compression', us: '✅ 50 at once', them: '❌ One at a time' },
  { feature: 'Privacy', us: '✅ 100% in-browser', them: '❌ Server upload' },
  { feature: 'AVIF/HEIC support', us: '✅ Yes', them: '❌ Limited' },
  { feature: 'Price', us: '✅ Always free', them: '⚠️ Paid plans' },
];
const faq = [
  { q: 'What is the difference between CompressTo20KB and ImageResizer?', a: 'ImageResizer uploads your files to servers and focuses on resizing. CompressTo20KB is browser-based, supports exact KB compression, bulk processing, and never uploads your files.' },
  { q: 'Can I compress to an exact KB size instead of just resizing?', a: 'Yes — CompressTo20KB has an Exact KB Mode where you type a target like 20KB, 100KB or 200KB and it hits that target precisely. ImageResizer only resizes by dimensions.' },
];
export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>Comparison → CompressTo20KB vs ImageResizer</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>CompressTo20KB vs ImageResizer<br/><span style={{color:'#818cf8'}}>Better Free Alternative 2026</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>ImageResizer focuses on dimensions. CompressTo20KB goes further — exact KB targets, bulk compression, AVIF/HEIC support, and 100% browser-based privacy.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Feature Comparison</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Feature','CompressTo20KB','ImageResizer'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{compare.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:600,opacity:0.8}}>{r.feature}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399'}}>{r.us}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.7}}>{r.them}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="quality" defaultFormat="webp"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'13px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/vs/tinypng','vs TinyPNG'],['/vs/iloveimg','vs iLoveIMG'],['/vs/squoosh','vs Squoosh'],['/bulk-image-compressor','Bulk Compress']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
