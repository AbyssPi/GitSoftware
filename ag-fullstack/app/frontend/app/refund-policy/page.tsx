import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicyPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar variant="minimal" />
            <main className="flex-1 mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Refund Policy
                </h1>

                <div className="mt-8 space-y-6 text-base text-gray-600 leading-relaxed">
                    <p>
                        Thank you for purchasing from our store. We appreciate your support and want
                        to ensure complete transparency regarding our refund policy.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">Digital Products — All Sales Are Final</h2>
                    <p>
                        All products sold through this store are <strong>digital goods</strong> delivered
                        electronically. Due to the nature of digital products, <strong>all sales are
                            final and non-refundable</strong> once the product has been accessed, downloaded,
                        or delivered to your account.
                    </p>
                    <p>
                        Because digital files cannot be "returned" in the same way as physical goods,
                        we are unable to offer refunds, exchanges, or credits after a purchase is completed.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">Before You Purchase</h2>
                    <p>
                        We encourage all customers to carefully review the product description, preview
                        images, and version details before completing their purchase. If you have any
                        questions about a product, please reach out to us via the{' '}
                        <a href="/contact" className="text-black underline hover:text-gray-600 transition-colors">
                            Contact Us
                        </a>{' '}
                        page before buying.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">Exceptions</h2>
                    <p>
                        In the rare event that a product file is corrupted, incomplete, or significantly
                        different from its listing description, please contact us within 48 hours of
                        purchase. We will work with you to resolve the issue, which may include
                        providing a replacement file.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 pt-2">Contact</h2>
                    <p>
                        If you have any questions regarding this policy, please reach out through our{' '}
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
