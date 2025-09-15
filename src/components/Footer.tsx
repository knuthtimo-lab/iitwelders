import React from 'react';
import content from '@/content/content.json';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Company Section */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TW</span>
              </div>
              <span className="font-bold text-white text-xl">Texas Welding</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional welding and fabrication services for industrial and commercial projects across Texas. Delivering quality craftsmanship with modern technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200">
                Get started today
              </button>
              <button className="border border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700/50 hover:border-slate-500 font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 backdrop-blur-sm">
                Watch on-demand demo
              </button>
            </div>
          </div>

          {/* Products Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <div className="space-y-3">
              <a href="/services-and-specialties" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Structural Welding
              </a>
              <a href="/services-and-specialties" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Pipe Welding
              </a>
              <a href="/services-and-specialties" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Custom Fabrication
              </a>
              <a href="/services-and-specialties" className="block text-slate-400 hover:text-white transition-colors text-sm">
                On-Site Services
              </a>
              <a href="/services-and-specialties" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Quality Inspection
              </a>
            </div>
          </div>

          {/* Industries Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-6">Industries</h3>
            <div className="space-y-3">
              <a href="/about-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Oil & Gas
              </a>
              <a href="/about-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Manufacturing
              </a>
              <a href="/about-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Construction
              </a>
              <a href="/about-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Energy Utilities
              </a>
              <a href="/about-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Chemical Processing
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-6">Resources</h3>
            <div className="space-y-3">
              <a href="/clients-and-projects" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Project Portfolio
              </a>
              <a href="/about-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Certifications
              </a>
              <a href="/locations" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Locations
              </a>
              <a href="/careers" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Careers
              </a>
              <a href="/contact-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Contact Support
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <div className="space-y-3">
              <a href="/about-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                About Us
              </a>
              <a href="/careers" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Jobs
              </a>
              <a href="/contact-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Contact Sales
              </a>
              <a href="/locations" className="block text-slate-400 hover:text-white transition-colors text-sm">
                Office Locations
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-slate-500 text-sm">© 2025 Texas Welding & Fabrication Company</p>
              <div className="flex items-center space-x-4">
                <a href="/legal" className="text-slate-500 hover:text-slate-400 text-sm">
                  Legal Center
                </a>
                <a href="/privacy" className="text-slate-500 hover:text-slate-400 text-sm">
                  Privacy
                </a>
                <a href="/terms" className="text-slate-500 hover:text-slate-400 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
            
            {/* Status indicator */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-slate-500 text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;