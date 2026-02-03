import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PricingAndFAQ = () => {
  return (
    <>
      <section id="цены" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-3 md:mb-4">Тарифы</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Прозрачные цены</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Выберите тариф под размер вашей команды
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((plan, idx) => (
              <Card key={idx} className={plan.popular ? 'border-primary shadow-xl relative' : ''}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-muted-foreground">{plan.users}</div>
                  <div className="text-4xl font-bold mt-4">
                    {plan.price}
                    {plan.price !== 'По запросу' && <span className="text-lg text-muted-foreground">/мес</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.price === 'По запросу' ? 'Связаться' : 'Начать'}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={18} />
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

      <section id="faq" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-3 md:mb-4">FAQ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
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
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default PricingAndFAQ;