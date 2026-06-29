import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { s, vs, ms } from '@/utils/scale';
interface ReviewCardProps {
  initial?: string;
  name?: string;
  date?: string;
  text?: string;
  stars?: number;
}

export function ReviewCard({
  initial = 'R',
  name = 'Raj Traders',
  date = '2 Apr 26',
  text = 'Fresh tomatoes and good packaging. Delivered on time. Very satisfied with the quality',
  stars = 5,
}: ReviewCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initial}</Text>
          </View>
          <View>
            <Text style={styles.userName}>{name}</Text>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons key={star} name="star" size={16} color={star <= stars ? "#FFC107" : "#D9D9D9"} style={styles.star} />
              ))}
            </View>
          </View>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.reviewText}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(14),
    width: '100%',
    marginBottom: vs(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: vs(12),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(12),
  },
  avatar: {
    width: s(40),
    height: vs(40),
    backgroundColor: '#4CAF50',
    borderRadius: s(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(19),
  },
  userName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(4),
  },
  stars: {
    flexDirection: 'row',
    gap: s(4),
  },
  star: {
    marginRight: s(2),
  },
  date: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    color: '#898989',
  },
  reviewText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: ms(14),
    lineHeight: ms(22),
    color: '#898989',
  },
});
