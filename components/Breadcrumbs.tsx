'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show on home page
    if (pathname === '/') return null;

    const paths = pathname.split('/').filter(Boolean);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2">
                        <li className="inline-flex items-center">
                            <Link
                                href="/"
                                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                            >
                                <Home className="w-4 h-4 mr-2" />
                                Home
                            </Link>
                        </li>
                        {paths.map((path, index) => {
                            const href = `/${paths.slice(0, index + 1).join('/')}`;
                            const isLast = index === paths.length - 1;
                            const title = path.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                            return (
                                <li key={path}>
                                    <div className="flex items-center">
                                        <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                                        {isLast ? (
                                            <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-200 md:ml-2">
                                                {title}
                                            </span>
                                        ) : (
                                            <Link
                                                href={href}
                                                className="ml-1 text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white md:ml-2"
                                            >
                                                {title}
                                            </Link>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </div>
    );
}
