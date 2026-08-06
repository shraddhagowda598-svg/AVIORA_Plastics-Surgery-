export interface Surgeon {
  id: string;
  name: string;
  title: string;
  city: string;
  hospital: string;
  experience: string;
  specializations: string[];
  qualifications: string;
  languages: string[];
  bio: string;
  longBio: string;
  image: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  achievements: string[];
  keyProcedures: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface FeatureReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'facial' | 'body' | 'breast' | 'non-surgical' | 'reconstructive';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  duration: string;
  recoveryTime: string;
  keyBenefits: string[];
}

export interface BeforeAfterCase {
  id: string;
  procedure: string;
  category: string;
  age: string;
  surgeonName: string;
  beforeImage: string;
  afterImage: string;
  details: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredSurgeon: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
