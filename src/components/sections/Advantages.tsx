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
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Почему с нами удобно?</h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: 'Zap', title: 'Запуск за 2 недели', desc: 'Без долгого внедрения. Настроили — и сразу работаете' },
                { icon: 'Paintbrush', title: 'Настроим под вас', desc: 'Сделаем именно так, как вам нужно. Никаких «а у нас так не может»' },
                { icon: 'Shield', title: 'Данные в безопасности', desc: 'Соблюдаем 152-ФЗ и GDPR. Ваши данные под защитой' },
                { icon: 'Headphones', title: 'Всегда на связи', desc: 'Что-то пошло не так? Напишите — поможем. В любое время' },
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
                <CardTitle className="text-lg md:text-2xl">Подгоним под вас</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  У каждой компании свои процессы. Мы это понимаем и делаем именно так, как нужно вам
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