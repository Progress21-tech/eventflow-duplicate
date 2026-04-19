import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const STRATEGY_EMAIL = "mailto:team.eventflow@gmail.com?subject=Strategy%20Call%20Request";

const WHATSAPP = "https://api.whatsapp.com/send?phone=2348154356486&text=Hi%20EventFlow%2C%0A%0AI%27m%20interested%20in%20your%20event%20marketing%20services.%0A%0AHow%20do%20we%20get%20started%3F";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const values = [
  { title: "Clarity over chaos", desc: "We design systems that simplify complexity." },
  { title: "Results over noise", desc: "We focus on what actually drives growth and conversions." },
  { title: "Craft over shortcuts", desc: "We believe in quality execution, not quick hacks." },
  { title: "Partnership over transactions", desc: "We work with clients as long-term partners, not one-off projects." },
  { title: "Scalability over fragility", desc: "Everything we build is designed to grow with you." },
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="gradient-hero min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-ef-blue/20 blur-[120px]" />
        </div>
        <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              We're Building the Future of How Events Are Run.
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              EventFlow exists to help event organizers move from chaos to clarity; with modern systems for marketing, execution, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-ef-grey py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-ef-navy mb-6">Why EventFlow Exists</h2>
            <div className="space-y-4 text-ef-navy/70 leading-relaxed">
              <p>Events bring people together. But behind every great event is a complex web of planning, promotion, coordination, and execution; and for many organizers, that process is messy, fragmented, and exhausting.</p>
              <p>EventFlow was born out of a simple realization: Most event teams are forced to juggle disconnected tools, unreliable workflows, and manual processes that slow them down and limit their growth.</p>
              <p>We saw talented organizers with powerful ideas struggle to get visibility, fill seats, and operate efficiently; not because their events weren't valuable, but because they lacked a modern, structured system to support them.</p>
              <p>So we decided to build one.</p>
              <p>EventFlow is our answer to the chaos of running events in today's digital world.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-ef-navy py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Our Philosophy</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>We believe that running an event shouldn't feel overwhelming. We believe that great ideas deserve great systems. We believe that with the right structure, tools, and strategy, any event can scale its impact.</p>
              <p>At EventFlow, our work is guided by a simple principle: <span className="text-ef-lime font-semibold">Less chaos. More flow.</span></p>
              <p>We exist to give event organizers clarity, structure, and momentum; so they can focus on delivering powerful experiences while we handle the systems behind the scenes.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-ef-grey py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-ef-navy mb-6">What We Do at EventFlow</h2>
            <div className="space-y-4 text-ef-navy/70 leading-relaxed">
              <p>EventFlow is a modern event growth partner. We combine strategic marketing, creative production, conversion-focused web experiences, automation systems, and community and attendee workflows into one seamless flow that helps events get discovered, get registrations, and deliver better outcomes.</p>
              <p>At launch, we operate as a service-first team; working closely with organizers to design and execute high-performing event growth systems. Over time, we are building toward a platform that will power event marketing and operations at scale.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-ef-navy py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Who We're Built For</h2>
            <p className="text-white/60 leading-relaxed">
              We work with event organizers and producers, conference and summit hosts, bootcamp and workshop creators, corporate event teams, and communities and education platforms. Whether you're running a single event or building a long-term event brand, EventFlow exists to support your growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-ef-grey py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-ef-navy mb-6">Where We're Going</h2>
            <p className="text-ef-navy/70 leading-relaxed">
              Our long-term vision is to build a globally trusted platform for event growth and operations; starting in Africa, and expanding to the world. We're building EventFlow to become the infrastructure behind modern events: a system that helps teams launch faster, scale smarter, and operate with confidence. This is just the beginning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-ef-navy py-20 md:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-white">What Guides Our Work</h2>
          </AnimatedSection>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 border-t-2 border-ef-blue transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(1,5,202,0.2)]"
              >
                <h3 className="font-display text-base text-white mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="bg-ef-grey py-16 md:py-20">
        <div className="container mx-auto max-w-2xl text-center">
          <AnimatedSection>
            <p className="text-ef-navy/60 text-base italic leading-relaxed">
              "EventFlow is built by a team of creatives, marketers, and system builders passionate about helping ideas scale into movements."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="gradient-cta py-20 md:py-28">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Let's Build Your Next Event With Flow.
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              If you're ready to run events with more clarity, structure, and growth; we'd love to work with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP}><CTAButton variant="primary">Book a Strategy Call</CTAButton></a>
              <Link to="/services"><CTAButton variant="ghost">Explore Our Services</CTAButton></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </PageLayout>
  );
};

export default About;
