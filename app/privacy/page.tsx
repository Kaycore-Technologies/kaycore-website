'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
              Privacy Policy
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              At Kaycore Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Information We Collect</h2>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">Personal Information</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Fill out contact forms or request information</li>
              <li>Subscribe to our newsletter or blog</li>
              <li>Register for events or webinars</li>
              <li>Apply for employment opportunities</li>
              <li>Engage with our services or support</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
            </p>
          </div>

          
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Clickstream data and usage patterns</li>
            </ul>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">How We Use Your Information</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Providing, operating, and maintaining our website and services</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Sending marketing communications and updates (with your consent)</li>
              <li>Analyzing usage patterns to improve our services</li>
              <li>Detecting and preventing fraud or security issues</li>
              <li>Complying with legal obligations</li>
            </ul>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Data Sharing and Disclosure</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., email delivery, analytics, hosting)</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>With Your Consent:</strong> When you have given explicit permission</li>
            </ul>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Cookies and Tracking Technologies</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve website performance and functionality</li>
              <li>Deliver personalized content and advertising</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              You can control cookie settings through your browser preferences. Please note that disabling cookies may affect website functionality.
            </p>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Data Security</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Your Rights and Choices</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Data Retention</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. When data is no longer needed, we securely delete or anonymize it.
            </p>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">International Data Transfers</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, such as standard contractual clauses.
            </p>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Children&apos;s Privacy</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information.
            </p>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Changes to This Privacy Policy</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>
          

          
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Contact Us</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
              <p className="text-slate-900 dark:text-white font-semibold mb-2">Kaycore Technologies</p>
              <p className="text-slate-700 dark:text-slate-300">Email: privacy@kaycore.com</p>
              <p className="text-slate-700 dark:text-slate-300">Phone: +1 (555) 123-4567</p>
              <p className="text-slate-700 dark:text-slate-300">Address: 123 Technology Drive, San Francisco, CA 94105</p>
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
              Have Questions About Your Data?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Our team is here to help you understand how we protect your privacy.
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
