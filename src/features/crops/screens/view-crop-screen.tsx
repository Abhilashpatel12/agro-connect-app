import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../view-crop-styles';

export function ViewCropScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Pressable>
        <View style={styles.statusPill}>
          <Text style={styles.statusText}>Live</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image 
          source={require('@/assets/images/image 67.png')} 
          style={styles.mainImage} 
          contentFit="cover" 
        />

        <View style={styles.titleCard}>
          <Text style={styles.titleText}>Tomato (Hybrid)</Text>
          <Text style={styles.subtitleText}>Listed 28 Mar 2026 · #KM-2026-0381</Text>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.statCol}>
            <View style={styles.statValueRow}>
              <View style={styles.rupeeBadgeSmall}>
                <MaterialIcons name="currency-rupee" size={12} color="#1C1B1F" />
              </View>
              <Text style={styles.statValue}>25</Text>
            </View>
            <Text style={styles.statLabel}>per kg</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.statCol}>
            <Text style={styles.statValue}>500</Text>
            <Text style={styles.statLabel}>Kg Available</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statCol}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Requests</Text>
          </View>
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.detailsSection}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Harvest Date:</Text>
              <Text style={styles.detailValue}>28 Mar 2026</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Quality:</Text>
              <Text style={styles.detailValue}>Grade A · Premium</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Location:</Text>
              <Text style={styles.detailValue}>Warangal, TG</Text>
            </View>
          </View>

          <View style={styles.totalSection}>
            <Text style={styles.totalLabel}>Total Value:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.rupeeBadgeSmall}>
                <MaterialIcons name="currency-rupee" size={12} color="#1C1B1F" />
              </View>
              <Text style={styles.totalValue}>12,500</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.actionButtons, { position: 'absolute', bottom: 20, left: 0, right: 0 }]}>
        <Pressable style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Delete</Text>
        </Pressable>
        <Pressable style={styles.editButton}>
          <Ionicons name="pencil-outline" size={20} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
}
