import React, { useEffect } from 'react';
import Hero from '../components/Hero.tsx';
import { Building2, ClipboardCheck, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Commercial: React.FC = () => {
  useEffect(() => {
    document.title = "Commercial Maintenance Acadiana | Romero’s Service Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Professional facility maintenance and structural site support for commercial properties across Acadiana. Reliable multi-trade solutions for businesses and property managers.');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://romerosservicecompany.com/commercial');
  }, []);

  const categories = [
    {
      id: "facility",
      title: "Facility Maintenance",
      icon: <ClipboardCheck className="w-10 h-10" />,
      services: [
        "Commercial plumbing repairs",
        "Electrical and lighting maintenance",
        "Property turnovers and make-ready work",
        "Punch list completion",
        "Appliance installation and replacement for apartment complexes and multi-unit properties",
        "General commercial repairs",
        "Ongoing maintenance support"
      ]
    },
    {
      id: "structural",
      title: "Site & Structural Support",
      icon: <Building2 className="w-10 h-10" />,
      services: [
        "Light demolition",
        "Exterior painting",
        "Siding repairs",
        "Concrete and surface maintenance",
        "Fencing and hardware",
        "Site cleanup and debris removal"
      ]
    }
  ];

  return (
    <div className="bg-stone-50">
      <Hero 
        title="Multi-Trade Commercial Repairs & Facility Maintenance in Acadiana"
        subtitle="For Property Leaders"
        description="Reliable, multi-trade service for property managers, real estate professionals, and commercial property owners. We handle ongoing maintenance, repairs, and site support with clear communication and consistent execution."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
        ctaText="Request Service"
        ctaLink="/request-service"
      >
        <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-200/60 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <p className="text-emerald-950 font-bold text-[11px] uppercase tracking-[0.1em] leading-none">
            Licensed & insured. No money upfront. Reliable multi-trade commercial support.
          </p>
        </div>
      </Hero>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-16 text-center">Comprehensive Commercial Repair Solutions for Property Managers & Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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

      {/* Commercial Cleaning Integration Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-stone-200 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
              <div className="bg-emerald-50 p-5 rounded-3xl text-emerald-700 shrink-0">
                <Sparkles className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-emerald-950 mb-3">Professional Commercial Cleaning Support for Acadiana Facilities</h2>
                <p className="text-stone-600 text-lg font-medium leading-relaxed">
                  As part of our comprehensive facility support, we offer professional office and commercial cleaning services tailored to the needs of your business or multi-family property.
                </p>
              </div>
            </div>
            <Link 
              to="/cleaning" 
              className="inline-flex items-center space-x-3 bg-stone-100 text-emerald-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-900 hover:text-white transition-all group shrink-0"
            >
              <span>Cleaning Details</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Commercial Standards</h2>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Professional Service Standards for Commercial Properties</h2>
              <p className="text-emerald-100/70 text-lg leading-relaxed mb-10">
                We understand that commercial maintenance needs to be invisible. We work around your schedule to ensure your facility remains operational and safe, providing professional documentation and straightforward billing.
              </p>
              <div className="space-y-4">
                {[
                  "Licensed & Fully Insured",
                  "24/7 Emergency Response",
                  "No Money Upfront",
                  "Multi-Trade Capability"
                ].map(check => (
                  <div key={check} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-700 flex items-center justify-center text-[10px]">✓</div>
                    <span className="font-medium tracking-wide">{check}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20">
                  <h2 className="text-2xl font-bold mb-6">Request Commercial Service in Lafayette & Acadiana</h2>
                  <p className="mb-8 text-emerald-100/60">Submit your facility details and we'll reach out to discuss your recurring or one-time maintenance needs.</p>
                  <Link 
                    to="/request-service" 
                    className="block w-full bg-white text-emerald-900 py-4 rounded-full font-bold text-center hover:bg-emerald-50 transition-all"
                  >
                    Contact Commercial Team
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commercial;