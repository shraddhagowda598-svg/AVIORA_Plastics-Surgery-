import React from 'react';
import { whyChooseUsData } from '../../data/clinicData';
import {
  Award,
  Cpu,
  Sliders,
  ShieldCheck,
  Sparkles,
  Lock,
  HeartHandshake,
  FileText,
  PhoneCall,
  Crown,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  // Icon mapper helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#C8A165]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#C8A165]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#C8A165]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C8A165]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C8A165]" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-[#C8A165]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C8A165]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#C8A165]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#C8A165]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#C8A165]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C8A165]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F4EF] border border-[#C8A165]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A165]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A165]">
              The AVIORA Standard
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E]">
            Why Choose AVIORA Aesthetic Clinic
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
            Our commitment to surgical mastery, transparent ethics, and boutique medical hospitality sets the standard for aesthetic healthcare in South Asia.
          </p>
        </div>

        {/* Feature Cards Grid (10 required items from prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyChooseUsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#F8F4EF] border border-[#ECE6DD] hover:border-[#C8A165] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C8A165]/30 flex items-center justify-center shadow-2xs group-hover:bg-gold-gradient group-hover:text-white transition-all duration-300">
                  {renderIcon(item.iconName)}
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#1E1E1E] group-hover:text-[#C8A165] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#6B7280] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#ECE6DD]/60 flex items-center justify-between text-[10px] uppercase tracking-wider text-[#C8A165] font-semibold">
                <span>Verified Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A165]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
