
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrackerSection from '@/components/TrackerSection';
import MythBuster from '@/components/MythBuster';
import BeginnerGuide from '@/components/BeginnerGuide';
import FeelGoodSection from '@/components/FeelGoodSection';
import CrampReliefAudio from '@/components/CrampReliefAudio';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="tracker">
          <TrackerSection />
        </section>
        <section id="myths">
          <MythBuster />
        </section>
        <section id="guide">
          <BeginnerGuide />
        </section>
        <section id="feelgood">
          <FeelGoodSection />
        </section>
        <section id="cramprelief">
          <CrampReliefAudio />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
