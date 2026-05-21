import { useEffect, useState } from "react";
import { caseStudiesApi } from "@/lib/api";
import { CaseStudyListCard, CMSCaseStudy } from "./CaseStudyCards";

export default function CMSCaseStudiesList() {
  const [items, setItems] = useState<CMSCaseStudy[]>([]);

  useEffect(() => {
    caseStudiesApi.list({ status: "published" }).then((res) => setItems(res.data || [])).catch(() => setItems([]));
  }, []);

  if (!items.length) return null;

  return <>{items.map((study, i) => <CaseStudyListCard key={study.id || study.slug} study={study} index={i} />)}</>;
}
