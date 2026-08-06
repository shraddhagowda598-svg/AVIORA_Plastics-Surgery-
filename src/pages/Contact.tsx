import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

interface ContactProps {
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactProps> = ({ onOpenConsultation }) => {
  const [sentMessage, setSentMessage] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Mumbai Clinic',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentMessage(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#C8A165]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A165]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A165]">
              VIP Patient Concierge
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1E1E1E]">
            Contact AVIORA Aesthetic Clinics
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
            Our medical coordinators are available 24/7 to answer your questions, assist international patients, and arrange confidential consultations.
          </p>
        </div>

        {/* Contact Info Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Clinic Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mumbai Clinic */}
            <div className="p-6 rounded-3xl bg-white border border-[#ECE6DD] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F4EF] border border-[#C8A165]/30 flex items-center justify-center text-[#C8A165]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1E1E1E]">Mumbai Flagship Clinic</h3>
                  <p className="text-xs text-[#C8A165]">The Esthetic Clinics • Bandra West</p>
                </div>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                4th Floor, Medical Enclave, Waterfield Road, Bandra West, Mumbai, Maharashtra 400050
              </p>
              <div className="pt-2 text-xs text-[#1E1E1E] space-y-1 border-t border-[#ECE6DD]">
                <p><strong>Phone:</strong> +91 22 6789 0100</p>
                <p><strong>Senior Surgeon:</strong> Dr. Debraj Shome</p>
              </div>
            </div>

            {/* Delhi NCR Clinic */}
            <div className="p-6 rounded-3xl bg-white border border-[#ECE6DD] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F4EF] border border-[#C8A165]/30 flex items-center justify-center text-[#C8A165]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1E1E1E]">Delhi NCR Center</h3>
                  <p className="text-xs text-[#C8A165]">Apollo & Fortis Enclaves • New Delhi</p>
                </div>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Suite 502, Indraprastha Apollo & Fortis Memorial Complex, New Delhi 110076
              </p>
              <div className="pt-2 text-xs text-[#1E1E1E] space-y-1 border-t border-[#ECE6DD]">
                <p><strong>Phone:</strong> +91 11 4567 8900</p>
                <p><strong>Senior Surgeons:</strong> Dr. Anup Dhir, Dr. Vipul Nanda</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-3xl bg-[#1E1E1E] text-white border border-[#C8A165]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#C8A165]">
                <Clock className="w-5 h-5" />
                <h4 className="font-serif text-lg font-semibold text-white">Clinic Hours & Appointments</h4>
              </div>
              <div className="text-xs space-y-1.5 text-[#9CA3AF]">
                <div className="flex justify-between">
                  <span>Monday – Saturday:</span>
                  <span className="text-white font-medium">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday Consultations:</span>
                  <span className="text-white font-medium">Prior Appointment Only</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#333333]">
                  <span>24/7 Surgical Emergency Desk:</span>
                  <span className="text-[#C8A165] font-semibold">Active</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#ECE6DD] shadow-sm space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A165] font-semibold">
                Direct Inquiry Form
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1E1E1E]">Send Us a Confidential Message</h2>
            </div>

            {sentMessage ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#C8A165]/10 text-[#C8A165] rounded-full flex items-center justify-center mx-auto border border-[#C8A165]/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl text-[#1E1E1E]">Message Successfully Sent</h3>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#1E1E1E]">{contactData.name}</span>. Our concierge medical coordinator will reply to your inquiry within 2 hours.
                </p>
                <button
                  onClick={() => setSentMessage(false)}
                  className="px-6 py-2.5 rounded-full bg-gold-gradient text-white text-xs font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#1E1E1E] mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#1E1E1E] mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#1E1E1E] mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      placeholder="eleanor@example.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#1E1E1E] mb-1.5">Preferred Location</label>
                    <select
                      value={contactData.location}
                      onChange={(e) => setContactData({ ...contactData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                    >
                      <option value="Mumbai Clinic">Mumbai Flagship (The Esthetic Clinics)</option>
                      <option value="Delhi NCR Clinic">Delhi NCR Center (Apollo / Fortis)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#1E1E1E] mb-1.5">Inquiry Details / Procedure Interest</label>
                  <textarea
                    rows={4}
                    placeholder="Describe how we can assist you..."
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#ECE6DD] bg-[#F8F4EF] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#C8A165]"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#ECE6DD]">
                  <span className="text-xs text-[#6B7280] flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#C8A165]" />
                    Confidential Submission
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-gold-gradient text-white text-xs sm:text-sm font-semibold shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
