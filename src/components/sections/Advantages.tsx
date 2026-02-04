import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Advantages = () => {
  return (
    <section id="преимущества" className="py-8 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            <Badge className="mb-3 text-xs">Преимущества</Badge>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Почему выбирают нас</h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: 'Zap', title: 'Быстрое внедрение', desc: 'Запуск системы за 2 недели, не 6 месяцев' },
                { icon: 'Paintbrush', title: 'Гибкая настройка', desc: 'Адаптация под любые корпоративные процессы' },
                { icon: 'Shield', title: 'Безопасность данных', desc: 'Соответствие требованиям 152-ФЗ и GDPR' },
                { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Техподдержка и методическая помощь всегда на связи' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name={item.icon} className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
            <Card className="relative">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-2xl">Настройка под специфику компании</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Мы адаптируем платформу под ваши уникальные бизнес-процессы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-4 md:p-6 pt-0">
                {[
                  'Брендирование в фирменном стиле',
                  'Кастомные типы контента',
                  'Интеграция с вашими системами',
                  'Персонализированные треки обучения',
                  'Собственные шкалы оценки',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Check" className="text-primary-foreground" size={12} />
                    </div>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
