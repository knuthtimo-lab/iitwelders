import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Wrench } from 'lucide-react';
import content from '@/content/content.json';
import { useNavigate } from 'react-router-dom';

const CompanyBlurb = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewWork = () => {
    navigate('/clients-and-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Unlock Welding Excellence,
              <br />
              <span className="text-blue-400">Resilience, and Productivity</span> at Scale
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Industrial environments are under pressure — from growing demands, tight deadlines, and the need for systems that deliver fast, confident results. We help manufacturers, contractors, and industrial teams achieve the outcomes that matter most.
            </p>
          </div>

          {/* Three column benefits with boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Operational Efficiency */}
            <div className="group animate-fadeInUp">
              <div className="relative bg-slate-800/40 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-500/50 transition-all duration-300 hover-lift">
                {/* Icon container */}
                <div className="w-16 h-16 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-600 transition-all duration-300 border border-slate-500">
                  <Wrench className="h-8 w-8 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Improve Operational Efficiency</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Cut downtime and reduce Mean Time to Recovery (MTTR) by up to 80% with expert welding services and seamless project coordination.
                </p>
                
                {/* Quote callout */}
                <div className="bg-slate-700/50 border border-slate-500/50 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-slate-300 mb-2">"Professional welding reduces project delays significantly."</p>
                  <p className="text-xs text-slate-400">Industry Standards</p>
                </div>
              </div>
            </div>

            {/* Strengthen Quality */}
            <div className="group animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="relative bg-slate-800/40 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-500/50 transition-all duration-300 hover-lift">
                {/* Icon container */}
                <div className="w-16 h-16 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-600 transition-all duration-300 border border-slate-500">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Strengthen Quality Standards</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Enforce strict quality control with certified welders and proven methodologies—eliminating defects and ensuring audit readiness.
                </p>
                
                {/* Quote callout */}
                <div className="bg-slate-700/50 border border-slate-500/50 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-slate-300 mb-2">"Quality welding standards reduce rework by 95%."</p>
                  <p className="text-xs text-slate-400">AWS Certification</p>
                </div>
              </div>
            </div>

            {/* Boost Performance */}
            <div className="group animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="relative bg-slate-800/40 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-500/50 transition-all duration-300 hover-lift">
                {/* Icon container */}
                <div className="w-16 h-16 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-600 transition-all duration-300 border border-slate-500">
                  <Award className="h-8 w-8 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Boost Project Performance</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Accelerate completion cycles, deliver superior results, and optimize project performance with expert craftsmanship.
                </p>
                
                {/* Quote callout */}
                <div className="bg-slate-700/50 border border-slate-500/50 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-slate-300 mb-2">"Expert welding improves project completion by 60%."</p>
                  <p className="text-xs text-slate-400">Texas Industrial</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4">
              <Button 
                size="xl" 
                className="bg-white hover:bg-gray-100 text-slate-900 font-semibold text-lg px-8 py-4 h-auto shadow-lg rounded-lg"
                onClick={handleGetStarted}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-slate-500/50 bg-slate-800/50 text-white hover:bg-slate-700/50 hover:border-slate-400 font-semibold text-lg px-8 py-4 h-auto rounded-lg backdrop-blur-sm"
                onClick={handleViewWork}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBlurb;