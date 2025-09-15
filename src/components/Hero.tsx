import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Shield, Award } from 'lucide-react';
import content from '@/content/content.json';
import heroWelder from '@/assets/hero-welder.jpg';
import heroFacility from '@/assets/hero-facility.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-t border-accent/20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 border-r border-b border-accent/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-24">
          {/* Content - Left Side */}
          <div className="lg:col-span-6 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[0.9] tracking-tight">
                {content.home.heroTitle}
              </h1>
              <p className="text-xl lg:text-2xl text-muted max-w-2xl leading-relaxed font-light">
                {content.home.heroSubtitle}
              </p>
            </div>

            {/* CTAs - Matching Dispel Style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="xl" 
                variant="hero"
                className="bg-ink text-bg hover:bg-ink/90 shadow-elevated font-semibold text-lg px-8 py-4 h-auto"
              >
                Get Quote
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-ink/30 text-ink hover:bg-ink/10 hover:border-ink font-semibold text-lg px-8 py-4 h-auto"
              >
                {content.home.ctaServices}
              </Button>
            </div>
          </div>

          {/* Hero Images - Right Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Hero Image Container */}
              <div className="relative bg-gradient-to-br from-bg-elevated/50 to-transparent p-1 rounded-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={heroWelder}
                    alt="Professional welder working with industrial equipment"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Secondary Image - Overlaid */}
              <div className="absolute -top-8 -right-8 w-64 h-48 bg-gradient-to-br from-bg-elevated/50 to-transparent p-1 rounded-xl">
                <div className="relative overflow-hidden rounded-lg h-full">
                  <img 
                    src={heroFacility}
                    alt="Industrial fabrication facility"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent"></div>
                  
                  {/* Label */}
                  <div className="absolute top-3 left-3 bg-bg/80 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-ink text-xs font-medium">Our Facility</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative border elements */}
              <div className="absolute -inset-4 border border-accent/20 rounded-2xl pointer-events-none"></div>
              <div className="absolute -inset-8 border-l border-t border-accent/10 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-elevated border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink">500+</div>
                  <div className="text-sm text-muted">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 right-8 bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-elevated border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink">20+</div>
                  <div className="text-sm text-muted">Years Experience</div>
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