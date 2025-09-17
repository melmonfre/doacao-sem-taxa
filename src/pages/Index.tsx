import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CampaignGrid } from "@/components/CampaignGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CampaignGrid />
    </div>
  );
};

export default Index;
