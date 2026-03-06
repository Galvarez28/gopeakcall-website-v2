import { FadeInStagger, FadeInStaggerItem } from './FadeIn';

export function Mission() {
    return (
        <section className="py-24 md:py-32 px-6 bg-[#0f1420] border-y border-white/5 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <FadeInStagger>
                    <FadeInStaggerItem>
                        <span className="eyebrow mx-auto">Our Mission</span>
                    </FadeInStaggerItem>
                    <FadeInStaggerItem>
                        <h2 className="text-[32px] md:text-[44px] font-bold leading-tight mb-8">
                            We build inbound call agents to ensure you <span className="text-blue-500">never miss a call</span>.
                        </h2>
                    </FadeInStaggerItem>
                    <FadeInStaggerItem>
                        <p className="text-[18px] md:text-[20px] text-white/70 leading-relaxed max-w-3xl mx-auto">
                            Think of GoPeakCall as an essential policy for your business. We act as the ultimate <strong className="text-white">insurance against lost revenue</strong>, guaranteeing that every time a homeowner calls, your business captures the lead, secures the job, and protects your bottom line.
                        </p>
                    </FadeInStaggerItem>
                </FadeInStagger>
            </div>
        </section>
    );
}
