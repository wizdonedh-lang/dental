import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const AboutHero: React.FC = () => {
    return (
        <section id="about" className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image - Strict requirement from Prompt */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/trust-bg.png')`,
                }}
            >
                {/* Trust Overlay - Blue gradient overlay for text readability */}
                <div className="absolute inset-0 bg-slate-900/40 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-sm">Building Trust Through Open Communication</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Building Trust Through <br /> Generally Safe Dental Care
                    </h2>

                    <p className="text-lg text-slate-100/90 leading-relaxed max-w-xl">
                        Our patient-first approach ensures that you are always heard, respected, and treated with the highest medical standards. We believe in transparency and comfort above all.
                    </p>
                </div>
            </div>
        </section>
    );
};
