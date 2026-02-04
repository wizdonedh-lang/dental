import React from 'react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { MAIN_DOCTOR, CLINIC_RATING, CLINIC_REVIEW_COUNT } from '../constants';

export const DoctorProfile: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-600 rounded-2xl rotate-3 transform translate-y-4 translate-x-4 opacity-10"></div>
            <img
              src={MAIN_DOCTOR.image}
              alt={MAIN_DOCTOR.name}
              className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-square"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">Meet Your Doctor</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">{MAIN_DOCTOR.name}</h2>
              <p className="text-slate-500 text-lg">{MAIN_DOCTOR.qualification}</p>
            </div>

            {/* Trust Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
                <p className="text-2xl font-bold text-slate-900">{CLINIC_RATING}/5</p>
                <p className="text-xs text-slate-500">Google Rating</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-brand-600">{CLINIC_REVIEW_COUNT}+</p>
                <p className="text-xs text-slate-500">Happy Patient Reviews</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-brand-600">{MAIN_DOCTOR.experienceYears}+</p>
                <p className="text-xs text-slate-500">Years Experience</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-brand-600">{MAIN_DOCTOR.patientsTreated}</p>
                <p className="text-xs text-slate-500">Surgeries & Cases</p>
              </div>
            </div>

            {/* Trust Points */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Maxillofacial surgeon, Wisdom tooth specialist and Implantologist</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Known for painless, calm, patient-first care</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Maxillofacial Surgery Expert</span>
              </div>
            </div>

            {/* Quote */}
            <div className="relative p-6 pl-14 bg-brand-50 rounded-xl border border-brand-100">
              <Quote className="absolute top-5 left-5 w-6 h-6 text-brand-300" />
              <p className="text-slate-700 italic font-medium leading-relaxed">
                "{MAIN_DOCTOR.quote}"
              </p>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Specializations:</h4>
              <div className="flex flex-wrap gap-2">
                {MAIN_DOCTOR.specialization.split('&').map((spec, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                    {spec.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};