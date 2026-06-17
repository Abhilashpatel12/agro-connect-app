import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ReviewCard } from '@/components/ReviewCard';

export function RateAppScreen() {
  const router = useRouter();
  const [selectedReview, setSelectedReview] = useState<any>(null);
  const insets = useSafeAreaInsets();

  const ratingBars = [
    { stars: 5, count: 410, percent: 85 },
    { stars: 4, count: 50, percent: 25 },
    { stars: 3, count: 30, percent: 15 },
    { stars: 2, count: 8, percent: 5 },
    { stars: 1, count: 2, percent: 2 },
  ];

  const recentCrops = [
    { id: '1', name: 'Strawberry', code: 'ID#TM1024', rating: '4.7', count: '(12)', border: '#4CAF50', image: require('@/assets/images/image 98.png') },
    { id: '2', name: 'Onion', code: 'ID#TM1023', rating: '4.5', count: '(35)', border: '#EBEBEB', image: require('@/assets/images/image 99.png') },
    { id: '3', name: 'Corn', code: 'ID#TM10242', rating: '4.8', count: '(45)', border: '#EBEBEB', image: require('@/assets/images/image 98.png') },
    { id: '4', name: 'Tomato', code: 'ID#TM10241', rating: '4.8', count: '(52)', border: '#EBEBEB', image: require('@/assets/images/image 99.png') },
  ];

  const reviews = [
    { id: '1', initial: 'R', name: 'Raj Traders', date: '2 Apr 26', text: 'Fresh tomatoes and good packaging. Delivered on time. Very satisfied with...', stars: 5 },
    { id: '2', initial: 'K', name: 'Kiran Super Market', date: '1 Apr 26', text: 'Tomatoes quality is good.', stars: 4 },
    { id: '3', initial: 'V', name: 'Vijay Retailers', date: '1 Apr 26', text: 'Excellent quality and fresh tomatoes will order again.', stars: 5 },
    { id: '4', initial: 'M', name: 'Manoj Fresh Mart', date: '28 Mar 26', text: 'The strawberries were very fresh and sweet. Happy with the deal.', stars: 5 },
    { id: '5', initial: 'S', name: 'Suresh Wholesalers', date: '25 Mar 26', text: 'Onion quality could be slightly better, but pricing was fair.', stars: 3 },
    { id: '6', initial: 'A', name: 'AgriCorp Supply', date: '20 Mar 26', text: 'Corn was delivered exactly as promised. Very reliable farmer.', stars: 5 },
    { id: '7', initial: 'P', name: 'Prakash Mandi', date: '15 Mar 26', text: 'Good transaction. Looking forward to doing more business.', stars: 4 },
  ];

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Reviews & Ratings</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 20 },
        ]}
      >
        {/* Overall Rating Card */}
        <View style={styles.overallRatingCard}>
          <View style={styles.overallLeft}>
            <View style={styles.ratingBigRow}>
              <Ionicons name="star" size={35} color="#FDCB58" />
              <Text style={styles.ratingBigText}>4.8</Text>
            </View>
            <View style={styles.ratingBigDetails}>
              <Text style={styles.overallRatingTitle}>Overall Rating</Text>
              <Text style={styles.overallRatingSub}>Based on 500{'\n'}Reviews</Text>
            </View>
          </View>

          <View style={styles.overallRight}>
            {ratingBars.map((bar) => (
              <View key={bar.stars} style={styles.barRow}>
                <View style={styles.barLabelGroup}>
                  <Text style={styles.barStarNum}>{bar.stars}</Text>
                  <Ionicons name="star" size={16} color="#FDCB58" />
                </View>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${bar.percent}%` }]} />
                </View>
                <Text style={styles.barCount}>{bar.count.toString().padStart(2, '0')}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Crop Listing */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Crop Listing</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.cropListContent}
        >
          {recentCrops.map((crop) => (
            <View key={crop.id} style={[styles.cropCard, { borderColor: crop.border }]}>
              {/* Fallback to grey if image fails to load, since we don't have the actual assets */}
              <View style={styles.cropImagePlaceholder}>
                 <Image source={crop.image} style={styles.cropImage} contentFit="cover" />
              </View>
              <View style={styles.cropInfoRow}>
                <View style={styles.cropNameCol}>
                  <Text style={styles.cropName}>{crop.name}</Text>
                  <Text style={styles.cropCode}>{crop.code}</Text>
                </View>
                <View style={styles.cropRatingCol}>
                  <View style={styles.cropRatingTop}>
                    <Ionicons name="star" size={14} color="#FDCB58" />
                    <Text style={styles.cropRatingNum}>{crop.rating}</Text>
                  </View>
                  <Text style={styles.cropRatingCount}>{crop.count}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Reviews */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>

        <View style={styles.reviewsList}>
          {reviews.map((review) => (
            <Pressable key={review.id} style={styles.reviewCard} onPress={() => setSelectedReview(review)}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewerInfo}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{review.initial}</Text>
                  </View>
                  <View style={styles.reviewerDetails}>
                    <Text style={styles.reviewerName}>{review.name}</Text>
                    <View style={styles.starsRow}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Ionicons 
                          key={s} 
                          name="star" 
                          size={22} 
                          color={s <= review.stars ? '#FDCB58' : '#D9D9D9'} 
                        />
                      ))}
                    </View>
                  </View>
                </View>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Text style={styles.reviewText}>{review.text}</Text>
            </Pressable>
          ))}
        </View>

      </ScrollView>

      {/* Review Options Modal */}
      <Modal visible={!!selectedReview} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Review Options</Text>
              <TouchableOpacity onPress={() => setSelectedReview(null)}>
                <Ionicons name="close" size={24} color="#000000" />
              </TouchableOpacity>
            </View>
            
            {selectedReview && (
              <ReviewCard 
                initial={selectedReview.initial}
                name={selectedReview.name}
                date={selectedReview.date}
                text={selectedReview.text}
                stars={selectedReview.stars}
              />
            )}

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => {
                  setSelectedReview(null);
                  router.push({
                    pathname: '/reply-review',
                    params: selectedReview
                  });
                }}
              >
                <Ionicons name="chatbubble-outline" size={20} color="#4CAF50" />
                <Text style={styles.actionButtonText}>Reply to Review</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.actionButton, styles.actionButtonDanger]}
                onPress={() => {
                  setSelectedReview(null);
                  router.push({
                    pathname: '/report-review',
                    params: selectedReview
                  });
                }}
              >
                <Ionicons name="warning-outline" size={20} color="#E53935" />
                <Text style={[styles.actionButtonText, { color: '#E53935' }]}>Report Review</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    zIndex: 10,
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#000000',
  },
  scrollContent: {
    paddingTop: 10,
  },
  overallRatingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 20,
    gap: 42,
  },
  overallLeft: {
    gap: 6,
  },
  ratingBigRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  ratingBigText: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 40,
    color: '#4CAF50',
  },
  ratingBigDetails: {
    gap: 4,
  },
  overallRatingTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    color: '#000000',
  },
  overallRatingSub: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
    lineHeight: 18,
  },
  overallRight: {
    flex: 1,
    gap: 10,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barLabelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: 31,
  },
  barStarNum: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
  },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
  },
  progressFill: {
    height: 6,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
  },
  barCount: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#000000',
    width: 26,
    textAlign: 'right',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
  },
  seeAllText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#000000',
  },
  cropListContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  cropCard: {
    width: 166,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 14,
    gap: 8,
  },
  cropImagePlaceholder: {
    width: '100%',
    height: 90,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cropImage: {
    width: '100%',
    height: '100%',
  },
  cropInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cropNameCol: {
    gap: 4,
  },
  cropName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 14,
    color: '#000000',
  },
  cropCode: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
  },
  cropRatingCol: {
    alignItems: 'flex-end',
    gap: 4,
  },
  cropRatingTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cropRatingNum: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#000000',
  },
  cropRatingCount: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
  },
  reviewsList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    padding: 14,
    gap: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  reviewerInfo: {
    flexDirection: 'row',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 19,
    color: '#FFFFFF',
  },
  reviewerDetails: {
    gap: 6,
  },
  reviewerName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  reviewDate: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
  },
  reviewText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
    lineHeight: 22,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FAFAF9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#000000',
  },
  modalButtons: {
    marginTop: 10,
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    gap: 12,
  },
  actionButtonDanger: {
    borderColor: '#FFEBEE',
    backgroundColor: '#FFF5F5',
  },
  actionButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
  },
});
