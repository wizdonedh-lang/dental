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
    { name: 'Contact', href: '/contact', isAnchor: false },
  ];

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(href);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo with Image */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/wizdone-logo.png"
              alt="Wizdone Dental Hospital"
              className="h-10 w-auto object-contain"
            />
            <span className="hidden sm:block text-lg md:text-xl font-bold text-brand-600">
              {CLINIC_NAME}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isAnchor)}
                className={`font-medium transition-colors ${isActive(link.href)
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isAnchor)}
                className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md transition-colors ${isActive(link.href)
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-slate-700 hover:bg-brand-50 hover:text-brand-600'
                  }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-center mt-4 px-3 py-3 bg-[#25D366] text-white font-bold rounded-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Book via WhatsApp
            </a>
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="flex items-center justify-center gap-2 w-full text-center mt-2 px-3 py-3 bg-slate-100 text-slate-900 font-medium rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Call Hospital
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};