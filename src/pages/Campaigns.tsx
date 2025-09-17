import { Header } from '@/components/Header';
import { CampaignGrid } from '@/components/CampaignGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-hero text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Todas as Campanhas
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Descubra campanhas que precisam da sua ajuda
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/criar-campanha">
              Criar Minha Campanha
            </Link>
          </Button>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar campanhas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais recentes</SelectItem>
                  <SelectItem value="progress">Maior progresso</SelectItem>
                  <SelectItem value="target">Maior meta</SelectItem>
                  <SelectItem value="ending">Terminando em breve</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Campanhas Ativas</h2>
            <p className="text-muted-foreground">
              {searchQuery ? `Resultados para "${searchQuery}"` : 'Todas as campanhas disponíveis para doação'}
            </p>
          </div>
          
          <CampaignGrid />
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Campanhas
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Impacto da Comunidade</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">127</div>
              <div className="text-muted-foreground">Campanhas Ativas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">R$ 2.4M</div>
              <div className="text-muted-foreground">Arrecadado Total</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8.5K</div>
              <div className="text-muted-foreground">Doações Realizadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Não encontrou o que procurava?</h2>
          <p className="text-muted-foreground mb-6">
            Crie sua própria campanha e comece a arrecadar fundos hoje mesmo
          </p>
          <Button asChild size="lg">
            <Link to="/criar-campanha">
              Criar Campanha Gratuita
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;