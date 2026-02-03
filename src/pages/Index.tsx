import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeNav, setActiveNav] = useState('');

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-xl font-bold">EduPlatform</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Возможности', 'Преимущества', 'Цены', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button>Попробовать бесплатно</Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="secondary">Корпоративное обучение</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Система обучения под вашу компанию
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Настройка под специфику и процессы вашей компании. Внедрение от 2 недель.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать бесплатно
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Смотреть демо
                  <Icon name="Play" className="ml-2" size={20} />
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">компаний</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">сотрудников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">удовлетворены</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border">
                <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-primary/10 p-4 border-b">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/30 rounded w-1/3"></div>
                      <div className="h-2 bg-primary/20 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-muted rounded w-2/3"></div>
                        <div className="h-2 bg-muted/50 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="возможности" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Возможности</Badge>
            <h2 className="text-4xl font-bold mb-4">Всё для эффективного обучения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексная платформа с инструментами для создания, управления и аналитики обучения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Boxes', title: 'Конструктор курсов', desc: 'Создавайте интерактивные курсы с видео, тестами и заданиями' },
              { icon: 'Users', title: 'Управление командой', desc: 'Назначайте курсы, отслеживайте прогресс сотрудников' },
              { icon: 'BarChart3', title: 'Аналитика', desc: 'Детальные отчёты по эффективности обучения' },
              { icon: 'Puzzle', title: 'Интеграции', desc: 'Подключение к вашим HR-системам и CRM' },
              { icon: 'Award', title: 'Сертификаты', desc: 'Автоматическая выдача сертификатов после прохождения' },
              { icon: 'Smartphone', title: 'Мобильное приложение', desc: 'Обучение в любое время с телефона или планшета' },
            ].map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
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

      <section id="как-работает" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Процесс</Badge>
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой процесс внедрения за 4 шага
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', icon: 'MessageSquare', title: 'Консультация', desc: 'Обсуждаем ваши задачи и цели' },
              { num: '02', icon: 'Settings', title: 'Настройка', desc: 'Адаптируем платформу под ваши процессы' },
              { num: '03', icon: 'Upload', title: 'Загрузка', desc: 'Переносим материалы и настраиваем курсы' },
              { num: '04', icon: 'Rocket', title: 'Запуск', desc: 'Обучаем команду и запускаем систему' },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="relative mb-6">
                  <div className="text-6xl font-bold text-primary/10 absolute -top-4 left-1/2 -translate-x-1/2">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto relative z-10">
                    <Icon name={step.icon} className="text-primary-foreground" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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

      <section id="цены" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите тариф под размер вашей команды
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Смирнова',
                role: 'HR-директор',
                company: 'Tech Corp',
                text: 'За 3 месяца повысили вовлечённость в обучение на 85%. Платформа интуитивная, сотрудники в восторге.',
              },
              {
                name: 'Дмитрий Волков',
                role: 'CEO',
                company: 'Retail Group',
                text: 'Окупили внедрение за полгода благодаря росту продаж. Обучили 300 сотрудников без отрыва от работы.',
              },
              {
                name: 'Елена Кузнецова',
                role: 'Head of L&D',
                company: 'Finance Inc',
                text: 'Техподдержка решает вопросы мгновенно. Аналитика помогла выявить слабые места в программе обучения.',
              },
            ].map((review, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <CardDescription className="text-base">{review.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {review.role}, {review.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
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

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Начните бесплатно сегодня</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Компания</label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="email@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о ваших задачах..." rows={4} />
                </div>
                <Button size="lg" className="w-full">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-primary-foreground" size={20} />
                </div>
                <span className="font-bold text-lg">EduPlatform</span>
              </div>
              <p className="text-sm text-background/70">
                Корпоративное обучение нового поколения
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Возможности</li>
                <li>Цены</li>
                <li>Интеграции</li>
                <li>Безопасность</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>О нас</li>
                <li>Блог</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Документация</li>
                <li>FAQ</li>
                <li>Email: support@edu.ru</li>
                <li>Тел: +7 (495) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/50">
            © 2024 EduPlatform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;