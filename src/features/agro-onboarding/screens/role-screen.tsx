import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { PrimaryButton } from '../components/primary-button';
import { roles } from '../constants';
import { onboardingStyles as styles } from '../styles';
import type { Role } from '../types';

type RoleScreenProps = {
  onNext: (role: string) => void;
};

export function RoleScreen({ onNext }: RoleScreenProps) {
  const [selectedRole, setSelectedRole] = React.useState<Role>(roles[0]);

  return (
    <View style={styles.screen}>
      <View style={styles.roleBgContainer}>
        <Image
          source={require('@/assets/images/image 140.png')}
          style={styles.roleBgImage}
          contentFit="cover"
          contentPosition="bottom"
        />
        <LinearGradient
          colors={[
            'rgba(250, 250, 249, 0)',
            'rgba(250, 250, 249, 0.8)',
            'rgba(250, 250, 249, 1)',
            'rgba(250, 250, 249, 1)',
          ]}
          locations={[0, 0.0885, 0.15, 1]}
          style={styles.roleBgGradient}
        />
      </View>

      <ScrollView
        style={styles.roleScrollContent}
        contentContainerStyle={styles.roleScrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.roleTopSection}>
          <View style={styles.roleHeaderContainer}>
            <Text style={styles.roleWelcomeText}>Welcome to</Text>
            <Text style={styles.roleBrandText}>Agro Connect</Text>
          </View>
          <View style={styles.roleTitleContainer}>
            <Text style={styles.roleTitle}>Choose your role</Text>
            <Text style={styles.roleSubtitle}>Select how you want to join{'\n'}Agro connect</Text>
          </View>
        </View>

        <View style={styles.roleList}>
          {roles.map((role, index) => {
            const isSelected = selectedRole.label === role.label;
            return (
              <Pressable
                key={`${role.label}-${index}`}
                onPress={() => setSelectedRole(role)}
                style={({ pressed }) => [
                  styles.roleListCard,
                  isSelected && styles.roleListCardSelected,
                  pressed && styles.pressed,
                ]}>
                <Image source={role.source} style={styles.roleListImage} contentFit="cover" />
                <View style={styles.roleListTextContent}>
                  <Text style={styles.roleListLabel}>{role.label}</Text>
                  <Text style={styles.roleListCaption}>{role.caption}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.roleActionContainer}>
          <PrimaryButton
            label={`Continue as ${selectedRole.label.toLowerCase()}`}
            onPress={() => onNext(selectedRole.label)}
          />
        </View>
      </ScrollView>
    </View>
  );
}
