import { StyleSheet, Dimensions } from 'react-native';
import { s, vs } from '@/utils/scale';

const { width, height } = Dimensions.get('window');

export const filterStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill as any,
  },
  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: s(25),
    borderTopRightRadius: s(25),
    paddingTop: vs(30),
    paddingHorizontal: s(20),
    paddingBottom: vs(20),
    maxHeight: height * 0.85,
    width: '100%',
  },
  scrollContent: {
    paddingBottom: vs(100), // Space for sticky footer
    gap: vs(15),
  },
  
  // Section Header
  sectionContainer: {
    gap: vs(4),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vs(14),
    paddingHorizontal: s(16),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(12),
  },
  sectionTitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: s(14),
    color: '#000000',
  },
  
  // Expanded Body
  sectionBody: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(12),
    paddingVertical: vs(22),
    paddingHorizontal: s(24),
    gap: vs(25),
  },
  bodyTitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: s(14),
    color: '#898989',
    marginBottom: vs(-10), // Adjust gap from title to first item
  },
  
  // Radio Buttons
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  radioOuter: {
    width: s(16),
    height: s(16),
    borderRadius: s(8),
    borderWidth: 1.8,
    borderColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: s(8),
    height: s(8),
    borderRadius: s(4),
    backgroundColor: '#4CAF50',
  },
  radioLabel: {
    fontFamily: 'DMSans-Regular',
    fontSize: s(14),
    color: '#000000',
  },
  radioPrice: {
    fontFamily: 'DMSans-Regular',
    fontSize: s(14),
    color: '#000000',
  },
  
  // Sticky Footer
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: s(20),
    paddingVertical: vs(15),
    gap: s(12),
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
  },
  resetButton: {
    flex: 1,
    height: vs(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: s(14),
  },
  resetText: {
    fontFamily: 'DMSans-Medium',
    fontSize: s(15),
    color: '#000000',
  },
  applyButton: {
    flex: 1,
    height: vs(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  applyText: {
    fontFamily: 'DMSans-Medium',
    fontSize: s(15),
    color: '#FFFFFF',
  }
});
