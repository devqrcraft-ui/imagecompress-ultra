import HomeClient from './home-client';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compress an image to 20KB or under?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your image, switch to Target KB Mode, type 20, and click Compress. The tool runs a binary search in your browser to find the highest quality that still fits under 20KB — nothing is uploaded to any server." }
    },
    {
      "@type": "Question",
      "name": "Is this tool really no-upload?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All compression runs locally in your browser using its built-in image decoding and encoding APIs. Your files never leave your device — unlike TinyPNG, 11zon, and Cloudinary, which upload files to their servers." }
    },
    {
      "@type": "Question",
      "name": "Can I compress multiple images at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — add up to 50 images in one batch. The tool works through them one after another in your browser, then you download each file individually or grab the whole set as a ZIP. It is free and needs no signup." }
    },
    {
      "@type": "Question",
      "name": "Will quality be OK after compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "Target KB Mode searches encoding quality and returns the highest setting that still fits under your number, so you get the best file that satisfies the limit rather than a fixed percentage. Any lossy compression discards some data, and a tight target on a detailed photo will look softer — check the before/after preview before using the file somewhere important. WebP and AVIF generally hold up better than JPEG at the same file size." }
    },
    {
      "@type": "Question",
      "name": "What image formats are supported?",
      "acceptedAnswer": { "@type": "Answer", "text": "JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos) are all supported. Output can be WebP, AVIF, JPEG, or PNG. HEIC files are automatically converted in your browser before compression." }
    }
  ]
};


export const metadata = {
  title: 'Compress Image to 20KB — No Upload, Files Stay in Browser | Free',
  description: 'Compress JPG, PNG, WebP, HEIC to 20KB or under, 50KB, or 100KB. All processing in your browser — photos never uploaded to any server. Free, no signup, instant.',
  alternates: { canonical: 'https://www.compressto20kb.com' },
};

