'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { SanityCategory } from '@/shared/types/sanity';

// Fallback icon (grid) for categories
const FALLBACK_ICON =
    'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z';

interface SidebarProps {
    categories: SanityCategory[];
}

export default function Sidebar({ categories }: SidebarProps) {
    const pathname = usePathname();

    // Prepend an "All Products" virtual entry
    const allEntry: SanityCategory = {
        _id: 'all-products',
        _type: 'category',
        title: 'All Products',
        slug: { current: 'all-products' },
        description: 'Browse our complete collection of high-quality digital resources.',
    };

    const items = [allEntry, ...categories];

    return (
        <nav className="w-full md:w-64 flex-shrink-0 md:border-r border-gray-100 bg-white py-8 md:min-h-screen">
            <div className="px-4 md:px-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Categories
                </h3>
                <div className="space-y-1">
                    {items.map((category) => {
                        const href = `/categories/${category.slug.current}`;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={category._id}
                                href={href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <span className="h-5 w-5 flex-shrink-0 text-gray-400">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        className="h-full w-full"
                                    >
                                        <path
                                            d={FALLBACK_ICON}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                {category.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
