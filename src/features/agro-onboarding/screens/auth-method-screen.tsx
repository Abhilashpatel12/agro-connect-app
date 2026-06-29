import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

import { onboardingStyles as styles } from '../styles';

type AuthMethodScreenProps = {
  onLogin: () => void;
  onSignUp: () => void;
};

export function AuthMethodScreen({ onLogin, onSignUp }: AuthMethodScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.authBgContainer}>
        {/* We use a fallback if the image is missing from assets */}
        <Image
          source={require('@/assets/images/image copy.png')}
          style={styles.authBgImage}
          contentFit="cover"
        />
      </View>

      <View style={styles.authTopSection}>
        <Text style={styles.authBrandTitle}>Argo Connect</Text>
        <Text style={styles.authBrandSubtitle}>Bridging the gap between{'\n'}soil and plate</Text>
      </View>

      <View style={styles.authBottomSheet}>
        <Text style={styles.authWelcomeTitle}>Welcome</Text>
        <Text style={styles.authWelcomeSubtitle}>Choose an option to continue</Text>

        <Pressable
          style={({ pressed }) => [styles.authCard, pressed && styles.pressed]}
          onPress={onLogin}
        >
          <View style={styles.authCardIconBox}>
            <Ionicons name="log-in-outline" size={20} color="#4CAF50" />
          </View>
          <View style={styles.authCardTextContent}>
            <Text style={styles.authCardTitle}>Login</Text>
            <Text style={styles.authCardSubtitle}>Already have an account? Login to continue</Text>
          </View>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.authCard, pressed && styles.pressed]}
          onPress={onSignUp}
        >
          <View style={styles.authCardIconBox}>
            <Ionicons name="person-add-outline" size={20} color="#4CAF50" />
          </View>
          <View style={styles.authCardTextContent}>
            <Text style={styles.authCardTitle}>Sign Up</Text>
            <Text style={styles.authCardSubtitle}>New to Argo connect? Create your account</Text>
          </View>
        </Pressable>

        <View style={styles.authSecurityBanner}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#4CAF50" />
          <Text style={styles.authSecurityText}>Your data is safe with us</Text>
        </View>

        <View style={styles.authHelpTextContainer}>
          <Text style={styles.authHelpText}>Need help? </Text>
          <Text style={styles.authHelpTextLink}>Contact support</Text>
        </View>
      </View>
    </View>
  );
}
