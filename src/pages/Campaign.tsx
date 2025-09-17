import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ShareButtons } from '@/components/ShareButtons';
import { DonationTimeline } from '@/components/DonationTimeline';
import { toast, showSuccess, showError } from '@/components/EnhancedToast';
import { Campaign as CampaignType, Donation, DonationData } from '@/types';
import { 
  Heart, 
  Share2, 
  CreditCard, 
  Users, 
  Calendar, 
  Upload,
  Copy,
  CheckCircle,
  Clock
} from 'lucide-react';

const Campaign = () => {
  const { slug } = useParams<{ slug: string }>();
  const [campaign, setCampaign] = useState<CampaignType | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [donationData, setDonationData] = useState<DonationData>({
    donorName: '',
    amount: 0,
  });
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data - Replace with API calls to Java backend
  useEffect(() => {
    const fetchCampaignData = async () => {
      setIsLoading(true);
      
      // TODO: Replace with actual API call
      // const response = await api.get(`/campaigns/${slug}`);
      // setCampaign(response.data);
      
      // Mock data
      const mockCampaign: CampaignType = {
        id: '1',
        title: 'Ajuda para Cirurgia da Maria',
        description: `Olá, meu nome é João e estou criando esta campanha para ajudar minha irmã Maria, que precisa passar por uma cirurgia urgente.

Maria tem 34 anos e descobriu recentemente que precisa de uma cirurgia no coração. O procedimento é essencial para sua saúde, mas infelizmente não conseguimos arcar com todos os custos médicos sozinhos.

Qualquer valor, por menor que seja, fará uma diferença enorme em nossas vidas. Estamos muito gratos por qualquer ajuda que possam oferecer.

Deus abençoe cada um de vocês! 🙏`,
        targetAmount: 15000,
        currentAmount: 8750,
        slug: slug || 'ajuda-cirurgia-maria',
        pixKey: '11987654321',
        imageUrl: '/placeholder.svg',
        userId: '1',
        user: {
          id: '1',
          name: 'João Silva',
          email: 'joao@email.com',
          username: 'joaosilva',
          createdAt: '2024-01-15'
        },
        createdAt: '2024-01-15',
        updatedAt: '2024-01-16'
      };
      
      setCampaign(mockCampaign);
      
      // Mock donations
      const mockDonations: Donation[] = [
        {
          id: '1',
          campaignId: '1',
          donorName: 'Ana Costa',
          amount: 500,
          confirmed: true,
          createdAt: '2024-01-16T10:30:00Z'
        },
        {
          id: '2',
          campaignId: '1',
          donorName: 'Carlos Santos',
          amount: 250,
          confirmed: true,
          createdAt: '2024-01-16T14:20:00Z'
        },
        {
          id: '3',
          campaignId: '1',
          donorName: 'Doação anônima',
          amount: 1000,
          confirmed: true,
          createdAt: '2024-01-16T16:45:00Z'
        },
        {
          id: '4',
          campaignId: '1',
          amount: 300,
          confirmed: false,
          createdAt: '2024-01-16T18:15:00Z'
        }
      ];
      
      setDonations(mockDonations);
      setIsLoading(false);
    };

    if (slug) {
      fetchCampaignData();
    }
  }, [slug]);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Call Java backend API to register donation
      // const formData = new FormData();
      // formData.append('campaignId', campaign.id);
      // formData.append('donorName', donationData.donorName);
      // formData.append('amount', donationData.amount.toString());
      // if (receiptFile) {
      //   formData.append('receipt', receiptFile);
      // }
      // 
      // const response = await api.post('/donations', formData);
      
      // Mock submission
      console.log('Donation submitted:', { 
        campaignId: campaign?.id, 
        ...donationData, 
        receipt: receiptFile 
      });
      
      toast({
        title: "Doação registrada!",
        description: "Seu comprovante foi enviado. Aguarde a confirmação do criador da campanha.",
      });
      
      // Reset form
      setDonationData({ donorName: '', amount: 0 });
      setReceiptFile(null);
      
    } catch (error) {
      toast({
        title: "Erro ao registrar doação",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(campaign?.pixKey || '');
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para a área de transferência.",
    });
  };

  const shareUrl = `${window.location.origin}/campanha/${campaign?.slug}`;

  const copyShareUrl = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copiado!",
      description: "O link da campanha foi copiado para a área de transferência.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-64 bg-muted rounded-lg"></div>
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Campanha não encontrada</h1>
          <p className="text-muted-foreground">Esta campanha pode ter sido removida ou o link está incorreto.</p>
        </div>
      </div>
    );
  }

  const progressPercentage = (campaign.currentAmount / campaign.targetAmount) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Campaign Image */}
            {campaign.imageUrl && (
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={campaign.imageUrl} 
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Campaign Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{campaign.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Criada em {new Date(campaign.createdAt).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {donations.filter(d => d.confirmed).length} doações
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={copyShareUrl}>
                    <Share2 className="w-4 h-4" />
                    Compartilhar
                  </Button>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      R$ {campaign.currentAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-muted-foreground">
                      de R$ {campaign.targetAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="text-sm text-muted-foreground">
                    {progressPercentage.toFixed(1)}% arrecadado
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap text-foreground">
                    {campaign.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Creator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Criador da Campanha</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={campaign.user?.name} />
                    <AvatarFallback>
                      {campaign.user?.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{campaign.user?.name}</p>
                    <p className="text-sm text-muted-foreground">@{campaign.user?.username}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Donations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Doações Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {donations.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">
                      Ainda não há doações para esta campanha.
                    </p>
                  ) : (
                    donations
                      .filter(donation => donation.confirmed)
                      .map((donation) => (
                        <div key={donation.id} className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <Heart className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">
                                {donation.donorName || 'Doação anônima'}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(donation.createdAt).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-primary">
                              R$ {donation.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                            <Badge variant="secondary">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Confirmada
                            </Badge>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Donation Form */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Fazer Doação
                </CardTitle>
                <CardDescription>
                  Sua doação faz a diferença! ❤️
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* PIX Key Display */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4" />
                    <span className="font-medium">Chave PIX:</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-background px-2 py-1 rounded">
                      {campaign.pixKey}
                    </code>
                    <Button variant="ghost" size="sm" onClick={copyPixKey}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" size="lg">
                      Enviar Comprovante
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Registrar Doação</DialogTitle>
                      <DialogDescription>
                        Após fazer o PIX, envie o comprovante para confirmar sua doação.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleDonation} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="donorName">Nome (opcional)</Label>
                        <Input
                          id="donorName"
                          value={donationData.donorName}
                          onChange={(e) => setDonationData({ ...donationData, donorName: e.target.value })}
                          placeholder="Deixe em branco para doação anônima"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Valor da Doação (R$)</Label>
                        <Input
                          id="amount"
                          type="number"
                          min="0.01"
                          step="0.01"
                          value={donationData.amount || ''}
                          onChange={(e) => setDonationData({ ...donationData, amount: parseFloat(e.target.value) || 0 })}
                          placeholder="Ex: 50.00"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="receipt">Comprovante PIX</Label>
                        <Input
                          id="receipt"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        <Upload className="w-4 h-4 mr-2" />
                        {isSubmitting ? 'Enviando...' : 'Enviar Comprovante'}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <div className="text-xs text-muted-foreground text-center">
                  Sua doação será confirmada pelo criador da campanha
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compartilhar Campanha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Ajude divulgando esta campanha nas suas redes sociais!
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={copyShareUrl}>
                    <Copy className="w-4 h-4 mr-1" />
                    Copiar Link
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a 
                      href={`https://wa.me/?text=Olha só esta campanha: ${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;