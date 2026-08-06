import React, { useState } from 'react';
import { Calendar, Shield, Award, Sparkles, HeartHandshake, Eye, Target, Cpu, CheckCircle2 } from 'lucide-react';

export const AboutClinic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'mission' | 'philosophy'>('overview');

  const keyMetricCards = [
    {
      title: 'Established Year',
      value: '2008',
      desc: '18+ years of aesthetic precision',
      icon: Calendar,
    },
    {
      title: 'Licensed Professionals',
      value: '25+',
      desc: 'Board-certified surgeons & specialists',
      icon: Award,
    },
    {
      title: 'Personalized Care',
      value: '100%',
      desc: 'Anatomically tailored treatment plans',
      icon: HeartHandshake,
    },
    {
      title: 'International Standards',
      value: 'ISAPS',
      desc: 'Strict JCI-grade surgical guidelines',
      icon: Shield,
    },
    {
      title: 'Patient Safety First',
      value: '0%',
      desc: 'Zero-tolerance infection control ORs',
      icon: Cpu,
    },
  ];

  return (
    <section id="about-clinic" className="py-20 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F4EF] border border-[#C8A165]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A165]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A165]">
              About AVIORA Clinic
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E]">
            A Sanctuary of Medical Trust & Refined Aesthetic Artistry
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
            Founded on the principles of surgical integrity, anatomical harmony, and unyielding patient safety, AVIORA represents the pinnacle of modern plastic surgery and aesthetic dermatology in India.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {keyMetricCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8F4EF] border border-[#ECE6DD] hover:border-[#C8A165] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#C8A165]/30 flex items-center justify-center text-[#C8A165] mb-4 group-hover:bg-gold-gradient group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wider text-[#6B7280] font-medium mb-1">
                  {card.title}
                </p>
                <p className="font-serif text-2xl font-bold text-[#1E1E1E] mb-1">{card.value}</p>
                <p className="text-[11px] text-[#6B7280] leading-snug">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Narrative & Tabbed Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8F4EF] p-8 sm:p-12 rounded-3xl border border-[#ECE6DD]">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Pills */}
            <div className="flex flex-wrap gap-2 border-b border-[#ECE6DD] pb-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'overview'
                    ? 'bg-[#1E1E1E] text-[#D9B77B] shadow-xs'
                    : 'text-[#6B7280] hover:text-[#1E1E1E]'
                }`}
              >
                Clinic Overview
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'mission'
                    ? 'bg-[#1E1E1E] text-[#D9B77B] shadow-xs'
                    : 'text-[#6B7280] hover:text-[#1E1E1E]'
                }`}
              >
                Mission & Vision
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'philosophy'
                    ? 'bg-[#1E1E1E] text-[#D9B77B] shadow-xs'
                    : 'text-[#6B7280] hover:text-[#1E1E1E]'
                }`}
              >
                Patient Philosophy
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="font-serif text-2xl font-semibold text-[#1E1E1E]">
                  Redefining Aesthetic Medicine in India
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                  AVIORA was established to bridge the gap between high-tech clinical innovation and the personalized warmth of luxury medical concierge care. Our state-of-the-art facilities in Mumbai and Delhi NCR feature modular, HEPA-filtered operating suites designed exclusively for cosmetic and reconstructive plastic surgery.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                  With over 18 years of clinical experience, our surgical team rejects generic, artificial enhancements. Instead, we perform micro-precision procedures that respect facial proportions, structural tissue longevity, and ethnic beauty heritage.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-[#ECE6DD] space-y-2">
                    <div className="flex items-center gap-2 text-[#C8A165]">
                      <Target className="w-5 h-5" />
                      <h4 className="font-serif text-lg font-semibold text-[#1E1E1E]">Our Mission</h4>
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      To deliver world-class plastic surgery and aesthetic dermatology through ethical medical care, advanced technology, and personalized treatment plans that yield completely natural-looking outcomes.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#ECE6DD] space-y-2">
                    <div className="flex items-center gap-2 text-[#C8A165]">
                      <Eye className="w-5 h-5" />
                      <h4 className="font-serif text-lg font-semibold text-[#1E1E1E]">Our Vision</h4>
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      To be globally recognized as the benchmark for luxury aesthetic medicine, patient safety, and pioneering surgical innovation in South Asia and beyond.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="font-serif text-2xl font-semibold text-[#1E1E1E]">
                  Patient-Centered & Ethical Medical Care
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                  At AVIORA, patient well-being overrides all commercial considerations. We prioritize unhurried consultations, thorough pre-surgical screening, and honest candidate evaluation.
                </p>
                <ul className="space-y-2 text-xs text-[#1E1E1E] font-medium pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A165]" />
                    No artificial pressure — objective, evidence-based recommendations only
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A165]" />
                    3D VECTRA volumetric modeling before surgical commitment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A165]" />
                    Comprehensive post-operative healing & laser scar management programs
                  </li>
                </ul>
              </div>
            )}

          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C8A165]/30 shadow-xl">
              <img
                src="/src/assets/images/facilities_consultation_1786016319124.jpg"
                alt="AVIORA Private Consultation Room"
                className="w-full h-[320px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="text-xs uppercase tracking-widest text-[#D9B77B]">Private Consultation Suite</p>
                  <p className="font-serif text-lg font-medium">Equipped with 3D Anatomical Simulation Technology</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
