import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security & AI Ethics Policy | Kaycore Technologies',
  description: 'Our commitment to data security, HIPAA compliance, and ethical AI testing.',
};

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">Security & AI Ethics Policy</h1>
        <p className="text-brand-muted mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-invert prose-brand max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Our Commitment to Security</h2>
            <p className="leading-relaxed">
              As a provider of AI Quality Engineering and testing services, Kaycore Technologies LLP recognizes that data security and system integrity are paramount. We employ industry-standard security protocols to protect all client data, test assets, and proprietary models shared with us during engagements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Healthcare Data & HIPAA Compliance</h2>
            <p className="leading-relaxed">
              For our healthcare division (KayHealth) and healthcare QA clients, we strictly adhere to HIPAA (Health Insurance Portability and Accountability Act) guidelines. All clinical AI testing, EHR validations, and data processing are conducted in secure, compliant environments with strict access controls and data de-identification protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. AI Ethics & Responsible Testing</h2>
            <p className="leading-relaxed mb-4">
              Our AI validation frameworks are designed to promote safe, equitable, and reliable AI systems. We actively test for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Algorithmic Bias:</strong> Ensuring models perform equitably across diverse demographic groups.</li>
              <li><strong>Hallucination Rates:</strong> Quantifying and reducing factual inaccuracies in generative outputs.</li>
              <li><strong>Adversarial Robustness:</strong> Protecting models against prompt injection, jailbreaks, and malicious inputs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Confidentiality & Data Processing</h2>
            <p className="leading-relaxed">
              We execute comprehensive Non-Disclosure Agreements (NDAs) and Data Processing Agreements (DPAs) before commencing any quality engineering engagement. Client data is never used to train our internal models without explicit, written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Reporting Vulnerabilities</h2>
            <p className="leading-relaxed">
              If you discover a security vulnerability in our systems or products, please report it immediately to our security team at:{' '}
              <a href="mailto:admin@kaycore.com" className="text-brand-accent hover:text-brand-cyan transition-colors">
                admin@kaycore.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
