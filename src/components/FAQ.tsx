import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';

const faqs = [
  {
    q: "Will my customers know they are talking to an AI?",
    a: "Our voice models are incredibly advanced, complete with natural pauses, 'umms', and breathing sounds. While some highly attentive callers might notice, the vast majority of homeowners believe they are speaking to a real dispatcher."
  },
  {
    q: "Does it integrate with ServiceTitan or Housecall Pro?",
    a: "Yes. GoPeakCall integrates directly with major home service CRMs. The AI can check real-time availability, book jobs directly onto your board, and add customer notes just like a human dispatcher."
  },
  {
    q: "What happens if the AI doesn't know the answer?",
    a: "If the AI encounters a complex issue or an angry customer, it gracefully handles the situation by taking a message, apologizing, and immediately transferring the call to your designated escalation number or sending you an urgent SMS."
  },
  {
    q: "Can I customize what the AI says?",
    a: "Absolutely. You provide your pricing, service areas, dispatch fees, and company policies. The AI uses this knowledge base to answer questions accurately and stay on-brand."
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are up and running in under 48 hours. We handle the heavy lifting of training the AI on your specific business data."
  },
  {
    q: "Do I need to change my phone number?",
    a: "No. You can simply set up conditional call forwarding so that missed calls, or calls after hours, route to your GoPeakCall agent. Or, you can port your number directly to us."
  },
  {
    q: "Can it handle multiple calls at once?",
    a: "Yes. The AI can handle an unlimited number of concurrent calls. You will never give a customer a busy signal or send them to voicemail again."
  },
  {
    q: "Is there a contract?",
    a: "No, all plans are month-to-month. You can cancel or upgrade at any time as your seasonal volume changes."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-[#0f1420] border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="eyebrow mx-auto">FAQ</span>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight">
            Common questions.
          </h2>
        </FadeIn>

        <div className="border-t border-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left py-6 flex items-center justify-between transition-colors ${
                  openIndex === i ? 'bg-blue-500/[0.05] px-4 -mx-4 rounded-lg my-2' : 'hover:bg-white/[0.02] px-4 -mx-4 rounded-lg'
                }`}
              >
                <span className="text-[17px] font-medium text-white pr-8">{faq.q}</span>
                <Plus className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-250 ease-out ${
                  openIndex === i ? 'rotate-45 text-blue-500' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden px-4 -mx-4"
                  >
                    <p className="text-[15px] font-normal text-white/72 leading-[1.6] pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
