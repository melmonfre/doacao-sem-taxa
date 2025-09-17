import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-mesh py-12 sm:py-16 lg:py-24 min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10"></div>
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary-variant/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                  ✨ 100% Gratuito • 0% Taxa
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight">
                  Ajude sem
                  <span className="block bg-gradient-to-r from-primary via-primary-variant to-primary-glow bg-clip-text text-transparent">
                    pagar taxas
                  </span>
                </h1>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                A primeira plataforma brasileira de crowdfunding 100% gratuita. 
                <span className="text-primary font-semibold block sm:inline"> Toda doação vai direto para quem precisa.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-glow hover:shadow-glow/80 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto" asChild>
                <Link to="/criar-campanha">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  Criar Minha Campanha
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto" asChild>
                <Link to="/campanhas">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ver Campanhas
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 sm:space-x-4 group justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-display font-bold text-foreground text-base sm:text-lg">0% de taxas</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">100% para você</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4 group justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-display font-bold text-foreground text-base sm:text-lg">PIX instantâneo</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Recebe na hora</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4 group justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-display font-bold text-foreground text-base sm:text-lg">Transparente</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Você controla tudo</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative group max-w-md mx-auto lg:max-w-none">
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant group-hover:shadow-glow transition-shadow duration-500">
              <img 
                src={heroImage} 
                alt="Pessoas se ajudando na comunidade" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary to-primary-variant rounded-full flex items-center justify-center shadow-glow animate-pulse">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-primary-foreground" />
            </div>
            
            {/* Floating elements - hidden on very small screens */}
            <div className="hidden sm:block absolute top-2 -left-2 sm:top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-bounce delay-500">
              <span className="text-lg sm:text-2xl">💖</span>
            </div>
            <div className="hidden sm:block absolute -top-2 right-6 sm:-top-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-primary-variant/10 rounded-lg sm:rounded-xl backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-bounce delay-1000">
              <span className="text-sm sm:text-lg">🤝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};