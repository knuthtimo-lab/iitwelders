import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import content from '@/content/content.json';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 focus-ring rounded-md">
            <div className="h-8 w-8 bg-accent rounded-md flex items-center justify-center">
              <span className="text-ink font-bold text-sm">TW</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:block">
              Texas Welding
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Primary navigation">
            {content.nav.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className="text-muted hover:text-foreground transition-smooth focus-ring rounded-md px-2 py-1"
              >
                {item}
              </a>
            ))}
            <Button variant="default" size="sm" className="ml-4">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground focus-ring rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4">
              {content.nav.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  className="text-muted hover:text-foreground transition-smooth focus-ring rounded-md px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button variant="default" size="sm" className="w-fit mt-4">
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;