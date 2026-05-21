import { useEffect, useState } from "react";
import { caseStudiesApi } from "@/lib/api";
import { CaseStudyShowcaseCard, CMSCaseStudy } from "./CaseStudyCards";

export default function CMSCaseStudiesSection() {
  const [items, setItems] = useState<CMSCaseStudy[]>([]);

  useEffect(() => {
    caseStudiesApi.list({ status: "published", limit: 3 }).then((res) => setItems(res.data || [])).catch(() => setItems([]));
  }, []);

  if (!items.length) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="flex gap-6 overflow-x-scroll no-scrollbar pl-4 md:pl-8 pr-4" style={{ scrollSnapType: "x mandatory" }}>
        {items.map((study, idx) => <CaseStudyShowcaseCard key={study.id || study.slug} study={study} index={idx} />)}
      </div>
    </section>
  );
}
