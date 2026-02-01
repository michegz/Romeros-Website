import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.tsx';
import { 
  Droplet, 
  Zap, 
  Wrench, 
  Settings, 
  Paintbrush, 
  Building, 
  Hammer, 
  Trash2, 
  Sparkles, 
  Wind,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { PHONE, EMAIL } from '../constants.tsx';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Multi-Trade Repair Services | Romero’s Service Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Browse our full inventory of residential and commercial services in Lafayette and Acadiana. From plumbing to remodeling, we provide real solutions.');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://romerosservicecompany.com/services');
  }, []);

  const serviceInventory = [
    {
      category: "Plumbing Services",
      path: "/residential#plumbing",
      icon: <Droplet className="w-6 h-6" />,
      items: ["Plumbing repairs", "Drain clogs and cleanouts", "Fixture repair and replacement", "Shutoff valves and supply lines", "Showers and toilets", "Appliance hookups", "Minor pipe repair"]
    },
    {
      category: "Electrical Services",
      path: "/residential#electrical",
      icon: <Zap className="w-6 h-6" />,
      items: ["Electrical repairs", "Light fixture installation and replacement", "Switches and outlets", "Ceiling fans", "General electrical installation work"]
    },
    {
      category: "General Repairs & Maintenance",
      path: "/residential#general-repairs",
      icon: <Wrench className="w-6 h-6" />,
      items: ["General repairs", "Preventive and routine maintenance", "Warranty work", "Sheetrock and drywall repair", "Carpentry", "Doors, windows, and frames", "Garage door repair"]
    },
    {
      category: "Installations",
      path: "/residential#installations",
      icon: <Settings className="w-6 h-6" />,
      items: ["Appliance installation", "Flooring installation", "Ceramic installation", "Fence installation", "Hardware and fixture installation"]
    },
    {
      category: "Painting & Finishes",
      path: "/residential#painting",
      icon: <Paintbrush className="w-6 h-6" />,
      items: ["Interior painting", "Exterior painting", "Texture and drywall finishing", "Trim and finish work"]
    },
    {
      category: "Exterior & Structural Services",
      path: "/residential#exterior",
      icon: <Building className="w-6 h-6" />,
      items: ["Vinyl siding", "Hardie siding", "Brick services", "Small roof repairs", "Yard work and property cleanups"]
    },
    {
      category: "Remodeling & Improvements",
      path: "/residential#remodeling",
      icon: <Hammer className="w-6 h-6" />,
      items: ["Remodels", "Interior renovations", "Property improvements and upgrades"]
    },
    {
      category: "Demolition, Cleanup & Disposal",
      path: "/residential#demolition",
      icon: <Trash2 className="w-6 h-6" />,
      items: ["Light demolition", "Disposal of debris", "Site cleanup", "Post-project cleanup"]
    },
    {
      category: "HVAC (Limited Scope)",
      path: "/residential#hvac",
      icon: <Wind className="w-6 h-6" />,
      items: ["A/C repair and service"]
    },
    {
      category: "Cleaning Services",
      path: "/cleaning",
      icon: <Sparkles className="w-6 h-6" />,
      items: ["Professional interior cleaning", "Residential cleaning services", "Commercial cleaning services", "Post-construction and turnover cleaning"]
    }
  ];

  const heroLinks = [
    { label: "Residential Services", path: "/residential" },
    { label: "Commercial Services", path: "/commercial" },
    { label: "Cleaning Services", path: "/cleaning" }
  ];

  return (
    <div className="bg-stone-50">
      <Hero 
        title="Multi-Trade Repair & Property Maintenance in Acadiana"
        subtitle="Complete Service Inventory"
        description="A complete overview of our multi-trade services. From everyday repairs and ongoing maintenance to remodels and professional cleaning, Romero’s Service Company provides full-scope residential and commercial solutions across the Acadiana region."
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&get=80&w=2070"
        ctaText="Request Service"
        ctaLink="/request-service"
        isMain={false}
      >
        <div className="mb-8">
          <div className="inline-block bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-200/60 shadow-sm">
            <p className="text-emerald-950 font-bold text-sm leading-relaxed">
              Use this page to explore our full service capabilities or choose a category below to get started quickly.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {heroLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group flex items-center space-x-2 bg-emerald-900 border border-emerald-800 px-6 py-3 rounded-full text-[11px] font-bold text-white hover:bg-emerald-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-emerald-950/20"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-300 group-hover:text-white transition-colors" />
            </Link>
          ))}
        </div>
      </Hero>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Introductory Text */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-emerald-900 font-bold uppercase tracking-[0.25em] text-xs mb-6">Comprehensive Multi-Trade Repair Solutions</h2>
            <p className="text-2xl md:text-3xl text-emerald-950 font-semibold leading-snug">
              We eliminate the stress of managing multiple vendors. Whether it's a minor leak, an electrical upgrade, or a full renovation, we provide a single point of accountability for your entire property.
            </p>
          </div>

          {/* Grouped Lists - Categorized by requested sections */}
          <div className="space-y-32">
            
            {/* Section 1: Residential & General Services */}
            <div id="residential" className="scroll-mt-header">
              <div className="flex items-center space-x-4 mb-12 border-b border-stone-200 pb-6">
                <div className="bg-emerald-900 text-white p-3 rounded-xl">
                  <Wrench className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-emerald-950">Professional Home Repairs for Acadiana Homeowners</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {serviceInventory.filter(s => !["Cleaning Services"].includes(s.category)).map((section, idx) => (
                  <Link 
                    to={section.path} 
                    key={idx} 
                    className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all group block text-left"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3 text-emerald-800">
                        <div className="bg-emerald-50 p-2 rounded-lg group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                          {section.icon}
                        </div>
                        <h3 className="text-xl font-bold tracking-tight">{section.category}</h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-emerald-200 group-hover:text-emerald-900 transition-colors" />
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-stone-600 text-sm font-medium leading-tight">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </div>

            {/* Section 2: Commercial Services */}
            <div id="commercial" className="scroll-mt-header">
              <div className="flex items-center space-x-4 mb-12 border-b border-stone-200 pb-6">
                <div className="bg-emerald-900 text-white p-3 rounded-xl">
                  <Building className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-emerald-950">Facility Maintenance for Property Managers & Businesses</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Standardized Card 1: Facility Maintenance (Dark Theme) */}
                <Link 
                  to="/commercial#facility"
                  className="bg-emerald-950 text-white p-10 rounded-[3rem] shadow-xl flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all group"
                >
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-emerald-800/50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors">
                        <Settings className="w-8 h-8 text-emerald-300 group-hover:text-emerald-950 transition-colors" />
                      </div>
                      <ChevronRight className="w-6 h-6 text-emerald-800 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Facility Maintenance</h3>
                    <p className="text-emerald-100/70 leading-relaxed text-sm">
                      Comprehensive support for retail, corporate, and multi-family facilities. We handle technical details so property managers can stay focused on operations.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <ul className="space-y-4">
                      {[
                        "Commercial plumbing repairs",
                        "Electrical and lighting maintenance",
                        "Property turnovers and make-ready work",
                        "Punch list completion",
                        "Ongoing maintenance support"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-emerald-50 text-sm font-bold">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>

                {/* Standardized Card 2: Site & Structural Support (Light Theme) */}
                <Link 
                  to="/commercial#structural"
                  className="bg-white p-10 rounded-[3rem] border border-stone-200 shadow-sm flex flex-col hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-1 transition-all group"
                >
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-stone-50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                        <Building className="w-8 h-8 text-emerald-900" />
                      </div>
                      <ChevronRight className="w-6 h-6 text-emerald-200 group-hover:text-emerald-900 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-950 mb-4">Site & Structural Support</h3>
                    <p className="text-stone-500 leading-relaxed text-sm">
                      Maintaining the professional appearance and structural integrity of commercial properties with reliable, licensed repair services.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <ul className="space-y-4">
                      {[
                        "Light demolition",
                        "Exterior painting",
                        "Siding repairs",
                        "Concrete and surface maintenance",
                        "Fencing and hardware",
                        "Site cleanup and debris removal"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-emerald-950 text-sm font-bold">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
            </div>

            {/* Section 3: Cleaning Services */}
            <div id="cleaning" className="scroll-mt-header pb-12">
              <div className="flex items-center space-x-4 mb-12 border-b border-stone-200 pb-6">
                <div className="bg-emerald-900 text-white p-3 rounded-xl">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-emerald-950">Professional Residential & Commercial Cleaning Services</h2>
              </div>
              
              <div className="max-w-4xl">
                 <Link to="/cleaning" className="bg-white p-12 rounded-[3rem] border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group block text-left">
                    <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                      Our professional cleaning division provides top-tier interior maintenance for high-end estates, commercial spaces, and comprehensive post-construction clearing.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                      {serviceInventory.find(s => s.category === "Cleaning Services")?.items.map((item, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-all">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <span className="text-lg font-bold text-emerald-950">{item}</span>
                        </div>
                      ))}
                    </div>
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto bg-emerald-950 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl">
          <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-6">Request Service in Lafayette & Acadiana</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to experience professional <br className="hidden md:block"/> multi-trade service?
          </h3>
          <p className="text-emerald-100/70 text-lg mb-12 max-w-2xl mx-auto">
            Contact us today to discuss your project. No money upfront—just licensed professionals providing real solutions in Lafayette & Acadiana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
             <a href={`tel:${PHONE.replace(/\D/g,'')}`} className="w-full sm:w-auto bg-white text-emerald-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-50 transition-all text-center">
               Call Now
             </a>
             <a href={`mailto:${EMAIL}`} className="w-full sm:w-auto bg-emerald-800 text-white border border-emerald-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all text-center">
               Email Our Team
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;