import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Settings, Shield, Award, Users, CheckCircle, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    'Tig Welders', 'Pipe Welders', 'Mig Welders', 'Flux Cored Welders', 'Sub Arc Welders', 
    '6-GR Welders', 'Structural Welders', 'Tack Welders', 'Pipe Fitters', 'Structural Fitters',
    'Supervisors', 'Foremans', 'Safety Inspectors', 'Boiler Makers', 'Scaffold Builders',
    'Personnel / Laborers', 'CWI Inspectors', 'Rig Welders'
  ];

  const specialties = [
    'Jack Up Oil Rigs', 'Semi-Submersible Oil Rigs', 'Gas Land Rigs', 'Refineries',
    'Platform Jackets', 'Civil Structures', 'Piled Towers', 'Platform Decks',
    'Pressure Vessels', 'Structure Skids', 'Pipe Lines', 'Boats / Ships'
  ];

  const certifications = [
    'AWS Certified Welders',
    'ASME Code Welding', 
    'ABS Marine Welding',
    'API Standards',
    'Quality Control Inspectors'
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-slate-800 border-b border-slate-700 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => window.location.href = '/'}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="h-4 w-4 text-slate-500" />
            <span className="text-white font-medium">Services & Specialties</span>
          </div>
        </div>
      </nav>
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-32 overflow-hidden hero-transition">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero_subpage.png)' }}
          >
          </div>

          {/* Geometric Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Services & 
                <span className="text-blue-400"> Specialties</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Professional welding and fabrication services for industrial and commercial projects. 
                Delivering expert craftsmanship with certified welders and modern equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-800 bg-pattern-grid section-transition-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Services Column */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">Services</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="card-enhanced card-hover hover-slide p-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                          <span className="text-white font-medium">{service}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties Column */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Settings className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">Specialties</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {specialties.map((specialty, index) => (
                      <div key={index} className="card-enhanced card-hover hover-slide p-6">
                        <div className="flex items-center space-x-3">
                          <Award className="h-6 w-6 text-blue-400 flex-shrink-0" />
                          <div>
                            <h3 className="text-white font-semibold text-lg">{specialty}</h3>
                            <p className="text-slate-400 text-sm">Specialized expertise with attention to detail and quality assurance</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Transition */}
        <div className="relative h-40 bg-gradient-to-b from-slate-800 via-slate-800/80 to-slate-900/60">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-transparent to-slate-900/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Certifications Section */}
        <section className="py-24 bg-slate-900 bg-pattern-lines section-transition-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white">Welder Certifications</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="card-enhanced card-hover hover-slide p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
                        <Shield className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-white font-semibold">{cert}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card-enhanced card-hover hover-slide p-8">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                  <p className="text-slate-400">Certified professionals with decades of experience in industrial welding</p>
                </div>
                
                <div className="card-enhanced card-hover hover-slide p-8">
                  <Settings className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Modern Equipment</h3>
                  <p className="text-slate-400">State-of-the-art welding equipment and fabrication tools</p>
                </div>
                
                <div className="card-enhanced card-hover hover-slide p-8">
                  <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
                  <p className="text-slate-400">Rigorous quality control and safety standards on every project</p>
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