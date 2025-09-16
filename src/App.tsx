import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const ClientsProjects = lazy(() => import("./pages/ClientsProjects"));
const Locations = lazy(() => import("./pages/Locations"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Legal = lazy(() => import("./pages/Legal"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component to prevent white flash
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="relative">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      <div className="absolute inset-0 animate-pulse rounded-full h-12 w-12 border-2 border-accent/20"></div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <div className="page-transition">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services-and-specialties" element={<Services />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/clients-and-projects" element={<ClientsProjects />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;