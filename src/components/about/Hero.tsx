import React from 'react';
import { Calendar, ShieldCheck, Award, ArrowUpRight, Sparkles, Star } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-[#F8F4EF]">
      {/* Subtle Background Glows & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8A165_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C8A165]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D9B77B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C8A165]/30 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C8A165]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C8A165]">
                Luxury Aesthetic & Plastic Surgery Clinic
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1E1E1E] leading-[1.15] tracking-tight">
              Preserving Natural Beauty Through <span className="text-gold-gradient italic font-normal">Surgical Artistry</span>
            </h1>

            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl font-light mx-auto lg:mx-0">
              AVIORA unites world-class board-certified surgeons, JCI-grade surgical technology,
              and bespoke patient care in an environment of quiet luxury. We refine, restore, and empower your authentic confidence.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#ECE6DD] text-xs font-medium text-[#1E1E1E] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#C8A165]" />
                <span>100% Patient Safety Record</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#ECE6DD] text-xs font-medium text-[#1E1E1E] shadow-2xs">
                <Award className="w-4 h-4 text-[#C8A165]" />
                <span>20–35+ Yrs Board Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#ECE6DD] text-xs font-medium text-[#1E1E1E] shadow-2xs">
                <Star className="w-4 h-4 text-[#C8A165] fill-[#C8A165]" />
                <span>ISAPS Member Surgeons</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-white text-sm font-medium tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book Private Consultation</span>
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FFFFFF] border border-[#C8A165]/40 text-[#1E1E1E] text-sm font-medium hover:bg-[#F4EFE7] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Explore About AVIORA</span>
                <ArrowUpRight className="w-4 h-4 text-[#C8A165]" />
              </button>
            </div>
          </div>

          {/* Right Visual Column - Hero Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gold-gradient opacity-20 blur-xl" />
              
              <div className="relative bg-[#FFFFFF] rounded-2xl p-3 shadow-2xl border border-[#ECE6DD] overflow-hidden">
                <img
                  src="/src/assets/images/hero_clinic_interior_1786016285409.jpg"
                  alt="AVIORA Luxury Aesthetic Clinic Interior"
                  className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1E1E1E]/90 backdrop-blur-md text-white border border-[#C8A165]/30 shadow-xl flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-xs uppercase tracking-widest text-[#C8A165] font-semibold">
                      Luxury Medical Brand
                    </p>
                    <p className="font-serif text-lg font-medium text-white">Mumbai & Delhi NCR Suites</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-serif text-[#D9B77B]">2008</span>
                    <span className="block text-[10px] text-[#9CA3AF] uppercase">Established Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
