import React from 'react';
import Hero from '../components/Hero.tsx';
import ServiceCard from '../components/ServiceCard.tsx';
import { PRIMARY_SERVICES, SECONDARY_SERVICES, CORE_VALUES, PHONE } from '../constants.tsx';
import { CheckCircle2, ShieldCheck, Zap, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
   <div>
    <Hero
      title="Full-Service Residential & Commercial Property Solutions, All With One Call"
subtitle="ONE TEAM. ONE CALL. REAL SOLUTIONS."
description="Romero’s Service Company delivers repair, maintenance, cleaning, installation, and remodeling services for residential and commercial properties throughout Lafayette and surrounding Acadiana areas. From plumbing, electrical, and HVAC to carpentry, remodeling, and professional cleaning, our experienced full-service team makes it easy to handle nearly any property need with one reliable company."
        image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"
        alt="Professional Romero’s Service Company technician performing precision electrical repairs for a client in the Acadiana area."
        ctaText="Request Service"
        ctaLink="/request-service"
        isMain={true}
      >
        <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-200/60 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <p className="text-emerald-950 font-bold text-[11px] uppercase tracking-[0.1em] leading-none">
            Licensed & insured. No money upfront. Local Acadiana team.
          </p>
        </div>
      </Hero>

      {/* Trust Bar */}
      <section className="bg-emerald-950 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="flex items-center space-x-4 text-emerald-50 flex-1 min-w-[240px]">
              <div className="bg-emerald-800 p-3 rounded-xl shadow-lg shadow-emerald-950/20">
                {val.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide uppercase">{val.title}</h4>
                <p className="text-emerald-400 text-xs mt-1 font-medium">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services (Hybrid C) */}
<section className="py-24 bg-stone-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
          Full-Service Residential & Commercial Property Solutions
        </h2>
        <p className="mt-4 text-lg text-stone-700 max-w-2xl">
          One team, one call. Repairs, maintenance, cleaning, installations, and remodeling handled by trusted local professionals across Lafayette and surrounding Acadiana areas.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="tel:3379627879"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition"
        >
          Call {PHONE}
        </a>
        <a
          href="/request-service"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 font-semibold hover:bg-stone-100 transition"
        >
          Request Service
        </a>
      </div>
    </div>

    {/* Primary cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PRIMARY_SERVICES.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>

    {/* Secondary list: visible, not overwhelming */}
    <div className="mt-14 rounded-2xl border border-stone-200 bg-white p-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h3 className="text-xl font-bold text-stone-900">
            More services we handle
          </h3>
          <p className="mt-2 text-stone-700">
            If you’re not sure where your project fits, call us. We’ll tell you straight if it’s in our scope.
          </p>
        </div>

        <div className="lg:text-right">
          <Link
  to="/services"
  className="inline-flex items-center justify-center rounded-lg bg-emerald-900 px-6 py-3 text-white hover:bg-emerald-800"
>
  View all services
</Link>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
        {SECONDARY_SERVICES.map((item) => (
          <div key={item} className="flex items-start gap-3 text-stone-800">
            <CheckCircle2 className="w-5 h-5 mt-0.5 text-emerald-900" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-stone-600">
        And more, depending on the job. Specialty-licensed work is handled within applicable licensing and scope.
      </p>
    </div>
  </div>
</section>

      {/* About Section (Professional Standards) */}
      <section className="py-32 px-6 bg-white overflow-visible">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-50 rounded-3xl -z-10"></div>
            
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-[4/3] lg:aspect-auto min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=2070" 
                alt="Organized professional property management" 
                className="w-full h-full lg:h-[500px] object-cover block"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-emerald-900 font-bold uppercase tracking-widest text-sm">Trusted Support for Acadiana Homeowners & Property Managers</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-950 leading-tight">
              A Process Built for Your Peace of Mind.
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed">
              We’ve streamlined the repair experience to remove the stress of property maintenance. By combining years of field experience with a modern, transparent workflow, we make it easy to manage your home or facility without the administrative runaround.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Transparent Process",
                "Proven Experience",
                "Direct Point of Contact",
                "Seamless Scheduling"
              ].map(item => (
                <div key={item} className="flex items-center space-x-3 bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span className="font-bold text-emerald-950">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
               <Link 
               to="/request-service"
               className="inline-flex items-center justify-center bg-emerald-950 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-950/20"
             >
               Start Your Solution Today
             </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-emerald-300 font-bold uppercase tracking-widest text-sm mb-6">Request Fast Service in Lafayette & Acadiana</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              One call brings a whole <br className="hidden md:block"/> team of solutions to your door.
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/request-service" className="w-full sm:w-auto bg-white text-emerald-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-50 transition-all flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Emergency Request
              </Link>
              <Link to="/request-service" className="w-full sm:w-auto bg-emerald-800 text-white border border-emerald-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all">
                Commercial Inquiry
              </Link>
            </div>
            <p className="mt-10 text-emerald-200/60 font-medium tracking-wide uppercase">
              {PHONE} • SUPPORT@ROMEROSSERVICECOMPANY.COM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
