import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Shield, Users, CheckCircle, Camera, CreditCard, Share2, AlertTriangle } from 'lucide-react';
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
      question: "Qual é a responsabilidade da Vaquinha Solidária?",
      answer: "A Vaquinha Solidária é apenas uma plataforma facilitadora que conecta campanhas com potenciais doadores. NÃO somos responsáveis pela veracidade das campanhas, pela entrega dos valores prometidos, nem por reembolsos. Nossa função é exclusivamente facilitar a divulgação de campanhas e chaves PIX."
    },
    {
      question: "A plataforma garante que as campanhas são verdadeiras?",
      answer: "NÃO. Embora nos esforcemos para identificar e remover campanhas suspeitas, não podemos garantir a veracidade de todas as campanhas. É responsabilidade do doador verificar a autenticidade da campanha antes de doar. Recomendamos sempre pesquisar sobre o caso e, quando possível, entrar em contato direto com o beneficiário."
    },
    {
      question: "Posso solicitar reembolso de uma doação?",
      answer: "A Vaquinha Solidária NÃO processa nem intermediamos as doações, portanto não podemos oferecer reembolsos. As doações são feitas diretamente via PIX para a conta do criador da campanha. Qualquer questão sobre reembolso deve ser tratada diretamente entre doador e beneficiário."
    },
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
      answer: "As doações utilizam o sistema PIX do Banco Central, que é seguro. Porém, a segurança da campanha em si (se é verdadeira, se os valores chegaram ao destino) é responsabilidade do criador e do doador. A plataforma apenas facilita a conexão entre eles."
    },
    {
      question: "Como denunciar uma campanha suspeita?",
      answer: "Se você suspeita que uma campanha pode ser fraudulenta, entre em contato conosco imediatamente. Analisaremos o caso, mas lembre-se que nossa responsabilidade é limitada à remoção da campanha da plataforma. Questões legais devem ser tratadas diretamente com as autoridades competentes."
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
            Uma plataforma facilitadora 100% gratuita que conecta campanhas com doadores. Não intermediamos valores nem garantimos campanhas.
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
              Facilitamos conexões seguras, mas não garantimos campanhas
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

      {/* Disclaimer Section */}
      <section className="py-16 px-4 bg-destructive/5 dark:bg-yellow-500/5 border-y border-destructive/20 dark:border-yellow-500/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-destructive dark:text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-destructive dark:text-yellow-500">
              Importante: Limitações de Responsabilidade
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-destructive/20 dark:border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-destructive dark:text-yellow-500 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Nossa Função
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>✓ Facilitar</strong> a divulgação de campanhas
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>✓ Conectar</strong> pessoas que precisam com pessoas que querem ajudar
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>✓ Fornecer</strong> uma plataforma gratuita e transparente
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>✓ Remover</strong> campanhas suspeitas quando identificadas
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 dark:border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-destructive dark:text-yellow-500 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Não Somos Responsáveis Por
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>✗ Veracidade</strong> das campanhas publicadas
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>✗ Entrega</strong> dos valores aos beneficiários finais
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>✗ Reembolsos</strong> de doações realizadas
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>✗ Questões legais</strong> entre doadores e beneficiários
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-background border border-destructive/30 dark:border-yellow-500/30 rounded-lg">
            <h3 className="font-bold text-center mb-4 text-destructive dark:text-yellow-500">
              Recomendações Importantes para Doadores
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Pesquise</strong> sobre a campanha e beneficiário antes de doar</li>
              <li>• <strong>Entre em contato</strong> diretamente com o criador quando possível</li>
              <li>• <strong>Verifique</strong> se existem outras formas de confirmar a veracidade</li>
              <li>• <strong>Denuncie</strong> campanhas suspeitas para ajudar outros usuários</li>
              <li>• <strong>Doe com consciência</strong> - sua doação é um ato de fé e solidariedade</li>
            </ul>
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
      <Footer />
    </div>
  );
};

export default HowItWorks;