#!/bin/bash
set -e
BASE="src/app/blog"
mkdir -p "$BASE"

# ============================================================
# 1. how-to-compress-image-for-uscis
# ============================================================
mkdir -p "$BASE/how-to-compress-image-for-uscis"
cat > "$BASE/how-to-compress-image-for-uscis/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Image for USCIS — Step-by-Step Guide 2025',
  description: 'Learn how to compress your photo for USCIS forms N-400, DS-160, I-485 to under 240KB. Free online tool, no upload required, 100% private.',
  keywords: 'how to compress image for uscis, uscis photo compression guide, reduce photo size for uscis, uscis 240kb photo',
  alternates: { canonical: '/blog/how-to-compress-image-for-uscis' },
};
export default function Page() { return <ClientPage />; }
EOF
cat > "$BASE/how-to-compress-image-for-uscis/client.tsx" << 'EOF'
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
EOF

# ============================================================
# 2. compress-passport-photo-to-50kb
# ============================================================
mkdir -p "$BASE/compress-passport-photo-to-50kb"
cat > "$BASE/compress-passport-photo-to-50kb/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Passport Photo to 50KB — Free Online Tool',
  description: 'Compress your passport photo to exactly 50KB or under. Works for visa applications, government forms, and travel documents. Free, private, instant.',
  keywords: 'compress passport photo to 50kb, reduce passport photo size 50kb, passport photo 50kb online, passport photo compressor',
  alternates: { canonical: '/blog/compress-passport-photo-to-50kb' },
};
export default function Page() { return <ClientPage />; }
EOF
cat > "$BASE/compress-passport-photo-to-50kb/client.tsx" << 'EOF'
"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const uses=[
  {country:'India',doc:'Passport / Visa',size:'50KB',fmt:'JPEG'},
  {country:'Pakistan',doc:'Passport Application',size:'50KB',fmt:'JPEG'},
  {country:'Bangladesh',doc:'Government Forms',size:'50KB',fmt:'JPEG'},
  {country:'Philippines',doc:'NBI / Passport',size:'50KB',fmt:'JPEG'},
  {country:'Various',doc:'Online Job Applications',size:'50KB',fmt:'JPEG'},
];
const faq=[
  {q:'Why do some forms require photos under 50KB?',a:'Many government portals in South Asia and Southeast Asia have strict file size limits due to older server infrastructure. 50KB is a common maximum.'},
  {q:'Will compressing to 50KB reduce photo quality?',a:'For passport photos (head and shoulders), 50KB is sufficient to maintain clear facial details. Our tool uses smart compression to preserve quality.'},
  {q:'What dimensions should my passport photo be?',a:'Standard passport photos are 35×45mm or 2×2 inches depending on the country. Check your specific country\'s requirements.'},
  {q:'Can I compress a photo to exactly 50KB?',a:'Yes. Use Exact KB Mode and enter 48 to safely land under 50KB.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-to-50kb" style={{color:'white',textDecoration:'none'}}>50KB Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → Compress Passport Photo to 50KB
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Compress Passport Photo to 50KB<br/><span style={{color:'#818cf8'}}>Free Online — Instant Results</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Many visa portals and government websites require passport photos under 50KB. Smartphone cameras produce photos of 2–8MB — hundreds of times too large. Our free tool compresses your photo to exactly the size you need in seconds.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Compress Your Passport Photo to 50KB Now</h2>
        <div style={{marginBottom:'40px'}}><CompressorWidget defaultMode="exactkb" defaultTargetKB={48} defaultFormat="jpeg"/></div>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'16px'}}>Who Needs 50KB Passport Photos?</h2>
        <div style={{overflowX:'auto',marginBottom:'32px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead><tr style={{background:'rgba(99,102,241,0.15)'}}>
              {['Country / Use','Document','Max Size','Format'].map(h=><th key={h} style={{padding:'10px 12px',textAlign:'left',border:'1px solid rgba(255,255,255,0.08)',fontWeight:700}}>{h}</th>)}
            </tr></thead>
            <tbody>{uses.map((r,i)=>(
              <tr key={i} style={{background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',fontWeight:700,color:'#a5b4fc'}}>{r.country}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.doc}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',color:'#34d399',fontWeight:700}}>{r.size}</td>
                <td style={{padding:'10px 12px',border:'1px solid rgba(255,255,255,0.06)',opacity:0.75}}>{r.fmt}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
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
              ['/compress-to-50kb','Compress to 50KB'],
              ['/compress-for-uscis','USCIS Photo'],
              ['/compress-passport-photo-usa','US Passport'],
              ['/compress-image-for-visa','Visa Photo'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
EOF

# ============================================================
# 3. image-size-requirements-for-green-card
# ============================================================
mkdir -p "$BASE/image-size-requirements-for-green-card"
cat > "$BASE/image-size-requirements-for-green-card/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Green Card Photo Size Requirements 2025 — I-485, I-130, I-90',
  description: 'Complete guide to green card photo size requirements for I-485, I-130, and I-90 forms. Compress your photo to meet USCIS 240KB limit instantly.',
  keywords: 'green card photo size requirements, i-485 photo size, compress photo for green card, green card photo 240kb, uscis green card photo',
  alternates: { canonical: '/blog/image-size-requirements-for-green-card' },
};
export default function Page() { return <ClientPage />; }
EOF
cat > "$BASE/image-size-requirements-for-green-card/client.tsx" << 'EOF'
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
EOF

# ============================================================
# 4. how-to-compress-photo-for-ds160
# ============================================================
mkdir -p "$BASE/how-to-compress-photo-for-ds160"
cat > "$BASE/how-to-compress-photo-for-ds160/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Photo for DS-160 Visa Application — Under 240KB',
  description: 'Compress your photo for the DS-160 nonimmigrant visa application to under 240KB. Free tool, no upload, instant results. Meet all State Department requirements.',
  keywords: 'compress photo for ds-160, ds-160 photo size, ds160 photo requirements, compress visa photo ds160, ds-160 240kb photo',
  alternates: { canonical: '/blog/how-to-compress-photo-for-ds160' },
};
export default function Page() { return <ClientPage />; }
EOF
cat > "$BASE/how-to-compress-photo-for-ds160/client.tsx" << 'EOF'
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
EOF

# ============================================================
# 5. best-image-size-for-ebay-listings
# ============================================================
mkdir -p "$BASE/best-image-size-for-ebay-listings"
cat > "$BASE/best-image-size-for-ebay-listings/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Best Image Size for eBay Listings 2025 — Boost Your Sales',
  description: 'Learn the best image size and format for eBay product listings. Compress images to meet eBay requirements and improve page load speed for better rankings.',
  keywords: 'best image size for ebay, ebay listing photo size, compress image for ebay, ebay photo requirements, ebay product image size',
  alternates: { canonical: '/blog/best-image-size-for-ebay-listings' },
};
export default function Page() { return <ClientPage />; }
EOF
cat > "$BASE/best-image-size-for-ebay-listings/client.tsx" << 'EOF'
"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const tips=[
  {title:'Minimum 500×500 pixels',desc:'eBay requires at least 500×500px. For zoom functionality (which increases sales), use 1600×1600px or larger.'},
  {title:'JPEG for product photos',desc:'JPEG gives the best balance of quality and file size for product photography. Use PNG only for images with transparent backgrounds.'},
  {title:'Keep files under 12MB',desc:'eBay\'s hard limit is 12MB per image. But for fast loading, aim for under 500KB — buyers on mobile will thank you.'},
  {title:'White or neutral background',desc:'eBay recommends white backgrounds for primary product images. It looks more professional and ranks better in search.'},
  {title:'Compress before uploading',desc:'Smaller files load faster. Faster pages rank higher in eBay Cassini search. Every second of load time costs you sales.'},
];
const faq=[
  {q:'What is the ideal eBay listing image size?',a:'eBay recommends 1600×1600 pixels with a white background. The file should be JPEG format and ideally under 500KB for fast loading.'},
  {q:'Does image size affect eBay search ranking?',a:'Yes. eBay\'s Cassini algorithm considers listing quality including image quality and page performance. High-resolution, fast-loading images help rankings.'},
  {q:'Can I upload PNG images to eBay?',a:'Yes, eBay accepts JPEG, PNG, GIF, TIFF, and BMP. JPEG is recommended for photos due to smaller file size and good quality.'},
  {q:'How many images can I add to an eBay listing?',a:'eBay allows up to 24 images per listing. Adding multiple high-quality images from different angles significantly increases buyer confidence and conversion rates.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-ebay" style={{color:'white',textDecoration:'none'}}>eBay Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → Best Image Size for eBay Listings
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>Best Image Size for eBay Listings 2025<br/><span style={{color:'#818cf8'}}>Boost Rankings & Sales</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Your eBay listing photos directly affect your search ranking, click-through rate, and conversion rate. Here's everything you need to know about optimal image sizes and how to compress them for maximum performance.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'20px'}}>5 Image Tips to Boost Your eBay Sales</h2>
        {tips.map((t,i)=>(
          <div key={i} style={{marginBottom:'16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}>
            <strong style={{fontSize:'15px',color:'#a5b4fc'}}>0{i+1}. {t.title}</strong>
            <p style={{fontSize:'13px',opacity:0.65,margin:'6px 0 0',lineHeight:1.6}}>{t.desc}</p>
          </div>
        ))}
        <h2 style={{fontSize:'20px',fontWeight:800,margin:'32px 0 16px'}}>Compress eBay Images — Free Tool</h2>
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
              ['/compress-for-ebay','eBay Compressor'],
              ['/compress-for-shopify','Shopify Images'],
              ['/compress-for-amazon','Amazon Images'],
              ['/bulk-image-compressor','Bulk Compress'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with eBay · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
EOF

# ============================================================
# 6. us-passport-photo-requirements
# ============================================================
mkdir -p "$BASE/us-passport-photo-requirements"
cat > "$BASE/us-passport-photo-requirements/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'US Passport Photo Requirements 2025 — Complete Guide',
  description: 'Complete guide to US passport photo requirements in 2025. Size, format, background, expression rules, and how to compress your photo for online applications.',
  keywords: 'us passport photo requirements, passport photo size requirements, passport photo 2x2 inches, compress passport photo online, us passport photo 2025',
  alternates: { canonical: '/blog/us-passport-photo-requirements' },
};
export default function Page() { return <ClientPage />; }
EOF
cat > "$BASE/us-passport-photo-requirements/client.tsx" << 'EOF'
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
EOF

# ============================================================
# 7. compress-image-for-linkedin-profile
# ============================================================
mkdir -p "$BASE/compress-image-for-linkedin-profile"
cat > "$BASE/compress-image-for-linkedin-profile/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Image for LinkedIn Profile — Perfect Size Guide 2025',
  description: 'Compress and optimize your LinkedIn profile photo and banner. Learn the exact dimensions and file sizes for a professional LinkedIn presence.',
  keywords: 'compress image for linkedin, linkedin profile photo size, linkedin banner size, optimize linkedin photo, linkedin image requirements 2025',
  alternates: { canonical: '/blog/compress-image-for-linkedin-profile' },
};
export default function Page() { return <ClientPage />; }
EOF
cat > "$BASE/compress-image-for-linkedin-profile/client.tsx" << 'EOF'
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
EOF

# ============================================================
# 8. how-to-compress-images-for-woocommerce
# ============================================================
mkdir -p "$BASE/how-to-compress-images-for-woocommerce"
cat > "$BASE/how-to-compress-images-for-woocommerce/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Images for WooCommerce — Speed Up Your Store 2025',
  description: 'Learn how to compress product images for WooCommerce to improve page speed, SEO rankings, and conversions. Free tool included.',
  keywords: 'compress images for woocommerce, woocommerce product image size, optimize woocommerce images, woocommerce image compression, speed up woocommerce',
  alternates: { canonical: '/blog/how-to-compress-images-for-woocommerce' },
};
export default function Page() { return <ClientPage />; }
EOF
cat > "$BASE/how-to-compress-images-for-woocommerce/client.tsx" << 'EOF'
"use client";
import Link from 'next/link';
import CompressorWidget from '@/components/CompressorWidget';
const tips=[
  {title:'Use JPEG for product photos',desc:'JPEG compresses photographic images much better than PNG. Switch all product photos from PNG to JPEG and you\'ll cut file sizes by 60–80%.'},
  {title:'Target 100–200KB per image',desc:'For most product images, 100–200KB gives excellent visual quality at fast loading speeds. Avoid going over 300KB for any product photo.'},
  {title:'Resize before uploading',desc:'WooCommerce generates multiple image sizes automatically. Upload your source image at 1000×1000px — WooCommerce handles the rest.'},
  {title:'Use WebP where possible',desc:'WebP offers 25–35% smaller files than JPEG at the same quality. Our tool supports WebP output for modern browsers.'},
  {title:'Compress bulk images',desc:'If you have dozens of product images, use our bulk compressor to process them all at once before uploading to WooCommerce.'},
];
const faq=[
  {q:'What is the recommended image size for WooCommerce?',a:'WooCommerce recommends uploading product images at 800×800 to 1000×1000 pixels. The default thumbnail size is 300×300px and single product image is 600px wide.'},
  {q:'How does image size affect WooCommerce page speed?',a:'Large images are the #1 cause of slow WooCommerce stores. Google PageSpeed and Core Web Vitals directly measure image performance — slow stores rank lower.'},
  {q:'Should I use JPEG or WebP for WooCommerce?',a:'WebP is ideal if your hosting and theme support it. Otherwise, high-quality JPEG (70–85% quality) is the best choice for product photos.'},
  {q:'How many product images should I have per listing?',a:'Industry data shows that listings with 6–8 product images have significantly higher conversion rates than those with 1–2 images. More angles = more trust.'},
];
export default function ClientPage(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-woocommerce" style={{color:'white',textDecoration:'none'}}>WooCommerce Tool</Link>
          <Link href="/blog" style={{color:'white',textDecoration:'none'}}>Blog</Link>
        </div>
      </nav>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/blog" style={{color:'#a5b4fc',textDecoration:'none'}}>Blog</Link> → Compress Images for WooCommerce
        </div>
        <h1 style={{fontSize:'clamp(24px,4vw,40px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.2}}>How to Compress Images for WooCommerce<br/><span style={{color:'#818cf8'}}>Speed Up Your Store in 2025</span></h1>
        <p style={{fontSize:'16px',opacity:0.65,marginBottom:'32px',lineHeight:1.7}}>Slow product images kill WooCommerce conversions. A 1-second delay in page load can reduce conversions by 7%. Here's how to compress your product images without sacrificing quality — and speed up your store today.</p>
        <h2 style={{fontSize:'20px',fontWeight:800,marginBottom:'20px'}}>5 Image Optimization Tips for WooCommerce</h2>
        {tips.map((t,i)=>(
          <div key={i} style={{marginBottom:'16px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}>
            <strong style={{fontSize:'15px',color:'#a5b4fc'}}>0{i+1}. {t.title}</strong>
            <p style={{fontSize:'13px',opacity:0.65,margin:'6px 0 0',lineHeight:1.6}}>{t.desc}</p>
          </div>
        ))}
        <h2 style={{fontSize:'20px',fontWeight:800,margin:'32px 0 16px'}}>Compress WooCommerce Images — Free Tool</h2>
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
              ['/compress-for-woocommerce','WooCommerce Tool'],
              ['/compress-for-shopify','Shopify Tool'],
              ['/compress-for-squarespace','Squarespace Tool'],
              ['/bulk-image-compressor','Bulk Compress'],
            ] as [string,string][]).map(([href,label])=>(
              <Link key={href} href={href} style={{color:'#a5b4fc',textDecoration:'none',background:'rgba(99,102,241,0.1)',padding:'5px 12px',borderRadius:'20px',border:'1px solid rgba(99,102,241,0.2)'}}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · Not affiliated with WooCommerce · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
EOF

# ============================================================
# Blog index page
# ============================================================
mkdir -p "$BASE"
cat > "$BASE/page.tsx" << 'EOF'
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Image Compression Blog — Tips, Guides & Requirements',
  description: 'Free guides on image compression for USCIS, passports, visas, eBay, WooCommerce, LinkedIn and more. Expert tips to meet every platform\'s photo requirements.',
  alternates: { canonical: '/blog' },
};
const posts=[
  {slug:'how-to-compress-image-for-uscis',title:'How to Compress Image for USCIS',desc:'Step-by-step guide to compressing photos for N-400, DS-160, I-485 forms under 240KB.',tag:'USCIS'},
  {slug:'compress-passport-photo-to-50kb',title:'Compress Passport Photo to 50KB',desc:'For visa portals that require photos under 50KB. Works for India, Philippines, and more.',tag:'Passport'},
  {slug:'image-size-requirements-for-green-card',title:'Green Card Photo Size Requirements 2025',desc:'Complete guide for I-485, I-130, I-90 photo requirements with free compression tool.',tag:'Green Card'},
  {slug:'how-to-compress-photo-for-ds160',title:'How to Compress Photo for DS-160',desc:'US nonimmigrant visa photo requirements and how to meet them in under 60 seconds.',tag:'Visa'},
  {slug:'best-image-size-for-ebay-listings',title:'Best Image Size for eBay Listings 2025',desc:'Optimize your eBay photos to boost search rankings and increase sales conversions.',tag:'eBay'},
  {slug:'us-passport-photo-requirements',title:'US Passport Photo Requirements 2025',desc:'Official State Department requirements for US passport photos — print and digital.',tag:'Passport'},
  {slug:'compress-image-for-linkedin-profile',title:'Compress Image for LinkedIn Profile',desc:'Perfect LinkedIn photo and banner sizes for a professional online presence.',tag:'LinkedIn'},
  {slug:'how-to-compress-images-for-woocommerce',title:'How to Compress Images for WooCommerce',desc:'Speed up your WooCommerce store by optimizing product images — boost SEO and sales.',tag:'eCommerce'},
];
const tagColor:Record<string,string>={
  'USCIS':'rgba(239,68,68,0.2)','Passport':'rgba(99,102,241,0.2)','Green Card':'rgba(52,211,153,0.2)',
  'Visa':'rgba(251,191,36,0.2)','eBay':'rgba(234,88,12,0.2)','LinkedIn':'rgba(14,165,233,0.2)','eCommerce':'rgba(168,85,247,0.2)',
};
export default function BlogIndex(){
  return(
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}>🗜️ Compress20KB</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px',opacity:0.75}}>
          <Link href="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Link href="/compress-for-uscis" style={{color:'white',textDecoration:'none'}}>USCIS</Link>
          <Link href="/bulk-image-compressor" style={{color:'white',textDecoration:'none'}}>Bulk</Link>
        </div>
      </nav>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'48px 16px'}}>
        <h1 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:900,marginBottom:'12px'}}>Image Compression Blog</h1>
        <p style={{fontSize:'16px',opacity:0.6,marginBottom:'40px'}}>Guides, requirements, and tips for every platform and use case.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(360px,1fr))',gap:'16px'}}>
          {posts.map(p=>(
            <Link key={p.slug} href={`/blog/${p.slug}`} style={{textDecoration:'none',color:'white',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'20px',display:'block',transition:'border-color 0.2s'}}>
              <span style={{fontSize:'11px',fontWeight:700,padding:'3px 10px',borderRadius:'20px',background:tagColor[p.tag]||'rgba(99,102,241,0.2)',marginBottom:'12px',display:'inline-block'}}>{p.tag}</span>
              <h2 style={{fontSize:'17px',fontWeight:800,margin:'0 0 8px',lineHeight:1.3}}>{p.title}</h2>
              <p style={{fontSize:'13px',opacity:0.6,margin:0,lineHeight:1.6}}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'20px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)'}}>© 2025 CompressTo20KB · <Link href="/" style={{color:'white'}}>Home</Link></footer>
    </div>
  );
}
EOF

echo ""
echo "✅ Blog created successfully!"
echo ""
echo "Files created:"
echo "  src/app/blog/page.tsx (blog index)"
echo "  src/app/blog/how-to-compress-image-for-uscis/"
echo "  src/app/blog/compress-passport-photo-to-50kb/"
echo "  src/app/blog/image-size-requirements-for-green-card/"
echo "  src/app/blog/how-to-compress-photo-for-ds160/"
echo "  src/app/blog/best-image-size-for-ebay-listings/"
echo "  src/app/blog/us-passport-photo-requirements/"
echo "  src/app/blog/compress-image-for-linkedin-profile/"
echo "  src/app/blog/how-to-compress-images-for-woocommerce/"
echo ""
echo "Next step:"
echo "  git add . && git commit -m 'add blog with 8 SEO articles' && git push"
