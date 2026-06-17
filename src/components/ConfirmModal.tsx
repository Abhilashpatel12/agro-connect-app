import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

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
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 370,
    backgroundColor: '#FAFAF9',
    borderRadius: 14,
    borderWidth: 1.8,
    borderColor: '#CECFCE',
    padding: 20,
    alignItems: 'center',
    gap: 30,
  },
  title: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    lineHeight: 29,
    color: '#000000',
    textAlign: 'center',
    letterSpacing: 0.16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    width: '100%',
  },
  noButton: {
    flex: 1,
    height: 42,
    borderRadius: 14,
    borderWidth: 1.8,
    borderColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  noButtonText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#000000',
  },
  yesButton: {
    flex: 1,
    height: 42,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E62326',
  },
  yesButtonText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
