export default function AuthorBox() {
  return (
    <div style={{ maxWidth: 860, margin: '40px auto 0', padding: '0 20px 48px' }}>
      <div style={{ background: 'rgba(129,140,248,0.06)', border: '1px solid rgba(129,140,248,0.15)', borderRadius: 10, padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,#6366f1,#818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>E</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 2 }}>Ethan Blake</div>
          <div style={{ fontSize: 12, color: '#818cf8', marginBottom: 8 }}>Tax Compliance Specialist · Since 2017</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            Ethan Blake has helped 5,000+ freelancers and self-employed workers navigate IRS rules. He writes about image optimization for gig workers, e-commerce sellers, and visa applicants who need fast, free tools.{' '}
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', textDecoration: 'none' }}>IRS Self-Employed Tax Center ↗</a>
          </div>
        </div>
      </div>
    </div>
  )
}
