"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const requirements=[
  {label:'Size',value:'2×2 inches (600×600 pixels minimum)'},
  {label:'Format',value:'JPEG only'},
  {label:'File size',value:'Under 240KB for online applications'},
  {label:'Background',value:'Plain white or off-white'},
  {label:'Recency',value:'Taken within the last 6 months'},
  {label:'Expression',value:'Neutral, mouth closed, eyes open'},
  {label:'Glasses',value:'Not allowed (since November 2016)'},
  {label:'Head coverings',value:'Not allowed except for religious reasons'},
];
const faq=[
  {q:'What size does a US passport photo need to be?',a:'A US passport photo must be 2×2 inches (51×51 mm), which is 600×600 pixels at 300 DPI. For online passport renewal, the digital file must be under 240KB in JPEG format.'},
  {q:'Can I take my own passport photo at home?',a:'Yes. You can take a passport photo at home with a smartphone if it meets State Department requirements: white background, good lighting, no shadows, JPEG under 240KB.'},
  {q:'How do I compress my passport photo to under 240KB?',a:'Use our free tool — upload your photo, select Exact KB Mode, set target to 200KB, choose JPEG, and download. The whole process takes under 30 seconds.'},
  {q:'Are glasses allowed in US passport photos?',a:'No. Since November 2016, the US State Department does not allow glasses in passport photos, even prescription glasses.'},
  {q:'How recent does my passport photo need to be?',a:'Your passport photo must have been taken within the last 6 months and must accurately represent your current appearance.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'15px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
          <Link href="/compress-passport-photo-usa" style={{color:'white',textDecoration:'none'}}>Passport Tool</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'15px',opacity:0.5,marginBottom:'12px'}}><Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> → US Passport Photo Requirements</div>
        <div style={{display:'inline-block',background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'10px',padding:'6px 14px',fontSize:'12px',marginBottom:'16px',color:'#a5b4fc'}}>🪪 US Passport · State Department</div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>US Passport Photo Requirements 2025<br/><span style={{color:'#818cf8'}}>Size, Format & How to Compress</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>The US State Department has strict passport photo requirements. For online passport renewal, your photo must be JPEG, 600×600 pixels, and under 240KB. Here is everything you need to know.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Official US Passport Photo Requirements</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'10px',marginBottom:'32px'}}>
          {requirements.map((r,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px'}}>
              <div style={{fontSize:'11px',opacity:0.5,marginBottom:'4px',textTransform:'uppercase',letterSpacing:'0.05em'}}>{r.label}</div>
              <div style={{fontWeight:700,fontSize:'14px'}}>{r.value}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'12px'}}>Compress Your Passport Photo (Free)</h2>
        <p style={{fontSize:'14px',opacity:0.6,marginBottom:'20px'}}>Pre-set to 200KB JPEG — meets US passport online application requirements. 100% private.</p>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={200} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>FAQ</h2>
        {faq.map((f,i)=>(
          <details key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px 16px',marginBottom:'8px',cursor:'pointer'}}>
            <summary style={{fontWeight:700,fontSize:'14px',listStyle:'none'}}>❓ {f.q}</summary>
            <p style={{marginTop:'10px',fontSize:'15px',opacity:0.7,lineHeight:1.6}}>{f.a}</p>
          </details>
        ))}
        <div style={{marginTop:'36px',padding:'20px',background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.2)',borderRadius:'12px'}}>
          <p style={{fontWeight:700,marginBottom:'12px',fontSize:'14px'}}>Related guides:</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',fontSize:'15px'}}>
            {([['/compress-passport-photo-usa','Passport Compressor'],['/compress-for-uscis','USCIS Tool'],['/blog/how-to-compress-photo-for-ds160','DS-160'],['/blog/dv-lottery-photo-requirements','DV Lottery']] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
