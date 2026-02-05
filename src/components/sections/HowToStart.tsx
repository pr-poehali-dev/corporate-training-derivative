import { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HowToStart = () => {
  const [processIndex, setProcessIndex] = useState(0);

  const processData = [
    { num: '01', icon: 'MessageSquare', title: 'Напишите нам', desc: 'Оставьте заявку — покажем, как всё работает, и обсудим ваши задачи' },
    { num: '02', icon: 'Rocket', title: 'Попробуйте бесплатно', desc: 'Дадим тестовый доступ, настроим под вас. Попробуете на реальных задачах' },
    { num: '03', icon: 'FileCheck', title: 'Подписываем договор', desc: 'Всё подошло? Оформляем договор и выбираем тариф. Всё просто' },
  ];

  return (
    <section id="как-работает" className="py-8 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Как начать?</h2>
        </div>
        
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${processIndex * 100}%)` }}
            >
              {processData.map((step, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <Card className="text-center hover:shadow-xl transition-shadow">
                    <CardHeader className="p-4">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
                          <span className="text-primary-foreground text-2xl font-bold">{idx + 1}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{step.desc}</CardDescription>
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
            onClick={() => setProcessIndex(Math.max(0, processIndex - 1))}
            disabled={processIndex === 0}
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-background shadow-lg"
            onClick={() => setProcessIndex(Math.min(processData.length - 1, processIndex + 1))}
            disabled={processIndex === processData.length - 1}
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
          <div className="flex justify-center gap-2 mt-4">
            {processData.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === processIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setProcessIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {processData.map((step, idx) => (
            <Card key={idx} className="text-center hover:shadow-xl transition-shadow">
              <CardHeader className="p-6">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
                    <span className="text-primary-foreground text-3xl font-bold">{idx + 1}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{step.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToStart;