import { Heart, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t mt-20">
      {/* Disclaimer prominente */}
      <div className="bg-destructive/10 dark:bg-yellow-500/10 border-b border-destructive/20 dark:border-yellow-500/20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-destructive dark:text-yellow-500" />
              <span className="font-semibold text-destructive dark:text-yellow-500 text-sm sm:text-base">
                IMPORTANTE:
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              <strong>Nosso trabalho é apenas facilitar a divulgação de campanhas e chaves PIX.</strong> 
              Embora nos esforçamos para evitar campanhas fraudulentas, não temos responsabilidade por estas, 
              nem por reembolsos. Sempre verifique a autenticidade das campanhas antes de doar.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-display font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent">
                Vaquinha Solidária
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A primeira plataforma brasileira de crowdfunding 100% gratuita. 
              Conectamos pessoas que precisam de ajuda com aquelas que querem ajudar.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Facilitador de campanhas • Não intermediamos valores</span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/campanhas" className="text-muted-foreground hover:text-primary transition-colors">
                  Campanhas Ativas
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-muted-foreground hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/criar-campanha" className="text-muted-foreground hover:text-primary transition-colors">
                  Criar Campanha
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações legais */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informações</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">
                  Termos de Uso
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Política de Privacidade
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Denunciar Campanha
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Suporte
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2024 Vaquinha Solidária. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            Desenvolvido com ❤️ para conectar pessoas
          </p>
        </div>
      </div>
    </footer>
  );
};