import { Button } from "@/components/ui/button";
import { Heart, User, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">
            Vaquinha Solidária
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/campanhas" className="text-foreground hover:text-primary transition-colors">
            Campanhas
          </Link>
          <Link to="/como-funciona" className="text-foreground hover:text-primary transition-colors">
            Como Funciona
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/entrar">
              <User className="w-4 h-4" />
              Entrar
            </Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/criar-campanha">
              <Plus className="w-4 h-4" />
              Criar Campanha
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};