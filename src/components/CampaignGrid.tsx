import { CampaignCard } from "./CampaignCard";
import { Button } from "@/components/ui/button";

// Mock data para demonstração
const mockCampaigns = [
  {
    title: "Ajuda para Cirurgia da Maria",
    description: "Preciso de ajuda para custear uma cirurgia urgente. Qualquer valor já faz a diferença!",
    currentAmount: 15000,
    targetAmount: 25000,
    donationCount: 127,
    daysLeft: 15,
    slug: "ajuda-cirurgia-maria",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400"
  },
  {
    title: "Reconstrução Casa - Enchente RS",
    description: "Nossa casa foi destruída na enchente. Estamos precisando reconstruir tudo do zero.",
    currentAmount: 8500,
    targetAmount: 40000,
    donationCount: 89,
    daysLeft: 22,
    slug: "reconstrucao-casa-rs",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400"
  },
  {
    title: "Formatura Medicina - João",
    description: "Faltam apenas algumas mensalidades para me formar em medicina e ajudar minha comunidade.",
    currentAmount: 3200,
    targetAmount: 8000,
    donationCount: 45,
    daysLeft: 30,
    slug: "formatura-medicina-joao",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400"
  },
  {
    title: "Tratamento Pet - Luna",
    description: "Minha cachorrinha precisa de um tratamento caro e não tenho condições de pagar sozinha.",
    currentAmount: 1800,
    targetAmount: 5000,
    donationCount: 63,
    daysLeft: 12,
    slug: "tratamento-pet-luna",
    imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400"
  },
  {
    title: "Equipamentos para Padaria Familiar",
    description: "Queremos expandir nossa pequena padaria familiar para gerar mais empregos no bairro.",
    currentAmount: 12000,
    targetAmount: 20000,
    donationCount: 156,
    daysLeft: 18,
    slug: "equipamentos-padaria-familiar",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400"
  },
  {
    title: "Cadeira de Rodas Motorizada - Pedro",
    description: "Preciso de uma cadeira motorizada para ter mais independência no dia a dia.",
    currentAmount: 4500,
    targetAmount: 15000,
    donationCount: 78,
    daysLeft: 25,
    slug: "cadeira-rodas-pedro",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400"
  }
];

export const CampaignGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Campanhas em destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça algumas das campanhas que estão fazendo a diferença na vida das pessoas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCampaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              {...campaign}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver todas as campanhas
          </Button>
        </div>
      </div>
    </section>
  );
};