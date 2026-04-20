import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const WHATSAPP = "https://wa.me/2348154356486?text=Hi%20EventFlow%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20event%20growth%20services.%20Can%20we%20schedule%20a%20strategy%20call%3F";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const plans = [
  {
    name: "Starter",
    subtitle: "Event Launch Sprint",
    best: "First-time events, small teams, single launches",
    positioning: "Get your event off the ground with clarity and structure.",
    includes: [
      "Event marketing strategy",
      "Event landing page or sales page",
      "Design assets (flyers, banners, motion, promo creatives)",
      "Basic social media promotion plan",
      "WhatsApp or email follow-up setup",
    ],
    outcome: "A complete launch-ready system for your event.",
    cta: "Start With a Strategy Call",
    ctaVariant: "ghost" as const,
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Event Marketing System",
    best: "Recurring events, bootcamps, communities, branded events",
    positioning: "Build a repeatable growth engine for your events.",
    includes: [
      "Everything in Starter",
      "Full event branding system",
      "Full social media management (pre-event campaign)",
      "Conversion-focused landing pages",
      "Marketing automation & funnels",
      "Ad campaign setup (media spend excluded)",
      "Attendee communication workflows",
    ],
    outcome: "A complete event growth system designed to scale attendance.",
    cta: "Book a Strategy Call",
    ctaVariant: "primary" as const,
    popular: true,
  },
  {
    name: "Scale",
    subtitle: "Event Growth Partner",
    best: "Conferences, summits, high-stakes launches, brands",
    positioning: "A dedicated growth team for your event.",
    includes: [
      "Everything in Growth",
      "Full campaign management",
      "Full-scale branded website development (+ 1yr Free domain hosting)",
      "Video productions & media setup",
      "Advanced automation & CRM setup",
      "Ad optimization & reporting",
      "Dedicated project manager",
      "Post-event retention & community strategy",
    ],
    outcome: "A full-service growth partnership for high-impact events.",
    cta: "Apply to Work With EventFlow",
    ctaVariant: "ghost" as const,
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Event marketing strategy", starter: true, growth: true, scale: true },
  { feature: "Event landing page / sales page", starter: true, growth: true, scale: true },
  { feature: "Design assets (flyers, banners, motion)", starter: true, growth: true, scale: true },
  { feature: "Basic social media promotion plan", starter: true, growth: true, scale: true },
  { feature: "WhatsApp or email follow-up setup", starter: true, growth: true, scale: true },
  { feature: "Full event branding system", starter: false, growth: true, scale: true },
  { feature: "Full social media management", starter: false, growth: true, scale: true },
  { feature: "Conversion-focused landing pages", starter: false, growth: true, scale: true },
  { feature: "Marketing automation & funnels", starter: false, growth: true, scale: true },
  { feature: "Ad campaign setup", starter: false, growth: true, scale: true },
  { feature: "Attendee communication workflows", starter: false, growth: true, scale: true },
  { feature: "Full campaign management", starter: false, growth: false, scale: true },
  { feature: "Full-scale branded website", starter: false, growth: false, scale: true },
  { feature: "Video productions & media setup", starter: false, growth: false, scale: true },
  { feature: "Advanced automation & CRM", starter: false, growth: false, scale: true },
  { feature: "Ad optimization & reporting", starter: false, growth: false, scale: true },
  { feature: "Dedicated project manager", starter: false, growth: false, scale: true },
  { feature: "Post-event retention strategy", starter: false, growth: false, scale: true },
];

const Pricing = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="gradient-hero min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-ef-blue/20 blur-[120px]" />
        </div>
        <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Event Growth Systems; Built for Results, Not Templates
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              Choose the level of support that fits your event's ambition. From growth sprints to full-scale event marketing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href={WHATSAPP}><CTAButton variant="primary">Book a Strategy Call</CTAButton></a>
              <CTAButton variant="ghost" onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Packages
              </CTAButton>
            </div>
            <p className="text-sm text-white/40">All plans start with a strategy call to ensure fit.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="packages" className="bg-ef-navy py-20 md:py-28">
        <div className="container mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`glass-card rounded-2xl p-7 md:p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_50px_rgba(1,5,202,0.25)] ${
                  plan.popular ? "lg:scale-105 border-ef-blue/40 glow-border-blue" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ef-lime text-ef-navy text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-xl text-white mb-1">{plan.name}</h3>
                  <p className="text-ef-blue text-sm font-semibold">{plan.subtitle}</p>
                </div>
                <p className="text-white/50 text-xs mb-1">Best for:</p>
                <p className="text-white/70 text-sm mb-4">{plan.best}</p>
                <p className="text-white/60 text-sm italic mb-6">{plan.positioning}</p>
                <div className="flex-1">
                  <p className="text-white/50 text-xs font-semibold mb-3 uppercase tracking-wider">Includes:</p>
                  <ul className="space-y-2 mb-6">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check size={14} className="text-ef-lime flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-white/10 pt-5 mt-auto">
                  <p className="text-white/40 text-xs mb-1">Outcome:</p>
                  <p className="text-white/70 text-sm mb-4">{plan.outcome}</p>
                  
                  <a href={WHATSAPP} className="w-full">
                    <CTAButton
                      variant={plan.ctaVariant}
                      className="w-full"
                    >
                      {plan.cta}
                    </CTAButton>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-ef-navy py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-white">Compare Plans</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <p className="text-white/30 text-xs mb-3 md:hidden">← Scroll to see all plans →</p>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white/60 text-sm py-4 pr-4 font-medium">Feature</th>
                    <th className="text-center text-white text-sm py-4 px-4 font-display glow-border-blue rounded-t-lg">Starter</th>
                    <th className="text-center text-white text-sm py-4 px-4 font-display glow-border-blue rounded-t-lg">Growth</th>
                    <th className="text-center text-white text-sm py-4 px-4 font-display glow-border-blue rounded-t-lg">Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                      <td className="text-white/60 text-sm py-3 pr-4">{row.feature}</td>
                      <td className="text-center py-3 px-4">
                        {row.starter ? <Check size={16} className="text-ef-lime mx-auto" /> : <Minus size={16} className="text-white/20 mx-auto" />}
                      </td>
                      <td className="text-center py-3 px-4">
                        {row.growth ? <Check size={16} className="text-ef-lime mx-auto" /> : <Minus size={16} className="text-white/20 mx-auto" />}
                      </td>
                      <td className="text-center py-3 px-4">
                        {row.scale ? <Check size={16} className="text-ef-lime mx-auto" /> : <Minus size={16} className="text-white/20 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Not Sure */}
      <section className="bg-ef-navy py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Not Sure Which Package Fits?</h2>
              <p className="text-white/60 mb-8">
                We'll help you determine the best growth path based on: your event size, revenue goal, audience type, and timeline.
              </p>
              <a href={WHATSAPP}>
                <CTAButton variant="primary">Send Us a Message Now</CTAButton>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </PageLayout>
  );
};

export default Pricing;
