import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { cartStyles as styles } from '../cart-styles';

const INITIAL_CART = [
  {
    id: '1',
    name: 'Fresh Tomato',
    seller: 'Lakshmi Farm Fresh',
    location: 'Hyderabad',
    distance: '10km',
    rating: '4.0',
    price: 100,
    qty: 5,
    selected: true,
    image: require('@/assets/images/buyer/tomato.png'),
  },
  {
    id: '2',
    name: 'Organic Tomato',
    seller: 'Srinivas Farms',
    location: 'Hyderabad',
    distance: '15km',
    rating: '4.8',
    price: 150,
    qty: 5,
    selected: false,
    image: require('@/assets/images/buyer/tomato.png'),
  },
];

export function CartScreen() {
  const router = useRouter();
  const [items, setItems] = useState(INITIAL_CART);

  const toggleItemSelection = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const selectedCount = items.filter((item) => item.selected).length;
  const isAllSelected = selectedCount === items.length && items.length > 0;

  const toggleAll = () => {
    setItems((prev) => prev.map((item) => ({ ...item, selected: !isAllSelected })));
  };

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.qty + delta);
          return { ...item, qty: newQty, price: (item.price / item.qty) * newQty };
        }
        return item;
      })
    );
  };

  const cartTotal = items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price, 0);

  const deliveryFee = selectedCount > 0 ? 40 : 0;
  const platformFee = selectedCount > 0 ? 10 : 0;
  const totalAmount = cartTotal + deliveryFee + platformFee;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Selection Toolbar */}
        <View style={styles.selectionRow}>
          <Pressable style={styles.selectionLeft} onPress={toggleAll}>
            <Ionicons
              name={isAllSelected ? 'checkbox' : 'square-outline'}
              size={20}
              color={isAllSelected ? '#4CAF50' : '#000000'}
            />
            <Text style={styles.selectionText}>{selectedCount}/{items.length} Items Selected</Text>
          </Pressable>
          <Pressable style={styles.deleteBtn}>
            <Ionicons name="trash-outline" size={16} color="#000000" />
          </Pressable>
        </View>

        {/* Cart Items */}
        {items.map((item) => (
          <View key={item.id} style={styles.cartItemCard}>
            <View style={styles.itemImageWrapper}>
              <Image source={item.image} style={styles.itemImage} contentFit="cover" />
              <Pressable
                style={styles.checkboxOverlay}
                onPress={() => toggleItemSelection(item.id)}
              >
                <Ionicons
                  name={item.selected ? 'checkbox' : 'square-outline'}
                  size={20}
                  color={item.selected ? '#4CAF50' : '#4CAF50'}
                />
              </Pressable>
            </View>

            <View style={styles.itemInfo}>
              <View style={styles.topBlock}>
                <View style={styles.nameRatingRow}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FFC107" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
                <View style={styles.sellerBlock}>
                  <Text style={styles.sellerName}>{item.seller}</Text>
                  <View style={styles.locationRow}>
                    <Text style={styles.locationText}>{item.location}</Text>
                    <Ionicons name="location-outline" size={12} color="#898989" />
                    <Text style={styles.locationText}>{item.distance}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.priceQtyBlock}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceSymbol}>₹ </Text>
                  <Text style={styles.priceValue}>{item.price}</Text>
                </View>
                <View style={styles.qtyRow}>
                  <Pressable style={styles.qtyBtn} onPress={() => updateQty(item.id, -1)}>
                    <Ionicons name="remove" size={16} color="#FFFFFF" />
                  </Pressable>
                  <Text style={styles.qtyText}>{item.qty}kg</Text>
                  <Pressable style={styles.qtyBtn} onPress={() => updateQty(item.id, 1)}>
                    <Ionicons name="add" size={16} color="#FFFFFF" />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* Price Details */}
        <View style={styles.priceDetailsContainer}>
          <Text style={styles.priceDetailsTitle}>Price Details</Text>
          <View style={styles.priceDetailsBox}>
            <View style={styles.priceLine}>
              <Text style={styles.priceLabel}>Cart Total:</Text>
              <Text style={styles.priceLineValue}>₹ {cartTotal}</Text>
            </View>
            <View style={styles.priceLine}>
              <Text style={styles.priceLabel}>Delivery Fee:</Text>
              <Text style={styles.priceLineValue}>₹ {deliveryFee}</Text>
            </View>
            <View style={styles.priceLine}>
              <Text style={styles.priceLabel}>Platform Fee:</Text>
              <Text style={styles.priceLineValue}>₹ {platformFee}</Text>
            </View>
          </View>

          {/* Total Amount */}
          <View style={styles.totalAmountBox}>
            <Text style={styles.totalAmountLabel}>Total Amount:</Text>
            <Text style={styles.totalAmountValue}>₹ {totalAmount}</Text>
          </View>
        </View>

      </ScrollView>

      {/* Checkout Button */}
      <View style={styles.checkoutContainer}>
        <Pressable style={styles.checkoutBtn} onPress={() => router.push('/checkout')}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}
