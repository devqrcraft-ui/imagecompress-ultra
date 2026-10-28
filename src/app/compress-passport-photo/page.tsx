
const faq: [string, string][] = [
  ['What file size should a passport photo be?', 'Whatever the portal in front of you states. This page links no official document, so we will not publish a per-country figure as if it were a rule: read the ceiling on the upload screen of your own application, then type it into Target KB Mode, which accepts 5-5000 KB. The compressor does not care which country you are filing for, only which number you give it.'],
  ['How do I compress a passport photo to that size?', 'Add the photo, select JPEG, switch to Target KB Mode and enter your number. The tool searches quality downward inside your browser and returns the best encode that lands at or under the target. A photo already smaller than the target comes back unchanged; if a very large file cannot reach an aggressive number, reduce the pixel dimensions first and run it again.'],
  ['Can this tool produce the 2x2 inch photo a paper form asks for?', 'No. It changes file size and encoding only: it cannot print, crop to an aspect ratio, enforce a pixel box, or remove a background, and while compressing it caps the longest side at 4096 px. Crop the photo to the spec in an editor or have it printed, then compress the digital file here.'],
  ['Is my passport photo uploaded anywhere?', 'No. The image is decoded and re-encoded on your own device, so there is no server copy to store or leak. Open DevTools and watch the Network tab while you compress to confirm it - a check worth running before trusting any tool with a biometric photo.'],
  ['Will a compressed photo still pass digital review?', 'Compression removes encoding overhead, not composition: the background, face position and framing are exactly what you uploaded. Check the Before/After preview before you submit, and if a portal still rejects the file, read the message - it will name something this tool cannot change, such as dimensions or background, rather than the kilobytes.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Passport Photo Free — Any Portal Size Limit',
  description: 'Compress a passport or visa photo to whatever ceiling your form states — JPEG, in your browser, never uploaded.',
  alternates: { canonical: 'https://www.compressto20kb.com/compress-passport-photo' },
  openGraph: { url: 'https://www.compressto20kb.com/compress-passport-photo' },
  keywords: 'compress passport photo, US passport photo size, State Department photo requirements, USCIS photo compress, DS-11 photo size, compress passport photo free, passport photo 20KB, passport photo 50KB',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.compressto20kb.com' },
    { '@type': 'ListItem', position: 2, name: 'Compress Passport Photo', item: 'https://www.compressto20kb.com/compress-passport-photo' },
  ],
};

