import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Shield, Award } from 'lucide-react';
import content from '@/content/content.json';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg/90 to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-display-lg font-bold text-foreground leading-none">
                {content.home.heroTitle}
              </h1>
              <p className="text-xl text-muted max-w-lg leading-relaxed">
                {content.home.heroSubtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                {content.home.ctaServices}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                {content.home.ctaExplore}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {content.home.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-md flex items-center justify-center">
                    {index === 0 && <Wrench className="h-4 w-4 text-accent" />}
                    {index === 1 && <Shield className="h-4 w-4 text-accent" />}
                    {index === 2 && <Award className="h-4 w-4 text-accent" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-muted text-xs leading-relaxed mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative lg:ml-8">
            <div className="relative bg-gradient-card rounded-2xl p-8 shadow-elevated">
              <div className="aspect-[4/3] bg-muted/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Wrench className="h-16 w-16 text-accent mx-auto" />
                  <p className="text-muted text-sm">Industrial Facility Image</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-subtle border border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-foreground font-medium">Active Projects: 15+</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-subtle border border-border">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-xs text-foreground font-medium">20+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent/10 border-t border-accent/20 z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="text-center">
            <a href="/employees-notice" className="text-accent hover:text-accent/80 transition-smooth text-sm font-medium">
              {content.home.employeesNotice}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;