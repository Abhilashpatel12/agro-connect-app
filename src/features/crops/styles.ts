import { Platform, StyleSheet } from 'react-native';
import { s, vs, ms } from '@/utils/scale';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(20),
    marginTop: vs(30),
    marginBottom: vs(20),
    gap: s(10),
  },
  backButton: {
    width: s(48),
    height: s(48),
    borderRadius: s(15),
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(18),
    lineHeight: ms(23),
    color: '#000000',
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: s(8),
    marginHorizontal: s(20),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    marginBottom: vs(20),
  },
  tab: {
    flex: 1,
    height: vs(38),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(12),
  },
  tabActive: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  listContainer: {
    paddingHorizontal: s(20),
    paddingBottom: vs(100), // Space for bottom bar
    gap: vs(10),
  },
  cropCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: s(10),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    gap: s(10),
  },
  cropImage: {
    width: s(65),
    height: s(65),
    borderRadius: s(14),
  },
  cropInfo: {
    flex: 1,
    gap: vs(5),
  },
  cropTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: '#000000',
  },
  cropSubtextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(5),
  },
  cropSubtextQty: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  cropSubtextPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cropSubtextPrice: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  rupeeBadge: {
    width: s(15),
    height: s(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rupeeText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(10),
    color: '#1C1B1F',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: vs(84),
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: s(10),
    paddingBottom: vs(20),
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.15)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
      web: {
        boxShadow: '0px 0px 4px rgba(76, 175, 80, 0.15)',
      }
    }),
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: s(60),
    gap: vs(3),
  },
  tabIconBox: {
    width: s(32),
    height: s(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: '100%',
    height: '100%',
  },
  tabLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#000000',
  },
  tabLabelActive: {
    color: '#4CAF50',
  },
});
