import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './FadeIn';

const steps = [
  {
    id: '01',
    title: "Discovery Call",
    desc: "Book a call, we learn your business, call types, peak hours, and workflows.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    id: '02',
    title: "Agent Build",
    desc: "We build a fully customized AI receptionist in 1–2 weeks with check-ins at every stage.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: '03',
    title: "Launch & Onboarding",
    desc: "We connect your calendar, CRM, and phone system together and walk you through your dashboard live.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: '04',
    title: "Ongoing Service",
    desc: "Your AI answers every call from day one. Monthly subscription, cancel anytime, support always available.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0A0E1A] relative z-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="eyebrow inline-block mb-4">The Process</span>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight">
              Results are instant.<br />Setup is guided.
            </h2>
          </FadeIn>
        </div>

        {/* Desktop Interface */}
        <div className="hidden lg:grid grid-cols-[1fr_2fr] gap-12 bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex flex-col gap-4 justify-center">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(index)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group ${activeTab === index
                    ? 'bg-blue-500/10 border border-blue-500/30'
                    : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                  }`}
              >
                {activeTab === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-2xl"></div>
                )}
                <div className="flex items-center gap-4">
                  <span className={`text-xl font-bold font-mono transition-colors duration-300 ${activeTab === index ? 'text-blue-400' : 'text-white/20'}`}>
                    {step.id}
                  </span>
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                    {step.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          <div className="relative bg-[#0f1420] border border-white/5 rounded-2xl p-12 flex flex-col justify-center items-center text-center overflow-hidden min-h-[400px]">
            {/* Soft decorative background glows */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center max-w-lg transition-all duration-500 transform animate-in fade-in slide-in-from-bottom-4" key={activeTab}>
              <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 shadow-inner shadow-white/5">
                {steps[activeTab].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {steps[activeTab].title}
              </h3>
              <p className="text-lg text-white/60 leading-relaxed">
                {steps[activeTab].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Interface */}
        <div className="lg:hidden space-y-6">
          <FadeInStagger>
            {steps.map((step, index) => (
              <FadeInStaggerItem key={step.id}>
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 text-8xl font-black font-mono text-white/[0.02] pointer-events-none">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>

      </div>
    </section>
  );
}
