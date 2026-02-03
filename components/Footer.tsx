import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Star } from 'lucide-react';
import { CLINIC_NAME, CLINIC_LOCATION, CLINIC_PHONE, CLINIC_TAGLINE, CLINIC_HOURS, CLINIC_RATING, CLINIC_REVIEW_COUNT } from '../constants';

interface FooterProps {
  showMap?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showMap = true }) => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Map Section - Only on Home and Contact pages */}
      {showMap && (
        <div className="w-full h-64 bg-slate-800 relative">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">{CLINIC_NAME}</h3>
            <p className="text-brand-400 text-sm font-medium mb-4">{CLINIC_TAGLINE}</p>
            <p className="max-w-xs text-slate-400 mb-4">
              Premium, painless dental care specializing in wisdom tooth extraction and maxillofacial surgery. Serving Padur and surrounding areas.
            </p>
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg border border-slate-700 mb-6">
              <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" />
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-sm text-white font-semibold">{CLINIC_RATING}</span>
              <span className="text-xs text-slate-400">({CLINIC_REVIEW_COUNT} reviews)</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Visit Our Clinic */}
          <div>
            <h4 className="text-white font-bold mb-4">Visit Our Clinic</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{CLINIC_LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href={`tel:${CLINIC_PHONE}`} className="hover:text-white transition-colors">+91 8072 397 192</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-500 shrink-0" />
                <div className="space-y-1">
                  <p>Mon - Sat: {CLINIC_HOURS.monday}</p>
                  <p className="text-red-400 font-medium">Sunday: {CLINIC_HOURS.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Dr. K. G. Sriraam</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Treatments</a></li>
              <li><a href="/#booking" className="hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved. Medical Advice Disclaimer Apply.
        </div>
      </div>
    </footer>
  );
};