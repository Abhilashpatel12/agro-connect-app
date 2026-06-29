import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, Modal, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { productStyles as styles } from '../product-listing-styles';
import { FilterModal } from '../components/filter-modal';


const PRODUCTS = [
  { id: '1', name: 'Fresh Tomato', seller: 'Lakshmi Farm Fresh', location: 'Hyderabad', distance: '10km', rating: '4.0', price: '20', image: require('@/assets/images/buyer/tomato.png') },
  { id: '2', name: 'Organic Tomato', seller: 'Srinivas Farms', location: 'Hyderabad', distance: '15km', rating: '4.8', price: '25', image: require('@/assets/images/buyer/tomato.png') },
  { id: '3', name: 'Farm Fresh Tomato', seller: 'Ramesh Farm Produce', location: 'Warangal', distance: '20km', rating: '4.5', price: '22', image: require('@/assets/images/buyer/tomato.png') },
  { id: '4', name: 'Tomato Hybrid', seller: 'Green Valley Farms', location: 'Khammam', distance: '85km', rating: '4.6', price: '32', image: require('@/assets/images/buyer/tomato.png') },
  { id: '5', name: 'Tomato Hybrid', seller: 'Green Valley Farms', location: 'Khammam', distance: '85km', rating: '4.6', price: '32', image: require('@/assets/images/buyer/tomato.png') },
];

export function ProductListingScreen() {
  const router = useRouter();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Product Listing</Text>
      </View>

      {/* Search Row */}
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#000000" />
          <TextInput
            style={styles.searchInput}
            defaultValue="Tomato"
            placeholderTextColor="#898989"
          />
        </View>
        <Pressable style={styles.filterButton} onPress={() => setIsFilterVisible(true)}>
          <Image 
            source={require('@/assets/images/buyer/instant_mix.svg')} 
            style={{ width: 17.65, height: 15.5, transform: [{ rotate: '90deg' }] }} 
            contentFit="contain" 
          />
        </Pressable>
      </View>

      {/* Product List */}
      <ScrollView contentContainerStyle={styles.productsScroll} showsVerticalScrollIndicator={false}>
        {PRODUCTS.map((product) => (
          <Pressable 
            key={product.id} 
            style={styles.productCard}
            onPress={() => router.push('/product-details')}
          >
            <Image source={product.image} style={styles.productImage} contentFit="cover" />
            <View style={styles.productInfo}>
              
              <View style={styles.topBlock}>
                <View style={styles.nameRatingRow}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FFC107" />
                    <Text style={styles.ratingText}>{product.rating}</Text>
                  </View>
                </View>

                <View style={styles.sellerLocationBlock}>
                  <Text style={styles.sellerName}>{product.seller}</Text>
                  <Text style={styles.locationText}>{product.location}</Text>
                </View>
              </View>

              <View style={styles.distanceRow}>
                <Ionicons name="location-outline" size={14} color="#898989" />
                <Text style={styles.distanceText}>{product.distance}</Text>
              </View>

              <View style={styles.priceRow}>
                <Text style={styles.priceSymbol}>₹</Text>
                <Text style={styles.priceValue}>{product.price}</Text>
                <Text style={styles.priceUnit}>/kg</Text>
              </View>

            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Filter Overlay */}
      <FilterModal 
        visible={isFilterVisible} 
        onClose={() => setIsFilterVisible(false)} 
      />
    </View>
  );
}
