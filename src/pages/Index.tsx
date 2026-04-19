import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import FAQSection from "@/components/FAQSection";

// Import case study images
import retireYoungImage from "@/assets/retire-young.jpg";
import youthEquipImage from "@/assets/youth-equip.jpg";
import designAThonImage from "@/assets/design-a-thon-overview-1.jpg";

//Import Social Proofs Logos of Companies that have been worked with
import logo1 from "@/assets/logo1-removed-bg.png";
import logo2 from "@/assets/logo2-removed-bg.png";
import logo3 from "@/assets/logo3-removed-bg.png";

const logos = [logo1, logo2, logo3];
const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

const STRATEGY_EMAIL =
  "mailto:team.eventflow@gmail.com?subject=Strategy%20Call%20Request";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    title: "Event Marketing & Promotion",
    desc: "End-to-end marketing strategies to drive visibility and registrations.",
  },
  {
    title: "Social Media Management for Events",
    desc: "Consistent social presence with conversion-driven content.",
  },
  {
    title: "Design, Video & Creative Production",
    desc: "High-quality visuals that capture attention and communicate value.",
  },
  {
    title: "Event Websites & Sales Pages",
    desc: "Conversion-focused landing pages that turn visitors into registrants.",
  },
  {
    title: "Marketing Automation & WhatsApp Funnels",
    desc: "Automated funnels for follow-ups, reminders, and conversions.",
  },
  {
    title: "Event Advertising Campaigns",
    desc: "Targeted ad campaigns across digital platforms for maximum reach.",
  },
  {
    title: "Community & Attendee Management",
    desc: "Engagement strategies and post-event follow-up systems.",
  },
];

const painPoints = [
  "Struggling to get visibility for your event",
  "Low registrations despite promotion",
  "Scattered tools and messy workflows",
  "No system for follow-up, reminders, and engagement",
  "Overwhelmed teams and inconsistent execution",
];

const audiences = [
  "Event organizers",
  "Conference & summit hosts",
  "Bootcamp & workshop creators",
  "Corporate event teams",
  "Community managers",
  "Educational platforms & tech communities",
];

const whyPoints = [
  "Event-specific marketing expertise",
  "Strategy + execution in one team",
  "Automation-driven workflows",
  "Conversion-focused landing pages",
  "Scalable systems for repeated events",
  "Built for African markets, ready for global scale",
];

const rotatingWords = [
  "Events",
  "Conferences",
  "Bootcamps",
  "Summits",
  "Workshops",
];

