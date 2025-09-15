import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Scale, FileText, Shield } from 'lucide-react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Legal
                <span className="text-blue-400"> Center</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Legal information and compliance resources for IIT Welding services.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Scale className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Terms of Service</h3>
                  <p className="text-slate-400 mb-4">Our terms and conditions for service agreements</p>
                  <a href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
                    View Terms →
                  </a>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 text-center">
                  <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Privacy Policy</h3>
                  <p className="text-slate-400 mb-4">How we protect and handle your personal information</p>
                  <a href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                    View Policy →
                  </a>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 text-center">
                  <FileText className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Compliance</h3>
                  <p className="text-slate-400 mb-4">Industry certifications and regulatory compliance</p>
                  <a href="/about-us" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>

              <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Legal Notice</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    IIT Welding operates in compliance with all applicable federal, state, and local regulations 
                    governing welding and fabrication services.
                  </p>
                  <p>
                    Our services are provided under the terms and conditions outlined in our service agreements. 
                    All work is performed by certified professionals in accordance with industry standards.
                  </p>
                  <p>
                    For specific legal inquiries or contract negotiations, please contact our legal department 
                    through our main office.
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

export default Legal;
