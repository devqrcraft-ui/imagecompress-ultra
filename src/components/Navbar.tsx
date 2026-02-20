'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav style={{
        background:'#0f0f1a',
        borderBottom:'1px solid #1e1e35',
        padding:'0 24px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        height:'56px',
        position:'sticky',
        top:0,
        zIndex:50,
        fontFamily:'system-ui,-apple-system,sans-serif',
      }}>
        <a href="/" style={{textDecoration:'none',display:'flex',alignItems:'center',gap:'6px'}}>
          <span style={{fontSize:'20px',fontWeight:800,color:'#fff',letterSpacing:'-0.5px'}}>
            Compress<span style={{color:'#22d3ee'}}>20KB</span>
          </span>
        </a>

        <div style={{display:'flex',alignItems:'center',gap:'6px'}} className="nav-links">
          {[
            ['/','🗜️ Compress','#6366f1'],
            ['/compress-for-shopify','🛍️ Shopify','#f59e0b'],
            ['/compress-passport-photo','🪪 Passport','#10b981'],
            ['/compress-without-uploading','🔒 No Upload','#22d3ee'],
            ['/faq','FAQ','#8b5cf6'],
            ['/blog','Blog','#8b5cf6'],
          ].map(([href,label,color])=>(
            <a
              key={href}
              href={href}
              className="nav-btn"
              style={{
                color:'#c0c0d8',
                textDecoration:'none',
                fontSize:'13px',
                fontWeight:600,
                padding:'6px 12px',
                borderRadius:'8px',
                whiteSpace:'nowrap',
                border:'1px solid rgba(255,255,255,0.08)',
                background:'rgba(255,255,255,0.04)',
                boxShadow:'0 1px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                transition:'all 0.18s ease',
                display:'inline-flex',
                alignItems:'center',
                gap:'4px',
                cursor:'pointer',
              }}
              onMouseEnter={e=>{
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#fff';
                el.style.background = `rgba(${color === '#6366f1' ? '99,102,241' : color === '#f59e0b' ? '245,158,11' : color === '#10b981' ? '16,185,129' : color === '#22d3ee' ? '34,211,238' : '139,92,246'},0.15)`;
                el.style.borderColor = color as string;
                el.style.boxShadow = `0 0 12px ${color}55, 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)`;
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e=>{
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#c0c0d8';
                el.style.background = 'rgba(255,255,255,0.04)';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <span style={{
            background:'linear-gradient(135deg,#6366f1,#22d3ee)',
            color:'#fff',
            fontSize:'12px',
            fontWeight:700,
            padding:'5px 12px',
            borderRadius:'100px',
            whiteSpace:'nowrap',
            boxShadow:'0 0 16px rgba(99,102,241,0.4)',
          }}>
            📦 ZIP included
          </span>
          <button
            onClick={()=>setOpen(!open)}
            className="nav-burger"
            style={{display:'none',background:'none',border:'none',color:'#fff',fontSize:'22px',cursor:'pointer',padding:'4px'}}
          >
            {open?'✕':'☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:'fixed',top:'56px',left:0,right:0,bottom:0,
          background:'#0f0f1a',zIndex:49,padding:'16px',
          display:'flex',flexDirection:'column',gap:'6px',
          borderTop:'1px solid #1e1e35',overflowY:'auto',
        }}>
          {[
            ['/','🗜️ Compress Images'],
            ['/compress-for-shopify','🛍️ Shopify'],
            ['/compress-passport-photo','🪪 Passport Photo'],
            ['/compress-without-uploading','🔒 100% Private — No Upload'],
            ['/faq','❓ FAQ'],
            ['/blog','📝 Blog'],
          ].map(([href,label])=>(
            <a
              key={href}
              href={href}
              onClick={()=>setOpen(false)}
              style={{
                display:'block',
                padding:'14px 16px',
                borderRadius:'12px',
                background:'#1a1a2e',
                color:'#e0e0ff',
                textDecoration:'none',
                fontSize:'15px',
                fontWeight:500,
                border:'1px solid #2a2a45',
                boxShadow:'0 2px 8px rgba(0,0,0,0.3)',
                transition:'all 0.15s ease',
              }}
            >
              {label}
            </a>
          ))}
          <div style={{
            marginTop:'16px',
            background:'rgba(99,102,241,0.12)',
            border:'1px solid rgba(99,102,241,0.3)',
            borderRadius:'12px',
            padding:'14px 16px',
            color:'#a5a6ff',
            fontSize:'13px',
            lineHeight:'1.6',
          }}>
            <strong style={{color:'#fff',display:'block',marginBottom:'4px'}}>📦 ZIP Download</strong>
            Compress multiple images and download them all as one ZIP — free, no limits.
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:680px){
          .nav-links{display:none!important}
          .nav-burger{display:block!important}
        }
        .nav-btn {
          transition: all 0.18s ease !important;
        }
      `}</style>
    </>
  );
}
