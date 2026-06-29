import React from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

import { s, vs, ms } from '@/utils/scale';
export default function OrderAcceptedScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ name: string, crop: string, qty: string, total: string }>();

  // Extract params with fallback defaults
  const name = params.name || 'Raj Traders';
  const crop = params.crop || 'Tomato';
  const qty = params.qty || '500 kg';
  const total = params.total ? Number(params.total).toLocaleString() : '12,500';

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.centerBox}>
          
          {/* Handshake Graphic */}
          <View style={styles.graphicContainer}>
            <Image source={require('@/assets/images/Component 34.svg')} style={{ width: 160, height: 160 }} contentFit="contain" />
          </View>

          <Text style={styles.title}>Order Accepted</Text>
          <Text style={styles.subtitle}>from {name} · {qty} {crop}</Text>

          {/* Earnings Card */}
          <View style={styles.earningsCard}>
            <Text style={styles.earningsLabel}>Total you earned:</Text>
            <Text style={styles.earningsAmount}>₹ {total}</Text>
          </View>

        </View>

        {/* Go Home Button */}
        <Pressable style={styles.homeButton} onPress={() => router.push('/orders')}>
          <View style={styles.homeButtonInner}>
            <Image source={require('@/assets/images/image 13.svg')} style={styles.homeIcon} contentFit="contain" />
            <Text style={styles.homeButtonText}>Go Home</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: s(20),
    justifyContent: 'space-between',
    paddingBottom: vs(40),
    paddingTop: vs(80),
  },
  centerBox: {
    alignItems: 'center',
    marginTop: vs(40),
  },
  graphicContainer: {
    width: s(160),
    height: vs(160),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vs(30),
  },
  title: {
    fontFamily: 'DMSans_700Bold', // Or 600 if available
    fontWeight: '600',
    fontSize: ms(32),
    color: '#4CAF50',
    marginBottom: vs(10),
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#525252',
    textAlign: 'center',
    marginBottom: vs(40),
  },
  earningsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: s(12),
    width: '100%',
    maxWidth: s(372),
    paddingVertical: vs(14),
    gap: s(8),
  },
  earningsLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#FFFFFF',
  },
  earningsAmount: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#FFFFFF',
  },
  homeButton: {
    width: '100%',
    alignSelf: 'center',
    maxWidth: s(372),
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
    paddingVertical: vs(16),
  },
  homeButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s(10),
  },
  homeIcon: {
    width: s(20), // Adjusted from 28 to look proportionate with text
    height: vs(20),
  },
  homeButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
