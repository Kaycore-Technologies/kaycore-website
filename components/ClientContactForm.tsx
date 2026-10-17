'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { services } from '@/components/company-data';
import { useSpamGuard } from '@/lib/use-spam-guard';

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
  situation?: string;
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
  const { guardMarkup, guardFields } = useSpamGuard();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Work Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.useCase.trim()) newErrors.useCase = 'Please describe your use case';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ...guardFields() }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Request received. We will review your engineering needs and reply within 24 hours.');
        setFormData({ name: '', email: '', company: '', useCase: '', situation: '', timeline: '', message: '' });
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

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-surface border border-line text-navy placeholder:text-muted focus:outline-none focus:border-c2 focus:ring-2 focus:ring-c2/30 transition-all duration-300";
  const errorClasses = "border-red-400! focus:border-red-400! focus:ring-red-400/30!";

  return (
    <div className="relative z-10">
      {submitStatus === 'success' && (
        <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
          <p className="text-emerald-700 font-medium">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
          <p className="text-red-600 font-medium">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {guardMarkup}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 ml-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
            />
            {errors.name && <p className="text-red-600 text-xs mt-2 ml-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 ml-1">
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
            />
            {errors.email && <p className="text-red-600 text-xs mt-2 ml-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 ml-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="useCase" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 ml-1">
            What are you building or validating? *
          </label>
          <input
            type="text"
            id="useCase"
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            placeholder="e.g. Healthcare Chatbot, Financial Risk Model..."
            className={`${inputClasses} ${errors.useCase ? errorClasses : ''}`}
          />
          {errors.useCase && <p className="text-red-600 text-xs mt-2 ml-1">{errors.useCase}</p>}
        </div>

        <div>
          <label htmlFor="situation" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 ml-1">
            Which service are you interested in?
          </label>
          <div className="relative">
            {/* Options come from the service list, so the form never drifts from what Kaycore offers */}
            <select
              id="situation"
              name="situation"
              value={formData.situation}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer ${errors.situation ? errorClasses : ''}`}
            >
              <option value="" disabled className="bg-surface text-muted">Select a service...</option>
              {services.map((service) => (
                <option key={service.slug} value={service.title} className="bg-surface text-navy">{service.title}</option>
              ))}
              <option value="Not sure, need guidance" className="bg-surface text-navy">Not sure, need guidance</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 ml-1">
            Estimated Timeline *
          </label>
          <div className="relative">
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer ${errors.timeline ? errorClasses : ''}`}
            >
              <option value="" disabled className="bg-surface text-muted">Select a timeline...</option>
              <option value="immediate" className="bg-surface text-navy">Immediate (&lt; 4 weeks)</option>
              <option value="quarter" className="bg-surface text-navy">This Quarter (1-3 months)</option>
              <option value="planning" className="bg-surface text-navy">Exploratory / Budgeting</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {errors.timeline && <p className="text-red-600 text-xs mt-2 ml-1">{errors.timeline}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 ml-1">
            Additional Context *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your specific risk concerns or engineering challenges..."
            rows={4}
            className={`${inputClasses} resize-none ${errors.message ? errorClasses : ''}`}
          />
          {errors.message && <p className="text-red-600 text-xs mt-2 ml-1">{errors.message}</p>}
        </div>

        <div className="pt-4 space-y-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full relative group overflow-hidden px-8 py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed
                       bg-navy hover:bg-navy-2 text-on-navy transition-all duration-300 shadow-card"
          >
            <div className="flex items-center justify-center gap-2">
               <span>{isSubmitting ? 'Sending Request...' : 'Talk to an AI Quality Expert'}</span>
               {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </div>
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-between px-2 gap-4">
            <p className="text-xs text-muted font-mono tracking-widest uppercase">
              Owner-led Review • No Sales Agents
            </p>
            <p className="text-xs text-muted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Reply within 24h
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
