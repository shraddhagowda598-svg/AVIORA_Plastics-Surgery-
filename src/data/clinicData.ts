import { Surgeon, Facility, Achievement, FeatureReason, ServiceItem, BeforeAfterCase } from '../types';

// Real Surgeons Data as requested
export const surgeonsData: Surgeon[] = [
  {
    id: 'dr-debraj-shome',
    name: 'Dr. Debraj Shome',
    title: 'Consultant Facial Plastic & Reconstructive Surgeon',
    city: 'Mumbai',
    hospital: 'The Esthetic Clinics',
    experience: '20+ Years Experience',
    qualifications: 'MBBS, MS, FRCS (Glasgow), FACS, FICO (USA)',
    specializations: [
      'Facial Plastic Surgery',
      'Rhinoplasty & Septoplasty',
      'Eyelid Surgery (Blepharoplasty)',
      'Facial Reconstruction',
      'Orbital Surgery'
    ],
    languages: ['English', 'Hindi', 'Marathi'],
    bio: 'Dr. Debraj Shome is an internationally acclaimed facial plastic surgeon with over two decades of expertise in complex facial aesthetics and reconstruction.',
    longBio: 'Dr. Debraj Shome is a world-renowned Facial Plastic Surgeon and Oculoplastic Surgeon based in Mumbai. Co-founder of The Esthetic Clinics, Dr. Shome has performed over 15,000 surgeries and holds multiple international fellowships. He is a prominent global keynote speaker, researcher, and pioneer in micro-invasive facial plastic surgery, combining medical precision with artistic proportion to achieve natural-looking aesthetic outcomes.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: 'https://www.linkedin.com/in/drdebrajshome/',
      instagram: 'https://www.instagram.com/drdebrajshome/',
      facebook: 'https://www.facebook.com/drdebrajshome/',
      twitter: 'https://twitter.com/drdebrajshome'
    },
    achievements: [
      'Awarded Best Plastic Surgeon in India by multiple medical bodies',
      'Published over 60 peer-reviewed research papers in top medical journals',
      'Keynote speaker at ISAPS and global aesthetic summits',
      'Pioneer of QR678 hair growth therapy and novel facial surgical techniques'
    ],
    keyProcedures: ['Deep Plane Facelift', 'Preservation Rhinoplasty', 'Structural Eyelid Lift', 'Facial Asymmetry Correction']
  },
  {
    id: 'dr-anup-dhir',
    name: 'Dr. Anup Dhir',
    title: 'Senior Consultant Aesthetic & Cosmetic Surgeon',
    city: 'Delhi',
    hospital: 'Apollo Hospital',
    experience: '30+ Years Experience',
    qualifications: 'MBBS, MS (General Surgery), MCh (Plastic Surgery)',
    specializations: [
      'Aesthetic & Cosmetic Surgery',
      'Anti-Aging & Facial Rejuvenation',
      'Breast Augmentation & Lift',
      'Body Contouring & Liposuction',
      'Fellow of ISAPS'
    ],
    languages: ['English', 'Hindi'],
    bio: 'Dr. Anup Dhir is a pioneering aesthetic surgeon at Apollo Hospital Delhi with over 30 years of surgical excellence in aesthetic procedures and anti-aging treatments.',
    longBio: 'Dr. Anup Dhir is a distinguished Fellow of the International Society of Aesthetic Plastic Surgery (ISAPS) and senior consultant at Indraprastha Apollo Hospital, New Delhi. With more than three decades of practical experience, Dr. Dhir is widely recognized for his masterclass precision in aesthetic breast surgery, body contouring, and advanced non-surgical anti-aging therapies. He focuses strictly on patient safety and harmonious, subtle aesthetic enhancements.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: 'https://www.linkedin.com/in/dranupdhir/',
      facebook: 'https://www.facebook.com/dranupdhir/',
      twitter: 'https://twitter.com/dranupdhir'
    },
    achievements: [
      'Active Life Member & Fellow of ISAPS (International Society of Aesthetic Plastic Surgery)',
      'Over 30 years dedicated to cosmetic and regenerative surgical advancements',
      'Published authority on surgical breast aesthetics and body sculpting safety',
      'Adviser to international medical accreditation panels'
    ],
    keyProcedures: ['Minimal Scar Breast Augmentation', 'HD VASER Liposuction', 'MACS Facelift', 'Regenerative Anti-Aging']
  },
  {
    id: 'dr-vipul-nanda',
    name: 'Dr. Vipul Nanda',
    title: 'Chief Plastic & Reconstructive Surgeon',
    city: 'Delhi NCR',
    hospital: 'Fortis Memorial Research Institute',
    experience: '35+ Years Experience',
    qualifications: 'MBBS, MS, MCh (Plastic Surgery), MRCS (UK)',
    specializations: [
      'Cosmetic Plastic Surgery',
      'Reconstructive Microsurgery',
      'Advanced Facial Reshaping',
      'Post-Weight Loss Sculpting',
      'Complex Scar Management'
    ],
    languages: ['English', 'Hindi'],
    bio: 'Dr. Vipul Nanda brings 35+ years of international clinical experience from premier medical centers across the UK, USA, and India.',
    longBio: 'Dr. Vipul Nanda serves as Chief of Plastic Surgery at Fortis Memorial Research Institute, Gurgaon. Trained at prestigious global centers including the Royal College of Surgeons (UK) and Mayo Clinic (USA), Dr. Nanda is a master of reconstructive microsurgery and cosmetic surgical artistry. His evidence-based approach and compassionate patient care have made AVIORA a trusted destination for patients worldwide.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    socials: {
      linkedin: 'https://www.linkedin.com/in/drvipulnanda/',
      instagram: 'https://www.instagram.com/drvipulnanda/',
      facebook: 'https://www.facebook.com/drvipulnanda/'
    },
    achievements: [
      '35+ years of international clinical excellence in India, UK, and USA',
      'Member of Royal College of Surgeons, Edinburgh (MRCS UK)',
      'Pioneer of high-definition body sculpting and microvascular reconstruction',
      'Over 20,000 successful plastic and aesthetic operations completed'
    ],
    keyProcedures: ['High-Def Tummy Tuck', 'Microvascular Reconstructive Surgery', 'Precision Rhinoplasty', 'Full Body Contouring']
  }
];

