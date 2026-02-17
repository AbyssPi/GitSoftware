
export default function Hero() {
    return (
        <section className="relative isolate bg-white px-4 py-20 pb-32 sm:px-6 lg:px-8 overflow-hidden">
            {/* Abstract Background SVG */}
            <div className="absolute inset-0 -z-10">
                <svg
                    className="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >

                    {/* Architectural wireframe lines matching reference - Chaotic/Angular */}
                    <path
                        d="M0 0 L150 200 L300 50 L450 300 L600 0 L750 250 L900 0 M200 0 L100 300 L400 100 L200 400 L500 0 M600 300 L400 0 L800 200 L1000 0 M0 150 L200 350 L50 450 L300 250 M800 0 L700 400 L950 200 L1100 400"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="opacity-50"
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
