import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



import { s, vs, ms } from '@/utils/scale';
const transactions = [
  { id: '1', amount: '10,000', date: '01 Jun 2026, 02:30 PM', orderId: '#KM-2026-0381', status: 'Pending' },
  { id: '2', amount: '10,000', date: '01 Jun 2026, 02:30 PM', orderId: '#KM-2026-0381', status: 'Paid Successfully' },
  { id: '3', amount: '10,000', date: '01 Jun 2026, 02:30 PM', orderId: '#KM-2026-0381', status: 'Paid Successfully' },
  { id: '4', amount: '10,000', date: '01 Jun 2026, 02:30 PM', orderId: '#KM-2026-0381', status: 'Paid Successfully' },
  { id: '5', amount: '10,000', date: '01 Jun 2026, 02:30 PM', orderId: '#KM-2026-0381', status: 'Paid Successfully' },
];

export default function PayoutHistoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payout History</Text>
          <TouchableOpacity style={styles.monthSelector}>
            <Ionicons name="calendar-outline" size={16} color="#1C1B1F" style={styles.calendarIcon} />
            <Text style={styles.monthText}>June 2026</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Summary Cards */}
          <View style={styles.cardsGrid}>
            <View style={styles.summaryCard}>
              <Text style={styles.cardLabel}>Total Received</Text>
              <Text style={[styles.cardValue, { color: '#4CAF50' }]}>₹ 51,000</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.cardLabel}>Pending Payout</Text>
              <Text style={[styles.cardValue, { color: '#F09731' }]}>₹ 10,000</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.cardLabel}>Total Payouts</Text>
              <Text style={[styles.cardValue, { color: '#000000' }]}>10</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.cardLabel}>Next Payment Date</Text>
              <Text style={[styles.cardValue, { color: '#000000' }]}>05 Jun 2026</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Payout Transactions</Text>

          {/* Transactions List */}
          <View style={styles.transactionsList}>
            {transactions.map((tx) => (
              <View key={tx.id} style={styles.transactionItem}>
                <View style={styles.txLeft}>
                  <Text style={styles.txAmount}>₹ {tx.amount}</Text>
                  <Text style={styles.txDate}>{tx.date}</Text>
                  <Text style={styles.txOrderId}>Order ID: {tx.orderId}</Text>
                </View>
                <Text 
                  style={[
                    styles.txStatus, 
                    { color: tx.status === 'Pending' ? '#F09731' : '#4CAF50' }
                  ]}
                >
                  {tx.status}
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.footerText}>Payouts will be processed securely to your bank account</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(20),
    paddingVertical: vs(16),
    justifyContent: 'space-between',
    marginTop: vs(10),
  },
  backButton: {
    width: s(48),
    height: vs(48),
    backgroundColor: '#4CAF50',
    borderRadius: s(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: ms(18),
    color: '#000000',
    flex: 1,
    marginLeft: s(16),
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(16),
    paddingVertical: vs(11),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: s(10),
    gap: s(6),
  },
  calendarIcon: {
    marginRight: s(4),
  },
  monthText: {
    fontFamily: 'DM Sans',
    fontSize: ms(12),
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: s(20),
    paddingBottom: vs(40),
    paddingTop: vs(10),
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: s(12),
    marginBottom: vs(24),
  },
  summaryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
    padding: s(16),
    gap: s(4),
  },
  cardLabel: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    color: '#898989',
  },
  cardValue: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    marginTop: vs(4),
  },
  sectionTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontSize: ms(16),
    color: '#000000',
    marginBottom: vs(16),
  },
  transactionsList: {
    gap: s(12),
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(16),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    borderRadius: s(14),
  },
  txLeft: {
    gap: s(4),
  },
  txAmount: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    color: '#000000',
    marginBottom: vs(2),
  },
  txDate: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    color: '#898989',
  },
  txOrderId: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
    color: '#898989',
  },
  txStatus: {
    fontFamily: 'DM Sans',
    fontSize: ms(14),
  },
  footerText: {
    fontFamily: 'DM Sans',
    fontSize: ms(12),
    color: '#898989',
    textAlign: 'center',
    marginTop: vs(24),
  },
});
