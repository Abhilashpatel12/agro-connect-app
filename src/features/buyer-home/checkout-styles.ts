import { StyleSheet } from 'react-native';
import { s, vs, ms } from '@/utils/scale';

export const checkoutStyles = StyleSheet.create({
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
  },

  /* ── Section label ── */
  sectionLabel: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: '#000000',
    marginTop: vs(16),
    marginBottom: vs(8),
  },

  /* ── Delivery Address card ── */
  addressCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: s(16),
    gap: s(4),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
  },
  addressIconWrap: {
    marginTop: vs(1),
    marginRight: s(4),
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

  /* ── Order Summary card ── */
  orderSummaryCard: {
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%',
    height: vs(120),
    borderRadius: s(14),
    overflow: 'hidden',
  },
  orderImage: {
    width: s(110),
    height: vs(120),
  },
  orderInfoPanel: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderLeftWidth: 0,
    borderColor: '#EBEBEB',
    borderTopRightRadius: s(14),
    borderBottomRightRadius: s(14),
    padding: s(14),
    flexDirection: 'column',
    gap: vs(4),
  },
  orderTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderProductName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: '#000000',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(2),
  },
  ratingText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#898989',
  },
  orderSellerName: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: '#898989',
  },
  orderLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(2),
  },
  orderLocationText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: '#898989',
  },
  orderPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vs(2),
  },
  orderPriceSymbol: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(18),
    lineHeight: ms(23),
    color: '#4CAF50',
  },
  orderPriceValue: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(18),
    lineHeight: ms(23),
    color: '#4CAF50',
  },

  /* ── Price Details ── */
  priceDetailsBox: {
    flexDirection: 'column',
    padding: s(16),
    gap: vs(8),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    marginBottom: vs(8),
  },
  priceLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#898989',
  },
  priceLineValue: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },

  /* ── Total Amount ── */
  totalAmountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(16),
    height: vs(50),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    marginBottom: vs(16),
  },
  totalAmountLabel: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  totalAmountValue: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },

  /* ── Payment Method rows ── */
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(16),
    paddingVertical: vs(14),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    height: vs(53),
    marginBottom: vs(8),
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  paymentLogo: {
    width: s(25),
    height: s(25),
  },
  paymentLabel: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  radioSelected: {
    width: s(12),
    height: s(12),
    borderRadius: s(6),
    backgroundColor: '#4CAF50',
  },
  radioUnselected: {
    width: s(12),
    height: s(12),
    borderRadius: s(6),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
  },

  /* ── Place Order fixed button ── */
  placeOrderContainer: {
    position: 'absolute',
    bottom: vs(30),
    left: s(20),
    right: s(20),
  },
  placeOrderBtn: {
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
  placeOrderText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    lineHeight: ms(20),
    color: '#FFFFFF',
  },
});
