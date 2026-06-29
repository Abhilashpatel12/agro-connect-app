import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';

import { s, vs, ms } from '@/utils/scale';
export function BankVerifiedScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.centerContent}>
        <View style={styles.iconContainer}>
          <Image 
            source={require('@/assets/images/Component 22.svg')} 
            style={{ width: 160, height: 160 }} 
            contentFit="contain" 
          />
        </View>

        <Text style={styles.title}>Verified Bank Account</Text>
        <Text style={styles.subtitle}>
          Your bank account is verified{'\n'}successfully
        </Text>
      </View>

      <View style={styles.bottomBar}>
        <Pressable
          style={[styles.button, styles.goBackButton]}
          onPress={() => router.replace('/profile/payment-methods')}
        >
          <Text style={styles.goBackText}>Go Back</Text>
        </Pressable>
        <Pressable 
          style={[styles.button, styles.addUpiButton]}
          onPress={() => router.push('/profile/add-upi')}
        >
          <Text style={styles.addUpiText}>Add UPI</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: s(30),
  },
  iconContainer: {
    marginBottom: vs(40),
  },
  title: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(30),
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: vs(10),
  },
  subtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#525252',
    textAlign: 'center',
    lineHeight: ms(24),
  },
  bottomBar: {
    paddingHorizontal: s(20),
    paddingBottom: vs(40),
    gap: s(15),
  },
  button: {
    borderRadius: s(14),
    height: vs(55),
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.12)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(76, 175, 80, 0.12)' as any,
      },
    }),
  },
  goBackButton: {
    backgroundColor: '#4CAF50',
  },
  goBackText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    color: '#FFFFFF',
  },
  addUpiButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#4CAF50',
  },
  addUpiText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    color: '#000000',
  },
});
