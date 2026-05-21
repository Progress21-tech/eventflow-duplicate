import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { createClient, Session, User } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Profile = {
  id: string;
  full_name?: string | null;
  avatar_url?: string | null;
  role: "admin" | "editor" | "viewer";
};

type AuthContextValue = {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  getToken: () => Promise<string | null>;
  isAdmin: boolean;
  isEditor: boolean;
  role: Profile["role"] | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

async function fetchProfile(userId: string) {
  const { data } = await supabase
    .from("profiles")
    .select("id, full_name, avatar_url, role")
    .eq("id", userId)
    .single();
  return data as Profile | null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function hydrate() {
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      setSession(data.session);
      setUser(data.session?.user || null);
      setProfile(data.session?.user ? await fetchProfile(data.session.user.id) : null);
      setLoading(false);
    }

    hydrate();

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user || null);
      setProfile(nextSession?.user ? await fetchProfile(nextSession.user.id) : null);
      setLoading(false);
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      profile,
      loading,
      role: profile?.role || null,
      isAdmin: profile?.role === "admin",
      isEditor: profile?.role === "admin" || profile?.role === "editor",
      signIn: async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      },
      signOut: async () => {
        await supabase.auth.signOut();
      },
      getToken: async () => {
        if (session?.access_token) return session.access_token;
        const { data } = await supabase.auth.getSession();
        return data.session?.access_token || null;
      },
    }),
    [loading, profile, session, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
