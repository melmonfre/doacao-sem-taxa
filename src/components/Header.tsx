import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { Heart, User, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Heart className="w-8 h-8 text-primary transition-transform group-hover:scale-110 duration-300" />
            <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </div>
          <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent">
            Vaquinha Solidária
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
            <span>Início</span>
            <div className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
          <Link to="/campanhas" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
            <span>Campanhas</span>
            <div className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
          <Link to="/como-funciona" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
            <span>Como Funciona</span>
            <div className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/entrar">
              <User className="w-4 h-4" />
              Entrar
            </Link>
          </Button>
          <Button variant="hero" size="sm" asChild className="shadow-glow hover:shadow-glow/80 transition-all duration-300 hidden sm:inline-flex">
            <Link to="/criar-campanha">
              <Plus className="w-4 h-4" />
              Criar Campanha
            </Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};