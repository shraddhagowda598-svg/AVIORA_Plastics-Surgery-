import React from 'react';
import { Hero } from '../components/about/Hero';
import { AboutClinic } from '../components/about/AboutClinic';
import { MeetSurgeons } from '../components/about/MeetSurgeons';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { OurFacilities } from '../components/about/OurFacilities';
import { OurAchievements } from '../components/about/OurAchievements';
import { Calendar, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onBookSurgeonConsultation: (surgeonId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
  onBookSurgeonConsultation,
}) => {
  const scrollToAboutSection = () => {
    const el = document.getElementById('about-clinic');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      {/* 1. Hero Section */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExploreClick={scrollToAboutSection}
      />

      {/* 2. About the Clinic */}
      <AboutClinic />

      {/* 3. Meet Our Surgeons */}
      <MeetSurgeons onBookConsultation={onBookSurgeonConsultation} />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Our Facilities */}
      <OurFacilities />

      {/* 6. Our Achievements */}
      <OurAchievements />

      {/* Bottom Conversion Banner */}
      <section className="py-16 bg-[#1E1E1E] text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C8A165]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8A165] font-semibold">
            Confidential Consultation
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl mx-auto">
            Begin Your Personalized Aesthetic Journey With AVIORA
          </h2>

          <p className="text-sm text-[#9CA3AF] max-w-xl mx-auto font-light leading-relaxed">
            Schedule an unhurried, private consultation with our senior plastic surgeons in Mumbai or Delhi NCR.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-full bg-gold-gradient text-white text-sm font-medium shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5" />
              <span>Schedule Private Appointment</span>
            </button>

            <a
              href="tel:+919876543210"
              className="px-8 py-4 rounded-full bg-[#2A2A2A] border border-[#C8A165]/40 text-white text-sm font-medium hover:bg-[#333333] transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4.5 h-4.5 text-[#C8A165]" />
              <span>Call Concierge: +91 98765 43210</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#C8A165]" />
              100% Confidential
            </span>
            <span>•</span>
            <span>JCI-Grade Operating ORs</span>
            <span>•</span>
            <span>3D Anatomical Simulation</span>
          </div>
        </div>
      </section>
    </div>
  );
};
