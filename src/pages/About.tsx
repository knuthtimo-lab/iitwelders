import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building, Users, Award, ChevronRight } from 'lucide-react';
import content from '@/content/content.json';

const About = () => {
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
            <span className="text-white font-medium">About Us</span>
          </div>
        </div>
      </nav>
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-subpage.png)' }}
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
                Welcome to
                <span className="text-blue-400"> Our Company</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                A Texas-based welding and fabrication company providing contract personnel 
                and expert services throughout the United States and Gulf of Mexico.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                  <div className="space-y-6 text-slate-300 leading-relaxed">
                    <p>
                      International Inspection Technology, a DBA of International Welding Technology, is a South Texas based company 
                      which provides contract personnel to several companies throughout the United States and the Gulf of Mexico.
                    </p>
                    <p>
                      These employees include various classes of Supervisors, Welders, Fitters, Safety Supervisors, Time Keepers, 
                      Administrators and any other personnel crafts. Our employees have worked on numerous projects for several companies. 
                      These projects include new fabrication and repair of Oil Rigs, Gas Land Rigs, Refinery and Civil Structure.
                    </p>
                    <p>
                      We are a rapidly growing company in the Welding and Fabrication Industry. We have three locations in the Texas area 
                      to better serve our clients' needs: Brownsville, Ingleside and Corpus Christi Texas.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Capabilities</h2>
                  <div className="space-y-6 text-slate-300 leading-relaxed">
                    <p>
                      We service our clients with any type of welding and fabrication as well as welder certifications on AWS, ASME and ABS Codes. 
                      Our Brownsville Shop is capable of all types of fabrication both big and small including structural or pipe fabrication.
                    </p>
                    <p>
                      We also have a related company that specializes in Heat Stress, X Rays, UT/MT NDE work at any job site. 
                      For the past 13 years we have been servicing companies with refurbishing and building new Offshore Oil Rigs, 
                      Gas Land Rigs, Pressure Vessels, Refineries as well as working in fabrication shops and other professional sites.
                    </p>
                    <p>
                      We support our clients at every phase of their project's needs, we have earned a good reputation for providing 
                      good quality work and personnel to these companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Company Statistics</h2>
                <p className="text-slate-400 text-lg">Our track record speaks for itself</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">800+</div>
                  <div className="text-slate-400">Skilled Craftsmen</div>
                  <div className="text-sm text-slate-500 mt-2">Ready for mobilization 24/7</div>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Building className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">13+</div>
                  <div className="text-slate-400">Years Experience</div>
                  <div className="text-sm text-slate-500 mt-2">Serving the industry since 2008</div>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">3</div>
                  <div className="text-slate-400">Texas Locations</div>
                  <div className="text-sm text-slate-500 mt-2">Brownsville, Ingleside, Corpus Christi</div>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-slate-400">Project Support</div>
                  <div className="text-sm text-slate-500 mt-2">Always available for our clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">Our Commitment</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  All of our employees have years of experience in these fields and have been with our company 
                  from one job to another meeting the quality and completion time of all projects.
                </p>
                <p>
                  Our employee database consists of more than 800 highly skilled crafts which are ready 24/7 
                  to be mobilized to any project site.
                </p>
                <p className="text-xl font-semibold text-white">
                  We look forward to assisting your company in any possible way with your contract needs.
                </p>
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