import { Pressable, Text, View } from 'react-native';

import { onboardingStyles as styles } from '../styles';

type BackHeaderProps = {
  canGoBack: boolean;
  onBack: () => void;
};

export function BackHeader({ canGoBack, onBack }: BackHeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable
        accessibilityLabel="Go back"
        disabled={!canGoBack}
        onPress={onBack}
        style={({ pressed }) => [
          styles.backButton,
          !canGoBack && styles.invisible,
          pressed && styles.pressed,
        ]}>
        <Text style={styles.backText}>{'<'}</Text>
      </Pressable>
    </View>
  );
}
