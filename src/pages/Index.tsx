import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CompanyBlurb from '@/components/CompanyBlurb';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CompanyBlurb />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
