import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';

const LogoSection = () => {
  // Count-up animations for stats
  const secondsCount = useCountUp({ end: 30, suffix: '', duration: 2000 });
  const savingsCount = useCountUp({ end: 23, suffix: 'K', duration: 2500, delay: 200 });
  const projectsCount = useCountUp({ end: 1, suffix: '', duration: 1500, delay: 400 });
  const millionsCount = useCountUp({ end: 2, suffix: 'M', duration: 2200, delay: 600 });

  const clients = [
    { name: 'ExxonMobil', logo: 'EM' },
    { name: 'Chevron', logo: 'CV' },
    { name: 'Valero', logo: 'VL' },
    { name: 'Phillips 66', logo: 'P66' },
    { name: 'Marathon', logo: 'MPC' },
    { name: 'Citgo', logo: 'CG' }
  ];

  return (
    <section className="py-20 bg-slate-800 border-t border-slate-600/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-slate-400 text-sm uppercase tracking-wider font-medium mb-4">
            Real-World Impact from Leading Industrial Organizations
          </p>
          <div className="w-20 h-0.5 bg-blue-400 mx-auto"></div>
        </div>
        
        {/* Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-fadeInUp">
            <div 
              ref={secondsCount.ref}
              className="text-4xl lg:text-5xl font-bold text-white mb-2"
            >
              &lt;{secondsCount.count}
            </div>
            <p className="text-slate-400 text-sm">
              seconds is how fast we connect to welding projects, beating the industry average.
            </p>
          </div>
          
          <div className="text-center animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <div 
              ref={savingsCount.ref}
              className="text-4xl lg:text-5xl font-bold text-white mb-2"
            >
              ${savingsCount.count}
            </div>
            <p className="text-slate-400 text-sm">
              in downtime costs per incident is avoided through expert welding.
            </p>
          </div>
          
          <div className="text-center animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div 
              ref={projectsCount.ref}
              className="text-4xl lg:text-5xl font-bold text-white mb-2"
            >
              {projectsCount.count}
            </div>
            <p className="text-slate-400 text-sm">
              project deployed per day for a month with our team by a Fortune 500 manufacturer.
            </p>
          </div>
          
          <div className="text-center animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div 
              ref={millionsCount.ref}
              className="text-4xl lg:text-5xl font-bold text-white mb-2"
            >
              ${millionsCount.count}
            </div>
            <p className="text-slate-400 text-sm">
              saved per year by a leading energy company by improving operating efficiency.
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-center">
                <div className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors duration-300">
                  {client.logo}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {client.name}
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