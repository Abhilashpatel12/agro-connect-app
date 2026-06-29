import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

interface VerifiedBadgeProps {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export function VerifiedBadge({ 
  size = 38, 
  color = '#00B33C', // Using a vibrant green that matches the image inner circle
  style 
}: VerifiedBadgeProps) {
  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Svg width={size} height={size} viewBox="0 0 38 38" style={styles.absolute}>
        {/* Scalloped outer border */}
        <Path 
          d="M 19.00 1.00 Q 21.15 2.64 22.88 4.51 Q 25.31 3.76 28.00 3.41 Q 29.04 5.91 29.61 8.39 Q 32.09 8.96 34.59 10.00 Q 34.24 12.69 33.49 15.12 Q 35.36 16.85 37.00 19.00 Q 35.36 21.15 33.49 22.88 Q 34.24 25.31 34.59 28.00 Q 32.09 29.04 29.61 29.61 Q 29.04 32.09 28.00 34.59 Q 25.31 34.24 22.88 33.49 Q 21.15 35.36 19.00 37.00 Q 16.85 35.36 15.12 33.49 Q 12.69 34.24 10.00 34.59 Q 8.96 32.09 8.39 29.61 Q 5.91 29.04 3.41 28.00 Q 3.76 25.31 4.51 22.88 Q 2.64 21.15 1.00 19.00 Q 2.64 16.85 4.51 15.12 Q 3.76 12.69 3.41 10.00 Q 5.91 8.96 8.39 8.39 Q 8.96 5.91 10.00 3.41 Q 12.69 3.76 15.12 4.51 Q 16.85 2.64 19.00 1.00 Z"
          fill="none"
          stroke={color}
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner solid circle */}
        <Circle cx="19" cy="19" r="10" fill={color} />
        {/* White Checkmark */}
        <Path 
          d="M 14.5 19.5 L 17.5 22.5 L 23.5 15.5" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round" 
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  absolute: {
    position: 'absolute',
  },
});
