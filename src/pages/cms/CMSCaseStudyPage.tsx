import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { caseStudiesApi } from "@/lib/api";
import PageLayout from "@/components/PageLayout";
import NotFound from "@/pages/NotFound";

export default function CMSCaseStudyPage() {
  const { slug } = useParams();
  const [study, setStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    caseStudiesApi.list({ slug, status: "published" }).then((res) => {
      const found = res.data?.[0] || null;
      setStudy(found);
      if (found) document.title = found.meta_title || found.title;
    }).catch(() => setStudy(null)).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <PageLayout><div className="min-h-screen grid place-items-center">Loading...</div></PageLayout>;
  if (!study) return <NotFound />;

  const results = Array.isArray(study.results) ? study.results : [];

  return (
    <PageLayout>
      <section className="gradient-hero min-h-[50vh] flex items-end relative overflow-hidden">
        <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-20 relative z-10 max-w-4xl">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-6 flex-wrap">
            <Link to="/case-study" className="hover:text-white/70">Case Studies</Link><ChevronRight size={14} /><span className="text-white/60">{study.client_name || study.title}</span>
          </nav>
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-white/10 text-ef-lime">{study.industry || "Case Study"}</span>
          <h1 className="font-display text-3xl md:text-5xl text-white mb-4 leading-[1.1]">{study.title}</h1>
          <p className="text-base md:text-lg text-white/50">{[study.client_name, study.excerpt].filter(Boolean).join("; ")}</p>
        </div>
      </section>
      {results.length > 0 && (
        <section className="bg-[hsl(252,100%,6%)] py-12 md:py-16">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl text-center">
            {results.slice(0, 4).map((r: any, i: number) => <div key={i}><p className="font-display text-lg md:text-xl text-ef-lime mb-1">{r.value || r.metric}</p><p className="text-xs text-white/60">{r.metric && r.value ? r.metric : ""}</p></div>)}
          </div>
        </section>
      )}
      <section className="bg-white py-16 md:py-24">
        <article className="container mx-auto max-w-[760px] space-y-12">
          {study.cover_image_url && <img src={study.cover_image_url} alt={study.title} className="w-full h-[220px] md:h-[400px] rounded-2xl object-cover" />}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ef-navy prose-p:text-ef-navy/80 prose-a:text-ef-blue prose-img:rounded-2xl" dangerouslySetInnerHTML={{ __html: study.body || "" }} />
        </article>
      </section>
    </PageLayout>
  );
}
