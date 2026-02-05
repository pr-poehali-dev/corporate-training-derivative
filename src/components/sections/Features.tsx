import { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Features = () => {
  const [featuresIndex, setFeaturesIndex] = useState(0);

  const featuresData = [
    { icon: 'Sparkles', title: 'AI делает курс за вас', desc: 'Просто скиньте документы — AI сам разберёт их, создаст уроки и тесты. Вам останется только посмотреть', highlight: true },
    { icon: 'Boxes', title: 'Или соберите сами', desc: 'Хотите сделать руками? Лёгкий конструктор с видео, тестами и заданиями — всё на своих местах' },
    { icon: 'Users', title: 'Видно, кто что прошёл', desc: 'Назначили курс команде — сразу видите, кто молодец, а кто ещё не начал. Всё в одном месте' },
    { icon: 'BarChart3', title: 'Отчёты, которые понятны', desc: 'Никаких сложных графиков. Простые цифры: сколько прошли, где застряли, что нужно улучшить' },
    { icon: 'Award', title: 'Бейджики и награды', desc: 'Прошёл курс — получил значок. Людям нравится, когда их успехи видны' },
    { icon: 'Smartphone', title: 'Учись где удобно', desc: 'Дома на диване, в метро, на обеде — приложение работает на телефоне и планшете' },
  ];

  return (
    <section id="возможности" className="py-8 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <Badge className="mb-2 md:mb-4 text-xs">Что умеет</Badge>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Всё, что нужно для обучения</h2>
        </div>
        
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${featuresIndex * 100}%)` }}
            >
              {featuresData.map((feature, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <Card className={`hover:shadow-lg transition-shadow ${feature.highlight ? 'border-primary shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5' : ''}`}>
                    <CardHeader className="p-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${feature.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                        <Icon name={feature.icon} size={20} />
                      </div>
                      <CardTitle className="flex items-center gap-2 text-base">
                        {feature.title}
                        {feature.highlight && <Badge variant="secondary" className="ml-auto text-xs">NEW</Badge>}
                      </CardTitle>
                      <CardDescription className="text-sm">{feature.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-background shadow-lg"
            onClick={() => setFeaturesIndex(Math.max(0, featuresIndex - 1))}
            disabled={featuresIndex === 0}
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-background shadow-lg"
            onClick={() => setFeaturesIndex(Math.min(featuresData.length - 1, featuresIndex + 1))}
            disabled={featuresIndex === featuresData.length - 1}
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
          <div className="flex justify-center gap-2 mt-4">
            {featuresData.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === featuresIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setFeaturesIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuresData.map((feature, idx) => (
            <Card key={idx} className={`hover:shadow-lg transition-shadow ${feature.highlight ? 'border-primary shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5' : ''}`}>
              <CardHeader className="p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${feature.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                  <Icon name={feature.icon} size={20} />
                </div>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {feature.title}
                  {feature.highlight && <Badge variant="secondary" className="ml-auto text-xs">NEW</Badge>}
                </CardTitle>
                <CardDescription className="text-sm">{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;