import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { mediaApi } from "@/lib/api";
import { MediaGrid } from "./MediaPickerModal";

export default function AdminMediaPage() {
  const [items, setItems] = useState<any[]>([]);
  const refresh = () => mediaApi.list().then((res) => setItems(res.data || [])).catch(() => setItems([]));
  useEffect(() => { refresh(); }, []);
  return <AdminLayout title="Media Library"><MediaGrid items={items} refresh={refresh} /></AdminLayout>;
}
