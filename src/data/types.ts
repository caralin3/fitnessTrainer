import { ImageSourcePropType } from 'react-native';

export type Category = 'Cardio' | 'Strength' | 'Yoga' | 'Flexibility';
export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface CategoryItem {
  imgSrc: ImageSourcePropType;
  link: string;
  title: Category;
}

export interface ProgramStep {
  day?: number;
  hour?: number;
  minute?: number;
  week?: number;
  description: string;
}

export interface Alert {
  distance: number;
  message: string;
  title: string;
}

export interface Program {
  // alerts: Alert[];
  category: Category;
  description: string;
  duration: string;
  imgSrc: ImageSourcePropType;
  level: Level;
  slug: string;
  steps: ProgramStep[];
  title: string;
  url?: string;
}
