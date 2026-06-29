import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ReviewCard } from '@/components/ReviewCard';
import { ConfirmModal } from '@/components/ConfirmModal';

import { s, vs, ms } from '@/utils/scale';
export default function ReplyReviewScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [reply, setReply] = useState('');
  const [hideModalVisible, setHideModalVisible] = useState(false);

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
          <Text style={styles.headerTitle}>Reply to Review</Text>
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

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Write a reply</Text>
            <Text style={styles.inputSublabel}>{"Your reply will be visible to the buyer's."}</Text>
            
            <View style={styles.textAreaWrapper}>
              <TextInput
                style={styles.textArea}
                placeholder="Type your reply here..."
                placeholderTextColor="#898989"
                multiline
                maxLength={500}
                value={reply}
                onChangeText={setReply}
                textAlignVertical="top"
              />
              <Text style={styles.charCount}>{reply.length}/500</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.submitButton} onPress={() => setHideModalVisible(true)}>
            <Text style={styles.submitButtonText}>Submit Reply</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <ConfirmModal 
        visible={hideModalVisible}
        onClose={() => setHideModalVisible(false)}
        onConfirm={() => setHideModalVisible(false)}
        title="Are you sure? Do you want to hide this review."
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
  inputContainer: {
    marginTop: vs(10),
  },
  inputLabel: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    color: '#000000',
    marginBottom: vs(2),
  },
  inputSublabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#000000',
    marginBottom: vs(16),
  },
  textAreaWrapper: {
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    backgroundColor: '#FFFFFF',
    height: vs(229),
    padding: s(16),
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
