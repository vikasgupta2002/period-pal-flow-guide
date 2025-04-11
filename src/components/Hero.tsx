import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-pink-light/30 pt-16 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-heading mb-4">
              Your kind, smart, and stigma-free guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Hey, it's okay. We've all been there. Let's flow through it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="rounded-full bg-pink-dark hover:bg-pink text-white"
                onClick={() => scrollToSection('tracker')}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Track Your Period
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-lavender-dark text-lavender-dark hover:bg-lavender-light"
                onClick={() => scrollToSection('guide')}
              >
                Beginner's Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-64 md:h-80 lg:h-96 w-full">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-pink-light flex items-center justify-center animate-float">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-lavender-light flex items-center justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-peach-light flex items-center justify-center">
                      <div className="text-3xl md:text-4xl">💖</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 left-10 md:left-20 w-12 h-12 rounded-full bg-pink-light animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-10 right-10 md:right-20 w-16 h-16 rounded-full bg-lavender-light animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-20 right-0 w-10 h-10 rounded-full bg-peach-light animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            emoji="📅" 
            title="Track Your Flow" 
            description="Log your period and get predictions for your next cycle with our AI-powered tracker."
          />
          <FeatureCard 
            emoji="🔍" 
            title="Myth Busters" 
            description="Separate fact from fiction with our science-backed period myth busters."
          />
          <FeatureCard 
            emoji="💬" 
            title="Ask Me Anything" 
            description="Get answers to all your period-related questions in a safe space."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  emoji, 
  title, 
  description 
}: { 
  emoji: string; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Hero;
