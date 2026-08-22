import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Compress Photo for New Zealand NZeTA Online ★ ✓ 20KB",
  description: "Perfectly resize and compress photos for New Zealand NZeTA application. ✓ 100% Private.",
  alternates: { canonical: "https://www.compressto20kb.com/compress-for-new-zealand-nzeta" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#0f172a", color: "#e2e8f0", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>★ New Zealand NZeTA Photo Compressor</h1>
        <div style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: "14px", padding: "40px", marginBottom: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "30px" }}>Optimize your photo for the <strong>New Zealand NZeTA</strong> portal instantly.</p>
          <a href="/" className="btn-3d-blue" style={{ display: "inline-block", textDecoration: "none" }}>Compress Now ➔</a>
        </div>
      </div>
    </div>
  );
}