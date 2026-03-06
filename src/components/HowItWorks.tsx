import { useState, useEffect } from 'react';

const steps = [
  {
    title: "Discovery Call",
    desc: "Book a call, we learn your business, call types, peak hours, and workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Agent Build",
    desc: "We build a fully customized AI receptionist in 1–2 weeks with check-ins at every stage.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Launch & Onboarding",
    desc: "We connect your calendar, CRM, and phone system together and walk you through your dashboard live.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Ongoing Service",
    desc: "Your AI answers every call from day one. Monthly subscription, cancel anytime, support always available.",
    image: "https://images.unsplash.com/photo-1520697830682-8bc10313f80c?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('.step-item');
      let minDistance = Infinity;
      let closestStep = 0;

      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // Distance from center-ish of viewport
        const distance = Math.abs(rect.top - window.innerHeight / 3);
        if (distance < minDistance) {
          minDistance = distance;
          closestStep = index;
        }
      });

      if (activeStep !== closestStep) {
        setActiveStep(closestStep);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0f1420] relative z-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="eyebrow">The Process</span>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-12">
              Results are instant.<br />Setup is guided.
            </h2>

            <div className="space-y-32 relative py-12">
              <div className="absolute left-[15px] top-12 bottom-12 w-px bg-white/10"></div>

              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`step-item relative pl-12 transition-opacity duration-500 ${activeStep === i ? 'opacity-100' : 'opacity-30'}`}
                >
                  <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-colors duration-500 ${activeStep === i ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] border-blue-500' : 'bg-[#0f1420] border-2 border-white/20 text-white/50'}`}>
                    {i + 1}
                  </div>
                  <h3 className={`text-[24px] font-semibold mb-2 transition-colors duration-500 ${activeStep === i ? 'text-white' : 'text-white/50'}`}>{step.title}</h3>
                  <p className={`text-[17px] leading-relaxed transition-colors duration-500 ${activeStep === i ? 'text-white/80' : 'text-white/40'}`}>{step.desc}</p>

                  {/* Mobile image, hidden on desktop */}
                  <div className="lg:hidden mt-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative h-full">
            <div className="sticky top-40 glass-panel rounded-2xl overflow-hidden h-[500px] flex flex-col justify-center transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-10 pointer-events-none" />
              {steps.map((step, i) => (
                <img
                  key={i}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeStep === i ? 'opacity-80' : 'opacity-0'}`}
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="absolute inset-0 bg-[#0f1420]/20 backdrop-blur-[1px] pointer-events-none z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
