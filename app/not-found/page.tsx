import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className=" dark:bg-gray-900 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">
                    <main className="sm:flex">
                        <div className="flex justify-center sm:block">
                            <div className="h-24 w-24 text-gray-400 dark:text-gray-600">
                                <svg
                                    className="h-full w-full"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 dark:sm:border-gray-700 sm:pl-6">
                                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">
                                    404 - Page Not Found
                                </h1>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                                    The page you're looking for doesn't exist or has been moved.
                                </p>
                                <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                                    Check the URL or navigate back to safety.
                                </p>
                            </div>
                            <div className="mt-6 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Link
                                    href="/"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    ← Back to Home
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}