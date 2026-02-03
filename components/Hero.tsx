import React, { useState, useRef, useEffect } from 'react';
import { Phone, Star, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from './Button';
import { CLINIC_PHONE, CLINIC_RATING, CLINIC_REVIEW_COUNT, CLINIC_TAGLINE, MAIN_DOCTOR } from '../constants';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 8, y: y * 8 });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReviews = () => {
    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white pt-16 pb-6 sm:pt-20 sm:pb-10 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Mobile-first container with safe padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* TEXT CONTENT - Single column stacked */}
          <div className="space-y-5 sm:space-y-6">

            {/* Headline - 24px mobile, scales up */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.15]">
              Painless Dental Care{' '}
              <span className="text-brand-600">You</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden text-brand-600"> Can Trust</span>
              <span className="hidden sm:inline text-brand-600"> Can Trust</span>
            </h1>

            {/* Subtitle - 14px mobile */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-700">{CLINIC_TAGLINE}</span> —
              Modern dentistry with same-day appointments.
            </p>

            {/* CTAs - Full width stacked on mobile */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                onClick={scrollToBooking}
                variant="whatsapp"
                icon={<Phone className="w-5 h-5" />}
                className="w-full sm:w-auto min-h-[48px] text-base font-bold justify-center"
              >
                Book via WhatsApp
              </Button>
              <Button
                onClick={() => window.location.href = `tel:${CLINIC_PHONE}`}
                variant="outline"
                className="w-full sm:w-auto min-h-[48px] text-base font-medium justify-center"
              >
                Call Hospital
              </Button>
            </div>

            {/* Trust Indicators - Single row, no overflow */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between sm:justify-start sm:gap-8">
                {/* Google Rating */}
                <button
                  onClick={scrollToReviews}
                  className="flex flex-col items-start p-2 -m-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex text-yellow-400 mb-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-xs font-bold text-slate-900">{CLINIC_RATING}/5 Google</p>
                  <p className="text-[10px] text-slate-500">{CLINIC_REVIEW_COUNT} Reviews</p>
                </button>

                {/* Experience */}
                <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-brand-600">{MAIN_DOCTOR.experienceYears}+</p>
                  <p className="text-xs text-slate-600 font-medium">Years Exp</p>
                </div>

                {/* Location */}
                <div className="text-right sm:text-left">
                  <div className="flex items-center gap-1 justify-end sm:justify-start">
                    <MapPin className="w-3.5 h-3.5 text-brand-500" />
                    <p className="text-xs font-bold text-slate-900">Padur</p>
                  </div>
                  <p className="text-[10px] text-slate-500">Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE CARD - Full width, rounded, badge inside */}
          <div
            ref={imageRef}
            className="relative mt-2 lg:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-brand-50 rounded-full opacity-40 blur-3xl -z-10 hidden lg:block"></div>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/clinic-treatment-room.jpg"
                alt="Modern dental treatment room at Wizdone Dental Hospital"
                className="w-full h-[200px] sm:h-[280px] lg:h-[420px] object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: isTouch ? 'none' : `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.02)`,
                }}
              />

              {/* Badge - Inside image, bottom-left */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">100% Sterilized</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-500">WHO Standard Safety</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};