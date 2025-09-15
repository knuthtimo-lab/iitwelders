import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CompanyBlurb from '@/components/CompanyBlurb';
import LogoSection from '@/components/LogoSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <Hero />
        <LogoSection />
        <CompanyBlurb />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
