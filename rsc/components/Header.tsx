import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE } from '../constants.tsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Residential', path: '/residential' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Cleaning', path: '/cleaning' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-stone-50/95 backdrop-blur-md py-3 border-stone-200 shadow-sm' : 'bg-transparent py-5 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col group flex-shrink-0">
          <span className="text-xl font-bold tracking-tight text-emerald-950 uppercase leading-none">Romero’s</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-emerald-700">Service Company</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-semibold transition-colors ${
                location.pathname === link.path ? 'text-emerald-900' : 'text-stone-600 hover:text-emerald-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 pl-4 border-l border-stone-200">
            <Link 
              to="/request-service" 
              className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10"
            >
              Request Service
            </Link>
            
            <a 
              href={`tel:${PHONE.replace(/\D/g,'')}`} 
              className="flex items-center space-x-2 text-emerald-900 hover:text-emerald-700 transition-colors py-2 px-1"
            >
              <Phone className="w-4 h-4 fill-emerald-900" />
              <span className="text-sm font-bold tracking-tight">{PHONE}</span>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-emerald-950 p-1 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[60px] bg-stone-50 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } border-t border-stone-200 overflow-y-auto`}>
        <div className="p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-xl font-bold py-4 border-b border-stone-100 ${
                location.pathname === link.path ? 'text-emerald-900' : 'text-stone-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/request-service" 
            className="text-xl font-bold text-emerald-900 py-4 border-b border-stone-100"
          >
            Request Service
          </Link>
          
          <div className="pt-8">
            <a 
              href={`tel:${PHONE.replace(/\D/g,'')}`} 
              className="flex items-center justify-center space-x-3 bg-emerald-900 text-white p-5 rounded-2xl text-lg font-bold shadow-xl shadow-emerald-900/20"
            >
              <Phone className="w-6 h-6" />
              <span>Call {PHONE}</span>
            </a>
            <p className="text-center text-stone-400 text-xs font-medium uppercase tracking-widest mt-6">
              Available 24/7 for Emergencies
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;