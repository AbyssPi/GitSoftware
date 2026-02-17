import { Product } from '../shared/constants/mock-data';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group cursor-pointer">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-3">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.title}
                </h3>
                <p className="text-sm font-medium text-gray-500">{product.price}</p>
            </div>
        </div>
    );
}
