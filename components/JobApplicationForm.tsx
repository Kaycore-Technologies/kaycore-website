'use client';

import { useState } from 'react';
import { Upload, X, CheckCircle, AlertCircle } from 'lucide-react';

interface ApplicationFormData {
    name: string;
    email: string;
    position: string;
    coverLetter: string;
    resume: File | null;
}

interface JobApplicationFormProps {
    defaultPosition?: string;
    positions: { id: string; title: string }[];
}

export default function JobApplicationForm({ defaultPosition = '', positions }: JobApplicationFormProps) {
    const [formData, setFormData] = useState<ApplicationFormData>({
        name: '',
        email: '',
        position: defaultPosition,
        coverLetter: '',
        resume: null
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData(prev => ({ ...prev, resume: file }));
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            console.log('Application submitted:', formData);
            setStatus('success');
            // Reset form
            setFormData({
                name: '',
                email: '',
                position: '',
                coverLetter: '',
                resume: null
            });
            setFileName('');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-gray-300 mb-6">
                    Thank you for your interest in joining Kaycore. We have received your application and will review it shortly.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Full Name *</label>
                    <input
                        required
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all"
                        placeholder="Jane Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Address *</label>
                    <input
                        required
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all"
                        placeholder="jane@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="position" className="text-sm font-medium text-gray-300 ml-1">Position *</label>
                <select
                    required
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all cursor-pointer [&>option]:bg-slate-900"
                >
                    <option value="" disabled>Select a role...</option>
                    {positions.map((pos) => (
                        <option key={pos.id} value={pos.id}>{pos.title}</option>
                    ))}
                    <option value="other">Other / General Application</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Resume / CV *</label>
                <div className="relative group">
                    <input
                        required={!formData.resume}
                        type="file"
                        id="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className={`w-full px-4 py-8 rounded-xl border-2 border-dashed transition-all flex flex-col items-center justify-center gap-2 ${formData.resume
                        ? 'border-emerald-500/50 bg-emerald-500/5'
                        : 'border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-white/20'
                        }`}>
                        {formData.resume ? (
                            <>
                                <CheckCircle className="w-8 h-8 text-emerald-500" />
                                <p className="text-emerald-400 font-medium">{fileName}</p>
                                <p className="text-xs text-emerald-500/70">Click to change file</p>
                            </>
                        ) : (
                            <>
                                <Upload className="w-8 h-8 text-gray-400 group-hover:text-brand-accent transition-colors" />
                                <p className="text-gray-300 font-medium">Drop your resume here or click to browse</p>
                                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="coverLetter" className="text-sm font-medium text-gray-300 ml-1">Cover Letter / Note</label>
                <textarea
                    id="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us why you'd be a great fit..."
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 rounded-xl bg-white text-[#020617] font-bold text-lg hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
                {status === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending Application...
                    </span>
                ) : (
                    'Submit Application'
                )}
            </button>

            <p className="text-xs text-center text-gray-500">
                By submitting, you agree to our processing of your personal data for recruitment purposes.
            </p>
        </form>
    );
}
