import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface CampaignCardProps {
  title: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  donationCount: number;
  daysLeft: number;
  imageUrl?: string;
  slug: string;
}

export const CampaignCard = ({
  title,
  description,
  currentAmount,
  targetAmount,
  donationCount,
  daysLeft,
  imageUrl,
  slug,
}: CampaignCardProps) => {
  const progress = (currentAmount / targetAmount) * 100;
  
  return (
    <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 bg-gradient-card border-0 group hover:scale-[1.02] transform">
      {imageUrl && (
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      <CardContent className="p-8">
        <h3 className="font-display font-bold text-xl mb-3 line-clamp-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-bold text-foreground text-lg">
                R$ {currentAmount.toLocaleString('pt-BR')}
              </span>
              <span className="text-muted-foreground">
                de R$ {targetAmount.toLocaleString('pt-BR')}
              </span>
            </div>
            <Progress 
              value={progress} 
              className="h-3 bg-muted shadow-progress"
            />
            <p className="text-xs text-muted-foreground text-right">
              {progress.toFixed(1)}% arrecadado
            </p>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="font-medium">{donationCount} doações</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{daysLeft} dias restantes</span>
            </div>
          </div>
          
          <Button 
            variant="donate" 
            className="w-full shadow-soft hover:shadow-glow transition-all duration-300 group-hover:scale-105 transform"
            asChild
          >
            <Link to={`/campanha/${slug}`}>
              <Heart className="w-4 h-4" />
              Ajudar Agora
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};