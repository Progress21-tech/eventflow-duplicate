import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Camera, Play, ExternalLink } from "lucide-react";
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
  { value: "800+", label: "Registrations" },
  { value: "~500", label: "Attendees" },
  { value: "300", label: "Venue Capacity" },
  { value: "5", label: "Weeks Campaign" },
];

const challenges = [
  "Needed to fill a 300-seat venue for a free community bootcamp targeting youth in a university town with limited digital marketing infrastructure.",
  "Had only 5 weeks to build awareness, generate registrations, and create enough momentum for strong physical turnout.",
  "Required a cohesive brand identity and marketing system that could cut through noise on social media and WhatsApp — the primary channels for the target audience.",
];

const approaches = [
  {
    num: "01",
    title: "Bold Visual Identity & Event Branding",
    desc: "Designed a high-energy, youth-focused brand identity for the bootcamp — vibrant colors, bold typography, and dynamic layouts that immediately communicated energy and relevance to the target audience. Every asset was crafted to stop the scroll and spark curiosity.",
  },
  {
    num: "02",
    title: "Multi-Channel Content Strategy",
    desc: "Executed a structured 5-week content rollout across Instagram, WhatsApp, and on-campus channels. Each week had themed content — speaker reveals, countdown graphics, testimonials from past editions, and registration reminders — building momentum toward event day.",
  },
  {
    num: "03",
    title: "Community-Driven Growth Engine",
    desc: "Leveraged WhatsApp groups, campus ambassadors, and word-of-mouth amplification to extend reach beyond paid channels. The quality of design assets made them highly shareable, turning registrants into organic promoters.",
  },
];

const metricsTable = [
  { metric: "Total Registrations", outcome: "800+" },
  { metric: "Estimated Attendance", outcome: "~500" },
  { metric: "Venue Capacity", outcome: "300 (overflow)" },
  { metric: "Campaign Duration", outcome: "5 Weeks" },
  { metric: "Primary Channels", outcome: "Instagram, WhatsApp, On-campus" },
  { metric: "Ticket Price", outcome: "Free" },
  { metric: "Design Assets Produced", outcome: "30+" },
];

const usefulLinks = [
  {
    label: "View Behance Presentation",
    url: "https://www.behance.net/gallery/242665667/Event-Branding-Youth-Equip-Bootcamp-Nsukka-Nigeria",
  },
  {
    label: "View Event Photos",
    url: "https://drive.google.com/drive/folders/1E-8SyXB1UIrRb1lgJYI2YK0QtM8sN-NI",
  },
  {
    label: "View Event Trailer",
    url: "https://drive.google.com/file/d/10EoWAAhqk1mWWh5c7gQ6Ke-jKgV4EnH9/view?usp=drivesdk",
  },
];

const eventDetails = [
  { label: "Event", value: "Youth Equip Bootcamp" },
  { label: "Location", value: "Nsukka, Nigeria" },
  { label: "Format", value: "Physical Bootcamp" },
  { label: "Ticket Price", value: "Free" },
  { label: "Campaign Duration", value: "5 Weeks" },
];

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(237,99%,40%)] mb-4">
    {children}
  </p>
);

