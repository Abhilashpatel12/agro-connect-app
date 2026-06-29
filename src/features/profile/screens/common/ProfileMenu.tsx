import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { profileStyles as styles } from '../../styles';
import { ProfileSection } from '../../profile-data';

interface ProfileMenuProps {
  sections: ProfileSection[];
}

export function ProfileMenu({ sections }: ProfileMenuProps) {
  const router = useRouter();

  return (
    <View style={styles.sectionList}>
      {sections.map((section) => (
        <View key={section.title} style={styles.sectionWrap}>
          <View style={styles.sectionHeaderWrap}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
          <View style={styles.sectionCard}>
            {section.data.map((action, index) => (
              <React.Fragment key={action.id}>
                <Pressable
                  style={styles.actionRow}
                  onPress={() => {
                    if (action.isLogout) {
                      router.replace('/');
                    } else {
                      router.push(action.href as any);
                    }
                  }}>
                  <View style={[styles.actionIconBox, { backgroundColor: action.iconBg }]}>
                    <Image source={action.icon} style={styles.actionIcon} contentFit="contain" />
                  </View>
                  <Text style={[styles.actionTitle, action.isLogout && { color: '#E62326' }]}>
                    {action.title}
                  </Text>
                </Pressable>
                {index < section.data.length - 1 && <View style={styles.actionDivider} />}
              </React.Fragment>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
