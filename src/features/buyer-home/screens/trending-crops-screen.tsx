import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s, vs, ms } from '@/utils/scale';

const TRENDING_CROPS = [
  { id: '1', name: 'Tomato', distance: '20km', rating: '4.5', price: '24', image: require('@/assets/images/buyer/tomato.png') },
  { id: '2', name: 'Onion', distance: '10km', rating: '4.2', price: '18', image: require('@/assets/images/buyer/potato.png') },
  { id: '3', name: 'Pulses', distance: '15km', rating: '4.7', price: '45', image: require('@/assets/images/buyer/pulses.png') },
  { id: '4', name: 'Rice', distance: '25km', rating: '4.4', price: '30', image: require('@/assets/images/buyer/rice.png') },
  { id: '5', name: 'Leafy Greens', distance: '5km', rating: '4.9', price: '12', image: require('@/assets/images/buyer/leafy_greens.png') },
];

export function TrendingCropsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Trending Crops</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {TRENDING_CROPS.map((crop) => (
            <Pressable 
              key={crop.id} 
              style={styles.cropCard}
              onPress={() => router.push('/product-details')}
            >
              <Image source={crop.image} style={styles.cropImage} contentFit="contain" />
              <View style={styles.cropInfo}>
                <View style={styles.cropNameRow}>
                  <Text style={styles.cropName}>{crop.name}</Text>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={12} color="#FFC107" />
                    <Text style={styles.ratingText}>{crop.rating}</Text>
                  </View>
                </View>
                <View style={styles.locationRow}>
                  <Ionicons name="location-outline" size={12} color="#898989" />
                  <Text style={styles.locationText}>{crop.distance}</Text>
                </View>
                <Text style={styles.priceText}>
                  <Text style={styles.priceSymbol}>₹</Text> {crop.price} <Text style={styles.priceUnit}>/kg</Text>
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(20),
    paddingVertical: vs(12),
    justifyContent: 'space-between',
  },
  backButton: {
    width: s(48),
    height: s(48),
    backgroundColor: '#4CAF50',
    borderRadius: s(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(18),
    color: '#000000',
    lineHeight: ms(30),
  },
  headerRight: {
    width: s(48), // to balance the flex layout
  },
  scrollContent: {
    paddingHorizontal: s(20),
    paddingVertical: vs(20),
    paddingBottom: vs(100),
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: vs(16),
  },
  cropCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: s(14),
    borderWidth: 1.5,
    borderColor: 'rgba(235, 235, 235, 0.75)',
    paddingTop: vs(20),
    paddingHorizontal: s(14),
    paddingBottom: vs(14),
    alignItems: 'center',
  },
  cropImage: {
    width: '90%',
    height: vs(85),
    marginBottom: vs(12),
  },
  cropInfo: {
    width: '100%',
    gap: vs(4),
  },
  cropNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  cropName: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(2),
  },
  ratingText: {
    fontFamily: 'Outfit_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(2),
  },
  locationText: {
    fontFamily: 'Outfit_400Regular',
    fontSize: ms(12),
    lineHeight: ms(15),
    color: '#898989',
  },
  priceText: {
    fontFamily: 'Outfit_500Medium',
    fontSize: ms(16),
    color: '#4CAF50',
    lineHeight: ms(20),
  },
  priceSymbol: {
    fontFamily: 'DMSans_500Medium',
  },
  priceUnit: {
    color: '#000000',
  },
});
