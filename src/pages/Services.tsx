import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Settings, Shield } from 'lucide-react';
import content from '@/content/content.json';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-display-md font-bold text-foreground">
                {content.services.title}
              </h1>
              <p className="text-xl text-muted">
                Professional welding and fabrication services tailored to your industrial needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-bg-elevated">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Services Column */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-8">
                    <Wrench className="h-8 w-8 text-accent" />
                    <h2 className="text-2xl font-bold text-foreground">Services</h2>
                  </div>
                  <div className="space-y-4">
                    {content.services.services.map((service, index) => (
                      <div key={index} className="bg-gradient-card p-6 rounded-xl border border-border hover:shadow-subtle transition-smooth">
                        <h3 className="font-semibold text-foreground mb-2">{service}</h3>
                        <p className="text-muted text-sm">Professional service with certified specialists and modern equipment</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties Column */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-8">
                    <Settings className="h-8 w-8 text-accent" />
                    <h2 className="text-2xl font-bold text-foreground">Specialties</h2>
                  </div>
                  <div className="space-y-4">
                    {content.services.specialties.map((specialty, index) => (
                      <div key={index} className="bg-gradient-card p-6 rounded-xl border border-border hover:shadow-subtle transition-smooth">
                        <h3 className="font-semibold text-foreground mb-2">{specialty}</h3>
                        <p className="text-muted text-sm">Specialized expertise with attention to detail and quality assurance</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Shield className="h-10 w-10 text-accent" />
                <h2 className="text-display-sm font-bold text-foreground">Quality Assurance</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Certified Processes</h3>
                  <p className="text-muted">All work follows industry standards and safety protocols</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                    <Wrench className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Expert Craftsmen</h3>
                  <p className="text-muted">Skilled professionals with extensive experience</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                    <Settings className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Modern Equipment</h3>
                  <p className="text-muted">State-of-the-art tools and technology</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;