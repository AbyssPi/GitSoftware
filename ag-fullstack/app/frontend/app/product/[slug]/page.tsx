import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import { getProductBySlugQuery } from '@/sanity/queries';
import type { SanityProduct } from '@/shared/types/sanity';
import ProductClient from './ProductClient';

type Props = {
    params: Promise<{ slug: string }>;
};

// 1. Generate Metadata (Server Side)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product: SanityProduct | null = await client.fetch(getProductBySlugQuery, { slug });

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    const title = product.title;
    const description = product.fullDescription
        ? product.fullDescription.substring(0, 160) // Truncate for SEO
        : `Buy ${product.title} online.`;

    const imageUrl = product.image
        ? urlFor(product.image).width(1200).height(630).url()
        : null;

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: imageUrl ? [imageUrl] : [],
        },
    };
}

// 2. Server Component Page
export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product: SanityProduct | null = await client.fetch(getProductBySlugQuery, { slug });

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
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <ProductClient product={product} />
            </div>
        </div>
    );
}
