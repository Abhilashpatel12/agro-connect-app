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
  const safeAreaInsets = useSafeAreaInsets();

  const stepIndex = onboardingSteps.indexOf(step);
  const canGoBack = stepIndex > 0;
  const nextStep = onboardingSteps[Math.min(stepIndex + 1, onboardingSteps.length - 1)];

  function goBack() {
    setStep(onboardingSteps[Math.max(stepIndex - 1, 0)]);
  }

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
            {step === 'roles' && <RoleScreen onNext={() => setStep('phone')} />}
            {step === 'phone' && (
              <PhoneScreen
                phone={phone}
                setPhone={setPhone}
                onNext={() => setStep(phone.trim().length >= 10 ? nextStep : 'phone')}
              />
            )}
            {step === 'otp' && <OtpScreen phone={phone} otp={otp} setOtp={setOtp} onNext={() => setStep(nextStep)} />}
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
                onNext={() => router.replace('/home' as any)}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
