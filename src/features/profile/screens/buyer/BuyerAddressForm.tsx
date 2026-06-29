import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, Platform, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { s, vs, ms } from '@/utils/scale';

export function BuyerAddressForm() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id?: string }>();
  
  const isEditing = !!id;

  const [form, setForm] = useState({
    type: isEditing ? 'Home' : '',
    name: isEditing ? 'Kiran' : '',
    phone: isEditing ? '00000 00000' : '',
    address: isEditing ? '24-6-9, Warangal, Warangal\\nTelangana – 504505' : '',
  });

  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/profile/addresses');
    }
  };

  const handleSave = () => {
    // Save logic goes here
    goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>{isEditing ? 'Edit Address' : 'Add New Address'}</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}>
        
        <View style={styles.formSection}>
          <FieldBox
            label="Address Type (e.g. Home, Work)"
            value={form.type}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, type: t }))}
          />
          <FieldBox
            label="Full Name"
            value={form.name}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, name: t }))}
          />
          <FieldBox
            label="Mobile Number"
            value={form.phone}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, phone: t }))}
            keyboardType="phone-pad"
          />
          <FieldBox
            label="Full Address"
            value={form.address}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, address: t }))}
            multiline={true}
          />
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Address</Text>
        </Pressable>
      </View>
    </View>
  );
}

function FieldBox({ label, value, onChangeText, keyboardType = 'default', multiline = false }: any) {
  return (
    <View style={styles.fieldBox}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        style={[styles.fieldValue, multiline && { minHeight: vs(60), textAlignVertical: 'top' }]}
        value={value || ''}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={multiline}
        placeholder={`Enter ${label.toLowerCase()}`}
        placeholderTextColor="#B0B0B0"
      />
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
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingBottom: vs(20),
    zIndex: 10,
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
    paddingTop: vs(20),
  },
  formSection: {
    gap: s(14),
  },
  fieldBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingVertical: vs(15),
    paddingHorizontal: s(20),
    justifyContent: 'center',
  },
  fieldLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    marginBottom: vs(4),
  },
  fieldValue: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    padding: 0,
    margin: 0,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: s(20),
    paddingTop: vs(10),
    backgroundColor: '#FAFAF9',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    height: vs(50),
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.12)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(76, 175, 80, 0.12)' as any,
      },
    }),
  },
  saveButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    color: '#FFFFFF',
  },
});
