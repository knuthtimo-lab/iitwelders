import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, Printer, MapPin, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/carousel_6.png)' }}
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
                Contact
                <span className="text-blue-400"> Us</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Ready to discuss your welding and fabrication needs? Get in touch with our team 
                for professional support and project consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <a href="tel:956-831-5164" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                    956-831-5164
                  </a>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Printer className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Fax</h3>
                  <span className="text-2xl font-bold text-white">956-831-5265</span>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a href="mailto:iit.avasquez@sbcglobal.net" className="text-lg text-blue-400 hover:text-blue-300 transition-colors break-all">
                    iit.avasquez@sbcglobal.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Office Locations</h2>
                <p className="text-slate-400 text-lg">Visit us at one of our Texas locations</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* South Texas Office */}
                <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">South Texas Office</h3>
                      <p className="text-blue-400 font-medium">Fabrication Shop and Welding Laboratory</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-medium">7748 Padre Island Hwy.</p>
                      <p className="text-slate-300">Brownsville, TX 78521</p>
                      <p className="text-slate-400 text-sm italic">(Next to Mariscos de la Rosa Restaurant)</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-blue-400" />
                        <span className="text-slate-400">Office:</span>
                        <a href="tel:956-831-5164" className="text-white hover:text-blue-400 transition-colors">956-831-5164</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Printer className="h-4 w-4 text-blue-400" />
                        <span className="text-slate-400">Fax:</span>
                        <span className="text-white">956-831-5265</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Office */}
                <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Corporate Office</h3>
                      <p className="text-blue-400 font-medium">Administrative Headquarters</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-medium">P.O. Box 23036</p>
                      <p className="text-slate-300">Corpus Christi, Texas 78403</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-blue-400" />
                        <span className="text-slate-400">Phone:</span>
                        <a href="tel:361-883-8999" className="text-white hover:text-blue-400 transition-colors">361-883-8999</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Printer className="h-4 w-4 text-blue-400" />
                        <span className="text-slate-400">Fax:</span>
                        <span className="text-white">361-884-1984</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operations Manager */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Operations Manager</h2>
                <p className="text-slate-400 text-lg">Your direct contact for all project needs</p>
              </div>

              <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">Arturo Vasquez</h3>
                    <p className="text-blue-400 text-lg font-medium mb-6">Operations Manager</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Phone: </span>
                            <a href="tel:956-831-5164" className="text-white hover:text-blue-400 transition-colors">956-831-5164</a>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Cell: </span>
                            <a href="tel:956-466-2444" className="text-white hover:text-blue-400 transition-colors">956-466-2444</a>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Printer className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Fax: </span>
                            <span className="text-white">956-831-5265</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-blue-400" />
                          <div>
                            <span className="text-slate-400 text-sm">Email: </span>
                            <a href="mailto:iit.avasquez@sbcglobal.net" className="text-white hover:text-blue-400 transition-colors">
                              iit.avasquez@sbcglobal.net
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

        {/* Contact Form Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Get Professional Support</h2>
                <p className="text-slate-400 text-lg">
                  You may contact us by filling in this form any time you need professional support or have any questions.
                </p>
                <p className="text-slate-300 font-medium mt-2">We will respond within 48 hours for most inquiries.</p>
              </div>

              <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Form</h3>
                  <p className="text-slate-400 mb-8">Our contact form will be available soon. In the meantime, please contact us directly using the information above.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-white hover:bg-gray-100 text-slate-900 font-semibold">
                      <Phone className="h-4 w-4 mr-2" />
                      Call 956-831-5164
                    </Button>
                    <Button variant="outline" className="border-slate-500/50 bg-slate-800/50 text-white hover:bg-slate-700/50 hover:border-slate-400">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 text-center">
                <div className="bg-slate-800/30 border border-slate-600/50 rounded-xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span className="text-white font-medium">Quick Response</span>
                  </div>
                  <p className="text-slate-400">
                    We typically respond to all inquiries within 48 hours during business hours.
                    For urgent matters, please call us directly.
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

export default Contact;
