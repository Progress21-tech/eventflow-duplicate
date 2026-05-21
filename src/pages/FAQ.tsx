import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const STRATEGY_EMAIL = "mailto:team.eventflow@gmail.com?subject=Strategy%20Call%20Request&body=Hi%20EventFlow%2C%20I%20would%20like%20to%20book%20a%20strategy%20call.";

const WHATSAPP = "https://api.whatsapp.com/send?phone=2348154356486&text=Hi%20EventFlow%2C%0A%0AI%27m%20interested%20in%20your%20event%20marketing%20services.%0A%0AHow%20do%20we%20get%20started%3F";
const faqs = [
  { q: "What exactly does EventFlow do?", a: "EventFlow is an event marketing and growth agency. We help event organizers, conferences, bootcamps, and brands build structured marketing systems that increase attendance and revenue. We don't just design flyers. We build strategy, funnels, automation, and campaigns that fill seats." },
  { q: "Are you event planners?", a: "No. We do not handle physical logistics like venue booking, catering, decoration, or stage setup. We focus on marketing, positioning, automation, and campaign execution — the growth engine behind your event." },
  { q: "When should I contact EventFlow before my event?", a: "Ideally 6–10 weeks before your event. For large conferences or high-stakes launches, we recommend 10–16 weeks. Last-minute campaigns limit performance potential." },
  { q: "Is advertising budget included in your pricing?", a: "No. Our service fee covers strategy, setup, design, and campaign management. Advertising (Meta, Google, etc.) is a separate budget paid directly to the ad platforms." },
  { q: "Do you offer standalone services (e.g., just ads, designs, or a sales page)?", a: "Absolutely. We can provide standalone services like promotional designs, full end-to-end campaigns, video editing, or more. Visit eventflow.africa/services to learn more about the services we offer." },
  { q: "Do you guarantee ticket sales?", a: "We guarantee structured strategy and optimized execution. However, event performance depends on factors like offer strength, market demand, pricing, timeline, and advertising budget. We build the system that maximizes your probability of success." },
  { q: "What makes Growth different from Starter?", a: "Growth includes everything in Starter, plus: a full branding system, managed social media campaign, marketing automation, paid ads setup, and advanced communication workflows. Growth is built for scaling attendance, not just launching." },
  { q: "Do you work internationally?", a: "Yes. We work with both local and international event organizers. Our systems are adaptable to different markets and currencies." },
  { q: "How does the process work?", a: "Our typical workflow: 1. Strategy Call → 2. Campaign Architecture → 3. Asset Production → 4. Funnel & Automation Setup → 5. Campaign Launch → 6. Optimization → 7. Event-Day Support → 8. Post-Event Review (Growth & Scale only)." },
  { q: "What platforms do you use?", a: "Depending on the project, we work with: Meta Ads, Google Ads, email marketing platforms, CRM systems, WhatsApp automation tools, and landing page builders. We select tools based on your event size and budget." },
  { q: "Can you work with my internal team?", a: "Yes. We can collaborate with your internal creatives, media team, or coordinators while leading the marketing structure." },
  { q: "Do you offer custom packages?", a: "Yes. If your event doesn't fit neatly into Starter, Growth, or Scale, we create a custom proposal aligned with your objectives." },
  { q: "How much do your services cost?", a: "Our packages start from: Starter — ₦500,000 / Growth — ₦1,200,000 / Scale — Custom pricing. Final pricing depends on scope, timeline, and complexity." },
  { q: "How do I get started?", a: "The first step is booking a strategy call. During this call, we review your event goals, assess your timeline, recommend the right package, and outline next steps." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-ef-navy overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#09001d] via-ef-navy to-[#0105ca] opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ef-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-ef-blue/5 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-5"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Everything you need to know about working with EventFlow.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[hsl(var(--ef-grey))] py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* ✅ FIX: Replaced parent motion.div stagger with a plain div.
              Each card now has its own whileInView so ALL 14 cards
              animate in independently as the user scrolls. */}
          <div className="max-w-[780px] mx-auto flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onClick={() => toggle(i)}
                  className={`rounded-xl cursor-pointer transition-all duration-300 border ${
                    isOpen
                      ? "border-l-[3px] border-l-ef-blue border-[rgba(1,5,202,0.15)] bg-[rgba(1,5,202,0.04)] shadow-[0_4px_24px_rgba(1,5,202,0.08)]"
                      : "border-[rgba(1,5,202,0.15)] bg-[rgba(255,255,255,0.6)] hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(1,5,202,0.1)] hover:border-l-[3px] hover:border-l-ef-blue"
                  }`}
                  style={{ backdropFilter: "blur(12px)" }}
                >
                  <div className="flex items-center justify-between p-5 md:p-6 gap-4">
                    <span className="font-semibold text-sm md:text-base text-ef-navy text-left">
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
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <p className="text-ef-navy/60 text-sm mb-5">
              Still have questions? We're happy to help.
            </p>
            <a href={WHATSAPP}>
              <CTAButton variant="primary">Book a Strategy Call</CTAButton>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
