import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | Kaycore Technologies',
  description: 'Real-world results from our AI QA and test automation engagements. Coming soon.',
};

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-4xl font-display font-bold text-white">Case Studies Coming Soon</h1>
        <p className="text-gray-400 text-lg">
          We&apos;re preparing detailed case studies showcasing our impact across Healthcare, SaaS, Fintech, and more.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
