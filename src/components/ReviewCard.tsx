import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
    borderRadius: 14,
    padding: 14,
    width: '100%',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontFamily: 'DMSans_500Medium',
    fontSize: 19,
  },
  userName: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  stars: {
    flexDirection: 'row',
    gap: 4,
  },
  star: {
    marginRight: 2,
  },
  date: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#898989',
  },
  reviewText: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#898989',
  },
});
