import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt?: string;
  ctaText?: string;
  ctaLink?: string;
  isMain?: boolean;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, image, alt, ctaText, ctaLink, isMain, children }) => {
  return (
    <section className={`relative ${isMain ? 'min-h-[85vh]' : 'min-h-[450px] lg:min-h-[600px]'} flex items-center overflow-hidden pt-20 bg-stone-100`}>
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={image} 
          alt={alt || ""} 
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
        {/* Enhanced Gradient Overlay - Higher opacity behind the text for superior legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/85 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        <div className="max-w-2xl">
          <p className="text-emerald-800 font-bold uppercase tracking-[0.2em] text-xs lg:text-sm mb-4">
            {subtitle}
          </p>
          <h1 className={`${isMain ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl'} font-bold text-emerald-950 leading-[1.1] mb-6 lg:mb-8`}>
            {title}
          </h1>
          {/* Enhanced Paragraph: Darker text, medium weight, and better line height */}
          <p className={`${isMain ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} text-stone-800 font-medium mb-8 lg:mb-10 leading-relaxed max-w-lg`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {ctaText && ctaLink && (
              ctaLink.startsWith('mailto:') || ctaLink.startsWith('tel:') ? (
                <a 
                  href={ctaLink} 
                  className="inline-flex items-center justify-center bg-emerald-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition-all group shadow-xl shadow-emerald-900/10"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <Link 
                  to={ctaLink} 
                  className="inline-flex items-center justify-center bg-emerald-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition-all group shadow-xl shadow-emerald-900/10"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              )
            )}
            {isMain && (
               <Link 
               to="/services"
               className="inline-flex items-center justify-center border-2 border-emerald-900 text-emerald-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all cursor-pointer"
             >
               Our Services
             </Link>
            )}
          </div>

          {/* Additional Content (Jump Links) */}
          {children && (
            <div className="mt-8 lg:mt-12">
              {children}
            </div>
          )}
        </div>
      </div>

      {isMain && (
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="bg-emerald-950 text-white p-8 rounded-2xl shadow-2xl max-w-xs border border-emerald-900/50">
            <p className="text-emerald-400 font-bold mb-2 uppercase text-[10px] tracking-widest">Serving Acadiana</p>
            <p className="text-lg font-medium leading-snug">
              Available 24/7 for all your maintenance & repair emergencies.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;