import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WebDesign from "./pages/services/WebDesign";
import AppDesign from "./pages/services/AppDesign";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import CloudSolutions from "./pages/services/CloudSolutions";
import CRM from "./pages/products/CRM";
import ERP from "./pages/products/ERP";
import HRMS from "./pages/products/HRMS";
import CaseStudies from "./pages/insights/CaseStudies";
import Blog from "./pages/insights/Blog";
import News from "./pages/insights/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              {/* Services Routes */}
              <Route path="/services/web-design" element={<WebDesign />} />
              <Route path="/services/app-design" element={<AppDesign />} />
              <Route path="/services/software-development" element={<SoftwareDevelopment />} />
              <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
              
              {/* Products Routes */}
              <Route path="/products/crm" element={<CRM />} />
              <Route path="/products/erp" element={<ERP />} />
              <Route path="/products/hrms" element={<HRMS />} />
              
              {/* Insights Routes */}
              <Route path="/insights/case-studies" element={<CaseStudies />} />
              <Route path="/insights/blog" element={<Blog />} />
              <Route path="/insights/news" element={<News />} />
              
              {/* Contact Route */}
              <Route path="/contact" element={<Contact />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
