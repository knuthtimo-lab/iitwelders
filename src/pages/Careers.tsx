import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Clock, Download, Upload, Phone, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const positions = [
    'Pipe Tig Welders',
    'Pipe Fitters', 
    'Structural Welders',
    'Structural Fitters',
    'Industrial Electrician Journey man'
  ];

  const benefits = [
    'Competitive wages',
    'Health insurance options',
    'Safety training provided',
    'Career advancement opportunities',
    'Project-based employment',
    'Travel opportunities'
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
            <span className="text-white font-medium">Careers</span>
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
                Join Our
                <span className="text-blue-400"> Team</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                International Inspection Technology (IIT Welders) is looking for qualified skilled crafts 
                for several work locations. Build your career with industry leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-24 bg-slate-800 section-transition-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Current Openings</h2>
                <p className="text-slate-400 text-lg">We are currently hiring the following skilled crafts</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {positions.map((position, index) => (
                  <div key={index} className="bg-slate-700/50 border border-slate-600 rounded-xl p-6 hover:bg-slate-700/70 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{position}</h3>
                        <p className="text-slate-400 text-sm">Multiple positions available</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-16 text-center">
                <div className="bg-slate-900/50 border border-slate-600 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Before Applying</h3>
                  <p className="text-slate-300 mb-6">
                    Please contact the IIT Welders office for current available positions and work locations
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <a href="tel:956-831-5164" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                      956-831-5164
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-slate-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Office hours: Monday thru Friday from 8:00 AM thru 5:00 PM</span>
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

        {/* Benefits Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
                <p className="text-slate-400 text-lg">Join a growing company that values skilled craftsmanship and safety</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-slate-800/50 border border-slate-600 rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-24 bg-slate-800 section-transition-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Application Process</h2>
                <p className="text-slate-400 text-lg">Ready to join our team? Follow these simple steps</p>
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">Download Application</h3>
                      <p className="text-slate-300 mb-6">
                        If you are interested in applying, please download the application information packet.
                      </p>
                      <Button className="bg-white hover:bg-gray-100 text-slate-900 font-semibold">
                        <Download className="h-4 w-4 mr-2" />
                        Download Application Packet
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">Complete Application</h3>
                      <p className="text-slate-300 mb-6">
                        Fill out all required forms in the application packet completely and accurately.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">Submit Application</h3>
                      <p className="text-slate-300 mb-6">
                        Once you have completed the application forms packet, upload your application and submit.
                      </p>
                      <Button variant="outline" className="border-slate-500/50 bg-slate-800/50 text-white hover:bg-slate-700/50 hover:border-slate-400">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Application
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">We'll Contact You</h3>
                      <p className="text-slate-300">
                        We will contact you directly with any additional information requests and next steps in the process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-slate-300 text-lg mb-6">
                  Thank you for considering employment with our company.
                </p>
                <div className="bg-slate-900/50 border border-slate-600 rounded-xl p-6">
                  <p className="text-slate-400">
                    Questions about the application process? Contact us at{' '}
                    <a href="tel:956-831-5164" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                      956-831-5164
                    </a>
                  </p>
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

export default Careers;
