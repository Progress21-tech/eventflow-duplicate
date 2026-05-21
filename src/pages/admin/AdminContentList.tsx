import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { caseStudiesApi, postsApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export function AdminPostsPage() {
  return <ContentList type="posts" title="Blog Posts" api={postsApi} newPath="/admin/posts/new" editBase="/admin/posts" />;
}

export function AdminCaseStudiesPage() {
  return <ContentList type="case studies" title="Case Studies" api={caseStudiesApi} newPath="/admin/case-studies/new" editBase="/admin/case-studies" />;
}

function ContentList({ title, api, newPath, editBase, type }: any) {
  const { isAdmin } = useAuth();
  const [items, setItems] = useState<any[]>([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const load = () => api.list({ status, limit: 20 }).then((res: any) => setItems(res.data || [])).catch(() => setItems([]));
  useEffect(() => { load(); }, [status]);

  const filtered = useMemo(() => items.filter((item) => item.title?.toLowerCase().includes(search.toLowerCase())), [items, search]);

  return (
    <AdminLayout title={title}>
      <div className="rounded-xl bg-white border border-black/10 overflow-hidden">
        <div className="p-5 flex flex-col md:flex-row gap-3 md:items-center justify-between border-b border-black/10">
          <div className="flex gap-2 flex-wrap">{["", "draft", "published", "archived"].map((s) => <button key={s || "all"} onClick={() => setStatus(s)} className={`rounded-full px-4 py-2 text-sm ${status === s ? "bg-ef-blue text-white" : "bg-ef-grey"}`}>{s || "All"}</button>)}</div>
          <div className="flex gap-3"><input placeholder="Search title" value={search} onChange={(e) => setSearch(e.target.value)} className="rounded-full border border-black/15 px-4 py-2" /><Link to={newPath} className="rounded-full bg-ef-navy text-white px-5 py-2 font-semibold">New</Link></div>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-ef-grey/60 text-left"><tr><th className="p-4">Title</th><th>Status</th><th>Author</th><th>Date</th><th>Actions</th></tr></thead>
          <tbody>{filtered.map((item) => <tr key={item.id} className="border-t border-black/5"><td className="p-4 font-semibold">{item.title}</td><td className="capitalize">{item.status}</td><td>{item.author?.full_name || "EventFlow"}</td><td>{new Date(item.created_at).toLocaleDateString()}</td><td className="space-x-3"><Link className="text-ef-blue font-semibold" to={`${editBase}/${item.id}/edit`}>Edit</Link>{isAdmin && <button className="text-ef-red" onClick={async () => { if (confirm(`Delete this ${type}?`)) { await api.delete(item.id); load(); } }}>Delete</button>}</td></tr>)}</tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
