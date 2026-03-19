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


        {/* SISTER SITES */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 56px'}}>
          <h2 style={{fontSize:'16px',fontWeight:700,color:'rgba(165,180,252,0.7)',marginBottom:'16px',textTransform:'uppercase',letterSpacing:'0.08em'}}>Free Tax Tools for Freelancers & Gig Workers</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'12px'}}>
            <a href="https://gigwisetax.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'block',background:'rgba(178,34,52,0.08)',border:'1px solid rgba(178,34,52,0.25)',borderRadius:'8px',padding:'16px 18px'}}>
              <div style={{fontSize:'11px',fontWeight:700,color:'rgba(178,34,52,0.8)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'6px'}}>1099 Gig Tax Tool</div>
              <div style={{fontSize:'16px',fontWeight:800,color:'#fff',marginBottom:'4px'}}>GigWiseTax.com</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:1.6,marginBottom:'10px'}}>SE tax 15.3% + federal + all 51 states. DoorDash, Uber, OnlyFans & more. 100% free.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}}>
                {['SE Tax 15.3%','All 51 States','100% Free'].map(t=><span key={t} style={{fontSize:'10px',background:'rgba(178,34,52,0.15)',border:'1px solid rgba(178,34,52,0.3)',color:'rgba(255,255,255,0.6)',padding:'2px 7px',borderRadius:'3px'}}>{t}</span>)}
              </div>
              <div style={{background:'#B22234',color:'#fff',padding:'8px 0',borderRadius:'4px',fontSize:'12px',fontWeight:700,textAlign:'center'}}>Calculate Gig Taxes →</div>
            </a>
            <a href="https://privatepaycheck.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'block',background:'rgba(245,200,66,0.06)',border:'1px solid rgba(245,200,66,0.2)',borderRadius:'8px',padding:'16px 18px'}}>
              <div style={{fontSize:'11px',fontWeight:700,color:'rgba(245,200,66,0.7)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'6px'}}>W-2 Paycheck Tool</div>
              <div style={{fontSize:'16px',fontWeight:800,color:'#fff',marginBottom:'4px'}}>PrivatePaycheck.com</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:1.6,marginBottom:'10px'}}>Free paycheck calculator. All 50 states, 2026 IRS brackets. Salary & hourly.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}}>
                {['Salary & Hourly','All 50 States','100% Free'].map(t=><span key={t} style={{fontSize:'10px',background:'rgba(245,200,66,0.1)',border:'1px solid rgba(245,200,66,0.25)',color:'rgba(255,255,255,0.6)',padding:'2px 7px',borderRadius:'3px'}}>{t}</span>)}
              </div>
              <div style={{background:'#F5C842',color:'#07111f',padding:'8px 0',borderRadius:'4px',fontSize:'12px',fontWeight:700,textAlign:'center'}}>Calculate My Paycheck →</div>
            </a>
            <a href="https://1099deductions.com" target="_blank" rel="noopener" style={{textDecoration:'none',display:'block',background:'rgba(184,146,74,0.06)',border:'1px solid rgba(184,146,74,0.2)',borderRadius:'8px',padding:'16px 18px'}}>
              <div style={{fontSize:'11px',fontWeight:700,color:'rgba(184,146,74,0.7)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'6px'}}>1099 Deductions Hub</div>
              <div style={{fontSize:'16px',fontWeight:800,color:'#fff',marginBottom:'4px'}}>1099Deductions.com</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:1.6,marginBottom:'10px'}}>Free IRS Schedule C checklists for every gig job. DoorDash, Uber, Airbnb & more.</div>
              <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}}>
                {['17 Job Types','Schedule C','100% Free'].map(t=><span key={t} style={{fontSize:'10px',background:'rgba(184,146,74,0.1)',border:'1px solid rgba(184,146,74,0.25)',color:'rgba(255,255,255,0.6)',padding:'2px 7px',borderRadius:'3px'}}>{t}</span>)}
              </div>
              <div style={{background:'#B8924A',color:'#07111f',padding:'8px 0',borderRadius:'4px',fontSize:'12px',fontWeight:700,textAlign:'center'}}>View Deductions →</div>
            </a>
          </div>
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
