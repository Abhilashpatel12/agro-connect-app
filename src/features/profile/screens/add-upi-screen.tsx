import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, TextInput, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
export function AddUpiScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [upiId, setUpiId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [status, setStatus] = useState<'Active' | 'Inactive'>('Active');

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Add UPI Details</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>UPI ID</Text>
          <TextInput
            style={styles.input}
            placeholder="harish@ybl"
            placeholderTextColor="#000000"
            value={upiId}
            onChangeText={setUpiId}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Linked mobile number</Text>
          <TextInput
            style={styles.input}
            placeholder="00000 00000"
            placeholderTextColor="#000000"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.statusDivider} />

        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Status</Text>
          <View style={styles.radioGroup}>
            <Pressable style={styles.radioOption} onPress={() => setStatus('Active')}>
              <View style={[styles.outerCircle, status === 'Active' && styles.outerCircleActive]}>
                {status === 'Active' && <View style={styles.innerCircle} />}
              </View>
              <Text style={styles.radioText}>Active</Text>
            </Pressable>
            
            <Pressable style={styles.radioOption} onPress={() => setStatus('Inactive')}>
              <View style={[styles.outerCircle, status === 'Inactive' && styles.outerCircleActive]}>
                {status === 'Inactive' && <View style={styles.innerCircle} />}
              </View>
              <Text style={styles.radioText}>Inactive</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomContainer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable 
          style={styles.verifyButton} 
          onPress={() => router.push('/profile/upi-verified')}
        >
          <Text style={styles.verifyButtonText}>Verify UPI ID</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingBottom: vs(20),
    zIndex: 10,
  },
  backButton: {
    width: s(48),
    height: vs(48),
    backgroundColor: '#4CAF50',
    borderRadius: s(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(18),
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: s(20),
    paddingTop: vs(10),
    gap: s(16),
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingHorizontal: s(20),
    paddingVertical: vs(12),
  },
  inputLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    marginBottom: vs(4),
  },
  input: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#000000',
    padding: 0,
    height: vs(24),
  },
  statusContainer: {
    marginTop: vs(8),
    gap: s(12),
  },
  statusTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
  },
  radioGroup: {
    flexDirection: 'row',
    gap: s(59),
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  outerCircle: {
    width: s(16),
    height: vs(16),
    borderRadius: s(8),
    borderWidth: 1.8,
    borderColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  outerCircleActive: {
    borderColor: '#4CAF50',
  },
  innerCircle: {
    width: s(8),
    height: vs(8),
    borderRadius: s(4),
    backgroundColor: '#4CAF50',
  },
  radioText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAFAF9',
    paddingTop: vs(10),
  },
  statusDivider: {
    height: vs(1),
    backgroundColor: '#EBEBEB',
    marginTop: vs(8),
    marginBottom: vs(16),
  },
  verifyButton: {
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    height: vs(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: s(20),
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
  verifyButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    color: '#FFFFFF',
  },
});
