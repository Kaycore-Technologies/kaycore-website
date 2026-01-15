'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
              Terms of Service
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Agreement to Terms</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the Kaycore Technologies website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Services Description</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Kaycore Technologies provides cloud computing, digital transformation, and technology consulting services. Our services include but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Cloud infrastructure design and implementation</li>
              <li>Application development and modernization</li>
              <li>Data analytics and AI/ML solutions</li>
              <li>DevOps and automation services</li>
              <li>Technology consulting and strategy</li>
              <li>Managed services and support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">User Responsibilities</h2>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">Account Security</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring all information provided is accurate and current</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">Acceptable Use</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Violate any laws, regulations, or third-party rights</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the services or servers</li>
              <li>Use automated tools to access the services without permission</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Intellectual Property</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              All content, features, and functionality on our website and services, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, software, and the compilation thereof, are the exclusive property of Kaycore Technologies and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Service Level and Availability</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              While we strive to provide uninterrupted service, we do not guarantee that our services will be available at all times. We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Modify, suspend, or discontinue any part of the services</li>
              <li>Perform scheduled maintenance and updates</li>
              <li>Implement changes to improve performance or security</li>
              <li>Restrict access for technical or security reasons</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We will make reasonable efforts to provide advance notice of planned maintenance or significant changes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Payment and Billing</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              For paid services:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Fees are specified in your service agreement or order form</li>
              <li>Payment is due according to the agreed-upon payment terms</li>
              <li>All fees are non-refundable unless otherwise specified</li>
              <li>Late payments may result in service suspension</li>
              <li>We reserve the right to change fees with 30 days notice</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Confidentiality</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our business relationship. This obligation survives the termination of the agreement.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Warranties and Disclaimers</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We do not warrant that our services will be uninterrupted, error-free, or completely secure. You use our services at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Limitation of Liability</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, KAYCORE TECHNOLOGIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Our total liability for any claims arising from or related to these Terms or our services shall not exceed the amount paid by you to us in the twelve (12) months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Indemnification</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Kaycore Technologies, its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your violation of any rights of another party.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Termination</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause, with or without notice, for any reason including violation of these Terms. Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
              <li>Your right to use the services immediately ceases</li>
              <li>We may delete your account and content</li>
              <li>You remain liable for all charges incurred prior to termination</li>
              <li>Provisions that by their nature should survive will continue in effect</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Governing Law and Dispute Resolution</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for intellectual property or confidentiality matters.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Changes to Terms</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Severability</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">Contact Information</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
              <p className="text-slate-900 dark:text-white font-semibold mb-2">Kaycore Technologies</p>
              <p className="text-slate-700 dark:text-slate-300">Email: legal@kaycore.com</p>
              <p className="text-slate-700 dark:text-slate-300">Phone: +1 (555) 123-4567</p>
              <p className="text-slate-700 dark:text-slate-300">Address: 123 Technology Drive, San Francisco, CA 94105</p>
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact our team to discuss your technology needs.
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
