import { ReactNode } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BarChart3, FileText, Image, LayoutDashboard, LogOut, Newspaper, Users } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const nav = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/posts", label: "Blog Posts", icon: Newspaper },
  { to: "/admin/case-studies", label: "Case Studies", icon: FileText },
  { to: "/admin/media", label: "Media Library", icon: Image },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

export default function AdminLayout({ title, children }: { title: string; children: ReactNode }) {
  const { profile, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-ef-grey text-ef-navy">
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-black/10 p-5 hidden md:flex flex-col">
        <Link to="/" className="font-display text-xl mb-8">EventFlow CMS</Link>
        <nav className="space-y-1">
          {nav.map((item) => <AdminNavLink key={item.to} {...item} />)}
          {isAdmin && <AdminNavLink to="/admin/users" label="Users" icon={Users} />}
        </nav>
        <button onClick={async () => { await signOut(); navigate("/admin/login"); }} className="mt-auto inline-flex items-center gap-2 text-sm text-ef-navy/60 hover:text-ef-red">
          <LogOut size={16} /> Sign out
        </button>
      </aside>
      <div className="md:pl-64">
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-black/10 px-4 md:px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-ef-navy/40">{location.pathname}</p>
            <h1 className="font-display text-xl md:text-2xl">{title}</h1>
          </div>
          <div className="text-right text-sm">
            <p className="font-semibold">{profile?.full_name || "CMS user"}</p>
            <p className="text-ef-navy/50 capitalize">{profile?.role}</p>
          </div>
        </header>
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}

function AdminNavLink({ to, label, icon: Icon }: { to: string; label: string; icon: any }) {
  return (
    <NavLink to={to} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${isActive ? "bg-ef-blue text-white" : "text-ef-navy/70 hover:bg-ef-grey"}`}>
      <Icon size={16} /> {label}
    </NavLink>
  );
}
