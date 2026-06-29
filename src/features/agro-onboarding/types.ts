import type { ImageSource } from 'expo-image';

export type OnboardingStep = 'welcome' | 'roles' | 'auth-method' | 'phone' | 'otp' | 'pan-card' | 'aadhaar-card' | 'bank-account' | 'details' | 'documents-submitted' | 'home';

export type Role = {
  label: string;
  caption: string;
  source: ImageSource;
  tint: string;
};
