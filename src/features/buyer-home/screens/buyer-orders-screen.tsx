import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../buyer-orders-styles';

type TabType = 'Active' | 'Completed' | 'Cancelled';

const MOCK_ORDERS = {
  Active: [
    {
      id: '#KM-2026-0381',
      status: 'In Transit',
      name: 'Fresh Tomato',
      weight: '5kg',
      vendor: 'Lakshmi Farm Fresh',
      location: 'Hyderabad',
      distance: '10km',
      price: '120',
      estimatedDelivery: 'Today 10:30 AM to 6:00PM',
      image: require('@/assets/images/buyer/tomato.png'),
    },
    {
      id: '#KM-2026-0380',
      status: 'Order Confirmed',
      name: 'Rice',
      weight: '15kg',
      vendor: 'Lakshmi Farm Fresh',
      location: 'Hyderabad',
      distance: '10km',
      price: '250',
      estimatedDelivery: 'Today 10:30 AM to 6:00PM',
      image: require('@/assets/images/buyer/rice.png'),
    }
  ],
  Completed: [
    {
      id: '#KM-2026-0381',
      status: 'Delivered',
      name: 'Fresh Tomato',
      weight: '5kg',
      vendor: 'Lakshmi Farm Fresh',
      location: 'Hyderabad',
      distance: '10km',
      price: '120',
      estimatedDelivery: 'Today 10:30 AM to 6:00PM',
      image: require('@/assets/images/buyer/tomato.png'),
    },
    {
      id: '#KM-2026-0380',
      status: 'Delivered',
      name: 'Rice',
      weight: '15kg',
      vendor: 'Lakshmi Farm Fresh',
      location: 'Hyderabad',
      distance: '10km',
      price: '250',
      estimatedDelivery: 'Today 10:30 AM to 6:00PM',
      image: require('@/assets/images/buyer/tomato.png'), // Intentionally matching screenshot which re-uses tomato image
    }
  ],
  Cancelled: [
    {
      id: '#KM-2026-0381',
      status: 'Cancelled',
      name: 'Fresh Tomato',
      weight: '5kg',
      vendor: 'Lakshmi Farm Fresh',
      location: 'Hyderabad',
      distance: '10km',
      price: '120',
      estimatedDelivery: 'Today 10:30 AM to 6:00PM',
      image: require('@/assets/images/buyer/tomato.png'),
    },
    {
      id: '#KM-2026-0380',
      status: 'Cancelled',
      name: 'Rice',
      weight: '15kg',
      vendor: 'Lakshmi Farm Fresh',
      location: 'Hyderabad',
      distance: '10km',
      price: '250',
      estimatedDelivery: 'Today 10:30 AM to 6:00PM',
      image: require('@/assets/images/buyer/tomato.png'), // Intentionally matching screenshot
    }
  ]
};

export function BuyerOrdersScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('Active');
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: insets.top || 40 }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      <View style={styles.tabsContainer}>
        {(['Active', 'Completed', 'Cancelled'] as TabType[]).map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.listContent}>
        {MOCK_ORDERS[activeTab].map((order) => (
          <Pressable 
            key={order.id} 
            style={styles.orderCard}
            onPress={() => {
              if (activeTab === 'Active') {
                router.push('/buyer-order-details' as any);
              } else if (activeTab === 'Completed') {
                router.push('/buyer-order-details?status=Completed' as any);
              } else if (activeTab === 'Cancelled') {
                router.push('/buyer-order-details?status=Cancelled' as any);
              }
            }}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.orderIdText}>
                Order ID <Text style={styles.orderIdValue}>{order.id}</Text>
              </Text>
              <Text style={[styles.statusText, order.status === 'Cancelled' && styles.statusTextCancelled]}>
                {order.status}
              </Text>
            </View>

            <View style={styles.cardBody}>
              <Image source={order.image} style={styles.productImage} contentFit="cover" />
              
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{order.name}</Text>
                <Text style={styles.productWeight}>{order.weight}</Text>
                <Text style={styles.vendorName}>{order.vendor}</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location-sharp" size={14} color="#898989" />
                  <Text style={styles.locationText}>
                    {order.location} • {order.distance}
                  </Text>
                </View>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>₹ {order.price}</Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.deliveryLabel}>Estimated Delivery</Text>
              <Text style={styles.deliveryTime}>{order.estimatedDelivery}</Text>
            </View>

            {activeTab === 'Completed' && (
              <View style={styles.actionButtonsContainer}>
                <Pressable style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Rate Product</Text>
                </Pressable>
                <Pressable style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Buy Again</Text>
                </Pressable>
              </View>
            )}

            {activeTab === 'Cancelled' && (
              <Pressable style={styles.fullWidthButton}>
                <Text style={styles.actionButtonText}>View Details</Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
