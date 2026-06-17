import type { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

export type ProfileRoute = string; // Using generic string for routing

export type ProfileAction = {
  id: string;
  title: string;
  icon: any;
  iconBg: string;
  href: ProfileRoute;
  isLogout?: boolean;
};

export type ProfileSection = {
  title: string;
  data: ProfileAction[];
};

export const PROFILE_SECTIONS: ProfileSection[] = [
  {
    title: 'Account',
    data: [
      {
        id: 'my-crops',
        title: 'My Crops',
        icon: require('@/assets/profile_assests/image 85.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/crops',
      },
      {
        id: 'orders',
        title: 'Orders',
        icon: require('@/assets/profile_assests/image 15.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/orders',
      },
      {
        id: 'plans',
        title: 'Plans & Subscription',
        icon: require('@/assets/profile_assests/image 37.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/plans',
      },
      {
        id: 'reviews',
        title: 'Reviews & Ratings',
        icon: require('@/assets/profile_assests/image 90.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/rate',
      },
    ],
  },
  {
    title: 'Settings',
    data: [
      {
        id: 'notifications',
        title: 'Notifications',
        icon: require('@/assets/profile_assests/image 34.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/notifications',
      },
      {
        id: 'privacy-security',
        title: 'Privacy & Security',
        icon: require('@/assets/profile_assests/image 35.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/security',
      },
      {
        id: 'bank-payments',
        title: 'Bank & Payments',
        icon: require('@/assets/profile_assests/image 86.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/payment-methods',
      },
    ],
  },
  {
    title: 'Support',
    data: [
      {
        id: 'help-center',
        title: 'Help Center',
        icon: require('@/assets/profile_assests/image 39.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/help',
      },
      {
        id: 'contact-support',
        title: 'Contact Support',
        icon: require('@/assets/profile_assests/image 33.svg'), // Using existing SVG as fallback
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/contact',
      },
      {
        id: 'rate-app',
        title: 'Rate the App',
        icon: require('@/assets/profile_assests/image 90.svg'), // Using existing star as fallback
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/rate',
      },
    ],
  },
  {
    title: 'Others',
    data: [
      {
        id: 'terms',
        title: 'Terms & Conditions',
        icon: require('@/assets/profile_assests/image 89.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/terms',
      },
      {
        id: 'privacy-policy',
        title: 'Privacy Policy',
        icon: require('@/assets/profile_assests/image 88.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/privacy',
      },
      {
        id: 'about',
        title: 'About App',
        icon: require('@/assets/profile_assests/image 33.svg'),
        iconBg: 'rgba(76, 175, 80, 0.2)',
        href: '/profile/about',
      },
      {
        id: 'logout',
        title: 'Logout',
        icon: require('@/assets/profile_assests/image 32.svg'),
        iconBg: 'rgba(230, 35, 38, 0.2)',
        href: '/profile/logout',
        isLogout: true,
      },
    ],
  },
];

export const PROFILE_DETAIL_COPY: Record<
  string,
  {
    title: string;
    heroIcon: any;
    sections: { heading: string; rows: { label: string; value: string }[] }[];
  }
> = {
  default: {
    title: 'Detail',
    heroIcon: require('@/assets/profile_assests/image 85.svg'),
    sections: [],
  },
};



