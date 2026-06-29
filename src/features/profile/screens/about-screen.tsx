import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
export function AboutScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const appInfo = [
    { label: 'Version', value: '2.1.0 (Build 210)' },
    { label: 'Last Updated', value: '1 May 2026' },
    { label: 'Platform', value: 'Android 8.0+' },
    { label: 'App Size', value: '18.4 MB' },
    { label: 'Developer', value: 'AgroConnect Pvt Ltd' },
    { label: 'CIN', value: 'U01112TG2023PTC123456' },
  ];

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>About AgroConnect</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}
      >
        <View style={styles.topCard}>
          <View style={styles.logoPlaceholder} />
          <View style={styles.titleContainer}>
            <Text style={styles.appName}>AgroConnect</Text>
            <Text style={styles.appSubtitle}>Connecting farmers directly to buyers</Text>
          </View>
          <View style={styles.versionBadge}>
            <Text style={styles.versionText}>Version 2.1.0</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>App Information</Text>
          
          <View style={styles.infoList}>
            {appInfo.map((info, index) => (
              <View key={index} style={styles.infoRow}>
                <Text style={styles.infoLabel}>{info.label}</Text>
                <Text style={styles.infoValue}>{info.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.missionCard}>
            <Text style={styles.missionTitle}>Our Mission</Text>
            <Text style={styles.missionText}>
              AgroConnect empowers Indian farmers by giving them direct access to buyers, fair prices, and reliable delivery no middlemen.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Text style={styles.footerText}>2026 AgroConnect Pvt Ltd</Text>
        <Text style={styles.footerText}>Made with ❤️ for Indian Farmers</Text>
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
    gap: s(25),
  },
  topCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(15),
    paddingVertical: vs(25),
    paddingHorizontal: s(10),
    alignItems: 'center',
    gap: s(20),
  },
  logoPlaceholder: {
    width: s(100),
    height: vs(100),
    backgroundColor: '#D9D9D9',
    borderRadius: s(50),
  },
  titleContainer: {
    alignItems: 'center',
    gap: s(6),
  },
  appName: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(18),
    color: '#000000',
  },
  appSubtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    textAlign: 'center',
  },
  versionBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    paddingVertical: vs(8),
    paddingHorizontal: s(16),
    borderRadius: s(25),
  },
  versionText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#4CAF50',
  },
  infoSection: {
    gap: s(12),
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(4),
  },
  infoList: {
    gap: s(12),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(18),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.8,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
  },
  infoLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  infoValue: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
  missionCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.8,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    gap: s(8),
    marginTop: vs(8),
  },
  missionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    color: '#000000',
  },
  missionText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    lineHeight: ms(22),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: vs(10),
    backgroundColor: '#FAFAF9',
    gap: s(4),
  },
  footerText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(12),
    color: '#8C8C8C',
  },
});
