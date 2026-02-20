import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Compress Images for Shopify Store — Speed Up Your USA Sales',
  description: 'Slow Shopify stores lose customers. Compress product images to boost pagespeed and increase conversions for US buyers.',
  keywords: 'compress images shopify, shopify image optimization, reduce product photo size shopify',
  alternates: { canonical: 'https://compressto20kb.com/blog/compress-images-for-shopify-store' },
};
export default function Page() {
  return (
    <article style={{maxWidth:'800px',margin:'0 auto',padding:'40px 20px',color:'white'}}>
      <h1 style={{fontSize:'32px',fontWeight:700,marginBottom:'16px',lineHeight:1.3}}>Compress Images for Shopify Store — Speed Up Your USA Sales</h1>
      <p style={{fontSize:'16px',color:'rgba(255,255,255,0.6)',marginBottom:'32px',lineHeight:1.7}}>Page speed directly impacts your Shopify conversion rate. US shoppers abandon slow stores within 3 seconds. Compressing your product images is the fastest win for store speed.</p>
      <section style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',marginBottom:'24px'}}>
        <h2 style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>Shopify Image Requirements 2026</h2>
        <p style={{color:'rgba(255,255,255,0.7)',lineHeight:1.7}}>Shopify recommends product images under 70KB for optimal Core Web Vitals scores. Google ranks fast Shopify stores higher in USA search results.</p>
      </section>
      <section style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',marginBottom:'24px'}}>
        <h2 style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>How to Compress Shopify Product Photos</h2>
        <ol style={{color:'rgba(255,255,255,0.7)',lineHeight:2,paddingLeft:'20px'}}>
          <li>Export product photo from Shopify admin</li>
          <li>Upload to our free compressor — choose target size</li>
          <li>Re-upload optimized image to your Shopify store</li>
        </ol>
      </section>
      <div style={{textAlign:'center',marginTop:'40px'}}>
        <a href='/' style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'14px 32px',borderRadius:'10px',textDecoration:'none',fontWeight:600,fontSize:'16px'}}>Compress Shopify Image Free →</a>
      </div>
    </article>
  );
}
