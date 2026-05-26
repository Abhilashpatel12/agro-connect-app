import { Pressable, Text, View } from 'react-native';

import { roles } from '../constants';
import { PrimaryButton } from '../components/primary-button';
import { RoleArt } from '../components/role-art';
import { onboardingStyles as styles } from '../styles';

type RoleScreenProps = {
  onNext: () => void;
};

export function RoleScreen({ onNext }: RoleScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.tintHeader} />
      <View style={styles.copyBlock}>
        <Text style={styles.title}>Agro Connect</Text>
        <Text style={styles.subcopy}>Who are you? Select your role to continue</Text>
      </View>

      <View style={styles.roleGrid}>
        {roles.map((role, index) => (
          <Pressable
            key={`${role.label}-${index}`}
            onPress={onNext}
            style={({ pressed }) => [styles.roleCard, pressed && styles.pressed]}>
            <RoleArt role={role} />
            <Text style={styles.roleLabel}>{role.label}</Text>
            <Text style={styles.roleCaption}>{role.caption}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.footer}>
        <PrimaryButton label="Continue as Buyer" onPress={onNext} />
      </View>
    </View>
  );
}
