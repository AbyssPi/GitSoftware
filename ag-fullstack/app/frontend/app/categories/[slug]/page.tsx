import { SIDEBAR_CATEGORIES, MOCK_PRODUCTS } from '../../../shared/constants/mock-data';
import ProductCard from '../../../components/ProductCard';
import { notFound } from 'next/navigation';

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // Await params for Next.js 15+
    const { slug } = await params;

    const category = SIDEBAR_CATEGORIES.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    const products = slug === 'all-products'
        ? MOCK_PRODUCTS
        : MOCK_PRODUCTS.filter((p) => p.categorySlug === slug);

    return (
        <div className="px-4 py-8 md:px-12 md:py-12">
            {/* Breadcrumbs */}
            <nav className="mb-6 flex items-center text-sm text-gray-500">
                <span>Store</span>
                <span className="mx-2">/</span>
                <span>Products</span>
                <span className="mx-2">/</span>
                <span className="font-medium text-gray-900">{category.name}</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                    {category.name}
                </h1>
                <p className="max-w-2xl text-lg text-gray-500">
                    {category.description}
                </p>
            </header>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
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
