import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';

import { PrimaryButton } from '../components/primary-button';
import { onboardingStyles as styles } from '../styles';

type OtpScreenProps = {
  phone: string;
  otp: string[];
  setOtp: (value: string[]) => void;
  onNext: () => void;
};

export function OtpScreen({ phone, otp, setOtp, onNext }: OtpScreenProps) {
  const inputRefs = useRef<Array<TextInput | null>>([]);

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['rgba(76, 175, 80, 0.5)', 'rgba(166, 215, 168, 0.5)', 'rgba(235, 235, 235, 0)']}
        locations={[0, 0.4928, 0.9856]}
        style={styles.gradientTop}
      />
      <Image contentFit="contain" source={require('@/assets/images/image 9.svg')} style={styles.headerIcon} />
      <View style={styles.copyBlock}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subcopy}>Code sent to {phone || 'your number'}</Text>
      </View>

      <View style={styles.otpRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(value) => {
              const cleanValue = value.replace(/\D/g, '');
              const nextOtp = [...otp];
              nextOtp[index] = cleanValue;
              setOtp(nextOtp);

              // Move to next if a digit was entered
              if (cleanValue.length === 1 && index < otp.length - 1) {
                inputRefs.current[index + 1]?.focus();
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              // Move to previous if backspace is pressed on an empty input
              if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                // Focus previous input
                inputRefs.current[index - 1]?.focus();
                // Optionally clear the previous input as well for smoother UX
                const nextOtp = [...otp];
                nextOtp[index - 1] = '';
                setOtp(nextOtp);
              }
            }}
            style={styles.otpInput}
            value={digit}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <PrimaryButton label="Verify" onPress={onNext} />
        <Text style={styles.resendText}>Did not receive? Resend again</Text>
      </View>
    </View>
  );
}
