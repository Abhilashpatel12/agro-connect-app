import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router/react-navigation';
import { useFonts as usePoppins, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts as useDMSans, DMSans_400Regular, DMSans_500Medium } from '@expo-google-fonts/dm-sans';
import { useFonts as useOutfit, Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  const [poppinsLoaded] = usePoppins({ Poppins_600SemiBold });
  const [dmSansLoaded] = useDMSans({ DMSans_400Regular, DMSans_500Medium });
  const [outfitLoaded] = useOutfit({ Outfit_400Regular });

  if (!poppinsLoaded || !dmSansLoaded || !outfitLoaded) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
