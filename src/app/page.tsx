import HomeClient from './home-client';

export default function Page() {
  return (
    <>
      <HomeClient />

      {/* SEO CONTENT BELOW THE FOLD */}
      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        {/* WHEN DO YOU NEED */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,28px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            When Do You Need to Compress an Image to an Exact Size?
          </h2>
          <p style={{fontSize:'16px',lineHeight:1.7,marginBottom:'12px',opacity:0.9}}>
            Many official portals, job applications, and e-commerce platforms require images under a strict file size limit.
            Uploading a file that is too large results in an error — and most generic compressors only reduce size by percentage,
            not to a precise kilobyte target.
          </p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>Government &amp; visa portals</strong> — DS-160, USCIS, DV Lottery, passport renewals typically require photos under 20KB–240KB.</li>
            <li><strong>Job applications</strong> — Indeed, LinkedIn, Workday, Greenhouse often cap resume photos at 50KB–100KB.</li>
            <li><strong>University &amp; exam registration</strong> — Common App, NEET, UPSC, SSC require images between 10KB and 100KB.</li>
            <li><strong>E-commerce listings</strong> — Shopify recommends images under 1MB for fast page loads; Amazon requires white-background JPEGs.</li>
            <li><strong>Email campaigns</strong> — Images over 100KB slow down load time and trigger spam filters.</li>
          </ul>
        </section>

        {/* TIPS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,28px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            Tips for Getting the Best Compression Results
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'16px'}}>
            {[
              ['Use WebP format','WebP produces 25-35% smaller files than JPEG at the same visual quality. Use it for web and social media.'],
              ['Start with the highest quality original','Compressing an already-compressed JPEG degrades quality faster. Always start from the original file.'],
              ['Use Exact KB Mode for forms','If a portal says "max 20KB", use Exact KB Mode — it binary-searches for maximum quality within your target.'],
              ['Batch compress up to 50 images','Upload all images at once. The tool processes them in parallel in your browser — no waiting for uploads.'],
            ].map(([title, text]) => (
              <div key={title} style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:'12px',padding:'16px'}}>
                <div style={{fontWeight:700,fontSize:'15px',color:'#c7d2fe',marginBottom:'6px'}}>{title}</div>
                <div style={{fontSize:'14px',lineHeight:1.6,opacity:0.8}}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ VISIBLE */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 48px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,28px)',fontWeight:700,color:'#a5b4fc',marginBottom:'20px'}}>
            Frequently Asked Questions
          </h2>
          {[
            ['How do I compress an image to exactly 20KB?',
             'Upload your image, switch to Exact KB Mode, type 20, and click Compress. The tool runs a binary search in your browser to hit exactly 20KB within 1KB accuracy — nothing is uploaded to any server.'],
            ['Does this tool upload my images to a server?',
             'No. All compression runs locally in your browser using WebAssembly. Your files never leave your device — unlike TinyPNG, 11zon, and Cloudinary which upload files to their servers.'],
            ['What image formats are supported?',
             'JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos) are all supported. Output can be WebP, AVIF, JPEG, or PNG. HEIC files are automatically converted in your browser before compression.'],
            ['Can I compress multiple images at once?',
             'Yes — upload up to 50 images at once. All are compressed simultaneously in your browser. Download individually or as a ZIP file. Completely free, no signup required.'],
            ['What is Exact KB Mode?',
             'Exact KB Mode lets you set a precise file size target — 20KB, 50KB, 100KB, or any value from 5KB to 500KB. The tool finds the maximum quality that fits within 1KB of your target.'],
            ['Is this tool completely free?',
             'Yes — no limits, no watermarks, no signup, no daily quotas. Compress as many images as you need, anytime.'],
          ].map(([q, a], i) => (
            <details key={i} style={{borderBottom:'1px solid rgba(129,140,248,0.15)',padding:'14px 0'}}>
              <summary style={{fontWeight:600,fontSize:'16px',cursor:'pointer',color:'#c7d2fe',listStyle:'none',display:'flex',justifyContent:'space-between'}}>
                {q} <span style={{opacity:0.5,marginLeft:'8px'}}>+</span>
              </summary>
              <p style={{marginTop:'10px',fontSize:'15px',lineHeight:1.7,opacity:0.85,paddingLeft:'4px'}}>{a}</p>
            </details>
          ))}
        </section>

        {/* INTERNAL LINKS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 56px'}}>
          <h2 style={{fontSize:'18px',fontWeight:700,color:'#a5b4fc',marginBottom:'14px'}}>Popular Compression Tools</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {[
              ['/compress-to-20kb','Compress to 20KB'],
              ['/compress-to-50kb','Compress to 50KB'],
              ['/compress-to-100kb','Compress to 100KB'],
              ['/compress-to-200kb','Compress to 200KB'],
              ['/compress-for-email','For Email'],
              ['/compress-for-shopify','For Shopify'],
              ['/compress-for-instagram','For Instagram'],
              ['/compress-passport-photo','Passport Photo'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none',whiteSpace:'nowrap'}}>
                {label} →
              </a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
