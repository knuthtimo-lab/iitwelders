import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Shield, Award } from 'lucide-react';
import content from '@/content/content.json';
import Carousel from './Carousel';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero_section_background.png)' }}
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90"></div>
      </div>

      {/* Geometric Lines - Dispel Style */}
      <div className="absolute inset-0 opacity-30">
        {/* Diagonal lines like Dispel */}
        <div className="absolute top-0 right-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="60" y1="0" x2="100" y2="40" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.1" />
            <line x1="70" y1="0" x2="100" y2="30" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.1" />
            <line x1="80" y1="0" x2="100" y2="20" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="0.1" />
          </svg>
        </div>
        {/* Corner frame elements */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-l-2 border-b-2 border-blue-400/20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 border-r-2 border-t-2 border-blue-400/20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-16">
          {/* Content - Left Side - Exact Dispel Style */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.85] tracking-tight animate-fadeInLeft animate-visible" style={{transitionDelay: '0.2s'}}>
                Redefine How You
                <br />
                <span className="text-blue-400">Connect to Welding</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light animate-fadeInLeft animate-visible" style={{transitionDelay: '0.4s'}}>
                Professional welding and fabrication services for industrial and commercial projects—connecting to quality craftsmanship in under 30 seconds to cut downtime, lower costs, and accelerate modernization.
              </p>
            </div>

            {/* CTAs - Exact Dispel Style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeInLeft animate-visible" style={{transitionDelay: '0.6s'}}>
              <Button 
                size="xl" 
                className="bg-white hover:bg-gray-100 text-slate-900 font-semibold text-lg px-8 py-4 h-auto shadow-lg rounded-lg hover-lift hover-glow"
                onClick={() => window.location.href = '/contact-us'}
              >
                Get Quote
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-slate-500/50 bg-slate-800/50 text-white hover:bg-slate-700/50 hover:border-slate-400 font-semibold text-lg px-8 py-4 h-auto rounded-lg backdrop-blur-sm hover-lift"
                onClick={() => window.location.href = '/services-and-specialties'}
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* 3D Perspective Container - Right Side - Exact Dispel Style */}
          <div className="relative flex justify-center items-start w-full -mt-12 animate-fadeInRight animate-visible" style={{transitionDelay: '0.3s'}}>
            {/* 3D Tilted Screen Container - Exact Dispel Style */}
            <div className="relative w-full max-w-xl">
              {/* 3D Container with perspective */}
              <div 
                className="relative"
                style={{ 
                  transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Screen frame */}
                <div className="relative bg-slate-800 rounded-lg p-1 shadow-2xl border border-slate-600">
                  {/* Title bar */}
                  <div className="bg-slate-700 rounded-t px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-sm font-medium">Texas Welding Facility</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Carousel in the "screen" */}
                  <div className="w-full h-[40rem] relative">
                    <Carousel className="w-full h-full rounded-b-lg overflow-hidden" />
                  </div>
                </div>

                {/* 3D depth elements */}
                <div 
                  className="absolute inset-0 bg-slate-900 rounded-lg -z-10"
                  style={{ transform: 'translateZ(-20px)' }}
                ></div>
                <div 
                  className="absolute inset-0 bg-slate-950 rounded-lg -z-20"
                  style={{ transform: 'translateZ(-40px)' }}
                ></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse-blue animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-1 h-1 bg-blue-300 rounded-full animate-pulse-blue animate-float" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;