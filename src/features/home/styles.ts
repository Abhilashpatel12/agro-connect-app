import { Platform, StyleSheet } from 'react-native';
import { s, vs, ms } from '@/utils/scale';

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
    paddingHorizontal: s(20),
    marginTop: vs(30),
    marginBottom: vs(20),
  },
  greeting: {
    color: '#5D5D5D',
    fontFamily: 'Poppins_400Regular',
    fontSize: ms(18),
    lineHeight: ms(27),
  },
  userName: {
    color: '#000000',
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(24),
    lineHeight: ms(36),
  },
  bellButton: {
    width: s(45),
    height: s(45),
    borderRadius: s(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: s(20),
    gap: s(12),
    marginBottom: vs(20),
  },
  statCard: {
    flex: 1,
    height: vs(99),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(14),
    justifyContent: 'space-between',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statIcon: {
    width: s(30),
    height: s(30),
  },
  statValue: {
    color: '#3C3C3C',
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(28),
    lineHeight: ms(36),
  },
  statLabel: {
    color: '#3C3C3C',
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    lineHeight: ms(21),
  },
  bannerCard: {
    marginHorizontal: s(20),
    height: vs(160),
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    position: 'relative',
    marginBottom: vs(20),
    overflow: 'hidden',
  },
  bannerText: {
    position: 'absolute',
    left: s(20),
    top: vs(20),
    width: s(160),
    color: '#FFFFFF',
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(24),
    lineHeight: ms(34),
  },
  bannerImage: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: s(130),
    height: s(130),
  },
  addButton: {
    marginHorizontal: s(20),
    height: vs(55),
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vs(30),
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
    fontSize: ms(15),
    lineHeight: ms(20),
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: s(20),
    marginBottom: vs(10),
  },
  activityTitle: {
    color: '#000000',
    fontFamily: 'Poppins_500Medium',
    fontSize: ms(18),
    lineHeight: ms(27),
  },
  seeAllText: {
    color: '#000000',
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
  },
  activityCard: {
    marginHorizontal: s(20),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(14),
    marginBottom: vs(100), // Leave space for bottom bar
  },
  activityImage: {
    width: '100%',
    height: vs(150),
    borderRadius: s(14),
    marginBottom: vs(12),
  },
  activityInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  activityName: {
    color: '#000000',
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    marginBottom: vs(2),
  },
  activityDesc: {
    color: '#000000',
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
  },
  activityTime: {
    color: '#4C4C4C',
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(12),
    lineHeight: ms(16),
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
  },
  tabIcon: {
    width: s(30),
    height: s(30),
    marginBottom: vs(4),
  },
  tabLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: '#737373',
  },
  tabLabelActive: {
    color: '#4CAF50',
  },
});
