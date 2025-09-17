import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import CreateCampaign from "./pages/CreateCampaign";
import Campaigns from "./pages/Campaigns";
import Campaign from "./pages/Campaign";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/sobre-nos" element={<AboutUs />} />
            <Route path="/criar-campanha" element={<CreateCampaign />} />
            <Route path="/campanhas" element={<Campaigns />} />
            <Route path="/campanha/:slug" element={<Campaign />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
