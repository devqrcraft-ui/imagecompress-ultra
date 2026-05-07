import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'JPG to PNG Converter — Free Online, No Upload',
  description: 'Convert JPG images to PNG in your browser. Drag and drop, get transparent PNGs instantly — no upload, no watermark, no signup.',
  alternates: { canonical: 'https://www.compressto20kb.com/jpg-to-png' },
  openGraph: { url: 'https://compressto20kb.com/jpg-to-png' },
}
export default function Page() {
  return (
    <main style={{maxWidth:800,margin:'0 auto',padding:'48px 24px',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{fontSize:15,color:'#9aa3bc',marginBottom:24}}>
        <a href="/" style={{color:'#9aa3bc'}}>Home</a> › JPG to PNG Converter
      </nav>
      <h1 style={{fontSize:34,fontWeight:900,marginBottom:8,color:'#fff'}}>JPG to PNG Converter</h1>
      <p style={{fontSize:17,color:'#818cf8',marginBottom:32,fontWeight:600}}>Free Online, No Upload, 100% Private</p>
      
      <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:12,padding:'20px 24px',marginBottom:32}}>
        <p style={{fontSize:16,color:'#c8d0e7',lineHeight:1.75,margin:0}}>Convert JPG images to PNG format instantly in your browser. No file is uploaded to any server — all conversion runs locally on your device. Get high-quality PNG output with transparency support, completely free.</p>
      </div>

      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'20px 24px',marginBottom:32}}>
        <h2 style={{fontSize:20,fontWeight:800,marginBottom:12,color:'#fff'}}>Why Convert JPG to PNG?</h2>
        <p style={{fontSize:15,color:'#b0b8d1',lineHeight:1.75,margin:0}}>PNG format supports transparent backgrounds and lossless compression, making it ideal for logos, icons, and images that need sharp edges. Use this free JPG to PNG converter when you need a transparent version of your image or higher quality output for print or design work.</p>
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
          <a href="/png-to-jpg" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:15,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>PNG to JPG</a>
          <a href="/" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:15,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>Compress Image</a>
          <a href="/convert-image-to-pdf" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:15,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>Image to PDF</a>
        </div>
      </div>
    </main>
  )
}
