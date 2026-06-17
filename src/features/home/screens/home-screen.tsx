import { Image } from 'expo-image';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';
import { NavBar } from '@/components/nav-bar';

export function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.userName}>Rahul Kumar</Text>
          </View>
          <Pressable style={styles.bellButton} onPress={() => router.push('/notifications' as any)}>
            <Ionicons name="notifications-outline" size={28} color="#4CAF50" />
          </Pressable>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statRow}>
              <Image source={require('@/assets/images/image 10.svg')} style={styles.statIcon} />
              <Text style={styles.statValue}>8</Text>
            </View>
            <Text style={styles.statLabel}>Active Listings</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statRow}>
              <Image source={require('@/assets/images/image 11.svg')} style={styles.statIcon} />
              <Text style={styles.statValue}>3</Text>
            </View>
            <Text style={styles.statLabel}>New Requests</Text>
          </View>
        </View>

        <View style={styles.bannerCard}>
          <Text style={styles.bannerText}>Let&apos;s grow your business together</Text>
          <Image source={require('@/assets/images/image-removebg-preview 1.svg')} style={styles.bannerImage} contentFit="contain" />
        </View>

        <Pressable style={styles.addButton} onPress={() => router.push('/add-crop' as any)}>
          <Text style={styles.addButtonText}>Add New Crop</Text>
        </Pressable>

        <View style={styles.activityHeader}>
          <Text style={styles.activityTitle}>Recent Activity</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>

        <View style={styles.activityCard}>
          <Image source={require('@/assets/images/image 67.png')} style={styles.activityImage} contentFit="cover" />
          <View style={styles.activityInfo}>
            <View>
              <Text style={styles.activityName}>Tomato</Text>
              <Text style={styles.activityDesc}>New request from Raj Traders</Text>
            </View>
            <Text style={styles.activityTime}>2 hrs ago</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <NavBar />
    </View>
  );
}
