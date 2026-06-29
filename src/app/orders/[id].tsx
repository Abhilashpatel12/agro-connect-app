import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

import { styles } from './_styles';

// Dummy data for order details mapping from order id
const ORDER_DETAILS_DATA: Record<string, any> = {
  'new-1': {
    name: 'Raj Traders',
    location: 'Hyderabad, Telangana',
    time: '15 min ago',
    avatar: require('@/assets/orders_assests/image_113_610_631.png'),
    summary: { crop: 'Fresh Tomato', qty: '5 kg', price: 24, harvestDate: '28 Mar 2026', quality: 'Grade A · Premium', location: 'Hyderabad, TG', total: 120 },
    status: 'new'
  },
  'new-2': {
    name: 'Food Mart',
    location: 'Hyderabad, Telangana',
    time: '15 min ago',
    avatar: require('@/assets/orders_assests/image_113_612_651.png'),
    summary: { crop: 'Rice', qty: '15 kg', price: 12, harvestDate: '28 Mar 2026', quality: 'Grade A · Premium', location: 'Hyderabad, TG', total: 180 },
    status: 'new'
  },
  'new-3': {
    name: 'Rakesh',
    location: 'Hyderabad, Telangana',
    time: '15 min ago',
    avatar: require('@/assets/orders_assests/image_113_613_944.png'),
    summary: { crop: 'Onion', qty: '50 kg', price: 10, harvestDate: '28 Mar 2026', quality: 'Grade A · Premium', location: 'Hyderabad, TG', total: 500 },
    status: 'new'
  },
  'active-1': {
    name: 'Raj Traders',
    location: 'Hyderabad, Telangana',
    time: 'Ready to Pickup',
    avatar: require('@/assets/orders_assests/image_113_610_631.png'),
    summary: { crop: 'Fresh Tomato', qty: '5 kg', price: 24, harvestDate: '28 Mar 2026', quality: 'Grade A · Premium', location: 'Hyderabad, TG', total: 120 },
    status: 'active'
  },
  'active-2': {
    name: 'Food Mart',
    location: 'Hyderabad, Telangana',
    time: 'In Transit',
    avatar: require('@/assets/orders_assests/image_113_612_651.png'),
    summary: { crop: 'Rice', qty: '15 kg', price: 12, harvestDate: '28 Mar 2026', quality: 'Grade A · Premium', location: 'Hyderabad, TG', total: 180 },
    status: 'active'
  },
  'completed-1': {
    name: 'Raj Traders',
    location: 'Hyderabad, Telangana',
    time: 'Completed',
    avatar: require('@/assets/orders_assests/image_113_610_631.png'),
    summary: { crop: 'Fresh Tomato', qty: '5 kg', price: 24, harvestDate: '28 Mar 2026', quality: 'Grade A · Premium', location: 'Hyderabad, TG', total: 120 },
    status: 'completed',
    completedOn: '20 Mar, 4:30 PM',
  },
  'completed-2': {
    name: 'Food Mart',
    location: 'Hyderabad, Telangana',
    time: 'Cancelled',
    avatar: require('@/assets/orders_assests/image_113_612_651.png'),
    summary: { crop: 'Rice', qty: '15 kg', price: 12, harvestDate: '28 Mar 2026', quality: 'Grade A · Premium', location: 'Hyderabad, TG', total: 180 },
    status: 'cancelled'
  }
};

export default function OrderDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Default fallback data if ID is not found in dummy record
  const order = ORDER_DETAILS_DATA[id] || ORDER_DETAILS_DATA['new-1'];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Orders Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.detailsContainer} showsVerticalScrollIndicator={false}>
        
        {order.status === 'completed' && (
          <View style={styles.bannerCompleted}>
            <Text style={styles.bannerText}>Order Completed Successfully</Text>
          </View>
        )}

        {order.status === 'cancelled' && (
          <View style={styles.bannerCancelled}>
            <Text style={styles.bannerText}>Order Cancelled</Text>
          </View>
        )}

        <View style={styles.customerCard}>
          <Image source={order.avatar} style={styles.avatar} contentFit="cover" />
          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>{order.name}</Text>
            <Text style={styles.customerLocation}>{order.location}</Text>
          </View>
          <View style={styles.orderMeta}>
            <Text style={styles.orderTime}>{order.time}</Text>
          </View>
        </View>


        <View style={styles.summaryContainer}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>Order Summary</Text>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Crop:</Text>
              <Text style={styles.summaryValue}>{order.summary.crop}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Quantity:</Text>
              <Text style={styles.summaryValue}>{order.summary.qty}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Price per kg:</Text>
              <Text style={styles.summaryValue}>₹ {order.summary.price}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Harvest Date:</Text>
              <Text style={styles.summaryValue}>{order.summary.harvestDate}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Quality:</Text>
              <Text style={styles.summaryValue}>{order.summary.quality}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Location:</Text>
              <Text style={styles.summaryValue}>{order.summary.location}</Text>
            </View>
          </View>

          {order.status === 'completed' ? (
            <View style={styles.totalBoxCompleted}>
              <View style={styles.totalRowCompleted}>
                <Text style={styles.totalLabelCompleted}>Total Earned:</Text>
                <Text style={styles.totalValueCompleted}>₹ {order.summary.total.toLocaleString()}</Text>
              </View>
              <Text style={styles.completedOnText}>Completed on: {order.completedOn}</Text>
            </View>
          ) : (
            <View style={styles.totalBox}>
              <Text style={styles.totalLabel}>Total Value:</Text>
              <Text style={styles.totalValue}>₹ {order.summary.total.toLocaleString()}</Text>
            </View>
          )}
        </View>

      </ScrollView>

      {/* Fixed Action Buttons at the Bottom */}
      <View style={styles.fixedBottomBar}>
        {order.status === 'new' && (
          <View style={styles.actionButtons}>
            <Pressable style={styles.btnReject} onPress={() => router.back()}>
              <Ionicons name="close" size={20} color="#000000" />
              <Text style={styles.btnRejectText}>Reject</Text>
            </Pressable>
            <Pressable style={styles.btnAccept} onPress={() => router.push({
                pathname: '/orders/accepted',
                params: {
                  name: order.name,
                  crop: order.summary.crop,
                  qty: order.summary.qty,
                  total: order.summary.total
                }
              })}>
              <Ionicons name="checkmark" size={20} color="#FFFFFF" />
              <Text style={styles.btnAcceptText}>Accept</Text>
            </Pressable>
          </View>
        )}

        {order.status === 'active' && (
          <Pressable style={styles.trackBtn} onPress={() => router.push('/orders/track')}>
            <Text style={styles.trackBtnText}>Track Order</Text>
            <Ionicons name="location-outline" size={20} color="#FFFFFF" />
          </Pressable>
        )}
      </View>
    </View>
  );
}
