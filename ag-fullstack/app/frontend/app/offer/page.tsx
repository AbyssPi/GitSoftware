import Link from 'next/link';

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Background aesthetics */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/30 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px]" />
      
      <div className="relative z-10 w-full max-w-lg">
        {/* Glassmorphism Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl text-center transform hover:scale-[1.01] transition-transform duration-500">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-500/20 text-indigo-400 rounded-full mb-6 ring-1 ring-indigo-500/50">
            {/* Ticket percentage SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
              <path d="M13 5v2"/>
              <path d="M13 17v2"/>
              <path d="M13 11v2"/>
              <path d="m15 9-6 6"/>
              <circle cx="10" cy="9.5" r="1"/>
              <circle cx="14" cy="14.5" r="1"/>
            </svg>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            You Unlocked <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              30% OFF
            </span>
          </h1>
          
          <p className="text-neutral-300 text-lg sm:text-xl mb-10 leading-relaxed">
            Welcome! As a special VIP guest, your 30% discount is guaranteed as you explore our store today.
          </p>
          
          <Link href="/categories/all-products">
            <button className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-950 font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-neutral-200 hover:gap-4 ring-4 ring-white/20">
              Shop Now & Claim Discount
              {/* Arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </Link>
          
          <p className="mt-6 text-neutral-500 text-sm">
            Valid on all items. Enjoy your shopping!
          </p>
        </div>
      </div>
    </div>
  );
}
