import { motion } from "framer-motion";
import v2Preview from "@/assets/v2-preview.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
};
const fadeMobileUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
};

const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VbCKPamGzzKLyoNiNT3C";

const V2ComingSoon = () => (
  <section className="bg-ef-navy py-20 md:py-28 relative overflow-hidden">
    {/* Animated gradient background */}
    <div
      className="absolute inset-0 opacity-60"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, rgba(1,5,202,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(1,5,202,0.15) 0%, transparent 50%)",
      }}
    />

    <div className="container mx-auto relative z-10">
      {/* Mobile: screenshot first */}
      <div className="block md:hidden mb-10">
        <motion.div
          variants={fadeMobileUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-ef-lime mb-3 font-semibold">
            A glimpse of what's coming
          </p>
          <div
            className="rounded-xl border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(1,5,202,0.3)] transition-all duration-400"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <div className="bg-white/5 h-7 flex items-center gap-1.5 px-3 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-ef-red/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-ef-lime/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-ef-blue/40" />
            </div>
            <img
              src={v2Preview}
              alt="EventFlow V2 Dashboard Preview"
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left — Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-ef-lime text-ef-navy text-xs font-bold uppercase tracking-wider animate-[pulse_3s_ease-in-out_infinite]">
              Coming Soon
            </span>
          </motion.div>

          {/* Glass card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-white mb-1">
              EventFlow V2
            </h2>
            <p className="font-display text-lg md:text-xl text-ef-blue mb-6">
              The Next Evolution of Event Growth
            </p>

            <p className="text-white/80 text-base leading-relaxed mb-1">
              We're building something powerful behind the scenes.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              EventFlow V2 is the next phase of how events will be structured,
              marketed, and scaled.
            </p>

            <p className="text-ef-grey/60 text-sm italic mb-1">
              It's not public yet.
            </p>
            <p className="text-ef-grey/60 text-sm italic mb-8">
              But it's coming.
            </p>

            {/* Divider */}
            <div
              className="h-px mb-8"
              style={{
                background:
                  "linear-gradient(90deg, rgba(1,5,202,0.5) 0%, rgba(1,5,202,0.1) 100%)",
              }}
            />

            {/* Insider CTA */}
            <p className="text-white font-semibold text-sm mb-1">
              Join the EventFlow Insider Channel
            </p>
            <p className="text-white/50 text-sm mb-5 max-w-md">
              Get daily event growth insights, campaign breakdowns, and
              marketing frameworks for organizers.
            </p>
            <a
              href={WHATSAPP_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(37,211,102,0.35)] w-full md:w-auto justify-center md:justify-start"
              style={{ background: "#25D366" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join Our WhatsApp Channel
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Screenshot (desktop only) */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden md:block"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-ef-lime mb-3 font-semibold">
            A glimpse of what's coming
          </p>
          <div
            className="rounded-xl border border-white/10 overflow-hidden shadow-[0_20px_80px_rgba(1,5,202,0.35)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_90px_rgba(1,5,202,0.45)] cursor-default"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            {/* Browser chrome dots */}
            <div className="bg-white/5 h-8 flex items-center gap-1.5 px-4 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-ef-red/60" />
              <span className="w-3 h-3 rounded-full bg-ef-lime/60" />
              <span className="w-3 h-3 rounded-full bg-ef-blue/40" />
            </div>
            <img
              src={v2Preview}
              alt="EventFlow V2 Dashboard Preview"
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default V2ComingSoon;
