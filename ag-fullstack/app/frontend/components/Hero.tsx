
export default function Hero() {
    return (
        <section className="relative isolate bg-white px-4 py-20 pb-32 sm:px-6 lg:px-8 overflow-hidden">
            {/* Abstract Background SVG */}
            <div className="absolute inset-0 -z-10">
                <svg
                    className="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >

                    {/* Geometric Web: Density Gradient (Top-heavy to sparse bottom) */}
                    <path
                        d="M0 0 L300 200 L600 0 M100 0 L400 300 L700 0 M200 0 L150 250 L50 400 M300 0 L250 350 L400 150 L550 400 M400 0 L500 250 L800 50 M500 0 L450 300 L200 500 M600 0 L650 200 L900 100 M0 100 L200 150 L400 50 L600 150 L800 0 M50 0 L100 300 L300 500 L600 200 M350 0 L300 200 L450 400 L700 100 M0 200 L250 100 L500 300 L1000 0 M150 0 L100 400 L300 200 M0 300 L400 100"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="opacity-60"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>

            <div className="mx-auto max-w-4xl text-center md:text-left relative">
                {/* Headline */}
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                    Design resources that <br className="hidden md:block" />
                    will boost your creative <br className="hidden md:block" />
                    workflow
                </h1>

                {/* Subtitle */}
                <p className="mt-6 max-w-2xl text-lg text-gray-500 md:text-xl">
                    Find and download the best high-quality 3D and vector illustrations,
                    fonts, designs and mockups.
                </p>
            </div>
        </section>
    );
}
