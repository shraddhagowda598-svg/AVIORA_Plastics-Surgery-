import React, { useState } from 'react';
import { facilitiesData } from '../../data/clinicData';
import { Facility } from '../../types';
import { Sparkles, Maximize2, X, CheckCircle2, Building2 } from 'lucide-react';

export const OurFacilities: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hospitality', 'Diagnostics', 'Clinical', 'Surgery', 'Recovery', 'Aesthetics', 'Safety'];

  const filteredFacilities = activeCategory === 'All'
    ? facilitiesData
    : facilitiesData.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="py-20 bg-[#F8F4EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#C8A165]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A165]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A165]">
              Hospital-Grade Excellence
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E]">
            Our World-Class Surgical Facilities
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
            Designed for maximal patient privacy, sterile safety, and ultimate comfort. Explore our 9 specialized medical suites across Mumbai and Delhi NCR.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-white shadow-md'
                  : 'bg-white border border-[#ECE6DD] text-[#1E1E1E] hover:border-[#C8A165]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facility Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl border border-[#ECE6DD] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C8A165]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#1E1E1E]">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1E1E1E]/80 backdrop-blur-md text-[#D9B77B] text-[10px] font-semibold tracking-wider uppercase border border-[#C8A165]/30">
                  {facility.category}
                </span>

                {/* Expand Lightbox Button */}
                <button
                  onClick={() => setSelectedFacility(facility)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 text-[#1E1E1E] hover:bg-[#C8A165] hover:text-white transition-all shadow-md opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label="View facility details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#1E1E1E] group-hover:text-[#C8A165] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed font-light mt-1.5">
                    {facility.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="pt-3 border-t border-[#ECE6DD] space-y-1.5">
                  {facility.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#1E1E1E] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A165] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Lightbox Modal */}
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#ECE6DD] flex flex-col md:flex-row max-h-[90vh]">
              
              {/* Image Left */}
              <div className="md:w-3/5 relative bg-[#1E1E1E] h-64 md:h-auto">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1E1E1E]/80 text-[#D9B77B] text-xs font-semibold uppercase tracking-wider">
                  {selectedFacility.category} Suite
                </span>
              </div>

              {/* Text Right */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#C8A165] font-semibold flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      AVIORA Facility Tour
                    </span>
                    <button
                      onClick={() => setSelectedFacility(null)}
                      className="p-1.5 rounded-full text-[#6B7280] hover:text-[#1E1E1E] hover:bg-[#F8F4EF]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#1E1E1E]">
                    {selectedFacility.title}
                  </h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed font-light">
                    {selectedFacility.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#ECE6DD]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E1E1E]">
                      Suite Specifications:
                    </h4>
                    {selectedFacility.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#1E1E1E]">
                        <CheckCircle2 className="w-4 h-4 text-[#C8A165]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFacility(null)}
                  className="w-full py-3 rounded-full bg-gold-gradient text-white text-xs font-semibold shadow-md"
                >
                  Close Facility View
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
