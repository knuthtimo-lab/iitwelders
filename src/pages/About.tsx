import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building, Users, Award } from 'lucide-react';
import content from '@/content/content.json';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-display-md font-bold text-foreground">
                {content.about.title}
              </h1>
              <p className="text-xl text-muted">
                A legacy of excellence in Texas welding and fabrication
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-gradient-card p-8 rounded-xl border border-border">
                    <p className="text-muted leading-relaxed text-lg">
                      {content.about.col1}
                    </p>
                  </div>
                  
                  {/* Company Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                      <div className="text-3xl font-bold text-accent mb-2">500+</div>
                      <div className="text-sm text-muted">Projects Completed</div>
                    </div>
                    <div className="bg-gradient-card p-6 rounded-xl border border-border text-center">
                      <div className="text-3xl font-bold text-accent mb-2">20+</div>
                      <div className="text-sm text-muted">Years Experience</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-gradient-card p-8 rounded-xl border border-border">
                    <p className="text-muted leading-relaxed text-lg">
                      {content.about.col2}
                    </p>
                  </div>

                  {/* Values */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-gradient-card rounded-xl border border-border">
                      <Building className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Quality First</h3>
                        <p className="text-muted text-sm">Every project meets the highest standards of craftsmanship and durability.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gradient-card rounded-xl border border-border">
                      <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Team Excellence</h3>
                        <p className="text-muted text-sm">Our skilled professionals bring decades of combined experience to every job.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gradient-card rounded-xl border border-border">
                      <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Customer Focus</h3>
                        <p className="text-muted text-sm">We build lasting relationships through reliable service and competitive pricing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-bg-elevated">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-display-sm font-bold text-foreground mb-12">Our Journey</h2>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6 p-6 bg-gradient-card rounded-xl border border-border">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-ink font-bold">2004</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-2">Company Founded</h3>
                    <p className="text-muted">Established in Texas with a commitment to quality welding and fabrication services.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 bg-gradient-card rounded-xl border border-border">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-ink font-bold">2010</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-2">Facility Expansion</h3>
                    <p className="text-muted">Expanded our fabrication shop with state-of-the-art equipment and technology.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 bg-gradient-card rounded-xl border border-border">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-ink font-bold">2024</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-2">Continued Excellence</h3>
                    <p className="text-muted">Today we continue to serve Texas with unmatched quality and service.</p>
                  </div>
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

export default About;