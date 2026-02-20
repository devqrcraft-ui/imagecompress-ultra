import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Compress Images for Etsy Listings (Under 1MB, Free)',
  description: 'Etsy sellers: learn how to compress product photos without losing quality. Free tool, no signup required.',
  keywords: 'compress images etsy, etsy listing photos size, reduce image size etsy seller',
  alternates: { canonical: 'https://compressto20kb.com/blog/compress-images-for-etsy-listings' },
};
export default function Page() {
  return (
    <article style={{maxWidth:'800px',margin:'0 auto',padding:'40px 20px',color:'white'}}>
      <h1 style={{fontSize:'32px',fontWeight:700,marginBottom:'16px',lineHeight:1.3}}>How to Compress Images for Etsy Listings (Under 1MB, Free)</h1>
      <p style={{fontSize:'16px',color:'rgba(255,255,255,0.6)',marginBottom:'32px',lineHeight:1.7}}>Etsy requires product images under certain file sizes for fast loading. Large images hurt your shop ranking and slow down buyer experience. Here is how to compress your Etsy listing photos in seconds — free, no account needed.</p>
      <section style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',marginBottom:'24px'}}>
        <h2 style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>Why Etsy Image Size Matters</h2>
        <p style={{color:'rgba(255,255,255,0.7)',lineHeight:1.7}}>Etsy recommends images under 1MB for fast page loads. Large images hurt your shop SEO and reduce conversion rates from US buyers browsing on mobile.</p>
      </section>
      <section style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',marginBottom:'24px'}}>
        <h2 style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>Compress Etsy Photos in 3 Steps</h2>
        <ol style={{color:'rgba(255,255,255,0.7)',lineHeight:2,paddingLeft:'20px'}}>
          <li>Upload your product photo — drag and drop or click to select</li>
          <li>Choose target size: under 500KB or 1MB for Etsy</li>
          <li>Download instantly — no signup, no watermark, no quality loss</li>
        </ol>
      </section>
      <div style={{textAlign:'center',marginTop:'40px'}}>
        <a href='/' style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'14px 32px',borderRadius:'10px',textDecoration:'none',fontWeight:600,fontSize:'16px'}}>Compress Etsy Image Free →</a>
      </div>
    </article>
  );
}
