import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Shield, Users, CheckCircle, Camera, CreditCard, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: Heart,
      title: "1. Crie sua Campanha",
      description: "Conte sua história, defina sua meta e adicione sua chave PIX para receber as doações."
    },
    {
      icon: Share2,
      title: "2. Compartilhe",
      description: "Divulgue o link da sua campanha nas redes sociais, WhatsApp e com amigos e familiares."
    },
    {
      icon: CreditCard,
      title: "3. Receba Doações",
      description: "As pessoas fazem PIX diretamente para você e enviam o comprovante na plataforma."
    },
    {
      icon: CheckCircle,
      title: "4. Confirme os Valores",
      description: "Você confirma cada doação recebida e o valor é somado automaticamente na sua meta."
    }
  ];

  const faqs = [
    {
      question: "Como funciona a confirmação das doações?",
      answer: "Quando alguém faz uma doação via PIX, a pessoa envia o comprovante na plataforma. Você, como criador da campanha, precisa confirmar manualmente que recebeu o valor para que ele seja somado na sua meta. Isso garante transparência total."
    },
    {
      question: "A plataforma cobra taxas?",
      answer: "Não! Nossa plataforma é 100% gratuita. Não cobramos nenhuma taxa ou porcentagem sobre as doações. Todo o dinheiro arrecadado vai diretamente para você."
    },
    {
      question: "Como recebo o dinheiro das doações?",
      answer: "As doações são feitas diretamente via PIX para sua conta. Você recebe o dinheiro imediatamente, sem intermediários ou tempo de espera."
    },
    {
      question: "Posso criar quantas campanhas quiser?",
      answer: "Sim! Você pode criar quantas campanhas precisar. Cada uma terá seu próprio link único e sistema de doações independente."
    },
    {
      question: "As doações são seguras?",
      answer: "Sim! As doações são feitas via PIX, que é um sistema seguro do Banco Central. Além disso, todos os comprovantes ficam registrados na plataforma para total transparência."
    },
    {
      question: "Posso editar minha campanha depois de criada?",
      answer: "Sim, você pode editar a descrição, imagem e outros detalhes da sua campanha a qualquer momento através do painel de controle."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-hero">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Como Funciona a Vaquinha Solidária
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Uma plataforma 100% gratuita para arrecadar fundos de forma transparente e segura
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Processo Simples em 4 Passos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Segurança e Transparência
            </h2>
            <p className="text-xl text-muted-foreground">
              Sua segurança e a dos doadores é nossa prioridade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Transparência Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todas as doações são registradas com comprovantes visíveis para garantir transparência completa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Camera className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Comprovantes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cada doação precisa de comprovante PIX para ser confirmada e somada na meta da campanha.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CreditCard className="w-8 h-8 text-primary mb-2" />
                <CardTitle>PIX Direto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O dinheiro vai direto para sua conta via PIX. Sem intermediários, sem taxas, sem espera.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Crie sua campanha agora e comece a arrecadar fundos de forma segura e transparente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/criar-campanha">
                Criar Minha Campanha
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/campanhas">
                Ver Campanhas Ativas
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;