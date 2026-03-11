import { FadeIn } from './FadeIn';

export function ProofStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-6 px-6">
      <FadeIn className="max-w-7xl mx-auto flex justify-center items-center text-center">
        <div className="text-[15px] md:text-[17px] uppercase tracking-widest font-semibold text-white/90">
          14-day free pilot — includes up to 150 minutes of live call answering. No setup fee. Card required to activate
        </div>
      </FadeIn>
    </section>
  );
}
