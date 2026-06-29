import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { s, vs, ms } from '@/utils/scale';
const { width } = Dimensions.get('window');

const crops = [
  { id: '1', name: 'Tomato Hybrid', orders: 22, revenue: '21,000', progress: 80 },
  { id: '2', name: 'Tomato Hybrid', orders: 22, revenue: '21,000', progress: 80 },
  { id: '3', name: 'Tomato Hybrid', orders: 22, revenue: '21,000', progress: 80 },
  { id: '4', name: 'Tomato Hybrid', orders: 22, revenue: '21,000', progress: 80 },
  { id: '5', name: 'Tomato Hybrid', orders: 22, revenue: '21,000', progress: 80 },
  { id: '6', name: 'Tomato Hybrid', orders: 22, revenue: '21,000', progress: 80 },
];

export default function TopCropsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{"Top Crop's"}</Text>
          <TouchableOpacity style={styles.monthSelector}>
            <Ionicons name="calendar-outline" size={16} color="#1C1B1F" style={styles.calendarIcon} />
            <Text style={styles.monthText}>June 2026</Text>
          </TouchableOpacity>
        </View>

        {/* List */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {crops.map((crop, index) => (
            <View key={crop.id + index} style={styles.card}>
              <View style={styles.cardTop}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop' }}
                  style={styles.cropImage}
                />
                <View style={styles.cardInfo}>
                  <Text style={styles.cropName}>{crop.name}</Text>
                  <Text style={styles.ordersCount}>{crop.orders} Orders</Text>
                  <Text style={styles.revenueText}>₹ {crop.revenue}</Text>
                </View>
              </View>
              
              <View style={styles.progressRow}>
                <View style={styles.progressBarContainer}>
                  <View style={[styles.progressBarFill, { width: `${crop.progress}%` }]} />
                </View>
                <Text style={styles.progressText}>{crop.progress}%</Text>
              </View>
            </View>
          ))}
          
          <Text style={styles.footerText}>Percentage Based on total revenue should get</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(20),
    paddingVertical: vs(16),
    justifyContent: 'space-between',
    marginTop: vs(10),
  },
  backButton: {
    width: s(48),
    height: vs(48),
    backgroundColor: '#4CAF50',
    borderRadius: s(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: ms(18),
    color: '#000000',
    flex: 1,
    marginLeft: s(16),
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(16),
    paddingVertical: vs(11),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: s(10),
    gap: s(6),
  },
  calendarIcon: {
    marginRight: s(4),
  },
  monthText: {
    fontFamily: 'DM Sans',
    fontSize: ms(12),
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: s(20),
    paddingBottom: vs(40),
    gap: s(16),
    paddingTop: vs(10),
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    gap: s(12),
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: s(10),
  },
  cropImage: {
    width: s(60),
    height: vs(60),
    borderRadius: s(10),
    backgroundColor: '#D9D9D9',
  },
  cardInfo: {
    flex: 1,
    justifyContent: 'center',
    gap: s(2),
  },
  cropName: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    color: '#000000',
  },
  ordersCount: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    color: '#898989',
  },
  revenueText: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    color: '#000000',
    marginTop: vs(2),
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(16),
  },
  progressBarContainer: {
    flex: 1,
    height: vs(3),
    backgroundColor: '#D9D9D9',
    borderRadius: s(50),
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: s(50),
  },
  progressText: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    color: '#898989',
  },
  footerText: {
    fontFamily: 'DM Sans',
    fontSize: ms(12),
    color: '#898989',
    textAlign: 'center',
    marginTop: vs(16),
    marginBottom: vs(20),
  },
});
