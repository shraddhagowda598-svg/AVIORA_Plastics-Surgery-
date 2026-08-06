import React, { useState, useEffect } from 'react';
import { AvioraLogo } from '../assets/logo';
import { Phone, Calendar, Menu, X, MapPin, Clock, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'surgeons', label: 'Surgeons' },
    { id: 'services', label: 'Services' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'before-after', label: 'Before & After' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Luxury Announcement & Quick Contact Bar */}
      <div className="bg-[#1E1E1E] text-[#F8F4EF] text-xs py-2 px-4 sm:px-8 border-b border-[#C8A165]/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 text-[#D9B77B]">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#C8A165]" />
              Mumbai & Delhi NCR Clinics
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock className="w-3.5 h-3.5 text-[#C8A165]" />
              Mon - Sat: 9:00 AM - 7:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#6B7280] hidden sm:inline">24/7 VIP Patient Desk:</span>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 font-medium text-[#F8F4EF] hover:text-[#C8A165] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A165]" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#ECE6DD]'
            : 'bg-[#F8F4EF]/90 backdrop-blur-sm py-5 border-b border-[#ECE6DD]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('about')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-[#C8A165]/50 rounded-lg p-1"
          >
            <AvioraLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium transition-all relative rounded-md ${
                    isActive
                      ? 'text-[#C8A165] font-semibold'
                      : 'text-[#1E1E1E] hover:text-[#C8A165]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C8A165] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-white text-xs sm:text-sm font-medium tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#1E1E1E] hover:bg-[#F4EFE7] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFFFF] border-b border-[#ECE6DD] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                      isActive
                        ? 'bg-[#F8F4EF] text-[#C8A165] font-semibold border-l-4 border-[#C8A165]'
                        : 'text-[#1E1E1E] hover:bg-[#F4EFE7]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#C8A165]' : 'text-[#6B7280]'}`} />
                  </button>
                );
              })}
            </div>
            <div className="mt-5 pt-4 border-t border-[#ECE6DD]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gold-gradient text-white text-sm font-medium shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
