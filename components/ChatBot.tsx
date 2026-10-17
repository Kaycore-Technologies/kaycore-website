'use client';

import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { X, Send, CheckCircle2, HeadphonesIcon, AlertCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useSpamGuard } from '@/lib/use-spam-guard';

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: string;
};

type AppMode = 'chat' | 'lead_capture';
type LeadStep = 'asking_name' | 'asking_email' | 'finished';

const MAX_USER_MESSAGES = 15;
const AUTO_LEAD_PROMPT_AFTER = 5;

// Colour and glass settings for the chat widget (one tinted-glass palette, used on every page).
type Palette = {
  panelBackdrop?: string;
  ringWidth?: string;
  panelShadow?: string;
  panelTint?: string;
  // floating launcher pill
  launcherGradient: string;
  launcherShadow: string;
  // window shell
  windowShadow: string;
  ringGradient: string;
  panelBg: string;
  panelBorder: string;
  // header
  headerBg: string;
  headerBorder: string;
  avatarGradient: string;
  avatarInnerBg: string;
  onlineDot: string;
  onlineDotBorder: string;
  titleClass: string;
  textMuted: string;
  closeColor: string;
  closeHoverColor: string;
  closeHoverBg: string;
  // expert banner and call-to-action buttons
  bannerBg: string;
  bannerBorder: string;
  icon: string;
  btnClass: string;
  btnStyle: CSSProperties;
  // messages
  botAvatarBg: string;
  botAvatarBorder: string;
  botBubbleStyle: CSSProperties;
  botTextClass: string;
  userBubbleStyle: CSSProperties;
  typingDot: string;
  // input area
  footerBg: string;
  footerBorder: string;
  inputBg: string;
  inputBorder: string;
  inputText: string;
  inputClass: string;
  inputFocusBorder: string;
  inputFocusBg: string;
  inputFocusShadow: string;
  sendBtnClass: string;
  sendActiveStyle: CSSProperties;
  sendInactiveStyle: CSSProperties;
  success: string;
  warning: string;
  footerText: string;
};

// One frosted-glass palette, used on every page including KayHealth
const LIGHT: Palette = {
  // launcher pill keeps its gradient and glow in both themes
  launcherGradient: 'linear-gradient(135deg, #6366f1, #06b6d4)',
  launcherShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
  // Frosted glass: translucent white panel, blurred backdrop, logo-coloured glass edge
  // Thick glass: bevelled rim (bright top, softer bottom), inner rim glow, colour deep in the glass
  windowShadow: '0 1px 2px rgba(15, 23, 42, 0.06), 0 24px 60px rgba(15, 23, 42, 0.18)',
  ringGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.35) 45%, rgba(255, 255, 255, 0.7) 100%)',
  ringWidth: '1.5px',
  panelShadow: 'inset 0 1.5px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 0 rgba(255, 255, 255, 0.5), inset 0 0 28px rgba(255, 255, 255, 0.3), inset 0 -24px 40px -20px rgba(104, 125, 241, 0.22)',
  // Tinted glass: a soft cyan to periwinkle to violet hue so the pane reads as glass even over white
  panelBg: 'rgba(236, 243, 255, 0.3)',
  panelTint: 'linear-gradient(145deg, rgba(110, 220, 245, 0.24) 0%, rgba(104, 125, 241, 0.2) 55%, rgba(147, 51, 234, 0.16) 100%)',
  panelBorder: 'rgba(255, 255, 255, 0.5)',
  panelBackdrop: 'blur(40px) saturate(180%)',
  headerBg: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.04))',
  headerBorder: 'rgba(255, 255, 255, 0.65)',
  avatarGradient: 'linear-gradient(135deg, #6EDCF5, #687DF1)',
  avatarInnerBg: '#FFFFFF',
  onlineDot: '#4ade80',
  onlineDotBorder: '#FFFFFF',
  titleClass: 'text-navy',
  textMuted: '#1E293B',
  closeColor: '#475569',
  closeHoverColor: '#0F172A',
  closeHoverBg: 'rgba(255, 255, 255, 0.6)',
  bannerBg: 'rgba(255, 255, 255, 0.22)',
  bannerBorder: 'rgba(15, 23, 42, 0.06)',
  icon: '#2563EB',
  btnClass: 'bg-navy hover:bg-navy-2',
  btnStyle: {},
  botAvatarBg: 'rgba(104, 125, 241, 0.14)',
  botAvatarBorder: 'rgba(255, 255, 255, 0.8)',
  botBubbleStyle: { backgroundColor: 'rgba(255, 255, 255, 0.72)', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 2px 12px rgba(30, 64, 140, 0.10)' },
  botTextClass: 'text-ink',
  userBubbleStyle: { background: 'linear-gradient(135deg, #1D4ED8, #4338CA)' },
  typingDot: 'rgba(104, 125, 241, 0.7)',
  footerBg: 'rgba(255, 255, 255, 0.25)',
  footerBorder: 'rgba(15, 23, 42, 0.06)',
  inputBg: 'rgba(255, 255, 255, 0.55)',
  inputBorder: 'rgba(15, 23, 42, 0.10)',
  inputText: '#0F172A',
  inputClass: 'placeholder:text-muted',
  inputFocusBorder: '#687DF1',
  inputFocusBg: 'rgba(255, 255, 255, 0.95)',
  inputFocusShadow: '0 0 0 3px rgba(104, 125, 241, 0.25)',
  sendBtnClass: 'bg-navy hover:bg-navy-2',
  sendActiveStyle: {},
  sendInactiveStyle: { boxShadow: 'none' },
  success: '#047857',
  warning: '#B45309',
  footerText: '#1E293B',
};

