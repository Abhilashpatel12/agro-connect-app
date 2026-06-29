import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { profileStyles as styles } from '../../styles';

const AVATAR = require('@/assets/profile_assests/Ellipse 1008.png');

interface ProfileHeaderProps {
  name: string;
  location: string;
  memberSince: string;
  role?: 'buyer' | 'seller';
}

export function ProfileHeader({ name, location, memberSince, role }: ProfileHeaderProps) {
  const router = useRouter();

  return (
    <>
      <View style={styles.profileHeader}>
        <View style={styles.avatarWrap}>
          <Image source={AVATAR} style={styles.avatar} contentFit="cover" />
        </View>
        <View style={styles.farmerInfoBlock}>
          <View style={styles.farmerNameBlock}>
            <Text selectable style={styles.farmerName}>{name}</Text>
            <Text selectable style={styles.farmerMeta}>{location}</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#898989', marginTop: 4 }}>
              {memberSince}
            </Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.editButton} onPress={() => router.push({ pathname: '/profile/edit', params: { role } } as any)}>
        <Ionicons name="create-outline" size={20} color="#FFFFFF" />
        <Text style={styles.editButtonText}>Edit</Text>
      </Pressable>
    </>
  );
}
