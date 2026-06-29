import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
/* ─── Badge icon (Component 22) built in RN ─── */
function OrderBadge() {
  return (
    <View style={badge.outer}>
      {/* The 12-pointed green seal ring rendered via border tricks */}
      <View style={badge.circle}>
        <Ionicons name="checkmark" size={56} color="#FFFFFF" />
      </View>
    </View>
  );
}

const badge = StyleSheet.create({
  outer: {
    width: s(160),
    height: vs(160),
    backgroundColor: '#377D3A',
    borderRadius: s(20),
    // Simulate the seal/badge scalloped shape using border-radius + rotation
    transform: [{ rotate: '22.5deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    // Extra shadow to match depth
    ...Platform.select({
      ios: {
        shadowColor: '#377D3A',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: { elevation: 8 },
    }),
  },
  circle: {
    width: s(104),
    height: vs(104),
    borderRadius: s(52),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-22.5deg' }],
  },
});

/* ─── Main screen ─── */
export function OrderSuccessScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: Math.max(insets.top, 40) }]}>
      {/* ── Badge ── */}
      <View style={styles.badgeWrap}>
        <OrderBadge />
      </View>

      {/* ── Text block ── */}
      <View style={styles.textBlock}>
        <Text style={styles.title}>Order Placed</Text>
        <Text style={styles.subtitle}>
          Thank you for shopping with Agro connect
        </Text>
      </View>

      {/* ── Order details card ── */}
      <View style={styles.detailsCard}>
        {/* Order ID */}
        <View style={styles.orderIdBlock}>
          <Text style={styles.detailLabel}>Order ID</Text>
          <Text style={styles.detailValue}>#KM-2026-0381</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Estimated Delivery */}
        <View style={styles.deliveryBlock}>
          <Text style={styles.deliveryText}>
            Estimated Delivery:{'\n'}5th May 10:00 AM - 6 PM
          </Text>
        </View>
      </View>

      {/* ── Track Order button (green fill) ── */}
      <Pressable
        style={[styles.btn, styles.btnFill]}
        onPress={() => router.push('/orders/track')}
      >
        <Text style={styles.btnFillText}>Track Order</Text>
      </Pressable>

      {/* ── Continue Shopping button (green outline) ── */}
      <Pressable
        style={[styles.btn, styles.btnOutline]}
        onPress={() => router.push('/buyer-home')}
      >
        <Text style={styles.btnOutlineText}>Continue Shopping</Text>
      </Pressable>

      {/* bottom safe space */}
      <View style={{ height: Math.max(insets.bottom, 20) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
    alignItems: 'center',
    paddingHorizontal: s(20),
  },

  /* ── Badge ── */
  badgeWrap: {
    marginTop: vs(60),
    marginBottom: vs(55),
  },

  /* ── Text block ── */
  textBlock: {
    alignItems: 'center',
    gap: s(10),
    marginBottom: vs(40),
  },
  title: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(30),
    lineHeight: ms(39),
    color: '#377D3A',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: '#525252',
    textAlign: 'center',
    maxWidth: s(295),
  },

  /* ── Details card ── */
  detailsCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingHorizontal: s(25),
    paddingVertical: vs(25),
    alignItems: 'center',
    gap: s(20),
    marginBottom: vs(48),
  },
  orderIdBlock: {
    alignItems: 'center',
    gap: s(6),
  },
  detailLabel: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: '#898989',
    textAlign: 'center',
  },
  detailValue: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: '#000000',
  },
  divider: {
    width: '100%',
    height: vs(1),
    backgroundColor: '#CECFCE',
  },
  deliveryBlock: {
    alignItems: 'center',
  },
  deliveryText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: '#898989',
    textAlign: 'center',
  },

  /* ── Buttons ── */
  btn: {
    width: '100%',
    height: vs(55),
    borderRadius: s(14),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: vs(10),
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.12)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: { elevation: 2 },
    }),
  },
  btnFill: {
    backgroundColor: '#4CAF50',
  },
  btnFillText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    lineHeight: ms(20),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  btnOutline: {
    backgroundColor: '#FAFAF9',
    borderWidth: 1.5,
    borderColor: '#4CAF50',
  },
  btnOutlineText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    lineHeight: ms(20),
    color: '#000000',
    textAlign: 'center',
  },
});
