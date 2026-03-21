import { motion } from "framer-motion";
import { FileText, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Blog = () => (
  <PageLayout>
    {/* Hero */}
    <section className="gradient-hero min-h-[50vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ef-blue/20 blur-[120px]" />
      </div>
      <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-20 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center">
          <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl text-white mb-4">Blog</motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Event growth strategies, marketing insights, and campaign breakdowns.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Empty State */}
    <section className="bg-ef-grey py-20 md:py-28">
      <div className="container mx-auto flex justify-center">
        <AnimatedSection>
          <div
            className="rounded-2xl p-8 md:p-12 text-center max-w-[600px]"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(1,5,202,0.15)",
            }}
          >
            <div className="w-16 h-16 rounded-full bg-[#0105ca]/10 flex items-center justify-center mx-auto mb-6">
              <FileText size={28} className="text-[#0105ca]" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-ef-navy mb-3">Fresh content is on the way.</h2>
            <p className="text-ef-navy/60 text-sm md:text-base mb-6 max-w-md mx-auto">
              We're putting together articles, breakdowns, and growth frameworks for event organizers. Check back soon.
            </p>
            <span
              className="inline-block text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6"
              style={{ background: "#9ee106", color: "#09001d", animation: "pulse-badge 2s ease-in-out infinite" }}
            >
              Coming Soon
            </span>
            <p className="text-ef-navy/50 text-sm mb-4">In the meantime, join our WhatsApp Channel for daily insights</p>
            <a
              href="https://whatsapp.com/channel/0029VbCKPamGzzKLyoNiNT3C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle size={18} />
              Join the Channel
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default Blog;
