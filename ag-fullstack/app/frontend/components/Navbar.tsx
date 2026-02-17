
export default function Navbar() {
    return (
        <nav className="border-b border-gray-100 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <a href="#" className="flex items-center gap-2">
                        <svg
                            className="h-8 w-8 text-black"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
                        </svg>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            Craftstore
                        </span>
                    </a>
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden space-x-8 md:flex">
                    <a
                        href="#"
                        className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        Resources
                    </a>
                    <a
                        href="#"
                        className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        Inspiration
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        Studio
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
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </a>
                </div>

                {/* Right: Contact Us Button */}
                <div className="flex items-center gap-4">
                    <button className="hidden text-sm font-medium text-gray-500 hover:text-gray-900 sm:block">
                        Open a shop
                    </button>
                    <a
                        href="#"
                        className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
}
