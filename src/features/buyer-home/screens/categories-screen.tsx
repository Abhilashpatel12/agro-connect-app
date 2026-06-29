import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s, vs, ms } from '@/utils/scale';

const CATEGORIES = [
  { id: '1', name: 'Vegetables', image: require('@/assets/images/buyer/leafy_greens.png') },
  { id: '2', name: 'Leafy Greens', image: require('@/assets/images/buyer/leafy_greens.png') },
  { id: '3', name: 'Rice', image: require('@/assets/images/buyer/rice.png') },
  { id: '4', name: 'Pulses', image: require('@/assets/images/buyer/pulses.png') },
  { id: '5', name: 'Tomato', image: require('@/assets/images/buyer/tomato.png') },
  { id: '6', name: 'Onion', image: require('@/assets/images/buyer/potato.png') },
];

export function CategoriesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Shop by Category</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {CATEGORIES.map((cat) => (
            <Pressable 
              key={cat.id} 
              style={styles.categoryCard}
              onPress={() => router.push('/product-listing')}
            >
              <Image source={cat.image} style={styles.categoryImage} contentFit="contain" />
              <Text style={styles.categoryName}>{cat.name}</Text>
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
  categoryCard: {
    width: '47%',
    aspectRatio: 175 / 165,
    backgroundColor: '#FFFFFF',
    borderWidth: 2.3,
    borderColor: '#EBEBEB',
    borderRadius: s(21.7),
    alignItems: 'center',
    justifyContent: 'center',
    padding: s(12),
  },
  categoryImage: {
    width: '60%',
    height: '55%',
    marginBottom: vs(12),
  },
  categoryName: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(18),
    color: '#000000',
    textAlign: 'center',
  },
});
