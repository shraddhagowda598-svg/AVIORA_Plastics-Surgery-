import React from 'react';
import { achievementsData } from '../../data/clinicData';
import { Sparkles, ShieldCheck, CheckCircle2, BookOpen, GraduationCap, Award, FileSpreadsheet } from 'lucide-react';

export const OurAchievements: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C8A165]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#C8A165]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#C8A165]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#C8A165]" />;
      default:
        return <Award className="w-6 h-6 text-[#C8A165]" />;
    }
  };

  const verifiableMilestones = [
    {
      year: '2008',
      title: 'Foundation of AVIORA Clinic',
      desc: 'Inauguration of Mumbai flagship facility dedicated strictly to facial & aesthetic plastic surgery.'
    },
    {
      year: '2014',
      title: '3D VECTRA Simulation Integration',
      desc: 'First clinic in region to adopt volumetric 3D pre-surgical anatomical modeling.'
    },
    {
      year: '2019',
      title: 'International ISAPS Faculty Role',
      desc: 'Surgeons invited as keynote masterclass speakers at European & Asian aesthetic summits.'
    },
    {
      year: '2023',
      title: '100+ Published Research Papers',
      desc: 'Surpassing milestone of 100 peer-reviewed clinical articles in top medical journals.'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F4EF] border border-[#C8A165]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A165]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A165]">
              Verified Clinical Milestones
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E]">
            Credible Medical Accomplishments
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-light leading-relaxed">
            Grounded in peer-reviewed science, active international society leadership, and unyielding surgical excellence.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#F8F4EF] border border-[#ECE6DD] hover:border-[#C8A165] transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#C8A165]/30 flex items-center justify-center shadow-2xs">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#1E1E1E] text-[#D9B77B] text-[10px] font-semibold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#C8A165] font-semibold">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#1E1E1E] mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#1E1E1E] mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#6B7280] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#ECE6DD] flex items-center gap-1.5 text-[11px] text-[#1E1E1E] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A165]" />
                <span>Verified Medical Credential</span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1E1E1E] text-white border border-[#C8A165]/30">
          <div className="flex items-center gap-2 mb-6">
            <FileSpreadsheet className="w-5 h-5 text-[#C8A165]" />
            <h3 className="font-serif text-2xl text-white font-medium">Historical Timeline & Excellence</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiableMilestones.map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#2A2A2A] border border-[#333333] space-y-2">
                <span className="text-2xl font-serif text-[#D9B77B] font-bold block">{m.year}</span>
                <h4 className="text-sm font-semibold text-white">{m.title}</h4>
                <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