const CaseStudyYouthEquip = () => (
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
            <span className="text-white/60">Youth Equip Bootcamp</span>
          </motion.nav>

          <motion.span
            variants={fadeUp}
            className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(158,225,6,0.15)", color: "#9ee106" }}
          >
            Event Marketing
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-[1.1]"
          >
            Filling a 300-Seat Bootcamp to Overflow Capacity in Just 5 Weeks
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/50"
          >
            Youth Equip Bootcamp · Nsukka, Nigeria
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
              <p className="font-display text-3xl md:text-4xl text-[hsl(79,95%,45%)] mb-1">
                {m.value}
              </p>
              <p className="text-sm text-white/60">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Main Content */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[760px] space-y-16">
        {/* Image Placeholder */}
        <AnimatedSection>
          <img
            src="/assets/cases/youth-equip/IMG-20251103-WA0087.jpg"
            alt="Youth Equip Bootcamp"
            className="w-full h-[220px] md:h-[400px] rounded-2xl object-cover"
          />
        </AnimatedSection>

        {/* Video Placeholder */}
        <AnimatedSection>
          {/* TODO: Replace with actual video — upload to src/assets/cases/youth-equip/ */}
          <div
            className="w-full h-[220px] md:h-[320px] rounded-2xl flex flex-col items-center justify-center gap-3"
            style={{
              background: "linear-gradient(135deg, #09001d 60%, #0105ca)",
            }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Play size={28} className="text-white/40 ml-1" />
            </div>
            <span className="text-white/30 text-sm">
              Event trailer coming soon
            </span>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            Youth Equip Bootcamp was a free, community-focused physical bootcamp
            held in Nsukka, Nigeria, designed to equip young people with
            practical skills, career guidance, and entrepreneurial knowledge.
            The event aimed to fill a 300-seat venue — a challenging target
            given the location, timeline, and reliance on organic and low-budget
            marketing channels. EventFlow was responsible for all event
            branding, content creation, and marketing execution across the
            5-week campaign.
          </p>
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
          <SectionLabel>Event Details</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventDetails.map((d) => (
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

        {/* Approach */}
        <AnimatedSection>
          <SectionLabel>Our Approach</SectionLabel>
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
      <div className="container mx-auto max-w-[760px] text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-10">
            The Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { value: "800+", label: "Registrations" },
              { value: "~500", label: "Attendees" },
              { value: "Overflow", label: "Turnout" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <p className="font-display text-4xl md:text-5xl text-[hsl(79,95%,45%)] mb-2">
                  {s.value}
                </p>
                <p className="text-white/60 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-white/60 leading-relaxed max-w-xl mx-auto">
            The bootcamp exceeded all expectations — generating over 800
            registrations and approximately 500 physical attendees for a venue
            with a 300-seat capacity. The event reached overflow status,
            validating the effectiveness of the marketing strategy and brand
            execution.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Metrics Table + Impact + Links */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[760px] space-y-16">
        {/* Key Metrics Table */}
        <AnimatedSection>
          <SectionLabel>Key Metrics</SectionLabel>
          <div className="rounded-2xl overflow-hidden border border-[hsl(237,99%,40%)]/12">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[hsl(237,99%,40%)] text-white">
                  <th className="text-left px-5 py-3 font-semibold">Metric</th>
                  <th className="text-left px-5 py-3 font-semibold">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {metricsTable.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={
                      i % 2 === 0 ? "bg-[hsl(252,100%,6%)]/5" : "bg-white"
                    }
                  >
                    <td className="px-5 py-3 text-[hsl(252,100%,6%)]/70">
                      {row.metric}
                    </td>
                    <td className="px-5 py-3 text-[hsl(252,100%,6%)] font-semibold">
                      {row.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Impact */}
        <AnimatedSection>
          <SectionLabel>Impact</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            Youth Equip Bootcamp demonstrated that with the right branding and
            marketing system, even free community events can generate massive
            engagement and attendance. The campaign proved that
            professional-quality design and structured content rollout are not
            luxuries — they are essential tools for any event organizer looking
            to maximize reach and turnout, regardless of budget.
          </p>
        </AnimatedSection>

        {/* Key Takeaway */}
        <AnimatedSection>
          <div
            className="border-l-[3px] border-[hsl(237,99%,40%)] pl-6 py-4 rounded-r-xl"
            style={{ background: "rgba(1,5,202,0.04)" }}
          >
            <SectionLabel>Key Takeaway</SectionLabel>
            <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
              Great events don't fill themselves. Even with a free ticket and a
              compelling topic, reaching and converting your target audience
              requires a structured marketing approach, strong visual branding,
              and consistent execution. The right system can turn a 300-seat
              goal into a 500-person overflow event.
            </p>
          </div>
        </AnimatedSection>

        {/* Useful Links */}
        <AnimatedSection>
          <SectionLabel>Useful Links</SectionLabel>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            {usefulLinks.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[hsl(237,99%,40%)]/30 text-[hsl(237,99%,40%)] text-sm font-semibold transition-all duration-300 hover:bg-[hsl(237,99%,40%)] hover:text-white hover:border-[hsl(237,99%,40%)] min-h-[44px]"
              >
                <ExternalLink size={14} />
                {l.label}
              </a>
            ))}
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
            Planning an Event?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Whether you're organizing a conference, bootcamp, workshop, or
            community event, the difference between an average turnout and a
            packed venue often comes down to the right marketing system.
            EventFlow helps event organizers structure their promotion, build
            audience momentum, and execute successful events from start to
            finish.
          </p>
          <a
            href={STRATEGY_EMAIL}
            className="inline-flex items-center gap-2 bg-[hsl(0,100%,44%)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(223,0,0,0.4)]"
          >
            Book a Strategy Call
          </a>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default CaseStudyYouthEquip;
