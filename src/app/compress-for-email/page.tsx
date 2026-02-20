import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compress Image for Email — Reduce Photo Size Free Online',
  description: 'Reduce image size for email attachments free. Compress photos under 1MB instantly in your browser. No upload, no signup, 100% private.',
  alternates: { canonical: '/compress-for-email' },
};

export default function EmailPage() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f2a1e 100%)',fontFamily:'Inter,sans-serif',color:'white'}}>
      <header style={{padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none',color:'white'}}>
          <span style={{fontSize:'22px'}}>🗜️</span>
          <div style={{fontWeight:800,fontSize:'17px'}}>Compress<span style={{color:'#818cf8'}}>To20KB</span></div>
        </Link>
        <Link href="/" style={{color:'rgba(255,255,255,0.5)',textDecoration:'none',fontSize:'13px'}}>← Back to Tool</Link>
      </header>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'32px 20px'}}>
        <div style={{display:'inline-block',background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'20px',padding:'4px 14px',fontSize:'12px',fontWeight:600,color:'#34d399',marginBottom:'14px'}}>📧 Email Optimization</div>
        <h1 style={{fontSize:'32px',fontWeight:800,marginBottom:'12px',letterSpacing:'-0.5px'}}>
          Compress Image for <span style={{color:'#818cf8'}}>Email</span>
        </h1>
        <p style={{fontSize:'15px',lineHeight:'1.7',opacity:0.65,marginBottom:'24px'}}>
          Reduce photo size for email attachments in seconds — free, no signup, works in your browser. Gmail, Outlook, Yahoo — all email clients have size limits. We help you stay under them.
        </p>
        <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'12px',padding:'16px 20px',marginBottom:'24px'}}>
          <div style={{fontWeight:700,fontSize:'14px',color:'#f87171',marginBottom:'8px'}}>⚠️ Email attachment limits</div>
          <p style={{fontSize:'13px',opacity:0.7,lineHeight:'1.6',margin:0}}>
            Gmail limits attachments to <strong style={{color:'#fca5a5'}}>25MB</strong>, Outlook to <strong style={{color:'#fca5a5'}}>20MB</strong>. A single phone photo can be 5–12MB. Compress before sending.
          </p>
        </div>
        <div style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'14px',padding:'20px',marginBottom:'28px',textAlign:'center'}}>
          <div style={{fontSize:'15px',fontWeight:700,marginBottom:'8px',color:'#a5b4fc'}}>📧 Email Preset — Ready to Use</div>
          <p style={{fontSize:'13px',opacity:0.6,marginBottom:'14px'}}>Optimized for email: JPEG, 80% quality, 1200px max — perfect balance of size and clarity</p>
          <Link href="/?preset=email" style={{display:'inline-block',padding:'12px 28px',borderRadius:'10px',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:800,fontSize:'15px',textDecoration:'none'}}>
            ⚡ Open Email Compressor →
          </Link>
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>Email Image Size Guidelines</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'10px',marginBottom:'28px'}}>
          {[['📧','Gmail limit','25MB total attachment'],['📨','Outlook limit','20MB total attachment'],['📱','Phone photo','5–12MB original size'],['✅','After compress','Under 500KB recommended'],].map(([icon,title,desc])=>(
            <div key={title} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',padding:'14px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <div style={{fontSize:'20px',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:'13px',marginBottom:'3px'}}>{title}</div>
              <div style={{fontSize:'12px',opacity:0.5}}>{desc}</div>
            </div>
          ))}
        </div>
        <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'14px'}}>FAQ — Compress Images for Email</h2>
        {[
          ['How small should images be for email?','Under 500KB per image is ideal for email. This loads fast and stays well within attachment limits.'],
          ['Will the photo still look good after compression?','Yes — at 80% quality, images look identical to the human eye but are 5-10x smaller in file size.'],
          ['Can I compress multiple photos for one email?','Yes, up to 10 images at once for free.'],
          ['Does this work for Gmail, Outlook, and Yahoo?','Yes — the compressed files work with any email client or service.'],
          ['Is there a risk of losing the original photo?','No — we never modify your original file. Download the compressed version and keep your original safe.'],
        ].map(([q,a])=>(
          <details key={q} style={{background:'rgba(255,255,255,0.04)',borderRadius:'10px',marginBottom:'8px',border:'1px solid rgba(255,255,255,0.07)',padding:'14px 16px'}}>
            <summary style={{fontWeight:600,fontSize:'14px',cursor:'pointer',listStyle:'none'}}>▶ {q}</summary>
            <p style={{fontSize:'13px',opacity:0.6,marginTop:'10px',lineHeight:'1.7'}}>{a}</p>
          </details>
        ))}
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'24px'}}>
          {[['/compress-for-shopify','Compress for Shopify'],['/compress-for-etsy','Compress for Etsy'],['/compress-without-uploading','No Upload Compressor']].map(([href,label])=>(
            <Link key={href} href={href} style={{padding:'8px 16px',borderRadius:'8px',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.25)',color:'#a5b4fc',fontSize:'13px',fontWeight:600,textDecoration:'none'}}>{label} →</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
