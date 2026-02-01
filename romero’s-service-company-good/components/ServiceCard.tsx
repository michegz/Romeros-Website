
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, tags }) => {
  return (
    <div className="group bg-white p-8 border border-stone-200 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col h-full rounded-3xl">
      <div className="mb-8 text-emerald-900 bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-emerald-950 mb-4">{title}</h3>
      <p className="text-stone-500 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      {tags && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
