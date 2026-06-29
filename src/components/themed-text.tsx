import { Platform, StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { s, vs, ms } from '@/utils/scale';
export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? 'text'] },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'linkPrimary' && styles.linkPrimary,
        type === 'code' && styles.code,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: ms(14),
    lineHeight: ms(20),
    fontWeight: 500,
  },
  smallBold: {
    fontSize: ms(14),
    lineHeight: ms(20),
    fontWeight: 700,
  },
  default: {
    fontSize: ms(16),
    lineHeight: ms(24),
    fontWeight: 500,
  },
  title: {
    fontSize: ms(48),
    fontWeight: 600,
    lineHeight: ms(52),
  },
  subtitle: {
    fontSize: ms(32),
    lineHeight: ms(44),
    fontWeight: 600,
  },
  link: {
    lineHeight: ms(30),
    fontSize: ms(14),
  },
  linkPrimary: {
    lineHeight: ms(30),
    fontSize: ms(14),
    color: '#3c87f7',
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: 700 }) ?? 500,
    fontSize: ms(12),
  },
});
