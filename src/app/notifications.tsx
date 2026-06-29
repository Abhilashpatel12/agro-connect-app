import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
interface NotificationItem {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  unread: boolean;
}

const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: '1',
    title: 'Orders Confirmed',
    subtitle: 'Your order for 5kg Fresh Tomato has been confirmed.',
    time: '15 min ago',
    unread: true,
  },
  {
    id: '2',
    title: 'Payment Successful',
    subtitle: '₹170 payment received for Order #KM-2026-0381.',
    time: '15 min ago',
    unread: true,
  },
  {
    id: '3',
    title: 'Order Shipped',
    subtitle: 'Your Fresh Tomato order is on the way.',
    time: '3hrs ago',
    unread: false,
  },
  {
    id: '4',
    title: 'Out for Delivery',
    subtitle: 'Your order will arrive between 10:30 AM - 6:00 PM.',
    time: '2days ago',
    unread: false,
  },
  {
    id: '5',
    title: 'Order Delivered',
    subtitle: 'Your order has been delivered successfully.',
    time: '2days ago',
    unread: false,
  },
  {
    id: '6',
    title: 'Refund Processed',
    subtitle: '₹120 has been refunded to your account.',
    time: '2days ago',
    unread: false,
  },
  {
    id: '7',
    title: 'Order Delivered',
    subtitle: 'Your order has been delivered successfully.',
    time: '2days ago',
    unread: false,
  },
  {
    id: '8',
    title: 'Order Delivered',
    subtitle: 'Your order has been delivered successfully.',
    time: '2days ago',
    unread: false,
  },
  {
    id: '9',
    title: 'Order Delivered',
    subtitle: 'Your order has been delivered successfully.',
    time: '2days ago',
    unread: false,
  },
];

export default function NotificationsRoute() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 40 },
        ]}>
        
        <View style={styles.list}>
          {NOTIFICATIONS_DATA.map((item) => (
            <View
              key={item.id}
              style={[
                styles.itemBox,
                item.unread ? styles.itemUnread : styles.itemRead,
              ]}>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
              </View>
              <Text style={styles.itemTime}>{item.time}</Text>
            </View>
          ))}
        </View>
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
    paddingHorizontal: s(20),
    paddingBottom: vs(20),
    gap: s(16),
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
  },
  list: {
    gap: s(15),
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: s(14),
    borderWidth: 1.5,
    paddingVertical: vs(14),
    paddingHorizontal: s(16),
    minHeight: vs(68),
  },
  itemUnread: {
    borderColor: '#4CAF50',
  },
  itemRead: {
    borderColor: '#EBEBEB',
  },
  itemTextContainer: {
    flex: 1,
    paddingRight: s(8),
    gap: s(4),
  },
  itemTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    color: '#000000',
  },
  itemSubtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    lineHeight: ms(18),
  },
  itemTime: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(12),
    color: '#898989',
    textAlign: 'right',
  },
});
