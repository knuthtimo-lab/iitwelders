import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, Users, Building, Award, Search, Filter, ArrowUp, ChevronRight } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ClientsProjects = () => {
  useScrollAnimation();
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Stats with count-up animations
  const clientsCount = useCountUp({ end: 56, duration: 2500 });
  const projectsCount = useCountUp({ end: 56, duration: 3000, delay: 200 });
  const longestProjectCount = useCountUp({ end: 81, duration: 2000, delay: 400 });
  const maxPersonnelCount = useCountUp({ end: 120, duration: 2800, delay: 600 });
  
  // Back to top functionality
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      client: 'Dixie Iron Works',
      location: 'Alice, Texas',
      project: 'Hydraulic pumps structure frames fabrication',
      craftOnSite: '12 Fitters, Welders and Supervisor',
      duration: '2 months',
      personnel: 12
    },
    {
      client: 'Signal International',
      location: 'Orange, Sabine Pass, Port Arthur Texas and offshore work at the Gulf of Mexico',
      project: 'Diamond Offshore Oil Rigs and Government Ships Fabrication',
      craftOnSite: '110 Pipe & Structure Fitters, Lay out Fitters, Pipe & Structure Welders, Tig Welders, Supervisors',
      duration: '31 months',
      personnel: 110
    },
    {
      client: 'Esco Marine Inc.',
      location: 'Brownsville, Texas',
      project: 'Offshore Oil Rig Repair',
      craftOnSite: '28 Pipe & Structure Welders, Pipe & Structure Fitters, Supervisor, Fitter Helpers',
      duration: '6 months',
      personnel: 28
    },
    {
      client: 'STI Group',
      location: 'Tulsa, Oklahoma',
      project: 'H&P Flex Gas Land Rigs new Fabrication',
      craftOnSite: '8 Flux Cored Welders',
      duration: '4 weeks',
      personnel: 8
    },
    {
      client: 'Keppel Amfels',
      location: 'Brownsville, Texas',
      project: 'Transocean & Diamond Offshore Semi-Submergible and Jack up Oil Rigs repairs and new builds',
      craftOnSite: '46 Welders and Fitters',
      duration: '18 months',
      personnel: 46
    },
    {
      client: 'Load Craft Industries',
      location: 'Brad & Early Texas',
      project: 'Nabors Drilling Rigs Fabrication, Mud Tanks and other drilling components',
      craftOnSite: '84 Welders, Fitters, Operators',
      duration: '15 months',
      personnel: 84
    },
    {
      client: 'R.M Walsdorf Inc.',
      location: 'Port of Brownsville TX',
      project: 'Boat ladders',
      craftOnSite: '4 Welders and Fitters',
      duration: '2 months',
      personnel: 4
    },
    {
      client: 'Shoreline Foundation, Inc.',
      location: 'Kings Bay Naval Base, GA.',
      project: 'Water front, North Land Water Interface P636',
      craftOnSite: '12 Welders, Fitters & Supervisor',
      duration: '3 months',
      personnel: 12
    },
    {
      client: 'STI Group',
      location: 'Bridge City, Texas',
      project: 'H&P Gas Land Rigs',
      craftOnSite: '28 Welders & Fitters',
      duration: '2 years',
      personnel: 28
    },
    {
      client: 'INTERLUBE CORPORATION, INC',
      location: 'Port of Brownsville TX',
      project: 'Above Ground Storage Tanks Maintenance',
      craftOnSite: '4 Maintenance Group',
      duration: '1 year',
      personnel: 4
    },
    {
      client: 'STI Group',
      location: 'Vidor, Texas',
      project: 'H&P Gas Land Rigs',
      craftOnSite: '44 Welders and Fitters',
      duration: '28 months',
      personnel: 44
    },
    {
      client: 'Triton Marine',
      location: 'Port of Brownsville, TX',
      project: 'Construction of new dock #6',
      craftOnSite: '6 Fitter/Welder',
      duration: '18 months',
      personnel: 6
    },
    {
      client: 'Nehemiah\'s Vision',
      location: 'Port Arthur, Texas',
      project: 'Residential Homes Repair',
      craftOnSite: '14 Residential Carpenters',
      duration: '6 months',
      personnel: 14
    },
    {
      client: 'Keppel Amfels',
      location: 'Brownsville, Texas',
      project: 'Offshore Drilling Rig',
      craftOnSite: '30 Welders, Fitters, Supervisors',
      duration: '16 months to date',
      personnel: 30
    },
    {
      client: 'Weeks Marine',
      location: 'Cameron, LA',
      project: 'Sea Wall LNG Terminal',
      craftOnSite: 'Welders and Fitters',
      duration: '8 months',
      personnel: 8
    },
    {
      client: 'STI Group',
      location: 'Tulsa, Oklahoma',
      project: 'Flex Drilling Rigs Fabrication',
      craftOnSite: 'Welders and Fitters',
      duration: '2 months',
      personnel: 12
    },
    {
      client: 'Ready Flo',
      location: 'Corpus Christi, TX',
      project: 'Skids Gas Separators',
      craftOnSite: 'Welders and Fitters',
      duration: '16 months to date',
      personnel: 12
    },
    {
      client: 'Space X Brownsville',
      location: 'Brownsville, TX',
      project: 'New erection construction',
      craftOnSite: '24 welders and 2 supervisors',
      duration: '6 months',
      personnel: 26
    },
    {
      client: 'South East Texas Industries',
      location: 'Beaumont, Bridge City, Vidor, Orange Texas',
      project: 'H&P Flex Gas Land Rigs new fabrication',
      craftOnSite: '120 Pipe & Structure Fitters, Pipe & Structure Welders, Tig Welders, 6/GR Welders, S.S Welders, Supervisors, Fitter Helpers',
      duration: '42 months',
      personnel: 120
    },
    {
      client: 'Gulf Marine Fabrication',
      location: 'Aransas Pass and Ingleside Texas',
      project: 'Oil Rig Tower and Decks Fabrication',
      craftOnSite: '36 Tig Welders, 6/GR Welders, Pipe & Structure Fitters, Supervisors, Tack Welders',
      duration: '32 months',
      personnel: 36
    },
    {
      client: 'Veolia Environmental Services',
      location: 'Port Arthur, Texas',
      project: 'Veolia Environmental Processing Plant Turnaround',
      craftOnSite: '38 Pipe & Structure Fitters, Pipe & Structure Welders, Boiler Makers',
      duration: '36 Days',
      personnel: 38
    },
    {
      client: 'Environmental Evolution Services',
      location: 'Robstown, Texas',
      project: 'Acid Frac Tank Containers',
      craftOnSite: '4 Welders and Fitters',
      duration: '24 months',
      personnel: 4
    },
    {
      client: 'Eastern Shipbuilding',
      location: 'Panama City, Florida',
      project: 'Fabrication of new Coast Guard Ships, Cargo Boats, Crew Boats',
      craftOnSite: '35 Welders, Fitters, Electricians',
      duration: '5 years',
      personnel: 35
    },
    {
      client: 'STIS',
      location: 'Livingston, Texas',
      project: 'H&P Gas Land Rigs',
      craftOnSite: '60 Welders, Fitters, Supervisors',
      duration: '19 months',
      personnel: 60
    },
    {
      client: 'Shoreline Foundation Inc.',
      location: 'Port of Brownsville TX',
      project: 'Boat Landing Tie Downs',
      craftOnSite: '12 Welders and Fitters',
      duration: '1 month',
      personnel: 12
    },
    {
      client: 'STI GROUP',
      location: 'Orange, Texas',
      project: 'Ammonia and Gas Stainless Steel Skid Plants',
      craftOnSite: '6 Welders, Fitters, Assemblers',
      duration: '2 months',
      personnel: 6
    },
    {
      client: 'MOORE IRON AND STEEL INC.',
      location: 'Hondo, Texas',
      project: 'Martin Asphalt Terminal, Above Ground Storage Tank Fabrication',
      craftOnSite: '17 Pipe Welders, Pipe Fitters and Supervisors',
      duration: '7 months',
      personnel: 17
    },
    {
      client: 'SOLARIS OIL FIELD INFRASTRUCTURE INC.',
      location: 'Early, Texas',
      project: 'Sand Silos Fabrication for the Oil Field Industries',
      craftOnSite: '16 Welders, Fitters Combination',
      duration: '26 months',
      personnel: 16
    },
    {
      client: 'Derrick Construction',
      location: 'Port of Brownsville, TX',
      project: 'Construction of new dock #3',
      craftOnSite: '10 Fitter/Welder',
      duration: '4 months',
      personnel: 10
    },
    {
      client: 'Russell Marine',
      location: 'Port Aransas, Texas',
      project: '48" Pile Fitting and Welding',
      craftOnSite: '8 Pipe Welders and 4 Pipe Fitters',
      duration: '4 months',
      personnel: 12
    },
    {
      client: 'City of Brownsville, TX',
      location: 'Brownsville, Texas',
      project: 'Structural Components Fire Dept.',
      craftOnSite: 'Welders and Fitters',
      duration: '1 month',
      personnel: 6
    },
    {
      client: 'Weeks Marine',
      location: 'Aransas Pass, TX',
      project: 'Exxon Terminal Dock Piling Fabrication',
      craftOnSite: 'Welders and Fitters',
      duration: '3 months',
      personnel: 8
    },
    {
      client: 'Orion Construction',
      location: 'Ingleside, TX',
      project: 'Dock Piling LNG Terminal',
      craftOnSite: 'Welders and Fitters',
      duration: '6 months',
      personnel: 10
    },
    {
      client: 'Orion Construction',
      location: 'Ingleside, TX',
      project: 'Dock Piling LNG Terminal',
      craftOnSite: 'Welders and Fitters',
      duration: '4 months',
      personnel: 10
    },
    {
      client: 'Stewart Construction',
      location: 'Harvey, LA',
      project: 'Dock Piling and components',
      craftOnSite: '6 Welders and 2 Fitters',
      duration: '6 months to date',
      personnel: 8
    },
    {
      client: 'Beacon Maritime',
      location: 'Orange, Sabine Pass, and Port Arthur Texas',
      project: 'Songa, Aban Chiles, Neptune and Diamond Offshore Oil Rig Fabrication',
      craftOnSite: '80 Pipe & Structure Fitters, Pipe & Structure Welders, Supervisors, Fitter Helpers',
      duration: '12 months',
      personnel: 80
    },
    {
      client: 'Jet Specialty, Inc',
      location: 'Corpus Christi, Texas',
      project: 'Gas Pressure Vessels Fabrication',
      craftOnSite: '8 Mig Pipe Welders, Pipe Fitters and Supervisor',
      duration: '81 months',
      personnel: 8
    },
    {
      client: 'Long Fence Company',
      location: 'Brownsville, Texas',
      project: 'Rio Grande Valley US/Mexico Border Wall. Sectors 017-018-and 019',
      craftOnSite: '86 St Welders & Fitters, Fitter Helpers, Supervisors, Tack Welders, Operators, Riggers, Safety Officers',
      duration: '12 months',
      personnel: 86
    },
    {
      client: 'STI Oil Field Services',
      location: 'Vidor, Gonzalez, Kennedy, York Town, McAllen Texas. North Dakota, Denver Colorado.',
      project: 'H&P Flex Gas Land Rigs new fabrication',
      craftOnSite: '26 Flux Cored Welders and Fitters',
      duration: '26 months',
      personnel: 26
    },
    {
      client: 'Brownsville Navigation District',
      location: 'Port of Brownsville TX',
      project: 'Crane Boom repair and new construction',
      craftOnSite: '4 Welders and Fitters',
      duration: '6 years to Date',
      personnel: 4
    },
    {
      client: 'Solaris Oil Field Industries',
      location: 'Early, Texas',
      project: 'Mud Tanks and other drilling components',
      craftOnSite: '16 Welders, Fitters, Operators',
      duration: '11 months',
      personnel: 16
    },
    {
      client: 'R.P. Construction',
      location: 'Brownsville TX P.U.B Location',
      project: 'Welding Stainless Steel Pipe Welding System',
      craftOnSite: '4 Tig Welders and Fitters',
      duration: '5 months',
      personnel: 4
    },
    {
      client: 'READY FLO SYSTEMS',
      location: 'Corpus Christi, Texas',
      project: 'Oil Field Gas Separators Fabrication',
      craftOnSite: '3 Pipe Welder Combos',
      duration: '4 months',
      personnel: 3
    },
    {
      client: 'RIO GRANDE TOOLS, INC',
      location: 'Brownsville, Texas',
      project: 'Valley Baptist Hospital pipe line modifications',
      craftOnSite: '4 Welder/Fitters',
      duration: '6 months',
      personnel: 4
    },
    {
      client: 'STI Group',
      location: 'Beaumont, Texas',
      project: 'H&P Gas Land Rigs',
      craftOnSite: '8 welders and fitters',
      duration: '6 months',
      personnel: 8
    },
    {
      client: 'STI Group',
      location: 'Nederland, Texas',
      project: 'H&P Gas Land Rigs',
      craftOnSite: '10 Fitters',
      duration: '27 months',
      personnel: 10
    },
    {
      client: 'STI Group Florida',
      location: 'Cape Canaveral, Florida',
      project: 'Space X fabrication of new towers, piping & structural',
      craftOnSite: '10 Fitters & Welders',
      duration: '3 months',
      personnel: 10
    },
    {
      client: 'ATS Construction',
      location: 'Corpus Christi, TX',
      project: 'Pipe Rack Fabrication',
      craftOnSite: '7 Welders and 2 St/Fitters',
      duration: '3 months',
      personnel: 9
    },
    {
      client: 'STI Group',
      location: 'Vidor and Bridge City, TX',
      project: 'Flex Drilling Rigs Fabrication',
      craftOnSite: 'Welders and Fitters',
      duration: '14 months',
      personnel: 15
    },
    {
      client: 'Orion Construction',
      location: 'Donaldsonville, LA',
      project: 'Dock Piling LNG Terminal',
      craftOnSite: 'Welders and Fitters',
      duration: '4 months',
      personnel: 10
    },
    {
      client: 'ATS Construction',
      location: 'Corpus Christi, TX',
      project: 'Tank Vessels and Pipe Fabrication',
      craftOnSite: 'Welders and Fitters',
      duration: '8 months',
      personnel: 12
    },
    {
      client: 'Orion Marine',
      location: 'New Orleans, LA',
      project: 'Refurbishment of existing dock',
      craftOnSite: '8 welders',
      duration: '6 months to date',
      personnel: 8
    }
  ];

  // Industry categories for filtering
  const industries = [
    'All',
    'Offshore Oil Rigs',
    'Marine Construction', 
    'Industrial Fabrication',
    'Aerospace Projects',
    'Infrastructure',
    'Energy & Utilities',
    'Government Projects'
  ];
  
  // Enhanced projects with industry categorization
  const enhancedProjects = projects.map(project => {
    let industry = 'Industrial Fabrication'; // default
    
    if (project.project.toLowerCase().includes('oil rig') || 
        project.project.toLowerCase().includes('offshore') ||
        project.client.toLowerCase().includes('signal') ||
        project.client.toLowerCase().includes('keppel') ||
        project.client.toLowerCase().includes('beacon')) {
      industry = 'Offshore Oil Rigs';
    } else if (project.project.toLowerCase().includes('ship') ||
               project.project.toLowerCase().includes('marine') ||
               project.project.toLowerCase().includes('dock') ||
               project.project.toLowerCase().includes('boat') ||
               project.client.toLowerCase().includes('eastern shipbuilding') ||
               project.client.toLowerCase().includes('triton marine')) {
      industry = 'Marine Construction';
    } else if (project.client.toLowerCase().includes('space') ||
               project.project.toLowerCase().includes('space')) {
      industry = 'Aerospace Projects';
    } else if (project.project.toLowerCase().includes('border wall') ||
               project.client.toLowerCase().includes('government') ||
               project.location.toLowerCase().includes('naval base')) {
      industry = 'Government Projects';
    } else if (project.project.toLowerCase().includes('terminal') ||
               project.project.toLowerCase().includes('lng') ||
               project.project.toLowerCase().includes('storage tank')) {
      industry = 'Energy & Utilities';
    } else if (project.project.toLowerCase().includes('bridge') ||
               project.client.toLowerCase().includes('navigation') ||
               project.project.toLowerCase().includes('crane')) {
      industry = 'Infrastructure';
    }
    
    return { ...project, industry };
  });
  
  // Get unique locations for filter
  const locations = ['All', ...new Set(enhancedProjects.map(p => {
    const state = p.location.split(',').pop()?.trim() || p.location;
    return state.replace(/\b(Texas|TX|Florida|LA|Louisiana|Oklahoma|Colorado|GA|Georgia)\b/g, (match) => {
      const stateMap = {
        'TX': 'Texas',
        'LA': 'Louisiana', 
        'GA': 'Georgia'
      };
      return stateMap[match] || match;
    });
  }))];
  
  // Filtered projects based on search and filters
  const filteredProjects = useMemo(() => {
    return enhancedProjects.filter(project => {
      const matchesSearch = project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = selectedIndustry === 'All' || project.industry === selectedIndustry;
      
      const projectLocation = project.location.split(',').pop()?.trim() || project.location;
      const normalizedLocation = projectLocation.replace(/\b(TX|LA|GA)\b/g, (match) => {
        const stateMap = { 'TX': 'Texas', 'LA': 'Louisiana', 'GA': 'Georgia' };
        return stateMap[match] || match;
      });
      const matchesLocation = selectedLocation === 'All' || normalizedLocation.includes(selectedLocation);
      
      return matchesSearch && matchesIndustry && matchesLocation;
    });
  }, [searchTerm, selectedIndustry, selectedLocation]);
  
  // Handle loading state separately
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedIndustry, selectedLocation]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-slate-800 border-b border-slate-700 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => window.location.href = '/'}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="h-4 w-4 text-slate-500" />
            <span className="text-white font-medium">Clients & Projects</span>
          </div>
        </div>
      </nav>
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-32 overflow-hidden hero-transition">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero_subpage.png)' }}
          >
          </div>

          {/* Geometric Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Clients &
                <span className="text-blue-400"> Projects</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Showcasing our successful partnerships and completed projects across various industries. 
                From offshore oil rigs to industrial fabrication, we deliver excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Soft Transition */}
        <div className="relative h-40 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-800/60">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-800/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-800/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="stat-card animate-fadeInUp">
                  <div 
                    ref={clientsCount.ref}
                    className="stat-number"
                  >
                    {clientsCount.count}
                  </div>
                  <p className="stat-label">Major Clients Served</p>
                </div>
                
                <div className="stat-card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                  <div 
                    ref={projectsCount.ref}
                    className="stat-number"
                  >
                    {projectsCount.count}
                  </div>
                  <p className="stat-label">Projects Completed</p>
                </div>
                
                <div className="stat-card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                  <div 
                    ref={longestProjectCount.ref}
                    className="stat-number"
                  >
                    {longestProjectCount.count}
                  </div>
                  <p className="stat-label">Months Longest Project</p>
                </div>
                
                <div className="stat-card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                  <div 
                    ref={maxPersonnelCount.ref}
                    className="stat-number"
                  >
                    {maxPersonnelCount.count}
                  </div>
                  <p className="stat-label">Max Personnel on Site</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Transition */}
        <div className="relative h-40 bg-gradient-to-b from-slate-800 via-slate-800/80 to-slate-800/60">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-slate-800/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-transparent to-slate-800/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <section className="py-8 bg-slate-800 bg-pattern-dots section-transition-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search projects, clients, or locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 hover:border-accent-blue/50"
                    />
                  </div>
                </div>
                
                {/* Industry Filter */}
                <div>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full py-3 px-4 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 hover:border-accent-blue/50"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                
                {/* Location Filter */}
                <div>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full py-3 px-4 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 hover:border-accent-blue/50"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Results Count */}
              <div className="mt-4 text-center">
                <span className="text-slate-400 text-sm">
                  Showing {filteredProjects.length} of {enhancedProjects.length} projects
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Transition */}
        <div className="relative h-40 bg-gradient-to-b from-slate-800 via-slate-800/80 to-slate-900/60">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-transparent to-slate-900/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="py-24 bg-slate-900 bg-pattern-industrial section-transition-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Project Portfolio</h2>
                <p className="text-slate-400 text-lg">Complete portfolio of our successful projects and client partnerships</p>
              </div>

              {/* Loading State */}
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-slate-800/50 border border-slate-600 rounded-xl p-6 animate-pulse">
                      <div className="space-y-4">
                      <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="h-5 bg-slate-700 rounded mb-2"></div>
                            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                          </div>
                          <div className="h-6 w-12 bg-slate-700 rounded"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-4 bg-slate-700 rounded"></div>
                          <div className="h-4 bg-slate-700 rounded"></div>
                          <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProjects.length === 0 ? (
                    <div className="col-span-full text-center py-16">
                      <div className="text-slate-400 text-lg mb-4">No projects found</div>
                      <p className="text-slate-500">Try adjusting your search terms or filters</p>
                    </div>
                  ) : (
                    filteredProjects.map((project, index) => (
                      <div key={index} className="card-enhanced card-hover hover-slide p-6 touch-manipulation">
                        <div className="space-y-4">
                          {/* Industry Badge */}
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="bg-accent-gradient border border-accent-blue/30 rounded-lg px-3 py-1 inline-block mb-3 shadow-lg">
                                <span className="text-white text-xs font-medium">{project.industry}</span>
                              </div>
                              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{project.client}</h3>
                              <div className="flex items-center space-x-2 text-slate-400">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm line-clamp-1">{project.location}</span>
                              </div>
                            </div>
                            <div className="bg-accent-blue/20 border border-accent-blue/30 rounded-lg px-3 py-1 ml-2 hover-glow">
                              <span className="text-accent-blue text-sm font-medium">{project.personnel}</span>
                        </div>
                      </div>

                      {/* Project Details */}
                          <div className="space-y-3">
                        <div>
                              <h4 className="text-white font-semibold mb-1 text-sm">Project:</h4>
                              <p className="text-slate-300 text-sm line-clamp-2">{project.project}</p>
                        </div>

                        <div>
                              <h4 className="text-white font-semibold mb-1 text-sm">Craft on Site:</h4>
                              <p className="text-slate-300 text-sm line-clamp-2">{project.craftOnSite}</p>
                        </div>

                            <div className="flex items-center justify-between pt-3 border-t border-slate-600">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-blue-400" />
                                <span className="text-slate-400 text-sm">{project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-blue-400" />
                                <span className="text-slate-400 text-sm">{project.personnel}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                    </div>
              )}
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section className="py-24 bg-slate-800 section-transition-wave">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-12">Industry Sectors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Building className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Offshore Oil Rigs</h3>
                  <p className="text-slate-400">Jack-up rigs, semi-submersible platforms, and drilling equipment</p>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Refineries</h3>
                  <p className="text-slate-400">Process equipment, pressure vessels, and maintenance work</p>
                </div>
                
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Marine & Shipbuilding</h3>
                  <p className="text-slate-400">Coast Guard ships, cargo boats, and marine structures</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-accent-gradient hover:bg-blue-700 text-white p-4 rounded-full shadow-xl hover-lift btn-hover-lift touch-manipulation border border-accent-blue/30"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ClientsProjects;
