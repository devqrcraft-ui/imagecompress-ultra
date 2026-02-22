import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Compress Images for Google Forms — Free Guide 2025',
  description: 'Google Forms has a 10MB file upload limit. Learn how to compress images for Google Forms quickly — no upload needed, works on any device.',
  keywords: 'compress image for google forms, google forms image size limit, reduce image size for google forms, google forms photo upload',
  alternates: { canonical: '/blog/compress-image-for-google-forms' },
};
export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f172a,#1e1b4b)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 20px' }}>
        <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '12px' }}>Blog → Google Forms</div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>How to Compress Images for Google Forms</h1>
        <p style={{ opacity: 0.5, fontSize: '13px', marginBottom: '32px' }}>February 2025 · 4 min read</p>

        <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.8, marginBottom: '24px' }}>Google Forms allows respondents to upload files up to 10MB per file. While that sounds generous, many users hit this limit when submitting photos taken on modern smartphones — which can easily be 5–15MB each. Compressing your images before submission keeps your forms fast and your Google Drive storage clean.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>What Size Should Images Be for Google Forms?</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>Google Forms has a 10MB limit per uploaded file and a 1GB total response limit per form. For most use cases — submitting ID photos, documents, or profile pictures — keeping images under 500KB is ideal. This ensures fast uploads on mobile connections and keeps your Drive organized.</p>

        <div style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '12px', padding: '16px 20px', margin: '24px 0' }}>
          <strong style={{ color: '#a5b4fc' }}>Google Forms File Size Limits:</strong>
          <ul style={{ margin: '8px 0 0', paddingLeft: '20px', fontSize: '14px', opacity: 0.8, lineHeight: 2 }}>
            <li>Max file size per upload: 10MB</li>
            <li>Total storage per form: 1GB (Google Drive)</li>
            <li>Recommended image size: under 500KB for fast upload</li>
            <li>For ID/passport photos: under 20–50KB</li>
          </ul>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>How to Compress an Image for Google Forms (Step by Step)</h2>
        <ol style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: 2.2, opacity: 0.8 }}>
          <li>Go to <a href="https://compressto20kb.com" style={{ color: '#818cf8' }}>compressto20kb.com</a></li>
          <li>Drop your image into the upload zone</li>
          <li>Choose <strong>Exact KB Mode</strong> and type your target (e.g., 200KB)</li>
          <li>Select <strong>JPEG</strong> or <strong>WebP</strong> format</li>
          <li>Click Compress and download your file</li>
          <li>Upload the compressed image to your Google Form</li>
        </ol>
        <p style={{ fontSize: '14px', opacity: 0.6, margin: '8px 0 24px' }}>Your image is processed entirely in your browser — nothing is uploaded to any server.</p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Common Google Forms Use Cases</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>These are the most common situations where users need to compress images before submitting a Google Form:</p>
        <ul style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: 2, opacity: 0.8 }}>
          <li><strong>School registration forms</strong> — submitting student ID or passport photo</li>
          <li><strong>Job application forms</strong> — submitting resume photo or headshot</li>
          <li><strong>Event registration</strong> — submitting proof of ID or ticket photo</li>
          <li><strong>Medical intake forms</strong> — submitting insurance card or document scan</li>
          <li><strong>Government program applications</strong> — submitting documents under size limit</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '32px 0 12px' }}>Why Compress Before Uploading to Google Forms?</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '16px' }}>Even though Google Forms allows up to 10MB, there are good reasons to compress your images first. Smaller files upload faster — especially on mobile data. They also take less space in the form owner's Google Drive, and some forms have administrator-set limits lower than 10MB.</p>

        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '20px', margin: '32px 0', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Compress your image now — free, no upload</p>
          <a href="https://compressto20kb.com" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#22d3ee)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}>Open CompressTo20KB →</a>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
          {[['/', 'Home'], ['/compress-to-200kb', 'Compress to 200KB'], ['/compress-for-email', 'Compress for Email'], ['/bulk-image-compressor', 'Bulk Compress']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: '#a5b4fc', textDecoration: 'none', background: 'rgba(99,102,241,0.1)', padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>{label}</a>
          ))}
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)' }}>© 2025 CompressTo20KB</footer>
    </div>
  );
}
