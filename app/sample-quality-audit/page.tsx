import type { Metadata } from 'next';
import { SampleAuditSection } from '@/components/sections/SampleAuditSection';
import { LeadFormCTA } from '@/components/LeadFormCTA';

const description =
  'See a full sample Kaycore Quality Audit: potential defects with expected behaviour, a scored risk map and a coverage matrix for a fictional AI-built app.';
const shareImage = {
  url: '/assets/sample-audit/quality-audit-share.png',
  width: 1200,
  height: 630,
  alt: 'Sample Kaycore Quality Audit report for a fictional booking app, showing potential defects and severity',
};

export const metadata: Metadata = {
  title: { absolute: 'Sample Quality Audit for Web & AI-Built Apps | Kaycore' },
  description,
  alternates: { canonical: '/sample-quality-audit' },
  openGraph: {
    type: 'website',
    title: 'Sample Quality Audit for Web & AI-Built Apps',
    description,
    url: 'https://www.kaycore.com/sample-quality-audit',
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sample Quality Audit for Web & AI-Built Apps',
    description,
    images: [shareImage.url],
  },
};

export default function SampleQualityAuditPage() {
  return (
    <div className="pt-16">
      <SampleAuditSection headingLevel="h1" />
      <LeadFormCTA
        title="Want this for your product?"
        description="Book a free discovery call. A senior engineer scopes your audit, and the person who scopes it is the person who does it."
      />
    </div>
  );
}
