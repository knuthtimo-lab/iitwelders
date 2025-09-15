import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, Printer, MapPin, Clock, User, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  useScrollAnimation();
  
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
            <span className="text-white font-medium">Contact Us</span>
          </div>
        </div>
      </nav>
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-32 overflow-hidden hero-transition">
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
        <section className="py-24 bg-slate-800 section-transition-soft">
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

        {/* Soft Transition */}
        <div className="relative h-40 bg-gradient-to-b from-slate-800 via-slate-800/80 to-slate-900/60">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-transparent to-slate-900/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rounded-full"></div>
          </div>
        </div>

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
        <section className="py-24 bg-slate-800 section-transition-soft">
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

        {/* Interactive Map Section */}
        <section className="py-24 bg-slate-800 section-transition-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Find Us on the Map</h2>
                <p className="text-slate-400 text-lg">Our primary location in Brownsville, Texas</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.2847689234647!2d-97.39826948450866!3d25.975238583630243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866fb43ca7a4e4a7%3A0x6b8b8b8b8b8b8b8b!2s7748%20Padre%20Island%20Hwy%2C%20Brownsville%2C%20TX%2078521%2C%20USA!5e0!3m2!1sen!2sde!4v1652901234567!5m2!1sen!2sde"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="IIT Welding - South Texas Office Location"
                  ></iframe>
                </div>

                {/* Location Details */}
                <div className="space-y-6">
                  <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Primary Location</h3>
                        <p className="text-blue-400 font-medium">South Texas Office & Fabrication Shop</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-white font-medium text-lg">7748 Padre Island Hwy.</p>
                        <p className="text-slate-300">Brownsville, TX 78521</p>
                        <p className="text-slate-400 text-sm italic mt-1">(Next to Mariscos de la Rosa Restaurant)</p>
                      </div>

                      <div className="grid grid-cols-1 gap-3 pt-4 border-t border-slate-600">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-blue-400" />
                          <span className="text-slate-400">Office:</span>
                          <a href="tel:956-831-5164" className="text-white hover:text-blue-400 transition-colors font-medium">956-831-5164</a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Printer className="h-4 w-4 text-blue-400" />
                          <span className="text-slate-400">Fax:</span>
                          <span className="text-white font-medium">956-831-5265</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-blue-400" />
                          <span className="text-slate-400">Email:</span>
                          <a href="mailto:iit.avasquez@sbcglobal.net" className="text-white hover:text-blue-400 transition-colors font-medium break-all">
                            iit.avasquez@sbcglobal.net
                          </a>
                        </div>
                      </div>

                      <div className="pt-4">
                        <a 
                          href="https://www.google.com/maps/dir//7748+Padre+Island+Hwy,+Brownsville,+TX+78521" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                        >
                          <MapPin className="h-4 w-4" />
                          <span>Get Directions</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6">
                    <h4 className="text-white font-semibold mb-3">Business Hours</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Monday - Friday:</span>
                        <span className="text-white">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Saturday:</span>
                        <span className="text-white">By Appointment</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Sunday:</span>
                        <span className="text-white">Closed</span>
                      </div>
                    </div>
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

        {/* Contact Forms Section */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-slate-400 text-lg">
                  Contact us for professional support or request a project quote
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8 animate-fadeInUp">
                  <div className="flex items-center space-x-3 mb-6">
                    <Mail className="h-6 w-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">General Contact</h3>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Message
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>

                {/* Quote Request Form */}
                <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="h-6 w-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">Get a Quote</h3>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="quoteName" className="block text-sm font-medium text-slate-300 mb-2">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          id="quoteName"
                          name="quoteName"
                          required
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="quoteEmail" className="block text-sm font-medium text-slate-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="quoteEmail"
                          name="quoteEmail"
                          required
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      >
                        <option value="">Select Project Type</option>
                        <option value="structural">Structural Welding</option>
                        <option value="pipe">Pipe Welding</option>
                        <option value="fabrication">Custom Fabrication</option>
                        <option value="onsite">On-Site Services</option>
                        <option value="inspection">Quality Inspection</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-slate-300 mb-2">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      >
                        <option value="">Select Industry</option>
                        <option value="oil-gas">Oil & Gas</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="construction">Construction</option>
                        <option value="energy">Energy Utilities</option>
                        <option value="chemical">Chemical Processing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate (Within 1 week)</option>
                        <option value="soon">Soon (1-4 weeks)</option>
                        <option value="month">Within a month</option>
                        <option value="quarter">Within 3 months</option>
                        <option value="future">Future planning</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-slate-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                        placeholder="Describe your project requirements, materials, specifications, location, etc."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="mt-16 text-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <div className="bg-slate-800/30 border border-slate-600/50 rounded-xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span className="text-white font-medium">Quick Response Guarantee</span>
                  </div>
                  <p className="text-slate-400">
                    We respond to all inquiries within 48 hours during business hours. 
                    Quote requests typically receive responses within 24 hours.
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
