"use client";

import { useState } from 'react';
import { urlFor } from '@/sanity/image';
import type { SanityProduct } from '@/shared/types/sanity';

const SELLER_WHATSAPP_NUMBER = '962790000000'; // Replace with actual number

interface ProductClientProps {
    product: SanityProduct;
}

export default function ProductClient({ product }: ProductClientProps) {
    const [selectedVersion, setSelectedVersion] = useState<string>(product.versions?.[0] ?? '');

    const imageUrl = product.image
        ? urlFor(product.image).width(800).height(600).url()
        : 'https://placehold.co/800x600/eeeeee/999999?text=No+Image';

    const handleWhatsAppCheckout = () => {
        const message = `Hello! I would like to purchase *${product.title}* (Version: *${selectedVersion}*). Can I pay using CliQ?`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {/* Left Column: Image */}
            <div className="relative overflow-hidden rounded-xl bg-gray-100 p-8 sm:p-12 h-fit">
                <img
                    src={imageUrl}
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
                                    onClick={() => setSelectedVersion(version)}
                                    className={`cursor-pointer rounded-lg border px-6 py-4 text-center text-sm font-medium shadow-sm transition-all ${selectedVersion === version
                                        ? 'border-black bg-black text-white ring-1 ring-black'
                                        : 'border-gray-200 bg-white text-gray-900 hover:border-black hover:ring-1 hover:ring-black'
                                        }`}
                                >
                                    {version}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-10 flex w-full flex-col gap-4">
                    <button
                        onClick={handleWhatsAppCheckout}
                        className="flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-base font-medium text-white hover:bg-gray-800 transition-colors"
                    >
                        Buy Now Using CliQ
                    </button>
                </div>

                <div className="mt-6 flex justify-center text-sm text-gray-500">
                    <p>Instant Digital Download • Secure Checkout</p>
                </div>
            </div>
        </div>
    );
}
