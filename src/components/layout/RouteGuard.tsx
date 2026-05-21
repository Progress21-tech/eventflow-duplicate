import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const rank = { viewer: 1, editor: 2, admin: 3 };

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen grid place-items-center text-ef-navy/60">Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
}

export function RequireRole({ role, children }: { role: "admin" | "editor" | "viewer"; children: JSX.Element }) {
  const { profile, loading, user } = useAuth();
  if (loading) return <div className="min-h-screen grid place-items-center text-ef-navy/60">Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;
  if (!profile || rank[profile.role] < rank[role]) return <Navigate to="/admin/dashboard" replace />;
  return children;
}
