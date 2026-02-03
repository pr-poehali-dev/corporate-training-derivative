import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const PartnershipAndFooter = () => {
  return (
    <>
      <section id="партнёрам" className="py-8 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6 md:mb-12">
            <Badge className="mb-2 md:mb-4 text-xs">Партнёрская программа</Badge>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Стать партнером</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start mb-6 md:mb-12">
            <div className="space-y-3 md:space-y-6">
              <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
                Становясь нашим партнером, вы получаете возможность предлагать инновационную платформу корпоративного обучения. Проводите демонстрации, получайте вознаграждение от сделок и развивайте экспертизу в EdTech при полной поддержке нашей команды.
              </p>

              <div className="bg-muted/50 rounded-lg p-3 md:p-6 space-y-2 md:space-y-3 border">
                <h3 className="font-bold text-sm md:text-lg mb-2 md:mb-4">Что вы получаете:</h3>
                {[
                  'Партнёрское вознаграждение от продаж',
                  'Доступ к демо-версии платформы',
                  'Обучение и сертификация',
                  'Маркетинговые материалы',
                  'Техническая поддержка 24/7',
                  'Эксклюзивные условия для партнеров',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Check" className="text-primary-foreground" size={12} />
                    </div>
                    <span className="text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Заявка на партнёрство</CardTitle>
                <CardDescription className="text-sm">
                  Оставьте контакты, и мы свяжемся с вами для обсуждения условий
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <form className="space-y-3 md:space-y-4">
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
                  <Button size="default" className="w-full bg-primary hover:bg-primary/90 text-sm">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-8 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 md:mb-16">
            <Badge className="mb-2 md:mb-4 text-xs">Контакты</Badge>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4">Начните сегодня</h2>
            <p className="text-sm md:text-xl text-muted-foreground px-4">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card>
            <CardContent className="p-4 md:p-6">
              <form className="space-y-3 md:space-y-4">
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
                <Button size="default" className="w-full text-sm">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-6 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
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
              <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Продукт</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-background/70">
                <li>Возможности</li>
                <li>Цены</li>
                <li>Интеграции</li>
                <li>Безопасность</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Компания</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-background/70">
                <li>О нас</li>
                <li>Блог</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Поддержка</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-background/70">
                <li>Документация</li>
                <li>FAQ</li>
                <li>Email: support@edu.ru</li>
                <li>Тел: +7 (495) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-4 md:pt-8 text-center text-xs md:text-sm text-background/50">
            © 2024 EduPlatform. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
};

export default PartnershipAndFooter;