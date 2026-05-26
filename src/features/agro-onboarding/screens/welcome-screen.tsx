import { useEffect } from 'react';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

import { onboardingStyles as styles } from '../styles';

type WelcomeScreenProps = {
  onNext: () => void;
};

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <Pressable style={[styles.screen, styles.welcomeScreen]} onPress={onNext}>
        <Image
          contentFit="cover"
          source={require('@/assets/images/Ellipse 1003.svg')}
          style={styles.tomatoBubble}
        />
        <Image
          contentFit="cover"
          source={require('@/assets/images/Rectangle 13.svg')}
          style={styles.ricePill}
        />

        <View style={styles.brandBlock}>
          <Text style={styles.brandTitle}>Agro Connect</Text>
          <Text style={styles.brandCopy}>Your crops. Your price.{'\n'}Your market.</Text>
        </View>

        <Image
          contentFit="cover"
          source={require('@/assets/images/Ellipse 1004.png')}
          style={styles.greenBubble}
        />

        <Image
          contentFit="cover"
          source={require('@/assets/images/Rectangle 14.svg')}
          style={styles.fieldPill}
        />
    </Pressable>
  );
}
