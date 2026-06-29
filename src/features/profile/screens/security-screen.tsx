import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, StyleSheet, Modal, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';
export function SecurityScreen() {
  const router = useRouter();
  const { role } = useLocalSearchParams<{ role?: string }>();
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);

  const [toggles, setToggles] = useState({
    showProfile: true,
    allowReview: true,
  });

  const toggleSwitch = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Privacy & Security</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 40 },
        ]}>
        
        <Text style={styles.sectionTitle}>Security</Text>
        <View style={styles.list}>
          <ActionItem
            title="Change Phone Number"
            subtitle="91+ 00000 00000"
          />
          <ActionItem
            title="Active Login Sessions"
            subtitle="2 devices logged in"
          />
          <ActionItem
            title="Biometric Login"
            subtitle="Enabled"
          />
        </View>

        {role !== 'buyer' && (
          <>
            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Privacy Controls</Text>
            <View style={styles.list}>
              <SettingItem
                title="Show Profile"
                description="Shown profile to buyers"
                value={toggles.showProfile}
                onToggle={() => toggleSwitch('showProfile')}
              />
              <SettingItem
                title="Allow Buyers Review"
                description="Shown on your listings"
                value={toggles.allowReview}
                onToggle={() => toggleSwitch('allowReview')}
              />
            </View>
          </>
        )}

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Account Actions</Text>
        <View style={styles.list}>
          <Pressable style={styles.itemBox} onPress={() => setModalVisible(true)}>
            <View style={styles.itemTextContainer}>
              <Text style={[styles.itemTitle, { color: '#E62326' }]}>Delete Account</Text>
              <Text style={[styles.itemDescription, { color: 'rgba(230, 35, 38, 0.8)' }]}>
                Permanent, cannot be undone
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure? This action cannot be undone.
            </Text>
            <View style={styles.modalActions}>
              <Pressable
                style={[styles.modalButton, styles.modalButtonNo]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonNoText}>No</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.modalButtonYes]}
                onPress={() => {
                  setModalVisible(false);
                  // Handle delete account
                }}
              >
                <Text style={styles.modalButtonYesText}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function ActionItem({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <View style={styles.itemBox}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{subtitle}</Text>
      </View>
    </View>
  );
}

function SettingItem({ title, description, value, onToggle }: { title: string, description: string, value: boolean, onToggle: () => void }) {
  return (
    <View style={styles.itemBox}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
      <Switch
        trackColor={{ false: '#EBEBEB', true: '#4CAF50' }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#EBEBEB"
        onValueChange={onToggle}
        value={value}
        style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
      />
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
  list: {
    gap: s(15),
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingVertical: vs(14),
    paddingHorizontal: s(16),
    minHeight: vs(68),
  },
  itemTextContainer: {
    flex: 1,
    paddingRight: s(16),
    gap: s(4),
  },
  itemTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    color: '#000000',
  },
  itemDescription: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  divider: {
    height: vs(1),
    backgroundColor: '#EBEBEB',
    marginVertical: vs(24),
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(12),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: s(370),
    backgroundColor: '#FAFAF9',
    borderWidth: 1.8,
    borderColor: '#CECFCE',
    borderRadius: s(14),
    padding: s(20),
    alignItems: 'center',
    gap: s(30),
  },
  modalText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    lineHeight: ms(29),
    textAlign: 'center',
    letterSpacing: ms(0.16),
    color: '#000000',
    width: '100%',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: s(15),
    width: '100%',
  },
  modalButton: {
    flex: 1,
    height: vs(42),
    borderRadius: s(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonNo: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.8,
    borderColor: '#EBEBEB',
  },
  modalButtonNoText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#000000',
  },
  modalButtonYes: {
    backgroundColor: '#E62326',
  },
  modalButtonYesText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#FFFFFF',
  },
});
