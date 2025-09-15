import React from 'react';
import content from '@/content/content.json';

const Footer = () => {
  return (
    <footer className="bg-bg-elevated border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo & Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-ink font-bold text-sm">TW</span>
              </div>
              <span className="font-semibold text-foreground">Texas Welding</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Professional welding and fabrication services for industrial and commercial projects across Texas.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {content.nav.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  className="text-muted hover:text-foreground transition-smooth focus-ring rounded-md text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted">
                Phone: <a href={`tel:${content.contact.phone}`} className="text-link hover:underline">{content.contact.phone}</a>
              </p>
              <p className="text-muted">
                Email: <a href={`mailto:${content.contact.email}`} className="text-link hover:underline">{content.contact.email}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted text-sm">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;