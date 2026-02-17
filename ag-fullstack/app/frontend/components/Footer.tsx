import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} YourBrand. All rights reserved.
                    </p>
                    <nav className="flex gap-6">
                        <Link
                            href="/refund-policy"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Refund Policy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
