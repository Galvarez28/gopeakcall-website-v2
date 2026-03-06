import { Mic, FileText, BarChart3, CheckCircle2 } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './FadeIn';

const features = [
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    title: "Call recordings",
    desc: "Replay any call, anytime"
  },
  {
    icon: <FileText className="w-5 h-5 text-blue-400" />,
    title: "Full transcripts",
    desc: "Read exactly what was said"
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
    title: "Analytics",
    desc: "Call volume, booking rate, minutes used, and outcomes"
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-blue-400" />,
    title: "Booking confirmations",
    desc: "See every appointment your agent secured"
  }
];

export function Visibility() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0f1420] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <FadeIn>
              <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-6">
                Full Visibility, At All Times
              </h2>
              <p className="text-[18px] text-white/70 leading-relaxed mb-10">
                You shouldn't have to wonder if your AI is performing. Every GoPeakCall client gets access to a professional management dashboard with call transcripts, recordings, performance insights, usage analytics, and billing.
              </p>
            </FadeIn>

            <FadeInStagger className="space-y-6 mb-10">
              {features.map((f, i) => (
                <FadeInStaggerItem key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-white mb-1">{f.title}</h3>
                    <p className="text-[15px] text-white/60">{f.desc}</p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>

            <FadeIn>
              <p className="text-[18px] font-medium text-white/90 border-l-2 border-blue-500 pl-4">
                No black box. No guesswork. Just proof that your phone is covered.
              </p>
            </FadeIn>
          </div>

          <FadeIn className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>
            <div className="glass-panel rounded-2xl border border-white/10 p-2 relative z-10 shadow-2xl overflow-hidden">
              <div className="bg-[#0a0e1a] rounded-xl overflow-hidden border border-white/5">
                {/* Mock Dashboard Header */}
                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-4 bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="h-6 bg-white/5 rounded w-full max-w-[200px]"></div>
                </div>
                {/* Mock Dashboard Content */}
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-24 bg-white/[0.03] rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded bg-blue-500/20"></div>
                        <div className="h-4 bg-white/10 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="h-5 bg-white/10 rounded w-1/4 mb-4"></div>
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-16 bg-white/[0.02] rounded-lg border border-white/5 flex items-center px-4 gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5"></div>
                        <div className="space-y-2 flex-1">
                          <div className="h-3 bg-white/20 rounded w-1/3"></div>
                          <div className="h-2 bg-white/10 rounded w-1/4"></div>
                        </div>
                        <div className="w-20 h-6 rounded-full bg-green-500/20 border border-green-500/30"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
