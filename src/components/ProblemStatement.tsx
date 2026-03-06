import { FadeInStagger, FadeInStaggerItem } from './FadeIn';

export function ProblemStatement() {
  return (
    <section className="py-24 md:py-32 px-6 section-divider-bottom bg-[#0a0e1a] relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeInStagger>
          <FadeInStaggerItem>
            <span className="eyebrow">The Silent Killer</span>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-8">
              Missed calls are costing you <span className="text-blue-500">thousands</span>.
            </h2>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <p className="body-copy">
              You're under a house, on a roof, or talking to a customer. Your phone rings. You can't answer it. By the time you call back, they've already booked with the next company on Google.
            </p>
            <p className="body-copy">
              Hiring a full-time receptionist for after-hours is expensive, and answering services sound like robots who don't know the difference between a condenser and a furnace. You need a solution that actually understands your business and secures the job.
            </p>
          </FadeInStaggerItem>
        </FadeInStagger>

        <FadeInStaggerItem className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
          <img
            src="/images/stressed_contractor.png"
            alt="Stressed contractor on phone"
            className="relative z-10 rounded-2xl border border-white/10 shadow-2xl object-cover w-full h-[400px]"
            referrerPolicy="no-referrer"
          />
        </FadeInStaggerItem>
      </div>
    </section>
  );
}
