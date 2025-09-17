import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { 
  Heart, 
  Users, 
  Target, 
  Globe, 
  CreditCard,
  Copy,
  Handshake,
  Shield,
  Lightbulb,
  TrendingUp,
  Plus
} from 'lucide-react';

const AboutUs = () => {
  // Chave PIX da plataforma
  const platformPixKey = "contato@vaquinhasolidaria.com.br";

  const copyPixKey = () => {
    navigator.clipboard.writeText(platformPixKey);
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX da Vaquinha Solidária foi copiada para a área de transferência.",
    });
  };

  const stats = [
    { icon: Users, label: "Campanhas Ativas", value: "150+" },
    { icon: TrendingUp, label: "Doações Realizadas", value: "2.5K+" },
    { icon: Heart, label: "Valor Arrecadado", value: "R$ 480K+" },
    { icon: Globe, label: "Cidades Impactadas", value: "200+" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparência",
      description: "Todas as campanhas são públicas e os doadores podem acompanhar o progresso em tempo real."
    },
    {
      icon: Handshake,
      title: "Confiança",
      description: "Facilitamos conexões diretas entre quem precisa de ajuda e quem pode ajudar."
    },
    {
      icon: Heart,
      title: "Empatia",
      description: "Acreditamos que pequenos gestos podem gerar grandes transformações."
    },
    {
      icon: Lightbulb,
      title: "Simplicidade",
      description: "Nossa plataforma é fácil de usar, para que qualquer pessoa possa criar ou apoiar campanhas."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Heart className="w-3 h-3 mr-1" />
              Sobre Nossa Missão
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Conectamos Corações Através da Solidariedade
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos pessoas físicas preocupadas com a situação socioeconômica do Brasil. 
              Nossa plataforma facilita campanhas de arrecadação, incentivando a empatia 
              e promovendo a ajuda mútua entre brasileiros.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Nossa História */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-display font-bold mb-4">
                Nossa História
              </CardTitle>
              <CardDescription className="text-lg">
                Como nasceu a Vaquinha Solidária
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-foreground">
                <p className="leading-relaxed">
                  A <strong>Vaquinha Solidária</strong> nasceu da observação de que muitas pessoas precisam de ajuda, 
                  mas não sabem como pedir, e muitas outras querem ajudar, mas não sabem como encontrar quem precisa.
                </p>
                <p className="leading-relaxed">
                  Somos um grupo de pessoas físicas, brasileiros como vocês, que se preocupam com a crescente 
                  desigualdade social e as dificuldades econômicas que afetam tantas famílias em nosso país. 
                  Acreditamos no poder da solidariedade e na força que surge quando pessoas se unem por uma causa comum.
                </p>
                <p className="leading-relaxed">
                  Nossa plataforma funciona como uma ponte digital, conectando diretamente quem precisa de ajuda 
                  financeira com pessoas dispostas a colaborar. Não somos intermediários nas doações - 
                  apenas facilitamos o encontro entre corações solidários.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nossos Valores */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada funcionalidade da nossa plataforma
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Como Impactamos */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-primary-variant/5 border-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-display font-bold mb-4">
                Como Geramos Impacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Conexão Direta</h4>
                  <p className="text-sm text-muted-foreground">
                    Eliminamos intermediários, conectando diretamente doadores e beneficiários
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Total Transparência</h4>
                  <p className="text-sm text-muted-foreground">
                    Todas as campanhas são públicas e o progresso é acompanhado em tempo real
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Empatia em Ação</h4>
                  <p className="text-sm text-muted-foreground">
                    Incentivamos histórias reais que despertam solidariedade genuína
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Apoie Nossa Iniciativa */}
        <section className="max-w-2xl mx-auto">
          <Card className="bg-gradient-glow text-center border-0 shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-display font-bold text-white mb-4">
                Apoie Nossa Iniciativa
              </CardTitle>
              <CardDescription className="text-white/90 text-base">
                Ajude-nos a manter esta plataforma gratuita e acessível para todos os brasileiros
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-3 justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                  <span className="font-medium text-white">Chave PIX da Vaquinha Solidária:</span>
                </div>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <code className="bg-white/20 text-white px-3 py-2 rounded text-sm font-mono break-all">
                    {platformPixKey}
                  </code>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={copyPixKey}
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white flex-shrink-0"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copiar
                  </Button>
                </div>
              </div>
              
              <div className="text-white/80 text-sm space-y-2">
                <p>💙 Sua contribuição nos ajuda a:</p>
                <ul className="text-left space-y-1 max-w-sm mx-auto">
                  <li>• Manter os servidores funcionando</li>
                  <li>• Desenvolver novas funcionalidades</li>
                  <li>• Garantir segurança e confiabilidade</li>
                  <li>• Manter a plataforma sempre gratuita</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center max-w-3xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-8">
              <h2 className="text-3xl font-display font-bold mb-4">
                Faça Parte Desta Rede de Solidariedade
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Seja criando sua campanha ou apoiando causas importantes, 
                cada ação sua multiplica o bem e transforma vidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="shadow-glow hover:shadow-glow/80 transition-all duration-300">
                  <a href="/criar-campanha">
                    <Plus className="w-5 h-5 mr-2" />
                    Criar Minha Campanha
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/campanhas">
                    <Heart className="w-5 h-5 mr-2" />
                    Explorar Campanhas
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;