import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

{/* Import Images*/}
import eventPhoto from "@/assets//event2.jpg";

{/* Import Videos*/}
import youthVideo from "@/assets/youthequipbootcamp.mp4";

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
  "No existing audience base.",
  "Zero public awareness of the event.",
  "Tight marketing budget.",
  "Limited time to promote.",
  "The need to attract hundreds of young participants in a new location.",
];

const approaches = [
  {
    num: "01",
    title: "Strategic Audience Mobilization",
    desc: "Campus ambassadors were recruited to help promote the event across student communities. These ambassadors helped spread awareness organically within universities and student networks.",
  },
  {
    num: "02",
    title: "Digital Promotion Infrastructure",
    desc: "EventFlow built the digital infrastructure required to capture and nurture interest. This included: Landing page for event information, Online registration form, WhatsApp funnel for communication, Automated follow-ups and reminders. This ensured that every interested participant moved smoothly from awareness → registration → attendance.",
  },
  {
    num: "03",
    title: "Multi-Channel Promotion",
    desc: "The campaign used several coordinated channels to amplify visibility. Primary channels included: WhatsApp communities, Instagram promotion, Campus ambassador networks, Branded promo creatives, Strategic partnerships. This combination created both online reach and on-ground momentum.",
  },
];

const executionRoles = [
  "Design and visual creatives",
  "Video production",
  "Content creation",
  "Social media management",
  "Marketing coordination",
  "Project management",
  "Community management",
  "Registration management",
  "Logistics and operations",
];

const eventExperienceProgram = [
  "Keynote presentations",
  "Skill-focused sessions",
  "Q&A discussions",
  "Networking opportunities",
];

const eventExperienceSpeakers = [
  "Marketing",
  "Leadership",
  "Design",
  "Video production",
  "Artificial intelligence",
];

const postEventImpact = [
  "Participants shared numerous testimonials about the value gained.",
  "New partnerships emerged.",
  "A community of engaged participants continued interacting after the bootcamp.",
];

const metricsTable = [
  { metric: "Campaign Duration", outcome: "5 Weeks" },
  { metric: "Marketing Push", outcome: "2 Weeks" },
  { metric: "Total Registrations", outcome: "800+" },
  { metric: "Estimated Attendance", outcome: "~500" },
  { metric: "Venue Capacity", outcome: "300 (overflow)" },
  { metric: "Primary Channels", outcome: "Instagram, WhatsApp, On-campus" },
  { metric: "Ticket Price", outcome: "Free" },
  { metric: "Design Assets Produced", outcome: "30+" },
];

