'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links: [string, string, string][] = [
    ['/', 'Home', '#22d3ee'],
    ['/compress-to-50kb', '50KB', '#6366f1'],
    ['/compress-to-100kb', '100KB', '#6366f1'],
    ['/compress-to-200kb', '200KB', '#6366f1'],
    ['/compress-for-shopify', 'Shopify', '#f59e0b'],
    ['/compress-passport-photo', 'Passport', '#10b981'],
    ['/blog', 'Blog', '#8b5cf6'],
  ];
  const getBg = (color: string) => {
    if (color === '#6366f1') return 'rgba(99,102,241,0.15)';
    if (color === '#f59e0b') return 'rgba(245,158,11,0.15)';
    if (color === '#10b981') return 'rgba(16,185,129,0.15)';
    if (color === '#22d3ee') return 'rgba(34,211,238,0.15)';
    return 'rgba(139,92,246,0.15)';
  };
  return (
    <>
      <nav style={{background:'#0f0f1a',borderBottom:'1px solid #1e1e35',padding:'0 16px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'56px',position:'sticky',top:0,zIndex:50,fontFamily:'system-ui,-apple-system,sans-serif'}}>
        <a href='/' style={{textDecoration:'none',display:'flex',alignItems:'center',gap:'6px'}}>
          <span style={{fontSize:'20px',fontWeight:800,color:'#fff',letterSpacing:'-0.5px'}}>
            Compress<span style={{color:'#22d3ee'}}>20KB</span>
          </span>
        </a>
        <div style={{display:'flex',alignItems:'center',gap:'4px',flexWrap:'wrap'}} className='nav-links'>
          {links.map(([href, label, color]) => (
            <a
              key={href}
              href={href}
              className='nav-btn'
              style={{color:'#e0e0ff',textDecoration:'none',fontSize:'13px',fontWeight:600,padding:'5px 9px',borderRadius:'8px',whiteSpace:'nowrap',border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.04)',transition:'all 0.18s ease',display:'inline-flex',alignItems:'center',gap:'4px',cursor:'pointer'}}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#fff';
                el.style.background = getBg(color);
                el.style.borderColor = color;
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#e0e0ff';
                el.style.background = 'rgba(255,255,255,0.04)';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} style={{display:'none',background:'none',border:'none',color:'#fff',fontSize:'22px',cursor:'pointer',padding:'4px 8px'}} className='hamburger' aria-label='Menu'>
          {open ? '✕' : '☰'}
        </button>
      </nav>
      {open && (
        <div style={{background:'#0f0f1a',borderBottom:'1px solid #1e1e35',padding:'8px 16px 16px',display:'flex',flexDirection:'column',gap:'6px'}} className='mobile-menu'>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{color:'#e0e0ff',textDecoration:'none',fontSize:'15px',fontWeight:600,padding:'10px 12px',borderRadius:'8px',border:'1px solid rgba(255,255,255,0.08)'}}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}