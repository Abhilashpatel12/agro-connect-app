import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, Platform, TextInput, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { s, vs, ms } from '@/utils/scale';

const TAGS = [
  'Easy to use',
  'Helpful',
  'Good design',
  'Fast',
  'Needs improvement'
];

export function AppRatingScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [rating, setRating] = useState(4); // Default to 4 or 0, let's keep 0 but show logic
  const [feedback, setFeedback] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const getRatingText = () => {
    switch(rating) {
      case 1: return 'Very Bad';
      case 2: return 'Bad';
      case 3: return 'Average';
      case 4: return 'Good';
      case 5: return 'Very Good';
      default: return '';
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Rate the App</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}
      >
        <View style={styles.topCard}>
          <View style={styles.avatarPlaceholder} />
          
          <View style={styles.ratingHeader}>
            <Text style={styles.title}>How's your experience?</Text>
            <Text style={styles.subtitle}>Tap a star to rate AgroConnect</Text>
          </View>
          
          <View style={styles.ratingInteractive}>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Pressable key={star} onPress={() => setRating(star)}>
                  <Ionicons 
                    name="star" 
                    size={32} 
                    color={star <= rating ? "#FDCB58" : "#D9D9D9"} 
                  />
                </Pressable>
              ))}
            </View>
            {rating > 0 ? (
              <Text style={styles.ratingText}>{getRatingText()}</Text>
            ) : (
              <Text style={[styles.ratingText, { color: 'transparent' }]}>Select</Text>
            )}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Tell us more (optional)</Text>
        
        <View style={styles.bottomCard}>
          <Text style={styles.inputLabel}>What did you like or dislike?</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Write your feedback here..."
              placeholderTextColor="#898989"
              multiline
              value={feedback}
              onChangeText={setFeedback}
            />
          </View>
          
          <Text style={styles.tagsLabel}>Quick tags:</Text>
          <View style={styles.tagsContainer}>
            {TAGS.map(tag => {
              const isSelected = selectedTags.includes(tag);
              return (
                <Pressable 
                  key={tag} 
                  style={[styles.tag, isSelected && styles.tagSelected]}
                  onPress={() => toggleTag(tag)}
                >
                  <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>{tag}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <Pressable 
          style={styles.submitButton}
          onPress={() => router.back()}
        >
          <Text style={styles.submitText}>Submit Review</Text>
        </Pressable>
      </View>
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
    paddingHorizontal: s(20),
    paddingBottom: vs(20),
    zIndex: 10,
  },
  backButton: {
    width: s(48),
    height: vs(48),
    backgroundColor: '#4CAF50',
    borderRadius: s(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(18),
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: s(20),
    paddingTop: vs(10),
  },
  topCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingVertical: vs(25),
    paddingHorizontal: s(10),
    alignItems: 'center',
    marginBottom: vs(20),
    gap: vs(20),
  },
  avatarPlaceholder: {
    width: s(100),
    height: s(100),
    borderRadius: s(50),
    backgroundColor: '#D9D9D9',
  },
  ratingHeader: {
    alignItems: 'center',
    gap: vs(6),
  },
  title: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    textAlign: 'center',
  },
  ratingInteractive: {
    alignItems: 'center',
    gap: vs(12),
  },
  starsContainer: {
    flexDirection: 'row',
    gap: s(9),
  },
  ratingText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#4CAF50',
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(12),
  },
  bottomCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    gap: vs(15),
  },
  inputLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(14),
    height: vs(100),
  },
  input: {
    flex: 1,
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
    textAlignVertical: 'top',
    padding: 0,
    margin: 0,
  },
  tagsLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: s(10),
  },
  tag: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    backgroundColor: '#FFFFFF',
    borderRadius: s(25),
    paddingVertical: vs(8),
    paddingHorizontal: s(16),
  },
  tagSelected: {
    backgroundColor: '#4CAF50',
  },
  tagText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#4CAF50',
  },
  tagTextSelected: {
    color: '#FFFFFF',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: s(20),
    paddingTop: vs(10),
    backgroundColor: '#FAFAF9',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#4CAF50',
    paddingVertical: vs(14),
    borderRadius: s(14),
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
  submitText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    color: '#FFFFFF',
  },
});
