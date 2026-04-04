
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you compress images without uploading?","acceptedAnswer":{"@type":"Answer","text":"Our tool uses the browser's built-in Canvas API and WebAssembly to compress images entirely on your device. No files are sent to any server. This means faster compression and complete privacy."}},{"@type":"Question","name":"Is client-side image compression safe?","acceptedAnswer":{"@type":"Answer","text":"Yes. Because compression happens in your browser, your images never leave your device. This is the safest way to compress sensitive documents, visa photos, and personal images."}},{"@type":"Question","name":"Does compression without upload work on mobile?","acceptedAnswer":{"@type":"Answer","text":"Yes. The tool works on iOS Safari, Android Chrome, and all modern mobile browsers. No app download required. Just open the website and compress your images instantly."}}]};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Images Without Uploading — 100% Private, Browser Only',
  description: 'Compress images without uploading to any server. 100% client-side processing in your browser. Safe for private photos, medical images, passport scans.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-without-uploading' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-without-uploading' },
};

export default function NoUploadPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.9)',textDecoration:'none',fontSize:'15px'}}>← Back to Tool</Link>
      </header>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>
        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px'}}>
          Compress Images <span style={{color:'#818cf8'}}>Without Uploading</span>
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'24px'}}>
          The only image compressor that processes files 100% locally in your browser. Your images never leave your device — not even for a millisecond.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px',marginBottom:'28px'}}>
          {[
            ['🔒','No server upload','Files are processed entirely in your browser using WebAssembly and JavaScript'],
            ['⚡','Instant processing','No waiting for upload/download — compression happens at CPU speed locally'],
            ['🛡️','GDPR compliant','No data ever sent to our servers — we literally cannot see your files'],
            ['📵','Works offline','Once the page loads, no internet connection needed for compression'],
          ].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.2)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'14px',color:'#34d399',marginBottom:'6px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.6,lineHeight:'1.6'}}>{desc}</div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginBottom:'28px'}}>
          <Link href="/" style={{display:'inline-block',padding:'14px 32px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            🔒 Try Private Image Compressor →
          </Link>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'12px'}}>Who Needs Private Image Compression?</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'24px'}}>
          {[
            ['🪪','Government documents & IDs','Never upload passport scans, national IDs or visa photos to unknown servers'],
            ['🏥','Medical images','X-rays, MRI scans, medical photos require strict privacy — compress locally'],
            ['💼','Business confidential','Product prototypes, internal documents, unreleased designs'],
            ['📸','Personal photos','Family photos, private images that should never leave your device'],
          ].map(([icon,title,desc])=>(
            <div key={title} style={{display:'flex',gap:'14px',padding:'14px',background:'rgba(255,255,255,0.04)',borderRadius:'10px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <span style={{fontSize:'22px',flexShrink:0}}>{icon}</span>
              <div>
                <div style={{fontWeight:700,fontSize:'14px',marginBottom:'3px'}}>{title}</div>
                <div style={{fontSize:'12px',opacity:0.55}}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>FAQ — Compress Without Uploading</h2>
        {[
          ['How does browser-based compression work?','Your images are processed entirely by your browser using JavaScript. No data is ever sent to any server.'],
          ['Is this really 100% private?','Yes — your photos never leave your device. Not even metadata is transmitted.'],
          ['Why is privacy important for image compression?','Photos can contain sensitive personal information, location data (EXIF), and faces. Browser-based tools eliminate all privacy risks.'],
          ['Does offline compression work without internet?','Once the page loads, compression works even if you disconnect from the internet.'],
          ['Is the quality the same as server-based tools?','Yes — browser-based compression uses the same algorithms and produces identical results.'],
        ].map(([q,a])=>(
          <details key={q} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)',padding:'14px 16px'}}>
            <summary style={{fontWeight:600,fontSize:'14px',cursor:'pointer',listStyle:'none'}}>▶ {q}</summary>
            <p style={{fontSize:'15px',opacity:0.6,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-passport-photo','Passport Photo'],['/compress-for-shopify','Shopify Preset']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
