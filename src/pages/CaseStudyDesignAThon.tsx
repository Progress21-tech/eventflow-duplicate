import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const STRATEGY_EMAIL =
  "mailto:team.eventflow@gmail.com?subject=Strategy%20Call%20Request&body=Hi%20EventFlow%2C%20I%20would%20like%20to%20book%20a%20strategy%20call.";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const metrics = [
  { value: "1,000+", label: "Registrations (x2)" },
  { value: "₦0", label: "Ad Spend" },
  { value: "12 Days", label: "Campaign Timeline" },
  { value: "12 Hours", label: "Live Session" },
];

const challenges = [
  "Most virtual events struggle with: low turnout, weak engagement, poor conversion and heavy reliance on ads.",
  "But for DesignAThon: No Ad was spent, Short Timeline(Under 12 Days), High Expectation for Turnout, Need for Engagement for 12 hours.",
];

const approaches = [
  {
    num: "01",
    title: "Momentum Creation",
    desc: "Creating urgency and buzz within a short timeframe. Every day of the campaign was intentional teasers, countdowns, and high-energy content worked together to build anticipation and make registration feel like an event in itself.",
  },
  {
    num: "02",
    title: "Authority Positioning",
    desc: "Using speaker announcements and structured content to elevate perceived value. Design-A-Thon was positioned not just as a free event, but as an unmissable learning experience with real practitioners sharing live workflows.",
  },
  {
    num: "03",
    title: "Community Distribution",
    desc: "Leveraging WhatsApp, Telegram, and social platforms to spread rapidly. Distribution was built into the audience; the content was designed to be shared, and the community became the channel.",
  },
  {
    num: "04",
    title: "Conversion-Oriented Messaging",
    desc: "Every piece of content drove one thing: registration. From Instagram posts to WhatsApp broadcasts, the messaging was engineered to reduce friction and push the audience toward a single, clear action.",
  },
];

const executionDetails = [
  { label: "Timeline", value: "Under 12 Days (Both Editions)" },
  { label: "Format", value: "12-Hour Non-Stop Virtual Livestream" },
  { label: "Channels", value: "WhatsApp, Telegram, Instagram, Facebook" },
  { label: "Ad Spend", value: "₦0 (Fully Organic)" },
  { label: "Editions", value: "Design-A-Thon 1.0 & 2.0" },
];

const whatMadeItWork = [
  {
    num: "01",
    title: "Speed + Intensity",
    desc: "The short timeline created urgency. A compressed window forced consistent, high-frequency promotion that kept the event top of mind.",
  },
  {
    num: "02",
    title: "Community Leverage",
    desc: "Distribution was built into the audience itself. People didn't just attend; they invited others, turning every registrant into a micro-distributor.",
  },
  {
    num: "03",
    title: "Value-Driven Positioning",
    desc: "People didn't feel sold to; they felt invited. The framing was always about what they'd gain, not what was being offered.",
  },
  {
    num: "04",
    title: "Structured Execution",
    desc: "Everything had a purpose. Content → Attract. Messaging → Convince. Event → Deliver. Follow-up → Convert. No step was an accident.",
  },
];

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(237,99%,40%)] mb-4">
    {children}
  </p>
);

const CaseStudyDesignAThon = () => (
  <PageLayout>
    {/* Hero */}
    <section className="gradient-hero min-h-[50vh] flex items-end relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[hsl(237,99%,40%)]/20 blur-[120px]" />
      </div>
      <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-20 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            className="flex items-center gap-1.5 text-sm text-white/40 mb-6 flex-wrap"
          >
            <Link
              to="/case-study"
              className="hover:text-white/70 transition-colors"
            >
              Case Studies
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Design-A-Thon 1.0 & 2.0</span>
          </motion.nav>

          <motion.span
            variants={fadeUp}
            className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(158,225,6,0.15)", color: "#9ee106" }}
          >
            Virtual Event Growth
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-[1.1]"
          >
            How We Generated 1,000+ Registrations in Under 12 Days; Twice.
            Without Ads.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/50"
          >
            Design-A-Thon 1.0 & 2.0
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Metrics Bar */}
    <section className="bg-[hsl(252,100%,6%)] py-12 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-lg md:text-xl text-[hsl(79,95%,45%)] mb-1">
                {m.value}
              </p>
              <p className="text-xs text-white/60">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Hero Images — Stacked */}
<section className="bg-[hsl(252,100%,6%)] pb-12 md:pb-16">
  <div className="container mx-auto max-w-4xl space-y-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden"
    >
      <img
        src="/assets/design-a-thon-overview-1.jpg"
        alt="Design-A-Thon 1.0"
        className="w-full h-72 object-cover"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="rounded-2xl overflow-hidden"
    >
      <img
        src="/assets/design-a-thon-overview-2.jpg"
        alt="Design-A-Thon 2.0"
        className="w-full h-72 object-cover"
      />
    </motion.div>
  </div>
</section>
    
    {/* Main Content */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[760px] space-y-16">
        {/* Overview */}
        <AnimatedSection>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-4">
            Designerthon is a 12-hour non-stop virtual design exhibition, where
            top designers share their live process, tools, and real-world
            workflows with a growing community of creatives.
          </p>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-4">
            The goal was clear: build authority, attract a large audience,
            deliver real value, and convert attention into revenue.
          </p>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            And it worked; not once, but twice.
          </p>
          <div className="mt-8 space-y-4">
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl overflow-hidden"
  >
    <img
      src="/images/design-a-thon-overview-1.jpg"
      alt="Design-A-Thon Overview"
      className="w-full h-64 object-cover"
    />
  </motion.div>
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.15 }}
    className="rounded-2xl overflow-hidden"
  >
    <img
      src="/images/design-a-thon-overview-2.jpg"
      alt="Design-A-Thon Overview"
      className="w-full h-64 object-cover"
    />
  </motion.div>
