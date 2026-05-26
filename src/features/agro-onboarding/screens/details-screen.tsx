import { useState } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Field } from '../components/field';
import { PrimaryButton } from '../components/primary-button';
import { onboardingStyles as styles } from '../styles';

type DetailsScreenProps = {
  name: string;
  setName: (value: string) => void;
  village: string;
  setVillage: (value: string) => void;
  crop: string;
  setCrop: (value: string) => void;
  experience: string;
  setExperience: (value: string) => void;
  land: string;
  setLand: (value: string) => void;
  onNext: () => void;
};

export function DetailsScreen({
  name,
  setName,
  village,
  setVillage,
  crop,
  setCrop,
  experience,
  setExperience,
  land,
  setLand,
  onNext,
}: DetailsScreenProps) {
  const handleNext = () => {
    onNext();
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['rgba(76, 175, 80, 0.5)', 'rgba(166, 215, 168, 0.5)', 'rgba(235, 235, 235, 0)']}
        locations={[0, 0.4928, 0.9856]}
        style={styles.gradientTop}
      />
      <View style={styles.copyBlock}>
        <Text style={styles.title}>Your Details</Text>
        <Text style={styles.subcopy}>Tell us a bit about yourself</Text>
      </View>

      <View style={styles.formStack}>
        <Field
          label="Full Name"
          onChangeText={setName}
          placeholder="Rahul Kumar"
          value={name}
        />
        <Field
          label="Village / Town"
          onChangeText={setVillage}
          placeholder="Warangal, Telangana"
          value={village}
        />
        <Field
          label="Primary Crop Type"
          onChangeText={setCrop}
          placeholder="Rice, Cotton"
          value={crop}
        />
        <Field
          label="Years of Experience"
          onChangeText={setExperience}
          placeholder="10 Years"
          value={experience}
        />
        <Field
          label="Land Size (Acres)"
          onChangeText={setLand}
          placeholder="e.g. 5 acres"
          value={land}
        />
      </View>

      <View style={styles.footer}>
        <PrimaryButton label="Next" onPress={handleNext} />
      </View>
    </View>
  );
}
