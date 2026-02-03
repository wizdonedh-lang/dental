import React, { useState, useEffect } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
    onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'reveal' | 'hold' | 'fadeOut'>('reveal');

    useEffect(() => {
        // Phase timing
        const revealTimer = setTimeout(() => {
            setPhase('hold');
        }, 1500); // Logo reveal complete

        const holdTimer = setTimeout(() => {
            setPhase('fadeOut');
        }, 2500); // Start fade out

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3200); // Animation complete

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(holdTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`intro-overlay ${phase}`}>
            {/* Soft ambient glow background */}
            <div className="ambient-glow"></div>

            {/* Subtle floating particles */}
            <div className="particles">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}></div>
                ))}
            </div>

            {/* Main logo container */}
            <div className="logo-container">
                {/* Soft glow halo behind logo */}
                <div className="logo-glow"></div>

                {/* Light rays */}
                <div className="light-rays">
                    <div className="ray ray-1"></div>
                    <div className="ray ray-2"></div>
                    <div className="ray ray-3"></div>
                </div>

                {/* The actual logo image */}
                <img
                    src="/images/wizdone-logo.png"
                    alt="Wizdone Dental Hospital"
                    className="logo-image"
                />

                {/* Text light sweep effect */}
                <div className="text-sweep"></div>
            </div>
        </div>
    );
};
