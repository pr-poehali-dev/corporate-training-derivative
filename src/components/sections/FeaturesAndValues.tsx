import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FeaturesAndValues = () => {
  const [valuesIndex, setValuesIndex] = useState(0);
  const [featuresIndex, setFeaturesIndex] = useState(0);
  const [processIndex, setProcessIndex] = useState(0);

  const valuesData = [
    { icon: 'Sparkles', title: 'Автоматическое создание курсов', desc: 'Автоматическое создание увлекательных уроков и тестов с помощью AI и простого конструктора по загруженным документам', highlight: true },
    { icon: 'ShieldCheck', title: 'Снижение ошибок и потерь', desc: 'Снижение ошибок, аварий и потерь из-за низкой квалификации кадров' },
    { icon: 'Gamepad2', title: 'Геймификация обучения', desc: 'Снижение внутреннего сопротивления сотрудников к обучению за счет геймофикации и цифровых наград' },
    { icon: 'TrendingUp', title: 'Рост корпоративной культуры', desc: 'Повышение уровня корпоративной культуры и стандартов, сокращение сроков по адаптации новых специалистов' },
  ];

  const featuresData = [
    { icon: 'Sparkles', title: 'Генератор курсов на ИИ', desc: 'Создавайте полноценные курсы из ваших документов за минуты с помощью искусственного интеллекта', highlight: true },
    { icon: 'Boxes', title: 'Конструктор курсов', desc: 'Создавайте интерактивные курсы с видео, тестами и заданиями' },
    { icon: 'Users', title: 'Управление командой', desc: 'Назначайте курсы, отслеживайте прогресс сотрудников' },
    { icon: 'BarChart3', title: 'Аналитика', desc: 'Детальные отчёты по эффективности обучения' },
    { icon: 'Award', title: 'Сертификаты', desc: 'Автоматическая выдача сертификатов после прохождения' },
    { icon: 'Smartphone', title: 'Мобильное приложение', desc: 'Обучение в любое время с телефона или планшета' },
  ];

  const processData = [
    { num: '01', icon: 'MessageSquare', title: 'Заявка', desc: 'Оставьте заявку на показ решения и обсуждения ваших корпоративных задач и вызовов' },
    { num: '02', icon: 'Rocket', title: 'Пилотирование', desc: 'Внедрение бесплатной версии продукта, брендирование и пилотирование' },
    { num: '03', icon: 'FileCheck', title: 'Заключение договора', desc: 'Заключение договора и оплата продукта по выбранному тарифу' },
  ];

  return (
    <>
      <section id="ценности" className="py-8 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <Badge className="mb-2 md:mb-4 text-xs">Ценности для бизнеса</Badge>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Что получит ваша компания</h2>
            <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Измеримые результаты для вашего бизнеса
            </p>
          </div>
          
          {/* Mobile: Slider */}
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

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {valuesData.map((feature, idx) => (
              <Card key={idx} className={`hover:shadow-lg transition-shadow ${feature.highlight ? 'border-primary shadow-md' : ''}`}>
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name={feature.icon} className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="возможности" className="py-8 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <Badge className="mb-2 md:mb-4 text-xs">Возможности</Badge>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Всё для эффективного обучения</h2>
            <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Комплексная платформа с инструментами для создания, управления и аналитики обучения
            </p>
          </div>
          
          {/* Mobile: Slider */}
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

          {/* Desktop: Grid */}
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

      <section id="как-работает" className="py-8 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Как начать работать</h2>
          </div>
          
          {/* Mobile: Slider */}
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
                            <Icon name={step.icon} className="text-primary-foreground" size={24} />
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

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {processData.map((step, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader className="p-6">
                  <div className="mb-4">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
                      <Icon name={step.icon} className="text-primary-foreground" size={24} />
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
    </>
  );
};

export default FeaturesAndValues;