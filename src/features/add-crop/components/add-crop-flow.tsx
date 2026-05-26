import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { CropDetailsScreen } from '@/features/add-crop/screens/crop-details-screen';
import { PhotosScreen } from '@/features/add-crop/screens/photos-screen';
import { MoreDetailsScreen } from '@/features/add-crop/screens/more-details-screen';
import { ReviewScreen } from '@/features/add-crop/screens/review-screen';
import { SuccessScreen } from '@/features/add-crop/screens/success-screen';
import { styles } from '@/features/add-crop/styles';

type AddCropStep = 'details' | 'photos' | 'more_details' | 'review' | 'success';
const STEPS: AddCropStep[] = ['details', 'photos', 'more_details', 'review', 'success'];

export function AddCropFlow() {
  const router = useRouter();
  const [step, setStep] = useState<AddCropStep>('details');
  const [photos, setPhotos] = useState<string[]>([]);
  
  // Lifted state
  const [cropName, setCropName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('kg');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Vegetables');
  const [harvestDate, setHarvestDate] = useState('28 Mar 2026');
  const [location, setLocation] = useState('Warangal, TG');
  const [quality, setQuality] = useState('Grade A - Premium');
  const [description, setDescription] = useState('');

  const safeAreaInsets = useSafeAreaInsets();

  const stepIndex = STEPS.indexOf(step);

  function goBack() {
    if (stepIndex === 0) {
      if (router.canGoBack()) {
        router.back();
      } else {
        router.replace('/home' as any);
      }
    } else {
      setStep(STEPS[stepIndex - 1]);
    }
  }

  function goNext() {
    if (stepIndex < STEPS.length - 1) {
      setStep(STEPS[stepIndex + 1]);
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', default: undefined })}
        style={styles.keyboardView}>
        <ScrollView
          bounces={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: Math.max(safeAreaInsets.bottom, 16) + 8 },
          ]}>
          <View style={styles.canvas}>
            {step === 'details' && (
              <CropDetailsScreen 
                cropName={cropName} setCropName={setCropName}
                quantity={quantity} setQuantity={setQuantity}
                unit={unit} setUnit={setUnit}
                price={price} setPrice={setPrice}
                category={category} setCategory={setCategory}
                onNext={goNext} onBack={goBack} 
              />
            )}
            {step === 'photos' && <PhotosScreen photos={photos} setPhotos={setPhotos} onNext={goNext} onBack={goBack} />}
            {step === 'more_details' && (
              <MoreDetailsScreen 
                harvestDate={harvestDate} setHarvestDate={setHarvestDate}
                location={location} setLocation={setLocation}
                quality={quality} setQuality={setQuality}
                description={description} setDescription={setDescription}
                onNext={goNext} onBack={goBack} 
              />
            )}
            {step === 'review' && (
              <ReviewScreen 
                photos={photos} 
                cropName={cropName}
                quantity={quantity}
                unit={unit}
                price={price}
                category={category}
                harvestDate={harvestDate}
                location={location}
                quality={quality}
                description={description}
                onNext={goNext} 
                onBack={goBack} 
              />
            )}
            {step === 'success' && <SuccessScreen onHome={() => router.replace('/home' as any)} />}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
