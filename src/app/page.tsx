import HomeClient from './home-client';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress an image to exactly 20KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your image, switch to Exact KB Mode, type 20, and click Compress. The tool runs a binary search in your browser to hit exactly 20KB within 1KB accuracy — nothing is uploaded to any server." }
    },
    {
      "@type": "Question",
      "name": "Is this tool really no-upload?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All compression runs locally in your browser using WebAssembly. Your files never leave your device — unlike TinyPNG, 11zon, and Cloudinary which upload files to their servers." }
    },
    {
      "@type": "Question",
      "name": "Can I compress multiple images at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — upload up to 50 images at once. All are compressed simultaneously in your browser. Download individually or as a ZIP file. Completely free, no signup required." }
    },
    {
      "@type": "Question",
      "name": "Will quality be OK after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The tool uses Exact KB Mode to find the maximum quality that fits within your target size. WebP format gives 25-35% smaller files than JPEG at the same visual quality." }
    },
    {
      "@type": "Question",
      "name": "What image formats are supported?",
      "acceptedAnswer": { "@type": "Answer", "text": "JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos) are all supported. Output can be WebP, AVIF, JPEG, or PNG. HEIC files are automatically converted in your browser before compression." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <HomeClient />
      {/* AS-IS DISCLAIMER */}
      <div style={{background:'#0f0c29',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'16px 20px',textAlign:'center' as const}}>
        <p style={{maxWidth:'700px',margin:'0 auto',fontSize:'12px',color:'rgba(255,255,255,0.35)',lineHeight:1.7}}>
          This tool runs entirely in your browser and does not upload or store any images. It is provided as-is, without warranties. Always keep original copies of important documents.
        </p>
      </div>

      {/* SEO CONTENT BELOW THE FOLD */}
      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        {/* HOW TO COMPRESS TO 20KB */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            How to compress an image to exactly 20KB (step-by-step)
          </h2>
          <ol style={{paddingLeft:'22px',lineHeight:2,fontSize:'15px',opacity:0.88}}>
            <li><strong>Upload your image</strong> — drag and drop or click the upload zone. Supports JPG, PNG, WebP, AVIF, HEIC.</li>
            <li><strong>Switch to Exact KB Mode</strong> — click the "Exact KB Mode" button in the tool.</li>
            <li><strong>Set 20KB as your target</strong> — click the "20 KB" preset button or type 20 in the custom field.</li>
            <li><strong>Click Compress</strong> — the tool binary-searches for maximum quality within 1KB of your target, entirely in your browser.</li>
            <li><strong>Download your file</strong> — click "Save" next to your compressed image. No upload, no watermark, no signup required.</li>
          </ol>
        </section>

        {/* BEST USES */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            Best uses for 20KB images
          </h2>
          <ul style={{paddingLeft:'20px',lineHeight:1.95,opacity:0.85,fontSize:'15px'}}>
            <li><strong>US government portals</strong> — DS-160 visa application, USCIS forms, DV Lottery, passport and Green Card renewals all require photos under 20KB–240KB.</li>
            <li><strong>Online job applications</strong> — Indeed, LinkedIn, Workday, Greenhouse cap resume photos at 50KB–100KB.</li>
            <li><strong>University and exam registration</strong> — Common App, NEET, UPSC, GRE, GMAT, SAT registration portals require images between 10KB and 100KB.</li>
            <li><strong>Passport and visa photo uploads</strong> — most embassy portals require JPEG under 20KB–50KB with exact pixel dimensions.</li>
            <li><strong>Corporate HR portals</strong> — employee profile photos in Workday, SAP, Greenhouse must be under 50KB.</li>
          </ul>
        </section>

        {/* WHEN DO YOU NEED */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            When Do You Need to Compress an Image to an Exact Size?
          </h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'12px',opacity:0.9}}>
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
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
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
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'20px'}}>
            Frequently Asked Questions
          </h2>
          {[
            ['How do I compress an image to exactly 20KB?',
             'Upload your image, switch to Exact KB Mode, type 20, and click Compress. The tool runs a binary search in your browser to hit exactly 20KB within 1KB accuracy — nothing is uploaded to any server.'],
            ['Is this tool really no-upload?',
             'Yes. All compression runs locally in your browser using WebAssembly. Your files never leave your device — unlike TinyPNG, 11zon, and Cloudinary which upload files to their servers.'],
            ['What image formats are supported?',
             'JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos) are all supported. Output can be WebP, AVIF, JPEG, or PNG. HEIC files are automatically converted in your browser before compression.'],
            ['Can I compress multiple images at once?',
             'Yes — upload up to 50 images at once. All are compressed simultaneously in your browser. Download individually or as a ZIP file. Completely free, no signup required.'],
            ['Will quality be OK after compression?',
             'Yes. The tool finds the maximum quality that fits within your target size. WebP format gives 25-35% smaller files than JPEG at the same visual quality. Start from the original file for best results.'],
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

        {/* SISTER SITES */}
        <section style={{maxWidth:'900px',margin:'0 auto',padding:'0 20px 48px'}}>
          <p style={{fontSize:'11px',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(165,180,252,0.45)',marginBottom:'14px'}}>Free tools from the same team</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'14px'}}>

            <a href="https://gigwisetax.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'flex',flexDirection:'column',gap:'10px',background:'rgba(178,34,52,0.08)',border:'1px solid rgba(178,34,52,0.3)',borderRadius:'10px',padding:'18px 20px'}}>
              <div>
                <div style={{fontSize:'10px',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(248,113,113,0.7)',marginBottom:'5px'}}>1099 Gig Tax Calculator</div>
                <div style={{fontSize:'20px',fontWeight:900,color:'#fff',lineHeight:1.15}}>GigWiseTax<span style={{color:'#f87171'}}>.com</span></div>
              </div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:1.65}}>SE tax 15.3% + federal + state. DoorDash, Uber, OnlyFans. All 51 states.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap'}}>
                {['SE Tax 15.3%','All 51 States','100% Free'].map(t=>(
                  <span key={t} style={{fontSize:'11px',background:'rgba(248,113,113,0.12)',border:'1px solid rgba(248,113,113,0.25)',color:'rgba(248,113,113,0.85)',padding:'3px 8px',borderRadius:'4px'}}>{t}</span>
                ))}
              </div>
              <div style={{background:'#B22234',color:'#fff',textAlign:'center',padding:'10px',borderRadius:'6px',fontSize:'13px',fontWeight:800,marginTop:'2px'}}>Calculate Gig Taxes →</div>
            </a>

            <a href="https://privatepaycheck.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'flex',flexDirection:'column',gap:'10px',background:'rgba(245,200,66,0.06)',border:'1px solid rgba(245,200,66,0.28)',borderRadius:'10px',padding:'18px 20px'}}>
              <div>
                <div style={{fontSize:'10px',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(245,200,66,0.65)',marginBottom:'5px'}}>W-2 Paycheck Calculator</div>
                <div style={{fontSize:'20px',fontWeight:900,color:'#fff',lineHeight:1.15}}>PrivatePaycheck<span style={{color:'#F5C842'}}>.com</span></div>
              </div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:1.65}}>Take-home pay after all taxes. Salary and hourly. All 50 states, 2026 IRS brackets.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap'}}>
                {['Salary & Hourly','All 50 States','100% Free'].map(t=>(
                  <span key={t} style={{fontSize:'11px',background:'rgba(245,200,66,0.1)',border:'1px solid rgba(245,200,66,0.28)',color:'rgba(245,200,66,0.85)',padding:'3px 8px',borderRadius:'4px'}}>{t}</span>
                ))}
              </div>
              <div style={{background:'#F5C842',color:'#07111f',textAlign:'center',padding:'10px',borderRadius:'6px',fontSize:'13px',fontWeight:800,marginTop:'2px'}}>Calculate My Paycheck →</div>
            </a>

            <a href="https://1099deductions.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'flex',flexDirection:'column',gap:'10px',background:'rgba(184,146,74,0.06)',border:'1px solid rgba(184,146,74,0.28)',borderRadius:'10px',padding:'18px 20px'}}>
              <div>
                <div style={{fontSize:'10px',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(232,184,75,0.65)',marginBottom:'5px'}}>1099 Deductions Hub</div>
                <div style={{fontSize:'20px',fontWeight:900,color:'#fff',lineHeight:1.15}}>1099Deductions<span style={{color:'#e8b84b'}}>.com</span></div>
              </div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:1.65}}>Free IRS Schedule C checklists for every gig job. DoorDash, Uber, Airbnb and more.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap'}}>
                {['17 Job Types','Schedule C','100% Free'].map(t=>(
                  <span key={t} style={{fontSize:'11px',background:'rgba(184,146,74,0.1)',border:'1px solid rgba(184,146,74,0.28)',color:'rgba(232,184,75,0.85)',padding:'3px 8px',borderRadius:'4px'}}>{t}</span>
                ))}
              </div>
              <div style={{background:'#B8924A',color:'#07111f',textAlign:'center',padding:'10px',borderRadius:'6px',fontSize:'13px',fontWeight:800,marginTop:'2px'}}>View Deductions →</div>
            </a>

          </div>
        </section>

        {/* POPULAR PRESETS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <h2 style={{fontSize:'20px',fontWeight:700,color:'#a5b4fc',marginBottom:'8px'}}>Popular Size Presets</h2>
          <p style={{fontSize:'13px',opacity:0.6,marginBottom:'16px'}}>Hit an exact KB target in one click</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:'10px'}}>
            {[
              ['/compress-to-20kb','20 KB','Visa & ID forms'],
              ['/compress-to-50kb','50 KB','Signatures & icons'],
              ['/compress-to-100kb','100 KB','Email & web'],
              ['/compress-to-200kb','200 KB','USCIS & gov portals'],
              ['/compress-to-500kb','500 KB','High-quality email'],
              ['/compress-to-30kb','30 KB','DV Lottery & exams'],
            ].map(([href, size, desc]) => (
              <a key={href} href={href} style={{display:'block',padding:'14px 12px',borderRadius:'12px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',color:'#e2e8f0',textDecoration:'none',transition:'background 0.2s'}}>
                <div style={{fontSize:'18px',fontWeight:800,color:'#818cf8',marginBottom:'4px'}}>{size}</div>
                <div style={{fontSize:'11px',opacity:0.65,lineHeight:1.4}}>{desc}</div>
              </a>
            ))}
          </div>
        </section>

        {/* BY PLATFORM */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 56px'}}>
          <h2 style={{fontSize:'20px',fontWeight:700,color:'#a5b4fc',marginBottom:'8px'}}>Compress for Specific Platforms</h2>
          <p style={{fontSize:'13px',opacity:0.6,marginBottom:'16px'}}>Each page has the exact size requirements for that platform</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:'10px'}}>
            {[
              ['/compress-for-email','✉️ Email','Gmail, Outlook, Yahoo'],
              ['/compress-for-shopify','🛒 Shopify','Product & banner images'],
              ['/compress-for-instagram','📸 Instagram','Feed, Stories, Reels'],
              ['/compress-for-uscis','🇺🇸 USCIS','N-400, DS-160, I-485'],
              ['/compress-for-linkedin','💼 LinkedIn','Profile & cover photo'],
              ['/compress-for-whatsapp','💬 WhatsApp','Under 16MB limit'],
              ['/compress-for-wordpress','📝 WordPress','Core Web Vitals'],
              ['/compress-for-zoom','📹 Zoom','Profile & backgrounds'],
              ['/compress-for-ebay','📦 eBay','Listing photos'],
              ['/compress-for-twitter','🐦 Twitter/X','Under 5MB limit'],
              ['/compress-passport-photo-usa','🚹 Passport','US passport & visa'],
              ['/compress-for-amazon','📦 Amazon','Seller product images'],
            ].map(([href, label, desc]) => (
              <a key={href} href={href} style={{display:'block',padding:'14px 12px',borderRadius:'12px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',color:'#e2e8f0',textDecoration:'none'}}>
                <div style={{fontSize:'14px',fontWeight:700,color:'#c7d2fe',marginBottom:'4px'}}>{label}</div>
                <div style={{fontSize:'11px',opacity:0.65,lineHeight:1.4}}>{desc}</div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
