import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const Terms = () => {
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
                Terms of
                <span className="text-blue-400"> Service</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Terms and conditions for IIT Welding services and agreements.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Service Agreement</h3>
                  <p className="text-slate-400">
                    All welding services are provided under formal service agreements with clear terms.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Clock className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Project Timeline</h3>
                  <p className="text-slate-400">
                    Timelines are established based on project scope and agreed upon before work begins.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Service Terms</h2>
                  <div className="space-y-4 text-slate-300">
                    <p>
                      <strong>1. Service Provision:</strong> IIT Welding provides professional welding and 
                      fabrication services in accordance with industry standards and applicable regulations.
                    </p>
                    <p>
                      <strong>2. Quality Assurance:</strong> All work is performed by certified welders and 
                      subject to quality control inspections.
                    </p>
                    <p>
                      <strong>3. Safety Compliance:</strong> All operations comply with OSHA and industry 
                      safety standards.
                    </p>
                    <p>
                      <strong>4. Project Specifications:</strong> Work is performed according to agreed-upon 
                      specifications and industry standards.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
                  <div className="space-y-4 text-slate-300">
                    <p>
                      • Payment terms are established in individual service agreements<br/>
                      • Invoices are due within agreed-upon timeframes<br/>
                      • Progress payments may be required for large projects<br/>
                      • Final payment is due upon project completion and acceptance
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Liability and Insurance</h2>
                  <div className="space-y-4 text-slate-300">
                    <p>
                      IIT Welding maintains comprehensive general liability and professional liability insurance. 
                      Specific liability terms are outlined in individual service agreements.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact for Agreements</h2>
                  <p className="text-slate-300">
                    For specific terms and service agreements, please contact us:
                  </p>
                  <div className="mt-4 text-slate-300">
                    <p>Arturo Vasquez, Operations Manager</p>
                    <p>Email: iit.avasquez@sbcglobal.net</p>
                    <p>Phone: 956-831-5164</p>
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

export default Terms;
