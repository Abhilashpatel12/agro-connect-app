import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

type ReviewScreenProps = {
  photos: string[];
  cropName: string;
  category: string;
  quality: string;
  quantity: string;
  unit: string;
  price: string;
  harvestDate: string;
  location: string;
  description: string;
  onNext: () => void;
  onBack: () => void;
};

export function ReviewScreen({ 
  photos, 
  cropName, category, quality, quantity, unit, price, harvestDate, location, description,
  onNext, onBack 
}: ReviewScreenProps) {
  // Use uploaded photo or a placeholder if none selected
  const displayImage = photos.length > 0 
    ? { uri: photos[0] } 
    : { uri: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80' };

  const totalValue = (parseFloat(quantity) || 0) * (parseFloat(price) || 0);

  return (
    <View style={styles.screen}>
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Pressable>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Review Listing</Text>
          <Text style={styles.subtitle}>Confirm before posting</Text>
        </View>
      </View>

      <View style={styles.progressRow}>
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
      </View>

      <View style={{ backgroundColor: '#FFFFFF', borderWidth: 1.5, borderColor: '#EBEBEB', borderRadius: 14, padding: 14, gap: 10 }}>
        {/* Main Photo */}
        <Image 
          source={displayImage} 
          style={{ width: '100%', height: 235, borderRadius: 14 }} 
          contentFit="cover" 
        />

        {/* Title & Category Box */}
        <View style={{ borderWidth: 1.5, borderColor: '#EBEBEB', borderRadius: 14, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 16, color: '#000000', flex: 1 }}>{cropName}</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#000000' }}>{category} · {quality.split(' - ')[0]}</Text>
        </View>

        {/* Details List Box */}
        <View style={{ borderWidth: 1.5, borderColor: '#EBEBEB', borderRadius: 14, padding: 16, gap: 10 }}>
          <View style={{ flexDirection: 'row', gap: 14 }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 16, color: '#6D6D6D', width: 92 }}>Quantity:</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 16, color: '#000000' }}>{quantity} {unit}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 14 }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 16, color: '#6D6D6D', width: 92 }}>Price per {unit}:</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 16, color: '#000000' }}>₹ {price}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 14 }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 16, color: '#6D6D6D', width: 92 }}>Harvest Date:</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 16, color: '#000000' }}>{harvestDate}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 14 }}>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 16, color: '#6D6D6D', width: 92 }}>Location:</Text>
            <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 16, color: '#000000', flex: 1 }}>{location}</Text>
          </View>
        </View>

        {/* Total Value Box */}
        <View style={{ borderWidth: 1.5, borderColor: '#EBEBEB', borderRadius: 14, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 18, color: '#6D6D6D', width: 94 }}>Total Value:</Text>
          <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 18, color: '#000000' }}>₹ {totalValue.toLocaleString('en-IN')}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.primaryButton} onPress={onNext}>
          <Text style={styles.primaryButtonText}>Upload Crop</Text>
        </Pressable>
      </View>
    </View>
  );
}
