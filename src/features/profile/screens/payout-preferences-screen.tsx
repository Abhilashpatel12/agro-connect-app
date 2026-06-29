import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, TextInput, Platform, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
type PayoutSchedule = 'After Order Delivered' | 'Daily Settlement' | 'Weekly Settlement';

export function PayoutPreferencesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [schedule, setSchedule] = useState<PayoutSchedule>('After Order Delivered');
  const [minPayout, setMinPayout] = useState('500');
  const [gstNumber, setGstNumber] = useState('29ABCDE1234F1Z5');
  const [autoTransfer, setAutoTransfer] = useState(true);

  const schedules: { id: PayoutSchedule, desc: string }[] = [
    { id: 'After Order Delivered', desc: 'Get payment after each order is delivered' },
    { id: 'Daily Settlement', desc: 'Get payment once daily' },
    { id: 'Weekly Settlement', desc: 'Get payment once every week' },
  ];

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Add Payout Preferences</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}>
        
        <View style={styles.scheduleSection}>
          <Text style={styles.sectionTitle}>Payout Schedule</Text>
          
          {schedules.map((item) => (
            <Pressable 
              key={item.id} 
              style={styles.scheduleCard}
              onPress={() => setSchedule(item.id)}
            >
              <View style={[styles.outerCircle, schedule === item.id && styles.outerCircleActive]}>
                {schedule === item.id && <View style={styles.innerCircle} />}
              </View>
              <View style={styles.scheduleInfo}>
                <Text style={styles.scheduleTitle}>{item.id}</Text>
                <Text style={styles.scheduleDesc}>{item.desc}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.divider} />

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Minimum payout amount</Text>
          <View style={styles.amountInputWrapper}>
            <View style={styles.rupeeIcon}>
              <Text style={styles.rupeeSymbol}>₹</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="500"
              placeholderTextColor="#000000"
              value={minPayout}
              onChangeText={setMinPayout}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>GST number</Text>
          <TextInput
            style={styles.input}
            placeholder="29ABCDE1234F1Z5"
            placeholderTextColor="#000000"
            value={gstNumber}
            onChangeText={setGstNumber}
            autoCapitalize="characters"
          />
        </View>

        <View style={styles.autoTransferCard}>
          <View style={styles.autoTransferInfo}>
            <Text style={styles.autoTransferTitle}>Auto Transfer</Text>
            <Text style={styles.autoTransferDesc}>Automatically transfer payment to your bank account</Text>
          </View>
          <Switch
            value={autoTransfer}
            onValueChange={setAutoTransfer}
            trackColor={{ false: '#D9D9D9', true: '#4CAF50' }}
            thumbColor="#FFFFFF"
          />
        </View>

      </ScrollView>

      <View style={[styles.bottomContainer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable 
          style={styles.saveButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.saveButtonText}>Save Payout Preferences</Text>
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
  scheduleSection: {
    gap: s(12),
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(4),
  },
  scheduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    gap: s(16),
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
  scheduleInfo: {
    flex: 1,
    gap: s(2),
  },
  scheduleTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
  scheduleDesc: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  divider: {
    height: vs(1),
    backgroundColor: '#EBEBEB',
    marginVertical: vs(4),
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
  amountInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(8),
  },
  rupeeIcon: {
    width: s(16),
    height: vs(16),
    backgroundColor: '#D9D9D9',
    borderRadius: s(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupeeSymbol: {
    fontSize: ms(10),
    fontWeight: 'bold',
    color: '#000000',
  },
  input: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#000000',
    padding: 0,
    height: vs(24),
    flex: 1,
  },
  autoTransferCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    marginTop: vs(8),
  },
  autoTransferInfo: {
    flex: 1,
    paddingRight: s(16),
    gap: s(4),
  },
  autoTransferTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    color: '#000000',
  },
  autoTransferDesc: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAFAF9',
    paddingTop: vs(10),
    paddingHorizontal: s(20),
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    height: vs(50),
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
  saveButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    color: '#FFFFFF',
  },
});
