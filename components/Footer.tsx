import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Star } from 'lucide-react';
import { CLINIC_NAME, CLINIC_LOCATION, CLINIC_PHONE, CLINIC_TAGLINE, CLINIC_HOURS, CLINIC_RATING, CLINIC_REVIEW_COUNT } from '../constants';

interface FooterProps {
  showMap?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showMap = true }) => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Map Section - Reduced height on mobile */}
      {showMap && (
        <div className="w-full h-48 sm:h-56 lg:h-64 bg-slate-800 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0!2d80.16!3d12.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPadur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1646200000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wizdone Dental Hospital - Padur Location"
          ></iframe>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Mobile: Stack columns, center-align. Desktop: 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">

          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{CLINIC_NAME}</h3>
            <p className="text-brand-400 text-sm font-medium mb-3 sm:mb-4">{CLINIC_TAGLINE}</p>
            <p className="max-w-xs mx-auto sm:mx-0 text-slate-400 mb-4 text-sm">
              Premium, painless dental care specializing in wisdom tooth extraction and maxillofacial surgery.
            </p>
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg border border-slate-700 mb-4 sm:mb-6">
              <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" />
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-sm text-white font-semibold">{CLINIC_RATING}</span>
              <span className="text-xs text-slate-400">({CLINIC_REVIEW_COUNT})</span>
            </div>
            <div className="block">
              <a
                href="https://www.instagram.com/wizdone.dental"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity min-h-[48px] active:scale-[0.98]"
              >
                <Instagram className="w-5 h-5" />
                Follow us on Instagram
              </a>
            </div>
          </div>

          {/* Visit Our Clinic */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-4">Visit Our Clinic</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span className="text-left">{CLINIC_LOCATION}</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href={`tel:${CLINIC_PHONE}`} className="hover:text-white transition-colors py-1">+91 8300 375 191</a>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <Clock className="w-5 h-5 text-brand-500 shrink-0" />
                <div className="space-y-1 text-left">
                  <p>Mon - Sat: {CLINIC_HOURS.monday}</p>
                  <p className="text-red-400 font-medium">Sunday: {CLINIC_HOURS.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-white transition-colors block py-2">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors block py-2">About Dr. K. G. Sriraam</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors block py-2">Treatments</a></li>
              <li><a href="/#booking" className="hover:text-white transition-colors block py-2">Book Appointment</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors block py-2">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};