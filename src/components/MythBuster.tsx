
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const myths = [
  {
    myth: "You can't swim during your period",
    truth: "You absolutely can swim during your period! Water pressure temporarily slows flow, and using tampons or menstrual cups makes swimming comfortable and leak-free.",
    icon: "🏊‍♀️"
  },
  {
    myth: "Periods sync up when people live together",
    truth: "Despite the popular belief, scientific research doesn't support the idea that periods synchronize. Any alignment is likely coincidental due to overlapping cycle lengths.",
    icon: "👯‍♀️"
  },
  {
    myth: "PMS is just in your head",
    truth: "PMS is a real physical and emotional condition caused by hormonal changes. Over 90% of menstruating people experience some form of premenstrual symptoms.",
    icon: "🧠"
  },
  {
    myth: "You shouldn't exercise during your period",
    truth: "Exercise can actually help reduce period pain! Light to moderate exercise releases endorphins that act as natural painkillers for cramps.",
    icon: "🏃‍♀️"
  },
  {
    myth: "Periods always come every 28 days",
    truth: "Cycle length varies from person to person and can range from 21-40 days. Even for the same person, cycles can vary from month to month.",
    icon: "📅"
  },
  {
    myth: "If you miss a period, you're pregnant",
    truth: "While pregnancy is one reason for a missed period, stress, weight changes, excessive exercise, hormonal imbalances, and other factors can also cause missed periods.",
    icon: "😰"
  },
  {
    myth: "Period blood is dirty or toxic",
    truth: "Period blood is just a mixture of blood, tissue from the uterine lining, and natural secretions. It's not dirty, toxic, or harmful in any way.",
    icon: "💧"
  },
  {
    myth: "You can't get pregnant during your period",
    truth: "While less likely, it's still possible to get pregnant if you have sex during your period, especially if you have a shorter cycle or longer periods.",
    icon: "👶"
  },
  {
    myth: "Pain during periods is always normal",
    truth: "While mild to moderate discomfort is common, severe pain that interferes with daily life could indicate conditions like endometriosis and should be discussed with a healthcare provider.",
    icon: "🩺"
  },
  {
    myth: "Tampons take away virginity",
    truth: "Using tampons does not affect virginity. Virginity is about sexual experience, not physical characteristics. The hymen (a thin tissue) can stretch, not 'break', and varies naturally in all bodies.",
    icon: "💭"
  }
];

const MythBuster = () => {
  const [currentMythIndex, setCurrentMythIndex] = useState(0);
  
  const nextMyth = () => {
    setCurrentMythIndex((prev) => (prev === myths.length - 1 ? 0 : prev + 1));
  };
  
  const prevMyth = () => {
    setCurrentMythIndex((prev) => (prev === 0 ? myths.length - 1 : prev - 1));
  };
  
  const currentMyth = myths[currentMythIndex];

  return (
    <section id="myths" className="py-20 bg-gradient-to-b from-white to-lavender-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Myth Buster Zone
          </h2>
          <p className="text-lg text-gray-700">
            Let's separate fact from fiction with science-backed information about periods.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none overflow-hidden bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-lavender-light/50 w-full md:w-1/3 aspect-square rounded-full flex items-center justify-center p-8">
                  <span className="text-7xl md:text-8xl">{currentMyth.icon}</span>
                </div>
                
                <div className="md:w-2/3 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-5 w-5 text-pink-dark" />
                    <h3 className="text-xl font-bold text-gray-700">Myth #{currentMythIndex + 1}</h3>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative">
                    <span className="line-through text-red-400 opacity-70">{currentMyth.myth}</span>
                  </h4>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h5 className="font-bold text-gray-800 mb-2">The Truth:</h5>
                    <p className="text-gray-700">{currentMyth.truth}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center gap-3 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevMyth}
              className="rounded-full bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous myth</span>
            </Button>
            
            <div className="flex items-center gap-1">
              {myths.map((_, index) => (
                <span
                  key={index}
                  className={`block h-2 w-2 rounded-full ${
                    index === currentMythIndex ? 'bg-pink-dark' : 'bg-gray-300'
                  }`}
                ></span>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextMyth}
              className="rounded-full bg-white"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next myth</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythBuster;