export default function PassportPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.9)',textDecoration:'none',fontSize:'15px'}}>← Back to Tool</Link>
      </header>

      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>

        {/* Breadcrumb */}
        <nav style={{fontSize:'12px',opacity:0.64,marginBottom:'10px'}}>
          <Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link>
          <span style={{margin:'0 6px'}}>/</span>
          <span>Compress Passport Photo</span>
        </nav>

        <div style={{fontSize:'15px',opacity:0.68,marginBottom:'10px'}}>
          🪪 Passport Photo Compressor — Set the Size Your Form Asks For
        </div>

        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px'}}>
          Compress <span style={{color:'#818cf8'}}>Passport Photo</span> Free Online
        </h1>
        <div style={{background:'rgba(129,140,248,0.13)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'20px 24px',marginBottom:'20px'}}>
          <p style={{margin:0,fontSize:'15px',lineHeight:1.75,color:'#e2e8f0'}}>
            <strong style={{color:'#818cf8'}}>Quick answer:</strong> Add your image to the compressor, enable <strong>Target KB Mode</strong>, type the number printed on your own form, select JPEG and download. The tool returns the best quality that still fits at or under that target, and it works entirely in your browser, so a passport photo never leaves your device. We deliberately do not restate any country&#39;s figure on this page: specs change and this page links no official document, so the limit on your submission screen is the one to use.
          </p>
        </div>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'8px'}}>
          Built for anyone filing to a portal that states a file-size ceiling - consular, immigration, passport or ID uploads included: type the ceiling your own form shows into Target KB Mode and the tool returns the highest quality that stays at or under it.
        </p>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.64,marginBottom:'24px'}}>
          Your passport or ID photo is decoded and re-encoded inside this tab, so nothing is stored on anyone else's server. No account, no registration, no watermark.
        </p>

        {/* Privacy banner */}
        <div style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.25)',borderRadius:'12px',padding:'16px',marginBottom:'24px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
          <span style={{fontSize:'28px'}}>🔒</span>
          <div>
            <div style={{fontWeight:700,fontSize:'14px',color:'#34d399',marginBottom:'4px'}}>Your passport photo is 100% safe</div>
            <div style={{fontSize:'15px',opacity:0.65}}>There is no upload step in this tool at all: the image is decoded and re-encoded in your own browser tab, so no server ever receives it. You can confirm that yourself in DevTools under Network while you compress.</div>
          </div>
        </div>

        {/* CTA buttons */}
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'32px'}}>
          <Link href="/?preset=20kb" style={{display:'inline-block',padding:'14px 32px',borderRadius:'10px',background:'linear-gradient(135deg,#4f46e5,#6d28d9)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            🪪 Compress Passport Photo to 20KB →
          </Link>
          <Link href="/?preset=50kb" style={{display:'inline-block',padding:'14px 24px',borderRadius:'10px',background:'rgba(99,102,241,0.15)',border:'1px solid rgba(99,102,241,0.4)',color:'#a5b4fc',fontWeight:700,fontSize:'15px',textDecoration:'none'}}>
            Compress to 50KB →
          </Link>
          <Link href="/?preset=240kb" style={{display:'inline-block',padding:'14px 24px',borderRadius:'10px',background:'rgba(99,102,241,0.15)',border:'1px solid rgba(99,102,241,0.4)',color:'#a5b4fc',fontWeight:700,fontSize:'15px',textDecoration:'none'}}>
            Compress to 240KB →
          </Link>
        </div>

        {/* US highlight box */}
        <div style={{background:'rgba(99,102,241,0.08)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'12px',padding:'20px',marginBottom:'28px'}}>
          <div style={{display:'flex',gap:'10px',alignItems:'flex-start'}}>
            <span style={{fontSize:'28px'}}>🇺🇸</span>
            <div>
              <div style={{fontWeight:800,fontSize:'15px',color:'#a5b4fc',marginBottom:'6px'}}>US Passport and Immigration Uploads: Where the Spec Comes From</div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'8px',marginBottom:'12px'}}>
                {[
                  ['📏','File size','Read it from the upload page you are filing on'],
                  ['📐','Dimensions','Stated by the agency, not by this page'],
                  ['🎨','Background','Plain and light, as your form describes it'],
                  ['🖼️','What this tool changes','Encoding and file weight only - never the crop'],
                ].map(([icon,label,val])=>(
                  <div key={label} style={{fontSize:'12px',opacity:0.7}}>
                    <span style={{marginRight:'4px'}}>{icon}</span>
                    <strong style={{color:'white'}}>{label}:</strong> {val}
                  </div>
                ))}
              </div>
              <p style={{fontSize:'15px',opacity:0.72,margin:'0 0 12px',lineHeight:'1.6'}}>
                The published US specifications live on the State Department and USCIS sites themselves. This page does not copy those figures out of context: open the page where you are uploading, note the file size and pixel box it prints, and set that as your target here.
              </p>
              <Link href="/compress-for-uscis" style={{display:'inline-block',padding:'8px 18px',borderRadius:'8px',background:'linear-gradient(135deg,#4f46e5,#6d28d9)',color:'white',fontWeight:700,fontSize:'15px',textDecoration:'none'}}>
                Full USCIS Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Requirements by country */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>Where to Read Your Own Limit</h2>
        <p style={{fontSize:'15px',opacity:0.72,marginBottom:'14px',lineHeight:1.7}}>The per-country kilobyte and pixel figures that used to sit in this list have been removed: we cannot cite an official page for each of them from here, they change without notice, and the number that decides whether your upload is accepted is the one your own form prints.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[
            ['🇺🇸','USA — passport and nonimmigrant visa uploads','The State Department publishes its own digital image requirements; set your target from what that page prints today.'],
            ['🇬🇧','UK — visa and immigration digital photo','The gov.uk photo page for the specific application type you are filing.'],
            ['🇮🇳','India — e-Visa and Passport Seva','The upload screen of your own application; those specs are revised periodically.'],
            ['🇨🇦','Canada — IRCC online application','The photo requirements attached to the online form you are completing.'],
            ['🇯🇵','Japan — visa submission','The Ministry of Foreign Affairs page for the visa category you applied under.'],
            ['🇵🇰','Pakistan — e-Visa','The e-Visa portal you file on, which states the accepted photo file size.'],
            ['🇨🇳','China — visa','The visa application centre instructions for your jurisdiction.'],
            ['🇹🇷','Türkiye — e-Visa','The e-Visa site itself, which lists the photo conditions for your nationality.'],
          ].map(([flag,country,req])=>(
            <div key={country} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'22px',marginBottom:'6px'}}>{flag}</div>
              <div style={{fontWeight:700,fontSize:'15px',marginBottom:'4px'}}>{country}</div>
              <div style={{fontSize:'12px',opacity:0.68}}>{req}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'14px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'28px'}}>
          {faq.map(([q, a], i) => (
            <details key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '16px', border: '1px solid rgba(129,140,248,0.22)' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', cursor: 'pointer', color: '#a5b4fc' }}>{q}</summary>
              <p style={{ margin: '9px 0 0', fontSize: '15px', opacity: 0.65, lineHeight: 1.65 }}>{a}</p>
            </details>
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
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'15px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>

      </div>
    </div>
  );
}
