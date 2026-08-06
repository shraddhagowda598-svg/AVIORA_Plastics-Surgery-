import React from 'react';
import { Surgeon } from '../types';
import { X, MapPin, Building, GraduationCap, Award, CheckCircle2, Globe, Calendar, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

interface SurgeonProfileModalProps {
  surgeon: Surgeon | null;
  onClose: () => void;
  onBookConsultation: (surgeonId: string) => void;
}

export const SurgeonProfileModal: React.FC<SurgeonProfileModalProps> = ({
  surgeon,
  onClose,
  onBookConsultation,
}) => {
  if (!surgeon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#ECE6DD] overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="bg-[#1E1E1E] text-white p-6 border-b border-[#C8A165]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A165] font-semibold">
              Senior Consultant Profile
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#9CA3AF] hover:text-white hover:bg-[#2A2A2A] transition-all"
            aria-label="Close surgeon modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Info Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={surgeon.image}
              alt={surgeon.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg border-2 border-[#C8A165] shrink-0"
              referrerPolicy="no-referrer"
            />

            <div className="space-y-3 flex-1">
              <div>
                <h3 className="font-serif text-3xl font-semibold text-[#1E1E1E]">{surgeon.name}</h3>
                <p className="text-sm font-medium text-[#C8A165]">{surgeon.title}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A165]" />
                  {surgeon.city}
                </span>
                <span className="flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-[#C8A165]" />
                  {surgeon.hospital}
                </span>
                <span className="flex items-center gap-1 text-[#1E1E1E] font-semibold bg-[#F8F4EF] px-2.5 py-1 rounded-full border border-[#ECE6DD]">
                  <Award className="w-3.5 h-3.5 text-[#C8A165]" />
                  {surgeon.experience}
                </span>
              </div>

              <p className="text-xs text-[#4B5563] font-mono bg-[#F8F4EF] p-2.5 rounded-lg border border-[#ECE6DD]">
                <strong className="text-[#1E1E1E] font-sans">Qualifications: </strong> {surgeon.qualifications}
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-2 pt-1">
                {surgeon.socials.linkedin && (
                  <a
                    href={surgeon.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#F8F4EF] border border-[#ECE6DD] text-[#1E1E1E] hover:text-[#C8A165] transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {surgeon.socials.instagram && (
                  <a
                    href={surgeon.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#F8F4EF] border border-[#ECE6DD] text-[#1E1E1E] hover:text-[#C8A165] transition-all"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {surgeon.socials.facebook && (
                  <a
                    href={surgeon.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#F8F4EF] border border-[#ECE6DD] text-[#1E1E1E] hover:text-[#C8A165] transition-all"
                    aria-label="Facebook Profile"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
                {surgeon.socials.twitter && (
                  <a
                    href={surgeon.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#F8F4EF] border border-[#ECE6DD] text-[#1E1E1E] hover:text-[#C8A165] transition-all"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                <span className="text-xs text-[#6B7280] ml-2 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#C8A165]" />
                  Languages: {surgeon.languages.join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Full Bio */}
          <div className="space-y-2 pt-2 border-t border-[#ECE6DD]">
            <h4 className="font-serif text-lg font-semibold text-[#1E1E1E]">Professional Biography</h4>
            <p className="text-sm text-[#4B5563] leading-relaxed font-light">{surgeon.longBio}</p>
          </div>

          {/* Specialization Pills */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-semibold text-[#1E1E1E]">Specializations & Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {surgeon.specializations.map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-[#F8F4EF] border border-[#C8A165]/30 text-xs text-[#1E1E1E] font-medium flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A165]" />
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Major Achievements */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-semibold text-[#1E1E1E]">Key Clinical Achievements</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#4B5563]">
              {surgeon.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#F8F4EF] border border-[#ECE6DD]">
                  <GraduationCap className="w-4 h-4 text-[#C8A165] shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-[#F8F4EF] border-t border-[#ECE6DD] flex items-center justify-between">
          <span className="text-xs text-[#6B7280]">Private appointment slot available</span>
          <button
            onClick={() => {
              onClose();
              onBookConsultation(surgeon.id);
            }}
            className="px-6 py-2.5 rounded-full bg-gold-gradient text-white text-xs sm:text-sm font-medium shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation with {surgeon.name.split(' ')[1]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
