import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles';

type TabType = 'All' | 'Live' | 'Sold' | 'Draft';

const MOCK_CROPS = [
  { id: '1', title: 'Tomato (Hybrid)', qty: '500 kg', price: '25' },
  { id: '2', title: 'Rice (Sona Masuri)', qty: '1200 kg', price: '45' },
  { id: '3', title: 'Onion (Red)', qty: '800 kg', price: '30' },
  { id: '4', title: 'Maize (Yellow)', qty: '600 kg', price: '16' },
  { id: '5', title: 'Spinach (Fresh)', qty: '200 kg', price: '14' },
];

export function CropsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('All');

  const renderTabs = () => {
    const tabs: TabType[] = ['All', 'Live', 'Sold', 'Draft'];
    return (
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <Pressable 
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>My Crops</Text>
      </View>

      {renderTabs()}

      <ScrollView contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false}>
        {MOCK_CROPS.filter(crop => activeTab === 'All' || crop.id === '1').map((crop) => (
          <Pressable key={crop.id} style={styles.cropCard} onPress={() => router.push('/crop-details' as any)}>
            <Image 
              source={require('@/assets/images/Rectangle 17.png')} 
              style={styles.cropImage} 
              contentFit="cover" 
            />
            <View style={styles.cropInfo}>
              <Text style={styles.cropTitle}>{crop.title}</Text>
              <View style={styles.cropSubtextRow}>
                <Text style={styles.cropSubtextQty}>{crop.qty}</Text>
                <View style={styles.rupeeBadge}>
                  <MaterialIcons name="currency-rupee" size={10} color="#1C1B1F" />
                </View>
                <Text style={styles.cropSubtextPrice}>{crop.price}/kg</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.tabItem} onPress={() => router.replace('/home' as any)}>
          <View style={styles.tabIconBox}>
            <Image source={require('@/assets/images/home.svg')} style={styles.tabIcon} contentFit="contain" tintColor="#1C1B1F" />
          </View>
          <Text style={styles.tabLabel}>Home</Text>
        </Pressable>
        
        <Pressable style={styles.tabItem}>
          <View style={styles.tabIconBox}>
            <Image source={require('@/assets/images/wheat.svg')} style={styles.tabIcon} contentFit="contain" tintColor="#4CAF50" />
          </View>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Crops</Text>
        </Pressable>

        <Pressable style={styles.tabItem}>
          <View style={styles.tabIconBox}>
            <Image source={require('@/assets/images/box.svg')} style={styles.tabIcon} contentFit="contain" tintColor="#1C1B1F" />
          </View>
          <Text style={styles.tabLabel}>Orders</Text>
        </Pressable>

        <Pressable style={styles.tabItem}>
          <View style={styles.tabIconBox}>
            <Image source={require('@/assets/images/Ellipse 1008.svg')} style={styles.tabIcon} contentFit="contain" />
          </View>
          <Text style={styles.tabLabel}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}
