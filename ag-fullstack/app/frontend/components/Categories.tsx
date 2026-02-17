
import { CATEGORIES } from '../shared/constants/mock-data';

export default function Categories() {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Top categories
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {CATEGORIES.map((category) => (
                        <div
                            key={category.id}
                            className="group relative flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"
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
                                        d={category.icon}
                                    />
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-base font-semibold text-gray-900">
                                    {category.name}
                                </h3>
                                <p className="mt-0.5 text-sm text-gray-500">
                                    {category.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-end">
                    <a
                        href="#"
                        className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        See all resources
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
