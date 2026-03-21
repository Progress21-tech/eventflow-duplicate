import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";

const STRATEGY_EMAIL = "mailto:team.eventflow@gmail.com?subject=Strategy%20Call%20Request&body=Hi%20EventFlow%2C%20I%20would%20like%20to%20book%20a%20strategy%20call.";

const faqs = [
  {
    q: "What exactly does EventFlow do?",
    a: "EventFlow is an event marketing and growth agency. We help event organizers, conferences, bootcamps, and brands build structured marketing systems that increase attendance and revenue. We don't just design flyers. We build strategy, funnels, automation, and campaigns that fill seats.",
  },
  {
    q: "Are you event planners?",
    a: "No. We do not handle physical logistics like venue booking, catering, decoration, or stage setup. We focus on marketing, positioning, automation, and campaign execution — the growth engine behind your event.",
  },
  {
    q: "When should I contact EventFlow before my event?",
    a: "Ideally 6–10 weeks before your event. For large conferences or high-stakes launches, we recommend 10–16 weeks. Last-minute campaigns limit performance potential.",
  },
  {
    q: "Is advertising budget included in your pricing?",
    a: "No. Our service fee covers strategy, setup, design, and campaign management. Advertising (Meta, Google, etc.) is a separate budget paid directly to the ad platforms.",
  },
  {
    q: "How do I get started?",
    a: "The first step is booking a strategy call. During this call, we review your event goals, assess your timeline, recommend the right package, and outline next steps.",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[hsl(var(--ef-grey))] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-ef-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-ef-navy/60 text-base md:text-lg">
            Everything you need to know before getting started.
          </p>
        </AnimatedSection>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[780px] mx-auto flex flex-col gap-4"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => toggle(i)}
                className={`rounded-xl cursor-pointer transition-all duration-300 border ${
                  isOpen
                    ? "border-l-[3px] border-l-ef-blue border-[rgba(1,5,202,0.15)] bg-[rgba(1,5,202,0.04)] shadow-[0_4px_24px_rgba(1,5,202,0.08)]"
                    : "border-[rgba(1,5,202,0.15)] bg-[rgba(255,255,255,0.6)] hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(1,5,202,0.1)] hover:border-l-[3px] hover:border-l-ef-blue"
                }`}
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center justify-between p-5 md:p-6 gap-4">
                  <span className="font-display text-sm md:text-base text-ef-navy text-left">
                    {faq.q}
                  </span>
                  <div className="w-9 h-9 min-w-[36px] rounded-full border border-ef-blue/30 flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-ef-blue text-xl leading-none font-light select-none"
                    >
                      +
                    </motion.span>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-ef-navy/80 text-[15px] md:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <p className="text-ef-navy/60 text-sm mb-5">
            Still have questions? We're happy to help.
          </p>
          <a href={STRATEGY_EMAIL}>
            <CTAButton variant="primary">Book a Strategy Call</CTAButton>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
