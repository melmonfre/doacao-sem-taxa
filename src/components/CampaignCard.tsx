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
      
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3 line-clamp-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-bold text-foreground text-base sm:text-lg">
                R$ {currentAmount.toLocaleString('pt-BR')}
              </span>
              <span className="text-muted-foreground text-xs sm:text-sm">
                de R$ {targetAmount.toLocaleString('pt-BR')}
              </span>
            </div>
            <Progress 
              value={progress} 
              className="h-2.5 sm:h-3 bg-muted shadow-progress"
            />
            <p className="text-xs text-muted-foreground text-right">
              {progress.toFixed(1)}% arrecadado
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-2 border-t border-border/50">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">{donationCount} doações</span>
            </div>
            
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">{daysLeft} dias restantes</span>
            </div>
          </div>
          
          <Button 
            variant="donate" 
            className="w-full shadow-soft hover:shadow-glow transition-all duration-300 group-hover:scale-105 transform text-sm sm:text-base py-2.5 sm:py-3"
            asChild
          >
            <Link to={`/campanha/${slug}`}>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              Ajudar Agora
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};