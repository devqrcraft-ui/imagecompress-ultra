'use client';
import { useState } from 'react';

const LINKS: [string, string, string][] = [
  ['/', '🗜️ Compress a photo', 'One photo down to the size you need — 20KB, 50KB, 100KB or any number'],
  ['/bulk-image-compressor', '📦 Many photos', 'Up to 50 photos at once, downloaded as one ZIP file'],
  ['/visa-photo-compressor', '🛂 Passport & visa', 'Photo sizes for DS-160, USCIS, passport, green card'],
  ['/blog', '📚 Guides', 'Step-by-step guides with the exact rules each site wants'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <div className="site-nav-bar">
        <a href="/" className="site-nav-brand" onClick={() => setOpen(false)}>
          Compress<span>20KB</span>
        </a>
        <nav className="site-nav-links" aria-label="Main">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="site-nav-link">{label}</a>
          ))}
          <a href="/#compress" className="site-nav-cta">Compress now — free</a>
        </nav>
        <button
          type="button"
          className="site-nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav-panel"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕ Close' : '☰ Menu'}
        </button>
      </div>
      {open && (
        <nav id="site-nav-panel" className="site-nav-panel" aria-label="Main">
          {LINKS.map(([href, label, hint]) => (
            <a key={href} href={href} className="site-nav-row" onClick={() => setOpen(false)}>
              <span className="site-nav-row-label">{label}</span>
              <span className="site-nav-row-hint">{hint}</span>
            </a>
          ))}
          <a href="/#compress" className="site-nav-cta site-nav-row-cta" onClick={() => setOpen(false)}>
            Compress now — free
          </a>
        </nav>
      )}
    </header>
  );
}