// Case Studies data
const caseStudies = [
  {
    title: "How to Retire Young and Rich Bootcamp",
    image: retireYoungImage,
    link: "/case-study/retire-young-rich",
  },
  {
    title: "Youth Equip Bootcamp",
    image: youthEquipImage,
    link: "/case-study/youth-equip-bootcamp",
  },
  {
    title: "Design-A-Thon 1.0 & 2.0",
    image: designAThonImage,
    link: "/case-study/design-a-thon",
  },
];
const Index = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventMode: "",
    budget: "",
    description: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will reach out within 12 hours.");
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        {/* Hero background image layer */}
        <motion.div
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 0.2, scale: 1.06 }}
          transition={{
            opacity: { duration: 2, ease: "easeIn" },
            scale: { duration: 8, ease: "easeOut" },
          }}
          className="absolute inset-0 z-[1] md:animate-none"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "luminosity",
          }}
        />
        {/* Dark gradient overlay on top of image */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(135deg, rgba(9,0,29,0.85) 0%, rgba(1,5,202,0.6) 100%)",
          }}
        />
        {/* Mobile: stronger overlay for readability */}
        <div
          className="absolute inset-0 z-[2] md:hidden"
          style={{
            background: "rgba(9,0,29,0.12)",
          }}
        />
        <div className="absolute inset-0 opacity-20 z-[3]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ef-blue/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-ef-blue/10 blur-[100px]" />
        </div>
        <div className="container mx-auto pt-28 pb-20 md:pt-36 md:pb-28 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              The Smart Way to Run{" "}
              <span className="inline-block min-w-[200px] md:min-w-[340px] text-left align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block text-[#9ee106]"
                    style={{ textShadow: "0 0 30px rgba(158,225,6,0.4)" }}
                  >
                    {rotatingWords[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-white/80 font-light mb-4"
            >
              Plan, promote, and scale your events with less chaos and more
              flow.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/60 max-w-2xl mb-8"
            >
              EventFlow helps event organizers, brands, and communities run
              high-performing events with modern marketing, automation, and
              execution support.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a href={STRATEGY_EMAIL}>
                <CTAButton variant="primary">Book a Strategy Call</CTAButton>
              </a>
              <Link to="/services">
                <CTAButton variant="ghost">Explore Our Services</CTAButton>
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-white/40">
              Trusted by event organizers, brands, and communities across
              Africa.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Showcase */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 md:px-8 mb-6">
    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[hsl(237,99%,40%)]">
      Case Studies
    </p>
  </div>
  <div
    className="flex gap-6 overflow-x-scroll no-scrollbar pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]"
    style={{ scrollSnapType: "x mandatory" }}
  >
    {caseStudies.map((study, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
        style={{
          width: "80vw",
          maxWidth: "500px",
          height: "420px",
          scrollSnapAlign: "start",
        }}
      >
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Title top-left */}
        <h2 className="absolute top-4 left-4 text-white text-xl font-bold drop-shadow-lg pr-4">
          {study.title}
        </h2>

        {/* CTA bottom-left */}
        <Link
          to={study.link}
          className="absolute bottom-4 left-4 px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-[hsl(237,99%,40%)]"
          style={{
            border: "2px solid white",
            color: "white",
            background: "transparent",
          }}
        >
          View Case Study
        </Link>
      </motion.div>
    ))}
  </div>
</section>

      {/* Social Proof Marquee */}
<section className="bg-ef-grey py-10 overflow-hidden">
  <AnimatedSection>
    <p className="text-center text-sm text-ef-navy/60 font-medium mb-8 px-4">
      Powering growth for bootcamps, conferences, workshops, launches, and
      corporate events.
    </p>
  </AnimatedSection>
  <div className="relative overflow-hidden">
    <div className="flex marquee-track w-max">
      {marqueeLogos.map((logo, i) => (
        <div
          key={i}
          className="flex-shrink-0 mx-10 w-40 h-16 flex items-center justify-center"
        >
          <img
            src={logo}
            alt={`client logo ${i + 1}`}
            className="max-h-14 max-w-[150px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Problem → Solution */}
      <section className="bg-ef-navy py-20 md:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Running Events Is Hard. EventFlow Makes It Flow.
            </h2>
            <div className="text-white/70 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Promoting an event shouldn't feel chaotic. Managing content,
                marketing, landing pages, ads, automations, registrations, and
                follow-ups often becomes overwhelming; especially when you're
                trying to focus on delivering a great event experience.
              </p>
              <p>EventFlow exists to remove that complexity.</p>
              <p>
                We help you design, market, and operate your event like a modern
                brand; with systems, structure, and strategy that actually
                convert attention into attendance.
              </p>
            </div>
          </AnimatedSection>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {painPoints.map((point) => (
              <motion.div
                key={point}
                variants={fadeUp}
                className="glass-card rounded-full px-5 py-3 flex items-center gap-2 glow-border-blue"
              >
                <X size={14} className="text-ef-red flex-shrink-0" />
                <span className="text-white/80 text-sm">{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="bg-ef-grey py-20 md:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-ef-navy mb-4">
              Everything You Need to Launch and Scale High-Impact Events
            </h2>
            <p className="text-ef-navy/70 text-base md:text-lg max-w-2xl mx-auto">
              We combine marketing, design, automation, and operational support
              into one seamless flow.
            </p>
          </AnimatedSection>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                className="bg-ef-navy rounded-xl p-6 border-l-4 border-ef-blue relative group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(1,5,202,0.2)]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-ef-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-3 h-3 rounded-full bg-ef-lime mb-4" />
                  <h3 className="font-display text-base text-white mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-white/50 text-sm">{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <Link to="/services">
              <CTAButton variant="ghost-blue">
                View Our Services <ChevronRight size={16} />
              </CTAButton>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-ef-navy mb-4">
              From Idea to Impact; In 3 Simple Steps
            </h2>
            <p className="text-ef-navy/70 text-base md:text-lg max-w-2xl mx-auto">
              A simple, structured process built to get your event seen,
              registered, and remembered.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                num: "01",
                title: "Strategy & Planning",
                desc: "We align on your event goals, audience, and growth targets.",
              },
              {
                num: "02",
                title: "Execution & Marketing",
                desc: "We design your pages, content, creatives, funnels, and campaigns.",
              },
              {
                num: "03",
                title: "Scale & Optimize",
                desc: "We track performance, improve conversions, and help you grow attendance.",
              },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="text-center md:text-left">
                  <span className="font-display text-5xl text-ef-blue/40 block mb-3">
                    {step.num}
                  </span>
                  <h3 className="font-display text-lg text-ef-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ef-navy/60 text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <a href={STRATEGY_EMAIL}>
              <CTAButton variant="primary">
                Start With a Strategy Call
              </CTAButton>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-ef-navy py-20 md:py-28">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Built for Modern Event Teams
            </h2>
            <p className="text-white/70 mb-10">EventFlow supports:</p>
          </AnimatedSection>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-10"
          >
            {audiences.map((a) => (
              <motion.span
                key={a}
                variants={fadeUp}
                className="glass-card text-ef-lime text-sm px-5 py-2.5 rounded-full"
              >
                {a}
              </motion.span>
            ))}
          </motion.div>
          <AnimatedSection delay={0.3}>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              If your event depends on visibility, registrations, and
              engagement; EventFlow is for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why EventFlow */}
      <section className="gradient-subtle py-20 md:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Why Teams Choose EventFlow
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              We're not a generic agency. We're built specifically for events.
            </p>
          </AnimatedSection>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
          >
            {whyPoints.map((point) => (
              <motion.div
                key={point}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <Check
                  size={18}
                  className="text-ef-lime flex-shrink-0 mt-0.5"
                />
                <span className="text-white/80 text-sm">{point}</span>
              </motion.div>
            ))}
          </motion.div>
          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <p className="text-white/40 text-sm italic">
              We don't just "promote events." We build event growth systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta py-20 md:py-28">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Ready to Run Your Next Event With Flow?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Let's design a marketing and execution system that turns attention
              into attendance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={STRATEGY_EMAIL}>
                <CTAButton variant="primary">Book a Strategy Call</CTAButton>
              </a>
              <Link to="/services">
                <CTAButton variant="ghost">Explore Our Services</CTAButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-ef-navy py-20 md:py-28">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Not Ready to Book a Call Yet?
            </h2>
            <p className="text-white/70">
              Tell us about your event and our team will reach out with next
              steps within 12 hours.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-10 space-y-5"
            >
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-white/70 text-sm mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-ef-blue focus:shadow-[0_0_10px_rgba(1,5,202,0.3)] transition-all"
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                  />
                </div>
              ))}
              <div>
                <label className="text-white/70 text-sm mb-2 block">
                  Event Type
                </label>
                <select
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-ef-blue focus:shadow-[0_0_10px_rgba(1,5,202,0.3)] transition-all"
                  value={formData.eventType}
                  onChange={(e) =>
                    setFormData({ ...formData, eventType: e.target.value })
                  }
                >
                  <option value="" className="bg-ef-navy">
                    Select event type
                  </option>
                  {[
                    "Conference",
                    "Concert",
                    "Bootcamp",
                    "Exhibition",
                    "Workshop/Training",
                    "Corporate Event",
                  ].map((t) => (
                    <option key={t} value={t} className="bg-ef-navy">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-white/70 text-sm mb-2 block">
                  Expected Event Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-ef-blue focus:shadow-[0_0_10px_rgba(1,5,202,0.3)] transition-all"
                  value={formData.eventDate}
                  onChange={(e) =>
                    setFormData({ ...formData, eventDate: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-white/70 text-sm mb-2 block">
                  Event Mode
                </label>
                <div className="flex gap-4">
                  {["Physical", "Virtual", "Hybrid"].map((mode) => (
                    <label
                      key={mode}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="eventMode"
                        value={mode}
                        checked={formData.eventMode === mode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            eventMode: e.target.value,
                          })
                        }
                        className="accent-ef-blue"
                      />
                      <span className="text-white/70 text-sm">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-white/70 text-sm mb-2 block">
                  Marketing Budget Range
                </label>
                <select
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-ef-blue focus:shadow-[0_0_10px_rgba(1,5,202,0.3)] transition-all"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                >
                  <option value="" className="bg-ef-navy">
                    Select budget range
                  </option>
                  {[
                    "Under ₦100,000",
                    "₦100,000–₦500,000",
                    "₦500,000–₦1,000,000",
                    "₦1,000,000–₦5,000,000",
                    "Above ₦5,000,000",
                  ].map((b) => (
                    <option key={b} value={b} className="bg-ef-navy">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-white/70 text-sm mb-2 block">
                  Event Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your event"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-ef-blue focus:shadow-[0_0_10px_rgba(1,5,202,0.3)] transition-all resize-none"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <CTAButton variant="primary" type="submit" className="w-full">
                Submit Event Details
              </CTAButton>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection />
    </PageLayout>
  );
};

export default Index;
