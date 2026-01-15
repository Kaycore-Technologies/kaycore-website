'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ClientContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been received. We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage('An error occurred while sending your message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
          <p className="text-emerald-400 font-semibold">✓ {submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
          <p className="text-rose-400 font-semibold">✕ {submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 ml-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border ${errors.name
              ? 'border-rose-500 focus:border-rose-500'
              : 'border-white/10 focus:border-brand-accent/50'
              } bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300 backdrop-blur-sm`}
          />
          {errors.name && <p className="text-rose-400 text-sm mt-1 ml-1">{errors.name}</p>}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-white mb-2 ml-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 focus:border-brand-accent/50 transition-all duration-300 backdrop-blur-sm`}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 ml-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border ${errors.email
              ? 'border-rose-500 focus:border-rose-500'
              : 'border-white/10 focus:border-brand-accent/50'
              } bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300 backdrop-blur-sm`}
          />
          {errors.email && <p className="text-rose-400 text-sm mt-1 ml-1">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2 ml-1">
            Requirement *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project type, budget, or specific need..."
            className={`w-full px-4 py-3 rounded-xl border ${errors.subject
              ? 'border-rose-500 focus:border-rose-500'
              : 'border-white/10 focus:border-brand-accent/50'
              } bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300 backdrop-blur-sm`}
          />
          {errors.subject && <p className="text-rose-400 text-sm mt-1 ml-1">{errors.subject}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 ml-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or question..."
            rows={6}
            className={`w-full px-4 py-3 rounded-xl border ${errors.message
              ? 'border-rose-500 focus:border-rose-500'
              : 'border-white/10 focus:border-brand-accent/50'
              } bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 border-brand-accent/50 resize-none transition-all duration-300 backdrop-blur-sm`}
          />
          {errors.message && <p className="text-rose-400 text-sm mt-1 ml-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-[#020617] font-bold py-4 px-6 rounded-xl hover:bg-gray-200 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-xs text-gray-400 text-center">
          We&apos;ll get back to you within 24 hours during business days.
        </p>
      </form>
    </div>
  );
}
