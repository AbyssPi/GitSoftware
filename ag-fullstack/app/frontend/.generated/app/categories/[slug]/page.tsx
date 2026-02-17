import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductCard from '../../../components/ProductCard';
import { client } from '../../../sanity/client';
import {
    getCategoriesQuery,
    getProductsQuery,
    getProductsByCategoryQuery,
} from '../../../sanity/queries';
import type { SanityCategory, SanityProduct } from '../../../shared/types/sanity';

type Props = {
    params: Promise<{ slug: string }>;
};

// 1. Generate Metadata (Server Side)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    let title = 'Category';
    let description = 'Browse our products.';

    if (slug === 'all-products') {
        title = 'All Products';
        description = 'Browse our complete collection of high-quality digital resources.';
    } else {
        const categories: SanityCategory[] = await client.fetch(getCategoriesQuery);
        const category = categories.find((c) => c.slug.current === slug);

        if (category) {
            title = category.title;
            description = category.description || description;
        }
    }

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
        },
    };
}


export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;

    // Handle "all-products" virtual category
    let category: SanityCategory | undefined;
    let products: SanityProduct[];

    if (slug === 'all-products') {
        category = {
            _id: 'all-products',
            _type: 'category',
            title: 'All Products',
            slug: { current: 'all-products' },
            description: 'Browse our complete collection of high-quality digital resources.',
        };
        products = await client.fetch(getProductsQuery);
    } else {
        // Find category from Sanity
        const categories: SanityCategory[] = await client.fetch(getCategoriesQuery);
        category = categories.find((c) => c.slug.current === slug);

        if (!category) {
            notFound();
        }

        products = await client.fetch(getProductsByCategoryQuery, { categorySlug: slug });
    }

    return (
        <div className="px-4 py-8 md:px-12 md:py-12">
            {/* Breadcrumbs */}
            <nav className="mb-6 flex items-center text-sm text-gray-500">
                <span>Store</span>
                <span className="mx-2">/</span>
                <span>Products</span>
                <span className="mx-2">/</span>
                <span className="font-medium text-gray-900">{category.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                    {category.title}
                </h1>
                <p className="max-w-2xl text-lg text-gray-500">
                    {category.description}
                </p>
            </header>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-gray-500">
                        No products found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
