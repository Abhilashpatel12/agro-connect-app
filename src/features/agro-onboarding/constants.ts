import type { OnboardingStep, Role } from './types';

export const onboardingSteps: OnboardingStep[] = ['welcome', 'roles', 'phone', 'otp', 'details', 'home'];

export const roles: Role[] = [
  {
    label: 'Farmer',
    caption: 'Grow crops',
    source: require('@/assets/images/image 5.svg'),
    tint: '#dff4e0',
  },
  {
    label: 'Buyer',
    caption: 'Buy produce',
    source: require('@/assets/images/image 9.svg'),
    tint: '#fff4c7',
  },
  {
    label: 'Farmer',
    caption: 'Sell fresh stock',
    source: require('@/assets/images/7cdec4c989dd0fc608bf39b038919749db0d79f2.png'),
    tint: '#e5f6dc',
  },
  {
    label: 'Farmer',
    caption: 'Local market',
    source: require('@/assets/images/dbd33571f4be87701a393d78c14f461f64302df2.png'),
    tint: '#ffe5d8',
  },
];
