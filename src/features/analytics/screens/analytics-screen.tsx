import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Modal, Alert } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles';

const generateMonths = () => {
  return Array.from({ length: 12 }, (_, i) => {
    const d = new Date(2000, i, 1);
    return d.toLocaleString('en-US', { month: 'short' });
  });
};

const generateMonthMap = () => {
  const map: Record<string, string> = {};
  Array.from({ length: 12 }, (_, i) => {
    const d = new Date(2000, i, 1);
    const short = d.toLocaleString('en-US', { month: 'short' });
    const long = d.toLocaleString('en-US', { month: 'long' });
    map[short] = long;
  });
  return map;
};

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 12 }, (_, i) => (currentYear - i).toString());
};

const MONTHS = generateMonths();
const MONTH_MAP = generateMonthMap();
const YEARS = generateYears();

export function AnalyticsScreen() {
  const router = useRouter();
  const currentMonthShort = new Date().toLocaleString('en-US', { month: 'short' });
  const currentYearStr = new Date().getFullYear().toString();
  const currentMonthLong = new Date().toLocaleString('en-US', { month: 'long' });

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonthShort);
  const [selectedYear, setSelectedYear] = useState(currentYearStr);
  const [appliedMonth, setAppliedMonth] = useState(currentMonthLong);
  const [appliedYear, setAppliedYear] = useState(currentYearStr);

  const handleApply = () => {
    setAppliedMonth(MONTH_MAP[selectedMonth] || selectedMonth);
    setAppliedYear(selectedYear);
    setIsFilterVisible(false);
  };

  return (
    <View style={styles.screen}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        bounces={false} 
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
            </Pressable>
            <Text style={styles.headerTitle}>Analytics</Text>
          </View>
          
          <Pressable style={styles.filterButton} onPress={() => setIsFilterVisible(true)}>
            <Ionicons name="calendar-outline" size={16} color="#1C1B1F" />
            <Text style={styles.filterText}>{appliedMonth} {appliedYear}</Text>
          </Pressable>
        </View>

        {/* Stats Grid */}
        <View style={styles.gridContainer}>
          {/* Card 1: Total Revenue */}
          <Pressable style={styles.card} onPress={() => router.push('/analytics/payout-history')}>
            <View style={styles.cardIconBox}>
              <Image source={require('@/assets/images/at money icon.png')} style={styles.cardIcon} contentFit="contain" />
            </View>
            <View style={{ gap: 4 }}>
              <Text style={styles.cardLabel}>Total Revenue</Text>
              <View style={styles.cardValueContainer}>
                <MaterialIcons name="currency-rupee" size={14} color="#000000" />
                <Text style={styles.cardValue}>51,000</Text>
              </View>
            </View>
            <View style={styles.cardTrendRow}>
              <Ionicons name="arrow-up" size={14} color="#4CAF50" />
              <Text style={styles.cardTrendText}>12% vs Feb 2026</Text>
            </View>
          </Pressable>

          {/* Card 2: Total Orders */}
          <Pressable style={styles.card} onPress={() => router.push('/orders?tab=Active')}>
            <View style={styles.cardIconBox}>
              <Image source={require('@/assets/images/image.png')} style={styles.cardIcon} contentFit="contain" />
            </View>
            <View style={{ gap: 4 }}>
              <Text style={styles.cardLabel}>Total Orders</Text>
              <Text style={styles.cardValue}>48 Orders</Text>
            </View>
            <View style={styles.cardTrendRow}>
              <Ionicons name="arrow-up" size={14} color="#4CAF50" />
              <Text style={styles.cardTrendText}>8 vs Feb 2026</Text>
            </View>
          </Pressable>

          {/* Card 3: Active Listing */}
          <Pressable style={styles.card} onPress={() => router.push('/crops')}>
            <View style={styles.cardIconBox}>
              <Image source={require('@/assets/images/image 11.svg')} style={styles.cardIcon} contentFit="contain" />
            </View>
            <View style={{ gap: 4 }}>
              <Text style={styles.cardLabel}>Active Listing</Text>
              <Text style={styles.cardValue}>12 Crops</Text>
            </View>
            <Text style={styles.cardSubtext}>Current Live</Text>
          </Pressable>

          {/* Card 4: Average Rating */}
          <Pressable style={styles.card} onPress={() => router.push('/ratings')}>
            <View style={styles.cardIconBox}>
              <Image source={require('@/assets/profile_assests/image 90.svg')} style={styles.cardIcon} contentFit="contain" />
            </View>
            <View style={{ gap: 4 }}>
              <Text style={styles.cardLabel}>Average Rating</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={styles.cardValue}>4.8</Text>
                <Ionicons name="star" size={14} color="#FFC107" />
              </View>
            </View>
            <Text style={styles.cardSubtext}>Based on 124 Reviews</Text>
          </Pressable>
        </View>

        {/* Revenue Overview Chart */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Revenue Overview</Text>
          
          <View style={styles.chartWrapper}>
            {/* Y Axis Labels */}
            <View style={styles.yAxis}>
              <View style={styles.yAxisLabelContainer}>
                <MaterialIcons name="currency-rupee" size={12} color="#898989" />
                <Text style={styles.yAxisText}>60k</Text>
              </View>
              <View style={styles.yAxisLabelContainer}>
                <MaterialIcons name="currency-rupee" size={12} color="#898989" />
                <Text style={styles.yAxisText}>45k</Text>
              </View>
              <View style={styles.yAxisLabelContainer}>
                <MaterialIcons name="currency-rupee" size={12} color="#898989" />
                <Text style={styles.yAxisText}>30k</Text>
              </View>
              <View style={styles.yAxisLabelContainer}>
                <MaterialIcons name="currency-rupee" size={12} color="#898989" />
                <Text style={styles.yAxisText}>15k</Text>
              </View>
              <View style={styles.yAxisLabelContainer}>
                <MaterialIcons name="currency-rupee" size={12} color="#898989" />
                <Text style={styles.yAxisText}>0</Text>
              </View>
            </View>

            {/* Plot Area */}
            <View style={styles.chartPlotArea}>
              {/* Horizontal Gridlines */}
              <View style={styles.gridLinesContainer}>
                <View style={styles.gridLine} />
                <View style={styles.gridLine} />
                <View style={styles.gridLine} />
                <View style={styles.gridLine} />
                <View style={styles.gridLine} />
              </View>

              {/* Vertical Bars */}
              <View style={styles.barsContainer}>
                {/* Bar 1: Week 1 */}
                <View style={styles.barCol}>
                  <Text style={styles.barVal}>18k</Text>
                  <View style={[styles.bar, { height: 57 }]} />
                </View>

                {/* Bar 2: Week 2 */}
                <View style={styles.barCol}>
                  <Text style={styles.barVal}>30k</Text>
                  <View style={[styles.bar, { height: 79 }]} />
                </View>

                {/* Bar 3: Week 3 */}
                <View style={styles.barCol}>
                  <Text style={styles.barVal}>40k</Text>
                  <View style={[styles.bar, { height: 102 }]} />
                </View>

                {/* Bar 4: Week 4 */}
                <View style={styles.barCol}>
                  <Text style={styles.barVal}>51k</Text>
                  <View style={[styles.bar, { height: 131 }]} />
                </View>
              </View>
            </View>
          </View>

          {/* X Axis Labels */}
          <View style={styles.xAxis}>
            <Text style={styles.xAxisText}>Week 1</Text>
            <Text style={styles.xAxisText}>Week 2</Text>
            <Text style={styles.xAxisText}>Week 3</Text>
            <Text style={styles.xAxisText}>Week 4</Text>
          </View>
        </View>

        {/* Top Performing Crop */}
        <Text style={styles.sectionTitle}>Top Performing Crop</Text>
        <View style={styles.topCropCard}>
          <Image 
            source={require('@/assets/images/image 67.png')} 
            style={styles.topCropImage} 
            contentFit="cover" 
          />
          <View style={styles.topCropDetails}>
            <Text style={styles.topCropTitle}>Tomato Hybrid</Text>
            <View style={styles.topCropRow}>
              <Text style={styles.topCropLabel}>Order</Text>
              <Text style={styles.topCropValue}>22</Text>
            </View>
            <View style={styles.topCropRow}>
              <Text style={styles.topCropLabel}>Revenue Generated</Text>
              <View style={styles.topCropRevenueContainer}>
                <MaterialIcons name="currency-rupee" size={14} color="#4CAF50" />
                <Text style={styles.topCropRevenueValue}>21,000</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Performance */}
        <View style={styles.recentHeaderRow}>
          <Text style={styles.recentTitle}>Recent Performance</Text>
          <Pressable style={styles.seeAllButton} onPress={() => router.push('/analytics/top-crops')}>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>

        <View style={styles.recentList}>
          {/* Recent Item 1 */}
          <View style={styles.recentItemCard}>
            <Image 
              source={require('@/assets/images/image 67.png')} 
              style={styles.recentItemThumb} 
              contentFit="cover" 
            />
            <View style={styles.recentItemMiddle}>
              <Text style={styles.recentItemTitle}>Tomato Hybrid</Text>
              <Text style={styles.recentItemSub}>22 Orders</Text>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '80%' }]} />
              </View>
            </View>
            <View style={styles.recentItemRight}>
              <MaterialIcons name="currency-rupee" size={14} color="#000000" />
              <Text style={styles.recentItemValue}>21,000</Text>
            </View>
          </View>

          {/* Recent Item 2 */}
          <View style={styles.recentItemCard}>
            <Image 
              source={require('@/assets/images/image 67.png')} 
              style={styles.recentItemThumb} 
              contentFit="cover" 
            />
            <View style={styles.recentItemMiddle}>
              <Text style={styles.recentItemTitle}>Tomato Hybrid</Text>
              <Text style={styles.recentItemSub}>22 Orders</Text>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '80%' }]} />
              </View>
            </View>
            <View style={styles.recentItemRight}>
              <MaterialIcons name="currency-rupee" size={14} color="#000000" />
              <Text style={styles.recentItemValue}>21,000</Text>
            </View>
          </View>

          {/* Recent Item 3 */}
          <View style={styles.recentItemCard}>
            <Image 
              source={require('@/assets/images/image 67.png')} 
              style={styles.recentItemThumb} 
              contentFit="cover" 
            />
            <View style={styles.recentItemMiddle}>
              <Text style={styles.recentItemTitle}>Tomato Hybrid</Text>
              <Text style={styles.recentItemSub}>22 Orders</Text>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '80%' }]} />
              </View>
            </View>
            <View style={styles.recentItemRight}>
              <MaterialIcons name="currency-rupee" size={14} color="#000000" />
              <Text style={styles.recentItemValue}>21,000</Text>
            </View>
          </View>
        </View>

        {/* Download Report Button */}
        <Pressable 
          style={styles.downloadButton}
          onPress={() => {
            Alert.alert(
              "Download Report",
              "Choose report format to download:",
              [
                { text: "PDF", onPress: () => Alert.alert("Success", "PDF report downloaded successfully!") },
                { text: "Excel", onPress: () => Alert.alert("Success", "Excel report downloaded successfully!") },
                { text: "Cancel", style: "cancel" }
              ]
            );
          }}
        >
          <Text style={styles.downloadText}>Download Report</Text>
          <Text style={styles.downloadSubtext}>PDF / Excel</Text>
        </Pressable>
      </ScrollView>

      {/* Select Period Modal (Overlay) */}
      {isFilterVisible && (
        <View style={styles.modalBackdropContainer}>
          <Pressable 
            style={styles.modalBackdrop} 
            onPress={() => setIsFilterVisible(false)}
          >
            <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
              <Text style={styles.modalTitle}>Select Period</Text>
              
              <View style={styles.modalScroll}>
                {/* Select Month Card */}
                <View style={styles.filterSectionCard}>
                  <Text style={styles.filterSectionTitle}>Select Month</Text>
                  <View style={styles.gridContainerModal}>
                    {MONTHS.map((m) => {
                      const isSelected = selectedMonth === m;
                      return (
                        <Pressable
                          key={m}
                          style={[
                            styles.gridItem,
                            isSelected && styles.gridItemActive,
                          ]}
                          onPress={() => setSelectedMonth(m)}
                        >
                          <Text
                            style={[
                              styles.gridItemText,
                              isSelected && styles.gridItemTextActive,
                            ]}
                          >
                            {m}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>

                {/* Select Year Card */}
                <View style={styles.filterSectionCard}>
                  <Text style={styles.filterSectionTitle}>Select Year</Text>
                  <View style={styles.gridContainerModal}>
                    {YEARS.map((y, idx) => {
                      const isSelected = selectedYear === y;
                      return (
                        <Pressable
                          key={`${y}-${idx}`}
                          style={[
                            styles.gridItem,
                            isSelected && styles.gridItemActive,
                          ]}
                          onPress={() => setSelectedYear(y)}
                        >
                          <Text
                            style={[
                              styles.gridItemText,
                              isSelected && styles.gridItemTextActive,
                            ]}
                          >
                            {y}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              </View>

              {/* Apply Button */}
              <Pressable style={styles.modalApplyButton} onPress={handleApply}>
                <Text style={styles.modalApplyButtonText}>Apply</Text>
              </Pressable>
            </Pressable>
          </Pressable>
        </View>
      )}

      {/* Bottom Bar Tab Bar */}
    </View>
  );
}
