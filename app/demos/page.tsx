import Link from 'next/link';

export const metadata = {
  title: 'Demos | Kaycore Technologies',
  description: 'Interactive demos of our AI-powered QA and testing tools. Coming soon.',
};

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-4xl font-display font-bold text-white">Demos Coming Soon</h1>
        <p className="text-gray-400 text-lg">
          We&apos;re building interactive demos to showcase our AI testing capabilities. Stay tuned.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
