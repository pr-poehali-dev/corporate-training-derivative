import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Values = () => {
  const [valuesIndex, setValuesIndex] = useState(0);

  const valuesData = [
    { 
      icon: 'Sparkles', 
      title: 'Курс из документов за 5 минут', 
      desc: 'Загрузили PDF с регламентом? AI сам сделает из него курс с уроками и тестами. Вам останется только проверить',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/42c52333-5a99-4ebf-8886-2f1c64e46825.jpg'
    },
    { 
      icon: 'ShieldCheck', 
      title: 'Меньше ошибок на производстве', 
      desc: 'Когда люди знают, как работать правильно — аварий становится меньше. Просто потому что они поняли, а не просто расписались',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/0d856e20-f49c-460b-a413-501213b00434.jpg'
    },
    { 
      icon: 'Gamepad2', 
      title: 'Обучаться становится интересно', 
      desc: 'Добавили бейджики, рейтинги и доску почёта. Теперь люди сами хотят проходить курсы, а не отмазываются',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/5690adb0-c218-4eaa-8a3b-adff28d20c7e.jpg'
    },
    { 
      icon: 'TrendingUp', 
      title: 'Новички выходят на работу быстрее', 
      desc: 'Вместо двух месяцев разборок с наставником — неделя обучения по курсу. И все счастливы',
      image: 'https://cdn.poehali.dev/projects/32a9c577-a02e-4cc1-ba51-3fab615ba053/files/cad01a2c-4edc-4bcc-9cbc-5cdd1c85a045.jpg'
    },
  ];

  return (
    <section id="ценности" className="py-8 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <Badge className="mb-2 md:mb-4 text-xs">Польза для вашего бизнеса</Badge>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Какие проблемы решаем?</h2>
        </div>
        
        {/* Mobile Slider */}
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${valuesIndex * 100}%)` }}
            >
              {valuesData.map((feature, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                    <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon name={feature.icon} className="text-primary" size={20} />
                        </div>
                        <h3 className="font-bold text-base">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
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

        {/* Desktop Checkerboard */}
        <div className="hidden md:block max-w-6xl mx-auto space-y-16">
          {valuesData.map((feature, idx) => (
            <div 
              key={idx} 
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={feature.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
              <div className={idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;