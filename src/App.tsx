import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { setTokenProvider } from "@/lib/api";
import { RequireAuth, RequireRole } from "@/components/layout/RouteGuard";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import V2 from "./pages/V2";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyRetireYoungRich from "./pages/CaseStudyRetireYoungRich";
import CaseStudyYouthEquip from "./pages/CaseStudyYouthEquip";
import CaseStudyDesignAThon from "./pages/CaseStudyDesignAThon";
import NotFound from "./pages/NotFound";
import BlogListingPage from "./pages/cms/BlogListingPage";
import BlogPostPage from "./pages/cms/BlogPostPage";
import CMSCaseStudyPage from "./pages/cms/CMSCaseStudyPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { AdminCaseStudiesPage, AdminPostsPage } from "./pages/admin/AdminContentList";
import { AdminCaseStudyEditor, AdminPostEditor } from "./pages/admin/AdminEditor";
import AdminMediaPage from "./pages/admin/AdminMediaPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

const queryClient = new QueryClient();

const TokenBridge = () => {
  const { getToken } = useAuth();
  useEffect(() => {
    setTokenProvider(getToken);
  }, [getToken]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TokenBridge />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/v2" element={<V2 />} />
              <Route path="/blog" element={<BlogListingPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/case-study" element={<CaseStudy />} />
              <Route path="/case-studies/:slug" element={<CMSCaseStudyPage />} />
              <Route
                path="/case-study/retire-young-rich"
                element={<CaseStudyRetireYoungRich />}
              />
              <Route
                path="/case-study/youth-equip-bootcamp"
                element={<CaseStudyYouthEquip />}
              />
              <Route
                path="/case-study/design-a-thon"
                element={<CaseStudyDesignAThon />}
              />
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
              <Route path="/admin/dashboard" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
              <Route path="/admin/posts" element={<RequireAuth><AdminPostsPage /></RequireAuth>} />
              <Route path="/admin/posts/new" element={<RequireAuth><AdminPostEditor /></RequireAuth>} />
              <Route path="/admin/posts/:id/edit" element={<RequireAuth><AdminPostEditor /></RequireAuth>} />
              <Route path="/admin/case-studies" element={<RequireAuth><AdminCaseStudiesPage /></RequireAuth>} />
              <Route path="/admin/case-studies/new" element={<RequireAuth><AdminCaseStudyEditor /></RequireAuth>} />
              <Route path="/admin/case-studies/:id/edit" element={<RequireAuth><AdminCaseStudyEditor /></RequireAuth>} />
              <Route path="/admin/media" element={<RequireAuth><AdminMediaPage /></RequireAuth>} />
              <Route path="/admin/analytics" element={<RequireAuth><AdminAnalyticsPage /></RequireAuth>} />
              <Route path="/admin/users" element={<RequireRole role="admin"><AdminUsersPage /></RequireRole>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
