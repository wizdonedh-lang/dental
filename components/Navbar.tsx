import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CLINIC_NAME, CLINIC_PHONE } from '../constants';

// Official WhatsApp Icon SVG
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (href: string, isAnchor: boolean = false) => {
    setIsOpen(false);

    if (isAnchor) {
      if (currentPath === '/' || currentPath === '') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = '/' + href;
      }
    } else {
      window.location.href = href;
    }
  };

  const whatsappLink = `https://wa.me/${CLINIC_PHONE}?text=${encodeURIComponent("Hello Doctor, I found Wizdone Dental Hospital on Google and would like to book an appointment.")}`;

  const navLinks = [
    { name: 'Home', href: '/', isAnchor: false },
    { name: 'About Us', href: '/about', isAnchor: false },
    { name: 'Services', href: '#services', isAnchor: true },
    { name: 'Gallery', href: '/gallery', isAnchor: false },
    { name: 'Contact', href: '/contact', isAnchor: false },
  ];

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(href);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-2 sm:py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo + Name */}
            <a href="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/images/wizdone-logo-full.jpg"
                alt="Wizdone Dental Hospital"
                className="h-9 sm:h-12 w-auto object-contain rounded"
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base lg:text-lg font-bold text-brand-600">{CLINIC_NAME}</span>
                <span className="text-[9px] sm:text-[10px] lg:text-xs text-slate-500 hidden sm:block">Precision in every Dental Procedure</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isAnchor)}
                  className={`font-medium transition-colors py-2 px-1 ${isActive(link.href)
                    ? 'text-brand-600'
                    : 'text-slate-600 hover:text-brand-600'
                    }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span className="hidden lg:inline">Book Appointment</span>
                <span className="lg:hidden">Book</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - OUTSIDE NAV for proper z-index */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[52px] z-[200] bg-white overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isAnchor)}
                className={`block w-full text-left px-4 py-4 text-lg font-medium rounded-xl transition-colors min-h-[52px] ${isActive(link.href)
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-slate-700 hover:bg-brand-50 hover:text-brand-600 active:bg-brand-100'
                  }`}
              >
                {link.name}
              </button>
            ))}

            <div className="pt-4 space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full text-center px-4 py-4 bg-[#25D366] text-white font-bold rounded-xl text-lg min-h-[56px] active:bg-[#20bd5a]"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Book via WhatsApp
              </a>
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center justify-center gap-3 w-full text-center px-4 py-4 bg-slate-100 text-slate-900 font-medium rounded-xl text-lg min-h-[56px] active:bg-slate-200"
              >
                <Phone className="w-5 h-5" />
                Call Hospital
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop - OUTSIDE NAV */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[52px] bg-black/50 z-[199]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};