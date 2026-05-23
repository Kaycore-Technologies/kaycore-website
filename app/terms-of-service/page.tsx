import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Kaycore Technologies',
  description: 'Terms of Service and conditions of use for Kaycore Technologies LLP.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">Terms of Service</h1>
        <p className="text-brand-muted mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-invert prose-brand max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the website and services of Kaycore Technologies LLP ("we", "our", or "us"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="leading-relaxed">
              Kaycore Technologies provides AI Quality Engineering, software testing, and technology consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              All content, features, and functionality on this website (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Kaycore Technologies LLP and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. Kaycore™ is a trademark of Kaycore Technologies LLP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall Kaycore Technologies LLP, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
            <p className="leading-relaxed">
              For any questions regarding these Terms of Service, please contact us at:{' '}
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
