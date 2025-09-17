import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { CreateCampaignData } from '@/types';
import { Camera, DollarSign, CreditCard, FileText } from 'lucide-react';

const CreateCampaign = () => {
  const [formData, setFormData] = useState<CreateCampaignData>({
    title: '',
    description: '',
    targetAmount: 0,
    pixKey: '',
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Call Java backend API to create campaign
      // const formDataToSend = new FormData();
      // formDataToSend.append('title', formData.title);
      // formDataToSend.append('description', formData.description);
      // formDataToSend.append('targetAmount', formData.targetAmount.toString());
      // formDataToSend.append('pixKey', formData.pixKey);
      // if (formData.image) {
      //   formDataToSend.append('image', formData.image);
      // }
      // 
      // const response = await api.post('/campaigns', formDataToSend);
      // const campaign = response.data;
      // 
      // // Redirect to campaign page
      // window.location.href = `/campanha/${campaign.slug}`;
      
      // Mock for now
      const slug = generateSlug(formData.title);
      console.log('Create campaign:', { ...formData, slug });
      
      toast({
        title: "Campanha criada com sucesso!",
        description: `Sua campanha "${formData.title}" foi criada e já está ativa.`,
      });
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        targetAmount: 0,
        pixKey: '',
      });
      setImagePreview('');
      
    } catch (error) {
      toast({
        title: "Erro ao criar campanha",
        description: "Não foi possível criar sua campanha. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-foreground">
              Criar Nova Campanha
            </h1>
            <p className="text-muted-foreground">
              Preencha os dados abaixo para criar sua campanha de arrecadação
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Informações da Campanha</CardTitle>
              <CardDescription>
                Todos os campos são obrigatórios para criar sua campanha
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Título da Campanha
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Ex: Ajuda para tratamento médico"
                    required
                  />
                  {formData.title && (
                    <p className="text-sm text-muted-foreground">
                      Link da campanha: /campanha/{generateSlug(formData.title)}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Descrição
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Conte sua história e explique por que precisa da ajuda..."
                    rows={5}
                    required
                  />
                </div>

                {/* Target Amount */}
                <div className="space-y-2">
                  <Label htmlFor="targetAmount">
                    <DollarSign className="w-4 h-4 inline mr-2" />
                    Meta de Arrecadação (R$)
                  </Label>
                  <Input
                    id="targetAmount"
                    type="number"
                    min="1"
                    step="0.01"
                    value={formData.targetAmount || ''}
                    onChange={(e) => setFormData({ ...formData, targetAmount: parseFloat(e.target.value) || 0 })}
                    placeholder="Ex: 5000.00"
                    required
                  />
                </div>

                {/* PIX Key */}
                <div className="space-y-2">
                  <Label htmlFor="pixKey">
                    <CreditCard className="w-4 h-4 inline mr-2" />
                    Chave PIX
                  </Label>
                  <Input
                    id="pixKey"
                    value={formData.pixKey}
                    onChange={(e) => setFormData({ ...formData, pixKey: e.target.value })}
                    placeholder="CPF, e-mail, telefone ou chave aleatória"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    As doações serão feitas diretamente para esta chave PIX
                  </p>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image">
                    <Camera className="w-4 h-4 inline mr-2" />
                    Imagem da Campanha (opcional)
                  </Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {imagePreview && (
                    <div className="mt-2">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-md border"
                      />
                    </div>
                  )}
                </div>

                {/* Preview Section */}
                {formData.title && formData.description && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Preview da Campanha</h3>
                    <Card>
                      <CardHeader>
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-48 object-cover rounded-md mb-4"
                          />
                        )}
                        <CardTitle>{formData.title}</CardTitle>
                        <CardDescription>
                          Meta: R$ {formData.targetAmount?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                          {formData.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? 'Criando campanha...' : 'Criar Campanha'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">📋 Importante:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Sua campanha ficará ativa imediatamente após a criação</li>
                <li>• Você receberá as doações diretamente na sua chave PIX</li>
                <li>• Cada doação precisa ser confirmada por você para contar na meta</li>
                <li>• Você pode editar sua campanha a qualquer momento</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;