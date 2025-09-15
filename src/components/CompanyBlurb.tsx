import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import content from '@/content/content.json';

const CompanyBlurb = () => {
  return (
    <section className="py-24 bg-bg-elevated">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-display-sm font-bold text-foreground">
                Precision Craftsmanship, Reliable Service
              </h2>
              <p className="text-muted leading-relaxed text-lg">
                {content.home.blurbLeft}
              </p>
              <Button className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-card rounded-xl p-8 shadow-subtle border border-border">
                <p className="text-muted leading-relaxed">
                  {content.home.blurbRight}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">20+</div>
                    <div className="text-sm text-muted">Years Experience</div>
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