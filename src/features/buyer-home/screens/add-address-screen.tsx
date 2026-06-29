import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  Switch,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
export function AddAddressScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const { name, phone, street, addressType } = useLocalSearchParams<{
    name?: string;
    phone?: string;
    street?: string;
    addressType?: string;
  }>();

  const isEdit = !!name;

  const [fullName, setFullName]       = useState(name ?? '');
  const [mobileNum, setMobileNum]     = useState(phone ?? '');
  const [houseStreet, setHouseStreet] = useState(street ?? '');
  const [area, setArea]               = useState('');
  const [city, setCity]               = useState('');
  const [pincode, setPincode]         = useState('');
  const [stateVal, setStateVal]       = useState('');
  const [addrType, setAddrType]       = useState(addressType ?? '');
  const [isDefault, setIsDefault]     = useState(true);

  return (
    <View style={styles.screen}>
      {/* ── Header ── */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 30) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>
          {isEdit ? 'Edit Address' : 'Add New Address'}
        </Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 120 },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        {/* ── Full Name ── */}
        <View style={styles.fieldCard}>
          <Text style={styles.fieldLabel}>Full Name</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="Kiran"
            placeholderTextColor="#BDBDBD"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* ── Mobile Number ── */}
        <View style={styles.fieldCard}>
          <Text style={styles.fieldLabel}>Mobile Number</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="00000 00000"
            placeholderTextColor="#BDBDBD"
            value={mobileNum}
            onChangeText={setMobileNum}
            keyboardType="phone-pad"
          />
        </View>

        {/* ── House / Flat / Street ── */}
        <View style={styles.fieldCard}>
          <Text style={styles.fieldLabel}>House / Flat / Street</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="H.NO 24-6-9"
            placeholderTextColor="#BDBDBD"
            value={houseStreet}
            onChangeText={setHouseStreet}
          />
        </View>

        {/* ── Area / Village ── */}
        <View style={styles.fieldCard}>
          <Text style={styles.fieldLabel}>Area / Village</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="Warangal"
            placeholderTextColor="#BDBDBD"
            value={area}
            onChangeText={setArea}
          />
        </View>

        {/* ── City + Pincode (side by side) ── */}
        <View style={styles.rowPair}>
          <View style={[styles.fieldCard, styles.halfCard]}>
            <Text style={styles.fieldLabel}>City</Text>
            <TextInput
              style={styles.fieldInput}
              placeholder="Warangal"
              placeholderTextColor="#BDBDBD"
              value={city}
              onChangeText={setCity}
            />
          </View>
          <View style={[styles.fieldCard, styles.halfCard]}>
            <Text style={styles.fieldLabel}>Pincode</Text>
            <TextInput
              style={styles.fieldInput}
              placeholder="504505"
              placeholderTextColor="#BDBDBD"
              value={pincode}
              onChangeText={setPincode}
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>
        </View>

        {/* ── State ── */}
        <View style={styles.fieldCard}>
          <Text style={styles.fieldLabel}>State</Text>
          <TextInput
            style={styles.fieldInput}
            placeholder="Telangana"
            placeholderTextColor="#BDBDBD"
            value={stateVal}
            onChangeText={setStateVal}
          />
        </View>

        {/* ── Address Type ── */}
        <View style={styles.addrTypeCard}>
          <Text style={styles.addrTypeTitle}>Address Type</Text>
          <View style={styles.addrTypeInputBox}>
            <TextInput
              style={styles.addrTypeInput}
              placeholder="Type here..."
              placeholderTextColor="#898989"
              value={addrType}
              onChangeText={setAddrType}
            />
          </View>
        </View>

        {/* ── Set as Default Address ── */}
        <View style={styles.defaultRow}>
          <View style={styles.defaultTextCol}>
            <Text style={styles.defaultTitle}>Set as Default Address</Text>
            <Text style={styles.defaultSub}>This Address will be used as default</Text>
          </View>
          <Switch
            value={isDefault}
            onValueChange={setIsDefault}
            trackColor={{ false: '#E0E0E0', true: '#4CAF50' }}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#E0E0E0"
            style={styles.toggle}
          />
        </View>
      </ScrollView>

      {/* ── Save Address fixed button ── */}
      <View
        style={[styles.bottomContainer, { paddingBottom: Math.max(insets.bottom, 20) }]}
      >
        <View style={styles.divider} />
        <Pressable style={styles.saveButton} onPress={() => router.back()}>
          <Text style={styles.saveButtonText}>
            {isEdit ? 'Save Changes' : 'Save Address'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },

  /* ── Header ── */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingBottom: vs(15),
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
    lineHeight: ms(27),
    color: '#000000',
  },

  /* ── Scroll ── */
  scrollContent: {
    paddingHorizontal: s(20),
    paddingTop: vs(8),
    gap: s(11),
  },

  /* ── Generic field card (label + input stacked) ── */
  fieldCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingTop: vs(15),
    paddingHorizontal: s(20),
    paddingBottom: vs(18),
    gap: s(4),
    height: vs(76),
    justifyContent: 'center',
  },
  fieldLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#6D6D6D',
  },
  fieldInput: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: '#000000',
    padding: 0,
    height: vs(21),
  },

  /* ── Side-by-side City + Pincode ── */
  rowPair: {
    flexDirection: 'row',
    gap: s(12),
  },
  halfCard: {
    flex: 1,
  },

  /* ── Address Type card ── */
  addrTypeCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    gap: s(10),
    height: vs(102),
  },
  addrTypeTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    lineHeight: ms(22),
    color: '#000000',
  },
  addrTypeInputBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(11),
    paddingHorizontal: s(16),
    paddingVertical: vs(8),
    height: vs(38),
    justifyContent: 'center',
  },
  addrTypeInput: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(22),
    color: '#000000',
    padding: 0,
  },

  /* ── Set as Default toggle row ── */
  defaultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingHorizontal: s(16),
    paddingVertical: vs(14),
    height: vs(68),
    gap: s(40),
  },
  defaultTextCol: {
    flexDirection: 'column',
    gap: s(4),
    flex: 1,
  },
  defaultTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  defaultSub: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#898989',
  },
  toggle: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },

  /* ── Fixed bottom Save button ── */
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAFAF9',
    paddingTop: vs(10),
  },
  divider: {
    height: vs(1),
    backgroundColor: '#EBEBEB',
    marginBottom: vs(20),
    marginHorizontal: s(20),
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    height: vs(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: s(20),
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.12)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: { elevation: 3 },
    }),
  },
  saveButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    lineHeight: ms(20),
    color: '#FFFFFF',
  },
});
