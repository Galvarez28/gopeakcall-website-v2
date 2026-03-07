import { useState, useEffect, useRef } from 'react';
import { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import { Stars } from './Stars';

function CountUp({ end, prefix = '', suffix = '', duration = 2000, format = false }: { end: number, prefix?: string, suffix?: string, duration?: number, format?: boolean }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const perTick = end / (duration / 16);
        const timer = setInterval(() => {
          start += perTick;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{prefix}{format ? count.toLocaleString() : count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-24 md:py-32 px-6 border-y border-white/10 overflow-hidden">
      <Stars />
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop"
          alt="Stressed business owner"
          className="w-full h-full object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-[#0a0e1a]/85 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInStaggerItem className="text-center mb-16">
          <span className="eyebrow mx-auto">Revenue Loss Statistics</span>
          <h2 className="text-[32px] md:text-[44px] font-bold leading-tight max-w-3xl mx-auto">
            The hidden cost of a missed call in the HVAC industry.
          </h2>
        </FadeInStaggerItem>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FadeInStaggerItem className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
            <div className="text-[48px] md:text-[56px] font-bold text-blue-500 leading-none mb-4">
              <CountUp end={27} suffix="%" />
            </div>
            <div className="text-[17px] font-medium text-white/80">
              of inbound calls to the average home service business are missed.
            </div>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
            <div className="text-[48px] md:text-[56px] font-bold text-blue-500 leading-none mb-4">
              $<CountUp end={300} />–$<CountUp end={1200} format={true} />
            </div>
            <div className="text-[17px] font-medium text-white/80">
              is lost in potential revenue for every single missed call.
            </div>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
            <div className="text-[48px] md:text-[56px] font-bold text-blue-500 leading-none mb-4">
              <CountUp end={85} suffix="%" />
            </div>
            <div className="text-[17px] font-medium text-white/80">
              of callers who hit voicemail never call back — they call a competitor.
            </div>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-center text-center md:col-span-2 lg:col-span-2 hover:bg-white/10 transition-colors">
            <div className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-blue-500 leading-none mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
              $<CountUp end={48000} format={true} />–$<CountUp end={160000} format={true} />
            </div>
            <div className="text-[17px] font-medium text-white/80">
              lost per year to unanswered calls for a typical 2–3 tech HVAC company.
            </div>
          </FadeInStaggerItem>

          <FadeInStaggerItem className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-center text-center md:col-span-2 lg:col-span-1 hover:bg-white/10 transition-colors">
            <div className="text-[32px] sm:text-[36px] md:text-[48px] lg:text-[40px] xl:text-[48px] font-bold text-blue-500 leading-none mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
              $<CountUp end={1000} format={true} />–$<CountUp end={5000} format={true} />
            </div>
            <div className="text-[17px] font-medium text-white/80">
              lost on a single 85°F peak day due to missed calls.
            </div>
          </FadeInStaggerItem>
        </FadeInStagger>
      </div>
    </section>
  );
}
