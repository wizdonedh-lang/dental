import React, { useState } from 'react';
import './CarePhilosophy.css';

interface CareCard {
    id: number;
    verticalTitle: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

const CARE_PILLARS: CareCard[] = [
    {
        id: 1,
        verticalTitle: 'Comfort',
        title: 'Pain-Free Dentistry',
        subtitle: 'Gentle techniques designed for anxious and first-time patients.',
        description: 'We prioritize comfort at every step. From painless injections to patient-controlled pacing, our approach ensures you feel safe, heard, and relaxed throughout your treatment.',
        image: '/images/care/comfort.jpg'
    },
    {
        id: 2,
        verticalTitle: 'Hygiene',
        title: 'Hospital-Grade Sterilization',
        subtitle: 'International protocols for complete safety and cleanliness.',
        description: 'All instruments are sterilized using medical-grade equipment. Single-use disposables and strict hygiene protocols protect every patient, every time.',
        image: '/images/care/hygiene.jpg'
    },
    {
        id: 3,
        verticalTitle: 'Expertise',
        title: 'Experienced, Ethical Care',
        subtitle: 'Qualified dentists with years of clinical experience.',
        description: "We believe in honest diagnosis and transparent treatment planning. No unnecessary procedures—only what's right for your long-term oral health.",
        image: '/images/care/expertise.jpg'
    }
];

export const CarePhilosophy: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section className="care-philosophy-section">
            <div className="care-header">
                <h2>Our Care Philosophy</h2>
                <p>Every treatment is guided by three principles: your comfort, your safety, and your trust.</p>
            </div>

            <div className="care-cards-container">
                {CARE_PILLARS.map((card) => (
                    <div
                        key={card.id}
                        className={`care-card ${expandedCard === card.id ? 'expanded' : ''} ${expandedCard !== null && expandedCard !== card.id ? 'collapsed' : ''}`}
                        onClick={() => handleCardClick(card.id)}
                    >
                        {/* Card Image Background */}
                        <div className="card-image-wrapper">
                            <img src={card.image} alt={card.title} />
                            <div className="image-overlay"></div>
                        </div>

                        {/* Vertical Title */}
                        <span className="vertical-label">{card.verticalTitle}</span>

                        {/* Expanded Content */}
                        <div className="expanded-content">
                            <h3 className="content-title">{card.title}</h3>
                            <p className="content-subtitle">{card.subtitle}</p>
                            <p className="content-description">{card.description}</p>
                        </div>

                        {/* Toggle Icon */}
                        <div className="toggle-icon">
                            {expandedCard === card.id ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
