import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ReviewCard } from '@/components/ReviewCard';
import { ConfirmModal } from '@/components/ConfirmModal';

import { s, vs, ms } from '@/utils/scale';
const REPORT_REASONS = [
  {
    id: 'inappropriate',
    title: 'Inappropriate Content',
    description: 'It contains abusive or offensive language',
  },
  {
    id: 'irrelevant',
    title: 'Irrelevant to Product',
    description: 'It is not related to this order or product',
  },
  {
    id: 'fake',
    title: 'Fake or Misleading',
    description: 'It is not genuine or is misleading',
  },
];

export default function ReportReviewScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [otherReason, setOtherReason] = useState('');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Report Review</Text>
          <View style={{ width: 48 }} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <ReviewCard 
            initial={params.initial as string}
            name={params.name as string}
            date={params.date as string}
            text={params.text as string}
            stars={params.stars ? Number(params.stars) : undefined}
          />

          <View style={styles.questionContainer}>
            <Text style={styles.questionTitle}>Why are you reporting this review?</Text>
            <Text style={styles.questionSubtitle}>Please select the reason that best fits.</Text>
          </View>

          <View style={styles.reasonsContainer}>
            {REPORT_REASONS.map((reason) => {
              const isSelected = selectedReason === reason.id;
              return (
                <TouchableOpacity 
                  key={reason.id} 
                  style={styles.reasonCard}
                  onPress={() => setSelectedReason(reason.id)}
                >
                  <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                  <View style={styles.reasonTextContainer}>
                    <Text style={styles.reasonTitle}>{reason.title}</Text>
                    <Text style={styles.reasonDescription}>{reason.description}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.textAreaWrapper}>
            <TextInput
              style={styles.textArea}
              placeholder="Something else type here..."
              placeholderTextColor="#898989"
              multiline
              maxLength={500}
              value={otherReason}
              onChangeText={setOtherReason}
              textAlignVertical="top"
              onFocus={() => setSelectedReason('other')}
            />
            <Text style={styles.charCount}>{otherReason.length}/500</Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.submitButton} onPress={() => setDeleteModalVisible(true)}>
            <Text style={styles.submitButtonText}>Submit Report</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <ConfirmModal 
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={() => setDeleteModalVisible(false)}
        title="Are you sure? Do you want to delete this review."
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingTop: vs(10),
    paddingBottom: vs(20),
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
  content: {
    padding: s(20),
  },
  questionContainer: {
    marginTop: vs(10),
    marginBottom: vs(12),
  },
  questionTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(14),
    color: '#000000',
    marginBottom: vs(2),
  },
  questionSubtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  reasonsContainer: {
    gap: s(12),
    marginBottom: vs(12),
  },
  reasonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(14),
    minHeight: vs(73),
  },
  radioOuter: {
    width: s(20),
    height: vs(20),
    borderRadius: s(10),
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: s(12),
  },
  radioOuterSelected: {
    borderColor: '#4CAF50',
  },
  radioInner: {
    width: s(10),
    height: vs(10),
    borderRadius: s(5),
    backgroundColor: '#4CAF50',
  },
  reasonTextContainer: {
    flex: 1,
  },
  reasonTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(14),
    color: '#000000',
    marginBottom: vs(1),
  },
  reasonDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  textAreaWrapper: {
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    backgroundColor: '#FFFFFF',
    height: vs(100),
    padding: s(16),
    marginBottom: vs(20),
  },
  textArea: {
    flex: 1,
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
  },
  charCount: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
    textAlign: 'right',
    marginTop: vs(8),
  },
  footer: {
    padding: s(20),
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    height: vs(50),
    borderRadius: s(14),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    color: '#FFFFFF',
  },
});
