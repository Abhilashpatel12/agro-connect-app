import { Image } from 'expo-image';
import { View } from 'react-native';

import { onboardingStyles as styles } from '../styles';
import type { Role } from '../types';

type RoleArtProps = {
  role: Role;
};

export function RoleArt({ role }: RoleArtProps) {
  return (
    <View style={[styles.roleImageWrap, { backgroundColor: role.tint }]}>
      <Image contentFit="cover" source={role.source} style={styles.roleImage} />
    </View>
  );
}
