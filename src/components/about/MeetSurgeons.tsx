import React, { useState } from 'react';
import { surgeonsData } from '../../data/clinicData';
import { Surgeon } from '../../types';
import { SurgeonProfileModal } from '../SurgeonProfileModal';
import { Sparkles, MapPin, Building, Award, Globe, ArrowRight, Linkedin, Instagram, Facebook, Twitter, Calendar } from 'lucide-react';

interface MeetSurgeonsProps {
  onBookConsultation: (surgeonId: string) => void;
}

export const MeetSurgeons: React.FC<MeetSurgeonsProps> = ({ onBookConsultation }) => {
  const [selectedSurgeon, setSelectedSurgeon] = useState<Surgeon | null>(null);

  return (
    <section id="surgeons" className="py-20 bg-[#F8F4EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#C8A165]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A165]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A165]">
              World-Class Surgical Leadership
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E]">
            Meet Our Senior Plastic Surgeons
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
            Distinguished by decades of surgical innovation, international fellowships, and published academic research. Our lead surgeons bring unyielding precision to every procedure.
          </p>
        </div>

        {/* Surgeon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {surgeonsData.map((surgeon) => (
            <div
              key={surgeon.id}
              className="bg-white rounded-3xl border border-[#ECE6DD] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C8A165]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Image Container */}
              <div className="relative h-80 overflow-hidden bg-[#F4EFE7]">
                <img
                  src={surgeon.image}
                  alt={surgeon.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#1E1E1E]/90 backdrop-blur-md text-white text-xs font-medium border border-[#C8A165]/40 flex items-center gap-1.5 shadow-md">
                  <Award className="w-3.5 h-3.5 text-[#C8A165]" />
                  <span>{surgeon.experience}</span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1E1E1E] text-xs font-medium border border-[#ECE6DD] flex items-center gap-1 shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A165]" />
                  <span>{surgeon.city}</span>
                </div>

                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/40 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-semibold text-[#1E1E1E] group-hover:text-[#C8A165] transition-colors">
                      {surgeon.name}
                    </h3>
                  </div>

                  <p className="text-xs font-medium text-[#C8A165] flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" />
                    {surgeon.hospital} ({surgeon.city})
                  </p>

                  <p className="text-[11px] text-[#6B7280] font-mono bg-[#F8F4EF] px-2.5 py-1 rounded-md border border-[#ECE6DD] inline-block">
                    {surgeon.qualifications}
                  </p>

                  {/* Short Bio */}
                  <p className="text-xs text-[#4B5563] leading-relaxed font-light line-clamp-3 pt-1">
                    {surgeon.bio}
                  </p>
                </div>

                {/* Specializations Tags */}
                <div className="space-y-3 pt-2 border-t border-[#ECE6DD]">
                  <div className="flex flex-wrap gap-1.5">
                    {surgeon.specializations.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-[#F8F4EF] text-[#1E1E1E] font-medium border border-[#ECE6DD]"
                      >
                        {spec}
                      </span>
                    ))}
                    {surgeon.specializations.length > 3 && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#C8A165]/10 text-[#C8A165] font-semibold">
                        +{surgeon.specializations.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Languages */}
                  <div className="text-[11px] text-[#6B7280] flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-[#C8A165]" />
                    <span>Languages: {surgeon.languages.join(', ')}</span>
                  </div>

                  {/* Social Media Public Links */}
                  <div className="flex items-center gap-2 pt-1">
                    {surgeon.socials.linkedin && (
                      <a
                        href={surgeon.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-full bg-[#F8F4EF] border border-[#ECE6DD] text-[#6B7280] hover:text-[#C8A165] hover:border-[#C8A165] transition-all"
                        aria-label={`${surgeon.name} LinkedIn`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {surgeon.socials.instagram && (
                      <a
                        href={surgeon.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-full bg-[#F8F4EF] border border-[#ECE6DD] text-[#6B7280] hover:text-[#C8A165] hover:border-[#C8A165] transition-all"
                        aria-label={`${surgeon.name} Instagram`}
                      >
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {surgeon.socials.facebook && (
                      <a
                        href={surgeon.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-full bg-[#F8F4EF] border border-[#ECE6DD] text-[#6B7280] hover:text-[#C8A165] hover:border-[#C8A165] transition-all"
                        aria-label={`${surgeon.name} Facebook`}
                      >
                        <Facebook className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {surgeon.socials.twitter && (
                      <a
                        href={surgeon.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-full bg-[#F8F4EF] border border-[#ECE6DD] text-[#6B7280] hover:text-[#C8A165] hover:border-[#C8A165] transition-all"
                        aria-label={`${surgeon.name} Twitter`}
                      >
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#ECE6DD]">
                  <button
                    onClick={() => setSelectedSurgeon(surgeon)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#C8A165]/50 text-[#1E1E1E] hover:bg-[#F8F4EF] text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8A165]" />
                  </button>

                  <button
                    onClick={() => onBookConsultation(surgeon.id)}
                    className="w-full px-3 py-2.5 rounded-xl bg-gold-gradient text-white text-xs font-semibold shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consult</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Surgeon Profile Modal */}
        <SurgeonProfileModal
          surgeon={selectedSurgeon}
          onClose={() => setSelectedSurgeon(null)}
          onBookConsultation={onBookConsultation}
        />

      </div>
    </section>
  );
};
