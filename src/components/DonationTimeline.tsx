import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Donation } from '@/types';
import { CheckCircle, Clock, Heart, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DonationTimelineProps {
  donations: Donation[];
  className?: string;
}

export const DonationTimeline = ({ donations, className = "" }: DonationTimelineProps) => {
  const sortedDonations = [...donations].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const confirmedDonations = sortedDonations.filter(d => d.confirmed);
  const pendingDonations = sortedDonations.filter(d => !d.confirmed);

  if (donations.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Timeline de Doações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Heart className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>Ainda não há doações para esta campanha.</p>
            <p className="text-sm mt-1">Seja o primeiro a contribuir!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Timeline de Doações
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs">
              {confirmedDonations.length} confirmadas
            </Badge>
            {pendingDonations.length > 0 && (
              <Badge variant="outline" className="text-xs">
                {pendingDonations.length} pendentes
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {sortedDonations.map((donation, index) => (
            <div key={donation.id} className="flex gap-4 relative">
              {/* Timeline line */}
              {index < sortedDonations.length - 1 && (
                <div className="absolute left-4 top-8 w-px h-full bg-border"></div>
              )}
              
              {/* Status icon */}
              <div className={`
                flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                ${donation.confirmed 
                  ? 'bg-success/10 text-success' 
                  : 'bg-warning/10 text-warning'
                }
              `}>
                {donation.confirmed ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Clock className="w-4 h-4" />
                )}
              </div>

              {/* Donation info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 text-muted-foreground" />
                        <span className="font-medium text-sm">
                          {donation.donorName || 'Doação anônima'}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(donation.createdAt), { 
                        addSuffix: true,
                        locale: ptBR 
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">
                      R$ {donation.amount.toLocaleString('pt-BR', { 
                        minimumFractionDigits: 2 
                      })}
                    </div>
                    <Badge 
                      variant={donation.confirmed ? "default" : "outline"}
                      className="text-xs mt-1"
                    >
                      {donation.confirmed ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Confirmada
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 mr-1" />
                          Pendente
                        </>
                      )}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border-t pt-4 mt-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-success">
                R$ {confirmedDonations
                  .reduce((sum, d) => sum + d.amount, 0)
                  .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-xs text-muted-foreground">
                Total confirmado
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-warning">
                R$ {pendingDonations
                  .reduce((sum, d) => sum + d.amount, 0)
                  .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-xs text-muted-foreground">
                Aguardando confirmação
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};