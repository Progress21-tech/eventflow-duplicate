import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Camera, ExternalLink } from "lucide-react";
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
  { value: "30+", label: "Registrations" },
  { value: "₦150,000", label: "Ticket Price" },
  { value: "25+", label: "Design Assets" },
  { value: "50", label: "Days Campaign Prep" },
];

const challenges = [
  "High-ticket workshops require strong brand credibility to convert registrations.",
  "The event needed a cohesive visual identity across digital and physical assets.",
  "Without strong branding and design consistency, premium events often struggle to communicate value to potential attendees.
",
];

const approaches = [
  {
    num: "01",
    title: "Event Branding System",
    desc: "The first step was developing a distinct brand identity for the event, ensuring that all marketing materials reflected the premium nature of the bootcamp.This included:event logo and visual identity consistent design language across materials premium visual styling aligned with the financial theme This foundation ensured that every promotional asset looked cohesive and professional.",
  },
  {
    num: "02",
    title: "Digital Promotional Assets",
    desc: "The EventFlow team produced a wide range of digital promotional materials to support online marketing campaigns. Assets included: Social media promo flyers Speaker announcement graphics Countdown campaign creatives Carousel posts Personalized “I’ll be attending” graphics for registered participants. In total, 25+ social media graphics were created to sustain consistent promotion across platforms. These assets were used across: Instagram, WhatsApp, Facebook",
  },
  {
    num: "03",
    title: "Physical Event Experience Design",
    desc: "Beyond digital promotion, EventFlow designed several print and on-site experience materials to ensure the event environment matched the premium branding.These included: Stage backdrop design Roll-up banners Red carpet banner Souvenir bags Branded jotters Wristbands Table tent designs (30+ units) The goal was to ensure that every touchpoint; from the entrance to the session tables, reinforced the event’s brand identity.",
  },
];

const testimonials = [
  {
    quote:
      "Having Tochi on board was a game changer for that project. His designs were instrumental in helping me record the highest number of participants for my bootcamp.",
    name: "Nathanael Disu",
    role: "Convener",
  },
  {
    quote:
      "I've worked with a lot of designers in the course of my work, but working with Tochi again on my physical bootcamp was a great decision. His designs were amazing and instrumental to the success of the event. Without his work, I might not have been able to achieve that level of success.",
    name: "Nathanael Disu",
    role: "Convener",
  },
  {
    quote:
      "I stressed him, but he really delivered. The work we did together was mind-blowing. You should work with him, he's someone who delivers optimally in his job.",
    name: "Nathanael Disu",
    role: "Convener",
  },
  {
    quote:
      "Someone saw one of the designs and that's how they reached out and paid for the bootcamp. Thank you so much.",
    name: "Smilepreneur",
    role: "Event Manager",
  },
];

const usefulLinks = [
  {
    label: "View Event Photos",
    url: "https://drive.google.com/drive/folders/1NA891_UcTxJA55-ggMpqyE6zspxNpxL5",
  },
  {
    label: "View Design Presentation",
    url: "https://drive.google.com/drive/folders/14648CigLqpknFV3qQBDiB_AGlCcGum9u",
  },
  {
    label: "View Testimonial Materials",
    url: "https://drive.google.com/drive/folders/1MLl4shuvKTIEkK-Fmpnrd2715Rfn9bkO",
  },
];

const eventDetails = [
  { label: "Event", value: "How To Retire Young & Rich Bootcamp" },
  { label: "Location", value: "Lagos, Nigeria" },
  { label: "Format", value: "Physical Workshop" },
  { label: "Ticket Price", value: "₦150,000" },
  { label: "Campaign Prep", value: "50 Days" },
];

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(237,99%,40%)] mb-4">
    {children}
  </p>
);

