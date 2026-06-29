import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { checkoutStyles as styles } from '../checkout-styles';

const PAYMENT_METHODS = [
  {
    id: 'upi',
    label: 'UPI Payment',
    logo: require('@/assets/images/buyer/image 113.png'),
  },
  {
    id: 'cod',
    label: 'Cash on Delivery',
    logo: require('@/assets/images/buyer/image 114.png'),
  },
  {
    id: 'card',
    label: 'Debit or Credit Card',
    logo: require('@/assets/images/buyer/image 116.png'),
  },
];

export function CheckoutScreen() {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState('upi');

  const cartTotal = 100;
  const deliveryFee = 40;
  const platformFee = 10;
  const totalAmount = cartTotal + deliveryFee + platformFee;

  return (
    <SafeAreaView style={styles.container}>
      {/* ── Header ── */}
      <View style={styles.headerContainer}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Delivery Address ── */}
        <Text style={styles.sectionLabel}>Delivery Address</Text>
        <Pressable style={styles.addressCard} onPress={() => router.push('/select-address')}>
          <View style={styles.addressIconWrap}>
            <Ionicons name="location-sharp" size={19} color="#000000" />
          </View>
          <View style={styles.addressTextCol}>
            <Text style={styles.addressHomeLabel}>Home</Text>
            <View style={styles.addressSubCol}>
              <Text style={styles.addressName}>Kiran, 00000 00000</Text>
              <Text style={styles.addressStreet}>
                14-2-56, Ameerpet Main Road, Hyderabad, Telangana – 500016
              </Text>
            </View>
          </View>
        </Pressable>

        {/* ── Order Summary ── */}
        <Text style={styles.sectionLabel}>Order Summary</Text>
        <View style={styles.orderSummaryCard}>
          <Image
            source={require('@/assets/images/buyer/tomato.png')}
            style={styles.orderImage}
            contentFit="cover"
          />
          <View style={styles.orderInfoPanel}>
            <View style={styles.orderTopRow}>
              <Text style={styles.orderProductName}>Fresh Tomato</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color="#FFC107" />
                <Text style={styles.ratingText}>4.0</Text>
              </View>
            </View>

            <Text style={styles.orderSellerName}>Lakshmi Farm Fresh</Text>

            <View style={styles.orderLocationRow}>
              <Text style={styles.orderLocationText}>Hyderabad</Text>
              <Ionicons name="location-outline" size={12} color="#898989" />
              <Text style={styles.orderLocationText}>10km</Text>
            </View>

            <View style={styles.orderPriceRow}>
              <Text style={styles.orderPriceSymbol}>₹</Text>
              <Text style={styles.orderPriceValue}>100</Text>
            </View>
          </View>
        </View>

        {/* ── Price Details ── */}
        <Text style={styles.sectionLabel}>Price Details</Text>
        <View style={styles.priceDetailsBox}>
          <View style={styles.priceLine}>
            <Text style={styles.priceLabel}>Cart Total:</Text>
            <Text style={styles.priceLineValue}>₹{cartTotal}</Text>
          </View>
          <View style={styles.priceLine}>
            <Text style={styles.priceLabel}>Delivery Fee:</Text>
            <Text style={styles.priceLineValue}>₹{deliveryFee}</Text>
          </View>
          <View style={styles.priceLine}>
            <Text style={styles.priceLabel}>Platform Fee:</Text>
            <Text style={styles.priceLineValue}>₹{platformFee}</Text>
          </View>
        </View>

        {/* ── Total Amount ── */}
        <View style={styles.totalAmountBox}>
          <Text style={styles.totalAmountLabel}>Total Amount:</Text>
          <Text style={styles.totalAmountValue}>₹{totalAmount}</Text>
        </View>

        {/* ── Payment Method ── */}
        <Text style={styles.sectionLabel}>Payment Method</Text>
        {PAYMENT_METHODS.map((method) => (
          <Pressable
            key={method.id}
            style={styles.paymentRow}
            onPress={() => setSelectedPayment(method.id)}
          >
            <View style={styles.paymentLeft}>
              <Image
                source={method.logo}
                style={styles.paymentLogo}
                contentFit="contain"
              />
              <Text style={styles.paymentLabel}>{method.label}</Text>
            </View>
            <View
              style={
                selectedPayment === method.id
                  ? styles.radioSelected
                  : styles.radioUnselected
              }
            />
          </Pressable>
        ))}
      </ScrollView>

      {/* ── Place Order fixed button ── */}
      <View style={styles.placeOrderContainer}>
        <Pressable style={styles.placeOrderBtn} onPress={() => router.push('/order-success')}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
