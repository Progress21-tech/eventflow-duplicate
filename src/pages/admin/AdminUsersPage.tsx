import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { usersApi } from "@/lib/api";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("viewer");
  const load = () => usersApi.list().then((res) => setUsers(res.data || [])).catch(() => setUsers([]));
  useEffect(() => { load(); }, []);

  return (
    <AdminLayout title="Users">
      <div className="space-y-6">
        <form onSubmit={async (e) => { e.preventDefault(); await usersApi.invite({ email, role }); setEmail(""); load(); }} className="rounded-xl bg-white border border-black/10 p-5 flex gap-3 flex-wrap">
          <input type="email" required placeholder="Invite email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-full border border-black/15 px-4 py-2" />
          <select value={role} onChange={(e) => setRole(e.target.value)} className="rounded-full border border-black/15 px-4 py-2"><option>viewer</option><option>editor</option><option>admin</option></select>
          <button className="rounded-full bg-ef-blue text-white px-5 py-2 font-semibold">Invite user</button>
        </form>
        <div className="rounded-xl bg-white border border-black/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ef-grey/60 text-left"><tr><th className="p-4">Name</th><th>Email</th><th>Role</th><th>Joined</th><th>Actions</th></tr></thead>
            <tbody>{users.map((user) => <tr key={user.id} className="border-t border-black/5"><td className="p-4 font-semibold">{user.full_name || "User"}</td><td>{user.email || "-"}</td><td><select defaultValue={user.role} onChange={(e) => usersApi.updateRole(user.id, e.target.value).then(load)} className="rounded border border-black/15 px-2 py-1"><option>viewer</option><option>editor</option><option>admin</option></select></td><td>{new Date(user.created_at).toLocaleDateString()}</td><td><button onClick={async () => { if (confirm("Remove this user?")) { await usersApi.delete(user.id); load(); } }} className="text-ef-red">Remove</button></td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
