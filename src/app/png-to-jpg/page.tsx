import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'PNG to JPG Converter — Free Online, No Upload',
  description: 'Convert PNG images to JPG for smaller file sizes. All conversion runs in your browser, so your images never leave your device.',
  alternates: { canonical: 'https://www.compressto20kb.com/png-to-jpg' },
  openGraph: { url: 'https://www.compressto20kb.com/png-to-jpg' },
}
export default function Page() {
  return (
    <main style={{maxWidth:800,margin:'0 auto',padding:'48px 24px',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{fontSize:15,color:'#9aa3bc',marginBottom:24}}>
        <a href="/" style={{color:'#9aa3bc'}}>Home</a> › PNG to JPG Converter
      </nav>
      <h1 style={{fontSize:34,fontWeight:900,marginBottom:8,color:'#fff'}}>PNG to JPG Converter</h1>
      <p style={{fontSize:17,color:'#818cf8',marginBottom:32,fontWeight:600}}>Free Online, Smaller File Sizes, No Upload</p>
      
      <div style={{background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:12,padding:'20px 24px',marginBottom:32}}>
        <p style={{fontSize:16,color:'#c8d0e7',lineHeight:1.75,margin:0}}>Convert PNG images to JPG format in your browser for smaller file sizes. No upload to any server — your images stay 100% private on your device. Perfect for reducing file size while keeping good visual quality.</p>
      </div>

      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'20px 24px',marginBottom:32}}>
        <h2 style={{fontSize:20,fontWeight:800,marginBottom:12,color:'#fff'}}>Why Convert PNG to JPG?</h2>
        <p style={{fontSize:15,color:'#b0b8d1',lineHeight:1.75,margin:0}}>JPG files are typically 5–10× smaller than PNG for photos. Use this converter when you need to reduce file size for email, web, or social media. All processing happens in your browser — no data is ever sent to a server.</p>
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
          <a href="/jpg-to-png" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:15,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>JPG to PNG</a>
          <a href="/" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:15,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>Compress Image</a>
          <a href="/compress-to-100kb" style={{padding:'8px 14px',background:'rgba(129,140,248,0.07)',border:'1px solid rgba(129,140,248,0.18)',borderRadius:6,fontSize:15,fontWeight:600,color:'#818cf8',textDecoration:'none'}}>Compress to 100KB</a>
        </div>
      </div>
    </main>
  )
}
