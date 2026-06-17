import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, Platform, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

const AVATAR = require('@/assets/profile_assests/Ellipse 1008.png');

export function EditProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [avatar, setAvatar] = useState<string | null>(null);
  const [form, setForm] = useState({
    fullName: 'Rahul Kumar',
    mobileNumber: '00000 00000',
    village: 'Warangal, Telangana',
    cropType: 'Rice, Cotton',
    experience: '10 Years',
    landSize: '10 Acres',
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    // In a real app, save the updated `form` and `avatar` states to backend/context here.
    router.back();
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}>
        
        <View style={styles.profileSection}>
          <Pressable style={styles.avatarContainer} onPress={pickImage}>
            <Image source={avatar ? { uri: avatar } : AVATAR} style={styles.avatar} contentFit="cover" />
            <View style={styles.editIconBtn}>
              <Ionicons name="pencil" size={18} color="#4CAF50" />
            </View>
          </Pressable>
          <Pressable onPress={pickImage}>
            <Text style={styles.tapToChange}>Tap to change photo</Text>
          </Pressable>
        </View>

        <View style={styles.formSection}>
          <FieldBox
            label="Full Name"
            value={form.fullName}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, fullName: t }))}
            labelColor="#898989"
          />
          <FieldBox
            label="Mobile Number"
            value={form.mobileNumber}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, mobileNumber: t }))}
            labelColor="#898989"
            keyboardType="phone-pad"
          />
          <FieldBox
            label="Village / Town"
            value={form.village}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, village: t }))}
            labelColor="#898989"
          />
          <FieldBox
            label="Primary Crop Type"
            value={form.cropType}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, cropType: t }))}
            labelColor="#898989"
          />
          <FieldBox
            label="Years of Experience"
            value={form.experience}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, experience: t }))}
            labelColor="#6D6D6D"
          />
          <FieldBox
            label="Land Size (Acres)"
            value={form.landSize}
            onChangeText={(t: string) => setForm((prev) => ({ ...prev, landSize: t }))}
            labelColor="#898989"
          />
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </Pressable>
      </View>
    </View>
  );
}

function FieldBox({ label, value, onChangeText, labelColor, keyboardType = 'default' }: any) {
  return (
    <View style={styles.fieldBox}>
      <Text style={[styles.fieldLabel, { color: labelColor }]}>{label}</Text>
      <TextInput
        style={styles.fieldValue}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
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
    paddingHorizontal: 20,
    paddingBottom: 20,
    zIndex: 10,
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  editIconBtn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 38,
    height: 38,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.8,
    borderColor: '#4CAF50',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tapToChange: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#9A9A9A',
  },
  formSection: {
    gap: 14,
  },
  fieldBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  fieldLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    marginBottom: 4,
  },
  fieldValue: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
    padding: 0,
    margin: 0,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#FAFAF9',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    height: 50,
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
    fontSize: 15,
    color: '#FFFFFF',
  },
});
