
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CalendarIcon, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const TrackerSection = () => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleDuration, setCycleDuration] = useState('28');
  const [periodLength, setPeriodLength] = useState('5');
  const [prediction, setPrediction] = useState<null | { 
    nextPeriod: string; 
    fertileWindow: string;
    tip: string;
  }>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!lastPeriod) {
      toast.error('Please select your last period start date');
      return;
    }

    // Parse dates and calculate next period
    const lastPeriodDate = new Date(lastPeriod);
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(lastPeriodDate.getDate() + parseInt(cycleDuration));
    
    // Calculate fertile window (typically 12-16 days before next period)
    const fertileStartDate = new Date(nextPeriodDate);
    fertileStartDate.setDate(nextPeriodDate.getDate() - 16);
    const fertileEndDate = new Date(nextPeriodDate);
    fertileEndDate.setDate(nextPeriodDate.getDate() - 12);

    // Format dates for display
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      });
    };

    // Random tips for period self-care
    const tips = [
      "Remember to stay hydrated! Extra water can help with bloating.",
      "Try gentle stretching or yoga to help ease cramps.",
      "A heating pad on your lower abdomen might help with cramps.",
      "It's normal for your energy levels to change during your cycle - listen to your body.",
      "Dark chocolate contains magnesium which may help with PMS symptoms."
    ];
    
    setPrediction({
      nextPeriod: formatDate(nextPeriodDate),
      fertileWindow: `${formatDate(fertileStartDate)} - ${formatDate(fertileEndDate)}`,
      tip: tips[Math.floor(Math.random() * tips.length)]
    });

    toast.success('Period prediction calculated!');
  };

  return (
    <section id="tracker" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Track Your Flow
          </h2>
          <p className="text-lg text-gray-700">
            Understanding your cycle is empowering. Log your period dates and get predictions for your next cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <form onSubmit={handleCalculate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="last-period" className="text-gray-700">When did your last period start?</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="last-period"
                      type="date"
                      value={lastPeriod}
                      onChange={(e) => setLastPeriod(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cycle-length" className="text-gray-700">Average cycle length (days)</Label>
                  <Input
                    id="cycle-length"
                    type="number"
                    min="21"
                    max="45"
                    value={cycleDuration}
                    onChange={(e) => setCycleDuration(e.target.value)}
                    required
                  />
                  <p className="text-xs text-gray-500">Most cycles are between 21-35 days</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="period-length" className="text-gray-700">Average period length (days)</Label>
                  <Input
                    id="period-length"
                    type="number"
                    min="2"
                    max="10"
                    value={periodLength}
                    onChange={(e) => setPeriodLength(e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-pink-dark hover:bg-pink text-white"
                >
                  Calculate My Next Period
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="bg-lavender-light/50 rounded-3xl p-6 md:p-8">
            <div className="flex items-start mb-6">
              <Calendar className="h-8 w-8 text-lavender-dark mr-3 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Period Predictions</h3>
                <p className="text-gray-600">
                  Track your menstrual cycle to better understand your body and plan ahead.
                </p>
              </div>
            </div>

            {prediction ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-pink-dark mb-2">Your Next Period</h4>
                  <p className="text-gray-800 text-xl">{prediction.nextPeriod}</p>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-lavender-dark mb-2">Fertile Window</h4>
                  <p className="text-gray-800 text-xl">{prediction.fertileWindow}</p>
                </div>

                <div className="bg-peach-light/70 rounded-xl p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Self-Care Tip</h4>
                  <p className="text-gray-700">{prediction.tip}</p>
                </div>
              </div>
            ) : (
              <div className="bg-white/60 rounded-xl p-8 text-center">
                <p className="text-gray-500 mb-4">Enter your last period date to see predictions</p>
                <div className="text-4xl mb-2">📆</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackerSection;
