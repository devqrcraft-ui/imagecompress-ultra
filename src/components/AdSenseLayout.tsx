"use client";
import { useEffect } from "react";

const ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXXX";
const SLOT_SIDEBAR   = "1111111111";
const SLOT_BANNER    = "2222222222";
const SLOT_MOBILE    = "3333333333";

function AdUnit({ slot, style, format = "auto", responsive = true }: {
  slot: string; style: React.CSSProperties; format?: string; responsive?: boolean;
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && !(window as any).adsbygoogle) {
      const s = document.createElement("script");
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
      s.async = true; s.crossOrigin = "anonymous";
      document.head.appendChild(s);
    }
    try { ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({}); } catch {}
  }, []);
  return (
    <div style={style}>
      <ins className="adsbygoogle" style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT} data-ad-slot={slot}
        data-ad-format={format} data-full-width-responsive={responsive ? "true" : "false"} />
    </div>
  );
}

export default function AdSenseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4">
      <div className="hidden lg:flex justify-center my-4">
        <AdUnit slot={SLOT_BANNER} style={{ width: 728, height: 90 }} format="horizontal" responsive={false} />
      </div>
      <div className="flex gap-6 items-start">
        <main className="flex-1 min-w-0">{children}</main>
        <aside className="hidden lg:block w-[300px] flex-shrink-0">
          <div className="sticky top-4">
            <AdUnit slot={SLOT_SIDEBAR} style={{ width: 300, height: 600 }} format="rectangle" responsive={false} />
          </div>
        </aside>
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center bg-slate-900/95 backdrop-blur border-t border-slate-700/50 py-1">
        <AdUnit slot={SLOT_MOBILE} style={{ width: 320, height: 50 }} format="banner" responsive={false} />
      </div>
    </div>
  );
}
