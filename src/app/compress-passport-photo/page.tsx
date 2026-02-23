import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Passport Photo Free — US State Department, USCIS, DS-11, India, Ukraine | No Upload',
  description: 'Compress passport photo free online for US State Department, USCIS, DS-160, DS-11, India UIDAI, Pakistan NADRA, Ukraine Diia. Meet 20KB–240KB requirements instantly. Files never uploaded — 100% private.',
  alternates: { canonical: '/compress-passport-photo' },
  keywords: 'compress passport photo, US passport photo size, State Department photo requirements, USCIS photo compress, DS-11 photo size, compress passport photo free, passport photo 20KB, passport photo 50KB',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
          '@type': 'Question',
          name: 'Can I compress my passport photo without uploading it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our tool compresses passport photos entirely in your browser using JavaScript. Your photo never leaves your device — no server upload, 100% private.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the USCIS passport photo file size limit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'USCIS requires photos under 240KB in JPEG format. However many portals reject files over 50KB. Use our tool to compress to any exact size.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compressto20kb.com' },
        { '@type': 'ListItem', position: 2, name: 'Compress Passport Photo', item: 'https://compressto20kb.com/compress-passport-photo' },
      ],
    },
  ],
};

export default function PassportPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.5)',textDecoration:'none',fontSize:'13px'}}>← Back to Tool</Link>
      </header>

      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>

        {/* Breadcrumb */}
        <nav style={{fontSize:'12px',opacity:0.45,marginBottom:'10px'}}>
          <Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link>
          <span style={{margin:'0 6px'}}>/</span>
          <span>Compress Passport Photo</span>
        </nav>

        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'10px'}}>
          🪪 Passport Photo Compressor — All Countries 2025
        </div>

        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px'}}>
          Compress <span style={{color:'#818cf8'}}>Passport Photo</span> Free Online
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'8px'}}>
          Compress your passport photo for <strong style={{color:'white'}}>US State Department</strong>, <strong style={{color:'white'}}>USCIS</strong>, <strong style={{color:'white'}}>DS-11</strong>, <strong style={{color:'white'}}>DS-160</strong>, India UIDAI, Pakistan NADRA, Ukraine Diia and 50+ other government portals. Meet any file size requirement — 20KB, 50KB or 240KB — instantly and for free.
        </p>
        <p style={{fontSize:'13px',lineHeight:'1.7',opacity:0.45,marginBottom:'24px'}}>
          Unlike PNG Shrinker, Fotor or Zamzar — your passport or ID photo never leaves your device. All compression happens locally in your browser. No account needed, no registration, GDPR compliant.
        </p>

        {/* Privacy banner */}
        <div style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:'12px',padding:'16px',marginBottom:'24px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
          <span style={{fontSize:'28px'}}>🔒</span>
          <div>
            <div style={{fontWeight:700,fontSize:'14px',color:'#34d399',marginBottom:'4px'}}>Your passport photo is 100% safe</div>
            <div style={{fontSize:'13px',opacity:0.65}}>Unlike online tools that upload your ID photo to foreign servers, our tool processes everything locally in your browser. No server ever receives your image. Safe for immigration and government use.</div>
          </div>
        </div>

        {/* CTA buttons */}
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'32px'}}>
          <Link href="/?preset=20kb" style={{display:'inline-block',padding:'14px 32px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            🪪 Compress Passport Photo to 20KB →
          </Link>
          <Link href="/?preset=50kb" style={{display:'inline-block',padding:'14px 24px',borderRadius:'10px',background:'rgba(99,102,241,0.15)',border:'1px solid rgba(99,102,241,0.4)',color:'#a5b4fc',fontWeight:700,fontSize:'15px',textDecoration:'none'}}>
            Compress to 50KB →
          </Link>
          <Link href="/?preset=240kb" style={{display:'inline-block',padding:'14px 24px',borderRadius:'10px',background:'rgba(99,102,241,0.15)',border:'1px solid rgba(99,102,241,0.4)',color:'#a5b4fc',fontWeight:700,fontSize:'15px',textDecoration:'none'}}>
            🇺🇸 USCIS 240KB →
          </Link>
        </div>

        {/* US highlight box */}
        <div style={{background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'12px',padding:'20px',marginBottom:'28px'}}>
          <div style={{display:'flex',gap:'10px',alignItems:'flex-start'}}>
            <span style={{fontSize:'28px'}}>🇺🇸</span>
            <div>
              <div style={{fontWeight:800,fontSize:'15px',color:'#a5b4fc',marginBottom:'6px'}}>US Passport & USCIS Photo Requirements</div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'8px',marginBottom:'12px'}}>
                {[
                  ['📏','File size','Max 240KB (JPEG)'],
                  ['📐','Dimensions','600×600 — 1200×1200 px'],
                  ['🎨','Background','Plain white or off-white'],
                  ['🖨️','DPI','300 DPI recommended'],
                ].map(([icon,label,val])=>(
                  <div key={label} style={{fontSize:'12px',opacity:0.7}}>
                    <span style={{marginRight:'4px'}}>{icon}</span>
                    <strong style={{color:'white'}}>{label}:</strong> {val}
                  </div>
                ))}
              </div>
              <p style={{fontSize:'13px',opacity:0.6,margin:'0 0 12px',lineHeight:'1.6'}}>
                Used for: <strong style={{color:'white'}}>DS-11</strong> (new passport), <strong style={{color:'white'}}>DS-82</strong> (renewal), <strong style={{color:'white'}}>DS-160</strong> (nonimmigrant visa), <strong style={{color:'white'}}>USCIS forms</strong> (I-485, N-400, I-90), <strong style={{color:'white'}}>DV Lottery</strong>.
              </p>
              <Link href="/compress-for-uscis" style={{display:'inline-block',padding:'8px 18px',borderRadius:'8px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:700,fontSize:'13px',textDecoration:'none'}}>
                Full USCIS Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Requirements by country */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>Requirements by Country</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[
            ['🇺🇸','USA — State Dept / USCIS / DS-11','Max 240KB, JPEG, 600×600 to 1200×1200 px, white background'],
            ['🇮🇳','India — UIDAI / Passport Seva','Max 20KB, JPEG, white background'],
            ['🇵🇰','Pakistan — NADRA / HEC','Max 20KB, JPEG format required'],
            ['🇺🇦','Ukraine — Diia / Prozorro','20–50KB, JPEG, 35×45mm'],
            ['🇧🇩','Bangladesh — NID / Passport','Max 30KB, JPEG'],
            ['🇵🇭','Philippines — PSA / DFA','Max 50KB, JPEG'],
            ['🇬🇧','UK — His Majesty\'s Passport','Max 50KB, JPEG, 35×45mm'],
            ['🇨🇦','Canada — IRCC Passport','Max 240KB, JPEG, white background'],
          ].map(([flag,country,req])=>(
            <div key={country} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'22px',marginBottom:'6px'}}>{flag}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{country}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{req}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'28px'}}>
          {[
            ['What size should a US passport photo be?','US State Department requires passport photos in JPEG format, 600×600 to 1200×1200 pixels, max 240KB file size. For DS-11 and DS-82 online portals, files under 50KB work best.'],
            ['Can I use this for DS-11 or DS-82 passport renewal?','Yes. Both forms require a JPEG photo under 240KB. Upload your photo, select 50KB or 240KB preset, and download instantly.'],
            ['What is the difference between USCIS and State Department photo requirements?','Both require JPEG format, max 240KB, 600×600 to 1200×1200 pixels, and white background. The requirements are essentially identical.'],
            ['Does India UIDAI require a 20KB photo?','Yes. UIDAI (Aadhaar) and Passport Seva portals require photos under 20KB in JPEG format. Our tool compresses to exactly 20KB.'],
            ['Is my passport photo safe?','Yes. All compression happens in your browser — your photo never leaves your device and is never stored on any server.'],
          ].map(([q,a])=>(
            <div key={q} style={{background:'rgba(255,255,255,0.03)',borderRadius:'10px',padding:'16px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontWeight:700,fontSize:'14px',marginBottom:'6px',color:'#a5b4fc'}}>{q}</div>
              <div style={{fontSize:'13px',opacity:0.6,lineHeight:'1.6'}}>{a}</div>
            </div>
          ))}
        </div>

        {/* Related links */}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'16px'}}>
          {[
            ['/compress-for-uscis','USCIS Photo Guide'],
            ['/compress-to-20kb','Compress to 20KB'],
            ['/compress-to-50kb','Compress to 50KB'],
            ['/compress-to-200kb','Compress to 200KB'],
            ['/compress-for-shopify','Shopify Compressor'],
          ].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>

      </div>
    </div>
  );
}
