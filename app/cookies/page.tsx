'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
              Last updated: December 11, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8 max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What Are Cookies?</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              This Cookie Policy explains how Kaycore Technologies uses cookies and similar tracking technologies on our website, and your choices regarding these technologies.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Types of Cookies We Use</h2>
            
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">1. Strictly Necessary Cookies</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              These cookies are essential for our website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Session authentication and security</li>
              <li>Load balancing and server routing</li>
              <li>Cookie consent preferences</li>
              <li>Basic site functionality</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">2. Performance and Analytics Cookies</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Google Analytics - website traffic analysis</li>
              <li>Page view and navigation tracking</li>
              <li>User behavior and engagement metrics</li>
              <li>Error tracking and performance monitoring</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">3. Functionality Cookies</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              These cookies allow our website to remember choices you make and provide enhanced, personalized features.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Language and region preferences</li>
              <li>Dark mode / light mode settings</li>
              <li>Remembered form inputs</li>
              <li>Customized content display</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">4. Targeting and Advertising Cookies</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              These cookies track your browsing habits to enable us to show advertising that is more likely to be of interest to you. They may be set through our site by our advertising partners.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Retargeting and remarketing campaigns</li>
              <li>Interest-based advertising</li>
              <li>Conversion tracking</li>
              <li>Social media advertising pixels</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Third-Party Cookies</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              We use services from trusted third-party providers that may set cookies on your device. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li><strong>Google Analytics:</strong> Website analytics and user behavior tracking</li>
              <li><strong>Google Tag Manager:</strong> Tag and tracking management</li>
              <li><strong>LinkedIn Insights:</strong> B2B marketing and analytics</li>
              <li><strong>HubSpot:</strong> Marketing automation and CRM</li>
              <li><strong>Cloudflare:</strong> Security and performance optimization</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              These third parties have their own privacy and cookie policies. We recommend reviewing their policies to understand how they use your information.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Cookie Duration</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Cookies can be session cookies or persistent cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Most of our cookies are persistent and typically expire between 30 days and 2 years after being set.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">How to Control Cookies</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              You have several options to manage or disable cookies:
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">Browser Settings</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies when you close the browser</li>
              <li>View and delete individual cookies</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Please note that blocking or deleting cookies may impact your experience on our website and prevent you from using certain features.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">Opt-Out Tools</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              You can opt out of certain cookies using these tools:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Google Analytics Opt-out Browser Add-on</li>
              <li>Network Advertising Initiative (NAI) opt-out tool</li>
              <li>Digital Advertising Alliance (DAA) opt-out tool</li>
              <li>European Interactive Digital Advertising Alliance (EDAA) opt-out tool</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">Do Not Track (DNT)</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites you do not want to be tracked. Currently, there is no standard for how DNT signals should be interpreted. We do not currently respond to DNT signals.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Browser-Specific Instructions</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Here&apos;s how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
              <li><strong>Opera:</strong> Settings → Privacy & security → Cookies and site data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Mobile Device Settings</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              For mobile devices:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li><strong>iOS:</strong> Settings → Safari → Block All Cookies</li>
              <li><strong>Android:</strong> Settings → Privacy → Clear browsing data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Updates to This Policy</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Contact Us</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              If you have questions about our use of cookies or this policy, please contact us:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
              <p className="text-slate-900 dark:text-white font-semibold mb-2">Kaycore Technologies</p>
              <p className="text-slate-700 dark:text-slate-300">Email: privacy@kaycore.com</p>
              <p className="text-slate-700 dark:text-slate-300">Phone: +1 (555) 123-4567</p>
              <p className="text-slate-700 dark:text-slate-300">Address: 123 Technology Drive, San Francisco, CA 94105</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Related Policies</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              For more information about how we handle your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li><Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Our team is here to help you understand our privacy practices.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
