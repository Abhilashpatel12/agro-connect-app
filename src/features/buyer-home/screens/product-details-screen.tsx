import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { Image } from 'expo-image';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { detailsStyles as styles } from '../product-details-styles';
import { ms } from '@/utils/scale';

export function ProductDetailsScreen() {
  const [quantity, setQuantity] = useState(5);

  const handleMinus = () => {
    if (quantity > 5) setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Top Image Carousel */}
        <View style={styles.carouselContainer}>
          {/* Back Button */}
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </Pressable>
          
          {/* Share Button */}
          <Pressable style={styles.shareButton}>
            <Ionicons name="share-social-outline" size={24} color="#FFFFFF" />
          </Pressable>

          {/* Uses placeholder tomato for now */}
          <Image 
            source={require('@/assets/images/buyer/tomato.png')} 
            style={styles.carouselImage} 
            contentFit="cover" 
          />

          {/* Dots */}
          <View style={styles.paginationRow}>
            <View style={styles.dotActive} />
            <View style={styles.dotInactive} />
            <View style={styles.dotInactive} />
            <View style={styles.dotInactive} />
            <View style={styles.dotInactive} />
          </View>
        </View>

        {/* Product Info Section */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Product Info</Text>
          <View style={styles.infoBox}>
            <View style={styles.titleCol}>
              <Text style={styles.productName}>Fresh Tomato</Text>
              <View style={styles.priceRow}>
                <Text style={styles.priceSymbol}>₹ </Text>
                <Text style={styles.priceValue}>20</Text>
                <Text style={styles.priceUnit}> /kg</Text>
              </View>
            </View>
            <View style={styles.ratingCol}>
              <Ionicons name="star" size={14} color="#FFC107" />
              <Text style={styles.ratingText}>4.0 (57)</Text>
            </View>
          </View>
        </View>

        {/* Seller Info Section */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Seller Info</Text>
          <View style={styles.sellerBox}>
            <Text style={styles.sellerName}>Lakshmi Farm Fresh</Text>
            <View style={styles.locationRow}>
              <Text style={styles.sellerLocationText}>Hyderabad</Text>
              <View style={styles.distanceRowInner}>
                <Ionicons name="location-outline" size={14} color="#898989" />
                <Text style={styles.sellerLocationText}>10km</Text>
              </View>
            </View>
            <View style={styles.verifiedRow}>
              <VerifiedBadge size={ms(20)} />
              <Text style={styles.verifiedText}>Verified Farmer</Text>
            </View>
          </View>
        </View>

        {/* Product Details Section */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Product Details</Text>
          <View style={styles.detailsBox}>
            <Text style={styles.detailText}>Category: Vegetables</Text>
            <Text style={styles.detailText}>Harvest Date: 28 Mar 2026</Text>
            <Text style={styles.detailText}>Quality Grade: Grade A</Text>
            <Text style={styles.detailText}>Available: 500 kg</Text>
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.sectionBlock}>
          <View style={styles.reviewsHeaderRow}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.reviewsScroll}
          >
            {/* Review Card 1 */}
            <View style={styles.reviewCard}>
              <View style={styles.reviewTopRow}>
                <View style={styles.reviewerInfoCol}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>R</Text>
                  </View>
                  <View style={styles.reviewerNameCol}>
                    <Text style={styles.reviewerName}>Raj Traders</Text>
                    <View style={styles.starsRow}>
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Ionicons name="star" size={14} color="#FFC107" />
                    </View>
                  </View>
                </View>
                <Text style={styles.reviewDate}>2 Apr 26</Text>
              </View>
              <Text style={styles.reviewText} numberOfLines={2}>
                Fresh tomatoes and good packaging. Delivered on time. Very satisfied with...
              </Text>
            </View>

            {/* Review Card 2 */}
            <View style={styles.reviewCard}>
              <View style={styles.reviewTopRow}>
                <View style={styles.reviewerInfoCol}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>V</Text>
                  </View>
                  <View style={styles.reviewerNameCol}>
                    <Text style={styles.reviewerName}>Vijay Retailers</Text>
                    <View style={styles.starsRow}>
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Ionicons name="star" size={14} color="#FFC107" />
                    </View>
                  </View>
                </View>
                <Text style={styles.reviewDate}>1 Apr 26</Text>
              </View>
              <Text style={styles.reviewText} numberOfLines={2}>
                Excellent quality and fresh tomatoes will order again.
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* Quantity Selector */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Quantity Selector</Text>
          <View style={styles.qtyBox}>
            <Pressable style={styles.qtyBtn} onPress={handleMinus}>
              <Ionicons name="remove" size={24} color="#FFFFFF" />
            </Pressable>
            <Text style={styles.qtyText}>{quantity}kg</Text>
            <Pressable style={styles.qtyBtn} onPress={handlePlus}>
              <Ionicons name="add" size={24} color="#FFFFFF" />
            </Pressable>
          </View>
          <Text style={styles.noteText}>Note: Min order 5kg</Text>
        </View>

      </ScrollView>

      {/* Fixed Footer Buttons */}
      <View style={styles.footerContainer}>
        <Pressable style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </Pressable>
        <Pressable style={styles.buyNowBtn}>
          <Text style={styles.buyNowText}>Buy now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
