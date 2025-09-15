import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import content from '@/content/content.json';

const CompanyBlurb = () => {
  return (
    <section className="py-24 bg-bg-elevated">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Precision Craftsmanship, Reliable Service
              </h2>
              <p className="text-muted leading-relaxed text-xl font-light">
                {content.home.blurbLeft}
              </p>
              <Button size="lg" className="group bg-accent hover:bg-accent/90">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elevated border border-border">
                <p className="text-muted leading-relaxed text-lg mb-8">
                  {content.home.blurbRight}
                </p>
                
                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-accent mb-2 group-hover:animate-glow transition-all">500+</div>
                    <div className="text-sm text-muted font-medium">Projects Completed</div>
                    <div className="w-12 h-0.5 bg-accent/30 mx-auto mt-2"></div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-accent mb-2 group-hover:animate-glow transition-all">20+</div>
                    <div className="text-sm text-muted font-medium">Years Experience</div>
                    <div className="w-12 h-0.5 bg-accent/30 mx-auto mt-2"></div>
                  </div>
                </div>
                
                {/* Additional highlights */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Certified Welders</span>
                    <span className="text-ink font-medium">✓ AWS Certified</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-muted">Safety Record</span>
                    <span className="text-ink font-medium">✓ Zero Incidents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBlurb;