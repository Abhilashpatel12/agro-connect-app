import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

import { s, vs, ms } from '@/utils/scale';
interface ConfirmModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export function ConfirmModal({ visible, onClose, onConfirm, title }: ConfirmModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.noButton} onPress={onClose}>
              <Text style={styles.noButtonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={onConfirm}>
              <Text style={styles.yesButtonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: s(20),
  },
  modalContent: {
    width: '100%',
    maxWidth: s(370),
    backgroundColor: '#FAFAF9',
    borderRadius: s(14),
    borderWidth: 1.8,
    borderColor: '#CECFCE',
    padding: s(20),
    alignItems: 'center',
    gap: s(30),
  },
  title: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    lineHeight: ms(29),
    color: '#000000',
    textAlign: 'center',
    letterSpacing: ms(0.16),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: s(15),
    width: '100%',
  },
  noButton: {
    flex: 1,
    height: vs(42),
    borderRadius: s(14),
    borderWidth: 1.8,
    borderColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  noButtonText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#000000',
  },
  yesButton: {
    flex: 1,
    height: vs(42),
    borderRadius: s(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E62326',
  },
  yesButtonText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#FFFFFF',
  },
});
