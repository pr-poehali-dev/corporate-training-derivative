import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const PricingAndFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('демо');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const plans = [
    {
      name: 'Стартовый',
      price: '19 900',
      users: 'до 50 сотрудников',
      features: ['Базовые курсы', 'Отчёты', 'Email поддержка', '10 GB хранилища'],
    },
    {
      name: 'Профессиональный',
      price: '49 900',
      users: 'до 200 сотрудников',
      popular: true,
      features: ['Всё из Стартового', 'Кастомизация', 'Приоритетная поддержка', '100 GB хранилища', 'API доступ'],
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      users: 'неограниченно',
      features: ['Всё из Профессионального', 'Dedicated менеджер', 'SLA 99.9%', 'Безлимит хранилища', 'On-premise опция'],
    },
  ];

  return (
    <>
      <section id="цены" className="py-8 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <Badge className="mb-2 md:mb-4 text-xs">Тарифы</Badge>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Прозрачные цены</h2>
            <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Выберите тариф под размер вашей команды
            </p>
          </div>
          
          {/* Mobile: Slider */}
          <div className="relative md:hidden px-3">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {plans.map((plan, idx) => (
                  <div 
                    key={idx} 
                    className="w-full flex-shrink-0 px-1"
                  >
                    <Card className={`h-full ${
                      plan.popular ? 'border-primary shadow-xl relative' : ''
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                          <Badge className="bg-primary text-xs px-3 py-1">Популярный</Badge>
                        </div>
                      )}
                      <CardHeader className="p-5">
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="text-sm text-muted-foreground mt-1">{plan.users}</div>
                        <div className="text-3xl font-bold mt-4">
                          {plan.price}
                          {plan.price !== 'По запросу' && <span className="text-base text-muted-foreground">/мес</span>}
                        </div>
                      </CardHeader>
                      <CardContent className="p-5 pt-0">
                        <Button 
                          className="w-full mb-5 text-base h-11" 
                          variant={plan.popular ? 'default' : 'outline'}
                          onClick={scrollToDemo}
                        >
                          {plan.price === 'По запросу' ? 'Связаться' : 'Начать'}
                        </Button>
                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={18} />
                              <span className="text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-background shadow-lg z-10"
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-background shadow-lg z-10"
              onClick={() => setActiveIndex(Math.min(plans.length - 1, activeIndex + 1))}
              disabled={activeIndex === plans.length - 1}
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
            
            <div className="flex justify-center gap-2 mt-6">
              {plans.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === activeIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, idx) => (
              <Card key={idx} className={`h-full ${
                plan.popular ? 'border-primary shadow-xl relative' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-xs">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-base text-muted-foreground">{plan.users}</div>
                  <div className="text-4xl font-bold mt-4">
                    {plan.price}
                    {plan.price !== 'По запросу' && <span className="text-lg text-muted-foreground">/мес</span>}
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button 
                    className="w-full mb-6 text-sm" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={scrollToDemo}
                  >
                    {plan.price === 'По запросу' ? 'Связаться' : 'Начать'}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request section */}
      <section id="демо" className="py-8 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 md:mb-12">
            <Badge className="mb-2 md:mb-4 text-xs">Демо-версия</Badge>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Попробуйте бесплатно</h2>
            <p className="text-sm md:text-xl text-muted-foreground px-4">
              Оставьте заявку, и мы предоставим доступ к демо-версии платформы
            </p>
          </div>
          <Card>
            <CardContent className="p-4 md:p-6">
              <form className="space-y-3 md:space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя *</label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Компания *</label>
                    <Input placeholder="Название компании" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input type="email" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон *</label>
                    <Input placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Количество сотрудников</label>
                  <Input placeholder="Например: 50-100" />
                </div>
                <Button size="default" className="w-full text-sm">
                  Получить демо-доступ
                  <Icon name="Rocket" className="ml-2" size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-8 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-6 md:mb-16">
            <Badge className="mb-2 md:mb-4 text-xs">FAQ</Badge>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: 'Как долго занимает внедрение?',
                a: 'Типичное внедрение занимает 2-4 недели в зависимости от объёма материалов и требований к кастомизации.',
              },
              {
                q: 'Можно ли интегрировать с нашей HR-системой?',
                a: 'Да, мы поддерживаем интеграцию с популярными HR-системами через API. Также доступна разработка кастомных интеграций.',
              },
              {
                q: 'Где хранятся данные?',
                a: 'Данные хранятся на защищённых серверах в России с соблюдением 152-ФЗ. Также доступен вариант on-premise размещения.',
              },
              {
                q: 'Есть ли пробный период?',
                a: 'Да, предоставляем 14-дневный бесплатный пробный период со всеми функциями профессионального тарифа.',
              },
              {
                q: 'Как происходит обучение администраторов?',
                a: 'Проводим онлайн-обучение для ваших администраторов и предоставляем подробную документацию. Поддержка доступна 24/7.',
              },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-4 md:px-6">
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:no-underline py-3">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default PricingAndFAQ;