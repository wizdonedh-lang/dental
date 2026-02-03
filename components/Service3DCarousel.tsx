import React from 'react';
import './Service3DCarousel.css';

const DATA = [
    { src: "/images/services/teeth-cleaning.png", alt: "Teeth Cleaning" },
    { src: "/images/services/root-canal.png", alt: "Root Canal Treatment" },
    { src: "/images/services/braces.png", alt: "Braces & Aligners" },
    { src: "/images/services/pediatric-dentistry.png", alt: "Kids Dentistry" },
    { src: "/images/services/cosmetic-dentistry.png", alt: "Cosmetic Dentistry" },
    { src: "/images/services/dental-implant.png", alt: "Dental Implants" },
    { src: "/images/services/emergency-care.png", alt: "Emergency Dental Care" },
    { src: "/images/services/whitening.png", alt: "Teeth Whitening" }
];

export const Service3DCarousel: React.FC = () => {
    const N = DATA.length;

    return (
        <section className="services-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Modern Dentistry, Trusted Care</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                    We use advanced techniques and gentle procedures to give you safe,
                    comfortable dental treatment.
                </p>
            </div>

            <div className="scene">
                <div
                    className="a3d"
                    style={{
                        '--n': N
                    } as React.CSSProperties}
                >
                    {DATA.map((item, index) => (
                        <img
                            key={index}
                            className="card"
                            src={item.src}
                            style={{
                                '--i': index
                            } as React.CSSProperties}
                            alt={item.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
