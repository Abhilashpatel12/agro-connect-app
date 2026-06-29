import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TextInput, View, Pressable } from 'react-native';
import { styles } from '../styles';

const CATEGORIES = [
  { id: '1', name: 'Vegetables', image: require('@/assets/images/buyer/leafy_greens.png') },
  { id: '2', name: 'Leafy Greens', image: require('@/assets/images/buyer/leafy_greens.png') },
  { id: '3', name: 'Rice', image: require('@/assets/images/buyer/rice.png') },
  { id: '4', name: 'Pulses', image: require('@/assets/images/buyer/pulses.png') },
  { id: '5', name: 'Tomato', image: require('@/assets/images/buyer/tomato.png') },
  { id: '6', name: 'Onion', image: require('@/assets/images/buyer/potato.png') },
];

const TRENDING_CROPS = [
  { id: '1', name: 'Tomato', distance: '20km', rating: '4.5', price: '24', image: require('@/assets/images/buyer/tomato.png') },
  { id: '2', name: 'Potato', distance: '50km', rating: '4.0', price: '22', image: require('@/assets/images/buyer/potato.png') },
  { id: '3', name: 'Onion', distance: '10km', rating: '4.2', price: '18', image: require('@/assets/images/buyer/potato.png') },
];

const TOP_FARMERS = [
  { id: '1', name: 'Rahul Kumar', rating: '4.5', reviews: '400', distance: '90km', listings: 4, image: require('@/assets/images/buyer/farmer_1.png') },
  { id: '2', name: 'Praveen', rating: '4.3', reviews: '430', distance: '55km', listings: 5, image: require('@/assets/images/buyer/farmer_2.png') },
  { id: '3', name: 'Abdul malik', rating: '4.8', reviews: '350', distance: '57km', listings: 2, image: require('@/assets/images/buyer/farmer_1.png') },
];

export function BuyerHomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }} bounces={false} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.locationRow}>
            <View style={styles.locationInfo}>
              <Ionicons name="location-outline" size={24} color="#000000" style={{ marginRight: 8 }} />
              <View style={styles.locationTextContainer}>
                <Text style={styles.deliverToText}>Deliver to</Text>
                <Text style={styles.cityText}>Hyderabad, Telangana</Text>
              </View>
            </View>
            <Pressable onPress={() => router.push('/notifications')}>
              <Ionicons name="notifications-outline" size={24} color="#000000" />
            </Pressable>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#898989" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for crops, fruits, grains"
            placeholderTextColor="#898989"
            onSubmitEditing={() => router.push('/product-listing')}
          />
        </View>

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Fresh from Farms to your Table</Text>
            <Text style={styles.bannerSubtitle}>Healthy Food Healthy Life</Text>
          </View>
          <Image
            source={require('@/assets/images/buyer/AdobeExpressPhotos_5a976c0bc2f94642b2fa08f2abcf6327_CopyEdited 1.svg')}
            style={styles.bannerImage}
            contentFit="contain"
          />
        </View>

        {/* Categories */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Shop by Category</Text>
            <Pressable onPress={() => router.push('/categories')}>
              <Text style={styles.seeAllText}>See all</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScroll}
          >
            {CATEGORIES.map((cat) => (
              <View key={cat.id} style={styles.categoryCard}>
                <Image source={cat.image} style={styles.categoryImage} contentFit="contain" />
                <Text style={styles.categoryName}>{cat.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Trending Crops */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Crops</Text>
            <Pressable onPress={() => router.push('/trending-crops')}>
              <Text style={styles.seeAllText}>See all</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingScroll}
          >
            {TRENDING_CROPS.map((crop) => (
              <View key={crop.id} style={styles.cropCard}>
                <Image source={crop.image} style={styles.cropImage} contentFit="contain" />
                <View style={styles.cropNameRatingRow}>
                  <Text style={styles.cropName}>{crop.name}</Text>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FFC107" />
                    <Text style={styles.ratingText}>{crop.rating}</Text>
                  </View>
                </View>

                <View style={styles.cropDistanceRow}>
                  <Ionicons name="location-outline" size={12} color="#898989" />
                  <Text style={styles.distanceText}>{crop.distance}</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.priceSymbol}>₹ </Text>
                  <Text style={styles.priceValue}>{crop.price}</Text>
                  <Text style={styles.priceUnit}> /kg</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Top Rated Farmers */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{"Top Rated Farmer's"}</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.farmersScroll}
          >
            {TOP_FARMERS.map((farmer) => (
              <Pressable 
                key={farmer.id} 
                style={styles.farmerCard}
                onPress={() => router.push('/farmer-profile')}
              >
                <View style={styles.farmerImageContainer}>
                  <Image source={farmer.image} style={styles.farmerImage} contentFit="cover" />
                  <View style={styles.verifiedBadge}>
                    <VerifiedBadge size={28} />
                  </View>
                </View>
                <View style={styles.farmerInfo}>
                  <Text style={styles.farmerName}>{farmer.name}</Text>

                  <View style={styles.farmerMetaRow}>
                    <View style={styles.farmerRatingRow}>
                      <Ionicons name="star" size={14} color="#FFC107" />
                      <Text style={styles.farmerRatingText}>{farmer.rating}</Text>
                      <Text style={styles.farmerReviewsText}>({farmer.reviews})</Text>
                    </View>
                    <View style={styles.distanceRow}>
                      <Ionicons name="location-sharp" size={12} color="#898989" />
                      <Text style={styles.distanceText}>{farmer.distance}</Text>
                    </View>
                  </View>

                  <Text style={styles.activeListingsText}>{farmer.listings} Active Listing</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>

      </ScrollView>

      {/* Bottom Nav Placeholder */}
    </View>
  );
}
