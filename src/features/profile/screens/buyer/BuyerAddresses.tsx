import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { s, vs, ms } from '@/utils/scale';

const addresses = [
  {
    id: '1',
    type: 'Home',
    name: 'Kiran',
    phone: '00000 00000',
    address: '24-6-9, Warangal, Warangal\\nTelangana – 504505',
    isDefault: false,
  },
  {
    id: '2',
    type: 'Home',
    name: 'Kiran',
    phone: '00000 00000',
    address: '14-2-56, Ameerpet Main Road,\\nHyderabad, Telangana – 500016',
    isDefault: true,
  },
  {
    id: '3',
    type: 'Home',
    name: 'Kiran',
    phone: '00000 00000',
    address: '14-2-56, Ameerpet Main Road,\\nHyderabad, Telangana – 500016',
    isDefault: false,
  },
  {
    id: '4',
    type: 'Home',
    name: 'Kiran',
    phone: '00000 00000',
    address: '14-2-56, Ameerpet Main Road,\\nHyderabad, Telangana – 500016',
    isDefault: false,
  },
];

export function BuyerAddresses() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Saved Addresses</Text>
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}>
        
        <View style={styles.addressList}>
          {addresses.map((item) => (
            <Pressable 
              key={item.id} 
              style={[
                styles.addressCard, 
                item.isDefault && styles.addressCardDefault
              ]}
              onPress={() => router.push({ pathname: '/profile/address-form', params: { id: item.id } } as any)}
            >
              <View style={styles.cardHeader}>
                <View style={styles.locationIconWrap}>
                  <Ionicons name="location-outline" size={18} color="#000000" />
                </View>
                <View style={styles.addressDetails}>
                  <Text style={styles.addressType}>{item.type}</Text>
                  <Text style={styles.addressNamePhone}>{item.name}, {item.phone}</Text>
                  <Text style={styles.addressString}>{item.address}</Text>
                </View>
                <Pressable 
                  style={styles.editButton}
                  onPress={(e) => {
                    e.stopPropagation(); // Prevent card press when edit is pressed
                    router.push({ pathname: '/profile/address-form', params: { id: item.id } } as any);
                  }}
                >
                  <Text style={styles.editButtonText}>Edit</Text>
                </Pressable>
              </View>
            </Pressable>
          ))}
        </View>

        <Pressable 
          style={styles.addNewBtn}
          onPress={() => router.push('/profile/address-form' as any)}
        >
          <Ionicons name="add" size={20} color="#000000" />
          <Text style={styles.addNewText}>Add New Address</Text>
        </Pressable>

      </ScrollView>
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
    paddingHorizontal: s(20),
    paddingBottom: vs(20),
    zIndex: 10,
    gap: s(15),
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
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(18),
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: s(20),
    paddingTop: vs(10),
  },
  addressList: {
    gap: vs(15),
    marginBottom: vs(20),
  },
  addressCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
  },
  addressCardDefault: {
    borderColor: '#4CAF50',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: s(12),
  },
  locationIconWrap: {
    marginTop: vs(2),
  },
  addressDetails: {
    flex: 1,
    gap: vs(4),
  },
  addressType: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    color: '#000000',
  },
  addressNamePhone: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#404040',
  },
  addressString: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    lineHeight: ms(19),
    marginTop: vs(2),
  },
  editButton: {
    backgroundColor: '#4CAF50',
    borderRadius: s(8),
    paddingVertical: vs(6),
    paddingHorizontal: s(16),
    alignSelf: 'flex-start',
  },
  editButtonText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(12),
    color: '#FFFFFF',
  },
  addNewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#4CAF50',
    borderRadius: s(14),
    paddingVertical: vs(14),
    gap: s(10),
  },
  addNewText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
});
