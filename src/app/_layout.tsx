import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router/react-navigation';
import { useFonts as usePoppins, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts as useDMSans, DMSans_400Regular, DMSans_500Medium } from '@expo-google-fonts/dm-sans';
import { useFonts as useOutfit, Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Stack , usePathname } from 'expo-router';
import React from 'react';
import { useColorScheme , View } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

import { NavBar } from '@/components/nav-bar';
import { BuyerNavBar } from '@/features/buyer-home/components/buyer-nav-bar';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  
  const [poppinsLoaded] = usePoppins({ Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular });
  const [dmSansLoaded] = useDMSans({ DMSans_400Regular, DMSans_500Medium });
  const [outfitLoaded] = useOutfit({ Outfit_400Regular });

  if (!poppinsLoaded || !dmSansLoaded || !outfitLoaded) {
    return null;
  }

  const showNavBar = pathname === '/home' || pathname === '/crops' || pathname === '/analytics' || pathname === '/orders' || pathname === '/profile';
  const showBuyerNavBar = pathname === '/buyer-home' || pathname === '/buyer-cart' || pathname === '/buyer-orders' || pathname === '/buyer-profile';

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="index" />
          </Stack>
          {showNavBar && <NavBar />}
          {showBuyerNavBar && <BuyerNavBar />}
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
