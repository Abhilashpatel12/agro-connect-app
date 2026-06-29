import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { profileStyles as styles } from '../../styles';
import { ProfileHeader } from '../common/ProfileHeader';
import { ProfileMenu } from '../common/ProfileMenu';
import { BUYER_PROFILE_SECTIONS } from '../../profile-data';

export function BuyerProfile() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['rgba(76, 175, 80, 0.5)', 'rgba(166, 215, 168, 0.5)', 'rgba(235, 235, 235, 0)']}
        locations={[0, 0.4928, 0.9856]}
        style={{ position: 'absolute', width: '100%', height: 200, left: 0, top: 0 }}
      />
      <ScrollView
        bounces={false}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingTop: Math.max(insets.top, 40) }]}
      >
        <ProfileHeader 
          name="Kiran" 
          location="📍 Hyderabad, Telangana" 
          memberSince="Member Since: Mar 2026" 
          role="buyer"
        />
        
        <ProfileMenu sections={BUYER_PROFILE_SECTIONS} />
      </ScrollView>
    </View>
  );
}
