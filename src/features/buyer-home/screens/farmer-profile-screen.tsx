import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VerifiedBadge } from '@/components/VerifiedBadge';

import { s, vs, ms } from '@/utils/scale';
// ─── Mock Data ───────────────────────────────────────────────────────────────
// Easy to swap out: replace FARMER, CROPS, and REVIEWS with real API data.

const FARMER = {
  name: 'Rahul Kumar',
  rating: 4.5,
  reviewCount: 400,
  location: 'Warangal, Telangana',
  distance: '90km',
  productsCount: '50+',
  experience: '10',
  satisfaction: '95%',
  verified: true,
  heroImage: require('@/assets/images/buyer/farmer_1.png'),
};

const CROPS = [
  {
    id: '1',
    name: 'Fresh Tomato',
    location: 'Warangal',
    distance: '90km',
    rating: 4.0,
    price: 20,
    unit: 'kg',
    image: require('@/assets/images/buyer/tomato.png'),
  },
  {
    id: '2',
    name: 'Red Onion',
    location: 'Warangal',
    distance: '90km',
    rating: 4.7,
    price: 22,
    unit: 'kg',
    image: require('@/assets/images/buyer/onion.png'),
  },
  {
    id: '3',
    name: 'Sona Masuri Rice',
    location: 'Warangal',
    distance: '90km',
    rating: 4.5,
    price: 68,
    unit: 'kg',
    image: require('@/assets/images/buyer/rice.png'),
  },
];

const REVIEWS = [
  {
    id: '1',
    initial: 'R',
    name: 'Raj Traders',
    date: '2 Apr 26',
    stars: 5,
    text: 'Fresh tomatoes and good packaging. Delivered on time. Very satisfied with...',
  },
  {
    id: '2',
    initial: 'K',
    name: 'Kiran Super Market',
    date: '1 Apr 26',
    stars: 4,
    text: 'Tomatoes quality is good.',
  },
  {
    id: '3',
    initial: 'V',
    name: 'Vijay Retailers',
    date: '1 Apr 26',
    stars: 5,
    text: 'Excellent quality and fresh tomatoes will order again.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRow({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <View style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Ionicons
          key={s}
          name="star"
          size={size}
          color={s <= count ? '#FFC107' : '#D9D9D9'}
        />
      ))}
    </View>
  );
}

