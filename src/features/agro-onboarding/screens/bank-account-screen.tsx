import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image } from 'expo-image';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { onboardingStyles as styles } from '../styles';

type BankAccountScreenProps = {
  bankName: string;
  setBankName: (value: string) => void;
  accountHolderName: string;
  setAccountHolderName: (value: string) => void;
  accountNumber: string;
  setAccountNumber: (value: string) => void;
  ifscCode: string;
  setIfscCode: (value: string) => void;
  branchName: string;
  setBranchName: (value: string) => void;
  onNext: () => void;
};

export function BankAccountScreen({
  bankName,
  setBankName,
  accountHolderName,
  setAccountHolderName,
  accountNumber,
  setAccountNumber,
  ifscCode,
  setIfscCode,
  branchName,
  setBranchName,
  onNext,
}: BankAccountScreenProps) {
  const [passbookImage, setPassbookImage] = useState<string | null>(null);

  const isValid =
    accountHolderName.trim().length > 0 &&
    accountNumber.trim().length > 0 &&
    ifscCode.trim().length > 0 &&
    branchName.trim().length > 0 &&
    passbookImage !== null;

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPassbookImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.panScreen}>
      {/* ─── Progress Bar ─── */}
      <View style={styles.panProgressContainer}>
        <View style={styles.panProgressBarActive} />
        <View style={styles.panProgressBarActive} />
        <View style={styles.panProgressBarActive} />
        <View style={styles.panProgressBarInactive} />
      </View>

      {/* ─── Header ─── */}
      <View style={styles.panHeaderSection}>
        <Text style={styles.panTitle}>Bank Account Details</Text>
        <Text style={styles.panSubtitle}>Add your bank information for secure transactions</Text>
      </View>

      {/* ─── Form Fields ─── */}
      <TouchableOpacity activeOpacity={0.7} style={[styles.panInputContainer, { marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
        <View>
          <Text style={styles.panInputLabel}>Bank name</Text>
          <Text style={styles.panInput}>{bankName || 'State Bank of India'}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="#1C1B1F" />
      </TouchableOpacity>

      <View style={[styles.panInputContainer, { marginBottom: 15 }]}>
        <Text style={styles.panInputLabel}>Account holder name</Text>
        <TextInput
          onChangeText={setAccountHolderName}
          placeholder="Harish"
          placeholderTextColor="#8c8c8c"
          style={styles.panInput}
          value={accountHolderName}
        />
      </View>

      <View style={[styles.panInputContainer, { marginBottom: 15 }]}>
        <Text style={styles.panInputLabel}>Account number</Text>
        <TextInput
          keyboardType="number-pad"
          onChangeText={setAccountNumber}
          placeholder="XXXX XXXX 4521"
          placeholderTextColor="#8c8c8c"
          style={styles.panInput}
          value={accountNumber}
        />
      </View>

      <View style={[styles.panInputContainer, { marginBottom: 15 }]}>
        <Text style={styles.panInputLabel}>IFSC code</Text>
        <TextInput
          autoCapitalize="characters"
          onChangeText={setIfscCode}
          placeholder="SBIN0002467"
          placeholderTextColor="#8c8c8c"
          style={styles.panInput}
          value={ifscCode}
        />
      </View>

      <View style={[styles.panInputContainer, { marginBottom: 25 }]}>
        <Text style={styles.panInputLabel}>Branch name</Text>
        <TextInput
          onChangeText={setBranchName}
          placeholder="Warangal Main"
          placeholderTextColor="#8c8c8c"
          style={styles.panInput}
          value={branchName}
        />
      </View>

      {/* ─── Upload Passbook ─── */}
      <View style={styles.panUploadSection}>
        <Text style={styles.panUploadTitle}>Upload Passbook</Text>
        <Text style={[styles.panInputLabel, { marginBottom: 10, marginTop: -6 }]}>Please upload the first page of your passbook</Text>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={[styles.panUploadBox, passbookImage && styles.panUploadBoxRow]}
          onPress={handlePickImage}
        >
          {passbookImage && (
            <Image source={{ uri: passbookImage }} style={styles.panPreviewImage} contentFit="cover" />
          )}
          <View style={styles.panUploadTextContainer}>
            <MaterialIcons name="cloud-upload" size={20} color="#1C1B1F" />
            <Text style={styles.panUploadLabel}>Upload front side</Text>
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
