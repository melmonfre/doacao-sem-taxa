import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, Heart, User, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <div className="flex flex-col space-y-4 mt-8">
            <Link 
              to="/" 
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/campanhas" 
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Campanhas
            </Link>
            <Link 
              to="/como-funciona" 
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Como Funciona
            </Link>
            <Link 
              to="/sobre-nos" 
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Sobre Nós
            </Link>
            
            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tema</span>
                <ThemeToggle />
              </div>
              
              <Button variant="outline" className="w-full justify-start" asChild onClick={() => setOpen(false)}>
                <Link to="/entrar">
                  <User className="w-4 h-4 mr-2" />
                  Entrar
                </Link>
              </Button>
              
              <Button variant="hero" className="w-full justify-start" asChild onClick={() => setOpen(false)}>
                <Link to="/criar-campanha">
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Campanha
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};