const HOWTO_SCHEMA = {"@context": "https://schema.org", "@type": "HowTo", "name": "How to compress an image to a target file size in your browser", "description": "Five steps to bring any JPG, PNG, WebP, AVIF or HEIC image under a kilobyte ceiling such as 20KB, without uploading the file to a server.", "totalTime": "PT30S", "tool": ["Any modern desktop or mobile browser"], "step": [{"@type": "HowToStep", "name": "Upload your image", "text": "Drag and drop or click the upload zone. Supports JPG, PNG, WebP, AVIF, HEIC."}, {"@type": "HowToStep", "name": "Switch to Target KB Mode", "text": "Click the \"Target KB Mode\" button in the tool."}, {"@type": "HowToStep", "name": "Set 20KB as your target", "text": "Click the \"20 KB\" preset button or type 20 in the custom field."}, {"@type": "HowToStep", "name": "Click Compress", "text": "The tool binary-searches for maximum quality safely under your target, entirely in your browser."}, {"@type": "HowToStep", "name": "Download your file", "text": "Click \"Save\" next to your compressed image. No upload, no watermark, no signup required."}]};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebSite","name":"CompressTo20KB","url":"https://www.compressto20kb.com"}' }} />
      <HomeClient />
      {/* AS-IS DISCLAIMER */}
      <div style={{background:'#0f0c29',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'16px 20px',textAlign:'center' as const}}>
        <p style={{maxWidth:'700px',margin:'0 auto',fontSize:'12px',color:'rgba(255,255,255,0.85)',lineHeight:1.7}}>
          This tool runs entirely in your browser and does not upload or store any images. It is provided as-is, without warranties. Always keep original copies of important documents.
        </p>
      </div>

      {/* SEO CONTENT BELOW THE FOLD */}
      <div style={{background:'#0f0c29',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        {/* HOW TO COMPRESS TO 20KB */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'48px 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            How to compress an image to 20KB or under (step-by-step)
          </h2>
          <ol style={{paddingLeft:'22px',lineHeight:2,fontSize:'15px',opacity:0.88}}>
            <li><strong>Upload your image</strong> — drag and drop or click the upload zone. Supports JPG, PNG, WebP, AVIF, HEIC.</li>
            <li><strong>Switch to Target KB Mode</strong> — click the "Target KB Mode" button in the tool.</li>
            <li><strong>Set 20KB as your target</strong> — click the "20 KB" preset button or type 20 in the custom field.</li>
            <li><strong>Click Compress</strong> — the tool binary-searches for maximum quality safely under your target, entirely in your browser.</li>
            <li><strong>Download your file</strong> — click "Save" next to your compressed image. No upload, no watermark, no signup required.</li>
          </ol>
        </section>

        {/* BEST USES */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            Best uses for 20KB images
          </h2>
          <ul style={{paddingLeft:'20px',lineHeight:1.95,opacity:0.85,fontSize:'15px'}}>
            <li><strong>US visa and DV Lottery photos</strong> — the published specification is a JPEG between 600×600 and 1200×1200 pixels and under 240KB, which is why so many people land here looking for a kilobyte target rather than a percentage.</li>
            <li><strong>Exam and application forms that print a KB limit</strong> — many registration portals state a range in their own instructions, for example "photograph: JPEG, 10–200KB". Type that ceiling into Target KB Mode instead of guessing.</li>
            <li><strong>Job applications and HR portals</strong> — Workday, Greenhouse, Indeed and LinkedIn profile photos all accept a normal headshot; the ceiling is set by the employer or by the platform's own resize, so aim for a few hundred KB and stop there.</li>
            <li><strong>Storefront listings</strong> — Shopify, Etsy, eBay and Amazon publish pixel and background rules, not a maximum file size in KB. Smaller files are a speed decision you make, not a rule you satisfy.</li>
            <li><strong>Email and messaging</strong> — the photo you attach is only part of the message; a heavy inline image pushes the whole thing toward the size many providers refuse to deliver.</li>
          </ul>
          <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginTop:'14px'}}>
            We only quote a number here when an official source publishes one. Where a portal does not, we say so instead of inventing a limit — and the exact figures on each dedicated page come with the link we checked them against.
          </p>
        </section>

        {/* WHY A KB TARGET, NOT A PERCENTAGE */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            Why a kilobyte target instead of a quality slider
          </h2>
          <p style={{fontSize:'15px',lineHeight:1.7,marginBottom:'12px',opacity:0.9}}>
            A quality percentage is the wrong unit for a form field that asks for kilobytes. The same "80%" can leave one
            photo at 40KB and another at 900KB, because output size depends on pixel dimensions and detail, not on the number you typed.
          </p>
          <ul style={{paddingLeft:'20px',lineHeight:1.9,opacity:0.85,fontSize:'15px'}}>
            <li><strong>What the tool actually does</strong> — it runs a binary search over encoding quality in your browser, between roughly 5% and 95%, narrowing until the encoded file fits under your target.</li>
            <li><strong>The result is at or under, never over</strong> — a file that is already smaller than your target comes back unchanged, so the output never exceeds the ceiling you typed.</li>
            <li><strong>It stops trying after a dozen passes</strong> — if a very large, very detailed photo cannot reach an aggressive target at usable quality, resize the pixels first, then set the target.</li>
            <li><strong>Nothing is uploaded</strong> — encoding happens on your device, which is the point for passport, visa and ID photos.</li>
          </ul>
        </section>

        {/* TIPS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,26px)',fontWeight:700,color:'#a5b4fc',marginBottom:'16px'}}>
            Tips for Getting the Best Compression Results
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'16px'}}>
            {[
              ['Use WebP or AVIF when the destination accepts it','Both usually hold more detail than JPEG at the same file size, and AVIF typically goes smallest. Switch to JPEG when you need the widest compatibility.'],
              ['Start with the highest quality original','Compressing an already-compressed JPEG degrades quality faster. Always start from the original file.'],
              ['Use Target KB Mode for forms','If a portal says "max 20KB", use Target KB Mode — it binary-searches for maximum quality within your target.'],
              ['Batch compress up to 50 images','Add the whole set at once. The tool works through it in your browser, one file after another, with no uploads and no waiting queue.'],
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
            ['How do I compress an image to 20KB or under?',
             'Upload your image, switch to Target KB Mode, type 20, and click Compress. The tool runs a binary search in your browser to find the highest quality that still fits under 20KB — nothing is uploaded to any server.'],
            ['Is this tool really no-upload?',
             'Yes. All compression runs locally in your browser using its built-in image decoding and encoding APIs. Your files never leave your device — unlike TinyPNG, 11zon, and Cloudinary, which upload files to their servers.'],
            ['What image formats are supported?',
             'JPEG, PNG, WebP, AVIF, and HEIC (iPhone photos) are all supported. Output can be WebP, AVIF, JPEG, or PNG. HEIC files are automatically converted in your browser before compression.'],
            ['Can I compress multiple images at once?',
             'Yes — add up to 50 images in one batch. The tool works through them one after another in your browser, then you download each file individually or grab the whole set as a ZIP. It is free and needs no signup.'],
            ['Will quality be OK after compression?',
             'Target KB Mode searches encoding quality and returns the highest setting that still fits under your number, so you get the best file that satisfies the limit rather than a fixed percentage. Any lossy compression discards some data, and a tight target on a detailed photo will look softer — check the before/after preview before using the file somewhere important. WebP and AVIF generally hold up better than JPEG at the same file size.'],
            ['What is Target KB Mode?',
             'Target KB Mode takes a file-size ceiling instead of a percentage — 20KB, 50KB, 100KB, or any value from 5KB up to 5000KB. The tool searches encoding quality and returns the best result that fits under the number you typed.'],
            ['Is this tool completely free?',
             'Yes — no account, no watermark, no daily quota and no file is ever uploaded, so there is nothing to meter. The practical limits are the ones built into the tool: 50 files per batch and a target between 5KB and 5000KB.'],
          ].map(([q, a], i) => (
            <details key={i} style={{borderBottom:'1px solid rgba(129,140,248,0.15)',padding:'14px 0'}}>
              <summary style={{fontWeight:600,fontSize:'16px',cursor:'pointer',color:'#c7d2fe',listStyle:'none',display:'flex',justifyContent:'space-between'}}>
                {q} <span style={{opacity:0.68,marginLeft:'8px'}}>+</span>
              </summary>
              <p style={{marginTop:'10px',fontSize:'15px',lineHeight:1.7,opacity:0.85,paddingLeft:'4px'}}>{a}</p>
            </details>
          ))}
        </section>


        {/* POPULAR PRESETS */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 32px'}}>
          <h2 style={{fontSize:'20px',fontWeight:700,color:'#a5b4fc',marginBottom:'8px'}}>Popular Size Presets</h2>
          <p style={{fontSize:'15px',opacity:0.72,marginBottom:'16px'}}>Pick a kilobyte ceiling and the tool searches for the best quality that stays under it</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:'10px'}}>
            {[
              ['/compress-to-20kb','20 KB','Visa & ID forms'],
              ['/compress-to-50kb','50 KB','Signatures & icons'],
              ['/compress-to-100kb','100 KB','Email & web'],
              ['/compress-to-200kb','200 KB','Headroom under 240 KB'],
              ['/compress-to-500kb','500 KB','High-quality email'],
              ['/compress-to-30kb','30 KB','Tight exam-form ceilings'],
            ].map(([href, size, desc]) => (
              <a key={href} href={href} style={{display:'block',padding:'14px 12px',borderRadius:'12px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',color:'#e2e8f0',textDecoration:'none',transition:'background 0.2s'}}>
                <div style={{fontSize:'18px',fontWeight:800,color:'#818cf8',marginBottom:'4px'}}>{size}</div>
                <div style={{fontSize:'13px',opacity:0.85,lineHeight:1.4}}>{desc}</div>
              </a>
            ))}
          </div>
        </section>

        {/* BY PLATFORM */}
        <section style={{maxWidth:'860px',margin:'0 auto',padding:'0 20px 56px'}}>
          <h2 style={{fontSize:'20px',fontWeight:700,color:'#a5b4fc',marginBottom:'8px'}}>Compress for Specific Platforms</h2>
          <p style={{fontSize:'15px',opacity:0.72,marginBottom:'16px'}}>Each page separates what the platform publishes from what we recommend</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:'10px'}}>
            {[
              ['/compress-for-email','✉️ Email','Gmail, Outlook, Yahoo'],
              ['/compress-for-shopify','🛒 Shopify','Product & banner images'],
              ['/compress-for-instagram','📸 Instagram','Feed, Stories, Reels'],
              ['/compress-for-uscis','🇺🇸 USCIS','N-400, DS-160, I-485'],
              ['/compress-for-linkedin','💼 LinkedIn','Profile & cover photo'],
              ['/compress-for-whatsapp','💬 WhatsApp','Photos, docs, profile'],
              ['/compress-for-wordpress','📝 WordPress','Core Web Vitals'],
              ['/compress-for-zoom','📹 Zoom','Profile & backgrounds'],
              ['/compress-for-ebay','📦 eBay','Listing photos'],
              ['/compress-for-twitter','🐦 Twitter/X','Under 5MB limit'],
              ['/compress-passport-photo-usa','🚹 Passport','US passport & visa'],
              ['/compress-for-amazon','📦 Amazon','Seller product images'],
            ].map(([href, label, desc]) => (
              <a key={href} href={href} style={{display:'block',padding:'14px 12px',borderRadius:'12px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',color:'#e2e8f0',textDecoration:'none'}}>
                <div style={{fontSize:'14px',fontWeight:700,color:'#c7d2fe',marginBottom:'4px'}}>{label}</div>
                <div style={{fontSize:'13px',opacity:0.85,lineHeight:1.4}}>{desc}</div>
              </a>
            ))}
          </div>
        </section>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"the CompressTo20KB Team","url":"https://www.compressto20kb.com"}' }} />
      </div>
    </>
  );
}
