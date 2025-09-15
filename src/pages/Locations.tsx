import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Printer, Building, User } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: 'South Texas Office & Fabrication Shop',
      address: '7748 Padre Island Hwy',
      city: 'Brownsville, Texas 78521',
      phone: '956-831-5164',
      fax: '956-831-5265',
      type: 'primary',
      note: 'Next to Mariscos de la Rosa Restaurant'
    },
    {
      name: 'Corporate Office',
      address: 'P.O. Box 23036',
      city: 'Corpus Christi, Texas 78403',
      phone: '361-883-8999',
      fax: '361-884-1984',
      type: 'corporate'
    }
  ];

  const operationsManager = {
    name: 'Arturo Vasquez',
    title: 'Operations Manager',
    office: '956-831-5164',
    cell: '956-466-2444',
    fax: '956-831-5265',
    email: 'iit.avasquez@sbcglobal.net'
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/carousel_5.png)' }}
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
                Our
                <span className="text-blue-400"> Locations</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Strategically positioned across Texas to serve our clients with welding and fabrication services. 
                Find the location nearest to your project.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {locations.map((location, index) => (
                  <div key={index} className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 transition-all duration-300">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Building className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                          <div className="bg-blue-500/20 rounded-lg px-3 py-1 inline-block">
                            <span className="text-blue-400 text-sm font-medium capitalize">{location.type} Location</span>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-white font-medium">{location.address}</p>
                            <p className="text-slate-300">{location.city}</p>
                            {location.note && (
                              <p className="text-slate-400 text-sm italic mt-1">({location.note})</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Phone: </span>
                            <a href={`tel:${location.phone}`} className="text-white hover:text-blue-400 transition-colors">
                              {location.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Printer className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Fax: </span>
                            <span className="text-white">{location.fax}</span>
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

        {/* Operations Manager */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Operations Manager</h2>
                <p className="text-slate-400 text-lg">Your primary contact for project coordination and support</p>
              </div>

              <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Profile */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">{operationsManager.name}</h3>
                    <p className="text-blue-400 text-lg font-medium mb-6">{operationsManager.title}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Office: </span>
                            <a href={`tel:${operationsManager.office}`} className="text-white hover:text-blue-400 transition-colors">
                              {operationsManager.office}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Cell: </span>
                            <a href={`tel:${operationsManager.cell}`} className="text-white hover:text-blue-400 transition-colors">
                              {operationsManager.cell}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Printer className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Fax: </span>
                            <span className="text-white">{operationsManager.fax}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Email: </span>
                            <a href={`mailto:${operationsManager.email}`} className="text-white hover:text-blue-400 transition-colors">
                              {operationsManager.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-12">Service Areas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">South Texas</h3>
                  <p className="text-slate-400">Brownsville, McAllen, Harlingen, and surrounding areas</p>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Coastal Texas</h3>
                  <p className="text-slate-400">Corpus Christi, Ingleside, Port Aransas, and Gulf Coast</p>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Gulf of Mexico</h3>
                  <p className="text-slate-400">Offshore platforms, rigs, and marine facilities</p>
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

export default Locations;
