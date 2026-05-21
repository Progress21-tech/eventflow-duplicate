import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import AdminLayout from "@/components/admin/AdminLayout";
import { analyticsApi } from "@/lib/api";

export default function AdminAnalyticsPage() {
  const [period, setPeriod] = useState("30d");
  const [summary, setSummary] = useState<any>({});
  const [series, setSeries] = useState<any[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [sources, setSources] = useState<any[]>([]);

  useEffect(() => {
    analyticsApi.summary(period).then(setSummary).catch(() => setSummary({}));
    analyticsApi.timeseries(period).then((res) => setSeries(res.results || [])).catch(() => setSeries([]));
    analyticsApi.pages(period).then((res) => setPages(res.results || [])).catch(() => setPages([]));
    analyticsApi.sources(period).then((res) => setSources(res.results || [])).catch(() => setSources([]));
  }, [period]);

  const metrics = summary.results || {};

  return (
    <AdminLayout title="Analytics">
      <div className="space-y-6">
        <div className="flex gap-2">{["7d", "30d", "90d"].map((p) => <button key={p} onClick={() => setPeriod(p)} className={`rounded-full px-4 py-2 text-sm ${period === p ? "bg-ef-blue text-white" : "bg-white"}`}>{p}</button>)}</div>
        <div className="grid md:grid-cols-4 gap-4">{["visitors", "pageviews", "bounce_rate", "visit_duration"].map((key) => <div key={key} className="rounded-xl bg-white border border-black/10 p-5"><p className="text-sm text-ef-navy/50">{key.replace("_", " ")}</p><p className="font-display text-2xl">{metrics[key]?.value ?? 0}</p></div>)}</div>
        <div className="rounded-xl bg-white border border-black/10 p-5 h-80">
          <ResponsiveContainer><LineChart data={series}><XAxis dataKey="date" /><YAxis /><Tooltip /><Line dataKey="visitors" stroke="#0105ca" /><Line dataKey="pageviews" stroke="#df0000" /></LineChart></ResponsiveContainer>
        </div>
        <div className="grid md:grid-cols-2 gap-6"><Breakdown title="Top pages" rows={pages} /><Breakdown title="Traffic sources" rows={sources} /></div>
      </div>
    </AdminLayout>
  );
}

function Breakdown({ title, rows }: { title: string; rows: any[] }) {
  return <div className="rounded-xl bg-white border border-black/10 p-5"><h2 className="font-display text-lg mb-4">{title}</h2>{rows.map((row, i) => <p key={i} className="flex justify-between border-t border-black/5 py-2 text-sm"><span>{row.page || row.source || row.name}</span><span>{row.visitors}</span></p>)}</div>;
}
