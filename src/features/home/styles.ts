import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30, // Or use SafeArea
    marginBottom: 20,
  },
  greeting: {
    color: '#5D5D5D',
    fontFamily: 'Poppins_400Regular', // Need to check if this font is loaded
    fontSize: 18,
    lineHeight: 27,
  },
  userName: {
    color: '#000000',
    fontFamily: 'Poppins_500Medium', // Need to check if this font is loaded
    fontSize: 24,
    lineHeight: 36,
  },
  bellButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    height: 99,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    padding: 14,
    justifyContent: 'space-between',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statIcon: {
    width: 30,
    height: 30,
  },
  statValue: {
    color: '#3C3C3C',
    fontFamily: 'DMSans_500Medium',
    fontSize: 28,
    lineHeight: 36,
  },
  statLabel: {
    color: '#3C3C3C',
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    lineHeight: 21,
  },
  bannerCard: {
    marginHorizontal: 20,
    height: 160,
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    position: 'relative',
    marginBottom: 20,
    overflow: 'hidden',
  },
  bannerText: {
    position: 'absolute',
    left: 20, // Adjusted from CSS 40 relative to 20 left
    top: 20, // Adjusted from 252 relative to 232
    width: 160,
    color: '#FFFFFF',
    fontFamily: 'DMSans_400Regular',
    fontSize: 24,
    lineHeight: 34,
  },
  bannerImage: {
    position: 'absolute',
    right: -10, // Approximate positioning based on CSS
    bottom: -10,
    width: 130,
    height: 130,
  },
  addButton: {
    marginHorizontal: 20,
    height: 55,
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.12)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(76, 175, 80, 0.12)',
      }
    }),
  },
  addButtonText: {
    color: '#FFFFFF',
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    lineHeight: 20,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  activityTitle: {
    color: '#000000',
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    lineHeight: 27,
  },
  seeAllText: {
    color: '#000000',
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
  },
  activityCard: {
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: 14,
    padding: 14,
    marginBottom: 100, // Leave space for bottom bar
  },
  activityImage: {
    width: '100%',
    height: 150,
    borderRadius: 14,
    marginBottom: 12,
  },
  activityInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  activityName: {
    color: '#000000',
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 2,
  },
  activityDesc: {
    color: '#000000',
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
  },
  activityTime: {
    color: '#4C4C4C',
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    lineHeight: 16,
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
    paddingBottom: 20, // For safe area
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
  },
  tabIcon: {
    width: 30,
    height: 30,
    marginBottom: 4,
  },
  tabLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 18,
    color: '#737373',
  },
  tabLabelActive: {
    color: '#4CAF50',
  },
});
