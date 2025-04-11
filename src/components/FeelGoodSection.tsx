
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeartPulse, Coffee, ShowerHead, Dumbbell, Utensils } from 'lucide-react';

const FeelGoodSection = () => {
  return (
    <section id="feel-good" className="py-20 bg-gradient-to-b from-white to-peach-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Feel-Good Section
          </h2>
          <p className="text-lg text-gray-700">
            Self-care tips and tricks to help you feel your best during your cycle.
          </p>
        </div>
        
        <Tabs defaultValue="cramps" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 p-1">
              <TabsTrigger 
                value="cramps" 
                className="data-[state=active]:bg-pink-dark data-[state=active]:text-white"
              >
                Cramp Relief
              </TabsTrigger>
              <TabsTrigger 
                value="mood" 
                className="data-[state=active]:bg-pink-dark data-[state=active]:text-white"
              >
                Mood Boosters
              </TabsTrigger>
              <TabsTrigger 
                value="energy" 
                className="data-[state=active]:bg-pink-dark data-[state=active]:text-white"
              >
                Energy Tips
              </TabsTrigger>
              <TabsTrigger 
                value="sleep" 
                className="data-[state=active]:bg-pink-dark data-[state=active]:text-white"
              >
                Sleep Better
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="cramps">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-pink-light to-pink-light/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HeartPulse className="h-6 w-6 text-pink-dark" />
                      <h3 className="text-xl font-bold text-gray-800">Cramp Hacks</h3>
                    </div>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-white rounded-full p-2 mt-1">
                          <span>🔥</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Heat Therapy</h4>
                          <p className="text-gray-600">A heating pad or hot water bottle on your lower abdomen can help relax the muscles and reduce pain.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-white rounded-full p-2 mt-1">
                          <span>🧘‍♀️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Gentle Stretching</h4>
                          <p className="text-gray-600">Yoga poses like child's pose, cat-cow, and butterfly can help ease tension in your abdomen and lower back.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-white rounded-full p-2 mt-1">
                          <span>💧</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Stay Hydrated</h4>
                          <p className="text-gray-600">Drinking plenty of water can help reduce bloating and ease cramp pain.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-white p-6 rounded-3xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Heat Helps</h3>
                
                <p className="text-gray-700 mb-6">
                  During your period, your uterus contracts to help shed its lining. These contractions can press against blood vessels, cutting off oxygen supply to the uterus muscle tissue and causing pain.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Heat helps increase blood flow to the area, relaxing the uterine muscles and easing the pain of cramps. It also has a general soothing effect that can help you feel more comfortable.
                </p>
                
                <div className="bg-pink-light/30 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">Quick Heat Relief Recipe</h4>
                  <ol className="text-gray-700 list-decimal pl-5 space-y-1">
                    <li>Fill a clean sock with uncooked rice</li>
                    <li>Tie the end of the sock</li>
                    <li>Microwave for 1-2 minutes</li>
                    <li>Apply to your lower abdomen</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mood">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MoodCard 
                icon={<Coffee className="h-6 w-6 text-pink-dark" />}
                title="Create a Cozy Space"
                description="Set up a comfortable nook with soft blankets, pillows, and your favorite book or show to help you relax and recharge."
              />
              
              <MoodCard 
                icon={<ShowerHead className="h-6 w-6 text-pink-dark" />}
                title="Take a Warm Bath"
                description="Add Epsom salts, essential oils, or bubbles for a spa-like experience that soothes both body and mind."
              />
              
              <MoodCard 
                icon={<Dumbbell className="h-6 w-6 text-pink-dark" />}
                title="Gentle Movement"
                description="Light exercise releases endorphins that can improve your mood and reduce feelings of anxiety or depression."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="energy">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-lavender-light to-lavender-light/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Utensils className="h-6 w-6 text-lavender-dark" />
                      <h3 className="text-xl font-bold text-gray-800">Energy-Boosting Foods</h3>
                    </div>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-white rounded-full p-2 mt-1">
                          <span>🥬</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Iron-Rich Foods</h4>
                          <p className="text-gray-600">Leafy greens, beans, and lean meats help replenish iron lost during menstruation.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-white rounded-full p-2 mt-1">
                          <span>🍫</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Dark Chocolate</h4>
                          <p className="text-gray-600">Contains magnesium that may help with PMS symptoms and boost your mood.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-white rounded-full p-2 mt-1">
                          <span>🥜</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Nuts and Seeds</h4>
                          <p className="text-gray-600">Provide protein, healthy fats, and sustained energy throughout the day.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-white p-6 rounded-3xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Energy Boosts</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-lavender-light/50 rounded-full p-2 mt-1">
                      <span>💧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Hydrate</h4>
                      <p className="text-gray-600">Dehydration can leave you feeling even more tired. Aim for at least 8 glasses of water daily.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="bg-lavender-light/50 rounded-full p-2 mt-1">
                      <span>🌞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sunlight</h4>
                      <p className="text-gray-600">Even just 10-15 minutes of natural light can help reset your body clock and boost energy.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="bg-lavender-light/50 rounded-full p-2 mt-1">
                      <span>⏱️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Power Naps</h4>
                      <p className="text-gray-600">A 20-minute nap can improve alertness without making you feel groggy.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sleep">
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Sleep Better During Your Period</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">🌙</span> Before Bed
                  </h4>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-dark font-bold">•</span>
                      <p className="text-gray-700">Use a heating pad to ease cramps before sleep</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-dark font-bold">•</span>
                      <p className="text-gray-700">Try deep breathing or gentle stretching to relax</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-dark font-bold">•</span>
                      <p className="text-gray-700">Avoid caffeine and sugar at least 4 hours before bed</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-dark font-bold">•</span>
                      <p className="text-gray-700">Consider wearing period underwear or using a menstrual cup for overnight protection</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">🛌</span> Sleeping Position Tips
                  </h4>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-dark font-bold">•</span>
                      <p className="text-gray-700">The fetal position can take pressure off your abdominal muscles</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-dark font-bold">•</span>
                      <p className="text-gray-700">Place a pillow between your knees to align your hips</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-dark font-bold">•</span>
                      <p className="text-gray-700">Keep a towel under you if you're worried about leaks</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-dark font-bold">•</span>
                      <p className="text-gray-700">Change your pad or tampon right before bed for maximum protection</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const MoodCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="bg-lavender-light/30 rounded-full p-3 w-fit mb-4">
          {icon}
        </div>
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeelGoodSection;
