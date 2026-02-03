import React from 'react';

interface GalleryImage {
    src: string;
    alt: string;
}

// Clinic infrastructure images
const clinicImages: GalleryImage[] = [
    { src: '/images/gallery/clinic/treatment-room-full.jpg', alt: 'Full treatment room with dental equipment at Wizdone Dental Hospital, Padur' },
    { src: '/images/gallery/clinic/dental-chair.jpg', alt: 'Modern dental chair at Wizdone Dental Hospital, Padur' },
    { src: '/images/gallery/clinic/uv-disinfection.jpg', alt: 'UV disinfection chamber for sterilization at Wizdone Dental Hospital' },
    { src: '/images/gallery/clinic/oxygen-concentrator.jpg', alt: 'Oxygen concentrator equipment at Wizdone Dental Hospital' },
    { src: '/images/gallery/clinic/autoclave-sterilizer.jpg', alt: 'Autoclave sterilizer for instrument sterilization at Wizdone Dental Hospital' },
    { src: '/images/gallery/clinic/consultation-room.jpg', alt: 'Consultation room at Wizdone Dental Hospital, Padur' },
];

const surgeryImages: GalleryImage[] = [
    { src: '/images/gallery/surgeries/surgery-xray-extraction.jpg', alt: 'Dental X-ray and tooth extraction at Wizdone Dental Hospital' },
    { src: '/images/gallery/surgeries/wisdom-tooth-extraction.jpg', alt: 'Wisdom tooth extraction procedure at Wizdone Dental Hospital' },
    { src: '/images/gallery/surgeries/impaction-classification.jpg', alt: 'Tooth impaction classification and dental X-rays at Wizdone Dental Hospital' },
    { src: '/images/gallery/surgeries/jaw-surgery-case.jpg', alt: 'Jaw surgery case with before and after X-rays at Wizdone Dental Hospital' },
    { src: '/images/gallery/surgeries/surgery-team.jpg', alt: 'Surgical team performing dental procedure at Wizdone Dental Hospital' },
    { src: '/images/gallery/surgeries/dentigerous-cyst-case.jpg', alt: 'Dentigerous cyst case with X-ray and clinical images at Wizdone Dental Hospital' },
    { src: '/images/gallery/surgeries/impacted-tooth-xray.jpg', alt: 'Impacted tooth X-ray and extraction at Wizdone Dental Hospital' },
    { src: '/images/gallery/surgeries/tooth-extraction-xrays.jpg', alt: 'Tooth extraction with multiple X-ray views at Wizdone Dental Hospital' },
];

const achievementImages: GalleryImage[] = [
    { src: '/images/gallery/achievements/inauguration-handshake.jpg', alt: 'Clinic inauguration ceremony at Wizdone Dental Hospital' },
    { src: '/images/gallery/achievements/doctor-with-mentor.jpg', alt: 'Dr. Anbunathan with mentor at Wizdone Dental Hospital' },
    { src: '/images/hospital-signboard.jpg', alt: 'Inaugural signboard of Wizdone Dental Hospital' },
];

interface GallerySectionProps {
    title: string;
    description: string;
    images: GalleryImage[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, description, images }) => (
    <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">{title}</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">{description}</p>
            </div>

            {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-slate-50 rounded-xl">
                    <p className="text-slate-500">Images coming soon...</p>
                </div>
            )}
        </div>
    </section>
);

export const GalleryPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Page Header */}
            <div className="bg-gradient-to-b from-brand-50 to-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Take a look at our modern facilities, expert treatments, and professional milestones
                    </p>
                </div>
            </div>

            {/* Section 1: Clinic & Infrastructure */}
            <GallerySection
                title="Clinic & Infrastructure"
                description="Our modern, hygienic facility is designed for your comfort and care"
                images={clinicImages}
            />

            <hr className="max-w-5xl mx-auto border-slate-200" />

            {/* Section 2: Surgeries & Treatments */}
            <GallerySection
                title="Surgeries & Treatments"
                description="Expert dental procedures performed with precision and care"
                images={surgeryImages}
            />

            <hr className="max-w-5xl mx-auto border-slate-200" />

            {/* Section 3: Achievements & Milestones */}
            <GallerySection
                title="Achievements & Milestones"
                description="Celebrating our journey and professional recognition"
                images={achievementImages}
            />
        </div>
    );
};
