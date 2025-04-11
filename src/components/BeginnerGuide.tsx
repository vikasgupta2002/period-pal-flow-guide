
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Book, Droplets, Package, HeartHandshake } from 'lucide-react';

const BeginnerGuide = () => {
  return (
    <section id="guide" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Beginner's Guide
          </h2>
          <p className="text-lg text-gray-700">
            Everything you need to know about periods, explained simply and kindly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <GuideCard 
            icon={<Book className="h-10 w-10 text-pink-dark" />}
            title="First Period 101"
            description="What to expect, how to prepare, and everything you need to know for your first period experience."
          />
          
          <GuideCard 
            icon={<Droplets className="h-10 w-10 text-pink-dark" />}
            title="Understanding Your Flow"
            description="Learn about different flow types, what's normal, and when to talk to a healthcare provider."
          />
          
          <GuideCard 
            icon={<Package className="h-10 w-10 text-pink-dark" />}
            title="Period Products Guide"
            description="Explore different period products from pads to period underwear and find what works best for you."
          />
        </div>
        
        <div className="bg-peach-light/50 rounded-3xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="md:w-1/4 flex justify-center">
              <div className="text-7xl md:text-8xl">📦</div>
            </div>
            
            <div className="md:w-3/4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Period Product Basics
              </h3>
              
              <p className="text-lg text-gray-700 mb-6">
                Choosing the right period products can make all the difference in your comfort. Here's a quick overview of the most common options:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ProductCard
                  name="Pads"
                  description="Stick to underwear, absorb blood externally. Great for beginners!"
                  pros={["Easy to use", "No insertion needed", "Good for overnight"]}
                  cons={["Can feel bulky", "May shift during activities"]}
                />
                
                <ProductCard
                  name="Tampons"
                  description="Cotton plugs inserted into the vagina that absorb blood internally."
                  pros={["Less noticeable", "Can swim with them", "Doesn't feel wet"]}
                  cons={["Learning curve", "Need to change every 4-8 hours"]}
                />
              </div>
              
              <div className="mt-8 flex justify-center md:justify-end">
                <Button className="rounded-full bg-pink-dark hover:bg-pink text-white">
                  See Full Product Guide
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-lavender-light/30 rounded-3xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake className="h-6 w-6 text-lavender-dark" />
                <h3 className="text-xl font-bold text-gray-800">Remember</h3>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Your journey is unique and that's perfectly normal
              </h4>
              
              <p className="text-lg text-gray-700">
                Everyone's period experience is different. There's no "right way" to have a period. Learning about your unique cycle is a journey, and we're here to help every step of the way.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="text-8xl">💜</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GuideCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-pink-light/50 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button variant="link" className="text-pink-dark hover:text-pink gap-1">
            Read More
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductCard = ({ 
  name, 
  description, 
  pros, 
  cons 
}: { 
  name: string;
  description: string;
  pros: string[];
  cons: string[];
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h5 className="font-bold text-lg mb-2 text-gray-800">{name}</h5>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      
      <div className="space-y-2">
        <div>
          <span className="text-green-600 font-medium text-sm">Pros:</span>
          <ul className="text-sm text-gray-600 pl-5 mt-1 list-disc">
            {pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <span className="text-red-500 font-medium text-sm">Cons:</span>
          <ul className="text-sm text-gray-600 pl-5 mt-1 list-disc">
            {cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeginnerGuide;
