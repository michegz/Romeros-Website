import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero.tsx';
import { CheckCircle2, Send, Phone, Mail, MapPin, Clock, Zap, ShieldCheck } from 'lucide-react';
import { PHONE, EMAIL } from '../constants.tsx';

const RequestService: React.FC = () => {
  useEffect(() => {
    document.title = "Get a Repair Quote | Romero’s Service Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Request a quote for property repairs in Acadiana and Baton Rouge. Fast response and professional service for residential and commercial maintenance.');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://romerosservicecompany.com/request-service');
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Residential',
    address: '',
    message: ''
  });

  const encode = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "request-service",
        "bot-field": "",
        ...formData,
      }),
    });

    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.error("Netlify form submit error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-stone-50 min-h-screen">
        <div className="max-w-3xl mx-auto py-32 px-6 text-center">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-stone-200">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-emerald-950 mb-6">Submission Confirmed.</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Your request has been successfully logged into our system. Our dispatch team is currently reviewing your details to assign the most qualified specialist. You will receive a confirmation call or email within 24 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-emerald-950 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50">
      <Hero 
        title="Request Service in Lafayette & Acadiana"
        subtitle="PRIMARY SERVICE INTAKE"
        description="Every project at Romero’s begins here. This portal ensures your request is logged, prioritized, and routed to the correct multi-trade specialist instantly. We guarantee clear communication and a response within 24 hours."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070"
      >
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-stone-200/40 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
          <p className="text-emerald-950 font-bold text-[10px] uppercase tracking-wider leading-none">
            No money upfront. Licensed professionals. Clear response within 24 hours.
          </p>
        </div>
      </Hero>

      <section className="py-24 px-6 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-stone-200">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-emerald-950 mb-2">Submit Your Residential or Commercial Service Request</h2>
                <p className="text-stone-500 font-medium">Please provide accurate contact information for scheduling.</p>
              </div>
              
              <form
                name="request-service"
                method="POST"
                action="/"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
>
                <input type="hidden" name="form-name" value="request-service" />
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={() => {}} />
                  </label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-emerald-950 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-emerald-950 uppercase tracking-widest px-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(337) 000-0000"
                      className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-emerald-950 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="serviceType" className="text-sm font-bold text-emerald-950 uppercase tracking-widest px-1">Service Type</label>
                    <select 
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-bold text-emerald-950 uppercase tracking-widest px-1">Address / City</label>
                  <input 
                    required
                    type="text" 
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, Lafayette or surrounding area"
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-emerald-950 uppercase tracking-widest px-1">Message / Details</label>
                  <textarea 
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe the issue or project in detail..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-emerald-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center space-x-3"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Request</span>
                  </button>
                  <p className="text-center text-stone-400 text-xs mt-6 font-medium">
                    By submitting, you agree to our terms of service and priority dispatch protocols.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Side */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-emerald-950 text-white p-10 rounded-[2.5rem] shadow-xl">
                <h2 className="text-xl font-bold mb-6">Local Service Area & Direct Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-800 rounded-xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Office Line</p>
                      <p className="text-lg font-bold">{PHONE}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-800 rounded-xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Email Dispatch</p>
                      <p className="text-lg font-bold truncate">{EMAIL}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-800 rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Serving Acadiana & Baton Rouge</p>
                      <p className="text-lg font-bold">Lafayette, Baton Rouge & Surrounding Region</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200">
                <h2 className="text-xl font-bold text-emerald-950 mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                  Fast Response & Clear Next Steps
                </h2>
                <ul className="space-y-6">
                  {[
                    { title: "Priority Review", text: "Requests are reviewed in the order received by our dispatch team." },
                    { title: "Specialist Assignment", text: "We match your specific trade needs with the right field technician." },
                    { title: "Clear Scheduling", text: "We call or email you within 24 hours to finalize your appointment." },
                    { title: "Quality Execution", text: "Our multi-trade professionals handle the work with precision." }
                  ].map((step, i) => (
                    <li key={i} className="flex items-start space-x-3 text-stone-600">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-emerald-950 font-bold text-sm leading-none mb-1">{step.title}</p>
                        <p className="text-xs font-medium leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-100 p-8 rounded-[2rem] border border-stone-200">
                <div className="flex items-center space-x-3 mb-4">
                   <Zap className="w-5 h-5 text-emerald-700" />
                   <h4 className="text-sm font-bold text-emerald-950 uppercase tracking-widest">Emergency?</h4>
                </div>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  For immediate property emergencies that cannot wait 24 hours, please submit the form above and call our office line directly at <span className="text-emerald-900 font-bold">{PHONE}</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestService;
