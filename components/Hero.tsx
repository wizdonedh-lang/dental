import React, { useState, useRef, useEffect } from 'react';
import { Phone, Star, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from './Button';
import { CLINIC_PHONE, CLINIC_RATING, CLINIC_REVIEW_COUNT, CLINIC_TAGLINE, MAIN_DOCTOR } from '../constants';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch device
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    setMousePosition({ x: x * 8, y: y * 8 }); // Subtle 1-2% movement
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReviews = () => {
    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Painless Dental Care <br />
              <span className="text-brand-600">You Can Trust</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg">
              <span className="font-semibold text-slate-700">{CLINIC_TAGLINE}</span> —
              Modern dentistry with same-day appointments. We make dental visits comfortable for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToBooking} variant="whatsapp" icon={<Phone className="w-5 h-5" />}>
                Book Appointment via WhatsApp
              </Button>
              <Button onClick={() => window.location.href = `tel:${CLINIC_PHONE}`} variant="outline">
                Call Hospital Directly
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center gap-8">
              <div
                onClick={scrollToReviews}
                className="cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors -m-2"
              >
                <div className="flex text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm font-semibold text-slate-900">{CLINIC_RATING}/5 Google Rating</p>
                <p className="text-xs text-slate-500">{CLINIC_REVIEW_COUNT} Verified Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-600">{MAIN_DOCTOR.experienceYears}+</p>
                <p className="text-sm text-slate-600 font-medium">Years Experience</p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  <p className="text-sm font-semibold text-slate-900">Padur</p>
                </div>
                <p className="text-xs text-slate-500">Tamil Nadu</p>
              </div>
            </div>
          </div>

          {/* Image Content with Subtle Parallax */}
          <div
            ref={imageRef}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute -inset-4 bg-brand-50 rounded-full opacity-50 blur-3xl -z-10"></div>

            {/* Image Container - overflow hidden to prevent gaps */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/clinic-treatment-room.jpg"
                alt="Modern dental treatment room at Wizdone Dental Hospital, Padur"
                className="w-full h-[500px] object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: isTouch ? 'none' : `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.02)`,
                }}
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">100% Sterilized</p>
                  <p className="text-xs text-slate-500">WHO Standard Safety</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};