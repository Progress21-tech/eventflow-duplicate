export default function SEOFields({ value, onChange }: { value: any; onChange: (patch: any) => void }) {
  const title = value.meta_title || "";
  const description = value.meta_description || "";
  return (
    <div className="rounded-xl border border-black/10 p-4 space-y-4 bg-white">
      <h3 className="font-display text-base">SEO</h3>
      <Field label="Meta title" value={title} onChange={(meta_title) => onChange({ meta_title })} limit={60} />
      <div>
        <label className="text-sm font-semibold">Meta description</label>
        <textarea value={description} onChange={(e) => onChange({ meta_description: e.target.value })} className="w-full mt-2 rounded-lg border border-black/15 px-3 py-2 min-h-24" />
        <p className={`text-xs ${description.length > 155 ? "text-ef-red" : "text-ef-navy/45"}`}>{description.length}/155</p>
      </div>
      <Field label="OG image URL" value={value.og_image_url || ""} onChange={(og_image_url) => onChange({ og_image_url })} />
      {value.og_image_url && <img src={value.og_image_url} alt="" className="w-full h-28 object-cover rounded-lg" />}
      <Field label="Canonical URL" value={value.canonical_url || ""} onChange={(canonical_url) => onChange({ canonical_url })} />
      <div className="rounded-lg border border-black/10 p-3 bg-ef-grey/60">
        <p className="text-[#1a0dab] text-base truncate">{title || value.title || "Page title"}</p>
        <p className="text-[#006621] text-xs">eventflow.example/{value.slug || "post-slug"}</p>
        <p className="text-[#545454] text-sm line-clamp-2">{description || value.excerpt || "Meta description preview"}</p>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, limit }: { label: string; value: string; onChange: (value: string) => void; limit?: number }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full mt-2 rounded-lg border border-black/15 px-3 py-2" />
      {limit && <p className={`text-xs ${value.length > limit ? "text-ef-red" : "text-ef-navy/45"}`}>{value.length}/{limit}</p>}
    </div>
  );
}
