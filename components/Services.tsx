import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

export const Services: React.FC = () => {

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Complete Dental Care Solutions</h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">From routine cleanings to advanced cosmetic procedures, we offer comprehensive treatments under one roof.</p>
        </div>

        {/* Single column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} onBook={scrollToBooking} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service; onBook: () => void }> = ({ service, onBook }) => {
  // Dynamic Icon rendering
  // @ts-ignore
  const IconComponent = Icons[service.iconName] || Icons.HelpCircle;

  return (
    <div
      className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg border border-slate-100 hover:border-green-100 cursor-pointer relative overflow-hidden active:scale-[0.98]"
      onClick={onBook}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors group-hover:bg-green-600 group-hover:text-white shrink-0">
        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{service.title}</h3>
      <p className="text-slate-500 mb-4 sm:mb-6 leading-relaxed text-sm">{service.description}</p>

      <div className="flex items-center text-green-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
        <span>Book via WhatsApp</span>
        <Icons.ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </div>
  );
};