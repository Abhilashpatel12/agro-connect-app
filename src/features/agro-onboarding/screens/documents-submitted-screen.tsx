import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { s, vs, ms } from '@/utils/scale';

function SuccessBadge() {
  return (
    <View style={badgeStyles.outer}>
      <View style={badgeStyles.innerWhite}>
        <View style={badgeStyles.innerGreen}>
          <Ionicons name="checkmark-sharp" size={60} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
}

const badgeStyles = StyleSheet.create({
  outer: {
    width: s(160),
    height: vs(160),
    backgroundColor: '#377D3A',
    borderRadius: s(20),
    transform: [{ rotate: '22.5deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#377D3A',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: { elevation: 8 },
    }),
  },
  innerWhite: {
    width: s(104),
    height: vs(104),
    borderRadius: s(52),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-22.5deg' }], // reverse rotation to keep icon straight
  },
  innerGreen: {
    width: s(88),
    height: vs(88),
    borderRadius: s(44),
    backgroundColor: '#00C853',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function DocumentsSubmittedScreen({ onNext }: { onNext: () => void }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={styles.badgeWrap}>
        <SuccessBadge />
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.title}>Documents Submitted</Text>
        <Text style={styles.subtitle}>
          Thankyou. Your documents have been submitted successfully.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.iconBox}>
          <MaterialIcons name="access-time" size={32} color="#4CAF50" />
        </View>
        <View style={styles.infoTextColumn}>
          <Text style={styles.infoTitle}>Verification usually takes</Text>
          <Text style={styles.infoValue}>1-2 business days.</Text>
        </View>
      </View>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <TouchableOpacity activeOpacity={0.7} style={styles.homeBtn} onPress={onNext}>
          <Ionicons name="home" size={20} color="#FFFFFF" />
          <Text style={styles.homeBtnText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAF9',
    alignItems: 'center',
    paddingHorizontal: s(20),
  },
  badgeWrap: {
    marginTop: vs(100),
    marginBottom: vs(50),
  },
  textBlock: {
    alignItems: 'center',
    gap: vs(10),
    marginBottom: vs(45),
  },
  title: {
    fontFamily: 'DMSans_700Bold',
    fontSize: ms(28),
    color: '#4CAF50',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(16),
    color: '#525252',
    textAlign: 'center',
    maxWidth: s(295),
    lineHeight: ms(21),
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    paddingVertical: vs(20),
    paddingHorizontal: s(16),
    width: '100%',
    gap: s(15),
  },
  iconBox: {
    width: s(50),
    height: s(50),
    borderRadius: s(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTextColumn: {
    justifyContent: 'center',
  },
  infoTitle: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#6D6D6D',
  },
  infoValue: {
    fontFamily: 'DMSans_700Bold',
    fontSize: ms(16),
    color: '#000000',
    marginTop: vs(2),
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
  },
  homeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: vs(55),
    backgroundColor: '#4CAF50',
    borderRadius: s(14),
    gap: s(8),
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(76, 175, 80, 0.12)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: { elevation: 2 },
    }),
  },
  homeBtnText: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#FFFFFF',
  },
});
