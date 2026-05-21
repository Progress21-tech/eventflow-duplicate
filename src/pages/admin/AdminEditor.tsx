import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import RichTextEditor from "@/components/editor/RichTextEditor";
import SEOFields from "@/components/editor/SEOFields";
import { caseStudiesApi, postsApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import MediaPickerModal from "./MediaPickerModal";

const empty = { title: "", body: "", status: "draft", excerpt: "", cover_image_url: "", meta_title: "", meta_description: "", og_image_url: "", canonical_url: "", client_name: "", industry: "", results: [] };

export function AdminPostEditor() {
  return <Editor type="post" api={postsApi} title="Blog Post" />;
}

export function AdminCaseStudyEditor() {
  return <Editor type="case-study" api={caseStudiesApi} title="Case Study" />;
}

function Editor({ type, api, title }: any) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [form, setForm] = useState<any>(empty);
  const [saved, setSaved] = useState("Saved");
  const [pickerOpen, setPickerOpen] = useState(false);
  const isCaseStudy = type === "case-study";

  useEffect(() => {
    if (id) api.get(id).then((data: any) => setForm({ ...empty, ...data, results: data.results || [] }));
  }, [id]);

  const patch = (next: any) => setForm((current: any) => ({ ...current, ...next }));

  async function save(status?: string) {
    setSaved("Saving...");
    const payload = { ...form, status: status || form.status };
    try {
      const data = id ? await api.update(id, payload) : await api.create(payload);
      setForm({ ...empty, ...data, results: data.results || [] });
      setSaved("Saved");
      if (!id) navigate(isCaseStudy ? `/admin/case-studies/${data.id}/edit` : `/admin/posts/${data.id}/edit`, { replace: true });
    } catch (error: any) {
      setSaved(error.message || "Save failed");
    }
  }

  useEffect(() => {
    if (!id) return;
    const interval = setInterval(() => save(), 30000);
    return () => clearInterval(interval);
  }, [id, form]);

  const resultRows = useMemo(() => Array.isArray(form.results) ? form.results : [], [form.results]);

  return (
    <AdminLayout title={id ? `Edit ${title}` : `New ${title}`}>
      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="space-y-5">
          <input value={form.title} onChange={(e) => patch({ title: e.target.value })} placeholder="Title" className="w-full rounded-xl border border-black/10 bg-white px-5 py-4 font-display text-2xl" />
          <RichTextEditor value={form.body || ""} onChange={(body) => patch({ body })} />
        </div>
        <aside className="space-y-5">
          <div className="rounded-xl border border-black/10 bg-white p-4 space-y-4">
            <div className="flex justify-between items-center"><span className="text-sm text-ef-navy/50">{saved}</span><button onClick={() => save()} className="rounded-full bg-ef-blue text-white px-4 py-2 text-sm font-semibold">Save as Draft</button></div>
            {isAdmin && <button onClick={() => save("published")} className="w-full rounded-full bg-ef-navy text-white px-4 py-2 text-sm font-semibold">Publish</button>}
            <label className="text-sm font-semibold block">Status</label>
            <select value={form.status} onChange={(e) => patch({ status: e.target.value })} className="w-full rounded-lg border border-black/15 px-3 py-2">
              <option value="draft">Draft</option>{isAdmin && <option value="published">Published</option>}<option value="archived">Archived</option>
            </select>
            <label className="text-sm font-semibold block">Cover image URL</label>
            <input value={form.cover_image_url || ""} onChange={(e) => patch({ cover_image_url: e.target.value })} className="w-full rounded-lg border border-black/15 px-3 py-2" />
            <button onClick={() => setPickerOpen(true)} className="text-sm font-semibold text-ef-blue">Choose from media library</button>
            {form.cover_image_url && <img src={form.cover_image_url} alt="" className="w-full h-36 rounded-lg object-cover" />}
            <label className="text-sm font-semibold block">Excerpt</label>
            <textarea value={form.excerpt || ""} onChange={(e) => patch({ excerpt: e.target.value })} className="w-full rounded-lg border border-black/15 px-3 py-2 min-h-24" />
            {!isCaseStudy && <input placeholder="Category ID" value={form.category_id || ""} onChange={(e) => patch({ category_id: e.target.value })} className="w-full rounded-lg border border-black/15 px-3 py-2" />}
            {isCaseStudy && <CaseStudyFields form={form} patch={patch} rows={resultRows} />}
          </div>
          <SEOFields value={form} onChange={patch} />
        </aside>
      </div>
      <MediaPickerModal open={pickerOpen} onOpenChange={setPickerOpen} onSelect={(url) => patch({ cover_image_url: url })} />
    </AdminLayout>
  );
}

function CaseStudyFields({ form, patch, rows }: any) {
  const updateResult = (index: number, next: any) => {
    const results = [...rows];
    results[index] = { ...results[index], ...next };
    patch({ results });
  };
  return (
    <div className="space-y-3">
      <input placeholder="Client name" value={form.client_name || ""} onChange={(e) => patch({ client_name: e.target.value })} className="w-full rounded-lg border border-black/15 px-3 py-2" />
      <input placeholder="Industry" value={form.industry || ""} onChange={(e) => patch({ industry: e.target.value })} className="w-full rounded-lg border border-black/15 px-3 py-2" />
      <div className="flex items-center justify-between"><p className="text-sm font-semibold">Results</p><button onClick={() => patch({ results: [...rows, { metric: "", value: "" }] })} className="text-sm text-ef-blue font-semibold">Add row</button></div>
      {rows.map((row: any, i: number) => <div key={i} className="grid grid-cols-2 gap-2"><input placeholder="Metric" value={row.metric || ""} onChange={(e) => updateResult(i, { metric: e.target.value })} className="rounded-lg border border-black/15 px-3 py-2" /><input placeholder="Value" value={row.value || ""} onChange={(e) => updateResult(i, { value: e.target.value })} className="rounded-lg border border-black/15 px-3 py-2" /></div>)}
    </div>
  );
}
