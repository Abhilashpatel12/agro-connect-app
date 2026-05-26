import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

type MoreDetailsScreenProps = {
  harvestDate: string;
  setHarvestDate: (val: string) => void;
  location: string;
  setLocation: (val: string) => void;
  quality: string;
  setQuality: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export function MoreDetailsScreen({ 
  harvestDate, setHarvestDate,
  location, setLocation,
  quality, setQuality,
  description, setDescription,
  onNext, onBack 
}: MoreDetailsScreenProps) {
  const [harvestDateOpen, setHarvestDateOpen] = useState(false);
  const [qualityOpen, setQualityOpen] = useState(false);

  const isNextEnabled = location.trim() !== '';

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
          <Text style={styles.title}>More Details</Text>
          <Text style={styles.subtitle}>Optional but helpful</Text>
        </View>
      </View>

      <View style={styles.progressRow}>
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={[styles.progressSegment, styles.progressSegmentActive]} />
        <View style={styles.progressSegment} />
      </View>

      <View style={styles.formStack}>
        <View style={{ zIndex: 30 }}>
          <Pressable 
            style={[styles.inputGroup, styles.inputGroupRow]}
            onPress={() => setHarvestDateOpen(!harvestDateOpen)}
          >
            <View>
              <Text style={styles.inputLabel}>Harvest Date</Text>
              <Text style={styles.input}>{harvestDate}</Text>
            </View>
            <Ionicons name="calendar-outline" size={24} color="#1C1B1F" />
          </Pressable>

          {harvestDateOpen && (
            <View style={[styles.inlineDropdownContainer, { padding: 16, width: '100%', alignItems: 'center' }]}>
              {/* Custom Calendar Header */}
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 16 }}>
                <Pressable style={{ width: 38, height: 38, borderRadius: 19, borderWidth: 1, borderColor: '#CECFCE', alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name="chevron-back" size={16} color="#1C1B1F" />
                </Pressable>
                
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <View style={{ paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1, borderColor: '#CECFCE', borderRadius: 5 }}>
                    <Text style={{ fontFamily: 'Outfit_600SemiBold', fontSize: 16, color: '#141414' }}>March</Text>
                  </View>
                  <View style={{ paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1, borderColor: '#CECFCE', borderRadius: 5 }}>
                    <Text style={{ fontFamily: 'Outfit_600SemiBold', fontSize: 16, color: '#141414' }}>2026</Text>
                  </View>
                </View>

                <Pressable style={{ width: 38, height: 38, borderRadius: 19, borderWidth: 1, borderColor: '#CECFCE', alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name="chevron-forward" size={16} color="#1C1B1F" />
                </Pressable>
              </View>

              {/* Days of Week */}
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 8 }}>
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <View key={day} style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Outfit_500Medium', fontSize: 14, color: '#1F1F1F' }}>{day}</Text>
                  </View>
                ))}
              </View>

              {/* Fake Calendar Grid */}
              <View style={{ gap: 8, width: '100%' }}>
                {[[29, 30, 31, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30, 1, 2]].map((week, wIndex) => (
                  <View key={wIndex} style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    {week.map((day, dIndex) => {
                      const isGray = (wIndex === 0 && day > 20) || (wIndex === 4 && day < 10);
                      const selectedDayMatch = parseInt(harvestDate.split(' ')[0], 10);
                      const isSelected = !isGray && day === selectedDayMatch;
                      return (
                        <Pressable 
                          key={dIndex} 
                          style={{ 
                            flex: 1,
                            aspectRatio: 1,
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            backgroundColor: isSelected ? '#4CAF50' : 'transparent',
                            borderRadius: 6 
                          }}
                          onPress={() => {
                            if (!isGray) {
                              setHarvestDate(`${day} Mar 2026`);
                              setHarvestDateOpen(false);
                            }
                          }}
                        >
                          <Text style={{ 
                            fontFamily: 'Outfit_400Regular', 
                            fontSize: 14, 
                            color: isSelected ? '#FFF' : (isGray ? '#D9D9D9' : '#000') 
                          }}>
                            {day}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>

        <View style={[styles.inputGroup, styles.inputGroupRow, { zIndex: 10 }]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.inputLabel}>Pickup Location</Text>
            <TextInput 
              style={[styles.input, { outlineWidth: 0, padding: 0 }]}
              placeholder="Warangal, Telangana"
              placeholderTextColor="#6D6D6D"
              value={location}
              onChangeText={setLocation}
            />
          </View>
          <Ionicons name="location-outline" size={24} color="#1C1B1F" />
        </View>

        <View style={{ zIndex: 20 }}>
          <Pressable 
            style={[styles.inputGroup, styles.inputGroupRow]}
            onPress={() => setQualityOpen(!qualityOpen)}
          >
            <View>
              <Text style={styles.inputLabel}>Quality Grade</Text>
              <Text style={styles.input}>{quality}</Text>
            </View>
            <Ionicons name={qualityOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#1C1B1F" />
          </Pressable>
          
          {qualityOpen && (
            <View style={styles.inlineDropdownContainer}>
              <Pressable 
                style={[styles.dropdownItem, quality === 'Grade A - Premium' && styles.dropdownItemActive]}
                onPress={() => { setQuality('Grade A - Premium'); setQualityOpen(false); }}
              >
                <Text style={styles.dropdownText}>Grade A - Premium</Text>
              </Pressable>
              <Pressable 
                style={[styles.dropdownItem, quality === 'Grade B - Standard' && styles.dropdownItemActive]}
                onPress={() => { setQuality('Grade B - Standard'); setQualityOpen(false); }}
              >
                <Text style={styles.dropdownText}>Grade B - Standard</Text>
              </Pressable>
              <Pressable 
                style={[styles.dropdownItem, quality === 'Grade C - Basic' && styles.dropdownItemActive]}
                onPress={() => { setQuality('Grade C - Basic'); setQualityOpen(false); }}
              >
                <Text style={styles.dropdownText}>Grade C - Basic</Text>
              </Pressable>
            </View>
          )}
        </View>

        <View style={[styles.inputGroup, { minHeight: 120, justifyContent: 'flex-start' }]}>
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput 
            style={[styles.input, { flex: 1, textAlignVertical: 'top', marginTop: 4 }]} 
            multiline 
            value={description}
            onChangeText={setDescription}
          />
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
