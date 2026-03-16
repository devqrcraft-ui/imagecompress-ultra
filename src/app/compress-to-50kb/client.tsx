"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const faq=[
  {q:'How do I compress an image to exactly 50KB?',a:'Upload your image, switch to "Exact KB Mode", type 50, and click Compress. The tool uses binary search to automatically adjust quality until your file hits exactly 50KB — within 1KB accuracy.'},
  {q:'Which file formats can I compress to 50KB?',a:'JPEG, PNG, WebP, AVIF, and HEIC (iPhone) are all supported. JPEG gives the smallest file at 50KB. WebP gives the best quality-to-size ratio. PNG is lossless but harder to hit exactly 50KB.'},
  {q:'Why do government forms require 50KB images?',a:'US government portals (USCIS, passport renewal, TSA PreCheck), Indian exam portals (UPSC, SSC, NEET), and Pakistan NADRA commonly require photos under 50KB. Legacy infrastructure limits upload sizes.'},
  {q:'Is my photo safe when compressing to 50KB online?',a:'Yes — completely safe. Unlike 11zon, MinifyImage, and Cloudinary which upload files to their servers, all compression here runs in your browser via WebAssembly. Your image never leaves your device.'},
  {q:'Can I compress multiple images to 50KB at once?',a:'Yes — upload up to 50 images and compress them all to 50KB in one batch. Download individually or as a ZIP. Most competitors like 11zon and TinyPNG limit batch on free plans.'},
  {q:'How to compress image to 50KB on iPhone or Android?',a:'Open compressto20kb.com in Safari (iPhone) or Chrome (Android). Tap the upload area, select your photo from Camera Roll or Gallery, make sure Exact KB Mode is set to 50, then tap Compress. The file downloads instantly — no app needed.'},
  {q:'What is the best format for a 50KB government photo?',a:'JPEG is the standard for government portals — most require JPEG/JPG format. Set color mode to sRGB. Avoid PNG for 50KB targets as it uses lossless compression and may not reach the target size.'},
  {q:'How to compress passport photo to 50KB?',a:'Use the "Gov 50KB" or set Exact KB Mode to 50. Select JPEG format. Passport photos must be 2×2 inches (600×600px minimum). Our tool compresses the file size without changing dimensions — crop first, then compress.'},
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
        <div style={{marginTop:'32px',marginBottom:'16px'}}>
          <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>CompressTo20KB vs Competitors — 50KB Compression</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
              <thead>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                  <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Feature</th>
                  <th style={{padding:'10px 12px',color:'#818cf8',fontWeight:800}}>CompressTo20KB</th>
                  <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>11zon</th>
                  <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>TinyPNG</th>
                  <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.4)',fontWeight:600}}>iLoveIMG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['On-device (no upload)','✅ Yes','❌ Server','❌ Server','❌ Server'],
                  ['Exact 50KB target','✅ Yes','⚠️ Approx','❌ No','❌ No'],
                  ['Batch up to 50 files','✅ Yes','⚠️ Limited','⚠️ 20/month','⚠️ Limited'],
                  ['HEIC (iPhone) support','✅ Yes','⚠️ Partial','❌ No','❌ No'],
                  ['WebP / AVIF output','✅ Yes','⚠️ Partial','❌ No','⚠️ Partial'],
                  ['Safe for passport/gov docs','✅ 100%','❌ Uploads','❌ Uploads','❌ Uploads'],
                  ['Free unlimited','✅ Yes','⚠️ Limits','⚠️ 20/month','⚠️ Limits'],
                ].map(([feat,...vals],i)=>(
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.06)',background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                    <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)',fontWeight:500}}>{feat}</td>
                    {vals.map((v,j)=>(
                      <td key={j} style={{padding:'10px 12px',textAlign:'center',color:j===0?'#4ade80':v.startsWith('✅')?'#4ade80':v.startsWith('❌')?'#f87171':'#fbbf24',fontWeight:j===0?800:500}}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{marginTop:'32px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <div style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>🔗 Also Try</div>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'13px'}}>
            {([['/', '20KB'],['/compress-to-100kb','100KB'],['/compress-to-200kb','200KB'],['/bulk-image-compressor','Bulk'],['/compress-for-uscis','USCIS']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
