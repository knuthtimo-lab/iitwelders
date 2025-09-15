import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
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
                Privacy
                <span className="text-blue-400"> Policy</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                How we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Lock className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Data Protection</h3>
                  <p className="text-slate-400">
                    We use industry-standard encryption and security measures to protect your personal information.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Eye className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Transparency</h3>
                  <p className="text-slate-400">
                    We are transparent about what data we collect and how we use it for our services.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
                  <div className="space-y-4 text-slate-300">
                    <p>
                      <strong>Contact Information:</strong> When you contact us for services, we collect your name, 
                      email address, phone number, and company information.
                    </p>
                    <p>
                      <strong>Project Details:</strong> Information about your welding and fabrication requirements 
                      to provide accurate quotes and services.
                    </p>
                    <p>
                      <strong>Website Usage:</strong> We may collect anonymous usage data to improve our website 
                      and services.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
                  <div className="space-y-4 text-slate-300">
                    <p>
                      • Provide welding and fabrication services<br/>
                      • Communicate about projects and quotes<br/>
                      • Improve our services and customer experience<br/>
                      • Comply with legal and regulatory requirements
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                  <p className="text-slate-300">
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 text-slate-300">
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

export default Privacy;
