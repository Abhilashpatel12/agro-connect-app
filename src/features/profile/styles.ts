import { Platform, StyleSheet } from 'react-native';
import { s, vs, ms } from '@/utils/scale';

const colors = {
  background: '#FAFAF9',
  card: '#FFFFFF',
  border: '#EBEBEB',
  text: '#000000',
  muted: '#737373',
  primary: '#4CAF50',
};

const softShadow = Platform.select({
  ios: {
    shadowColor: 'rgba(76, 175, 80, 0.12)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  android: {
    elevation: 3,
  },
  web: {
    boxShadow: '0px 2px 4px rgba(76, 175, 80, 0.12)',
  },
});

export const profileStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: s(20),
    paddingTop: vs(40),
    paddingBottom: vs(112),
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(20),
    height: vs(150),
  },
  avatarWrap: {
    width: s(150),
    height: s(150),
    borderRadius: s(75),
    borderWidth: 2,
    borderColor: colors.primary,
    overflow: 'hidden',
    backgroundColor: '#EAF7EB',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  farmerInfoBlock: {
    height: vs(88),
    gap: s(8),
    justifyContent: 'center',
  },
  farmerNameBlock: {
    gap: s(6),
  },
  farmerName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(18),
    lineHeight: ms(23),
    color: colors.text,
  },
  farmerMeta: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: colors.text,
  },
  verifiedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vs(5),
    paddingHorizontal: s(1),
    gap: s(7),
    height: vs(30),
    width: s(100),
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.5)',
    borderRadius: s(25),
  },
  verifiedIcon: {
    width: s(20),
    height: s(20),
  },
  verifiedText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: colors.text,
  },
  editButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vs(14),
    paddingHorizontal: s(16),
    gap: s(8),
    width: '100%',
    height: vs(50),
    backgroundColor: colors.primary,
    borderRadius: s(14),
    marginTop: vs(30),
    marginBottom: vs(20),
    ...softShadow,
  },
  editIcon: {
    width: s(20),
    height: s(20),
  },
  editButtonText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(15),
    lineHeight: ms(20),
    textAlign: 'center',
    color: colors.card,
  },
  sectionList: {
    gap: vs(15),
  },
  sectionWrap: {
    gap: vs(6),
  },
  sectionHeaderWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vs(4),
    paddingHorizontal: s(10),
    gap: s(10),
    height: vs(29),
  },
  sectionTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    lineHeight: ms(21),
    color: colors.text,
  },
  sectionCard: {
    backgroundColor: colors.card,
    borderWidth: 1.8,
    borderColor: colors.border,
    borderRadius: s(14),
    paddingVertical: vs(12),
    paddingHorizontal: s(14),
    gap: vs(5),
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: s(10),
    gap: s(10),
    height: vs(62),
  },
  actionIconBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: s(10),
    gap: s(10),
    width: s(42),
    height: s(42),
    borderRadius: s(12),
  },
  actionIcon: {
    width: s(22),
    height: s(22),
  },
  actionTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
  },
  actionDivider: {
    height: 0,
    borderTopWidth: 0.8,
    borderTopColor: colors.border,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: vs(84),
    backgroundColor: colors.card,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vs(8),
    paddingHorizontal: s(10),
    gap: s(18),
    boxShadow: '0px 0px 4px rgba(76, 175, 80, 0.15)',
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: s(8),
    gap: vs(3),
    backgroundColor: colors.card,
    borderRadius: s(15),
  },
  tabIcon: {
    width: s(30),
    height: s(30),
  },
  tabLabel: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(18),
    color: colors.muted,
  },
  tabLabelActive: {
    color: colors.primary,
  },
  // Legacy styles for other screens to compile
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: vs(20),
  },
  backButton: {
    width: s(40),
    height: s(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: ms(20),
    fontWeight: 'bold',
  },
  headerIconButton: {
    width: s(40),
    height: s(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: vs(20),
  },
  detailHero: {
    alignItems: 'center',
    marginBottom: vs(20),
  },
  detailHeroIconBox: {
    width: s(60),
    height: s(60),
    backgroundColor: '#eee',
    borderRadius: s(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: vs(10),
  },
  detailHeroIcon: {
    width: s(30),
    height: s(30),
  },
  detailHeroTitle: {
    fontSize: ms(24),
    fontWeight: 'bold',
  },
  detailSection: {
    backgroundColor: '#fff',
    borderRadius: s(10),
    padding: s(15),
    marginBottom: vs(15),
  },
  detailSectionTitle: {
    fontSize: ms(18),
    fontWeight: 'bold',
    marginBottom: vs(10),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vs(5),
  },
  detailLabel: {
    color: '#666',
  },
  detailValue: {
    fontWeight: '500',
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: s(10),
    padding: s(15),
  },
  field: {
    marginBottom: vs(15),
  },
  fieldLabel: {
    color: '#666',
    marginBottom: vs(5),
  },
  fieldBox: {
    backgroundColor: '#f9f9f9',
    padding: s(10),
    borderRadius: s(8),
  },
  fieldValue: {
    fontSize: ms(16),
  },
});
