import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, Platform, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
export function NotificationsScreen() {
  const router = useRouter();
  const { role } = useLocalSearchParams<{ role?: string }>();
  const insets = useSafeAreaInsets();

  const [toggles, setToggles] = useState({
    newOrder: true,
    payment: true,
    delivery: true,
    price: true,
    buyerRequests: true,
    promotional: false,
    appUpdates: false,
    orderUpdates: true,
    deliveryAlerts: true,
    priceAlerts: true,
    newListings: true,
  });

  const toggleSwitch = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}>
        
        <View style={styles.list}>
          {role === 'buyer' ? (
            <>
              <SettingItem
                title="Order Updates"
                description="Get notified when your order is confirmed, shipped, or delivered."
                value={toggles.orderUpdates}
                onToggle={() => toggleSwitch('orderUpdates')}
              />
              <SettingItem
                title="Delivery Alerts"
                description="Receive updates about delivery progress and arrival times."
                value={toggles.deliveryAlerts}
                onToggle={() => toggleSwitch('deliveryAlerts')}
              />
              <SettingItem
                title="Price Alerts"
                description="Get notified when crop prices change in your area."
                value={toggles.priceAlerts}
                onToggle={() => toggleSwitch('priceAlerts')}
              />
              <SettingItem
                title="New Listings"
                description="Receive alerts when farmers add new crops and products."
                value={toggles.newListings}
                onToggle={() => toggleSwitch('newListings')}
              />
              <SettingItem
                title="Promotional Offers"
                description="Get updates about discounts, deals, and special offers."
                value={toggles.promotional}
                onToggle={() => toggleSwitch('promotional')}
              />
              <SettingItem
                title="App Updates"
                description="New features and improvements"
                value={toggles.appUpdates}
                onToggle={() => toggleSwitch('appUpdates')}
              />
            </>
          ) : (
            <>
              <SettingItem
                title="New Order Alerts"
                description="When a buyer places an order"
                value={toggles.newOrder}
                onToggle={() => toggleSwitch('newOrder')}
              />
              <SettingItem
                title="Payment Received"
                description="When payment is credited"
                value={toggles.payment}
                onToggle={() => toggleSwitch('payment')}
              />
              <SettingItem
                title="Delivery Updates"
                description="Rider pickup & delivery status"
                value={toggles.delivery}
                onToggle={() => toggleSwitch('delivery')}
              />
              <SettingItem
                title="Price Alerts"
                description="When market prices change"
                value={toggles.price}
                onToggle={() => toggleSwitch('price')}
              />
              <SettingItem
                title="New Buyer Requests"
                description="When buyers enquire about crops"
                value={toggles.buyerRequests}
                onToggle={() => toggleSwitch('buyerRequests')}
              />
              <SettingItem
                title="Promotional Offers"
                description="Deals, plans upgrades"
                value={toggles.promotional}
                onToggle={() => toggleSwitch('promotional')}
              />
              <SettingItem
                title="App Updates"
                description="New features and improvements"
                value={toggles.appUpdates}
                onToggle={() => toggleSwitch('appUpdates')}
              />
            </>
          )}
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Notification Channels</Text>
        <View style={styles.list}>
          <ChannelItem title="Push Notification" status="ON" />
          <ChannelItem title="SMS Alerts" status="ON" />
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable style={styles.saveButton} onPress={() => router.back()}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </Pressable>
      </View>
    </View>
  );
}

function SettingItem({ title, description, value, onToggle }: { title: string, description: string, value: boolean, onToggle: () => void }) {
  return (
    <View style={styles.itemBox}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
      <Switch
        trackColor={{ false: '#EBEBEB', true: '#4CAF50' }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#EBEBEB"
        onValueChange={onToggle}
        value={value}
        style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
      />
    </View>
  );
}

function ChannelItem({ title, status }: { title: string, status: string }) {
  return (
    <View style={styles.itemBox}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.statusText}>{status}</Text>
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
  },
  list: {
    gap: s(15),
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingVertical: vs(14),
    paddingHorizontal: s(16),
    minHeight: vs(68),
  },
  itemTextContainer: {
    flex: 1,
    paddingRight: s(16),
    gap: s(4),
  },
  itemTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    color: '#000000',
  },
  itemDescription: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  statusText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#4CAF50',
  },
  divider: {
    height: vs(1),
    backgroundColor: '#EBEBEB',
    marginVertical: vs(24),
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(12),
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: s(20),
    paddingTop: vs(10),
    backgroundColor: '#FAFAF9',
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
