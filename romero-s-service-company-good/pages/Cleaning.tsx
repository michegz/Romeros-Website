import React, { useEffect } from 'react';
import Hero from '../components/Hero.tsx';
import { 
  Sparkles, 
  Building2, 
  Home, 
  ClipboardCheck, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE } from '../constants.tsx';

const Cleaning: React.FC = () => {
  useEffect(() => {
    document.title = "Professional Cleaning Acadiana | Romero’s Service Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Meticulous residential and commercial cleaning services in Acadiana. We provide high-end interior care and post-construction cleaning in Lafayette and the surrounding parishes.');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://romerosservicecompany.com/cleaning');
  }, []);

  const cleaningCategories = [
    {
      title: "Residential Cleaning",
      subtitle: "For Private Estates & Homes",
      id: "residential-cleaning",
      icon: <Home className="w-10 h-10" />,
      description: "Meticulous interior care for homeowners who demand a higher standard of cleanliness and professionalism.",
      items: [
        "Deep cleaning & seasonal refreshing",
        "Routine maintenance cleaning",
        "Window and glass surface detailing",
        "Floor care (hardwood, tile, & carpet)",
        "Kitchen & bath sanitization",
        "Dusting and fine surface care"
      ]
    },
    {
      title: "Commercial Cleaning",
      subtitle: "For Offices & Facilities",
      id: "commercial-cleaning",
      icon: <Building2 className="w-10 h-10" />,
      description: "Maintaining professional environments that reflect the quality of your business operations.",
      items: [
        "Office & workspace sanitization",
        "Common area & lobby maintenance",
        "Commercial restroom management",
        "Breakroom and kitchen cleaning",
        "Trash removal & recycling",
        "After-hours janitorial service"
      ]
    },
    {
      title: "Post-Construction & Turnover",
      subtitle: "For Builders & Property Managers",
      id: "post-construction",
      icon: <ClipboardCheck className="w-10 h-10" />,
      description: "Specialized clearing and detailing to prepare new builds or rental units for immediate occupancy.",
      items: [
        "Construction dust & debris removal",
        "Detailed appliance & fixture cleaning",
        "Cabinet & drawer interior vacuuming",
        "Rental turnover (Make-Ready) cleaning",
        "Final detailing for home staging",
        "Multi-unit property clearing"
      ]
    }
  ];

  return (
    <div className="bg-stone-50">
      <Hero 
        title="Professional Residential & Commercial Cleaning Services in Acadiana"
        subtitle="INTERIOR MAINTENANCE"
        description="Romero’s Cleaning Division provides high-standard interior care for residential estates, corporate offices, and post-construction sites across Acadiana."
        image="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2070"
        ctaText="Request Cleaning"
        ctaLink="/request-service"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-200/60 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <p className="text-emerald-950 font-bold text-[11px] uppercase tracking-[0.1em] leading-none">
              Fully insured. Professionally trained. Trusted across Acadiana.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {cleaningCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/cleaning#${cat.id}`}
                className="group flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-stone-200 px-5 py-2.5 rounded-full text-[10px] font-bold text-emerald-950 hover:bg-emerald-900 hover:text-white hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <span>{cat.title}</span>
                <ChevronRight className="w-3 h-3 text-emerald-600 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </Hero>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Intro Section */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl text-emerald-950 font-bold leading-tight">
              Residential, Commercial & Post-Construction Cleaning Solutions
            </h2>
          </div>

          {/* Cleaning Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cleaningCategories.map((cat, idx) => (
              <div id={cat.id} key={idx} className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col scroll-mt-header">
                <div className="mb-6 text-emerald-900 bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {cat.icon}
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-emerald-950 mb-1">{cat.title}</h3>
                  <p className="text-emerald-700 text-xs font-bold uppercase tracking-widest">{cat.subtitle}</p>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-8">
                  {cat.description}
                </p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-emerald-950 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/request-service" 
                  className="flex items-center justify-center space-x-2 w-full py-4 bg-stone-50 text-emerald-900 rounded-xl font-bold hover:bg-emerald-900 hover:text-white transition-all group"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-24 px-6 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">The Romero Standard</h2>
            <h2 className="text-4xl font-bold mb-8 leading-tight">Professional Cleaning Standards for Homes & Facilities</h2>
            <p className="text-emerald-100/70 text-lg leading-relaxed mb-10">
              Unlike many cleaning services, we operate as a fully licensed multi-trade company. This means our cleaning technicians are held to the same high standards of accountability, background checks, and professional insurance as our repair teams across Acadiana.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-900 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Fully Insured</p>
                  <p className="text-sm text-emerald-100/60">Complete protection for your property assets.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-900 rounded-xl">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Timely Service</p>
                  <p className="text-sm text-emerald-100/60">Professional scheduling you can depend on.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-[3rem] border border-white/20">
              <Sparkles className="w-12 h-12 text-emerald-400 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Request Cleaning Service in Lafayette & Acadiana</h2>
              <p className="text-emerald-100/70 mb-8">
                Ready to schedule a walk-through or request a quote for your facility or home? Our primary intake portal is the fastest way to get started.
              </p>
              <Link 
                to="/request-service" 
                className="block w-full bg-white text-emerald-900 py-5 rounded-full font-bold text-center hover:bg-emerald-50 transition-all shadow-xl"
              >
                Request Your Cleaning Quote
              </Link>
              <p className="text-center mt-6 text-emerald-200/50 text-xs font-bold uppercase tracking-widest">
                Direct Line: {PHONE}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cleaning;