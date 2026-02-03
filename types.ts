export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experienceYears: number;
  patientsTreated: string; // e.g., "5k+"
  image: string;
  quote: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  treatment: string;
}

export interface TimeSlot {
  time: string; // "10:00 AM"
  isBooked: boolean;
}

export interface BookingState {
  step: number;
  treatment: string;
  date: Date;
  timeSlot: string | null;
  patientName: string;
}