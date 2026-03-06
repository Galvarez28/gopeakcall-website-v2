import { FadeIn } from './FadeIn';

export function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0a0e1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full w-[600px] h-[600px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <FadeIn className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-6">
          Ready to stop missing jobs?
        </h2>
        <p className="text-[17px] text-white/70 mb-10 max-w-xl mx-auto">
          Join hundreds of HVAC and home service businesses using GoPeakCall to answer every call and book more revenue.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="form-input flex-grow"
            required
          />
          <button type="submit" className="h-[52px] px-8 rounded-lg bg-blue-500 text-white font-semibold hover:-translate-y-[2px] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] transition-all duration-180 whitespace-nowrap">
            Get Started
          </button>
        </form>
        <p className="text-[13px] text-white/40 mt-4">14-day free trial. No credit card required.</p>
      </FadeIn>
    </section>
  );
}
