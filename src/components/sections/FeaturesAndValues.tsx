import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const FeaturesAndValues = () => {
  return (
    <>
      <section id="ценности" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-3 md:mb-4">Ценности для бизнеса</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Что получит ваша компания</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Измеримые результаты для вашего бизнеса
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: 'TrendingUp', title: 'Рост экспертизы', desc: 'Повышение квалификации сотрудников через системное обучение', highlight: true },
              { icon: 'Wallet', title: 'Экономия на аттестациях', desc: 'Автоматизация процесса проверки знаний и сертификации' },
              { icon: 'FileText', title: 'Цифровизация материалов', desc: 'Быстрое создание курсов из локальных документов и регламентов' },
              { icon: 'ShieldCheck', title: 'Снижение ошибок', desc: 'Уменьшение потерь в операционной деятельности за счёт обучения' },
              { icon: 'UserPlus', title: 'Быстрый онбординг', desc: 'Новые сотрудники выходят на рабочий темп в 2 раза быстрее' },
              { icon: 'Target', title: 'Единые стандарты', desc: 'Все сотрудники работают по одним правилам и процедурам' },
            ].map((feature, idx) => (
              <Card key={idx} className={`hover:shadow-lg transition-shadow ${feature.highlight ? 'border-primary shadow-md' : ''}`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="возможности" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-3 md:mb-4">Возможности</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Всё для эффективного обучения</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Комплексная платформа с инструментами для создания, управления и аналитики обучения
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: 'Sparkles', title: 'Генератор курсов на ИИ', desc: 'Создавайте полноценные курсы из ваших документов за минуты с помощью искусственного интеллекта', highlight: true },
              { icon: 'Boxes', title: 'Конструктор курсов', desc: 'Создавайте интерактивные курсы с видео, тестами и заданиями' },
              { icon: 'Users', title: 'Управление командой', desc: 'Назначайте курсы, отслеживайте прогресс сотрудников' },
              { icon: 'BarChart3', title: 'Аналитика', desc: 'Детальные отчёты по эффективности обучения' },
              { icon: 'Award', title: 'Сертификаты', desc: 'Автоматическая выдача сертификатов после прохождения' },
              { icon: 'Smartphone', title: 'Мобильное приложение', desc: 'Обучение в любое время с телефона или планшета' },
            ].map((feature, idx) => (
              <Card key={idx} className={`hover:shadow-lg transition-shadow ${feature.highlight ? 'border-primary shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5' : ''}`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                    <Icon name={feature.icon} size={24} />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    {feature.title}
                    {feature.highlight && <Badge variant="secondary" className="ml-auto">NEW</Badge>}
                  </CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="как-работает" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-3 md:mb-4">Процесс</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Как это работает</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Простой процесс внедрения за 3 шага
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { num: '01', icon: 'Search', title: 'Обследование', desc: 'Анализируем бизнес-процессы компании и определяем объёмы материалов для цифровизации. Выявляем ключевые области для обучения.' },
              { num: '02', icon: 'Settings', title: 'Внедрение', desc: 'Брендируем платформу под ваш стиль, настраиваем систему наград и геймификации. Обучаем администраторов работе с платформой.' },
              { num: '03', icon: 'Rocket', title: 'Запуск и поддержка', desc: 'Отлаживаем работу системы, проводим тестовые запуски. Начинаем обучение сотрудников и оказываем постоянную поддержку.' },
            ].map((step, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="relative mb-6">
                    <div className="text-7xl font-bold text-primary/10 absolute -top-6 left-1/2 -translate-x-1/2">
                      {step.num}
                    </div>
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto relative z-10 shadow-lg shadow-primary/30">
                      <Icon name={step.icon} className="text-primary-foreground" size={32} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-3">{step.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{step.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="mb-4">Преимущества</Badge>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="space-y-6">
                {[
                  { icon: 'Zap', title: 'Быстрое внедрение', desc: 'Запуск системы за 2 недели, не 6 месяцев' },
                  { icon: 'Paintbrush', title: 'Гибкая настройка', desc: 'Адаптация под любые корпоративные процессы' },
                  { icon: 'Shield', title: 'Безопасность данных', desc: 'Соответствие требованиям 152-ФЗ и GDPR' },
                  { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Техподдержка и методическая помощь всегда на связи' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">Настройка под специфику компании</CardTitle>
                  <CardDescription className="text-base">
                    Мы адаптируем платформу под ваши уникальные бизнес-процессы
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Брендирование в фирменном стиле',
                    'Кастомные типы контента',
                    'Интеграция с вашими системами',
                    'Персонализированные треки обучения',
                    'Собственные шкалы оценки',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shrink-0">
                        <Icon name="Check" className="text-primary-foreground" size={14} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesAndValues;