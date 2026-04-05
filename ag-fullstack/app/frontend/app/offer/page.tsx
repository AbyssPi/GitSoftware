import Link from 'next/link';

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-between p-4 overflow-hidden relative font-serif">
      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#111111] to-[#0A0A0A]" />
      
      {/* Spacer for vertical centering */}
      <div className="flex-1"></div>

      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Main Content */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-[#D4AF37] italic leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
          Don't forget how beautiful you are
          <br />
          ;)
        </h1>
      </div>

      {/* Spacer for vertical centering */}
      <div className="flex-1"></div>

      {/* Footer text */}
      <div className="relative z-10 w-full text-center pb-8">
        <p className="text-[#888888] text-xs sm:text-sm tracking-widest uppercase">
          This route and the shop leading to it have been suspended due to some religious issues.
        </p>
      </div>
    </div>
  );
}
