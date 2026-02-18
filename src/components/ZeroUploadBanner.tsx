"use client";
export default function ZeroUploadBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/30 rounded-2xl px-6 py-4 mb-6">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/40">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </div>
          <div><p className="text-emerald-300 font-bold text-sm">Your Files NEVER Leave</p><p className="text-emerald-500/80 text-xs">Your Device</p></div>
        </div>
        <div className="hidden sm:block w-px h-8 bg-emerald-500/20"></div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/15 border border-blue-500/40"><span className="text-blue-400 text-lg">⚡</span></div>
          <div><p className="text-blue-300 font-bold text-sm">100% Client-side</p><p className="text-blue-500/80 text-xs">Instant Processing</p></div>
        </div>
        <div className="hidden sm:block w-px h-8 bg-emerald-500/20"></div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/40"><span className="text-violet-400 text-lg">🛡️</span></div>
          <div><p className="text-violet-300 font-bold text-sm">No Upload · No Server</p><p className="text-violet-500/80 text-xs">100% Private</p></div>
        </div>
        <div className="hidden sm:block w-px h-8 bg-emerald-500/20"></div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/40"><span className="text-amber-400 text-lg">💰</span></div>
          <div><p className="text-amber-300 font-bold text-sm">Free Forever</p><p className="text-amber-500/80 text-xs">No Account Needed</p></div>
        </div>
      </div>
    </div>
  );
}