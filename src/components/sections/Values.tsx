import { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Values = () => {
  const [valuesIndex, setValuesIndex] = useState(0);

  const valuesData = [
    { icon: 'Sparkles', title: 'Автоматическое создание курсов', desc: 'Автоматическое создание увлекательных уроков и тестов с помощью AI и простого конструктора по загруженным документам', highlight: true },
    { icon: 'ShieldCheck', title: 'Снижение ошибок и потерь', desc: 'Снижение ошибок, аварий и потерь из-за низкой квалификации кадров' },
    { icon: 'Gamepad2', title: 'Геймификация обучения', desc: 'Снижение внутреннего сопротивления сотрудников к обучению за счет геймофикации и цифровых наград' },
    { icon: 'TrendingUp', title: 'Рост корпоративной культуры', desc: 'Повышение уровня корпоративной культуры и стандартов, сокращение сроков по адаптации новых специалистов' },
  ];

  return (
    <section id="ценности" className="py-8 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <Badge className="mb-2 md:mb-4 text-xs">Ценности для бизнеса</Badge>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Что получит ваша компания</h2>
        </div>
        
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${valuesIndex * 100}%)` }}
            >
              {valuesData.map((feature, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <Card className={`hover:shadow-lg transition-shadow ${feature.highlight ? 'border-primary shadow-md' : ''}`}>
                    <CardHeader className="p-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                        <Icon name={feature.icon} className="text-primary" size={20} />
                      </div>
                      <CardTitle className="text-base">{feature.title}</CardTitle>
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
            onClick={() => setValuesIndex(Math.max(0, valuesIndex - 1))}
            disabled={valuesIndex === 0}
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-background shadow-lg"
            onClick={() => setValuesIndex(Math.min(valuesData.length - 1, valuesIndex + 1))}
            disabled={valuesIndex === valuesData.length - 1}
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
          <div className="flex justify-center gap-2 mt-4">
            {valuesData.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === valuesIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setValuesIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {valuesData.map((feature, idx) => (
            <Card key={idx} className={`hover:shadow-lg transition-shadow ${feature.highlight ? 'border-primary shadow-md' : ''}`}>
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;