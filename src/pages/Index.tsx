import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesAndValues from '@/components/sections/FeaturesAndValues';
import PricingAndFAQ from '@/components/sections/PricingAndFAQ';
import PartnershipAndFooter from '@/components/sections/PartnershipAndFooter';

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
              {['Главная', 'Возможности', 'Преимущества', 'Цены', 'Партнёрам'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
              <Icon name="Play" className="mr-2" size={18} />
              Смотреть демо
            </Button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <FeaturesAndValues />
      <PricingAndFAQ />
      <PartnershipAndFooter />
    </div>
  );
};

export default Index;