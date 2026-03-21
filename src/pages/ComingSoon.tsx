import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";
import logoImage from "@/components/20260306_073441.png";
import comingSoonBg from "@/assets/coming-soon-bg.jpg";

const rotatingWords = ["Events.", "Bootcamps.", "Conferences.", "Workshops.", "Summits."];
const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VbCKPamGzzKLyoNiNT3C";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ComingSoon = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* SECTION 1 — Dark Hero */}
      <section className="gradient-hero relative overflow-hidden flex items-center justify-center">
        <img src={comingSoonBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: "#09001d" }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-15" style={{ background: "#09001d" }} />

        <div className="container mx-auto pt-32 pb-20 md:pt-40 md:pb-28 relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center">
            {/* Logo */}
            <motion.div variants={fadeUp}>
              <img
                src={logoImage}
                alt="EventFlow Logo"
                className="h-14 sm:h-16 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 12px rgba(158,225,6,0.3))" }}
              />
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeUp} className="mt-3">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                style={{
                  background: "rgba(158,225,6,0.1)",
                  border: "1px solid rgba(158,225,6,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#9ee106] animate-pulse-badge" />
                Launching Soon
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="mt-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                The Smart Way to Run
              </h1>
              <div className="h-[1.3em] relative mt-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl block"
                    style={{
                      color: "#9ee106",
                      textShadow: "0 0 30px rgba(158,225,6,0.4)",
                    }}
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Light Content Card */}
      <section className="bg-ef-grey py-20 md:py-28 flex-1">
        <div className="container mx-auto flex flex-col items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[600px] rounded-2xl p-10 md:p-14 text-center"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(1,5,202,0.15)",
              boxShadow: "0 8px 40px rgba(1,5,202,0.08)",
            }}
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-[#0105ca]/10 flex items-center justify-center mx-auto mb-6">
              <Rocket size={28} className="text-[#0105ca]" />
            </div>

            {/* Headline */}
            {/* Body */}
            <div className="space-y-4 mb-0" style={{ color: "rgba(9,0,29,0.65)" }}>
              <p className="text-base md:text-lg leading-relaxed">
                We're building something powerful for event organizers, communities, and brands that bring people together.
              </p>
            </div>

            {/* Divider */}
            <div
              className="my-8 h-px w-full"
              style={{ background: "linear-gradient(to right, transparent, rgba(1,5,202,0.4), rgba(158,225,6,0.3), transparent)" }}
            />

            {/* CTA */}
            <p className="text-sm mb-4" style={{ color: "rgba(9,0,29,0.5)" }}>
              Join our WhatsApp Channel for updates and early access
            </p>
            <a
              href={WHATSAPP_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.04] relative"
              style={{
                background: "#25D366",
                boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 30px rgba(37,211,102,0.45)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.25)"; }}
            >
              <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#25D366]" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">Join Our WhatsApp Channel</span>
            </a>
          </motion.div>

          {/* Footer micro-copy */}
          <p className="mt-8 text-xs" style={{ color: "rgba(9,0,29,0.25)" }}>
            © EventFlow. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