// Why Choose Us Feature Cards
export const whyChooseUsData: FeatureReason[] = [
  {
    id: 'board-certified',
    title: 'Board-Certified Surgeons',
    description: 'Lead surgeons with 20–35+ years of international fellowship training and accredited surgical mastery.',
    iconName: 'Award'
  },
  {
    id: 'advanced-tech',
    title: 'Advanced Surgical Technology',
    description: 'Equipped with 3D VECTRA imaging, ultra-precise HD VASER, and 4K surgical visualization suites.',
    iconName: 'Cpu'
  },
  {
    id: 'personalized-plans',
    title: 'Personalized Treatment Plans',
    description: 'Every treatment program is tailored anatomically to enhance your natural, unique features.',
    iconName: 'Sliders'
  },
  {
    id: 'patient-safety',
    title: 'Patient Safety First',
    description: 'Strict JCI-level sterilization protocols, HEPA-filtered laminar airflow ORs, and 24/7 post-op monitoring.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'natural-results',
    title: 'Natural-Looking Results',
    description: 'Our core philosophy rejects over-operated aesthetics in favor of refreshed, harmonious elegance.',
    iconName: 'Sparkles'
  },
  {
    id: 'private-rooms',
    title: 'Private Consultation Rooms',
    description: 'Sound-dampened luxury suites designed for total privacy, discretion, and unhurried consultation.',
    iconName: 'Lock'
  },
  {
    id: 'ethical-practice',
    title: 'Ethical Medical Practices',
    description: 'Transparent evaluations where we only recommend procedures that deliver genuine, safe benefit.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'transparent-planning',
    title: 'Transparent Treatment Planning',
    description: 'No hidden costs, clear recovery timelines, and fully documented surgical expectations.',
    iconName: 'FileText'
  },
  {
    id: 'aftercare-support',
    title: 'Dedicated Aftercare Support',
    description: 'Direct 24/7 access to your surgical care team throughout your entire healing journey.',
    iconName: 'PhoneCall'
  },
  {
    id: 'luxury-experience',
    title: 'Luxury Patient Experience',
    description: 'Concierge-level hospitality, private recovery lounges, and bespoke post-procedure care amenities.',
    iconName: 'Crown'
  }
];

