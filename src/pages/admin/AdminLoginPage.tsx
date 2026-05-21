import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function AdminLoginPage() {
  const { signIn, user, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user) return <Navigate to="/admin/dashboard" replace />;

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await signIn(email, password);
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen gradient-hero grid place-items-center px-4">
      <form onSubmit={submit} className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
        <h1 className="font-display text-3xl text-ef-navy mb-2">Admin Login</h1>
        <p className="text-ef-navy/55 text-sm mb-6">Sign in to manage EventFlow content.</p>
        <label className="text-sm font-semibold">Email</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 mb-4 rounded-lg border border-black/15 px-4 py-3" />
        <label className="text-sm font-semibold">Password</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-2 mb-4 rounded-lg border border-black/15 px-4 py-3" />
        {error && <p className="text-sm text-ef-red mb-4">{error}</p>}
        <button disabled={submitting} className="w-full rounded-full bg-ef-blue text-white font-semibold py-3 hover:shadow-[0_0_24px_rgba(1,5,202,0.25)]">
          {submitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
