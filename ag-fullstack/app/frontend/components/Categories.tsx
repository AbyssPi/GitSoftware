import Link from 'next/link';
import type { SanityCategory } from '@/shared/types/sanity';

// Fallback icon (grid) used when no icon field exists in Sanity
const FALLBACK_ICON =
    'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z';

interface CategoriesProps {
    categories: SanityCategory[];
}

export default function Categories({ categories }: CategoriesProps) {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Top categories
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Link
                            key={category._id}
                            href={`/categories/${category.slug.current}`}
                            className="group relative flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 hover:border-gray-200 hover:shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
                        >
                            {/* Icon Container */}
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-900 group-hover:bg-gray-100 transition-colors">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d={FALLBACK_ICON}
                                    />
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-base font-semibold text-gray-900">
                                    {category.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