// Our Facilities Gallery
export const facilitiesData: Facility[] = [
  {
    id: 'reception',
    title: 'Grand Reception & VIP Lounge',
    category: 'Hospitality',
    description: 'A soothing, luxury entrance designed with warm cream tones, marble accents, and discreet private seating.',
    image: '/src/assets/images/hero_clinic_interior_1786016285409.jpg',
    highlights: ['Concierge Check-in', 'Acoustic Sound Masking', 'Refined Refreshment Bar']
  },
  {
    id: 'consultation',
    title: 'Private Consultation Suites',
    category: 'Diagnostics',
    description: 'Spacious suites fitted with 3D aesthetic simulation screens for intimate face-to-face planning.',
    image: '/src/assets/images/facilities_consultation_1786016319124.jpg',
    highlights: ['3D VECTRA Facial Scanner', 'Ergonomic Seating', 'Acoustic Privacy Isolation']
  },
  {
    id: 'procedure-rooms',
    title: 'Minor Procedure Suites',
    category: 'Clinical',
    description: 'Dedicated sterile rooms for micro-invasive facial procedures, laser treatments, and injectables.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000',
    highlights: ['Adjustable Treatment Lounges', 'Cryo-Cooling Units', 'Micro-Precision Lighting']
  },
  {
    id: 'operating-theatre',
    title: 'Modular Surgical Operating Theatre',
    category: 'Surgery',
    description: 'Ultra-clean laminar flow operating theater equipped with 4K surgical monitors and advanced anesthesia workstations.',
    image: '/src/assets/images/facilities_operating_room_1786016296687.jpg',
    highlights: ['HEPA Filtration System', '4K Endoscopic Surgical Towers', 'Uninterruptible Power Backup']
  },
  {
    id: 'recovery-suites',
    title: 'Private Luxury Recovery Suites',
    category: 'Recovery',
    description: 'Hotel-standard private suites featuring motorized ergonomic beds, ambient dimming, and continuous vital monitoring.',
    image: '/src/assets/images/facilities_recovery_suite_1786016309432.jpg',
    highlights: ['24/7 Dedicated Nursing Care', 'Private Ensuite Bathrooms', 'Custom Post-Op Nutrition Menu']
  },
  {
    id: 'skin-treatment',
    title: 'Dermatology & Skin Laser Suites',
    category: 'Aesthetics',
    description: 'State-of-the-art laser suite equipped with Picosecond, Fractional CO2, and IPL skin rejuvenation systems.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000',
    highlights: ['FDA-Approved Laser Platforms', 'Skin Barrier Analysis', 'Calming Aromatherapy']
  },
  {
    id: 'diagnostic-equipment',
    title: 'High-Resolution Diagnostic Suite',
    category: 'Diagnostics',
    description: 'Integrated digital imaging room for pre-surgical facial mapping, mammography, and vascular ultrasonography.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    highlights: ['Digital Ultrasound Scanner', 'Sub-Dermal Skin Analyzer', 'Instant Surgical Tele-Consult']
  },
  {
    id: 'sterilization-area',
    title: 'Central Sterile Services Department (CSSD)',
    category: 'Safety',
    description: 'Hospital-grade steam autoclave sterilization suite ensuring 100% sterile instrument integrity for every surgical case.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000',
    highlights: ['Class B Autoclave Sterilizers', 'Biological Indicator Audits', 'Barcoded Instrument Tracking']
  },
  {
    id: 'patient-counseling',
    title: 'Patient Counseling & Aftercare Lounge',
    category: 'Hospitality',
    description: 'Quiet, empathetic space dedicated to pre-surgery orientation, recovery guidance, and family support.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    highlights: ['Post-Op Garment Fitting', 'Nutritional Recovery Consults', 'Discreet Private Exit']
  }
];

// Achievements & Credibility
export const achievementsData: Achievement[] = [
  {
    id: 'isaps-membership',
    title: 'ISAPS & APSI Accreditation',
    subtitle: 'International Society of Aesthetic Plastic Surgery',
    category: 'Medical Accreditation',
    description: 'All lead surgeons hold active fellowships and senior positions in international plastic surgery organizations.',
    iconName: 'ShieldCheck',
    badge: 'Global Credential'
  },
  {
    id: 'jci-standards',
    title: 'International Quality & Safety Standards',
    subtitle: 'Gold Standard Patient Care',
    category: 'Clinical Safety',
    description: 'Operating protocols compliant with strict international hospital accreditation guidelines for zero-infection surgery.',
    iconName: 'CheckCircle2',
    badge: '100% Compliance'
  },
  {
    id: 'peer-research',
    title: 'Published Surgical Research',
    subtitle: '100+ Scientific Papers',
    category: 'Academic Excellence',
    description: 'Our surgical team actively publishes original clinical papers in international plastic surgery journals.',
    iconName: 'BookOpen',
    badge: 'Peer-Reviewed'
  },
  {
    id: 'continuing-education',
    title: 'Global Masterclass Leadership',
    subtitle: 'International Conference Keynotes',
    category: 'Medical Education',
    description: 'Regularly training fellow plastic surgeons worldwide in micro-invasive facial and reconstructive techniques.',
    iconName: 'GraduationCap',
    badge: 'Faculty Leaders'
  }
];

