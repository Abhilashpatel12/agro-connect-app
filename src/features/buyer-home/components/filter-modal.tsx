import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Modal, ScrollView, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { filterStyles as styles } from './filter-modal-styles';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

const FILTER_DATA = [
  {
    category: 'Price',
    title: 'Select Price Range',
    options: [
      'Under ₹ 20 /kg',
      '₹ 20 - 30 /kg',
      '₹ 30 - 40 /kg',
      '₹ 40 - 50 /kg',
      '₹ 50 - 60 /kg',
      'Above ₹ 60 /kg',
    ]
  },
  {
    category: 'Distance',
    title: 'Select Distance Range',
    options: [
      'Near by (within 5km)',
      'Within 15km',
      'Within 25km',
      'Within 35km',
      'Within 45km',
      'Above 55km',
    ]
  },
  {
    category: 'Freshness',
    title: 'Select Freshness of Product',
    options: [
      'Harvested Today',
      'Last 2 days',
      'Last 4 days',
      'Last 6 days',
      'More than 1 week',
    ]
  },
  {
    category: 'Rating',
    title: 'Select Rating',
    options: [
      '4.5 above',
      '3.5 above',
      '2 & above',
      '1 & above',
    ]
  },
  {
    category: 'Quality Grade',
    title: 'Select Quality Grade',
    options: [
      'Grade A (Best Quality)',
      'Grade B (Good Quality)',
      'Grade C (Standard Quality)',
    ]
  },
  {
    category: 'Sort By',
    title: 'Sort Products by',
    options: [
      'Most Popular',
      'Lowest Price',
      'Highest Price',
      'Highest Rated',
      'Nearest Farmers',
      'Newest Listing',
    ]
  }
];

export function FilterModal({ visible, onClose }: FilterModalProps) {
  const [expandedSection, setExpandedSection] = useState<string>('Price');

  const [selections, setSelections] = useState<Record<string, string>>({
    'Price': '₹ 20 - 30 /kg',
    'Distance': 'Within 15km',
    'Freshness': 'Last 2 days',
    'Rating': '3.5 above',
    'Quality Grade': 'Grade B (Good Quality)',
    'Sort By': 'Lowest Price',
  });

  const slideAnim = React.useRef(new Animated.Value(400)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 800,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };

  const handleSelect = (category: string, option: string) => {
    setSelections(prev => ({ ...prev, [category]: option }));
  };

  const handleReset = () => {
    setSelections({});
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <Pressable style={styles.backdrop} onPress={onClose}>
          <BlurView intensity={20} style={styles.backdrop} tint="light" />
        </Pressable>

        <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slideAnim }] }]}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

            {FILTER_DATA.map((filter) => (
              <View key={filter.category} style={styles.sectionContainer}>
                <Pressable style={styles.sectionHeader} onPress={() => toggleSection(filter.category)}>
                  <Text style={styles.sectionTitle}>{filter.category}</Text>
                  <Ionicons name={expandedSection === filter.category ? 'chevron-up' : 'chevron-down'} size={24} color="#6D6D6D" />
                </Pressable>
                {expandedSection === filter.category && (
                  <View style={styles.sectionBody}>
                    <Text style={styles.bodyTitle}>{filter.title}</Text>
                    {filter.options.map(option => {
                      const isSelected = selections[filter.category] === option;
                      return (
                        <Pressable 
                          key={option} 
                          style={styles.radioRow}
                          onPress={() => handleSelect(filter.category, option)}
                        >
                          <View style={styles.radioOuter}>
                            {isSelected && <View style={styles.radioInner} />}
                          </View>
                          <Text style={styles.radioLabel}>{option}</Text>
                        </Pressable>
                      );
                    })}
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
          <View style={styles.footer}>
            <Pressable style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetText}>Reset All</Text>
            </Pressable>
            <Pressable style={styles.applyButton} onPress={onClose}>
              <Text style={styles.applyText}>Apply Filter</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
