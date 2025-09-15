import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, Users, Building, Award } from 'lucide-react';

const ClientsProjects = () => {
  const projects = [
    {
      client: 'Dixie Iron Works',
      location: 'Alice, Texas',
      project: 'Structural Steel Framework',
      craftOnSite: 'Welding & Assembly',
      duration: '2 months',
      personnel: 12
    },
    {
      client: 'Signal International',
      location: 'Orange, Sabine Pass, Port Arthur Texas and offshore work at the Gulf of Mexico',
      project: 'Diamond Offshore Oil Rigs and Government Ships Fabrication',
      craftOnSite: 'Pipe & Structure Fitters, Lay out Fitters, Pipe & Structure Welders, Tig Welders, Supervisors',
      duration: '31 months',
      personnel: 110
    },
    {
      client: 'Keppel Amfels',
      location: 'Brownsville, Texas',
      project: 'Transocean & Diamond Offshore Semi-Submergible and Jack up Oil Rigs repairs and new builds',
      craftOnSite: 'Welders and Fitters',
      duration: '18 months',
      personnel: 46
    },
    {
      client: 'Space X Brownsville',
      location: 'Brownsville, TX',
      project: 'New erection construction',
      craftOnSite: 'Welders and Supervisors',
      duration: '6 months',
      personnel: 26
    },
    {
      client: 'Gulf Marine Fabrication',
      location: 'Aransas Pass and Ingleside Texas',
      project: 'Oil Rig Tower and Decks Fabrication',
      craftOnSite: 'Tig Welders, 6/GR Welders, Pipe & Structure Fitters, Supervisors, Tack Welders',
      duration: '32 months',
      personnel: 36
    },
    {
      client: 'Eastern Shipbuilding',
      location: 'Panama City, Florida',
      project: 'Fabrication of new Coast Guard Ships, Cargo Boats, Crew Boats',
      craftOnSite: 'Welders, Fitters, Electricians',
      duration: '5 years',
      personnel: 35
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/carousel_3.png)' }}
          >
            <div className="absolute inset-0 bg-slate-900/80"></div>
          </div>

          {/* Geometric Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Clients &
                <span className="text-blue-400"> Projects</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Showcasing our successful partnerships and completed projects across various industries. 
                From offshore oil rigs to industrial fabrication, we deliver excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
                  <p className="text-slate-400 text-sm">Major Clients Served</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100+</div>
                  <p className="text-slate-400 text-sm">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">42</div>
                  <p className="text-slate-400 text-sm">Months Longest Project</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">120</div>
                  <p className="text-slate-400 text-sm">Max Personnel on Site</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-slate-400 text-lg">A selection of our most significant and successful projects</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-600 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{project.client}</h3>
                          <div className="flex items-center space-x-2 text-slate-400">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{project.location}</span>
                          </div>
                        </div>
                        <div className="bg-blue-500/20 rounded-lg px-3 py-1">
                          <span className="text-blue-400 text-sm font-medium">{project.personnel} Personnel</span>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Project:</h4>
                          <p className="text-slate-300 text-sm">{project.project}</p>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-2">Craft on Site:</h4>
                          <p className="text-slate-300 text-sm">{project.craftOnSite}</p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-blue-400" />
                            <span className="text-slate-400 text-sm">Duration: {project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-blue-400" />
                            <span className="text-slate-400 text-sm">{project.personnel} people</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-12">Industry Sectors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Building className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Offshore Oil Rigs</h3>
                  <p className="text-slate-400">Jack-up rigs, semi-submersible platforms, and drilling equipment</p>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Refineries</h3>
                  <p className="text-slate-400">Process equipment, pressure vessels, and maintenance work</p>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Marine & Shipbuilding</h3>
                  <p className="text-slate-400">Coast Guard ships, cargo boats, and marine structures</p>
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

export default ClientsProjects;
