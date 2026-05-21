import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { postsApi } from "@/lib/api";
import PageLayout from "@/components/PageLayout";
import NotFound from "@/pages/NotFound";

function setMeta(post: any) {
  document.title = post.meta_title || post.title;
  const description = document.querySelector('meta[name="description"]') || document.head.appendChild(document.createElement("meta"));
  description.setAttribute("name", "description");
  description.setAttribute("content", post.meta_description || post.excerpt || "");
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postsApi.list({ slug, status: "published" }).then((res) => {
      const found = res.data?.[0] || null;
      setPost(found);
      if (found) setMeta(found);
    }).catch(() => setPost(null)).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <PageLayout><div className="min-h-screen grid place-items-center">Loading...</div></PageLayout>;
  if (!post) return <NotFound />;

  return (
    <PageLayout>
      <section className="gradient-hero min-h-[50vh] flex items-end relative overflow-hidden">
        <div className="container mx-auto pt-28 pb-16 md:pt-36 md:pb-20 relative z-10 max-w-4xl">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-6 flex-wrap">
            <Link to="/blog" className="hover:text-white/70">Blog</Link><ChevronRight size={14} /><span className="text-white/60">{post.title}</span>
          </nav>
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-white/10 text-ef-lime">{post.category?.name || "Event Growth"}</span>
          <h1 className="font-display text-3xl md:text-5xl text-white mb-4 leading-[1.1]">{post.title}</h1>
          <p className="text-base md:text-lg text-white/50">{post.author?.full_name || "EventFlow"} · {post.published_at ? new Date(post.published_at).toLocaleDateString() : ""}</p>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <article className="container mx-auto max-w-[760px]">
          {post.cover_image_url && <img src={post.cover_image_url} alt={post.title} className="w-full rounded-2xl object-cover mb-12 max-h-[460px]" />}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ef-navy prose-p:text-ef-navy/80 prose-a:text-ef-blue prose-img:rounded-2xl" dangerouslySetInnerHTML={{ __html: post.body || "" }} />
        </article>
      </section>
    </PageLayout>
  );
}
