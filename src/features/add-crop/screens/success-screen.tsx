import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { styles } from '../styles';

type SuccessScreenProps = {
  onHome: () => void;
};

export function SuccessScreen({ onHome }: SuccessScreenProps) {
  return (
    <View style={[styles.screen, { alignItems: 'center', paddingTop: 60 }]}>
      {/* Badge/Icon Container */}
      <View style={{ marginBottom: 35 }}>
        <Image 
          source={require('@/assets/images/Component 22.svg')} 
          style={{ width: 160, height: 160 }} 
          contentFit="contain" 
        />
      </View>

      {/* Success Text */}
      <Text style={{
        fontFamily: 'DMSans_700Bold',
        fontSize: 30,
        color: '#4CAF50',
        marginBottom: 10,
        textAlign: 'center'
      }}>
        Successfully Upload
      </Text>
      
      <Text style={{
        fontFamily: 'DMSans_400Regular',
        fontSize: 16,
        color: '#525252',
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 22,
        marginBottom: 40
      }}>
        Your Tomato (500 kg) is now live and visible to buyers.
      </Text>

      {/* Details Card */}
      <View style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderWidth: 1.5,
        borderColor: '#EBEBEB',
        borderRadius: 14,
        padding: 25,
        alignItems: 'center'
      }}>
        <Text style={{
          fontFamily: 'DMSans_500Medium',
          fontSize: 16,
          color: '#6D6D6D',
          marginBottom: 6
        }}>
          Listing ID
        </Text>
        <Text style={{
          fontFamily: 'DMSans_700Bold',
          fontSize: 16,
          color: '#000000',
          marginBottom: 20
        }}>
          #KM-2026-0381
        </Text>

        <View style={{ width: '100%', height: 1, backgroundColor: '#CECFCE', marginBottom: 20 }} />

        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
          <Text style={{
            fontFamily: 'DMSans_400Regular',
            fontSize: 16,
            color: '#000000'
          }}>
            Status:
          </Text>
          <Text style={{
            fontFamily: 'DMSans_500Medium',
            fontSize: 16,
            color: '#4CAF50'
          }}>
            Live
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable style={styles.primaryButton} onPress={onHome}>
          <Text style={styles.primaryButtonText}>Go Home</Text>
        </Pressable>
      </View>
    </View>
  );
}
