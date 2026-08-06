import React from 'react';
import { AvioraLogo } from '../assets/logo';
import { Phone, Mail, MapPin, Shield, Instagram, Linkedin, Facebook, Twitter, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1E1E] text-[#F8F4EF] pt-16 pb-8 border-t-4 border-[#C8A165]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#333333]">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-5">
            <AvioraLogo lightText size="lg" />
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm font-light">
              AVIORA is India’s premier luxury aesthetic and plastic surgery clinic.
              Combining international medical standards, board-certified surgical excellence,
              and bespoke patient safety to deliver natural, refined beauty.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A2A2A] border border-[#C8A165]/30 flex items-center justify-center text-[#C8A165] hover:bg-[#C8A165] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A2A2A] border border-[#C8A165]/30 flex items-center justify-center text-[#C8A165] hover:bg-[#C8A165] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A2A2A] border border-[#C8A165]/30 flex items-center justify-center text-[#C8A165] hover:bg-[#C8A165] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A2A2A] border border-[#C8A165]/30 flex items-center justify-center text-[#C8A165] hover:bg-[#C8A165] hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-medium tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-[#D1D5DB]">
              <li>
                <button onClick={() => { setActiveTab('about'); scrollToTop(); }} className="hover:text-[#C8A165] transition-colors">
                  About AVIORA
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('surgeons'); scrollToTop(); }} className="hover:text-[#C8A165] transition-colors">
                  Meet Our Surgeons
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('facilities'); scrollToTop(); }} className="hover:text-[#C8A165] transition-colors">
                  Our Surgical Facilities
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('before-after'); scrollToTop(); }} className="hover:text-[#C8A165] transition-colors">
                  Before & After Results
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('contact'); scrollToTop(); }} className="hover:text-[#C8A165] transition-colors">
                  Contact & Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Aesthetic Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-medium tracking-wide">Specialized Services</h4>
            <ul className="space-y-2.5 text-xs text-[#D1D5DB]">
              <li><span className="hover:text-[#C8A165] cursor-pointer" onClick={() => { setActiveTab('services'); scrollToTop(); }}>Facial Plastic Surgery</span></li>
              <li><span className="hover:text-[#C8A165] cursor-pointer" onClick={() => { setActiveTab('services'); scrollToTop(); }}>Preservation Rhinoplasty</span></li>
              <li><span className="hover:text-[#C8A165] cursor-pointer" onClick={() => { setActiveTab('services'); scrollToTop(); }}>Deep Plane Facelift</span></li>
              <li><span className="hover:text-[#C8A165] cursor-pointer" onClick={() => { setActiveTab('services'); scrollToTop(); }}>HD VASER Body Sculpting</span></li>
              <li><span className="hover:text-[#C8A165] cursor-pointer" onClick={() => { setActiveTab('services'); scrollToTop(); }}>Breast Augmentation</span></li>
              <li><span className="hover:text-[#C8A165] cursor-pointer" onClick={() => { setActiveTab('services'); scrollToTop(); }}>Skin Resurfacing & Lasers</span></li>
            </ul>
          </div>

          {/* Clinic Contact & Locations */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-medium tracking-wide">Locations</h4>
            <div className="space-y-3 text-xs text-[#D1D5DB]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8A165] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Mumbai Clinic:</span>
                  The Esthetic Clinics, Bandra West, Mumbai 400050
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8A165] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Delhi NCR Clinic:</span>
                  Apollo & Fortis Medical Enclaves, New Delhi 110076
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#C8A165] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#C8A165] transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8A165] shrink-0" />
                <a href="mailto:concierge@aviora.com" className="hover:text-[#C8A165] transition-colors">
                  concierge@aviora.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Medical Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#C8A165]" />
            <span>© {new Date().getFullYear()} AVIORA Plastic Surgery & Aesthetic Clinic. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Patient Rights</span>
            <span className="hover:text-white cursor-pointer">Medical Disclaimer</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#2A2A2A] hover:bg-[#C8A165] text-white transition-all ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
