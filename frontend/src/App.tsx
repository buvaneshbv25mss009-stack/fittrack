function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-12">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl">
            G
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">GYMPORTAL</h1>
            <p className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
              Train Better. Track Smarter.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-6">
          <h2 className="text-lg font-semibold text-slate-200">
            Small Gym Membership &amp; Attendance Portal
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Core project structure and environments have been successfully initialized.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Frontend</span>
            <p className="text-sm font-semibold text-white mt-1">React + TypeScript</p>
            <p className="text-xs text-slate-400 mt-1">Vite &amp; Tailwind CSS v4</p>
            <span className="inline-block mt-3 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Initialized
            </span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Backend</span>
            <p className="text-sm font-semibold text-white mt-1">FastAPI</p>
            <p className="text-xs text-slate-400 mt-1">Python 3.12 &amp; Uvicorn</p>
            <span className="inline-block mt-3 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Configured
            </span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Database</span>
            <p className="text-sm font-semibold text-white mt-1">PostgreSQL</p>
            <p className="text-xs text-slate-400 mt-1">Supabase Client &amp; Auth</p>
            <span className="inline-block mt-3 px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Ready to Connect
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-slate-950/40 border border-slate-800/60 p-4">
          <p className="text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Phase 1 Complete:</span> Project scaffolded with clean separation between frontend and backend. Full gym management dashboard modules (Members, Memberships, Attendance, Expiry Tracking, and Payments) will be developed in Phase 2.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
