import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, FileText, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { surgeonsData } from '../data/clinicData';
import { ConsultationFormData } from '../types';

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSurgeonId?: string;
}

export const BookConsultationModal: React.FC<BookConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedSurgeonId,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredSurgeon: preselectedSurgeonId || 'dr-debraj-shome',
    serviceCategory: 'Facial Plastic Surgery',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#ECE6DD] overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#1E1E1E] text-white p-6 border-b border-[#C8A165]/30 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A165] font-semibold block">
              AVIORA Concierge
            </span>
            <h3 className="font-serif text-2xl font-medium text-white">Book Private Consultation</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#9CA3AF] hover:text-white hover:bg-[#2A2A2A] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 bg-[#C8A165]/10 text-[#C8A165] rounded-full flex items-center justify-center mx-auto border border-[#C8A165]/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-[#1E1E1E]">Consultation Request Received</h4>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1E1E1E]">{formData.fullName}</span>. Our senior clinical coordinator will contact you at <span className="font-medium text-[#C8A165]">{formData.phone}</span> within 2 business hours to confirm your private appointment with {surgeonsData.find(s => s.id === formData.preferredSurgeon)?.name}.
                </p>
              </div>

              <div className="p-4 bg-[#F8F4EF] rounded-xl text-xs text-left max-w-md mx-auto space-y-2 border border-[#ECE6DD]">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Surgeon:</span>
                  <span className="font-medium text-[#1E1E1E]">
                    {surgeonsData.find(s => s.id === formData.preferredSurgeon)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Procedure Category:</span>
                  <span className="font-medium text-[#1E1E1E]">{formData.serviceCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Preferred Schedule:</span>
                  <span className="font-medium text-[#1E1E1E]">{formData.preferredDate || 'Flexible'} ({formData.preferredTime})</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-gold-gradient text-white text-sm font-medium shadow-md hover:scale-105 transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Doctor Picker */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1E1E] mb-2">
                  Select Surgeon
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {surgeonsData.map((s) => {
                    const isSelected = formData.preferredSurgeon === s.id;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setFormData({ ...formData, preferredSurgeon: s.id })}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                          isSelected
                            ? 'border-[#C8A165] bg-[#F8F4EF] shadow-sm'
                            : 'border-[#ECE6DD] hover:border-[#C8A165]/50'
                        }`}
                      >
                        <img
                          src={s.image}
                          alt={s.name}
                          className="w-10 h-10 rounded-full object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="overflow-hidden">
                          <p className="text-xs font-semibold text-[#1E1E1E] truncate">{s.name}</p>
                          <p className="text-[10px] text-[#6B7280] truncate">{s.city}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Service Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1E1E] mb-1.5">
                    Procedure Category
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                    required
                  >
                    <option value="Facial Plastic Surgery">Facial Plastic Surgery</option>
                    <option value="Preservation Rhinoplasty">Preservation Rhinoplasty</option>
                    <option value="Aesthetic Anti-Aging">Aesthetic Anti-Aging</option>
                    <option value="Body Sculpting & Liposuction">Body Sculpting & Liposuction</option>
                    <option value="Breast Augmentation">Breast Augmentation</option>
                    <option value="Reconstructive Surgery">Reconstructive Surgery</option>
                    <option value="Skin Laser & Non-Surgical">Skin Laser & Non-Surgical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1E1E] mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1E1E] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1E1E] mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Schedule Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1E1E] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1E1E] mb-1.5">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                    >
                      <option value="10:00 AM - 12:00 PM">Morning (10:00 AM - 12:00 PM)</option>
                      <option value="01:00 PM - 03:00 PM">Afternoon (01:00 PM - 03:00 PM)</option>
                      <option value="04:00 PM - 06:00 PM">Evening (04:00 PM - 06:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1E1E] mb-1.5">
                  Private Medical Notes / Questions (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your aesthetic goals or concerns..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#ECE6DD]">
                <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <ShieldCheck className="w-4 h-4 text-[#C8A165]" />
                  <span>100% Confidential & HIPAA-Compliant</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-gold-gradient text-white text-xs sm:text-sm font-medium shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  Confirm Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