const eventDetails = [
  { label: "Event", value: "Youth Equip Bootcamp" },
  { label: "Location", value: "Nsukka, Enugu State." },
  { label: "Venue Capacity", value: "300 seats" },
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
    <section className="bg-[hsl(252,100%,6%)] py-6 md:py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-2xl md:text-3xl text-[hsl(79,95%,45%)] mb-1">
                {m.value}
              </p>
              <p className="text-xs md:text-sm text-white/60">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Main Content */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[760px] space-y-16">
        <AnimatedSection>
          <img
            src={eventPhoto}
            alt="Youth Equip Bootcamp Event"
            className="w-full h-[220px] md:h-[400px] rounded-2xl object-cover"
          />
        </AnimatedSection>

        <AnimatedSection>
         <div className="w-full h-[400px] rounded-2xl overflow-hidden">
  <video
    src={youthVideo}
    autoPlay
    muted
    loop
    controls
    playsInline
    className="w-full h-full object-cover object-[center_40%] rounded-2xl"
  >
  </video>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-8">
            <strong>The Youth Equip Bootcamp</strong> was designed as a
            transformational learning experience for young people seeking
            clarity, practical skills, and mentorship for building meaningful
            careers and businesses.
          </p>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-8">
            However, when the event planning began, it faced a major challenge:{" "}
            <strong>
              it was a first-time event with zero awareness and limited budget.
            </strong>
          </p>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-8">
            EventFlow stepped in to structure the marketing, build the audience
            pipeline, and coordinate the execution from promotion to event-day
            experience.
          </p>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-8">
            The result:{" "}
            <strong>a completely filled venue with overflow attendance.</strong>
          </p>
        </AnimatedSection>

        {/* The Challenge */}
        <AnimatedSection>
          <SectionLabel>The Challenge</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-6">
            Before the campaign started, the event faced several obstacles:
          </p>
          <div className="space-y-4 mb-6">
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
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            The event also required strong coordination between multiple teams
            to ensure that registration, communication, logistics, and marketing
            worked together seamlessly.
          </p>
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
          <SectionLabel>Eventflow Approach</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-8">
            To address the awareness gap and maximize attendance within the
            limited timeframe, EventFlow implemented a multi-channel event
            growth strategy. The strategy focused on three pillars:
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

    {/* Execution Team */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[760px] space-y-16">
        <AnimatedSection>
          <SectionLabel>Execution Team</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-6">
            EventFlow coordinated a multidisciplinary execution team consisting
            of about 15 core members, excluding additional volunteers.
          </p>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-6">
            Key roles included:
          </p>
          <div className="space-y-3 mb-8">
            {executionRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(237,99%,40%)] flex-shrink-0" />
                <p className="text-[hsl(252,100%,6%)]/80 text-sm">{role}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            This integrated team ensured that every aspect of the event
            experience was structured and professionally managed.
          </p>
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
          <p className="text-white/60 leading-relaxed max-w-xl mx-auto mb-6">
            The bootcamp exceeded all expectations; generating over 800
            registrations and approximately 500 physical attendees for a venue
            with a 300-seat capacity. The event reached overflow status,
            validating the effectiveness of the marketing strategy and brand
            execution.
          </p>
          {/* Additional result details from document */}
          <div className="text-left max-w-xl mx-auto space-y-3 mt-8">
            {[
              "300-seat hall completely filled.",
              "100 additional seats rented.",
              "Additional attendees standing due to demand.",
            ].map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(79,95%,45%)] flex-shrink-0" />
                <p className="text-white/70 text-sm">{detail}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Event Experience */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[760px] space-y-16">
        <AnimatedSection>
          <SectionLabel>Event Experience</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-6">
            Participants experienced a highly engaging program that included:
          </p>
          <div className="space-y-3 mb-8">
            {eventExperienceProgram.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(237,99%,40%)] flex-shrink-0" />
                <p className="text-[hsl(252,100%,6%)]/80 text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-6">
            Speakers represented multiple professional fields, including:
          </p>
          <div className="space-y-3 mb-8">
            {eventExperienceSpeakers.map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(237,99%,40%)] flex-shrink-0" />
                <p className="text-[hsl(252,100%,6%)]/80 text-sm">{field}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            The seamless registration process and structured program flow
            ensured a smooth experience for attendees.
          </p>
        </AnimatedSection>

        {/* Post-Event Impact */}
        <AnimatedSection>
          <SectionLabel>Post-Event Impact</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed mb-6">
            Following the event:
          </p>
          <div className="space-y-4 mb-6">
            {postEventImpact.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-l-[3px] border-[hsl(237,99%,40%)] pl-5 py-3 bg-[hsl(237,99%,40%)]/5 rounded-r-xl"
              >
                <p className="text-[hsl(252,100%,6%)]/80 text-sm leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            The event successfully delivered on its goal of equipping young
            people with practical knowledge, direction, and professional
            connections.
          </p>
        </AnimatedSection>

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
              Even with zero initial awareness and a tight budget, a
              well-structured event marketing strategy can rapidly mobilize an
              audience and deliver a high-impact experience. Through strategic
              promotion, digital funnels, and coordinated execution, EventFlow
              helped transform the Youth Equip Bootcamp from an uncertain launch
              into a fully attended and highly engaging event.
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
