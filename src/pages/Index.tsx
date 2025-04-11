
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrackerSection from '@/components/TrackerSection';
import MythBuster from '@/components/MythBuster';
import BeginnerGuide from '@/components/BeginnerGuide';
import FeelGoodSection from '@/components/FeelGoodSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <TrackerSection />
        <MythBuster />
        <BeginnerGuide />
        <FeelGoodSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
