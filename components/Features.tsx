import React from 'react';
import { FlaskConical, HeartHandshake, Stethoscope, Microscope, Syringe } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Hygiene & Sterilization",
      desc: "Hospital-grade sterilization protocols."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Trusted Care",
      desc: "Patient-first approach with gentle care."
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Experienced Doctors",
      desc: "Over 10+ years of clinical excellence."
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Modern Equipment",
      desc: "Advanced technology for precise results."
    },
    {
      icon: <Syringe className="w-6 h-6" />,
      title: "Safe Treatment",
      desc: "Painless procedures with safe protocols."
    }
  ];

  return (
    <section id="features" className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header - Clear separation */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">Why Choose Us</h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">Medical expertise with a human touch.</p>
        </div>

        {/* Grid - 2 cols mobile, 3 tablet, 5 desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-3 border border-green-100">
                {feature.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm lg:text-base leading-tight mb-1">{feature.title}</h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};