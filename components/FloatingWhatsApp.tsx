import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_PHONE } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={`https://wa.me/${CLINIC_PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
        Book Appointment
      </span>
    </a>
  );
};