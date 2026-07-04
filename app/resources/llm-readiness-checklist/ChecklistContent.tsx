'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Lock, Send, ArrowRight } from 'lucide-react';

interface ChecklistSection {
  title: string;
  items: string[];
}

const checklist: ChecklistSection[] = [
  {
    title: '1. Scope the risk',
    items: [
      'You have written down the three most costly ways this AI feature can fail a user or the business.',
      'Each failure is rated by impact, so testing effort goes where a wrong answer is most expensive.',
      'You know which parts are yours to test (prompts, retrieval, guardrails, integration), separate from the base model.',
    ],
  },
  {
    title: '2. Build the evaluation set',
    items: [
      'You have a golden dataset of at least 50 examples for an early read, growing toward 500 or more for a production-grade result.',
      'The set includes normal cases that reflect the most common real usage.',
      'The set includes edge cases: rare scenarios, empty or malformed input, very long context, and ambiguous requests.',
      'The set includes adversarial inputs: jailbreak attempts, prompt injection, and scope-violation prompts.',
    ],
  },
  {
    title: '3. Set thresholds before you look at results',
    items: [
      'Hallucination rate target is defined: around 5 percent or lower for general use, around 1 percent or lower for high-stakes domains.',
      'Groundedness or faithfulness to retrieved context is measured for any retrieval-augmented system.',
      'Output consistency across repeated runs of the same prompt is tracked.',
      'An acceptable ceiling for successful adversarial attacks is set, and any regression above it blocks release.',
      'Latency and cost targets under expected load are defined.',
    ],
  },
  {
    title: '4. Choose methods that hold up',
    items: [
      'Regression is caught by rerunning the golden dataset whenever a prompt or model changes.',
      'If you use LLM-as-a-judge, the judge is calibrated against human labels and audited periodically.',
      'Humans review a sample of outputs for the highest-risk categories.',
      'Evaluation runs automatically in CI and blocks merges that fall below threshold.',
    ],
  },
  {
    title: '5. Operate after launch',
    items: [
      'The live system is monitored for drift, latency spikes, and quality degradation.',
      'You have a plan to re-evaluate after any model or provider update.',
      'Test suites, datasets, and results live in your own repository, in a format you can maintain without any single vendor.',
    ],
  },
];

export default function ChecklistContent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'unlocked' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          challenges: 'Requested: LLM Production-Readiness Checklist',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('unlocked');
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again.');
      setStatus('error');
    }
  };

  const unlocked = status === 'unlocked';

  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-[420px] bg-grid opacity-20 pointer-events-none" />

      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-5">Free Resource</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight tracking-tight mb-6">
            The LLM Production-Readiness Checklist
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A practical, 20-point checklist for deciding whether an AI feature is ready to ship. Built from the
            metrics and thresholds our engineers use on real production systems. No fluff, no sales pitch.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Gate form */}
          <AnimatePresence>
            {!unlocked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 mb-12"
              >
                <div className="flex items-center gap-2 text-brand-accent text-sm font-medium mb-4">
                  <Lock className="w-4 h-4" aria-hidden="true" />
                  Enter your work email to unlock the checklist
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cl-name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      id="cl-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none text-white rounded-xl px-4 py-3.5 text-base transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="cl-email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Work Email
                    </label>
                    <input
                      id="cl-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none text-white rounded-xl px-4 py-3.5 text-base transition-all"
                    />
                  </div>
                  {error && (
                    <p role="alert" aria-live="assertive" className="sm:col-span-2 text-red-400 text-sm">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full py-4 transition-all disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Unlock the checklist <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="sm:col-span-2 text-xs text-gray-500 text-center">
                    We send the checklist and nothing else. No spam, no drip sequence.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Checklist (blurred until unlocked) */}
          <div className={`relative transition-all duration-500 ${unlocked ? '' : 'blur-sm select-none pointer-events-none'}`} aria-hidden={!unlocked}>
            {unlocked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 text-sm font-medium mb-8"
              >
                <CheckCircle2 className="w-5 h-5" />
                Unlocked. A copy is on its way to your inbox.
              </motion.div>
            )}
            <div className="space-y-10">
              {checklist.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-bold text-white mb-5">{section.title}</h2>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-gray-300 leading-relaxed">
                        <span className="mt-1 w-5 h-5 shrink-0 rounded-md border border-brand-accent/40 bg-brand-accent/10 flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {unlocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-3">Want help working through it?</h2>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Our lead quality engineers can run this assessment on your system and hand you the test suites and
                datasets to keep.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-accent text-white font-semibold rounded-full hover:bg-brand-accent/90 transition-all"
              >
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
