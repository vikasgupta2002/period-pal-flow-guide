
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, Book, Droplets, Package, HeartHandshake, Calendar, Info, CheckCircle, AlertTriangle } from 'lucide-react';

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <GuideCard 
            icon={<Book className="h-10 w-10 text-pink-dark" />}
            title="First Period 101"
            description="What to expect, how to prepare, and everything you need to know for your first period experience."
            id="first-period"
          />
          
          <GuideCard 
            icon={<Droplets className="h-10 w-10 text-pink-dark" />}
            title="Understanding Your Flow"
            description="Learn about different flow types, what's normal, and when to talk to a healthcare provider."
            id="flow"
          />
          
          <GuideCard 
            icon={<Package className="h-10 w-10 text-pink-dark" />}
            title="Period Products Guide"
            description="Explore different period products from pads to period underwear and find what works best for you."
            id="products"
          />
        </div>
        
        <Tabs defaultValue="first-period" className="w-full mt-12">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 mb-8 bg-lavender-light/40">
            <TabsTrigger value="first-period" className="data-[state=active]:bg-lavender-light data-[state=active]:text-lavender-dark">First Period 101</TabsTrigger>
            <TabsTrigger value="flow" className="data-[state=active]:bg-lavender-light data-[state=active]:text-lavender-dark">Understanding Flow</TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-lavender-light data-[state=active]:text-lavender-dark">Period Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="first-period" className="bg-pink-light/30 rounded-3xl p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Info className="h-5 w-5 text-pink-dark" />
                <h4 className="text-xl font-bold text-gray-800">What is a period?</h4>
              </div>
              <p className="text-gray-700 pl-7">
                Your period (or menstruation) is your body's natural way of releasing the uterus lining each month when there's no pregnancy. 
                It comes out as blood from your vagina. It's healthy, normal, and a sign your body's growing up 💖
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-pink-dark" />
                <h4 className="text-xl font-bold text-gray-800">When will I get it?</h4>
              </div>
              <div className="pl-7">
                <p className="text-gray-700 mb-3">
                  Most girls get their first period between ages 9–15. You might be getting close if:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>You're growing body hair</li>
                  <li>Your breasts are developing</li>
                  <li>You notice clear/white discharge in your underwear</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-pink-dark" />
                <h4 className="text-xl font-bold text-gray-800">What's it like?</h4>
              </div>
              <ul className="list-disc pl-12 text-gray-700 space-y-1">
                <li>Blood can be light or heavy, and even brown, pink, or red</li>
                <li>Periods usually last 3–7 days</li>
                <li>You might feel cramps, tired, or moody — it's all normal</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-pink-dark" />
                <h4 className="text-xl font-bold text-gray-800">How to prepare:</h4>
              </div>
              <div className="pl-7">
                <p className="text-gray-700 mb-3">
                  Make a Period Kit to keep in your backpack:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Pads or liners</li>
                  <li>Spare underwear</li>
                  <li>Wipes or tissues</li>
                  <li>Chocolate or a cute note-to-self 💌</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-sm mt-6">
              <div className="flex items-center gap-2 mb-3">
                <HeartHandshake className="h-5 w-5 text-pink-dark" />
                <h4 className="text-xl font-bold text-gray-800">Remember:</h4>
              </div>
              <p className="text-gray-700 pl-7 italic">
                It's okay to feel nervous or unsure. Everyone starts somewhere — and you've got this!
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="flow" className="bg-lavender-light/30 rounded-3xl p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Info className="h-5 w-5 text-lavender-dark" />
                <h4 className="text-xl font-bold text-gray-800">What's a "flow"?</h4>
              </div>
              <p className="text-gray-700 pl-7">
                Your flow is the amount of blood your body releases. It may change during your cycle.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-lavender-dark" />
                <h4 className="text-xl font-bold text-gray-800">Flow Types:</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-7">
                <FlowCard 
                  title="Light Flow" 
                  description="Small amount, often at the start or end of your period"
                  color="bg-blue-50 border-blue-200"
                />
                <FlowCard 
                  title="Medium Flow" 
                  description="Steady bleeding; most common on middle days"
                  color="bg-pink-light/50 border-pink-200"
                />
                <FlowCard 
                  title="Heavy Flow" 
                  description="Heavier bleeding; you may need to change your pad/tampon every 2–3 hours"
                  color="bg-red-50 border-red-200"
                />
                <FlowCard 
                  title="Spotting" 
                  description="Light blood outside your period days (often brown or pink)"
                  color="bg-amber-50 border-amber-200"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <h4 className="text-xl font-bold text-gray-800">When to talk to a doctor:</h4>
              </div>
              <ul className="list-disc pl-12 text-gray-700 space-y-2">
                <li>Bleeding through pads in under an hour</li>
                <li>Period lasting more than 8–10 days</li>
                <li>Missing periods for months (not due to birth control or other known causes)</li>
                <li>Severe pain that stops you from doing normal things</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="products" className="bg-peach-light/50 rounded-3xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Find the right product for you
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProductCard
                name="Pads"
                description="Stick to your underwear, absorb blood externally."
                bestFor="Beginners, overnight use, or those who prefer no insertion"
                pros={["Easy to use", "No insertion needed", "Good for overnight", "Many sizes available"]}
                cons={["Can feel bulky", "May shift during activities", "Not ideal for swimming"]}
                icon="📝"
              />
              
              <ProductCard
                name="Tampons"
                description="Cotton plugs inserted into the vagina that absorb blood internally."
                bestFor="Active days, swimming, or when you want discretion"
                pros={["Less noticeable", "Can swim with them", "Freedom of movement", "No visible bulkiness"]}
                cons={["Learning curve for insertion", "Need to change every 4-8 hours", "Rare risk of TSS"]}
                icon="🧶"
              />
              
              <ProductCard
                name="Menstrual Cups"
                description="Reusable silicone cups that collect rather than absorb blood."
                bestFor="Eco-conscious users, heavy flow, or long wear"
                pros={["Eco-friendly", "Can wear up to 12 hours", "Cost-effective long term", "Less waste"]}
                cons={["Steeper learning curve", "Initial investment cost", "Takes practice to insert"]}
                icon="🥤"
              />
              
              <ProductCard
                name="Period Underwear"
                description="Absorbent, leak-proof underwear that replaces or backs up other products."
                bestFor="Home use, overnight, light flow days, or as backup"
                pros={["Comfortable", "Reusable & eco-friendly", "Good backup option", "Feels like regular underwear"]}
                cons={["Upfront cost", "Need multiple pairs", "May feel damp", "Need to rinse/wash after use"]}
                icon="👙"
              />
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-sm mt-8">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <h4 className="text-xl font-bold text-gray-800">Pro Tip:</h4>
              </div>
              <p className="text-gray-700 pl-7">
                Many people use different products depending on their flow, activities, or comfort level. 
                It's okay to mix and match! You might use pads at night and tampons for swimming, for example.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
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
  description,
  id
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  id: string;
}) => {
  const scrollToTab = () => {
    const tabsList = document.querySelector('[role="tablist"]');
    if (tabsList) {
      tabsList.scrollIntoView({ behavior: 'smooth' });
      // Activate the corresponding tab
      const tab = document.querySelector(`[data-state="inactive"][value="${id}"]`) as HTMLButtonElement;
      if (tab) tab.click();
    }
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-pink-light/50 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button 
            variant="link" 
            className="text-pink-dark hover:text-pink gap-1"
            onClick={scrollToTab}
          >
            Read More
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FlowCard = ({ 
  title, 
  description,
  color
}: { 
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div className={`rounded-lg p-4 border ${color}`}>
      <h5 className="font-semibold mb-2">{title}</h5>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

const ProductCard = ({ 
  name, 
  description, 
  bestFor,
  pros, 
  cons,
  icon
}: { 
  name: string;
  description: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  icon: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <h5 className="font-bold text-lg mb-1 text-gray-800">{name}</h5>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          
          <div className="mb-3">
            <span className="text-pink-dark font-medium text-sm">Best for:</span>
            <p className="text-sm text-gray-700">{bestFor}</p>
          </div>
          
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
      </div>
    </div>
  );
};

export default BeginnerGuide;
