import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const UseCases = () => {
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

  return (
    <section id="кейсы" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Кейсы использования
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Реальные задачи бизнеса, которые решает наша платформа
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((item, idx) => (
            <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} className="text-primary" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Icon name="TrendingUp" size={16} />
                  {item.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
