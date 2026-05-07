import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initLenis, getLenis } from "@/lib/lenis";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogPostPage from "./pages/BlogPostPage";
import WorkPage from "./pages/WorkPage.tsx";
import SupportPage from "./pages/SupportPage.tsx";
import MissionPage from "./pages/MissionPage.tsx";

const queryClient = new QueryClient();

const LenisProvider = () => {
  useEffect(() => {
    initLenis();
  }, []);

  return null;
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <LenisProvider />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;