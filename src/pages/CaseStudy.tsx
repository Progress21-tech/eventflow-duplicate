import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

// Import your actual images
import retireYoungImage from "@/assets/retire-young.jpg";
import youthEquipImage from "@/assets/youth-equip.jpg";
import designAThonImage from "@/assets/design-a-thon-overview-1.jpg"; // ✅ add your actual image here

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

const caseStudies = [
  {
    slug: "retire-young-rich",
    category: "Event Branding",
    event: "How To Retire Young & Rich Bootcamp",
    headline:
      "How Strategic Event Branding Helped a ₦150,000 High-Ticket Bootcamp Surpass Attendance Targets",
    location: "Lagos, Nigeria · Physical Workshop",
    results: ["30+ Registrations", "₦150,000 Ticket Price", "25+ Design Assets"],
    image: retireYoungImage,
  },
  {
    slug: "youth-equip-bootcamp",
    category: "Event Marketing",
    event: "Youth Equip Bootcamp",
    headline:
      "Filling a 300-Seat Bootcamp to Overflow Capacity in Just 5 Weeks",
    location: "Nsukka, Nigeria · Physical Bootcamp",
    results: ["800+ Registrations", "~500 Attendees", "5 Week Campaign"],
    image: youthEquipImage,
  },
  {
    slug: "design-a-thon",
    category: "Virtual Event Growth",
    event: "Design-A-Thon 1.0 & 2.0",
    headline:
      "How We Generated 1,000+ Registrations in Under 12 Days — Twice. Without Ads.",
    location: "Virtual · 12-Hour Livestream",
    results: ["1,000+ Registrations", "₦0 Ad Spend", "2 Consecutive Editions"],
    image: designAThonImage,
  },
];

const CaseStudy = () => (
  <PageLayout>
    {/* Hero */}
    <section className="gradient-hero min-h-[50vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[hsl(237,99%,40%)]/20 blur-[120px]" />
      </div>
      <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-20 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center">
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl text-white mb-4"
          >
            Case Studies
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Real strategies. Real events. Real results.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Case Study Cards */}
    <section className="bg-[hsl(0,0%,90%)] py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              // Make the third card span full width on md+
              className={caseStudies.length % 2 !== 0 && i === caseStudies.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-16px)] md:mx-auto w-full" : ""}
            >
              <Link
                to={`/case-study/${cs.slug}`}
                className="block rounded-[1.25rem] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(1,5,202,0.15)] group"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(1,5,202,0.12)",
                  boxShadow: "0 4px 24px rgba(1,5,202,0.06)",
                }}
              >
                {/* Event photo */}
                <div className="relative w-full h-[220px] overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.event}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  {/* Category badge */}
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[hsl(79,95%,45%)]/100 text-[hsl(252,100%,6%)] mb-3">
                    {cs.category}
                  </span>

                  {/* Event name */}
                  <p className="text-sm font-medium text-[hsl(237,99%,40%)] mb-1">{cs.event}</p>

                  {/* Headline */}
                  <h2 className="font-display text-xl md:text-2xl text-[hsl(252,100%,6%)] mb-3 leading-tight">
                    {cs.headline}
                  </h2>

                  {/* Location */}
                  <p className="flex items-center gap-1.5 text-sm text-[hsl(252,100%,6%)]/50 mb-4">
                    <MapPin size={14} />
                    {cs.location}
                  </p>

                  {/* Result pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.results.map((r) => (
                      <span
                        key={r}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[hsl(252,100%,6%)]/70 bg-[hsl(252,100%,6%)]/5 px-3 py-1.5 rounded-full"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(79,95%,45%)]" />
                        {r}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(237,99%,40%)] group-hover:underline">
                    Read Case Study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[hsl(237,99%,40%)]/20 blur-[100px]" />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Want to Be Our Next Success Story?
          </h2>
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

export default CaseStudy;
