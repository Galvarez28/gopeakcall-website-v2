import { Check } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from './FadeIn';

const tiers = [
  {
    name: "Basic",
    price: "$399",
    originalPrice: "$549",
    label: "Discounted for Founding Partners",
    badge: null,
    headline: null,
    commitmentNote: null,
    basicFeatures: [
      "24/7 call answering",
      "350 fair-use minutes/month included",
      "$0.45/min for additional minutes",
    ],
    advancedFeatures: [
      "Direct calendar scheduling",
      "CRM updates",
      "New & returning client handling",
      "Spam & telemarketer call filtering",
      "Emergency transfer to human agent"
    ],
    buttonText: "Claim Basic Plan",
    popular: false,
    bestValue: false
  },
  {
    name: "Pro",
    price: "$599",
    originalPrice: "$799",
    label: "Discounted for Founding Partners",
    badge: "Most Popular",
    headline: null,
    commitmentNote: null,
    basicFeatures: [
      "Everything in Basic",
      "750 fair-use minutes/month included",
      "$0.35/min for additional minutes",
    ],
    advancedFeatures: [
      "Automated SMS appointment confirmations",
      "Automated SMS appointment reminders",
      "Rescheduling handling",
      "Cancellation handling",
      "Post-appointment follow-up messages",
      "SMS review requests after appointments"
    ],
    buttonText: "Claim Pro Plan",
    popular: true,
    bestValue: false
  },
  {
    name: "Founding Partner Lock-In",
    price: "$499",
    originalPrice: null,
    label: "Limited Offer — Only available to our first 5 clients",
    badge: "Best Value",
    headline: "Lock in Pro features at our lowest rate.",
    commitmentNote: "6-month prepay commitment",
    basicFeatures: [
      "Everything in Pro",
      "750 fair-use minutes/month included",
      "$0.35/min for additional minutes",
    ],
    advancedFeatures: [
      "Automated SMS appointment confirmations",
      "Automated SMS appointment reminders",
      "Rescheduling handling",
      "Cancellation handling",
      "Post-appointment follow-up messages",
      "SMS review requests after appointments",
      "Reduced monthly price (save $100/mo vs Pro)",
      "Priority support",
      "6-month rate lock guarantee"
    ],
    buttonText: "Claim Founding Partner Plan",
    popular: false,
    bestValue: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-10">
          <span className="eyebrow mx-auto">Pricing</span>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4">
            Simple plans for any size fleet.
          </h2>
          <p className="text-[18px] text-white/80 max-w-2xl mx-auto font-medium">
            If GoPeakCall recovers just 1–2 missed jobs per month, it pays for itself.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, i) => (
            <FadeInStaggerItem key={i} className={`relative rounded-2xl p-8 flex flex-col h-full ${tier.popular
                ? 'bg-blue-500/10 border border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                : tier.bestValue
                  ? 'bg-amber-500/10 border border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.15)]'
                  : 'bg-white/[0.03] border border-white/10'
              }`}>
              {tier.badge && (
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap ${tier.bestValue ? 'bg-amber-500' : 'bg-blue-500'
                  }`}>
                  {tier.badge}
                </div>
              )}

              <h3 className="text-[24px] font-semibold mb-2 flex items-center gap-2">
                {tier.name}
              </h3>
              <p className="text-[14px] text-white/60 mb-2 min-h-[40px]">{tier.label}</p>

              {tier.headline && (
                <p className="text-[16px] text-white font-medium mb-4">{tier.headline}</p>
              )}

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  {tier.originalPrice && (
                    <span className="text-[20px] font-medium text-white/40 line-through tracking-tight">{tier.originalPrice}</span>
                  )}
                </div>
                <div>
                  <span className="text-[48px] font-bold tracking-tight">{tier.price}</span>
                  <span className="text-white/50">/month</span>
                </div>
                {tier.commitmentNote && (
                  <p className="text-[13px] text-white/50 mt-1">{tier.commitmentNote}</p>
                )}
              </div>

              <div className="flex-grow flex flex-col">
                <ul className="space-y-4">
                  {tier.basicFeatures.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${tier.bestValue ? 'text-amber-500' : 'text-blue-500'}`} />
                      <span className="text-[15px] font-medium text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <hr className="border-white/10 my-6" />

                <ul className="space-y-4 mb-8">
                  {tier.advancedFeatures.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${tier.bestValue ? 'text-amber-500' : 'text-blue-500'}`} />
                      <span className="text-[15px] text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className={`w-full h-[52px] flex items-center justify-center rounded-lg font-semibold transition-all duration-180 mt-auto ${tier.popular
                  ? 'bg-blue-500 text-white hover:-translate-y-[2px] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]'
                  : tier.bestValue
                    ? 'bg-amber-500 text-white hover:-translate-y-[2px] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                {tier.buttonText}
              </a>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn className="text-center mt-12 max-w-3xl mx-auto space-y-2">
          <p className="text-[15px] text-white/60">
            Setup is free for founding partners. Standard setup fee of $350 applies after founding cohort closes.
          </p>
          <p className="text-[15px] text-white/60">
            You won't be charged until the free trial runs out.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
