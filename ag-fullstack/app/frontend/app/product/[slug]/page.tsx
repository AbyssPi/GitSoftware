import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { MOCK_PRODUCTS } from '../../../shared/constants/mock-data';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
                    <p className="mt-2 text-gray-500">The product you are looking for does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar variant="minimal" />
            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                    {/* Left Column: Image */}
                    <div className="relative overflow-hidden rounded-xl bg-gray-100 p-8 sm:p-12 h-fit">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-cover object-center rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {product.title}
                        </h1>

                        <div className="mt-4 flex items-end">
                            <p className="text-2xl font-medium text-gray-900">
                                {product.price}
                            </p>
                        </div>

                        {/* Description */}
                        {product.fullDescription && (
                            <div className="mt-6 space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {product.fullDescription}
                                </p>
                            </div>
                        )}

                        {/* Versions / Options */}
                        {product.versions && product.versions.length > 0 && (
                            <div className="mt-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-medium text-gray-900">Select Version</h3>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    {product.versions.map((version) => (
                                        <div
                                            key={version}
                                            className="cursor-pointer rounded-lg border border-gray-200 bg-white px-6 py-4 text-center text-sm font-medium text-gray-900 shadow-sm hover:border-black hover:ring-1 hover:ring-black transition-all"
                                        >
                                            {version}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="mt-10 flex w-full flex-col gap-4">
                            <button className="flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-base font-medium text-white hover:bg-gray-800 transition-colors">
                                Buy Now Using CliQ
                            </button>
                        </div>

                        <div className="mt-6 flex justify-center text-sm text-gray-500">
                            <p>Instant Digital Download • Secure Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
