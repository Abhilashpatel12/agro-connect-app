import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { selectAddressStyles as styles } from '../select-address-styles';

const ADDRESSES = [
  {
    id: '1',
    label: 'Home',
    name: 'Kiran 00000 00000',
    street: '14-2-56, Ameerpet Main Road, Hyderabad, Telangana – 500016',
  },
  {
    id: '2',
    label: 'Home',
    name: 'Kiran, 00000 00000',
    street: '14-2-56, Ameerpet Main Road, Hyderabad, Telangana – 500016',
  },
  {
    id: '3',
    label: 'Home',
    name: 'Kiran, 00000 00000',
    street: '14-2-56, Ameerpet Main Road, Hyderabad, Telangana – 500016',
  },
];

export function SelectAddressScreen() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState('1');

  return (
    <SafeAreaView style={styles.container}>
      {/* ── Header ── */}
      <View style={styles.headerContainer}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Select Delivery Address</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Address Cards ── */}
        {ADDRESSES.map((addr) => (
          <Pressable
            key={addr.id}
            style={[
              styles.addressCard,
              selectedId === addr.id && styles.addressCardSelected,
            ]}
            onPress={() => setSelectedId(addr.id)}
          >
            {/* Left: icon + text */}
            <View style={styles.addressLeft}>
              <View style={styles.addressIconWrap}>
                <Ionicons name="location-sharp" size={19} color="#000000" />
              </View>
              <View style={styles.addressTextCol}>
                <Text style={styles.addressHomeLabel}>{addr.label}</Text>
                <View style={styles.addressSubCol}>
                  <Text style={styles.addressName}>{addr.name}</Text>
                  <Text style={styles.addressStreet}>{addr.street}</Text>
                </View>
              </View>
            </View>

            {/* Edit button */}
            <Pressable
              style={styles.editBtn}
              onPress={(e) => {
                e.stopPropagation();
                router.push({
                  pathname: '/add-address',
                  params: {
                    name: addr.name,
                    street: addr.street,
                    addressType: addr.label,
                  },
                });
              }}
            >
              <Text style={styles.editBtnText}>Edit</Text>
            </Pressable>
          </Pressable>
        ))}

        {/* ── Add New Address ── */}
        <Pressable
          style={styles.addNewBtn}
          onPress={() => router.push('/add-address')}
        >
          <Ionicons name="add" size={24} color="#000000" />
          <Text style={styles.addNewText}>Add New Address</Text>
        </Pressable>
      </ScrollView>

      {/* ── Continue fixed button ── */}
      <View style={styles.continueContainer}>
        <Pressable style={styles.continueBtn} onPress={() => router.back()}>
          <Text style={styles.continueBtnText}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
