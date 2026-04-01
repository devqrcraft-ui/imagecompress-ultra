"use client";
import dynamic from "next/dynamic";

const CompressorWidget = dynamic(() => import("@/components/CompressorWidget"), { ssr: false });

export default function EbayInlineCalc() {
  return (
    <div style={{
      background: "#0f172a",
      border: "1px solid #312e81",
      borderRadius: 12,
      padding: "24px 20px",
      margin: "8px 0 24px",
    }}>
      <p style={{
        color: "#94a3b8",
        fontSize: 13,
        marginBottom: 16,
        marginTop: 0,
        textAlign: "center" as const,
      }}>
        Target: 300KB &nbsp;|&nbsp; Format: JPEG &nbsp;|&nbsp; No upload — runs in your browser
      </p>
      <CompressorWidget defaultMode="exactkb" defaultTargetKB={300} defaultFormat="jpeg" defaultQuality={88} />
    </div>
  );
}