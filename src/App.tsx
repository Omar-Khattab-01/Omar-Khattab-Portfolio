import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import { scrollToSection } from "@/lib/scroll";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToSection(hash, { behavior: "auto", updateHash: false });
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout>
          <Home />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