const CaseStudyRetireYoungRich = () => (
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
            <span className="text-white/60">How To Retire Young & Rich</span>
          </motion.nav>

          <motion.span
            variants={fadeUp}
            className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(158,225,6,0.15)", color: "#9ee106" }}
          >
            Event Branding
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-[1.1]"
          >
            How Strategic Event Branding Helped a ₦150,000 High-Ticket Bootcamp
            Surpass Attendance Targets
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/50"
          >
            How To Retire Young & Rich Bootcamp · Lagos, Nigeria
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
          {/* TODO: Replace with actual event photo — upload to src/assets/cases/retire-young-rich/ */}
          <div
            className="w-full h-[220px] md:h-[400px] rounded-2xl flex flex-col items-center justify-center gap-3"
            style={{ background: "linear-gradient(135deg, #09001d, #0105ca)" }}
          >
            <Camera size={32} className="text-white/30" />
            <span className="text-white/30 text-sm">
              Event photos coming soon
            </span>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            The How To Retire Young & Rich Bootcamp is a premium financial education workshop designed to help participants understand investing, wealth creation, and long-term financial
            independence.
          </p><br/>
          
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            The bootcamp had been hosted several times previously, but the organizers wanted this
            edition to elevate the brand experience and attract stronger engagement for a high-ticket
            audience.
          </p><br/>
          
           <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            The EventFlow team was brought in to develop the complete visual and branding system for
            the event, ensuring that every promotional and physical asset communicated a premium,
            credible, and professional experience.
          </p><br/>
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
                className="rounded-2xl p-6 md:p-8 border-t-[3px] border-[hsl(237,99%,40%)]"
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
              { value: "30+", label: "Registrations" },
              { value: "~30", label: "Physical Attendees" },
              { value: "₦150,000", label: "Ticket Price" },
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
            The bootcamp surpassed its attendance targets, with over 30
            registrations for a ₦150,000-per-ticket event. The quality of the
            branding directly contributed to conversions; with at least one
            attendee explicitly stating they signed up after seeing one of the
            designs.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Impact + Testimonials + Key Takeaway + Links */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[760px] space-y-16">
        {/* Impact */}
        <AnimatedSection>
          <SectionLabel>Impact</SectionLabel>
          <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
            The branding work done for How To Retire Young & Rich didn't just
            make the event look good; it became a core driver of ticket sales
            and credibility. Premium visual identity gave attendees confidence
            that the event would deliver real value, and the consistency across
            all touchpoints created a seamless brand experience from first
            impression to post-event follow-up.
          </p>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection>
          <SectionLabel>Testimonials</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(1,5,202,0.12)",
                  boxShadow: "0 4px 24px rgba(1,5,202,0.06)",
                }}
              >
                <span className="font-display text-4xl text-[hsl(237,99%,40%)]/20 block mb-2">
                  "
                </span>
                <p className="text-[hsl(252,100%,6%)]/80 text-sm leading-relaxed mb-4">
                  {t.quote}
                </p>
                <p className="text-[hsl(252,100%,6%)] font-bold text-sm">
                  {t.name}
                </p>
                <p className="text-[hsl(252,100%,6%)]/50 text-xs">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Takeaway */}
        <AnimatedSection>
          <div
            className="border-l-[3px] border-[hsl(237,99%,40%)] pl-6 py-4 rounded-r-xl"
            style={{ background: "rgba(1,5,202,0.04)" }}
          >
            <SectionLabel>Key Takeaway</SectionLabel>
            <p className="text-[hsl(252,100%,6%)]/80 leading-relaxed">
              For high-ticket events, branding isn't a nice-to-have; it's a
              revenue driver. When your visual identity matches the value of
              your offer, it builds the trust and credibility needed to convert
              high-value ticket sales. Professional, consistent event branding
              can be the difference between an event that fills and one that
              falls short.
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
            Planning a High-Impact Event?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Whether you're organizing a conference, bootcamp, workshop, or
            premium training event, strong branding and marketing systems can
            dramatically improve your event's visibility and credibility.
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

export default CaseStudyRetireYoungRich;
