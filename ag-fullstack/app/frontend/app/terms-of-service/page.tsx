import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsOfServicePage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar variant="minimal" />
            <main className="flex-1 mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Terms of Service
                </h1>

                <div className="mt-8 space-y-6 text-base text-gray-600 leading-relaxed">
                    <p>
                        By accessing or purchasing from this store, you agree to be bound by the
                        following terms and conditions. Please read them carefully.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">1. License Grant</h2>
                    <p>
                        Upon purchase, you are granted a <strong>non-exclusive, non-transferable license</strong> to
                        use the digital assets for personal and commercial projects as specified in the
                        product listing. This license does not transfer ownership of the original files
                        or intellectual property.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">2. Permitted Use</h2>
                    <p>
                        You may use the purchased digital assets in your own projects, client work,
                        and commercial products. The assets may be incorporated into end products such
                        as websites, applications, presentations, and printed materials.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">3. Restrictions</h2>
                    <p>
                        You may <strong>not</strong>:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Resell, redistribute, or share the raw source files in any form.</li>
                        <li>Claim ownership or authorship of the original assets.</li>
                        <li>Use the assets in competing digital asset marketplaces or template stores.</li>
                        <li>Sub-license the assets to third parties.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">4. Intellectual Property</h2>
                    <p>
                        All digital assets remain the intellectual property of the original creator.
                        The purchase grants a usage license only and does not constitute a transfer
                        of copyright or ownership.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">5. Refunds</h2>
                    <p>
                        All sales of digital products are final. Please refer to our{' '}
                        <a href="/refund-policy" className="text-black underline hover:text-gray-600 transition-colors">
                            Refund Policy
                        </a>{' '}
                        for full details.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">6. Modifications</h2>
                    <p>
                        We reserve the right to update these terms at any time. Continued use of the
                        store after changes constitutes acceptance of the new terms.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">7. Contact</h2>
                    <p>
                        For questions about these terms, please visit our{' '}
                        <a href="/contact" className="text-black underline hover:text-gray-600 transition-colors">
                            Contact Us
                        </a>{' '}
                        page.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
