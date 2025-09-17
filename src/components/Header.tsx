import { Button } from "@/components/ui/button";
import { Heart, User, Plus } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">
            Vaquinha Solidária
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="/campanhas" className="text-foreground hover:text-primary transition-colors">
            Campanhas
          </a>
          <a href="/como-funciona" className="text-foreground hover:text-primary transition-colors">
            Como Funciona
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <User className="w-4 h-4" />
            Entrar
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="w-4 h-4" />
            Criar Campanha
          </Button>
        </div>
      </div>
    </header>
  );
};