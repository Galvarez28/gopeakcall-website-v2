import { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import { Stars } from './Stars';

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
      <Stars />
      <div className="hero-glow"></div>

      <FadeInStagger className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <FadeInStaggerItem>
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-200 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now onboarding our first 3 founding partners — discounted pricing, priority support, and a dedicated build just for your business.
          </div>
        </FadeInStaggerItem>

        <FadeInStaggerItem>
          <h1 className="text-[48px] md:text-[72px] font-[800] leading-[1.05] tracking-tight text-white mb-6 text-balance">
            Your Phone Rings. No One Answers. <span className="text-blue-500">You Just Lost $500.</span>
          </h1>
        </FadeInStaggerItem>

        <FadeInStaggerItem>
          <p className="text-[20px] md:text-[22px] font-normal text-white/70 max-w-3xl mb-10 text-balance">
            <strong className="text-white font-semibold block mb-4">Every missed call is a job booked by your competitor.</strong>
            Missed calls are the #1 silent revenue killer in HVAC. We answer every call, book the appointment, and keep your schedule full — 24/7, no exceptions. We do NOT dispatch, quote, or make judgment calls. We book, confirm, and reschedule.
          </p>
        </FadeInStaggerItem>

        <FadeInStaggerItem className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#contact" className="h-[56px] px-[32px] flex items-center justify-center rounded-lg bg-blue-500 text-white text-[16px] font-semibold hover:-translate-y-[2px] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all duration-180 w-full sm:w-auto">
            Book a Discovery Call
          </a>
        </FadeInStaggerItem>
      </FadeInStagger>
    </section>
  );
}
