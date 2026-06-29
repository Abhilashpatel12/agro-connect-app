import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { onboardingSteps } from '@/features/agro-onboarding/constants';
import { DetailsScreen } from '@/features/agro-onboarding/screens/details-screen';
import { OtpScreen } from '@/features/agro-onboarding/screens/otp-screen';
import { PhoneScreen } from '@/features/agro-onboarding/screens/phone-screen';
import { RoleScreen } from '@/features/agro-onboarding/screens/role-screen';
import { WelcomeScreen } from '@/features/agro-onboarding/screens/welcome-screen';
import { AuthMethodScreen } from '@/features/agro-onboarding/screens/auth-method-screen';
import { PanCardScreen } from '@/features/agro-onboarding/screens/pan-card-screen';
import { AadhaarCardScreen } from '@/features/agro-onboarding/screens/aadhaar-card-screen';
import { BankAccountScreen } from '@/features/agro-onboarding/screens/bank-account-screen';
import { DocumentsSubmittedScreen } from '@/features/agro-onboarding/screens/documents-submitted-screen';
import { HomeScreen } from '@/features/home/screens/home-screen';
import { onboardingStyles as styles } from '@/features/agro-onboarding/styles';
import type { OnboardingStep } from '@/features/agro-onboarding/types';

export default function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState<OnboardingStep>('welcome');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [name, setName] = useState('');
  const [village, setVillage] = useState('');
  const [crop, setCrop] = useState('');
  const [experience, setExperience] = useState('');
  const [land, setLand] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  
  // States for KYC
  const [panNumber, setPanNumber] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [bankName, setBankName] = useState('State Bank of India');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [branchName, setBranchName] = useState('');

  const safeAreaInsets = useSafeAreaInsets();

  const stepIndex = onboardingSteps.indexOf(step);
  const nextStep = onboardingSteps[Math.min(stepIndex + 1, onboardingSteps.length - 1)];

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', default: undefined })}
        style={styles.keyboardView}>
        <ScrollView
          bounces={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: Math.max(safeAreaInsets.bottom, 16) + 8 },
          ]}>
          <View style={styles.phoneCanvas}>
            {step === 'welcome' && <WelcomeScreen onNext={() => setStep('roles')} />}
            {step === 'roles' && <RoleScreen onNext={(role) => {
              setSelectedRole(role);
              setStep('auth-method');
            }} />}
            {step === 'auth-method' && <AuthMethodScreen onLogin={() => setStep('phone')} onSignUp={() => setStep('phone')} />}
            {step === 'phone' && (
              <PhoneScreen
                phone={phone}
                setPhone={setPhone}
                onNext={() => setStep(phone.trim().length >= 10 ? nextStep : 'phone')}
              />
            )}
            {step === 'otp' && (
              <OtpScreen 
                phone={phone} 
                otp={otp} 
                setOtp={setOtp} 
                onNext={() => {
                  if (selectedRole === 'Farmer') {
                    setStep(nextStep);
                  } else {
                    router.replace('/buyer-home' as any);
                  }
                }} 
              />
            )}
            {step === 'pan-card' && <PanCardScreen panNumber={panNumber} setPanNumber={setPanNumber} onNext={() => setStep(nextStep)} />}
            {step === 'aadhaar-card' && <AadhaarCardScreen aadhaarNumber={aadhaarNumber} setAadhaarNumber={setAadhaarNumber} onNext={() => setStep(nextStep)} />}
            {step === 'bank-account' && (
              <BankAccountScreen
                bankName={bankName}
                setBankName={setBankName}
                accountHolderName={accountHolderName}
                setAccountHolderName={setAccountHolderName}
                accountNumber={accountNumber}
                setAccountNumber={setAccountNumber}
                ifscCode={ifscCode}
                setIfscCode={setIfscCode}
                branchName={branchName}
                setBranchName={setBranchName}
                onNext={() => setStep(nextStep)}
              />
            )}
            {step === 'details' && (
              <DetailsScreen
                name={name}
                setName={setName}
                village={village}
                setVillage={setVillage}
                crop={crop}
                setCrop={setCrop}
                experience={experience}
                setExperience={setExperience}
                land={land}
                setLand={setLand}
                onNext={() => setStep(nextStep)}
              />
            )}
            {step === 'documents-submitted' && (
              <DocumentsSubmittedScreen
                onNext={() => {
                  router.replace('/home' as any);
                }}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
