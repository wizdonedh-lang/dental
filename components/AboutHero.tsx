import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const AboutHero: React.FC = () => {
    return (
        <section id="about" className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/trust-bg.png')`,
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60"></div>
            </div>

            {/* Content - Proper mobile padding */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="max-w-lg lg:max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium mb-4">
                        <ShieldCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">Building Trust Through Open Communication</span>
                    </div>

                    {/* Title - 22px mobile, max 2 lines */}
                    <h2 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        Building Trust Through Safe Dental Care
                    </h2>

                    {/* Description - 14px mobile, readable without zoom */}
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                        Our patient-first approach ensures that you are always heard, respected, and treated with the highest medical standards.
                    </p>
                </div>
            </div>
        </section>
    );
};
