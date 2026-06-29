import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, Platform, LayoutAnimation } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How do I add a new crop?',
    answer: 'To add a new crop, go to the Add Crop screen from the bottom tab and fill in the details like name, category, price, and quantity. You can also upload photos of your crop.',
  },
  {
    id: '2',
    question: 'How do I receive payments?',
    answer: 'You can receive payments directly to your bank account. Make sure to set up your Payout Preferences in the Profile section.',
  },
  {
    id: '3',
    question: 'How do I upgrade my plan?',
    answer: 'You can upgrade your plan from the Subscription section in your Profile. We offer monthly and yearly plans with extra benefits.',
  },
  {
    id: '4',
    question: 'How do I track my orders?',
    answer: 'Go to the Orders tab to see all your ongoing and completed orders. Tap on any order to see detailed tracking information.',
  },
  {
    id: '5',
    question: 'How do I get my profile verified?',
    answer: 'To get verified, submit your KYC documents in the Verification section. Our team will review them within 24-48 hours.',
  },
  {
    id: '6',
    question: 'What is a draft listing?',
    answer: 'A draft listing is an incomplete crop listing that is saved but not visible to buyers yet. You can complete and publish it at any time.',
  },
  {
    id: '7',
    question: 'How do I edit a crop listing?',
    answer: 'Go to My Crops, tap on the crop you want to edit, and press the Edit button. You can update price, quantity, and other details.',
  },
  {
    id: '8',
    question: 'How do I contact support?',
    answer: 'You can contact support by emailing us at support@agroconnect.com or calling our toll-free number from the Contact Us page.',
  },
];

export function HelpCenterScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Help Center</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 40 },
        ]}>
        
        <View style={styles.faqList}>
          {FAQS.map((faq) => (
            <View key={faq.id} style={styles.faqCard}>
              <Pressable 
                style={styles.faqHeader} 
                onPress={() => toggleExpand(faq.id)}
              >
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Ionicons 
                  name={expandedId === faq.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color="#1C1B1F" 
                />
              </Pressable>
              
              {expandedId === faq.id && (
                <View style={styles.faqAnswerContainer}>
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

      </ScrollView>
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
  faqList: {
    gap: s(15),
  },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CECFCE',
    borderRadius: s(14),
    overflow: 'hidden',
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: s(16),
  },
  faqQuestion: {
    flex: 1,
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    color: '#000000',
    paddingRight: s(16),
  },
  faqAnswerContainer: {
    paddingHorizontal: s(16),
    paddingBottom: vs(16),
  },
  faqAnswer: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#525252',
    lineHeight: ms(20),
  },
});
