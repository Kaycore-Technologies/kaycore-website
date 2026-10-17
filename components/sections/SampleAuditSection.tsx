import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

/*
 * "See a sample audit" section. Copy is from the Quality Audit showcase pack
 * (02-Website/Website copy - Quality Audit sample.docx). The report is a sample for
 * Fernhill Home Services, a fictional company: keep the sample / fictional labels.
 */

export const SAMPLE_AUDIT_PDF = '/downloads/kaycore-quality-audit-sample.pdf';

const auditParts = [
  {
    title: 'Our understanding of your platform',
    text: 'Users, journey and integrations, written back to you to confirm.',
  },
  {
    title: 'Potential defects',
    text: 'What we observed, what we would expect instead, and how severe it is.',
  },
  {
    title: 'Risk assessment',
    text: 'Every risk scored for business impact and likelihood, on one risk map.',
  },
  {
    title: 'Coverage matrix',
    text: 'Every module mapped against the quality areas it needs, AI behaviour included.',
  },
];

interface SampleAuditSectionProps {
  /** h1 on the dedicated page, h2 where the section sits inside another page */
  headingLevel?: 'h1' | 'h2';
  id?: string;
}

export function SampleAuditSection({ headingLevel = 'h2', id }: SampleAuditSectionProps) {
  const Heading = headingLevel;
  const PartHeading = headingLevel === 'h1' ? 'h2' : 'h3';

  return (
    <section id={id} aria-labelledby="sample-audit-heading" className="relative py-16 lg:py-20 overflow-hidden scroll-mt-24">
      {/* Light wash with a lavender glow, as on the sample report artwork */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_520px_at_85%_15%,#E6F0FF_0,#F6F8FC_60%)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="k-pill">Sample Quality Audit</p>
            <Heading
              id="sample-audit-heading"
              className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-navy"
            >
              See exactly <span className="text-gradient">what you get</span> before you book
            </Heading>
            <p className="mt-6 text-lg text-body leading-relaxed">
              Every Kaycore Quality Audit tells you what we understood about your product, what looks broken, how
              risky it is and where testing needs to reach. Here is a complete sample for Fernhill, a fictional
              booking app built with AI coding tools: 14 potential defects, a scored risk map and a coverage matrix
              across 10 modules.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a href={SAMPLE_AUDIT_PDF} download className="btn-primary whitespace-nowrap">
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download the sample report (PDF)</span>
              </a>
              <Link href="/contact" className="btn-secondary whitespace-nowrap">
                Book a free discovery call
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">Sample report for a fictional company. No client data is included.</p>
          </div>

          <div className="relative">
            <div className="glass-surface rounded-2xl shadow-paper overflow-hidden lg:rotate-[1.5deg]">
              <Image
                src="/assets/sample-audit/quality-audit-includes.png"
                alt="Four parts of a Kaycore Quality Audit: platform understanding, potential defects, risk assessment and coverage matrix"
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto"
                priority={headingLevel === 'h1'}
              />
            </div>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {auditParts.map((part) => (
            <li key={part.title} className="glass-surface rounded-2xl border-t-4 border-t-c2 p-6">
              <PartHeading className="text-lg font-bold text-navy mb-2">{part.title}</PartHeading>
              <p className="text-body leading-relaxed">{part.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
