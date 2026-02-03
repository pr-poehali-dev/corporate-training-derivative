import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const PartnershipAndFooter = () => {
  return (
    <>
      <section id="партнёрам" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Партнёрская программа</Badge>
            <h2 className="text-4xl font-bold mb-4">Стать партнером</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Становясь нашим партнером, вы получаете возможность предлагать и распространять инновационную платформу корпоративного обучения в вашем регионе. Мы предоставляем полную поддержку на всех этапах — от обучения работе с продуктом до технической поддержки ваших клиентов.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Вы сможете проводить демонстрации для потенциальных клиентов, получать партнёрское вознаграждение от каждой успешной сделки и наращивать собственную экспертизу в сфере EdTech. Мы ищем амбициозных профессионалов, готовых развивать бизнес в сфере корпоративного обучения.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 space-y-3 border">
                <h3 className="font-bold text-lg mb-4">Что вы получаете:</h3>
                {[
                  'Партнёрское вознаграждение от продаж',
                  'Доступ к демо-версии платформы',
                  'Обучение и сертификация',
                  'Маркетинговые материалы',
                  'Техническая поддержка 24/7',
                  'Эксклюзивные условия для партнеров',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Check" className="text-primary-foreground" size={14} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Заявка на партнёрство</CardTitle>
                <CardDescription>
                  Оставьте контакты, и мы свяжемся с вами для обсуждения условий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя и фамилия *</label>
                    <Input placeholder="Иван Иванов" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Город *</label>
                    <Input placeholder="Москва" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Номер телефона *</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Расскажите о себе</label>
                    <Textarea placeholder="Опыт работы, сфера деятельности..." rows={3} />
                  </div>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Начните сегодня</h2>
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
    </>
  );
};

export default PartnershipAndFooter;