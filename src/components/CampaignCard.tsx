import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Calendar } from "lucide-react";

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
    <Card className="overflow-hidden hover:shadow-card transition-shadow duration-300 bg-gradient-card border-0">
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
          {description}
        </p>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground">
                R$ {currentAmount.toLocaleString('pt-BR')}
              </span>
              <span className="text-muted-foreground">
                de R$ {targetAmount.toLocaleString('pt-BR')}
              </span>
            </div>
            <Progress 
              value={progress} 
              className="h-2 bg-muted shadow-progress"
            />
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{donationCount} doações</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{daysLeft} dias restantes</span>
            </div>
          </div>
          
          <Button 
            variant="donate" 
            className="w-full"
            onClick={() => window.location.href = `/campanha/${slug}`}
          >
            <Heart className="w-4 h-4" />
            Ajudar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};