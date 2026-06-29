import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { s, vs, ms } from '@/utils/scale';
export default function TrackOrderScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="#FFF" />
          </Pressable>
          <Text style={styles.headerTitle}>Track Order</Text>
        </View>
        <View style={styles.helpHeader}>
          <Image source={require('@/assets/orders_assests/image_39_615_1342.png')} style={styles.helpIcon} contentFit="contain" />
          <Text style={styles.helpText}>Need Help?</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Map View */}
        <View style={styles.mapContainer}>
          <Image source={require('@/assets/orders_assests/image_69_615_1345.png')} style={styles.mapImage} contentFit="cover" />
          
          {/* Dashed Line */}
          <View style={styles.mapDashedLine} />

          {/* Hyderabad */}
          <View style={[styles.absolutePos, { left: 54, top: 141, width: 20, height: 20, zIndex: 2 }]}>
            <Image source={require('@/assets/orders_assests/location_on_396_901.svg')} style={{ width: 20, height: 20 }} contentFit="contain" />
          </View>
          <View style={[styles.absolutePos, { left: 24, top: 109, width: 79, zIndex: 3, alignItems: 'center' }]}>
            <View style={styles.locationLabelAbsolute}>
              <Text style={styles.locationLabelTextAbsolute}>Hyderabad</Text>
            </View>
            <View style={styles.triangleDown} />
          </View>

          {/* Warangal */}
          <View style={[styles.absolutePos, { left: 314, top: 25, width: 20, height: 20, zIndex: 2 }]}>
            <Image source={require('@/assets/orders_assests/location_on_396_898.svg')} style={{ width: 20, height: 20 }} contentFit="contain" />
          </View>
          <View style={[styles.absolutePos, { left: 288, top: 45, width: 71, zIndex: 3, alignItems: 'center' }]}>
            <View style={styles.triangleUp} />
            <View style={styles.locationLabelAbsolute}>
              <Text style={styles.locationLabelTextAbsolute}>Warangal</Text>
            </View>
          </View>

          {/* Truck */}
          <View style={[styles.absolutePos, { left: 190, top: 72, width: 30, height: 30, zIndex: 4 }]}>
             <Image source={require('@/assets/orders_assests/image 70.svg')} style={{ width: 30, height: 30, transform: [{ rotate: '-12deg' }] }} contentFit="contain" />
          </View>
        </View>

        {/* Product Mini Card */}
        <View style={styles.productCard}>
          <Image source={require('@/assets/orders_assests/image_71_615_1364.png')} style={styles.miniImage} contentFit="cover" />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Tomato (Hybrid)</Text>
            <Text style={styles.productWeight}>500kg - Grade A (Premium)</Text>
          </View>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.viewDetailsText}>View details</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Order Status</Text>

        {/* Tracking Timeline */}
        <View style={styles.timelineCard}>
          <View style={styles.timelineContainer}>
            
            <View style={styles.timelineRow}>
              <View style={styles.svgIconContainer}>
                <Image source={require('@/assets/orders_assests/Frame 2608828.svg')} style={{ width: 40, height: 40 }} contentFit="contain" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.stepTitle}>Order Accepted</Text>
                <Text style={styles.stepDesc}>Your order has been accepted</Text>
                <Text style={styles.stepTime}>28 Mar 26, 09:30 AM</Text>
              </View>
            </View>

            <View style={styles.timelineRow}>
              <View style={styles.svgIconContainer}>
                <Image source={require('@/assets/orders_assests/Frame 2608829.svg')} style={{ width: 40, height: 40 }} contentFit="contain" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.stepTitle}>Preparing Order</Text>
                <Text style={styles.stepDesc}>We are preparing your order</Text>
                <Text style={styles.stepTime}>28 Mar 26, 10:15 AM</Text>
              </View>
            </View>

            <View style={styles.timelineRow}>
              <View style={styles.svgIconContainer}>
                <Image source={require('@/assets/orders_assests/Frame 2608830.svg')} style={{ width: 40, height: 40 }} contentFit="contain" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.stepTitleCurrent}>In Transit</Text>
                <Text style={styles.stepDescCurrent}>Your order is on the way</Text>
                <Text style={styles.stepTimeCurrent}>28 Mar 26, 11:20 AM</Text>
              </View>
            </View>

            <View style={styles.timelineRow}>
              <View style={styles.svgIconContainer}>
                <Image source={require('@/assets/orders_assests/Frame 2608831.svg')} style={{ width: 40, height: 40 }} contentFit="contain" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.stepTitle}>Out for Delivery</Text>
                <Text style={styles.stepDesc}>Your order is out of delivery</Text>
                <Text style={styles.stepTime}>28 Mar 26, 11:20 AM</Text>
              </View>
            </View>

            <View style={styles.timelineRow}>
              <View style={styles.iconContainerPending}>
                <Image source={require('@/assets/orders_assests/image_83_615_1404.png')} style={{ width: 20, height: 20 }} contentFit="contain" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.stepTitle}>Delivered</Text>
                <Text style={styles.stepDesc}>Your order has been delivered</Text>
                <Text style={styles.stepTime}>28 Mar 26, 11:20 AM</Text>
              </View>
            </View>

            {/* Connection Lines (absolute positioning) */}
            <View style={[styles.connectingLine, { top: 40, borderColor: '#4CAF50' }]} />
            <View style={[styles.connectingLine, { top: 122, borderColor: '#4CAF50' }]} />
            <View style={[styles.connectingLine, { top: 204, borderColor: '#EBEBEB' }]} />
            <View style={[styles.connectingLine, { top: 286, borderColor: '#EBEBEB' }]} />

          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FAFAF9' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 30, marginBottom: 20,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  headerTitle: { fontFamily: 'DMSans_500Medium', fontSize: 18, color: '#000' },
  backButton: {
    width: 48, height: 48, borderRadius: 15, backgroundColor: '#4CAF50', alignItems: 'center', justifyContent: 'center',
  },
  helpHeader: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  helpIcon: { width: 22, height: 22 },
  helpText: { fontFamily: 'DMSans_500Medium', fontSize: 14, color: '#4CAF50' },
  container: { paddingHorizontal: 20, paddingBottom: 40 },
  
  mapContainer: { position: 'relative', height: 209, marginBottom: 20, borderRadius: 14, overflow: 'hidden', backgroundColor: '#F0F0F0' },
  mapImage: { width: '100%', height: '100%', position: 'absolute' },
  
  mapDashedLine: {
    position: 'absolute',
    width: s(260.7),
    height: 0,
    left: s(63.65),
    top: vs(93),
    borderTopWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#4CAF50',
    transform: [{ rotate: '-24.04deg' }],
    zIndex: 1,
  },
  absolutePos: {
    position: 'absolute',
  },
  locationLabelAbsolute: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: s(10),
    paddingVertical: vs(5),
    borderRadius: s(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationLabelTextAbsolute: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(10),
    color: '#000',
  },
  triangleDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFFFFF',
  },
  triangleUp: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFFFFF',
  },

  
  productCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, borderWidth: 1, borderColor: '#EBEBEB', marginBottom: 20 },
  miniImage: { width: 40, height: 40, borderRadius: 8 },
  productInfo: { flex: 1, marginLeft: 12, gap: 4 },
  productName: { fontFamily: 'DMSans_500Medium', fontSize: 14, color: '#000' },
  productWeight: { fontFamily: 'DMSans_400Regular', fontSize: 13, color: '#000' },
  viewDetailsText: { fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#3F3F3F' },

  sectionTitle: { fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#000', marginBottom: 15 },
  
  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(20),
    paddingBottom: 0, // Let items handle bottom spacing
  },
  timelineContainer: { position: 'relative' },
  timelineRow: { flexDirection: 'row', gap: 15, marginBottom: 25, zIndex: 2 },
  svgIconContainer: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  iconContainerPending: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFFFFF', borderColor: '#EBEBEB', borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  timelineContent: { flex: 1, gap: 2, justifyContent: 'center' },
  
  stepTitle: { fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#000' },
  stepTitleCurrent: { fontFamily: 'DMSans_400Regular', fontSize: 14, color: '#4CAF50' },
  stepDesc: { fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#838383' },
  stepDescCurrent: { fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#4CAF50' },
  stepTime: { fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#838383' },
  stepTimeCurrent: { fontFamily: 'DMSans_400Regular', fontSize: 12, color: '#4CAF50' },
  
  connectingLine: { 
    position: 'absolute', 
    left: s(19), 
    width: 0, 
    height: vs(42), 
    borderLeftWidth: 1, 
    borderStyle: 'dashed', 
    zIndex: 1 
  },
});
