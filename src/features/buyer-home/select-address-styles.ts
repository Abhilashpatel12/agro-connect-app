import { StyleSheet } from 'react-native';
import { s, vs, ms } from '@/utils/scale';

export const selectAddressStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },

  /* ── Header ── */
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(20),
    paddingTop: vs(30),
    paddingBottom: vs(15),
    gap: s(10),
  },
  backButton: {
    width: s(48),
    height: s(48),
    backgroundColor: '#4CAF50',
    borderRadius: s(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(18),
    lineHeight: ms(27),
    color: '#000000',
  },

  /* ── Scroll ── */
  scrollContent: {
    paddingHorizontal: s(20),
    paddingBottom: vs(120),
    gap: vs(16),
  },

  /* ── Address card ── */
  addressCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: s(16),
    gap: s(4),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    height: vs(115),
  },
  addressCardSelected: {
    borderColor: '#4CAF50',
  },
  addressLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: s(4),
    flex: 1,
  },
  addressIconWrap: {
    marginTop: vs(1),
  },
  addressTextCol: {
    flexDirection: 'column',
    gap: vs(5),
    flex: 1,
  },
  addressHomeLabel: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  addressSubCol: {
    flexDirection: 'column',
    gap: vs(4),
  },
  addressName: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#404040',
  },
  addressStreet: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(19),
    color: '#898989',
  },

  /* ── Edit button ── */
  editBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: s(16),
    paddingVertical: vs(6),
    width: s(54),
    height: vs(28),
    backgroundColor: '#4CAF50',
    borderRadius: s(8),
  },
  editBtnText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: '#FFFFFF',
  },

  /* ── Add New Address button ── */
  addNewBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: s(14),
    gap: s(10),
    height: vs(52),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#4CAF50',
    borderRadius: s(14),
  },
  addNewText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: '#000000',
  },

  /* ── Continue fixed button ── */
  continueContainer: {
    position: 'absolute',
    bottom: vs(30),
    left: s(20),
    right: s(20),
  },
  continueBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: vs(50),
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  continueBtnText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    lineHeight: ms(20),
    color: '#FFFFFF',
  },
});
