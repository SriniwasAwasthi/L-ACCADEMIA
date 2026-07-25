export type FacultyCategory = 
  | 'All Disciplines' 
  | 'Alchemical AI & Computation' 
  | 'Classical Design & Digital Proportion' 
  | 'Philosophy & Ethics of Systems' 
  | 'Architectural Leadership';

export type DifficultyLevel = 'Initiating Apprentice' | 'Artisan Fellow' | 'Master Laureate';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  isUnlocked?: boolean;
  notesCount?: number;
}

export interface Instructor {
  name: string;
  title: string;
  guild: string;
  avatar: string;
  bio: string;
}

export interface Mastercourse {
  id: string;
  title: string;
  subtitle: string;
  faculty: FacultyCategory;
  level: DifficultyLevel;
  duration: string;
  lecturesCount: number;
  instructor: Instructor;
  image: string;
  rating: number;
  enrolledCount: number;
  featured?: boolean;
  summary: string;
  syllabus: {
    chapter: string;
    title: string;
    lessons: Lesson[];
  }[];
  keyLearnings: string[];
  price: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'socrates';
  text: string;
  timestamp: string;
  citation?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  avatar: string;
  bgImage: string;
}

export interface PlanTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}
