'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

interface LeadFormProps {
  theme?: 'dark' | 'light';
  challengesPlaceholder?: string;
}

export function LeadForm({ 
  theme = 'dark', 
  challengesPlaceholder = 'Tell us about your AI/QA challenges...' 
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenges: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isLight = theme === 'light';

  const containerClasses = isLight
    ? 'bg-white border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-10 relative overflow-hidden'
    : 'bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 relative overflow-hidden';

  const labelClasses = isLight
    ? 'block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2'
    : 'block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2';

  const inputClasses = isLight
    ? 'w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600/20 outline-none text-slate-900 rounded-xl px-4 py-3.5 transition-all duration-350'
    : 'w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/[0.08] focus:ring-1 focus:ring-blue-500/20 outline-none text-white rounded-xl px-4 py-3.5 transition-all duration-350';

  const buttonClasses = isLight
    ? 'w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full py-4 transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2 hover:shadow-xl'
    : 'w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full py-4 transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]';

  const successIconColor = isLight ? 'text-emerald-500' : 'text-blue-400';

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', challenges: '' });
    setIsSuccess(false);
  };

  return (
    <div className={containerClasses}>
      {/* Decorative background glow for dark mode */}
      {!isLight && (
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      )}

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Full Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>Work Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className={labelClasses}>Company Name</label>
              <input
                id="company"
                type="text"
                placeholder="Enterprise Corp"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="challenges" className={labelClasses}>AI / QA Challenges</label>
              <textarea
                id="challenges"
                rows={4}
                placeholder={challengesPlaceholder}
                value={formData.challenges}
                onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                className={`${inputClasses} resize-none`}
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center font-medium leading-relaxed bg-red-500/10 border border-red-500/20 py-2.5 px-4 rounded-xl">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={buttonClasses}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Talk to an AI Quality Expert</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-12 relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="mb-6"
            >
              <CheckCircle2 className={`w-16 h-16 ${successIconColor}`} />
            </motion.div>

            <h3 className={`text-2xl font-bold font-display mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Message Received
            </h3>
            <p className={`text-sm mb-8 max-w-sm ${isLight ? 'text-slate-600' : 'text-gray-400'}`}>
              Thank you for reaching out. One of our lead AI Quality Engineers will review your request and contact you within 2 business hours.
            </p>

            <button
              onClick={handleReset}
              className={`text-sm font-semibold underline hover:no-underline transition-all ${
                isLight ? 'text-slate-600 hover:text-slate-900' : 'text-gray-400 hover:text-white'
              }`}
            >
              Submit another response
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
