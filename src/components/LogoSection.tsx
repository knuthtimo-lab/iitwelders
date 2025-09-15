import React from 'react';

const LogoSection = () => {
  const clients = [
    { name: 'ExxonMobil', logo: 'EM' },
    { name: 'Chevron', logo: 'CV' },
    { name: 'Valero', logo: 'VL' },
    { name: 'Phillips 66', logo: 'P66' },
    { name: 'Marathon', logo: 'MPC' },
    { name: 'Citgo', logo: 'CG' }
  ];

  return (
    <section className="py-16 bg-bg border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted text-sm uppercase tracking-wider font-medium">
            Trusted by Industry Leaders
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center group hover-scale"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-24 h-16 bg-gradient-card border border-border rounded-lg flex items-center justify-center group-hover:border-accent/30 transition-smooth">
                <div className="text-center">
                  <div className="text-ink font-bold text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                    {client.logo}
                  </div>
                  <div className="text-xs text-muted opacity-50 group-hover:opacity-70 transition-opacity mt-1">
                    {client.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;