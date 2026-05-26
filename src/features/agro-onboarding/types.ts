import type { ImageSource } from 'expo-image';

export type OnboardingStep = 'welcome' | 'roles' | 'phone' | 'otp' | 'details' | 'home';

export type Role = {
  label: string;
  caption: string;
  source: ImageSource;
  tint: string;
};
