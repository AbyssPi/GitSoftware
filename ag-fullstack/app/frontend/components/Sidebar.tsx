'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SIDEBAR_CATEGORIES } from '../shared/constants/mock-data';

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <nav className="w-full md:w-64 flex-shrink-0 md:border-r border-gray-100 bg-white py-8 md:min-h-screen">
            <div className="px-4 md:px-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Categories
                </h3>
                <div className="space-y-1">
                    {SIDEBAR_CATEGORIES.map((category) => {
                        const href = `/categories/${category.slug}`;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={category.id}
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
                                            d={category.icon}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                {category.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
