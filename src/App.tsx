import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ComingSoon from "./pages/ComingSoon";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import V2 from "./pages/V2";
import Blog from "./pages/Blog";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyRetireYoungRich from "./pages/CaseStudyRetireYoungRich";
import CaseStudyYouthEquip from "./pages/CaseStudyYouthEquip";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/preview" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/v2" element={<V2 />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/case-study/retire-young-rich" element={<CaseStudyRetireYoungRich />} />
            <Route path="/case-study/youth-equip-bootcamp" element={<CaseStudyYouthEquip />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
