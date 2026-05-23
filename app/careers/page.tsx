import Link from 'next/link';

export const metadata = {
  title: 'Careers | Kaycore Technologies',
  description: 'Join the Kaycore Technologies team. We\'re hiring senior QA engineers and automation experts.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-4xl font-display font-bold text-white">Careers Coming Soon</h1>
        <p className="text-gray-400 text-lg">
          We&apos;re growing! Check back soon for open positions in QA engineering, test automation, and AI.
        </p>
        <Link href="/contact" className="btn-primary inline-flex">
          <span>Get in Touch</span>
        </Link>
      </div>
    </div>
  );
}
