import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import content from '@/content/content.json';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  // Function to convert nav item to route path
  const getRoutePath = (item: string) => {
    if (item === 'Home') return '/';
    return `/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`;
  };

  return (
    <>
      {/* Top Banner - Dispel Style */}
      <div className="bg-bg-elevated border-b border-border/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm text-muted">
                Professional welding services across Texas — Get your quote today
              </span>
              <Link to="/contact-us" className="text-accent hover:text-accent/80 text-sm font-medium ml-2">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo - IIT Logo */}
            <Link to="/" className="flex items-center focus-ring rounded-md">
              <img 
                src="/IIT-Logo-Web.png" 
                alt="IIT Welding" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Dispel Style */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Primary navigation">
              {content.nav.map((item) => {
                const routePath = getRoutePath(item);
                const isActive = location.pathname === routePath;
                
                return (
                  <Link
                    key={item}
                    to={routePath}
                    className={`text-black hover:text-gray-600 transition-smooth focus-ring rounded-md px-2 py-1 font-medium ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black hover:text-gray-600 focus-ring rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden py-4 border-t border-slate-600" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-4">
                {content.nav.map((item) => {
                  const routePath = getRoutePath(item);
                  const isActive = location.pathname === routePath;
                  
                  return (
                    <Link
                      key={item}
                      to={routePath}
                      className={`text-black hover:text-gray-600 transition-smooth focus-ring rounded-md px-2 py-2 font-medium ${
                        isActive ? 'text-blue-600 font-semibold' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;