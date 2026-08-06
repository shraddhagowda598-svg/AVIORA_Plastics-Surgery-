import React, { useState } from 'react';
import { beforeAfterCases } from '../data/clinicData';
import { Sparkles, ShieldCheck, Calendar, Eye, ArrowRight, UserCheck } from 'lucide-react';

interface BeforeAfterProps {
  onOpenConsultation: () => void;
}

export const BeforeAfterPage: React.FC<BeforeAfterProps> = ({ onOpenConsultation }) => {
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({
    'case-rhinoplasty': 50,
    'case-facelift': 50,
  });

  const handleSliderChange = (caseId: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [caseId]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F8F4EF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#C8A165]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A165]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A165]">
              Natural Aesthetic Outcomes
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1E1E1E]">
            Authentic Patient Case Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
            Drag the interactive slider to compare before & after transformations. Every result reflects anatomical subtlety without an artificial, over-operated appearance.
          </p>
        </div>

        {/* Case Gallery Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {beforeAfterCases.map((c) => {
            const pos = sliderPositions[c.id] || 50;
            return (
              <div
                key={c.id}
                className="bg-white rounded-3xl p-6 border border-[#ECE6DD] shadow-sm space-y-6"
              >
                {/* Interactive Drag Slider Comparison Frame */}
                <div className="relative h-80 rounded-2xl overflow-hidden select-none border border-[#ECE6DD]">
                  {/* After Image (Background) */}
                  <img
                    src={c.afterImage}
                    alt={`${c.procedure} After`}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#1E1E1E]/80 backdrop-blur-md text-[#D9B77B] text-[10px] font-semibold uppercase tracking-wider z-10">
                    After (Refined Result)
                  </span>

                  {/* Before Image (Foreground Clipped) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{ width: `${pos}%` }}
                  >
                    <img
                      src={c.beforeImage}
                      alt={`${c.procedure} Before`}
                      className="absolute inset-y-0 left-0 max-w-none h-full object-cover w-[600px]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                      Before
                    </span>
                  </div>

                  {/* Drag Handle Divider */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize flex items-center justify-center"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#C8A165] text-white flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white">
                      ↔
                    </div>
                  </div>

                  {/* Invisible Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={pos}
                    onChange={(e) => handleSliderChange(c.id, Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />
                </div>

                {/* Case Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#C8A165] font-semibold">
                      {c.category} • Patient Age: {c.age}
                    </span>
                    <span className="text-xs font-semibold text-[#1E1E1E] flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-[#C8A165]" />
                      Surgeon: {c.surgeonName}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1E1E1E]">{c.procedure}</h3>
                  <p className="text-xs text-[#6B7280] font-light leading-relaxed">{c.details}</p>
                </div>

                <div className="pt-4 border-t border-[#ECE6DD] flex items-center justify-between">
                  <span className="text-xs text-[#6B7280] flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#C8A165]" />
                    Verified Clinical Outcome
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 rounded-full bg-gold-gradient text-white text-xs font-semibold shadow-xs hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Similar Consult</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
