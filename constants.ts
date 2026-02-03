import { Service, Doctor, Review } from './types';

export const CLINIC_PHONE = "918300375191";
export const CLINIC_NAME = "Wizdone Dental Hospital";
export const CLINIC_TAGLINE = "Wisdom Tooth and Maxillofacial Surgery Specialist";
export const CLINIC_LOCATION = "R65P+6PX, Modern Layout First Cross St, Padur, Tamil Nadu – 603103";
export const CLINIC_ADDRESS = "Padur, Tamil Nadu – 603103";
export const CLINIC_RATING = 5.0;
export const CLINIC_REVIEW_COUNT = 33;

export const CLINIC_HOURS = {
  monday: "10:00 AM – 8:00 PM",
  tuesday: "10:00 AM – 8:00 PM",
  wednesday: "10:00 AM – 8:00 PM",
  thursday: "10:00 AM – 8:00 PM",
  friday: "10:00 AM – 8:00 PM",
  saturday: "10:00 AM – 8:00 PM",
  sunday: "Closed"
};

export const SERVICES: Service[] = [
  {
    id: 'wisdom',
    title: "Wisdom Tooth Extraction",
    description: "Painless wisdom tooth removal by our maxillofacial surgery specialist. Anxious? We've got you covered.",
    iconName: "Sparkles"
  },
  {
    id: 'maxillofacial',
    title: "Maxillofacial Surgery",
    description: "Specialized surgical treatments for jaw, face, and oral conditions with precision and care.",
    iconName: "Activity"
  },
  {
    id: 'gen',
    title: "General Dentistry",
    description: "Time for a checkup? Routine hygiene and preventive care for your family.",
    iconName: "Stethoscope"
  },
  {
    id: 'rc',
    title: "Root Canal Treatment",
    description: "Severe tooth pain? Save your natural tooth with our advanced, painless therapy.",
    iconName: "Activity"
  },
  {
    id: 'ortho',
    title: "Braces & Aligners",
    description: "Crooked teeth? Straighten your smile with invisible aligners or braces.",
    iconName: "Smile"
  },
  {
    id: 'cosm',
    title: "Cosmetic Dentistry",
    description: "Want a brighter smile? Transform your look with veneers and whitening.",
    iconName: "Sparkles"
  }
];

export const MAIN_DOCTOR: Doctor = {
  id: 'dr-sriram',
  name: "Dr. K. G. Sriraam",
  qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
  specialization: "Wisdom Tooth & Maxillofacial Surgery",
  experienceYears: 5,
  patientsTreated: "8,000+",
  image: "/images/doctor-profile.png",
  quote: "My goal is to make you forget you're at the dentist. Every patient deserves a calm, painless experience with clear explanations at every step."
};

// Real Google Reviews from Wizdone Dental Hospital
export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: "Sai Priya Matta",
    rating: 5,
    text: "I was extremely anxious about my wisdom tooth extraction, but Dr. K. G. Sriraam explained everything clearly and made the procedure completely painless.",
    treatment: "Wisdom Tooth Extraction"
  },
  {
    id: 'r2',
    author: "Hindhuja R",
    rating: 5,
    text: "Best dental experience I've ever had. The doctor was patient, gentle, and the hospital is very clean and well-maintained.",
    treatment: "Dental Consultation"
  },
  {
    id: 'r3',
    author: "Aacaash Nathan",
    rating: 5,
    text: "Had my wisdom tooth removed here. Zero pain during and after the procedure. Highly recommend for anyone anxious about dental surgery.",
    treatment: "Wisdom Tooth Extraction"
  },
  {
    id: 'r4',
    author: "Srinithi Kumar",
    rating: 5,
    text: "Dr. K. G. Sriraam is very professional and explains the treatment process in detail. The staff is friendly and the facility is excellent.",
    treatment: "Oral Surgery"
  },
  {
    id: 'r5',
    author: "Nandhini",
    rating: 5,
    text: "Was scared of dentists my whole life. This hospital changed that. Painless treatment, caring staff, and a very calm environment.",
    treatment: "General Dentistry"
  },
  {
    id: 'r6',
    author: "Bhuvaneswari Kumar",
    rating: 5,
    text: "Excellent care from start to finish. The doctor took time to explain everything and made sure I was comfortable throughout.",
    treatment: "Dental Treatment"
  },
  {
    id: 'r7',
    author: "Pratyasha Chowdhury",
    rating: 5,
    text: "Very professional and hygienic setup. Dr. K. G. Sriraam is skilled and makes nervous patients feel at ease. Highly recommended!",
    treatment: "Wisdom Tooth Extraction"
  },
  {
    id: 'r8',
    author: "Arvind Prabhu",
    rating: 5,
    text: "Top-notch dental hospital in Padur. The doctor's expertise in maxillofacial surgery is evident. Pain-free experience.",
    treatment: "Maxillofacial Surgery"
  },
  {
    id: 'r9',
    author: "Prasanna Selvaraj",
    rating: 5,
    text: "Had a great experience here. Clean facility, friendly staff, and most importantly, a skilled and caring doctor.",
    treatment: "Dental Checkup"
  }
];

// Mocking booked slots logic for the "Smart" system
export const MOCK_BOOKED_SLOTS = [
  "10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"
];