import { Clock, UserCheck, Calendar, Database, PhoneForwarded, Smartphone, Star, RefreshCw, ShieldAlert } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './FadeIn';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: "24/7 Availability",
    desc: "Never miss a call again. Nights, weekends, and holidays are covered."
  },
  {
    icon: <UserCheck className="w-6 h-6 text-blue-400" />,
    title: "Human-Sounding Voice",
    desc: "Callers won't know the difference. Advanced, natural conversational flows."
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-400" />,
    title: "Direct Calendar Scheduling",
    desc: "Appointments booked without lifting a finger into your existing software."
  },
  {
    icon: <Database className="w-6 h-6 text-blue-400" />,
    title: "CRM Integration",
    desc: "Every caller's data stored automatically. No more double data entry."
  },
  {
    icon: <PhoneForwarded className="w-6 h-6 text-blue-400" />,
    title: "Emergency Call Transfer",
    desc: "Live handoff to a human whenever a true emergency is detected."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    title: "SMS Confirmations",
    desc: "Automated text follow-up immediately after every booking."
  },
  {
    icon: <Star className="w-6 h-6 text-purple-400" />,
    title: "Reputation Growth (Pro)",
    desc: "Prompts happy customers to leave Google reviews after service."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-purple-400" />,
    title: "Rescheduling & Cancellations (Pro)",
    desc: "Handled seamlessly without staff involvement, freeing up your team."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-[#0a0e1a] relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="eyebrow mx-auto">The Capabilities</span>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight">
            Built for Revenue, Not Gimmicks.
          </h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f, i) => (
            <FadeInStaggerItem key={i}>
              <div className="bg-white/[0.06] border border-white/[0.12] rounded-xl p-7 hover:border-blue-500/40 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-200 group h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shrink-0">
                  {f.icon}
                </div>
                <h3 className="text-[19px] font-semibold mb-3">{f.title}</h3>
                <p className="text-[15px] text-white/70 leading-relaxed">{f.desc}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn className="max-w-4xl mx-auto bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <ShieldAlert className="w-10 h-10 text-blue-500 mx-auto mb-6" />
          <h3 className="text-[24px] md:text-[32px] font-bold mb-4">Radically Specific Scope.</h3>
          <p className="text-[18px] md:text-[20px] text-white/80 leading-relaxed max-w-2xl mx-auto">
            It does NOT dispatch. It does NOT quote. It does NOT make judgment calls. <br className="hidden md:block" />
            <span className="text-white font-semibold">It books, confirms, and reschedules. That's it.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
