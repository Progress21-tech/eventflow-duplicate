import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { caseStudiesApi, postsApi } from "@/lib/api";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);

  useEffect(() => {
    postsApi.list({ limit: 5 }).then((res) => setPosts(res.data || [])).catch(() => {});
    caseStudiesApi.list({ limit: 5 }).then((res) => setCaseStudies(res.data || [])).catch(() => {});
  }, []);

  const published = posts.filter((p) => p.status === "published").length;
  const drafts = posts.filter((p) => p.status === "draft").length;

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        <div className="grid md:grid-cols-4 gap-4">
          <Stat label="Total posts" value={posts.length} />
          <Stat label="Case studies" value={caseStudies.length} />
          <Stat label="Published posts" value={published} />
          <Stat label="Draft posts" value={drafts} />
        </div>
        <div className="flex gap-3">
          <Link to="/admin/posts/new" className="rounded-full bg-ef-blue text-white px-5 py-2 font-semibold">New blog post</Link>
          <Link to="/admin/case-studies/new" className="rounded-full bg-ef-navy text-white px-5 py-2 font-semibold">New case study</Link>
        </div>
        <Recent title="Recent posts" items={posts} />
        <Recent title="Recent case studies" items={caseStudies} />
      </div>
    </AdminLayout>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="rounded-xl bg-white border border-black/10 p-5"><p className="text-sm text-ef-navy/50">{label}</p><p className="font-display text-3xl">{value}</p></div>;
}

function Recent({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="rounded-xl bg-white border border-black/10 overflow-hidden">
      <h2 className="font-display text-lg p-5 border-b border-black/10">{title}</h2>
      <table className="w-full text-sm">
        <tbody>{items.map((item) => <tr key={item.id} className="border-b border-black/5"><td className="p-4 font-semibold">{item.title}</td><td className="p-4 capitalize">{item.status}</td><td className="p-4 text-ef-navy/50">{new Date(item.created_at).toLocaleDateString()}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
