"use client";

import { useState } from 'react';
import Link from 'next/link';
import type { SanityCategory } from '@/shared/types/sanity';

interface NavbarProps {
    variant?: 'default' | 'minimal';
    categories?: SanityCategory[];
}

export default function Navbar({ variant = 'default', categories = [] }: NavbarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="border-b border-gray-100 bg-white relative z-50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <svg
                            className="h-8 w-8 text-black"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
                        </svg>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            GitSoftware
                        </span>
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                {variant === 'default' && (
                    <div className="hidden space-x-8 md:flex">
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button
                                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors py-2"
                            >
                                Products
                                <svg className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-out ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                                    }`}
                            >
                                <div className="py-2">
                                    <Link
                                        href="/categories/all-products"
                                        className="block px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                                    >
                                        All Products
                                    </Link>
                                    {categories.map((category) => (
                                        <Link
                                            key={category._id}
                                            href={`/categories/${category.slug.current}`}
                                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                        >
                                            {category.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Right: Contact Us Button */}
                <div className="flex items-center gap-4">
                    {variant === 'default' && (
                        null
                    )}
                    <a
                        href="https://wa.me/962770416763?text=Hello,%20I%20have%20an%20inquiry%20about%20GitSoftware."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
}
