import type { OnboardingStep, Role } from './types';

export const onboardingSteps: OnboardingStep[] = ['welcome', 'roles', 'auth-method', 'phone', 'otp', 'pan-card', 'aadhaar-card', 'bank-account', 'details', 'documents-submitted', 'home'];

export const roles: Role[] = [
  {
    label: 'Farmer',
    caption: 'List your crops, reach buyers and grow your business.',
    source: require('@/assets/images/image 142.png'),
    tint: '#ffffff',
  },
  {
    label: 'Buyer',
    caption: 'Find quality crops, connect with farmers and place orders.',
    source: require('@/assets/images/image 143.png'),
    tint: '#ffffff',
  },
  {
    label: 'Delivery Partner',
    caption: 'Delivery orders safely, earn on every trip grow with us.',
    source: require('@/assets/images/image 145.png'),
    tint: '#ffffff',
  },
];
