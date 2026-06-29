import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
export function ContactSupportScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Contact support</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 40 },
        ]}>
        
        <View style={styles.supportStatusCard}>
          <View style={styles.supportStatusInfo}>
            <Text style={styles.supportStatusTitle}>Contact support</Text>
            <Text style={styles.supportStatusTime}>Mon – Sat, 9 AM to 6 PM</Text>
          </View>
          <Text style={styles.onlineStatusText}>Online</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Contact us</Text>

        <Pressable style={styles.contactCard}>
          <View style={styles.iconBox}>
            <Ionicons name="call" size={20} color="#4CAF50" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Call Us (Toll Free)</Text>
            <Text style={styles.contactSubtitle}>1800-XXX-XXXX</Text>
          </View>
        </Pressable>

        <Pressable style={styles.contactCard}>
          <View style={styles.iconBox}>
            <Ionicons name="logo-whatsapp" size={20} color="#4CAF50" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>WhatsApp Support</Text>
            <Text style={styles.contactSubtitle}>91+ 00000 00000</Text>
          </View>
        </Pressable>

      </ScrollView>
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
  supportStatusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
  },
  supportStatusInfo: {
    gap: s(4),
  },
  supportStatusTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
  supportStatusTime: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  onlineStatusText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#4CAF50',
  },
  divider: {
    height: vs(1),
    backgroundColor: '#EBEBEB',
    marginVertical: vs(4),
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(4),
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    gap: s(12),
  },
  iconBox: {
    width: s(45),
    height: vs(42),
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    borderRadius: s(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactInfo: {
    gap: s(4),
  },
  contactTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
  contactSubtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
});
