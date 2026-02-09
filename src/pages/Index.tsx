import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/sections/HeroSection';
import Values from '@/components/sections/Values';
import Features from '@/components/sections/Features';
import UseCases from '@/components/sections/UseCases';
import HowToStart from '@/components/sections/HowToStart';
import Advantages from '@/components/sections/Advantages';
import PricingAndFAQ from '@/components/sections/PricingAndFAQ';
import PartnershipAndFooter from '@/components/sections/PartnershipAndFooter';

const Index = () => {
  const [activeNav, setActiveNav] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    let sectionId = id.toLowerCase();
    if (sectionId === 'как начать') sectionId = 'как-работает';
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-primary-foreground" size={20} />
              </div>
              <span className="text-lg md:text-xl font-bold">Движ</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Ценности', 'Возможности', 'Кейсы', 'Как начать', 'Преимущества', 'Цены', 'FAQ', 'Партнёрам'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30" onClick={() => scrollToSection('демо')}>
              <Icon name="Play" className="mr-2" size={18} />
              Смотреть демо
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Меню"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {['Главная', 'Ценности', 'Возможности', 'Кейсы', 'Как начать', 'Преимущества', 'Цены', 'FAQ', 'Партнёрам'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-base font-medium hover:bg-muted rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30" onClick={() => scrollToSection('демо')}>
                <Icon name="Play" className="mr-2" size={18} />
                Смотреть демо
              </Button>
            </div>
          </div>
        )}
      </nav>

      <HeroSection />
      <Values />
      <Features />
      <UseCases />
      <HowToStart />
      <Advantages />
      <PricingAndFAQ />
      <PartnershipAndFooter />
    </div>
  );
};

export default Index;