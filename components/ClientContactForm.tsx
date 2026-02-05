'use client';

import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { MagneticButton } from '@/components/ui';

interface FormData {
  name: string;
  email: string;
  company: string;
  useCase: string;
  situation: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  useCase?: string;
  situation?: string; // Although optional, good to have type safety
  timeline?: string;
  message?: string;
}

export default function ClientContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    useCase: '',
    situation: '',
    timeline: '',
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
      newErrors.email = 'Work Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.useCase.trim()) {
      newErrors.useCase = 'Please describe your use case';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setSubmitMessage('Request received. We will review your engineering needs and reply within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          useCase: '',
          situation: '',
          timeline: '',
          message: '',
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 8000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage('An error occurred. Please try again or email us directly.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
          <p className="text-emerald-400 font-semibold text-sm">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
          <p className="text-rose-400 font-semibold text-sm">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className={`w-full px-4 py-3 rounded-xl border ${errors.name
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-brand-accent/50'
                } bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300`}
            />
            {errors.name && <p className="text-rose-400 text-xs mt-1 ml-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={`w-full px-4 py-3 rounded-xl border ${errors.email
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-brand-accent/50'
                } bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300`}
            />
            {errors.email && <p className="text-rose-400 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300`}
          />
        </div>

        {/* Use Case Field */}
        <div>
          <label htmlFor="useCase" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
            What are you building or validating? *
          </label>
          <input
            type="text"
            id="useCase"
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            placeholder="e.g. Healthcare Chatbot, Financial Risk Model..."
            className={`w-full px-4 py-3 rounded-xl border ${errors.useCase
              ? 'border-rose-500 focus:border-rose-500'
              : 'border-white/10 focus:border-brand-accent/50'
              } bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300`}
          />
          {errors.useCase && <p className="text-rose-400 text-xs mt-1 ml-1">{errors.useCase}</p>}
        </div>

        {/* Situation Field */}
        <div>
          <label htmlFor="situation" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
            What describes your situation?
          </label>
          <div className="relative">
            <select
              id="situation"
              name="situation"
              value={formData.situation}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${errors.situation
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-brand-accent/50'
                } bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300 appearance-none cursor-pointer`}
            >
              <option value="" disabled className="bg-slate-900 text-slate-500">Select your status...</option>
              <option value="pre-production" className="bg-slate-900">Pre-Production / MVP Validation</option>
              <option value="production" className="bg-slate-900">Preparing for Production Release</option>
              <option value="incident" className="bg-slate-900">Post-Incident or Near Miss</option>
              <option value="compliance" className="bg-slate-900">Regulatory or Compliance Readiness Review</option>
              <option value="monitoring" className="bg-slate-900">Ongoing Monitoring & Risk Management</option>
              <option value="strengthening" className="bg-slate-900">Replacing or Strengthening Existing QA</option>
              <option value="unsure" className="bg-slate-900">Not Sure — Need Expert Guidance</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        {/* Timeline Field */}
        <div>
          <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
            Estimated Timeline *
          </label>
          <div className="relative">
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${errors.timeline
                ? 'border-rose-500 focus:border-rose-500'
                : 'border-white/10 focus:border-brand-accent/50'
                } bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all duration-300 appearance-none cursor-pointer`}
            >
              <option value="" disabled className="bg-slate-900 text-slate-500">Select a timeline...</option>
              <option value="immediate" className="bg-slate-900">Immediate (&lt; 4 weeks)</option>
              <option value="quarter" className="bg-slate-900">This Quarter (1-3 months)</option>
              <option value="planning" className="bg-slate-900">Exploratory / Budgeting</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {errors.timeline && <p className="text-rose-400 text-xs mt-1 ml-1">{errors.timeline}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 ml-1">
            Additional Context *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your specific risk concerns or engineering challenges..."
            rows={4}
            className={`w-full px-4 py-3 rounded-xl border ${errors.message
              ? 'border-rose-500 focus:border-rose-500'
              : 'border-white/10 focus:border-brand-accent/50'
              } bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 border-brand-accent/50 resize-none transition-all duration-300`}
          />
          {errors.message && <p className="text-rose-400 text-xs mt-1 ml-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="space-y-4">
          <MagneticButton
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-[#020617] font-bold py-4 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex justify-center items-center gap-2"
          >
            {isSubmitting ? 'Sending Request...' : (
              <>
                Talk to an AI Quality Expert <ArrowRight className="w-4 h-4" />
              </>
            )}
          </MagneticButton>

          <p className="text-xs text-slate-500 text-center uppercase tracking-widest">
            Owner-led Review • No Sales Agents
          </p>
        </div>

        <div className="border-t border-white/5 pt-4">
          <p className="text-xs text-slate-600 text-center flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Typical response: within 24 hours (business days)
          </p>
          <p className="text-[10px] text-slate-700 text-center leading-relaxed px-4">
            Disclaimer: We provide technical validation and compliance readiness support.
            We do not issue government regulatory approvals or medical certifications.
          </p>
        </div>
      </form>
    </div>
  );
}
