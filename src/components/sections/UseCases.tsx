import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const UseCases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      title: 'Сохранение экспертизы',
      description: 'Ключевой сотрудник увольняется, забирая с собой годы опыта? Цифровизируйте его знания с помощью AI — превратите отчёты и регламенты в интерактивные курсы за минуты. Экспертиза остаётся в компании и передаётся новичкам.',
      icon: 'UserCheck',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/ea6e8659-f3f9-4c93-8c80-b73d02366ce8.jpg',
      stat: 'До 80% знаний теряется при увольнении',
    },
    {
      title: 'Безопасность производства',
      description: 'Участились аварии и нарушения техники безопасности? Загрузите регламенты в AI — система создаст курс с тестами за 5 минут. Упростите аттестацию сотрудников и снизьте количество инцидентов на производстве.',
      icon: 'ShieldCheck',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/a1eb83ba-07a1-4dc7-9735-0ed5c376ec14.jpg',
      stat: 'Снижение инцидентов на 60%',
    },
    {
      title: 'Образование детей',
      description: 'Учебные материалы разбросаны по папкам и устарели? Соберите всё в одной платформе — AI структурирует знания и создаст интерактивные уроки. Дети учатся эффективнее, а вы экономите время на подготовку.',
      icon: 'BookOpen',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/3443acd5-6639-429e-9f37-d1e29d5c8d2e.jpg',
      stat: 'Вовлечённость учащихся +70%',
    },
    {
      title: 'Онбординг новичков',
      description: 'Новый сотрудник 2 месяца разбирается в структуре компании и процессах? Создайте автоматизированный курс на основе внутренних регламентов. Новички выходят на полную продуктивность в 3 раза быстрее.',
      icon: 'Rocket',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/f877a019-9cc1-4492-89a0-d8bd27439089.jpg',
      stat: 'Адаптация ускоряется в 3 раза',
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
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Icon name={item.icon} className="text-primary" size={28} />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8 md:p-10">
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