</div>
        </AnimatedSection>

        {/* The Challenge */}
        <AnimatedSection>
          <SectionLabel>The Challenge</SectionLabel>
          <div className="space-y-4">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-l-[3px] border-[hsl(0,100%,44%)] pl-5 py-3 bg-[hsl(0,100%,44%)]/5 rounded-r-xl"
              >
                <p className="text-[hsl(252,100%,6%)]/80 text-sm leading-relaxed">
                  {c}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Event Details */}
        <AnimatedSection>
          <SectionLabel>Execution Details</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {executionDetails.map((d) => (
              <div key={d.label} className="py-2">
                <p className="text-xs uppercase tracking-wider text-[hsl(252,100%,6%)]/50 mb-1">
                  {d.label}
                </p>
                <p className="text-[hsl(252,100%,6%)] font-semibold">
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Strategy */}
        <AnimatedSection>
          <SectionLabel>The Strategy</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-8">
            EventFlow implemented a high-intensity organic event growth system
            focused on four pillars. The entire campaign was designed to move
            fast, spread wide, and convert hard — all without spending a single
            naira on ads.
          </p>
          <div className="space-y-6">
            {approaches.map((a, i) => (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(1,5,202,0.12)",
                  borderTop: "3px solid hsl(237,99%,40%)",
                  boxShadow: "0 4px 24px rgba(1,5,202,0.06)",
                }}
              >
                <span className="font-display text-3xl text-[hsl(237,99%,40%)]/20 block mb-2">
                  {a.num}
                </span>
                <h3 className="font-display text-lg md:text-xl text-[hsl(252,100%,6%)] mb-3">
                  {a.title}
                </h3>
                <p className="text-[hsl(252,100%,6%)]/70 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Results */}
    <section className="bg-[hsl(252,100%,6%)] py-16 md:py-24">
      <div className="container mx-auto max-w-[760px]">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 text-center">
            The Results
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
            Achieved organically, twice consecutively; proving this is a
            repeatable system, not luck.
          </p>

          {/* Registration */}
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(79,95%,45%)] mb-6 text-center">
              Registration
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
              {[
                { value: "1,000+", label: "Registrations (Edition 1)" },
                { value: "1,000+", label: "Registrations (Edition 2)" },
                { value: "₦0", label: "Ad Spend" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center"
                >
                  <p className="font-display text-4xl md:text-5xl text-[hsl(79,95%,45%)] mb-2">
                    {s.value}
                  </p>
                  <p className="text-white/60 text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Attendance & Conversion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Attendance",
                stats: [
                  { value: "300–400", label: "Live Attendees Per Edition" },
                  { value: "12 hrs", label: "Sustained Engagement" },
                ],
              },
              {
                title: "Conversion",
                stats: [
                  { value: "Hundreds", label: "Product Sales Post-Event" },
                  { value: "2x", label: "Consecutive Editions" },
                ],
              },
            ].map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.2 }}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(79,95%,45%)] mb-4">
                  {group.title}
                </p>
                {group.stats.map((s) => (
                  <div key={s.label} className="mb-3">
                    <p className="font-display text-2xl text-white mb-0.5">
                      {s.value}
                    </p>
                    <p className="text-white/50 text-xs">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* What Made This Work + Key Insight + CTA */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[760px] space-y-16">
        {/* What Made This Work */}
        <AnimatedSection>
          <SectionLabel>What Made This Work</SectionLabel>
          <div className="space-y-6">
            {whatMadeItWork.map((a, i) => (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(1,5,202,0.12)",
                  borderTop: "3px solid hsl(237,99%,40%)",
                  boxShadow: "0 4px 24px rgba(1,5,202,0.06)",
                }}
              >
                <span className="font-display text-3xl text-[hsl(237,99%,40%)]/20 block mb-2">
                  {a.num}
                </span>
                <h3 className="font-display text-lg md:text-xl text-[hsl(252,100%,6%)] mb-3">
                  {a.title}
                </h3>
                <p className="text-[hsl(252,100%,6%)]/70 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Insight */}
        <AnimatedSection>
          <div
            className="border-l-[3px] border-[hsl(237,99%,40%)] pl-6 py-4 rounded-r-xl"
            style={{ background: "rgba(1,5,202,0.04)" }}
          >
            <SectionLabel>Key Insight</SectionLabel>
            <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-4">
              This wasn't just "posting content." It was a structured system for
              attracting attention, building anticipation, and driving action.
            </p>
            <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-4">
              If you run a community, want to host a virtual event, want to
              generate leads, or want to build authority; this proves you don't
              need months, and you don't need ads.
            </p>
            <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed font-semibold">
              You need the right system.
            </p>
          </div>
        </AnimatedSection>

        {/* Footer note */}
        <p className="text-center text-xs italic text-[hsl(252,100%,6%)]/30">
          This project was executed by the same creative team that now operates
          as EventFlow.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[hsl(237,99%,40%)]/20 blur-[100px]" />
      </div>
      <div className="container mx-auto text-center relative z-10 max-w-2xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Want to Fill Your Virtual Event Like This?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            EventFlow helps creators, communities, and organizations attract
            large audiences, structure their events, and convert attention into
            results; organically.
          </p>
          <a
            href={STRATEGY_EMAIL}
            className="inline-flex items-center gap-2 bg-[hsl(0,100%,44%)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(223,0,0,0.4)]"
          >
            Book a Strategy Call Now
          </a>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default CaseStudyDesignAThon;
