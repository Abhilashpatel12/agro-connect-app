import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s, vs, ms } from '@/utils/scale';

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

function StarRow({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <View style={styles.starRow}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Ionicons
          key={i}
          name="star"
          size={size}
          color={i < count ? '#FFC107' : '#D9D9D9'}
        />
      ))}
    </View>
  );
}

export function FarmerReviewsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Ratings & Reviews</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.reviewsList}>
          {REVIEWS.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewTopRow}>
                <View style={styles.reviewerLeft}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{review.initial}</Text>
                  </View>
                  <View>
                    <Text style={styles.reviewerName}>{review.name}</Text>
                    <StarRow count={review.stars} size={14} />
                  </View>
                </View>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    width: s(48),
  },
  scrollContent: {
    paddingHorizontal: s(20),
    paddingVertical: vs(20),
    paddingBottom: vs(100),
  },
  reviewsList: {
    gap: vs(16),
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(4),
  },
  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(14),
    width: '100%',
  },
  reviewTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: vs(10),
  },
  reviewerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(12),
  },
  avatar: {
    width: s(40),
    height: s(40),
    borderRadius: s(20),
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(19),
    color: '#FFFFFF',
  },
  reviewerName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(4),
  },
  reviewDate: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  reviewText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    lineHeight: ms(22),
  },
});
