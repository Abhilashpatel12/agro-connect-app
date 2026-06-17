import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
    title: 'New Order from Raj Traders',
    subtitle: '200kg Tomato 5,000',
    time: '15 min ago',
    unread: true,
  },
  {
    id: '2',
    title: 'Payment Received',
    subtitle: '16000 credited for rice order KM-2026-0381',
    time: '15 min ago',
    unread: true,
  },
  {
    id: '3',
    title: 'Driver Assigned',
    subtitle: 'Kumar delivery will pick up your onion order at 3PM',
    time: '3hrs ago',
    unread: false,
  },
  {
    id: '4',
    title: 'Price Alert: Tomato',
    subtitle: 'Market rate rose to 28/kg in your region',
    time: '2days ago',
    unread: false,
  },
  {
    id: '5',
    title: 'Price Alert: Tomato',
    subtitle: 'Market rate rose to 28/kg in your region',
    time: '2days ago',
    unread: false,
  },
  {
    id: '6',
    title: 'Price Alert: Tomato',
    subtitle: 'Market rate rose to 28/kg in your region',
    time: '2days ago',
    unread: false,
  },
  {
    id: '7',
    title: 'Price Alert: Tomato',
    subtitle: 'Market rate rose to 28/kg in your region',
    time: '2days ago',
    unread: false,
  },
  {
    id: '8',
    title: 'Price Alert: Tomato',
    subtitle: 'Market rate rose to 28/kg in your region',
    time: '2days ago',
    unread: false,
  },
  {
    id: '9',
    title: 'Price Alert: Tomato',
    subtitle: 'Market rate rose to 28/kg in your region',
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
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  list: {
    gap: 15,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1.5,
    paddingVertical: 14,
    paddingHorizontal: 16,
    minHeight: 68,
  },
  itemUnread: {
    borderColor: '#4CAF50',
  },
  itemRead: {
    borderColor: '#EBEBEB',
  },
  itemTextContainer: {
    flex: 1,
    paddingRight: 8,
    gap: 4,
  },
  itemTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 14,
    color: '#000000',
  },
  itemSubtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
    lineHeight: 18,
  },
  itemTime: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    color: '#898989',
    textAlign: 'right',
  },
});
