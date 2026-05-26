import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
    gap: 10,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 18,
    lineHeight: 23,
    color: '#000000',
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  tabActive: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Space for bottom bar
    gap: 10,
  },
  cropCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    gap: 10,
  },
  cropImage: {
    width: 65,
    height: 65,
    borderRadius: 14,
  },
  cropInfo: {
    flex: 1,
    gap: 5,
  },
  cropTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    lineHeight: 21,
    color: '#000000',
  },
  cropSubtextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cropSubtextQty: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
  },
  cropSubtextPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cropSubtextPrice: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
  },
  rupeeBadge: {
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rupeeText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 10,
    color: '#1C1B1F',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 84,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
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
    width: 60,
    gap: 3,
  },
  tabIconBox: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: '100%',
    height: '100%',
  },
  tabLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
  },
  tabLabelActive: {
    color: '#4CAF50',
  },
});
