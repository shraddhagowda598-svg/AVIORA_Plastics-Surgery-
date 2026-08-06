import React from 'react';
import { Hero } from '../components/about/Hero';
import { AboutClinic } from '../components/about/AboutClinic';
import { MeetSurgeons } from '../components/about/MeetSurgeons';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { ArrowRight, Sparkles, ShieldCheck, Award, Heart } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onBookSurgeonConsultation: (surgeonId: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  setActiveTab,
  onOpenConsultation,
  onBookSurgeonConsultation,
}) => {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      {/* Hero */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExploreClick={() => setActiveTab('about')}
      />

      {/* Quick Brand Highlight */}
      <section className="py-12 bg-white border-y border-[#ECE6DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 space-y-1">
            <span className="font-serif text-3xl font-bold text-[#1E1E1E]">18+</span>
            <p className="text-xs text-[#6B7280] uppercase tracking-wider">Years of Surgical Mastery</p>
          </div>
          <div className="p-4 space-y-1">
            <span className="font-serif text-3xl font-bold text-[#1E1E1E]">15,000+</span>
            <p className="text-xs text-[#6B7280] uppercase tracking-wider">Successful Aesthetic Cases</p>
          </div>
          <div className="p-4 space-y-1">
            <span className="font-serif text-3xl font-bold text-[#1E1E1E]">100%</span>
            <p className="text-xs text-[#6B7280] uppercase tracking-wider">Natural-Looking Philosophy</p>
          </div>
          <div className="p-4 space-y-1">
            <span className="font-serif text-3xl font-bold text-[#1E1E1E]">24/7</span>
            <p className="text-xs text-[#6B7280] uppercase tracking-wider">VIP Surgical Concierge</p>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <AboutClinic />

      {/* Meet Surgeons */}
      <MeetSurgeons onBookConsultation={onBookSurgeonConsultation} />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </div>
  );
};
