import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Printer, Building, User, ChevronRight } from 'lucide-react';

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
            <span className="text-white font-medium">Locations</span>
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
            <div className="max-w-7xl mx-auto space-y-16">
              {/* South Texas Office */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 transition-all duration-300">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">South Texas Office & Fabrication Shop</h3>
                        <div className="bg-blue-500/20 rounded-lg px-3 py-1 inline-block">
                          <span className="text-blue-400 text-sm font-medium">Primary Location</span>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-white font-medium">7748 Padre Island Hwy</p>
                          <p className="text-slate-300">Brownsville, Texas 78521</p>
                          <p className="text-slate-400 text-sm italic mt-1">(Next to Mariscos de la Rosa Restaurant)</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-400" />
                        <div>
                          <span className="text-slate-400 text-sm">Phone: </span>
                          <a href="tel:956-831-5164" className="text-white hover:text-blue-400 transition-colors">
                            956-831-5164
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Printer className="h-5 w-5 text-blue-400" />
                        <div>
                          <span className="text-slate-400 text-sm">Fax: </span>
                          <span className="text-white">956-831-5265</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* South Texas Map */}
                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-2 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.2847689234647!2d-97.39826948450866!3d25.975238583630243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866fb43ca7a4e4a7%3A0x6b8b8b8b8b8b8b8b!2s7748%20Padre%20Island%20Hwy%2C%20Brownsville%2C%20TX%2078521%2C%20USA!5e0!3m2!1sen!2sde!4v1652901234567!5m2!1sen!2sde"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="South Texas Office - Brownsville Location"
                  ></iframe>
                </div>
              </div>

              {/* Corporate Office */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 transition-all duration-300">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Corporate Office</h3>
                        <div className="bg-blue-500/20 rounded-lg px-3 py-1 inline-block">
                          <span className="text-blue-400 text-sm font-medium">Corporate Location</span>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-white font-medium">P.O. Box 23036</p>
                          <p className="text-slate-300">Corpus Christi, Texas 78403</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-400" />
                        <div>
                          <span className="text-slate-400 text-sm">Phone: </span>
                          <a href="tel:361-883-8999" className="text-white hover:text-blue-400 transition-colors">
                            361-883-8999
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Printer className="h-5 w-5 text-blue-400" />
                        <div>
                          <span className="text-slate-400 text-sm">Fax: </span>
                          <span className="text-white">361-884-1984</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Office Map */}
                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-2 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55344.51518451891!2d-97.43946!3d27.8005828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8669006cfe7db7dd%3A0x84c9c6ee8e77af6c!2sCorpus%20Christi%2C%20TX%2078403%2C%20USA!5e0!3m2!1sen!2sde!4v1652901234568!5m2!1sen!2sde"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Corporate Office - Corpus Christi Location"
                  ></iframe>
                </div>
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
