import React, { useState, useEffect, useCallback } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
    onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'entering' | 'reveal' | 'hold' | 'fadeOut'>('entering');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Skip handler
    const handleSkip = useCallback(() => {
        setPhase('fadeOut');
        setTimeout(() => {
            onComplete();
        }, 800);
    }, [onComplete]);

    // Parallax effect on desktop
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 12;
            const y = (e.clientY / window.innerHeight - 0.5) * 12;
            setMousePosition({ x, y });
        };

        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Animation sequence timing
    useEffect(() => {
        const enterTimer = setTimeout(() => {
            setPhase('reveal');
        }, 300);

        const revealTimer = setTimeout(() => {
            setPhase('hold');
        }, 1800);

        const holdTimer = setTimeout(() => {
            setPhase('fadeOut');
        }, 2500);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(revealTimer);
            clearTimeout(holdTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`intro-overlay ${phase}`}>
            {/* Ambient particles */}
            <div className="ambient-particles">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="dust-particle"></div>
                ))}
            </div>

            {/* Radiant glow background */}
            <div className="radiant-glow"></div>

            {/* Logo reveal */}
            <div
                className="logo-container"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
            >
                {/* Intense halo glow */}
                <div className="logo-halo"></div>
                <div className="logo-halo-inner"></div>

                {/* Main logo */}
                <img
                    src="/images/wizdone-logo-full.jpg"
                    alt="WIZDONE - Precision in every Dental Procedure"
                    className="logo-image"
                />

                {/* Light sweep */}
                <div className="light-sweep"></div>
            </div>

            {/* Skip button */}
            <button
                className="skip-button"
                onClick={handleSkip}
                aria-label="Skip introduction"
            >
                SKIP
            </button>
        </div>
    );
};
