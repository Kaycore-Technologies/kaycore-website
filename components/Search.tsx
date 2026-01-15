'use client';

import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const searchItems = [
    { title: 'Home', href: '/', category: 'Page' },
    { title: 'About Us', href: '/about', category: 'Page' },
    { title: 'Services', href: '/services', category: 'Page' },
    { title: 'Case Studies', href: '/case-studies', category: 'Page' },
    { title: 'Blog', href: '/blog', category: 'Page' },
    { title: 'Contact', href: '/contact', category: 'Page' },
    { title: 'Privacy Policy', href: '/privacy', category: 'Legal' },
    { title: 'Terms of Service', href: '/terms', category: 'Legal' },
];

export function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const filteredItems = query
        ? searchItems.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    const handleSelect = (href: string) => {
        setIsOpen(false);
        setQuery('');
        router.push(href);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                aria-label="Search"
            >
                <SearchIcon className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden ring-1 ring-black/5">
                        <div className="flex items-center px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                            <SearchIcon className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search..."
                                className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 text-base"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {query && (
                            <div className="max-h-96 overflow-y-auto py-2">
                                {filteredItems.length === 0 ? (
                                    <p className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                                        No results found for &quot;{query}&quot;
                                    </p>

                                ) : (
                                    <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {filteredItems.map((item) => (
                                            <li key={item.href}>
                                                <button
                                                    onClick={() => handleSelect(item.href)}
                                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-between group"
                                                >
                                                    <span className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-primary">
                                                        {item.title}
                                                    </span>
                                                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                                                        {item.category}
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}

                        {!query && (
                            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 text-xs text-gray-500 dark:text-gray-400">
                                Type to search pages...
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
