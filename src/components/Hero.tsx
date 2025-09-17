import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-mesh py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-variant/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  ✨ 100% Gratuito • 0% Taxa
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                  Ajude sem
                  <span className="block bg-gradient-to-r from-primary via-primary-variant to-primary-glow bg-clip-text text-transparent">
                    pagar taxas
                  </span>
                </h2>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                A primeira plataforma brasileira de crowdfunding 100% gratuita. 
                <span className="text-primary font-semibold">Toda doação vai direto para quem precisa.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 shadow-glow hover:shadow-glow/80 transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/criar-campanha">
                  <Plus className="w-5 h-5" />
                  Criar Minha Campanha
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300" asChild>
                <Link to="/campanhas">
                  <Heart className="w-5 h-5" />
                  Ver Campanhas
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg">0% de taxas</h3>
                  <p className="text-muted-foreground">100% para você</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg">PIX instantâneo</h3>
                  <p className="text-muted-foreground">Receba na hora</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg">Transparente</h3>
                  <p className="text-muted-foreground">Você controla tudo</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant group-hover:shadow-glow transition-shadow duration-500">
              <img 
                src={heroImage} 
                alt="Pessoas se ajudando na comunidade" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-br from-primary to-primary-variant rounded-full flex items-center justify-center shadow-glow animate-pulse">
              <Heart className="w-14 h-14 text-primary-foreground" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 -left-4 w-16 h-16 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-bounce delay-500">
              <span className="text-2xl">💖</span>
            </div>
            <div className="absolute -top-4 right-8 w-12 h-12 bg-primary-variant/10 rounded-xl backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-bounce delay-1000">
              <span className="text-lg">🤝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};