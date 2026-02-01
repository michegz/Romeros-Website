import React, { useEffect } from 'react';
import Hero from '../components/Hero.tsx';
import { 
  Droplet, 
  Wrench, 
  Zap, 
  Settings, 
  Building, 
  Hammer, 
  Trash2, 
  Wind,
  Sparkles,
  ArrowRight,
  Phone,
  Paintbrush,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE } from '../constants.tsx';

const Residential: React.FC = () => {
  useEffect(() => {
    document.title = "Residential Repairs & Maintenance Acadiana | Romero’s Service Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Expert multi-trade residential repair services for Acadiana homeowners. Licensed professionals handling plumbing, electrical, and general home maintenance across Lafayette and surrounding parishes.');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://romerosservicecompany.com/residential');
  }, []);

  const categories = [
    {
      id: "plumbing",
      title: "Plumbing Services",
      icon: <Droplet className="w-10 h-10" />,
      services: [
        "Plumbing repairs",
        "Drain clogs and cleanouts",
        "Fixture repair and replacement",
        "Shutoff valves and supply lines",
        "Showers and toilets",
        "Appliance hookups"
      ]
    },
    {
      id: "electrical",
      title: "Electrical Services",
      icon: <Zap className="w-10 h-10" />,
      services: [
        "Electrical repairs",
        "Light fixture installation and replacement",
        "Switches and outlets",
        "Ceiling fans",
        "Minor exterior electrical repairs"
      ]
    },
    {
      id: "general-repairs",
      title: "General Repairs & Maintenance",
      icon: <Wrench className="w-10 h-10" />,
      services: [
        "Drywall repair and texturing",
        "Trim, door, and hardware repairs",
        "Caulking and sealing",
        "Minor carpentry",
        "Warranty service work"
      ]
    },
    {
      id: "painting",
      title: "Painting & Finishes",
      icon: <Paintbrush className="w-10 h-10" />,
      services: [
        "Interior painting",
        "Exterior painting",
        "Texture and drywall finishing",
        "Trim and finish work"
      ]
    },
    {
      id: "installations",
      title: "Installations",
      icon: <Settings className="w-10 h-10" />,
      services: [
        "Appliance installation",
        "Flooring installation",
        "Ceramic and tile installation",
        "Fence installation",
        "Fixture and hardware installation"
      ]
    },
    {
      id: "exterior",
      title: "Exterior & Structural Services",
      icon: <Building className="w-10 h-10" />,
      services: [
        "Vinyl and Hardie siding repairs",
        "Brick repair",
        "Small roof repairs",
        "Yard work and property cleanups"
      ]
    },
    {
      id: "remodeling",
      title: "Remodeling & Improvements",
      icon: <Hammer className="w-10 h-10" />,
      services: [
        "Interior remodels",
        "Bathroom and kitchen updates",
        "Flooring and finish upgrades",
        "General home improvements"
      ]
    },
    {
      id: "demolition",
      title: "Demolition, Cleanup & Disposal",
      icon: <Trash2 className="w-10 h-10" />,
      services: [
        "Light demolition",
        "Debris removal",
        "Site cleanup",
        "Post-project cleanup"
      ]
    },
    {
      id: "hvac",
      title: "HVAC (Limited Scope)",
      icon: <Wind className="w-10 h-10" />,
      services: [
        "A/C repair and service only"
      ]
    }
  ];

  return (
    <div className="bg-stone-50">
      <Hero 
        title="Multi-Trade Residential Repairs & Property Maintenance in Acadiana"
        subtitle="For Every Homeowner"
        description="Reliable, multi-trade service for homeowners who want problems handled correctly the first time."
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070"
        ctaText="Get a Quote"
        ctaLink="/request-service"
      >
        <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-200/60 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <p className="text-emerald-950 font-bold text-[11px] uppercase tracking-[0.1em] leading-none">
            Licensed & insured. No money upfront. Trusted by Acadiana homeowners.
          </p>
        </div>
      </Hero>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-16 text-center">Comprehensive Multi-Trade Repair Solutions for Homes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, idx) => (
              <div key={idx} id={cat.id} className="scroll-mt-header bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6 text-emerald-900 bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-8 tracking-tight">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.services.map((s, i) => (
                    <li key={i} className="flex items-start space-x-3 text-stone-600 font-medium">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Reference Section */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-emerald-50 rounded-[3rem] p-10 md:p-14 border border-emerald-100 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
              <div className="bg-white p-5 rounded-3xl shadow-sm text-emerald-600 shrink-0">
                <Sparkles className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-emerald-950 mb-3">Professional Residential Repairs & Maintenance for Acadiana Homeowners</h2>
                <p className="text-stone-600 text-lg font-medium leading-relaxed max-w-xl">
                  In addition to repairs, we offer professional interior maintenance and deep cleaning services to keep your home in pristine condition.
                </p>
              </div>
            </div>
            <Link 
              to="/cleaning" 
              className="inline-flex items-center space-x-3 bg-emerald-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all group shadow-xl shadow-emerald-900/10 shrink-0"
            >
              <span>Explore Cleaning Services</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Uncertainty Callout */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto py-8">
            <p className="text-emerald-950 font-semibold text-lg leading-relaxed">
              If you’re not sure whether your repair fits one of these categories, just call. We’ll help you figure it out.
            </p>
            <a 
              href={`tel:${PHONE.replace(/\D/g,'')}`}
              className="mt-4 inline-flex items-center text-emerald-700 font-bold hover:text-emerald-900 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
           <div className="bg-emerald-950 rounded-[2rem] p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Request Residential Service in Lafayette & Acadiana</h2>
            <p className="text-emerald-100/70 mb-10 text-lg">
              No money upfront. Straightforward, trustworthy work from licensed professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
               <a href={`tel:${PHONE.replace(/\D/g,'')}`} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto text-center">
                 Call Now
               </a>
               <a href={`mailto:support@romerosservicecompany.com`} className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto text-center">
                 Email Support
               </a>
            </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;