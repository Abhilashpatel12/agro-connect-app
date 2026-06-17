import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Modal } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles';
import { NavBar } from '@/components/nav-bar';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const YEARS = ['2026', '2025', '2024', '2023', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];

const MONTH_MAP: Record<string, string> = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December',
};

export function AnalyticsScreen() {
  const router = useRouter();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('Jun');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [appliedMonth, setAppliedMonth] = useState('June');
  const [appliedYear, setAppliedYear] = useState('2026');

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
            <Text style={styles.headerTitle}>Analytics & Reports</Text>
          </View>
          
          <Pressable style={styles.filterButton} onPress={() => setIsFilterVisible(true)}>
            <Ionicons name="calendar-outline" size={16} color="#1C1B1F" />
            <Text style={styles.filterText}>{appliedMonth} {appliedYear}</Text>
          </Pressable>
        </View>

        {/* Stats Grid */}
        <View style={styles.gridContainer}>
          {/* Card 1: Total Revenue */}
          <View style={styles.card}>
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
          </View>

          {/* Card 2: Total Orders */}
          <View style={styles.card}>
            <View style={styles.cardIconBox}>
              <Image source={require('@/assets/orders_assests/image_121_612_682.png')} style={styles.cardIcon} contentFit="contain" />
            </View>
            <View style={{ gap: 4 }}>
              <Text style={styles.cardLabel}>Total Orders</Text>
              <Text style={styles.cardValue}>48 Orders</Text>
            </View>
            <View style={styles.cardTrendRow}>
              <Ionicons name="arrow-up" size={14} color="#4CAF50" />
              <Text style={styles.cardTrendText}>8 vs Feb 2026</Text>
            </View>
          </View>

          {/* Card 3: Active Listing */}
          <View style={styles.card}>
            <View style={styles.cardIconBox}>
              <Image source={require('@/assets/images/image 11.svg')} style={styles.cardIcon} contentFit="contain" />
            </View>
            <View style={{ gap: 4 }}>
              <Text style={styles.cardLabel}>Active Listing</Text>
              <Text style={styles.cardValue}>12 Crops</Text>
            </View>
            <Text style={styles.cardSubtext}>Current Live</Text>
          </View>

          {/* Card 4: Average Rating */}
          <View style={styles.card}>
            <View style={styles.cardIconBox}>
              <Image source={require('@/assets/profile_assests/image 90.svg')} style={styles.cardIcon} contentFit="contain" />
            </View>
            <View style={{ gap: 4 }}>
              <Text style={styles.cardLabel}>Average Rating</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={styles.cardValue}>4.8</Text>
                <Image source={require('@/assets/orders_assests/image_91_615_1627.png')} style={{ width: 14, height: 14 }} contentFit="contain" />
              </View>
            </View>
            <Text style={styles.cardSubtext}>Based on 124 Reviews</Text>
          </View>
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
          <Pressable style={styles.seeAllButton}>
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
                <View style={[styles.progressBarFill, { width: 170 }]} />
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
                <View style={[styles.progressBarFill, { width: 170 }]} />
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
                <View style={[styles.progressBarFill, { width: 170 }]} />
              </View>
            </View>
            <View style={styles.recentItemRight}>
              <MaterialIcons name="currency-rupee" size={14} color="#000000" />
              <Text style={styles.recentItemValue}>21,000</Text>
            </View>
          </View>
        </View>

        {/* Download Report Button */}
        <Pressable style={styles.downloadButton}>
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
      <NavBar />
    </View>
  );
}
