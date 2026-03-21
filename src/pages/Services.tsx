import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const STRATEGY_EMAIL = "mailto:team.eventflow@gmail.com?subject=Strategy%20Call%20Request";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const servicesData = [
  {
    title: "Event Marketing & Promotion",
    desc: "We design and execute end-to-end marketing strategies to drive visibility and registrations for your events. From campaign planning to distribution, we ensure your event reaches the right audience at the right time.",
    includes: ["Event marketing strategy", "Campaign planning", "Audience targeting", "Content distribution", "Growth tracking"],
  },
  {
    title: "Social Media Management",
    desc: "We manage your event's social presence across platforms, ensuring consistent visibility, storytelling, and conversion-driven content before, during, and after your event.",
    includes: ["Content calendars", "Post creation & scheduling", "Engagement management", "Campaign execution"],
  },
  {
    title: "Design & Video Production",
    desc: "High-quality visuals convert. We design marketing assets that capture attention and communicate value; from flyers and banners to promo videos and branded content.",
    includes: ["Event flyers & banners", "Promo videos & reels", "Brand visuals", "Ad creatives"],
  },
  {
    title: "Event Websites & Landing Pages",
    desc: "We design high-converting landing pages and event websites that communicate your value proposition clearly and turn visitors into registrants.",
    includes: ["Event landing pages", "Sales page copy", "Registration flows", "Mobile optimization"],
  },
  {
    title: "Marketing Automation",
    desc: "We build automated funnels that follow up with leads, send reminders, nurture attendees, and drive conversions across email and WhatsApp.",
    includes: ["Email automation", "WhatsApp automation", "Registration flows", "Follow-up sequences"],
  },
  {
    title: "Event Advertising Campaigns",
    desc: "We run targeted ad campaigns to drive registrations and awareness across digital platforms.",
    includes: ["Campaign setup", "Audience targeting", "Ad creatives", "Performance optimization"],
  },
  {
    title: "Community & Attendee Management",
    desc: "We help you manage attendee communication, engagement, and post-event follow-up for stronger retention and repeat attendance.",
    includes: ["Community setup", "Attendee communication", "Engagement strategies", "Post-event follow-ups"],
  },
];

const Services = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="gradient-hero min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-ef-blue/20 blur-[120px]" />
        </div>
        <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Event Marketing, Design & Growth; All in One Flow
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              We help you attract the right audience, convert registrations, and deliver seamless event experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {servicesData.map((svc, i) => {
        const isDark = i % 2 === 0;
        return (
          <section key={svc.title} className={`py-16 md:py-24 ${isDark ? "bg-ef-navy" : "bg-ef-grey"}`}>
            <div className="container mx-auto">
              <AnimatedSection>
                <div className={`${isDark ? "glass-card" : "glass-card-light"} rounded-2xl p-8 md:p-12 relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(1,5,202,0.15)]`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-ef-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-3 h-3 rounded-full bg-ef-lime mb-5" />
                    <h2 className={`font-display text-2xl md:text-3xl mb-4 ${isDark ? "text-white" : "text-ef-navy"}`}>
                      {svc.title}
                    </h2>
                    <p className={`text-base mb-6 max-w-3xl ${isDark ? "text-white/60" : "text-ef-navy/60"}`}>
                      {svc.desc}
                    </p>
                    <p className="text-ef-blue font-semibold text-sm mb-3">Includes:</p>
                    <motion.ul
                      variants={stagger}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      {svc.includes.map((item) => (
                        <motion.li key={item} variants={fadeUp} className="flex items-center gap-2">
                          <Check size={14} className="text-ef-lime flex-shrink-0" />
                          <span className={`text-sm ${isDark ? "text-white/70" : "text-ef-navy/70"}`}>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="gradient-cta py-20 md:py-28">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Let's Build Your Event Growth System
            </h2>
            <a href={STRATEGY_EMAIL}>
              <CTAButton variant="primary">Book a Strategy Call</CTAButton>
            </a>
          </AnimatedSection>
        </div>
      </section>

    </PageLayout>
  );
};

export default Services;
