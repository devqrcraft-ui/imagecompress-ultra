export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',fontFamily:'Inter,-apple-system,sans-serif'}}>
      <header style={{background:'#0a0a14',borderBottom:'1px solid #1a1a2e',padding:'0 16px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'56px',position:'sticky',top:0,zIndex:50}}>
        <a href="/" style={{textDecoration:'none',fontWeight:800,fontSize:'18px',color:'#fff'}}>
          Compress<span style={{color:'#22d3ee'}}>20KB</span>
        </a>
        <nav style={{display:'flex',gap:'12px',alignItems:'center'}}>
          <a href="/" style={{color:'#8888bb',textDecoration:'none',fontSize:'15px'}}>🗜️ Tool</a>
          <a href="/blog" style={{color:'#8888bb',textDecoration:'none',fontSize:'15px'}}>📝 Blog</a>
          <a href="/faq" style={{color:'#8888bb',textDecoration:'none',fontSize:'15px'}}>FAQ</a>
        </nav>
        <a href="/" style={{background:'linear-gradient(135deg,#6366f1,#22d3ee)',color:'#fff',fontSize:'15px',fontWeight:800,padding:'8px 16px',borderRadius:'100px',textDecoration:'none'}}>
          ⚡ Compress Free
        </a>
      </header>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'40px 20px 60px'}}>
        {children}
      </div>
      
    </div>
  )
}
