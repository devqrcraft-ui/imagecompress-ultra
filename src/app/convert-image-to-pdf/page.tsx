import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Convert Image to PDF — Free JPG/PNG to PDF, No Upload',
  description: 'Convert JPG and PNG images to PDF documents directly in your browser. Merge multiple images into one PDF, no upload or watermark.',
  alternates: { canonical: 'https://www.compressto20kb.com/convert-image-to-pdf' },
  openGraph: { url: 'https://www.compressto20kb.com/convert-image-to-pdf' },
}
export default function Page() {
  return (
    <main style={{maxWidth:800,margin:'0 auto',padding:'48px 24px',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{fontSize:13,color:'#9aa3bc',marginBottom:24}}>
        <a href="/" style={{color:'#9aa3bc'}}>Home</a> › Convert Image to PDF
      </nav>
      <h1 style={{fontSize:34,fontWeight:900,marginBottom:8,color:'#fff'}}>Convert Image to PDF</h1>
      <p style={{fontSize:17,color:'#818cf8',marginBottom:32,fontWeight:600}}>Free JPG & PNG to PDF Converter, No Upload</p>
      
      <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:12,padding:'20px 24px',marginBottom:32}}>
        <p style={{fontSize:16,color:'#c8d0e7',lineHeight:1.75,margin:0}}>Convert JPG and PNG images to PDF documents directly in your browser. Merge multiple images into a single PDF file — no upload to any server, no watermarks, completely free. Your images never leave your device.</p>
      </div>

      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'20px 24px',marginBottom:32}}>
        <h2 style={{fontSize:20,fontWeight:800,marginBottom:12,color:'#fff'}}>Why Convert Images to PDF?</h2>
        <p style={{fontSize:15,color:'#b0b8d1',lineHeight:1.75,margin:0}}>PDF format is ideal for sharing multiple images as a single document, printing, or archiving. Use this free converter to combine photos into one PDF for visa applications, portfolios, or reports. All processing runs locally — 100% private.</p>
      </div>

      <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:12,padding:'20px 24px',marginBottom:32}}>
        <h2 style={{fontSize:18,fontWeight:800,marginBottom:16,color:'#fff'}}>Why No Upload?</h2>
        <ul style={{margin:0,padding:'0 0 0 20px',color:'#b0b8d1',lineHeight:2,fontSize:15}}>
          <li>Your images never leave your device</li>
          <li>No account or signup required</li>
          <li>No watermarks added to output</li>
          <li>Works offline after first load</li>
          <li>100% free, no limits</li>
        </ul>
      </div>

      <div style={{borderTop:'2px solid #2a3a6a',marginTop:40,paddingTop:28}}>
        <h2 style={{fontSize:16,fontWeight:800,marginBottom:16,color:'#fff'}}>Related Tools</h2>
        <div style={{display:'flex',gap:10,flexWrap:'wrap' as const}}>
          <a href="/jpg-to-png" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:13,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>JPG to PNG</a>
          <a href="/" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:13,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>Compress Image</a>
          <a href="/compress-for-email" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:13,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>Compress for Email</a>
        </div>
      </div>
    </main>
  )
}
