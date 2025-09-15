import React from 'react';
import content from '@/content/content.json';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 footer-transition">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Company Section */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/LOGO-Light-Web.png" 
                alt="IIT Welders Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional welding and fabrication services for industrial and commercial projects across Texas. Delivering quality craftsmanship with modern technology.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleGetStarted}
                className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200"
              >
                Get started today
              </button>
            </div>
          </div>

          {/* Products Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleNavigation('/services-and-specialties')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Services & Specialties
              </button>
            </div>
          </div>

          {/* Industries Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-6">Industries</h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleNavigation('/clients-and-projects')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Offshore Oil Rigs
              </button>
              <button 
                onClick={() => handleNavigation('/clients-and-projects')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Marine Construction
              </button>
              <button 
                onClick={() => handleNavigation('/clients-and-projects')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Industrial Fabrication
              </button>
              <button 
                onClick={() => handleNavigation('/clients-and-projects')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Aerospace Projects
              </button>
            </div>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-6">Resources</h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleNavigation('/clients-and-projects')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Project Portfolio
              </button>
              <button 
                onClick={() => handleNavigation('/about-us')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                About Our Company
              </button>
              <button 
                onClick={() => handleNavigation('/locations')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Locations
              </button>
              <button 
                onClick={() => handleNavigation('/careers')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Careers
              </button>
              <button 
                onClick={() => handleNavigation('/contact-us')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Contact Support
              </button>
            </div>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleNavigation('/about-us')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation('/careers')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Jobs
              </button>
              <button 
                onClick={() => handleNavigation('/contact-us')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Contact Sales
              </button>
              <button 
                onClick={() => handleNavigation('/locations')} 
                className="block text-slate-400 hover:text-white transition-colors text-sm text-left"
              >
                Office Locations
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-slate-500 text-sm">© 2025 Texas Welding & Fabrication Company</p>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleNavigation('/legal')} 
                  className="text-slate-500 hover:text-slate-400 text-sm"
                >
                  Legal Center
                </button>
                <button 
                  onClick={() => handleNavigation('/privacy')} 
                  className="text-slate-500 hover:text-slate-400 text-sm"
                >
                  Privacy
                </button>
                <button 
                  onClick={() => handleNavigation('/terms')} 
                  className="text-slate-500 hover:text-slate-400 text-sm"
                >
                  Terms of Service
                </button>
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