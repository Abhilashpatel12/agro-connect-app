import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter, usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
export function BuyerNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom || vs(8), height: vs(75) + (insets.bottom || vs(8)) }]}>
      <Pressable style={styles.item} onPress={() => router.push('/buyer-home' as any)}>
        <Image source={require('@/assets/images/image 13.svg')} style={{ width: s(28), height: s(28) }} contentFit="contain" />
        <Text style={[styles.text, pathname === '/buyer-home' && styles.activeText]}>Home</Text>
      </Pressable>

      <Pressable style={styles.item} onPress={() => router.push('/buyer-cart' as any)}>
        <Image source={require('@/assets/images/buyer/cart.png')} style={{ width: s(28), height: s(28) }} contentFit="contain" />
        <Text style={[styles.text, pathname === '/buyer-cart' && styles.activeText]}>Cart</Text>
      </Pressable>

      <Pressable style={styles.item} onPress={() => router.push('/buyer-orders' as any)}>
        <Image source={require('@/assets/images/image 85.svg')} style={{ width: s(28), height: s(28) }} contentFit="contain" />
        <Text style={[styles.text, pathname?.startsWith('/buyer-orders') && styles.activeText]}>Orders</Text>
      </Pressable>

      <Pressable style={styles.item} onPress={() => router.push('/buyer-profile' as any)}>
        <Image source={require('@/assets/images/Ellipse 1008.svg')} style={{ width: s(28), height: s(28) }} contentFit="contain" />
        <Text style={[styles.text, pathname?.startsWith('/buyer-profile') && styles.activeText]}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: vs(8),
    paddingHorizontal: s(10),
    backgroundColor: '#FFFFFF',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: s(4),
    gap: s(3),
    backgroundColor: '#FFFFFF',
    borderRadius: s(15),
    flex: 1,
  },
  text: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: '#737373',
  },
  activeText: {
    color: '#4CAF50',
  },
});
