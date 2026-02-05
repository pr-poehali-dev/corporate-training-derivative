import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const UseCases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      title: 'Эксперт увольняется',
      description: 'Ваш главный спец собирает вещи? Не паникуйте. Запишите его знания в курс, пока он ещё здесь. AI поможет структурировать всё быстро. И эти знания останутся с вами навсегда.',
      icon: 'UserCheck',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/ea6e8659-f3f9-4c93-8c80-b73d02366ce8.jpg',
      stat: '80% опыта обычно уходит вместе с человеком',
    },
    {
      title: 'Техника безопасности',
      description: 'Снова авария на производстве? Загрузите техрегламент в платформу — AI сделает курс с тестами за 5 минут. Люди пройдут, поймут правила. Аварий станет меньше.',
      icon: 'ShieldCheck',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/a1eb83ba-07a1-4dc7-9735-0ed5c376ec14.jpg',
      stat: 'Инцидентов становится на 60% меньше',
    },
    {
      title: 'Учебные материалы',
      description: 'Материалы для учёбы разбросаны по папкам? Соберите всё в одном месте. AI структурирует, добавит тесты. Детям интереснее учиться, вам проще готовить уроки.',
      icon: 'BookOpen',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/3443acd5-6639-429e-9f37-d1e29d5c8d2e.jpg',
      stat: 'Ученики вовлекаются на 70% больше',
    },
    {
      title: 'Новички в команде',
      description: 'Новый человек два месяца не может разобраться в процессах? Сделайте курс по онбордингу. Он пройдёт его за неделю и сразу начнёт работать. Все довольны.',
      icon: 'Rocket',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/f877a019-9cc1-4492-89a0-d8bd27439089.jpg',
      stat: 'Адаптация быстрее в 3 раза',
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="кейсы" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Кейсы использования
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4 md:px-8">
                  <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-80 md:h-[500px] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-8 md:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={item.icon} className="text-primary" size={28} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg md:text-xl">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-base md:text-lg font-semibold text-primary">
                        <Icon name="TrendingUp" size={22} />
                        {item.stat}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-background/80 backdrop-blur-sm shadow-xl hover:bg-background w-12 h-12"
            onClick={goToPrevious}
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-background/80 backdrop-blur-sm shadow-xl hover:bg-background w-12 h-12"
            onClick={goToNext}
          >
            <Icon name="ChevronRight" size={24} />
          </Button>

          <div className="flex justify-center gap-2 mt-8">
            {cases.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;