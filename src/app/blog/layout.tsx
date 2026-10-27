export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{minHeight:'100vh',fontFamily:'Inter,-apple-system,sans-serif'}}>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'32px 20px 60px'}}>
        {children}
      </div>
    </div>
  )
}
