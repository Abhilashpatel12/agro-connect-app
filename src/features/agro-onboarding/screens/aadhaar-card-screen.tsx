import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image } from 'expo-image';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { onboardingStyles as styles } from '../styles';

type AadhaarCardScreenProps = {
  aadhaarNumber: string;
  setAadhaarNumber: (value: string) => void;
  onNext: () => void;
};

export function AadhaarCardScreen({ aadhaarNumber, setAadhaarNumber, onNext }: AadhaarCardScreenProps) {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  // Aadhaar is exactly 12 digits
  const isValid = aadhaarNumber.trim().length === 12 && frontImage && backImage;

  const handlePickImage = async (side: 'front' | 'back') => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      if (side === 'front') setFrontImage(result.assets[0].uri);
      if (side === 'back') setBackImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.panScreen}>
      {/* ─── Progress Bar ─── */}
      <View style={styles.panProgressContainer}>
        <View style={styles.panProgressBarActive} />
        <View style={styles.panProgressBarActive} />
        <View style={styles.panProgressBarInactive} />
        <View style={styles.panProgressBarInactive} />
      </View>

      {/* ─── Header ─── */}
      <View style={styles.panHeaderSection}>
        <Text style={styles.panTitle}>Aadhaar Card Details</Text>
        <Text style={styles.panSubtitle}>Please upload clear images of your aadhaar card</Text>
      </View>

      {/* ─── Aadhaar Input ─── */}
      <View style={styles.panInputContainer}>
        <Text style={styles.panInputLabel}>Aadhaar card number</Text>
        <TextInput
          keyboardType="number-pad"
          maxLength={12}
          onChangeText={setAadhaarNumber}
          placeholder="000000000000"
          placeholderTextColor="#8c8c8c"
          style={styles.panInput}
          value={aadhaarNumber}
        />
      </View>

      {/* ─── Upload Front Side ─── */}
      <View style={styles.panUploadSection}>
        <Text style={styles.panUploadTitle}>Front side</Text>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={[styles.panUploadBox, frontImage && styles.panUploadBoxRow]}
          onPress={() => handlePickImage('front')}
        >
          {frontImage && (
            <Image source={{ uri: frontImage }} style={styles.panPreviewImage} contentFit="cover" />
          )}
          <View style={styles.panUploadTextContainer}>
            <MaterialIcons name="cloud-upload" size={20} color="#1C1B1F" />
            <Text style={styles.panUploadLabel}>Upload front side</Text>
            <Text style={styles.panUploadHint}>JPG, PNG, PDF (Max 5MB)</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* ─── Upload Back Side ─── */}
      <View style={styles.panUploadSection}>
        <Text style={styles.panUploadTitle}>Back side</Text>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={[styles.panUploadBox, backImage && styles.panUploadBoxRow]}
          onPress={() => handlePickImage('back')}
        >
          {backImage && (
            <Image source={{ uri: backImage }} style={styles.panPreviewImage} contentFit="cover" />
          )}
          <View style={styles.panUploadTextContainer}>
            <MaterialIcons name="cloud-upload" size={20} color="#1C1B1F" />
            <Text style={styles.panUploadLabel}>Upload back side</Text>
            <Text style={styles.panUploadHint}>JPG, PNG, PDF (Max 5MB)</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* ─── Footer ─── */}
      <View style={styles.panFooter}>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={[styles.panContinueButton, isValid && { backgroundColor: '#4CAF50' }]} 
          onPress={onNext}
          disabled={!isValid}
        >
          <Text style={styles.panContinueButtonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.panFooterHint}>Your documents are encrypted and secure</Text>
      </View>
    </View>
  );
}
