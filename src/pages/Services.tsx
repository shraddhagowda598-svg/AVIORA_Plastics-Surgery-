import React, { useState } from 'react';
import { servicesData } from '../data/clinicData';
import { ServiceItem } from '../types';
import { Sparkles, Clock, Calendar, CheckCircle2, ShieldCheck, ArrowRight, Activity, Heart, Sun, UserCheck } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8F4EF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#C8A165]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A165]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A165]">
              Bespoke Medical Specialties
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1E1E1E]">
            Specialized Aesthetic & Plastic Surgery
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
            Every procedure at AVIORA is performed under strict hospital-grade sterilization protocols with micro-surgical precision for harmonious, elegant, and natural outcomes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Procedures' },
            { id: 'facial', label: 'Facial Plastic Surgery' },
            { id: 'body', label: 'Body Sculpting' },
            { id: 'breast', label: 'Breast Aesthetics' },
            { id: 'non-surgical', label: 'Skin & Lasers' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gold-gradient text-white shadow-md'
                  : 'bg-white border border-[#ECE6DD] text-[#1E1E1E] hover:border-[#C8A165]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white border border-[#ECE6DD] hover:border-[#C8A165] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F4EF] border border-[#C8A165]/30 flex items-center justify-center text-[#C8A165] group-hover:bg-gold-gradient group-hover:text-white transition-all">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F8F4EF] text-[#C8A165] text-[10px] font-bold uppercase tracking-wider border border-[#ECE6DD]">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#1E1E1E] group-hover:text-[#C8A165] transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-[#6B7280] leading-relaxed font-light">
                  {service.shortDesc}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-medium text-[#1E1E1E] bg-[#F8F4EF] p-3 rounded-xl border border-[#ECE6DD]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C8A165]" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C8A165]" />
                    <span>Downtime: {service.recoveryTime}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B7280] font-semibold block">Key Benefits:</span>
                  {service.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-[#1E1E1E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A165] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#ECE6DD] flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-3 rounded-xl border border-[#C8A165]/50 text-[#1E1E1E] text-xs font-semibold hover:bg-[#F8F4EF] transition-all cursor-pointer"
                >
                  View Procedure Specs
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-3 rounded-xl bg-gold-gradient text-white text-xs font-semibold shadow-xs hover:scale-105 transition-all cursor-pointer"
                  aria-label="Book appointment"
                >
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Specs Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl border border-[#ECE6DD] space-y-6">
              <div className="flex items-center justify-between border-b border-[#ECE6DD] pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A165] font-semibold">
                    Procedure Guide
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1E1E1E]">{selectedService.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full text-[#6B7280] hover:text-[#1E1E1E] hover:bg-[#F8F4EF]"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-[#4B5563] leading-relaxed font-light">{selectedService.fullDesc}</p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#F8F4EF] border border-[#ECE6DD] text-xs">
                <div>
                  <span className="text-[#6B7280] block font-medium">Estimated OR Duration:</span>
                  <span className="font-semibold text-[#1E1E1E] text-sm">{selectedService.duration}</span>
                </div>
                <div>
                  <span className="text-[#6B7280] block font-medium">Expected Recovery:</span>
                  <span className="font-semibold text-[#1E1E1E] text-sm">{selectedService.recoveryTime}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E1E1E]">Key Clinical Advantages</h4>
                {selectedService.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#1E1E1E]">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A165]" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#ECE6DD]">
                <span className="text-xs text-[#6B7280]">Performed by Senior Board Surgeons</span>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="px-6 py-3 rounded-full bg-gold-gradient text-white text-xs font-semibold shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  Book Consult For {selectedService.name}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
