import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Image Compression for Amazon Sellers — Meet Size Requirements',
  description: 'Amazon requires main images on pure white background under specific file sizes. Compress your Amazon product photos free.',
  keywords: 'compress images amazon seller, amazon product image requirements, reduce image size amazon listing',
  alternates: { canonical: 'https://compressto20kb.com/blog/compress-images-for-amazon-seller' },
};
export default function Page() {
  return (
    <article style={{maxWidth:'800px',margin:'0 auto',padding:'40px 20px',color:'white'}}>
      <h1 style={{fontSize:'32px',fontWeight:700,marginBottom:'16px',lineHeight:1.3}}>Image Compression for Amazon Sellers — Meet Size Requirements</h1>
      <p style={{fontSize:'16px',color:'rgba(255,255,255,0.6)',marginBottom:'32px',lineHeight:1.7}}>Amazon has strict image requirements: main images must be at least 1000px on the longest side, but file size matters for upload speed. Here is how sellers compress images to meet all Amazon standards.</p>
      <section style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',marginBottom:'24px'}}>
        <h2 style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>Amazon Image Requirements 2026</h2>
        <p style={{color:'rgba(255,255,255,0.7)',lineHeight:1.7}}>Amazon requires JPEG or PNG format, pure white background (RGB 255,255,255), minimum 1000px on longest side. Smaller files upload faster and index quicker in Amazon search.</p>
      </section>
      <section style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'24px',marginBottom:'24px'}}>
        <h2 style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>3 Steps to Compress Amazon Product Images</h2>
        <ol style={{color:'rgba(255,255,255,0.7)',lineHeight:2,paddingLeft:'20px'}}>
          <li>Upload your Amazon product photo</li>
          <li>Compress to target size while keeping 1000px+ resolution</li>
          <li>Download and upload directly to Amazon Seller Central</li>
        </ol>
      </section>
      <div style={{textAlign:'center',marginTop:'40px'}}>
        <a href='/' style={{display:'inline-block',background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',padding:'14px 32px',borderRadius:'10px',textDecoration:'none',fontWeight:600,fontSize:'16px'}}>Compress Amazon Image Free →</a>
      </div>
    </article>
  );
}
