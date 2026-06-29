import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

import { styles } from './_styles';

type OrderTab = 'New' | 'Active' | 'Completed';

type OrderItem = {
  id: string;
  customerName: string;
  cropName: string;
  weight: string;
  location: string;
  distance: string;
  price: string;
  statusText: string;
  statusVariant: 'new' | 'active' | 'completed' | 'cancelled';
  orderId?: string;
  avatar: any;
};

const ORDERS_BY_TAB: Record<OrderTab, OrderItem[]> = {
  New: [
    {
      id: 'new-1',
      customerName: 'Raj Traders',
      cropName: 'Fresh Tomato',
      weight: '5kg',
      location: 'Hyderabad',
      distance: '10km',
      price: '120',
      statusText: '15 min ago',
      statusVariant: 'new',
      avatar: require('@/assets/orders_assests/image_113_610_631.png'),
    },
    {
      id: 'new-2',
      customerName: 'Food Mart',
      cropName: 'Rice',
      weight: '15kg',
      location: 'Hyderabad',
      distance: '15km',
      price: '180',
      statusText: '15 min ago',
      statusVariant: 'new',
      avatar: require('@/assets/orders_assests/image_113_612_651.png'), // using a placeholder name or similar from previous
    },
    {
      id: 'new-3',
      customerName: 'Rakesh',
      cropName: 'Onion',
      weight: '50kg',
      location: 'Hyderabad',
      distance: '20km',
      price: '500',
      statusText: '15 min ago',
      statusVariant: 'new',
      avatar: require('@/assets/orders_assests/image_113_613_944.png'), // placeholder name
    },
  ],
  Active: [
    {
      id: 'active-1',
      customerName: 'Raj Traders',
      cropName: 'Fresh Tomato',
      weight: '5kg',
      location: 'Hyderabad',
      distance: '10km',
      price: '120',
      statusText: 'Order Confirmed',
      statusVariant: 'active',
      orderId: '#KM-2026-0381',
      avatar: require('@/assets/orders_assests/image_113_610_631.png'),
    },
    {
      id: 'active-2',
      customerName: 'Food Mart',
      cropName: 'Rice',
      weight: '15kg',
      location: 'Hyderabad',
      distance: '15km',
      price: '180',
      statusText: 'In Transit',
      statusVariant: 'active',
      orderId: '#KM-2026-0381',
      avatar: require('@/assets/orders_assests/image_113_612_651.png'),
    },
  ],
  Completed: [
    {
      id: 'completed-1',
      customerName: 'Raj Traders',
      cropName: 'Fresh Tomato',
      weight: '5kg',
      location: 'Hyderabad',
      distance: '10km',
      price: '120',
      statusText: 'Delivered',
      statusVariant: 'completed',
      orderId: '#KM-2026-0381',
      avatar: require('@/assets/orders_assests/image_113_610_631.png'),
    },
    {
      id: 'completed-2',
      customerName: 'Food Mart',
      cropName: 'Rice',
      weight: '15kg',
      location: 'Hyderabad',
      distance: '15km',
      price: '180',
      statusText: 'Cancelled',
      statusVariant: 'cancelled',
      orderId: '#KM-2026-0381',
      avatar: require('@/assets/orders_assests/image_113_612_651.png'),
    },
  ],
};

function OrderCard({ order }: { order: OrderItem }) {
  const router = useRouter();

  const getStatusColor = () => {
    switch (order.statusVariant) {
      case 'active':
      case 'completed':
        return '#4CAF50';
      case 'cancelled':
        return '#D0021B';
      default:
        return '#898989'; // new
    }
  };

  return (
    <Pressable style={styles.orderCard} onPress={() => router.push(`/orders/${order.id}`)}>
      <View style={styles.cardHeader}>
        <View style={styles.orderedByCol}>
          <Text style={styles.orderedByLabel}>Ordered By</Text>
          <Text style={styles.listCustomerName}>{order.customerName}</Text>
        </View>
        <Text style={[styles.statusText, { color: getStatusColor() }]}>{order.statusText}</Text>
      </View>

      <View style={styles.cardBody}>
        <Image source={order.avatar} style={styles.avatar} contentFit="cover" />
        <View style={styles.productDetails}>
          <View style={styles.productNameWeight}>
            <Text style={styles.productName}>{order.cropName}</Text>
            <Text style={styles.productWeight}>{order.weight}</Text>
          </View>
          
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>{order.location}</Text>
            <View style={styles.locationIconBox}>
              <Ionicons name="location" size={14} color="#898989" />
              <Text style={styles.distanceText}>{order.distance}</Text>
            </View>
          </View>
          
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>₹ {order.price}</Text>
          </View>
        </View>
      </View>

      {order.orderId && (
        <View style={styles.orderIdRow}>
          <Text style={styles.orderIdLabel}>Order ID</Text>
          <Text style={styles.orderIdValue}>{order.orderId}</Text>
        </View>
      )}
    </Pressable>
  );
}

export default function OrdersScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const initialTab = (params.tab as OrderTab) || 'New';
  const [activeTab, setActiveTab] = useState<OrderTab>(initialTab);
  const tabs: OrderTab[] = ['New', 'Active', 'Completed'];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Orders & Requests</Text>
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false}>
        {ORDERS_BY_TAB[activeTab].map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </ScrollView>
    </View>
  );
}
