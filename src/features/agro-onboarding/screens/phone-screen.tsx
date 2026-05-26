import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { PrimaryButton } from '../components/primary-button';
import { onboardingStyles as styles } from '../styles';

type PhoneScreenProps = {
  phone: string;
  setPhone: (value: string) => void;
  onNext: () => void;
};

export function PhoneScreen({ phone, setPhone, onNext }: PhoneScreenProps) {
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    const rawPhone = phone.replace(/\D/g, '');
    if (rawPhone.length < 10) {
      setShowError(true);
    } else {
      setShowError(false);
      onNext();
    }
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['rgba(76, 175, 80, 0.5)', 'rgba(166, 215, 168, 0.5)', 'rgba(235, 235, 235, 0)']}
        locations={[0, 0.4928, 0.9856]}
        style={styles.gradientTop}
      />
      <Image contentFit="contain" source={require('@/assets/images/image 7.svg')} style={styles.headerIcon} />
      <View style={styles.copyBlock}>
        <Text style={styles.title}>Enter your{'\n'}Phone Number</Text>
        <Text style={styles.subcopy}>We'll send you a verification code</Text>
      </View>

      <View style={[styles.formGroup, showError && styles.formGroupError]}>
        <Text style={styles.inputLabel}>Mobile Number</Text>
        <TextInput
          keyboardType="phone-pad"
          onChangeText={(v) => {
            setPhone(v);
            if (showError) setShowError(false);
          }}
          placeholder=""
          placeholderTextColor="#8c8c8c"
          style={styles.input}
          value={phone}
        />
      </View>

      {showError && (
        <View style={styles.errorBlock}>
          <Text style={styles.errorText}>Enter valid 10-digit mobile number</Text>
        </View>
      )}

      <View style={styles.footer}>
        <PrimaryButton label="Send OTP" onPress={handleNext} disabled={showError} />
      </View>
    </View>
  );
}
