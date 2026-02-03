import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { COMPANY_NAME, PHONE, EMAIL, SERVICE_AREAS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-50 py-20 px-6 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl font-bold tracking-tight text-white uppercase">Romero’s</span>
            <span className="text-[10px] -mt-1 uppercase tracking-[0.2em] font-medium text-emerald-400">Service Company</span>
          </Link>
          <p className="text-emerald-100/70 text-sm leading-relaxed max-w-xs">
            A full-scope, multi-trade repair and maintenance company based in Acadiana, serving homeowners and businesses with professional property solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
            <li><Link to="/residential" className="hover:text-emerald-400 transition-colors">Residential Services</Link></li>
            <li><Link to="/commercial" className="hover:text-emerald-400 transition-colors">Commercial Services</Link></li>
            <li><Link to="/cleaning" className="hover:text-emerald-400 transition-colors">Cleaning Services</Link></li>
            <li><Link to="/request-service" className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold">Request Service</Link></li>
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Service Area</h4>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map(area => (
              <span key={area} className="text-xs bg-emerald-900/40 border border-emerald-800 px-3 py-1.5 rounded-lg text-emerald-200">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Us</h4>
          <div className="space-y-4 text-sm">
            <a href={`tel:${PHONE.replace(/\D/g,'')}`} className="flex items-center space-x-3 group">
              <div className="p-2 bg-emerald-900 rounded-lg group-hover:bg-emerald-700 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-semibold">{PHONE}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center space-x-3 group">
              <div className="p-2 bg-emerald-900 rounded-lg group-hover:bg-emerald-700 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="truncate">{EMAIL}</span>
            </a>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-900 rounded-lg">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Serving Lafayette & Acadiana</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-500 font-medium tracking-wide">
        <p>© {new Date().getFullYear()} ROMERO’S SERVICE COMPANY. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0 uppercase">Designed for Excellence in Acadiana.</p>
      </div>
    </footer>
  );
};

export default Footer;