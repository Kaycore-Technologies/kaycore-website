import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Kaycore Technologies',
  description: 'How Kaycore Technologies LLP uses cookies and similar tracking technologies.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">Cookie Policy</h1>
        <p className="text-brand-muted mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-invert prose-brand max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
            <p className="leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
            <p className="leading-relaxed mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> These are required for the operation of our website and our AI chatbot features.</li>
              <li><strong>Analytics Cookies:</strong> These allow us to recognise and count the number of visitors and to see how visitors move around our website.</li>
              <li><strong>Functional Cookies:</strong> These are used to recognise you when you return to our website, enabling us to personalise our content for you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Managing Cookies</h2>
            <p className="leading-relaxed">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website, including our AI Chatbot, may become inaccessible or not function properly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
