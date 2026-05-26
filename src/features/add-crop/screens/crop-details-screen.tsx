import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

type CropDetailsScreenProps = {
  cropName: string;
  setCropName: (val: string) => void;
  quantity: string;
  setQuantity: (val: string) => void;
  unit: string;
  setUnit: (val: string) => void;
  price: string;
  setPrice: (val: string) => void;
  category: string;
  setCategory: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export function CropDetailsScreen({ 
  cropName, setCropName,
  quantity, setQuantity,
  unit, setUnit,
  price, setPrice,
  category, setCategory,
  onNext, onBack 
}: CropDetailsScreenProps) {
  const [unitOpen, setUnitOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const isNextEnabled = cropName.trim() !== '' && quantity.trim() !== '' && price.trim() !== '';

  const handleNext = () => {
    if (isNextEnabled) {
      onNext();
    }
  };
  
  return (
    <View style={styles.screen}>
      <View style={styles.headerRow}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        </Pressable>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Crop Details</Text>
          <Text style={styles.subtitle}>Add Your crop details</Text>
        </View>
      </View>

      <View style={styles.progressRow}>
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={styles.progressSegment} />
        <View style={styles.progressSegment} />
        <View style={styles.progressSegment} />
      </View>

      <View style={styles.formStack}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Crop Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Tomato (Hybrid)"
            placeholderTextColor="#6D6D6D"
            value={cropName}
            onChangeText={setCropName}
          />
        </View>

        <View style={[styles.row, { zIndex: 10 }]}>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.inputLabel}>Quantity</Text>
            <TextInput
              style={styles.input}
              placeholder="500"
              placeholderTextColor="#6D6D6D"
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
            />
          </View>
          <View style={{ flex: 1, position: 'relative', zIndex: 10 }}>
            <Pressable 
              style={[styles.inputGroup, styles.inputGroupRow]} 
              onPress={() => setUnitOpen(!unitOpen)}
            >
              <View>
                <Text style={styles.inputLabel}>Unit</Text>
                <Text style={styles.input}>{unit}</Text>
              </View>
              <Ionicons name={unitOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#1C1B1F" />
            </Pressable>
            
            {unitOpen && (
              <View style={styles.dropdownContainer}>
                <Pressable 
                  style={[styles.dropdownItem, unit === 'kg' && styles.dropdownItemActive]}
                  onPress={() => { setUnit('kg'); setUnitOpen(false); }}
                >
                  <Text style={styles.dropdownText}>Kilogram (kg)</Text>
                </Pressable>
                <Pressable 
                  style={[styles.dropdownItem, unit === 'q' && styles.dropdownItemActive]}
                  onPress={() => { setUnit('q'); setUnitOpen(false); }}
                >
                  <Text style={styles.dropdownText}>Quintal (q)</Text>
                </Pressable>
                <Pressable 
                  style={[styles.dropdownItem, unit === 'ton' && styles.dropdownItemActive]}
                  onPress={() => { setUnit('ton'); setUnitOpen(false); }}
                >
                  <Text style={styles.dropdownText}>Ton (ton)</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Price per Kg</Text>
          <View style={styles.inputRow}>
            <Text style={styles.rupeeSymbol}>₹</Text>
            <TextInput
              style={styles.input}
              placeholder="25"
              placeholderTextColor="#6D6D6D"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
          </View>
        </View>

        <View style={{ position: 'relative', zIndex: 9 }}>
          <Pressable 
            style={[styles.inputGroup, styles.inputGroupRow]}
            onPress={() => setCategoryOpen(!categoryOpen)}
          >
            <View>
              <Text style={styles.inputLabel}>Category</Text>
              <Text style={styles.input}>{category}</Text>
            </View>
            <Ionicons name={categoryOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#1C1B1F" />
          </Pressable>

          {categoryOpen && (
            <View style={styles.dropdownContainer}>
              <Pressable 
                style={[styles.dropdownItem, category === 'Vegetables' && styles.dropdownItemActive]}
                onPress={() => { setCategory('Vegetables'); setCategoryOpen(false); }}
              >
                <Text style={styles.dropdownText}>Vegetables</Text>
              </Pressable>
              <Pressable 
                style={[styles.dropdownItem, category === 'Fruits' && styles.dropdownItemActive]}
                onPress={() => { setCategory('Fruits'); setCategoryOpen(false); }}
              >
                <Text style={styles.dropdownText}>Fruits</Text>
              </Pressable>
              <Pressable 
                style={[styles.dropdownItem, category === 'Flowers' && styles.dropdownItemActive]}
                onPress={() => { setCategory('Flowers'); setCategoryOpen(false); }}
              >
                <Text style={styles.dropdownText}>Flowers</Text>
              </Pressable>
            </View>
          )}
        </View>

        <View style={styles.banner}>
          <Ionicons name="arrow-up-outline" size={16} color="#FFFFFF" />
          <Text style={styles.bannerText}>Market rate for Tomato today: ₹22–28/kg</Text>
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