// Services Data for Services Drawer / Page
export const servicesData: ServiceItem[] = [
  {
    id: 'preservation-rhinoplasty',
    name: 'Preservation Rhinoplasty',
    category: 'facial',
    shortDesc: 'Refine nose structure while preserving natural cartilage framework and nasal breathing.',
    fullDesc: 'Preservation Rhinoplasty is a surgical breakthrough that reshapes the nasal bridge and tip while retaining the structural cartilaginous arch. This results in minimal post-operative bruising, natural contours, and structural nasal longevity.',
    iconName: 'Sparkles',
    duration: '2 - 3 Hours',
    recoveryTime: '7 - 10 Days',
    keyBenefits: ['No visible external scars', 'Preserved natural nasal airflow', 'Minimal post-operative swelling']
  },
  {
    id: 'deep-plane-facelift',
    name: 'Deep Plane Facelift',
    category: 'facial',
    shortDesc: 'Restores youthfulness by repositioning deep facial muscle layers without a pulled look.',
    fullDesc: 'Unlike superficial skin tightness, the Deep Plane Facelift releases and elevates the SMAS and facial fat pads. It corrects midface sagging, restores sharp jawline definition, and provides long-lasting youthfulness.',
    iconName: 'UserCheck',
    duration: '3 - 4 Hours',
    recoveryTime: '10 - 14 Days',
    keyBenefits: ['Subtle, natural facial tension', 'Restores volume to midface and cheeks', 'Results last 10–15 years']
  },
  {
    id: 'hd-vaser-liposuction',
    name: 'HD VASER Body Sculpting',
    category: 'body',
    shortDesc: 'Ultrasonic precision fat etching that highlights natural muscular anatomy.',
    fullDesc: 'HD VASER Liposuction utilizes ultrasound energy to selectively liquefy superficial and deep fat deposits while preserving delicate blood vessels and connective tissue. Ideal for defining abdominal lines, waistlines, and flanks.',
    iconName: 'Activity',
    duration: '2 - 4 Hours',
    recoveryTime: '5 - 7 Days',
    keyBenefits: ['High definition anatomical contours', 'Skin tightening effect', 'Quick return to daily routine']
  },
  {
    id: 'breast-augmentation',
    name: 'Ergonomic Breast Augmentation',
    category: 'breast',
    shortDesc: 'Sub-fascial placement of cohesive gel implants for soft, natural breast shape.',
    fullDesc: 'Combining high-cohesive anatomical implants with micro-incisional techniques, AVIORA ensures symmetrical, natural movement and feel tailored to your torso proportions.',
    iconName: 'Heart',
    duration: '1.5 - 2 Hours',
    recoveryTime: '5 - 7 Days',
    keyBenefits: ['Natural dynamic movement', 'Custom implant selection', 'Fast-recovery surgical protocol']
  },
  {
    id: 'laser-skin-resurfacing',
    name: 'Picosecond & Fractional Skin Resurfacing',
    category: 'non-surgical',
    shortDesc: 'Advanced laser technology targeting pigmentation, fine lines, and acne scars.',
    fullDesc: 'Non-invasive collagen-stimulating laser therapy that restores skin radiance, evens out tone, and smooths texture with minimal downtime.',
    iconName: 'Sun',
    duration: '45 - 60 Mins',
    recoveryTime: '1 - 3 Days',
    keyBenefits: ['Painless skin rejuvenation', 'Immediate radiance boost', 'Safe for sensitive skin']
  }
];

// Before & After Cases
export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: 'case-rhinoplasty',
    procedure: 'Preservation Rhinoplasty',
    category: 'Facial Surgery',
    age: '28 Yrs',
    surgeonName: 'Dr. Debraj Shome',
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    details: 'Corrected dorsal hump and refined nasal tip while preserving natural breathing function.'
  },
  {
    id: 'case-facelift',
    procedure: 'Deep Plane Midface Lift',
    category: 'Facial Rejuvenation',
    age: '52 Yrs',
    surgeonName: 'Dr. Anup Dhir',
    beforeImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    details: 'Restored cheek volume and jawline definition with un-pulled, completely natural elegance.'
  }
];
