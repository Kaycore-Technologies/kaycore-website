import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Careers',
  description:
    'Careers at Kaycore Technologies. Open roles are coming soon. In the meantime, get in touch if you want to work on AI quality engineering with us.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-4xl font-display font-bold text-navy">Careers Coming Soon</h1>
        <p className="text-body text-lg">
          We&apos;re growing! Check back soon for open positions in QA engineering, test automation, and AI.
        </p>
        <Link href="/contact" className="btn-primary inline-flex">
          <span>Get in Touch</span>
        </Link>
      </div>
    </div>
  );
}
