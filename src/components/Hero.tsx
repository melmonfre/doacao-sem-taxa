import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-accent/20 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Ajude sem
                <span className="text-primary block">
                  pagar taxas
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                A primeira plataforma brasileira de crowdfunding 100% gratuita. 
                Toda doação vai direto para quem precisa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/criar-campanha">
                  <Plus className="w-5 h-5" />
                  Criar Minha Campanha
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/campanhas">
                  <Heart className="w-5 h-5" />
                  Ver Campanhas
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">0% de taxas</h3>
                  <p className="text-sm text-muted-foreground">100% para você</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">PIX instantâneo</h3>
                  <p className="text-sm text-muted-foreground">Receba na hora</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Transparente</h3>
                  <p className="text-sm text-muted-foreground">Você controla tudo</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Pessoas se ajudando na comunidade" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-elegant">
              <Heart className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};