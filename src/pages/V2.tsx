import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import v2Preview from "@/assets/v2-preview.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const V2Page = () => (
  <PageLayout>
    {/* Hero Teaser */}
    <section className="gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ef-blue/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-ef-blue/10 blur-[100px]" />
      </div>
      <div className="container mx-auto pt-28 pb-20 md:pt-36 md:pb-28 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[860px] mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <span
              className="inline-block text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-8"
              style={{
                background: "#9ee106",
                color: "#09001d",
                animation: "pulse-badge 2s ease-in-out infinite",
              }}
            >
              Coming Soon
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-3">
            EventFlow V2
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-display text-[#9EE106] mb-8">
            The Next Evolution of Event Growth
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-2 mb-6">
            <p className="text-white/80 text-base md:text-lg">We're building something powerful behind the scenes.</p>
            <p className="text-white/80 text-base md:text-lg">EventFlow V2 is the next phase of how events will be structured, marketed, and scaled.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-1">
            <p className="text-[#e6e6e6]/55 text-sm italic">It's not public yet.</p>
            <p className="text-[#e6e6e6]/55 text-sm italic">But it's coming.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Screenshot Mockup */}
    <section className="bg-[#09001d] py-20 md:py-28">
      <div className="container mx-auto max-w-[860px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-wider text-[#9ee106] mb-6"
        >
          A glimpse of what's coming
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -8, boxShadow: "0 0 80px rgba(1,5,202,0.5), 0 30px 100px rgba(1,5,202,0.3)" }}
          className="rounded-xl overflow-hidden border border-white/10 transition-all duration-400"
          style={{
            boxShadow: "0 0 60px rgba(1,5,202,0.3), 0 20px 80px rgba(1,5,202,0.2)",
          }}
        >
          <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white/5 rounded-md h-5 max-w-[200px] mx-auto" />
            </div>
          </div>
          <img
            src={v2Preview}
            alt="EventFlow V2 Preview"
            className="w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.insertAdjacentHTML(
                "beforeend",
                '<div class="flex items-center justify-center h-[400px] bg-white/5"><p class="text-[#e6e6e6]/30 text-sm">Screenshot coming soon</p></div>'
              );
            }}
          />
        </motion.div>
      </div>
    </section>

    {/* Insider Channel CTA */}
    <section className="bg-[#09001d] pb-28">
      <div className="container mx-auto max-w-[860px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#9ee106] mb-4 break-words">
            Join the EventFlow Insider Channel
          </p>
          <p className="text-white text-lg md:text-xl max-w-xl mx-auto mb-8">
            Get daily event growth insights, campaign breakdowns, and marketing frameworks for organizers.
          </p>
          <a
            href="https://whatsapp.com/channel/0029VbCKPamGzzKLyoNiNT3C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            <MessageCircle size={18} />
            Join Our WhatsApp Channel
          </a>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default V2Page;
