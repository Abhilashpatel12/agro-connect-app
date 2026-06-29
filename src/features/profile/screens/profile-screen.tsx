import React from 'react';
import { BuyerProfile } from './buyer/BuyerProfile';

// Temporary entry point acting as a wrapper, normally this would check user role
export function ProfileScreen() {
  return <BuyerProfile />;
}
