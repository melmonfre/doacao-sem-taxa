import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CampaignGrid } from "@/components/CampaignGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CampaignGrid />
      <Footer />
    </div>
  );
};

export default Index;