export function ChatBot() {
  const { guardMarkup, guardFields } = useSpamGuard();
  const P = LIGHT;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'bot', text: "Hi! I'm the Kaycore AI Assistant. We test AI, and everything AI builds. Ask me about our services, case studies, a sample quality audit, or KayHealth." }
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
          addMessage('bot', data.error || "Please slow down, I need a moment!");
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
              challenges: `[CHATBOT LEAD: ${new Date().toISOString()}]\n\n${transcript}\nVISITOR: ${userText}`,
              ...guardFields(),
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
      {/* Invisible bot check for the chat's lead capture */}
      {guardMarkup}

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
          style={{ background: P.launcherGradient }}
        />
        <div
          className="relative flex items-center gap-2.5 px-5 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
          style={{ background: P.launcherGradient, boxShadow: P.launcherShadow }}
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
          boxShadow: P.windowShadow
        }}
      >
        {/* Outer gradient border glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
          style={{
            padding: P.ringWidth ?? '1px',
            background: P.ringGradient,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Inner container */}
        <div
          className="relative flex flex-col h-full rounded-3xl overflow-hidden"
          style={{ backgroundColor: P.panelBg, backgroundImage: P.panelTint, border: `1px solid ${P.panelBorder}`, backdropFilter: P.panelBackdrop, WebkitBackdropFilter: P.panelBackdrop, boxShadow: P.panelShadow }}
        >

          {/* ====== HEADER ====== */}
          <div
            className="relative px-5 py-4"
            style={{
              background: P.headerBg,
              borderBottom: `1px solid ${P.headerBorder}`
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Logo avatar with gradient border */}
                <div className="relative w-9 h-9 rounded-xl overflow-hidden p-[1px]" style={{ background: P.avatarGradient }}>
                  <div className="w-full h-full rounded-[10px] flex items-center justify-center overflow-hidden p-1" style={{ backgroundColor: P.avatarInnerBg }}>
                    <Image
                      src="/icon.png"
                      alt="Kaycore"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2" style={{ backgroundColor: P.onlineDot, borderColor: P.onlineDotBorder }} />
                </div>
                <div>
                  <p className={`text-sm font-bold tracking-tight ${P.titleClass}`} style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Kaycore AI</p>
                  <p className="text-[10px] tracking-wider uppercase" style={{ color: P.textMuted, fontFamily: 'var(--font-jetbrains), monospace' }}>Online • AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 transition-colors rounded-xl"
                style={{ color: P.closeColor }}
                onMouseEnter={e => { e.currentTarget.style.color = P.closeHoverColor; e.currentTarget.style.backgroundColor = P.closeHoverBg; }}
                onMouseLeave={e => { e.currentTarget.style.color = P.closeColor; e.currentTarget.style.backgroundColor = 'transparent'; }}
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
                background: P.bannerBg,
                borderBottom: `1px solid ${P.bannerBorder}`
              }}
            >
              <p className="text-[11px] flex items-center gap-1.5" style={{ color: P.textMuted }}>
                <HeadphonesIcon className="w-3.5 h-3.5" style={{ color: P.icon }} />
                Need human expertise?
              </p>
              <button
                onClick={startLeadCapture}
                className={`text-[11px] font-bold text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105 ${P.btnClass}`}
                style={P.btnStyle}
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
                      background: P.botAvatarBg,
                      border: `1px solid ${P.botAvatarBorder}`
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5" style={{ color: P.icon }} />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-4 py-3 text-[13px] leading-relaxed ${
                    msg.role === 'user' ? 'rounded-2xl rounded-br-md text-white' : `rounded-2xl rounded-bl-md ${P.botTextClass}`
                  }`}
                  style={msg.role === 'user' ? P.userBubbleStyle : P.botBubbleStyle}
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
                    background: P.botAvatarBg,
                    border: `1px solid ${P.botAvatarBorder}`
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" style={{ color: P.icon }} />
                </div>
                <div
                  className="rounded-2xl rounded-bl-md px-5 py-4 flex gap-1.5 items-center"
                  style={P.botBubbleStyle}
                >
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: P.typingDot, animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: P.typingDot, animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: P.typingDot, animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ====== INPUT AREA ====== */}
          <div
            className="px-4 py-3"
            style={{
              borderTop: `1px solid ${P.footerBorder}`,
              background: P.footerBg
            }}
          >
            {mode === 'lead_capture' && leadStep === 'finished' ? (
              <div className="flex items-center justify-center gap-2 text-sm py-3 font-medium" style={{ color: P.success }}>
                <CheckCircle2 className="w-5 h-5" />
                Request sent successfully
              </div>
            ) : isLimitReached && mode === 'chat' ? (
              <div className="flex flex-col items-center gap-3 py-3">
                <p className="text-[11px] flex items-center gap-1.5" style={{ color: P.warning }}>
                  <AlertCircle className="w-3.5 h-3.5" />
                  Session message limit reached
                </p>
                <button
                  onClick={startLeadCapture}
                  className={`text-xs font-bold text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 ${P.btnClass}`}
                  style={P.btnStyle}
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
                  className={`w-full rounded-2xl pl-4 pr-12 py-3.5 text-base focus:outline-none transition-all duration-300 ${P.inputClass}`}
                  style={{
                    backgroundColor: P.inputBg,
                    border: `1px solid ${P.inputBorder}`,
                    color: P.inputText,
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = P.inputFocusBorder;
                    e.currentTarget.style.backgroundColor = P.inputFocusBg;
                    e.currentTarget.style.boxShadow = P.inputFocusShadow;
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = P.inputBorder;
                    e.currentTarget.style.backgroundColor = P.inputBg;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  disabled={isLoading}
                  maxLength={500}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className={`absolute right-1.5 top-1.5 bottom-1.5 aspect-square rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105 ${P.sendBtnClass}`}
                  style={{
                    ...(inputValue.trim() && !isLoading ? P.sendActiveStyle : P.sendInactiveStyle),
                    opacity: !inputValue.trim() || isLoading ? 0.3 : 1,
                  }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}
            {mode === 'chat' && !isLimitReached && remainingMessages <= 5 && (
              <p className="text-[10px] text-center mt-2" style={{ color: P.footerText, fontFamily: 'var(--font-jetbrains), monospace' }}>
                {remainingMessages} message{remainingMessages !== 1 ? 's' : ''} remaining
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