function CropCard({
  name,
  location,
  distance,
  rating,
  price,
  unit,
  image,
}: (typeof CROPS)[0]) {
  return (
    <Pressable style={styles.cropCard}>
      <Image source={image} style={styles.cropImage} contentFit="cover" />
      <View style={styles.cropInfo}>
        <View style={styles.cropTopRow}>
          <Text style={styles.cropName}>{name}</Text>
          <View style={styles.cropRatingRow}>
            <Ionicons name="star" size={12} color="#FFC107" />
            <Text style={styles.cropRatingText}>{rating.toFixed(1)}</Text>
          </View>
        </View>
        <View style={styles.cropLocationRow}>
          <Ionicons name="location-outline" size={12} color="#898989" />
          <Text style={styles.cropMetaText}>
            {location} · {distance}
          </Text>
        </View>
        <View style={styles.cropPriceRow}>
          <Ionicons name="logo-usd" size={13} color="#4CAF50" style={{ display: 'none' }} />
          <Text style={styles.cropPriceSymbol}>₹</Text>
          <Text style={styles.cropPrice}>{price}</Text>
          <Text style={styles.cropPriceUnit}>/{unit}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function ReviewCard({ initial, name, date, stars, text }: (typeof REVIEWS)[0]) {
  return (
    <View style={styles.reviewCard}>
      <View style={styles.reviewTopRow}>
        <View style={styles.reviewerLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initial}</Text>
          </View>
          <View>
            <Text style={styles.reviewerName}>{name}</Text>
            <StarRow count={stars} size={14} />
          </View>
        </View>
        <Text style={styles.reviewDate}>{date}</Text>
      </View>
      <Text style={styles.reviewText} numberOfLines={2}>
        {text}
      </Text>
    </View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export function FarmerProfileScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>

        {/* ── Hero Image ── */}
        <View style={styles.heroContainer}>
          <Image
            source={FARMER.heroImage}
            style={styles.heroImage}
            contentFit="cover"
          />
          {/* Back button */}
          <Pressable style={styles.backButton} onPress={() => router.push('/buyer-home')}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* ── Farmer Info Card ── */}
        <View style={styles.sectionPad}>
          <View style={styles.infoCard}>
            {/* Name + verified badge */}
            <View style={styles.nameRow}>
              <Text style={styles.farmerName}>{FARMER.name}</Text>
              {FARMER.verified && (
                <VerifiedBadge size={ms(27)} />
              )}
            </View>

            {/* Rating */}
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color="#FFC107" />
              <Text style={styles.ratingText}>
                {FARMER.rating} ({FARMER.reviewCount} Reviews)
              </Text>
            </View>

            {/* Location */}
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={16} color="#898989" />
              <Text style={styles.locationText}>
                {FARMER.location} – {FARMER.distance}
              </Text>
            </View>
          </View>

          {/* ── Stats Card ── */}
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { fontFamily: 'DMSans_400Regular' }]}>{FARMER.productsCount}</Text>
              <Text style={styles.statLabel}>Products</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{FARMER.experience}</Text>
              <Text style={styles.statLabel}>Years of Experience</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{FARMER.satisfaction}</Text>
              <Text style={styles.statLabel}>Satisfaction</Text>
            </View>
          </View>

          {/* ── Available Crops ── */}
          <Text style={styles.sectionTitle}>Available Crops</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cropsScroll}
        >
          {CROPS.map((crop) => (
            <CropCard key={crop.id} {...crop} />
          ))}
        </ScrollView>

        {/* ── Reviews ── */}
        <View style={[styles.sectionPad, { marginTop: 16 }]}>
          <View style={styles.reviewsHeaderRow}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <Pressable onPress={() => router.push('/farmer-reviews')}>
              <Text style={styles.seeAll}>See all</Text>
            </Pressable>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.reviewsScroll}
        >
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </ScrollView>

        {/* Bottom breathing room */}
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },

  // Hero
  heroContainer: {
    width: '100%',
    height: vs(318),
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: vs(48),
    left: s(20),
    width: s(48),
    height: vs(48),
    backgroundColor: '#4CAF50',
    borderRadius: s(15),
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.4)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
      },
      android: { elevation: 6 },
    }),
  },

  // Layout
  sectionPad: {
    paddingHorizontal: s(20),
    marginTop: vs(12),
  },

  // Info Card
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    gap: s(6),
    marginBottom: vs(12),
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(8),
  },
  farmerName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(22),
    lineHeight: ms(27),
    color: '#000000',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(4),
  },
  ratingText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(18),
    lineHeight: ms(23),
    color: '#898989',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(4),
  },
  locationText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(18),
    lineHeight: ms(23),
    color: '#898989',
  },

  // Stats Card
  statsCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vs(10),
    paddingHorizontal: 10,
    gap: 10,
    height: vs(80),
    marginBottom: vs(16),
  },
  statItem: {
    alignItems: 'center',
    gap: 2,
  },
  statValue: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(18),
    lineHeight: ms(23),
    color: '#000000',
  },
  statLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#6D6D6D',
    textAlign: 'center',
  },
  divider: {
    width: 1,
    height: vs(50),
    backgroundColor: '#6D6D6D',
  },

  // Section title
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: '#000000',
    marginBottom: vs(10),
  },

  // Crop cards
  cropsScroll: {
    paddingHorizontal: s(20),
    gap: s(12),
    paddingBottom: vs(4),
  },
  cropCard: {
    flexDirection: 'row',
    width: s(340),
    height: vs(99),
    borderRadius: s(14),
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  cropImage: {
    width: s(90),
    height: vs(99),
    borderTopLeftRadius: s(14),
    borderBottomLeftRadius: s(14),
  },
  cropInfo: {
    flex: 1,
    borderWidth: 1.5,
    borderLeftWidth: 0,
    borderColor: '#EBEBEB',
    borderTopRightRadius: s(14),
    borderBottomRightRadius: s(14),
    padding: s(14),
    gap: s(6),
    justifyContent: 'center',
  },
  cropTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cropName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: '#000000',
    flex: 1,
  },
  cropRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(2),
  },
  cropRatingText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#898989',
  },
  cropLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(2),
  },
  cropMetaText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: '#898989',
  },
  cropPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(1),
  },
  cropPriceSymbol: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#4CAF50',
    marginRight: s(1),
  },
  cropPrice: {
    fontFamily: 'DMSans_500Medium',  // weight 600 in Figma; 500 is closest loaded
    fontSize: ms(18),
    lineHeight: ms(23),
    color: '#4CAF50',
  },
  cropPriceUnit: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(18),
    lineHeight: ms(23),
    color: '#000000',
  },

  // Reviews
  reviewsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  seeAll: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  reviewsScroll: {
    paddingHorizontal: s(20),
    gap: s(12),
    paddingBottom: vs(4),
    paddingTop: vs(10),
  },
  reviewCard: {
    width: s(340),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(14),
    gap: s(10),
  },
  reviewTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  reviewerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(12),
  },
  avatar: {
    width: s(40),
    height: vs(40),
    backgroundColor: '#4CAF50',
    borderRadius: s(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(19),
    lineHeight: ms(25),
    color: '#FFFFFF',
  },
  reviewerName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: '#000000',
    marginBottom: vs(4),
  },
  starsRow: {
    flexDirection: 'row',
    gap: s(3),
  },
  reviewDate: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(22),
    color: '#898989',
  },
  reviewText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(22),
    color: '#898989',
  },
});
