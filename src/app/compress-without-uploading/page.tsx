import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Images Without Uploading — Private, Browser Only',
  description: 'Compress images without uploading them to a server. The file is decoded and re-encoded in your browser, so it stays on your device. Useful for passport photos, ID scans and other private images.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-without-uploading' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-without-uploading' },
};

const faq: [string, string][] = [
  ['How do you compress an image without uploading it?', 'Your browser reads the file from disk, decodes it and re-encodes it with the WebP, AVIF, JPEG and PNG encoders it already ships. The result is written back to your device. The image is never posted to a server, because there is no server step in the process.'],
  ['Does anything get sent to a server while I compress?', 'Your image file is not. The page itself and its compression library are fetched from the site when you open the tool, but from that point the file you dropped in is handled entirely inside the tab.'],
  ['Is browser-side compression as effective as a server tool?', 'It runs on the same encoders your browser provides, and Target KB Mode keeps searching the encoding until the output fits the number you typed. Lossy recompression still discards data, so the honest promise is the highest quality that fits under your target, not a guarantee that nothing changes visually.'],
  ['Is it safe for passport photos, ID scans and medical images?', 'There is no server copy to leak, retain or hand to anybody, which is the practical argument for local processing. It is a size tool only: it will not crop to a passport ratio, change or remove a background, or rescue a blurry shot.'],
  ['Why does uploading a photo matter if the site deletes it?', 'Once a file sits on someone else\'s server it can be logged, backed up, seen by staff, or covered by a privacy policy that later changes. A tool that never receives the file simply does not have those questions to answer.'],
  ['Do I need an account, or will the output be watermarked?', 'No account, no watermark, no queue and no daily quota. You can put up to 50 files in one batch and set any target between 5 and 5000 KB.'],
  ['Can I compress a HEIC from my iPhone without uploading it?', 'Yes. A HEIC or HEIF file is decoded in the browser and converted to JPEG before the size search starts, so no conversion service is involved.'],
  ['Does it work offline?', 'Not as a downloadable app. You need a connection to load the page and the compression library, and after that your file is processed locally rather than sent anywhere.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function NoUploadPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Compress Images Without Uploading","item":"https://www.compressto20kb.com/compress-without-uploading"}]}' }} />
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
          This compressor decodes and re-encodes your file inside the browser tab you are reading. There is no upload step, so the image never leaves your device.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px',marginBottom:'28px'}}>
          {[
            ['🔒','No upload step','The file is read from your disk and saved back to it — no server ever holds a copy'],
            ['⚡','No round trip','Nothing waits for an upload or a download queue; the work is local'],
            ['🗑️','Nothing stored on our side','We cannot retain, log or hand over an image we never received'],
            ['🎯','A size, not a slider','Type the KB number your form asks for and take the best result that fits under it'],
          ].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(16,185,129,0.06)',border:'1px solid rgba(16,185,129,0.2)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'14px',color:'#34d399',marginBottom:'6px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.72,lineHeight:'1.6'}}>{desc}</div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginBottom:'28px'}}>
          <Link href="/" style={{display:'inline-block',padding:'14px 32px',borderRadius:'10px',background:'linear-gradient(135deg,#4f46e5,#6d28d9)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            🔒 Open the No-Upload Compressor →
          </Link>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'12px'}}>Who Needs Private Image Compression?</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'24px'}}>
          {[
            ['🪪','Government documents & IDs','Passport scans, national IDs and visa photos do not need a copy on a third-party server'],
            ['🏥','Medical images','X-rays, scans and clinical photos usually carry the strictest handling rules of all'],
            ['💼','Business confidential','Product prototypes, internal documents and unreleased designs'],
            ['📸','Personal photos','Family photos and other images you would rather not hand to anybody'],
          ].map(([icon,title,desc])=>(
            <div key={title} style={{display:'flex',gap:'14px',padding:'14px',background:'rgba(255,255,255,0.04)',borderRadius:'10px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <span style={{fontSize:'22px',flexShrink:0}}>{icon}</span>
              <div>
                <div style={{fontWeight:700,fontSize:'14px',marginBottom:'3px'}}>{title}</div>
                <div style={{fontSize:'12px',opacity:0.7}}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>FAQ — Compress Without Uploading</h2>
        {faq.map(([q,a])=>(
          <details key={q} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)',padding:'14px 16px'}}>
            <summary style={{fontWeight:600,fontSize:'14px',cursor:'pointer',listStyle:'none'}}>▶ {q}</summary>
            <p style={{fontSize:'15px',opacity:0.72,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-passport-photo','Passport Photo'],['/bulk-image-compressor','Bulk Compressor']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
