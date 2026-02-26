import Link from 'next/link';
import { urlFor } from '@/sanity/image';
import type { SanityProduct } from '@/shared/types/sanity';

interface ProductCardProps {
    product: SanityProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    const imageUrl = product.image
        ? urlFor(product.image).width(600).height(450).url()
        : 'https://placehold.co/600x450/eeeeee/999999?text=No+Image';

    return (
        <Link
            href={`/product/${product.slug.current}`}
            className="group cursor-pointer block"
        >
            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <img
                    src={imageUrl}
                    alt={product.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col items-start mt-2 text-left">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {product.title}
                </h3>
                <p className="text-sm font-medium mt-1 text-gray-900">{product.price}</p>
            </div>
        </Link>
    );
}
