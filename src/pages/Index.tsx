import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CompanyBlurb from '@/components/CompanyBlurb';
import LogoSection from '@/components/LogoSection';

const Index = () => {
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
