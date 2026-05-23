import Link from 'next/link';

export const metadata = {
  title: 'Blog | Kaycore Technologies',
  description: 'Insights, trends, and playbooks from the Kaycore engineering team. Coming soon.',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-4xl font-display font-bold text-white">Blog Coming Soon</h1>
        <p className="text-gray-400 text-lg">
          We&apos;re working on sharing insights about AI-powered QA, test automation, and quality engineering.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
