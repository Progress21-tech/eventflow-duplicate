import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export type CMSCaseStudy = {
  id?: string;
  slug: string;
  title: string;
  client_name?: string;
  industry?: string;
  excerpt?: string;
  cover_image_url?: string;
  results?: Array<{ metric?: string; value?: string } | string>;
};

const resultText = (result: CMSCaseStudy["results"][number]) =>
  typeof result === "string" ? result : [result.value, result.metric].filter(Boolean).join(" ");

export function CaseStudyShowcaseCard({ study, index = 0 }: { study: CMSCaseStudy; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-ef-navy"
      style={{ width: "80vw", maxWidth: "500px", height: "420px", scrollSnapAlign: "start" }}
    >
      {study.cover_image_url && <img src={study.cover_image_url} alt={study.title} className="w-full h-full object-cover" />}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(1,5,100,0.70) 0%, rgba(1,5,100,0.20) 50%, transparent 70%)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <h2 className="absolute top-4 left-4 text-white text-xl font-bold drop-shadow-lg pr-4">{study.title}</h2>
      <Link to={`/case-studies/${study.slug}`} className="absolute bottom-4 left-4 px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-[hsl(237,99%,40%)] border-2 border-white text-white">
        View Case Study
      </Link>
    </motion.div>
  );
}

export function CaseStudyListCard({ study, index = 0, spanLast = false }: { study: CMSCaseStudy; index?: number; spanLast?: boolean }) {
  const results = Array.isArray(study.results) ? study.results : [];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={spanLast ? "md:col-span-2 md:max-w-[calc(50%-16px)] md:mx-auto w-full" : ""}
    >
      <Link
        to={`/case-studies/${study.slug}`}
        className="block rounded-[1.25rem] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(1,5,202,0.15)] group bg-white/70 border border-[rgba(1,5,202,0.12)] shadow-[0_4px_24px_rgba(1,5,202,0.06)]"
      >
        <div className="relative w-full h-[220px] overflow-hidden bg-ef-navy/10">
          {study.cover_image_url && <img src={study.cover_image_url} alt={study.title} className="w-full h-full object-cover" />}
        </div>
        <div className="p-6 md:p-8">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[hsl(79,95%,45%)] text-[hsl(252,100%,6%)] mb-3">
            {study.industry || "Case Study"}
          </span>
          <p className="text-sm font-medium text-[hsl(237,99%,40%)] mb-1">{study.client_name || "EventFlow Project"}</p>
          <h2 className="font-display text-xl md:text-2xl text-[hsl(252,100%,6%)] mb-3 leading-tight">{study.title}</h2>
          {study.excerpt && <p className="flex items-center gap-1.5 text-sm text-[hsl(252,100%,6%)]/50 mb-4"><MapPin size={14} />{study.excerpt}</p>}
          <div className="flex flex-wrap gap-2 mb-5">
            {results.slice(0, 3).map((r, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium text-[hsl(252,100%,6%)]/70 bg-[hsl(252,100%,6%)]/5 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(79,95%,45%)]" />
                {resultText(r)}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(237,99%,40%)] group-hover:underline">
            Read Case Study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
