cat > src/components/Footer.tsx << 'EOF'
import Link from 'next/link';
export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid rgba(255,255,255,0.1)',marginTop:'60px',padding:'40px 20px',background:'rgba(0,0,0,0.3)'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'32px'}}>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Tools</h3>
          {[['/compress-to-20kb','Compress to 20KB'],['/compress-to-50kb','Compress to 50KB'],['/compress-to-100kb','Compress to 100KB'],['/compress-to-200kb','Compress to 200KB'],['/visa-photo-compressor','Visa Photo Compressor'],['/bulk-image-compressor','Bulk Compressor'],['/compress-without-uploading','No Upload Compressor']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Visa & Gov</h3>
          {[['/compress-for-ds160','DS-160 Photo'],['/compress-for-uscis','USCIS Photo'],['/compress-for-green-card','Green Card Photo'],['/compress-for-passport-renewal','Passport Renewal'],['/compress-for-dv-lottery','DV Lottery Photo'],['/compress-for-f1-visa','F1 Visa Photo'],['/compress-image-for-visa','Visa Photo']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Blog</h3>
          {[['/blog/best-image-size-for-ebay-listings','eBay Image Size Guide'],['/blog/best-image-compressor-for-mac','Best Compressor for Mac'],['/blog/compress-image-for-google-forms','Compress for Google Forms'],['/blog/compress-images-for-shopify-store','Compress for Shopify'],['/blog/ds-160-photo-requirements','DS-160 Requirements'],['/blog/us-passport-photo-requirements','US Passport Photo'],['/blog/uscis-photo-size-requirements','USCIS Photo Size'],['/blog','All Articles →']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
        </div>
        <div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Compare</h3>
          {[['/vs/tinypng','vs TinyPNG'],['/vs/squoosh','vs Squoosh'],['/vs/compressor-io','vs Compressor.io'],['/vs/iloveimg','vs iLoveIMG'],['/vs/kraken','vs Kraken.io']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,margin:'16px 0 12px',textTransform:'uppercase'}}>Company</h3>
          {[['/about','About'],['/faq','FAQ'],['/contact','Contact'],['/privacy-policy','Privacy Policy'],['/terms','Terms']].map(([href,label])=>(
            <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'6px',textDecoration:'none'}}>{label}</Link>
          ))}
        </div>
      </div>
      <div style={{maxWidth:'1200px',margin:'32px auto 0',paddingTop:'20px',borderTop:'1px solid rgba(255,255,255,0.08)',textAlign:'center',color:'rgba(255,255,255,0.35)',fontSize:'12px'}}>
        © {new Date().getFullYear()} CompressTo20KB.com — Free Online Image Compressor
      </div>
    </footer>
  );
}
EOF
sed -i "3a import Footer from '@/components/Footer';" src/app/layout.tsx && sed -i 's|</body>|<Footer />\n      </body>|' src/app/layout.tsx && grep -n "Footer\|</body>" src/app/layout.tsx && git add -A && git commit -m "feat: add Footer with internal links for SEO indexing" && git push