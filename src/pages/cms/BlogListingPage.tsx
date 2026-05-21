import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { postsApi } from "@/lib/api";
import PageLayout from "@/components/PageLayout";

export default function BlogListingPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postsApi.list({ status: "published" }).then((res) => setPosts(res.data || [])).catch(() => setPosts([])).finally(() => setLoading(false));
  }, []);

  return (
    <PageLayout>
      <section className="gradient-hero min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Blog</h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">Event growth strategies, marketing insights, and campaign breakdowns.</p>
        </div>
      </section>
      <section className="bg-ef-grey py-20 md:py-28">
        <div className="container mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-3 gap-6">{[1, 2, 3].map((i) => <div key={i} className="h-96 rounded-2xl bg-white/60 animate-pulse" />)}</div>
          ) : posts.length ? (
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden bg-white/70 border border-[rgba(1,5,202,0.12)] shadow-[0_4px_24px_rgba(1,5,202,0.06)] hover:-translate-y-1 transition-transform">
                  <div className="h-52 bg-ef-navy/10">{post.cover_image_url && <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />}</div>
                  <div className="p-6">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-ef-lime text-ef-navy mb-3">{post.category?.name || "Event Growth"}</span>
                    <h2 className="font-display text-xl text-ef-navy leading-tight mb-3">{post.title}</h2>
                    <p className="text-ef-navy/60 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <p className="text-xs text-ef-navy/45 mb-5">{post.author?.full_name || "EventFlow"} · {post.published_at ? new Date(post.published_at).toLocaleDateString() : ""}</p>
                    <span className="text-sm font-semibold text-ef-blue group-hover:underline">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl p-10 text-center max-w-xl mx-auto bg-white/70 border border-[rgba(1,5,202,0.15)]">
              <FileText className="mx-auto text-ef-blue mb-4" />
              <p className="font-display text-2xl text-ef-navy">No posts published yet.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
