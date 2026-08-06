import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/About';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { BeforeAfterPage } from './pages/BeforeAfter';
import { ContactPage } from './pages/Contact';
import { MeetSurgeons } from './components/about/MeetSurgeons';
import { OurFacilities } from './components/about/OurFacilities';
import { BookConsultationModal } from './components/BookConsultationModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [preselectedSurgeonId, setPreselectedSurgeonId] = useState<string>('dr-debraj-shome');

  const handleOpenConsultation = (surgeonId?: string) => {
    if (surgeonId) {
      setPreselectedSurgeonId(surgeonId);
    }
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EF] text-[#1E1E1E] font-sans antialiased">
      {/* Sticky Luxury Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <Home
            setActiveTab={setActiveTab}
            onOpenConsultation={() => handleOpenConsultation()}
            onBookSurgeonConsultation={(sId) => handleOpenConsultation(sId)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onOpenConsultation={() => handleOpenConsultation()}
            onBookSurgeonConsultation={(sId) => handleOpenConsultation(sId)}
          />
        )}

        {activeTab === 'surgeons' && (
          <div className="py-12 bg-[#F8F4EF]">
            <MeetSurgeons
              onBookConsultation={(sId) => handleOpenConsultation(sId)}
            />
          </div>
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activeTab === 'facilities' && (
          <div className="py-12 bg-[#F8F4EF]">
            <OurFacilities />
          </div>
        )}

        {activeTab === 'before-after' && (
          <BeforeAfterPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Global Book Consultation Modal */}
      <BookConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedSurgeonId={preselectedSurgeonId}
      />
    </div>
  );
}
