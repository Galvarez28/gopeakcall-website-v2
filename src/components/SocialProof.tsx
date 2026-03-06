import { FadeIn } from './FadeIn';

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0a0e1a] relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <span className="eyebrow mx-auto mb-6">Currently onboarding our first 3 founding partners.</span>
          <h2 className="text-[32px] md:text-[42px] font-bold leading-tight mb-6">
            We're taking on a limited number of businesses for our launch period.
          </h2>
          <p className="text-[18px] text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Each partner gets hands-on setup, direct access to our team, and priority support. Once the 3 spots are filled, new clients go on a waitlist.
          </p>
          <a href="#contact" className="inline-flex h-[56px] px-[32px] items-center justify-center rounded-lg bg-blue-500 text-[16px] font-semibold hover:-translate-y-[2px] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all duration-180 w-full sm:w-auto">
            Claim Your Spot
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
