import { Pressable, Text } from 'react-native';

import { onboardingStyles as styles } from '../styles';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function PrimaryButton({ label, onPress, disabled }: PrimaryButtonProps) {
  return (
    <Pressable 
      disabled={disabled}
      onPress={onPress} 
      style={({ pressed }) => [
        styles.primaryButton, 
        pressed && styles.pressed,
        disabled && { backgroundColor: 'rgba(76, 175, 80, 0.5)' }
      ]}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </Pressable>
  );
}
