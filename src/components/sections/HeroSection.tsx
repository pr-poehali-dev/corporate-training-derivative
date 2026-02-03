import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="главная" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <Badge className="mb-3 md:mb-4" variant="secondary">Корпоративное обучение</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Система обучения под вашу компанию
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Повышайте экспертизу сотрудников, экономьте на аттестациях и сокращайте ошибки в работе. Быстрый онбординг новичков и цифровизация локальных документов.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30">
                <Icon name="Play" className="mr-2" size={18} />
                Смотреть демо
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="bg-muted/50 rounded-xl p-3 md:p-4 border">
                <div className="text-xl md:text-2xl font-bold text-primary mb-1">Без капзатрат</div>
                <div className="text-xs md:text-sm text-muted-foreground">на разработку платформы</div>
              </div>
              <div className="bg-muted/50 rounded-xl p-3 md:p-4 border">
                <div className="text-xl md:text-2xl font-bold text-primary mb-1">Быстрый запуск</div>
                <div className="text-xs md:text-sm text-muted-foreground">внедрение системы за 1 день</div>
              </div>
              <div className="bg-muted/50 rounded-xl p-3 md:p-4 border">
                <div className="text-xl md:text-2xl font-bold text-primary mb-1">-70% времени</div>
                <div className="text-xs md:text-sm text-muted-foreground">на обучение новых сотрудников</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up hidden lg:block">
            <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border">
              <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-primary/10 p-4 border-b">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/30 rounded w-1/3"></div>
                    <div className="h-2 bg-primary/20 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                      <div className="h-2 bg-muted/50 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;