import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kaycore Technologies',
  description: 'Privacy Policy for Kaycore Technologies LLP. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-brand-muted mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-invert prose-brand max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Kaycore Technologies LLP ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect About You</h2>
            <p className="leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Personal Data</h2>
            <p className="leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:{' '}
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
