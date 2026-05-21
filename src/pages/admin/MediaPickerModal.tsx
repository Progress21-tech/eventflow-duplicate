import { useEffect, useState } from "react";
import { mediaApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function MediaPickerModal({ open, onOpenChange, onSelect }: { open: boolean; onOpenChange: (open: boolean) => void; onSelect: (url: string) => void }) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    if (open) mediaApi.list().then((res) => setItems(res.data || [])).catch(() => setItems([]));
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 grid place-items-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-auto p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-display text-xl">Choose image</h2>
          <button onClick={() => onOpenChange(false)} className="text-sm text-ef-navy/60">Close</button>
        </div>
        <MediaGrid items={items} onSelect={(url) => { onSelect(url); onOpenChange(false); }} refresh={() => mediaApi.list().then((res) => setItems(res.data || []))} />
      </div>
    </div>
  );
}

export function MediaGrid({ items, onSelect, refresh }: { items: any[]; onSelect?: (url: string) => void; refresh: () => void }) {
  const { isAdmin } = useAuth();
  const [uploading, setUploading] = useState(false);

  async function upload(file?: File) {
    if (!file) return;
    setUploading(true);
    try {
      await mediaApi.upload(file);
      await refresh();
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label className="inline-flex mb-5 cursor-pointer rounded-full bg-ef-blue text-white px-5 py-2 text-sm font-semibold">
        {uploading ? "Uploading..." : "Upload image"}
        <input type="file" accept="image/*" className="hidden" onChange={(e) => upload(e.target.files?.[0])} />
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="group rounded-xl border border-black/10 bg-white overflow-hidden">
            <button type="button" onClick={() => onSelect?.(item.file_url)} className="block w-full h-36 bg-ef-grey">
              <img src={item.file_url} alt={item.alt_text || item.file_name} className="w-full h-full object-cover" />
            </button>
            <div className="p-3 text-xs">
              <p className="font-semibold truncate">{item.file_name}</p>
              <p className="text-ef-navy/45">{Math.round((item.file_size || 0) / 1024)} KB</p>
              <input defaultValue={item.alt_text || ""} onBlur={(e) => mediaApi.update(item.id, { alt_text: e.target.value })} className="mt-2 w-full rounded border border-black/10 px-2 py-1" placeholder="Alt text" />
              {isAdmin && <button onClick={async () => { if (confirm("Delete this image?")) { await mediaApi.delete(item.id); refresh(); } }} className="mt-2 text-ef-red">Delete</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
