import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_PHONE } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CLINIC_PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 flex items-center gap-2 group min-h-[56px] min-w-[56px] justify-center"
      aria-label="Chat on WhatsApp"
      style={{
        marginBottom: 'env(safe-area-inset-bottom, 0px)',
        marginRight: 'env(safe-area-inset-right, 0px)'
      }}
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap hidden sm:block">
        Book Appointment
      </span>
    </a>
  );
};