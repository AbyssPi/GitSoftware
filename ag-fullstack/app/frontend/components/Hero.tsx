
export default function Hero() {
    return (
        <section className="bg-white px-4 py-20 pb-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center md:text-left">
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

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                    <button className="rounded-lg bg-black px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors">
                        Explore Resources
                    </button>
                    <button className="rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                        Explore Inspiration
                    </button>
                </div>
            </div>
        </section>
    );
}
