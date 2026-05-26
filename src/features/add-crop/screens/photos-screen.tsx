import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../styles';

type PhotosScreenProps = {
  photos: string[];
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
  onNext: () => void;
  onBack: () => void;
};

export function PhotosScreen({ photos, setPhotos, onNext, onBack }: PhotosScreenProps) {
  const isNextEnabled = photos.length > 0;

  const handleNext = () => {
    if (isNextEnabled) {
      onNext();
    }
  };

  const pickImage = async () => {
    if (photos.length >= 5) {
      Alert.alert('Limit Reached', 'You can only upload up to 5 photos.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 5 - photos.length,
      quality: 1,
    });

    if (!result.canceled) {
      const newUris = result.assets.map(asset => asset.uri);
      setPhotos(prev => [...prev, ...newUris].slice(0, 5));
    }
  };

  const removePhoto = (indexToRemove: number) => {
    setPhotos(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Pressable>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Add Photos, videos</Text>
          <Text style={styles.subtitle}>Good photos sell faster!</Text>
        </View>
      </View>

      <View style={styles.progressRow}>
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={styles.progressSegment} />
        <View style={styles.progressSegment} />
      </View>

      <Pressable style={styles.uploadBox} onPress={pickImage}>
        <Text style={styles.uploadTitle}>Tap to take a photo, video</Text>
        <Text style={styles.uploadSubtitle}>or choose from gallery</Text>
      </Pressable>

      <View>
        <Text style={styles.photoCount}>Uploaded ({photos.length}/5)</Text>
        <View style={styles.photoGrid}>
          {photos.map((uri, index) => (
            <View key={index} style={styles.photoWrapper}>
              <Image 
                source={{ uri }} 
                style={styles.photo} 
                contentFit="cover" 
              />
              <Pressable 
                style={{ position: 'absolute', top: 4, right: 4, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 12, padding: 4 }}
                onPress={() => removePhoto(index)}
              >
                <Ionicons name="close" size={16} color="#FFFFFF" />
              </Pressable>
            </View>
          ))}
          {photos.length < 5 && (
            <Pressable style={styles.addMoreBox} onPress={pickImage}>
              <Ionicons name="add" size={32} color="#1A1A1A" />
            </Pressable>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable 
          style={[styles.primaryButton, !isNextEnabled && { opacity: 0.5 }]} 
          onPress={handleNext}
          disabled={!isNextEnabled}
        >
          <Text style={styles.primaryButtonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}
