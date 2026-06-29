import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { onboardingStyles as styles } from '../styles';

type PanCardScreenProps = {
  panNumber: string;
  setPanNumber: (value: string) => void;
  onNext: () => void;
};

export function PanCardScreen({ panNumber, setPanNumber, onNext }: PanCardScreenProps) {

  const isValid = panNumber.trim().length === 10;

  return (
    <View style={styles.panScreen}>
      {/* ─── Progress Bar ─── */}
      <View style={styles.panProgressContainer}>
        <View style={styles.panProgressBarActive} />
        <View style={styles.panProgressBarInactive} />
        <View style={styles.panProgressBarInactive} />
        <View style={styles.panProgressBarInactive} />
      </View>

      {/* ─── Header ─── */}
      <View style={styles.panHeaderSection}>
        <Text style={styles.panTitle}>Pan Card Details</Text>
        <Text style={styles.panSubtitle}>Please upload clear images of your pan card</Text>
      </View>

      {/* ─── PAN Input ─── */}
      <View style={styles.panInputContainer}>
        <Text style={styles.panInputLabel}>Pan card number</Text>
        <TextInput
          autoCapitalize="characters"
          maxLength={10}
          onChangeText={setPanNumber}
          placeholder="0000000000"
          placeholderTextColor="#8c8c8c"
          style={styles.panInput}
          value={panNumber}
        />
      </View>

      {/* ─── Upload Front Side ─── */}
      <View style={styles.panUploadSection}>
        <Text style={styles.panUploadTitle}>Front side</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.panUploadBox}>
          <MaterialIcons name="cloud-upload" size={20} color="#1C1B1F" />
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text style={styles.panUploadLabel}>Upload front side</Text>
            <Text style={styles.panUploadHint}>JPG, PNG, PDF (Max 5MB)</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* ─── Upload Back Side ─── */}
      <View style={styles.panUploadSection}>
        <Text style={styles.panUploadTitle}>Back side</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.panUploadBox}>
          <MaterialIcons name="cloud-upload" size={20} color="#1C1B1F" />
          <View style={{ alignItems: 'center', gap: 4 }}>
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
