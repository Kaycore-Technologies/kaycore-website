'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, CheckCircle2, HeadphonesIcon, AlertCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: string;
};

type AppMode = 'chat' | 'lead_capture';
type LeadStep = 'asking_name' | 'asking_email' | 'finished';

const MAX_USER_MESSAGES = 15;
const AUTO_LEAD_PROMPT_AFTER = 5;

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'bot', text: "Hi! I'm the Kaycore AI Assistant. Ask me about our AI Quality Engineering services or KayHealth products." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [mode, setMode] = useState<AppMode>('chat');
  const [leadStep, setLeadStep] = useState<LeadStep>('asking_name');
  const [hasPromptedLead, setHasPromptedLead] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages, isOpen, isLoading]);

  const addMessage = (role: 'bot' | 'user', text: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), role, text }]);
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const startLeadCapture = () => {
    setMode('lead_capture');
    setLeadStep('asking_name');
    addMessage('bot', "Let me connect you with one of our experts! What's your name?");
  };

  const isLimitReached = userMessageCount >= MAX_USER_MESSAGES;

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    const userText = inputValue.trim();
    setInputValue('');

    if (mode === 'chat') {
      if (isLimitReached) {
        addMessage('user', userText);
        addMessage('bot', "You've reached the message limit for this session. Click 'Talk to Expert' to connect with our team!");
        return;
      }
      addMessage('user', userText);
      const newCount = userMessageCount + 1;
      setUserMessageCount(newCount);
      setIsLoading(true);
      try {
        const apiMessages = messages.map(m => ({
          role: m.role === 'bot' ? 'assistant' : 'user',
          content: m.text
        }));
        apiMessages.push({ role: 'user', content: userText });
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages })
        });
        const data = await response.json();
        if (response.status === 429) {
          addMessage('bot', data.error || "Please slow down — I need a moment!");
        } else if (!response.ok) {
          addMessage('bot', data.error || "I'm having trouble right now. Please try again.");
        } else {
          addMessage('bot', data.reply);
          if (newCount >= AUTO_LEAD_PROMPT_AFTER && !hasPromptedLead) {
            setHasPromptedLead(true);
            setTimeout(() => {
              addMessage('bot', "It sounds like you have interesting needs! Would you like to speak with an expert? Click 'Talk to Expert' above. 🚀");
            }, 1200);
          }
        }
      } catch {
        addMessage('bot', "Sorry, I encountered a network error. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else if (mode === 'lead_capture') {
      addMessage('user', userText);
      if (leadStep === 'asking_name') {
        setLeadData(prev => ({ ...prev, name: userText }));
        setLeadStep('asking_email');
        setTimeout(() => addMessage('bot', `Nice to meet you, ${userText}! What's the best email to reach you at?`), 400);
      } else if (leadStep === 'asking_email') {
        if (!validateEmail(userText)) {
          setTimeout(() => addMessage('bot', "That doesn't look like a valid email. Could you try again?"), 400);
          return;
        }
        const newLeadData = { ...leadData, email: userText };
        setLeadData(newLeadData);
        setLeadStep('finished');
        setIsLoading(true);
        try {
          const transcript = messages.map(m => `${m.role === 'bot' ? 'KAYCORE AI' : 'VISITOR'}: ${m.text}`).join('\n');
          const response = await fetch('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: newLeadData.name,
              email: newLeadData.email,
              challenges: `[CHATBOT LEAD — ${new Date().toISOString()}]\n\n${transcript}\nVISITOR: ${userText}`
            })
          });
          if (response.ok) {
            setTimeout(() => addMessage('bot', "Our team will review this conversation and reach out shortly. Thank you for your interest in Kaycore!"), 600);
          } else {
            setTimeout(() => addMessage('bot', "I had trouble saving that. Please use the Contact page instead!"), 600);
          }
        } catch {
          setTimeout(() => addMessage('bot', "An error occurred. Please try our Contact page."), 600);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  const remainingMessages = MAX_USER_MESSAGES - userMessageCount;

  return (
    <>
      {/* ====== FLOATING ACTION BUTTON ====== */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-500"
          style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
        />
        <div
          className="relative flex items-center gap-2.5 px-5 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">Ask Kaycore AI</span>
          <span className="sm:hidden">AI Chat</span>
        </div>
      </button>

      {/* ====== CHAT WINDOW ====== */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] flex flex-col overflow-hidden rounded-3xl transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{
          maxHeight: 'calc(100vh - 6rem)',
          height: '580px',
          boxShadow: '0 0 60px rgba(99, 102, 241, 0.15), 0 25px 50px rgba(0,0,0,0.5)'
        }}
      >
        {/* Outer gradient border glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
          style={{
            padding: '1px',
            background: 'linear-gradient(180deg, rgba(99,102,241,0.4) 0%, rgba(6,182,212,0.15) 40%, transparent 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Inner container */}
        <div
          className="relative flex flex-col h-full rounded-3xl overflow-hidden"
          style={{ backgroundColor: '#030712', border: '1px solid rgba(255,255,255,0.06)' }}
        >

          {/* ====== HEADER ====== */}
          <div
            className="relative px-5 py-4"
            style={{
              background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, transparent 100%)',
              borderBottom: '1px solid rgba(255,255,255,0.06)'
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Logo avatar with gradient border */}
                <div className="relative w-9 h-9 rounded-xl overflow-hidden p-[1px]" style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
                  <div className="w-full h-full rounded-[10px] flex items-center justify-center overflow-hidden p-1" style={{ backgroundColor: '#030712' }}>
                    <Image
                      src="/icon.png"
                      alt="Kaycore"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2" style={{ backgroundColor: '#4ade80', borderColor: '#030712' }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Kaycore AI</h3>
                  <p className="text-[10px] tracking-wider uppercase" style={{ color: '#9ca3af', fontFamily: 'var(--font-jetbrains), monospace' }}>Online • AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 transition-colors rounded-xl"
                style={{ color: '#9ca3af' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ====== EXPERT BANNER ====== */}
          {mode === 'chat' && (
            <div
              className="px-4 py-2.5 flex items-center justify-between"
              style={{
                background: 'linear-gradient(90deg, rgba(99,102,241,0.06) 0%, rgba(6,182,212,0.06) 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.04)'
              }}
            >
              <p className="text-[11px] flex items-center gap-1.5" style={{ color: '#9ca3af' }}>
                <HeadphonesIcon className="w-3.5 h-3.5" style={{ color: '#6366f1' }} />
                Need human expertise?
              </p>
              <button
                onClick={startLeadCapture}
                className="text-[11px] font-bold text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)'
                }}
              >
                Talk to Expert
              </button>
            </div>
          )}

          {/* ====== MESSAGES ====== */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'bot' && (
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mb-1"
                    style={{
                      background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.08))',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5" style={{ color: '#6366f1' }} />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-4 py-3 text-[13px] leading-relaxed ${
                    msg.role === 'user' ? 'rounded-2xl rounded-br-md text-white' : 'rounded-2xl rounded-bl-md text-gray-200'
                  }`}
                  style={
                    msg.role === 'user'
                      ? { background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)' }
                      : { backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-2.5 justify-start">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mb-1"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.08))',
                    border: '1px solid rgba(255,255,255,0.06)'
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" style={{ color: '#6366f1' }} />
                </div>
                <div
                  className="rounded-2xl rounded-bl-md px-5 py-4 flex gap-1.5 items-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(99,102,241,0.6)', animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(99,102,241,0.6)', animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(99,102,241,0.6)', animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ====== INPUT AREA ====== */}
          <div
            className="px-4 py-3"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              background: 'linear-gradient(0deg, #030712 0%, rgba(10,22,40,0.8) 100%)'
            }}
          >
            {mode === 'lead_capture' && leadStep === 'finished' ? (
              <div className="flex items-center justify-center gap-2 text-sm py-3 font-medium" style={{ color: '#4ade80' }}>
                <CheckCircle2 className="w-5 h-5" />
                Request sent successfully
              </div>
            ) : isLimitReached && mode === 'chat' ? (
              <div className="flex flex-col items-center gap-3 py-3">
                <p className="text-[11px] flex items-center gap-1.5" style={{ color: 'rgba(250, 204, 21, 0.8)' }}>
                  <AlertCircle className="w-3.5 h-3.5" />
                  Session message limit reached
                </p>
                <button
                  onClick={startLeadCapture}
                  className="text-xs font-bold text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', boxShadow: '0 0 15px rgba(99,102,241,0.2)' }}
                >
                  Talk to an Expert Instead
                </button>
              </div>
            ) : (
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={mode === 'chat' ? "Ask about Kaycore..." : "Type your answer..."}
                  className="w-full rounded-2xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#fff',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.1)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  disabled={isLoading}
                  maxLength={500}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: inputValue.trim() && !isLoading ? 'linear-gradient(135deg, #6366f1, #06b6d4)' : 'rgba(255,255,255,0.05)',
                    opacity: !inputValue.trim() || isLoading ? 0.3 : 1,
                    boxShadow: inputValue.trim() && !isLoading ? '0 0 15px rgba(99,102,241,0.2)' : 'none',
                  }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}
            {mode === 'chat' && !isLimitReached && remainingMessages <= 5 && (
              <p className="text-[10px] text-center mt-2" style={{ color: 'rgba(156,163,175,0.4)', fontFamily: 'var(--font-jetbrains), monospace' }}>
                {remainingMessages} message{remainingMessages !== 1 ? 's' : ''} remaining
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
