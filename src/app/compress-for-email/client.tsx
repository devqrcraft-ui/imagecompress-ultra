"use client";
import Link from 'next/link';

const emailClients = [
  { icon:'📧', title:'Gmail', desc:'Under 25MB total per message. Inline images load faster under 100KB each. Supports JPEG, PNG, WebP.' },
  { icon:'📨', title:'Outlook', desc:'Corporate servers often block messages over 10MB. Keep photo attachments under 500KB to avoid rejection.' },
  { icon:'📩', title:'Email Newsletters', desc:'Mailchimp, Klaviyo, and Constant Contact recommend inline images under 1MB for fast rendering.' },
];

const sizeTable = [
  ['Newsletter inline image','50–100KB','JPEG or WebP'],
  ['Photo attachment (personal)','Under 1MB','JPEG'],
  ['Product photo (business)','200–500KB','JPEG or WebP'],
  ['Document scan attachment','100–300KB','JPEG'],
  ['Logo / graphic','20–50KB','PNG or WebP'],
];

const steps = [
  { n:'1', t:'Upload your images', d:'Click upload or drag your photos. Accepts JPEG, PNG, WebP, AVIF, HEIC. Upload up to 50 images at once for bulk email preparation.' },
  { n:'2', t:'Choose your target size', d:'For newsletters: set Exact KB Mode to 100KB. For photo attachments: set to 500KB. For large product photos: try 200–300KB.' },
  { n:'3', t:'Select JPEG for compatibility', d:'JPEG works in every email client including older Outlook versions. Use WebP only if you know your recipients use Gmail or modern clients.' },
  { n:'4', t:'Compress and attach', d:'Click Compress and download your optimized images. Attach directly to your email. Everything processed in your browser — nothing uploaded.' },
];

const faqItems = [
  { q:'What is a good image size for email attachments?', a:'For inline newsletter images, under 100KB. For photo attachments, under 1MB per image. Staying under these limits prevents delivery issues and ensures fast loading on mobile.' },
  { q:'What format should I use for email images?', a:'JPEG — universally supported by all email clients including older Outlook versions. WebP works in Gmail and modern clients but may not display in Outlook 2016 and earlier.' },
  { q:'Will my photos be uploaded to compress them?', a:'No — all compression runs in your browser. Nothing is uploaded. Safe for private photos, business documents, and anything sensitive.' },
  { q:'Can I compress multiple email images at once?', a:'Yes — upload up to 50 images, set your target size, and compress all at once. Download as individual files or a ZIP.' },
  { q:'Why does Gmail warn about large attachments?', a:'Gmail flags messages with large attachments because they take longer to deliver and are more likely to trigger spam filters. Keeping images under 500KB per file avoids these warnings.' },
];

export default function ClientPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'48px 16px 24px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'12px'}}>
          <Link href="/" style={{color:'#a5b4fc',textDecoration:'none'}}>Home</Link> → Compress for Email
        </div>
        <h1 style={{fontSize:'clamp(26px,4vw,38px)',fontWeight:900,lineHeight:1.2,marginBottom:'12px'}}>
          Compress Images for <span style={{color:'#818cf8'}}>Email</span> — Free, No Upload, 100% Private
        </h1>
        <p style={{fontSize:'15px',lineHeight:1.7,opacity:0.7,marginBottom:'32px'}}>
          Large email attachments get blocked, bounce, or take forever to load on mobile. Compress your images to under 500KB or 1MB before sending — free, instant, nothing uploaded.
        </p>

        <div style={{background:'rgba(129,140,248,0.12)',border:'1px solid rgba(129,140,248,0.35)',borderRadius:'14px',padding:'24px',marginBottom:'40px',textAlign:'center' as const}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px'}}>📧 Compress Images for Email — Free</div>
          <p style={{fontSize:'13px',opacity:0.65,marginBottom:'16px'}}>No upload · Instant · JPEG, PNG, WebP · Bulk up to 50 images</p>
          <Link href="/?mode=exactkb&target=100" style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'12px 28px',borderRadius:'100px',fontWeight:800,fontSize:'14px',textDecoration:'none'}}>
            ⚡ Open Email Compressor
          </Link>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}>Why Compress Images Before Emailing?</h2>
        <p style={{fontSize:'14px',lineHeight:1.7,opacity:0.7,marginBottom:'16px'}}>A typical smartphone photo is 3–8MB. Email providers like Gmail, Outlook, and Yahoo Mail have attachment limits of 25MB total per message — which sounds large until you are sending 5–10 product photos at once. Compressing images to 100–500KB before attaching ensures faster delivery, reliable rendering, and no risk of messages bouncing.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'12px',marginBottom:'40px'}}>
          {emailClients.map((e,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{e.icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'4px'}}>{e.title}</div>
              <div style={{fontSize:'12px',opacity:0.6,lineHeight:1.5}}>{e.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Recommended Email Image Sizes</h2>
        <div style={{overflowX:'auto',marginBottom:'40px'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
                <th style={{textAlign:'left',padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Use Case</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Target Size</th>
                <th style={{padding:'10px 12px',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Format</th>
              </tr>
            </thead>
            <tbody>
              {sizeTable.map(([use,size,fmt],i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.06)',background:i%2===0?'rgba(255,255,255,0.02)':'transparent'}}>
                  <td style={{padding:'10px 12px',color:'rgba(255,255,255,0.8)'}}>{use}</td>
                  <td style={{padding:'10px 12px',textAlign:'center' as const,color:'#818cf8',fontWeight:700}}>{size}</td>
                  <td style={{padding:'10px 12px',textAlign:'center' as const,color:'rgba(255,255,255,0.6)'}}>{fmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>How to Compress Images for Email — 4 Steps</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {steps.map(s=>(
            <div key={s.n} style={{display:'flex',gap:'16px',background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px 20px'}}>
              <div style={{flexShrink:0,width:'36px',height:'36px',borderRadius:'50%',background:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'16px'}}>{s.n}</div>
              <div>
                <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>{s.t}</div>
                <div style={{fontSize:'13px',opacity:0.65,lineHeight:1.6}}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'16px'}}>Frequently Asked Questions</h2>
        <div style={{display:'flex',flexDirection:'column' as const,gap:'12px',marginBottom:'40px'}}>
          {faqItems.map((item,i)=>(
            <details key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'16px 20px',cursor:'pointer'}}>
              <summary style={{fontWeight:700,fontSize:'14px',color:'#a5b4fc',listStyle:'none'}}>❓ {item.q}</summary>
              <div style={{fontSize:'13px',opacity:0.7,marginTop:'10px',lineHeight:1.6}}>{item.a}</div>
            </details>
          ))}
        </div>

        <h2 style={{fontSize:'18px',fontWeight:700,marginBottom:'12px'}}>Related Tools</h2>
        <div style={{display:'flex',flexWrap:'wrap' as const,gap:'10px',marginBottom:'40px'}}>
          {[
            {href:'/',label:'🏠 Home — Image Compressor'},
            {href:'/compress-to-100kb',label:'📁 Compress to 100KB'},
            {href:'/compress-to-500kb',label:'📦 Compress to 500KB'},
            {href:'/compress-for-shopify',label:'🛍️ For Shopify'},
            {href:'/compress-for-linkedin',label:'💼 For LinkedIn'},
            {href:'/compress-without-uploading',label:'🔒 No Upload Compressor'},
          ].map(({href,label})=>(
            <Link key={href} href={href} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'8px',padding:'8px 14px',color:'white',textDecoration:'none',fontSize:'13px',fontWeight:600}}>{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
