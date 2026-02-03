import React from 'react';
import { FlaskConical, HeartHandshake, Stethoscope, Microscope, Syringe } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Hygiene & Sterilization",
      desc: "Hospital-grade sterilization protocols."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Trusted Care",
      desc: "Patient-first approach with gentle care."
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Experienced Doctors",
      desc: "Over 10+ years of clinical excellence."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Modern Equipment",
      desc: "Advanced technology for precise results."
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: "Safe Treatment",
      desc: "Painless procedures with safe protocols."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We combine medical expertise with a human touch to deliver the best dental care experience.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 transition-transform duration-300 group-hover:scale-110 border border-green-100 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">{feature.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};