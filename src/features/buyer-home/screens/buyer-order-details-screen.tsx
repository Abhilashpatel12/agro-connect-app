import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, Modal, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'expo-image';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../buyer-order-details-styles';

const MOCK_ORDER = {
  id: '#KM-2026-0381',
  placedOn: '03 Mar, 26 - 9:30 AM',
  status: 'Estimated Delivery',
  deliveryTime: 'Today 10:30 AM to 6:00PM',
  statusMessage: 'Your order is in transit',
  item: {
    name: 'Fresh Tomato',
    weight: '5kg',
    vendor: 'Lakshmi Farm Fresh',
    location: 'Hyderabad',
    distance: '10km',
    image: require('@/assets/images/buyer/tomato.png'),
    itemTotal: 120,
    deliveryFee: 40,
    platformFee: 10,
    total: 170,
  },
  address: {
    type: 'Home',
    name: 'Rahul Kumar, 00000 00000',
    line: '14-2-56, Ameerpet Main Road,\nHyderabad, Telangana – 500016',
  }
};

const CANCEL_REASONS = [
  'Found a better price elsewhere',
  'Ordered by mistake',
  'Delivery is taking too long',
  'No longer needed',
  'Want to change quantity',
  'Others (please specify)'
];

export function BuyerOrderDetailsScreen() {
  const router = useRouter();
  const { status: routeStatus } = useLocalSearchParams<{ status?: string }>();
  const insets = useSafeAreaInsets();
  
  const isCompleted = routeStatus === 'Completed';
  const isCancelled = routeStatus === 'Cancelled';

  const [isCancelModalVisible, setCancelModalVisible] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [otherReason, setOtherReason] = useState('');

  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: insets.top || 40 }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Orders Details</Text>
        <Pressable style={styles.supportButton}>
          <Image source={require('@/assets/images/buyer/image_39.svg')} style={styles.supportIcon} contentFit="contain" />
          <Text style={styles.supportText}>Need Help?</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusTextContainer}>
            <Text style={styles.statusLabel}>
              {isCompleted ? 'Delivered Successfully' : isCancelled ? 'Order Cancelled' : MOCK_ORDER.status}
            </Text>
            <Text style={styles.statusTime}>
              {isCompleted ? 'Delivered on\n03 Mar, 26 - 6:30 PM' : isCancelled ? 'This order is cancelled\nRefund has been processed' : MOCK_ORDER.deliveryTime}
            </Text>
            {!isCompleted && !isCancelled && (
              <Text style={styles.statusMessage}>{MOCK_ORDER.statusMessage}</Text>
            )}
          </View>
          {isCompleted ? (
            <Image source={require('@/assets/images/buyer/image 123.svg')} style={styles.truckIcon} contentFit="contain" />
          ) : isCancelled ? (
            <Image source={require('@/assets/images/buyer/image 126.svg')} style={styles.truckIcon} contentFit="contain" />
          ) : (
            <Image source={require('@/assets/images/buyer/image_122.svg')} style={styles.truckIcon} contentFit="contain" />
          )}
        </View>

        {/* Meta Card */}
        <View style={styles.metaCard}>
          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>Order ID</Text>
            <Text style={styles.metaValue}>{MOCK_ORDER.id}</Text>
          </View>
          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>Placed on</Text>
            <Text style={styles.metaValue}>{MOCK_ORDER.placedOn}</Text>
          </View>
        </View>

        {/* Order Details Section */}
        <Text style={styles.sectionTitle}>Order Details</Text>
        <View style={styles.detailsCard}>
          <View style={styles.productRow}>
            <Image source={MOCK_ORDER.item.image} style={styles.productImage} contentFit="cover" />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{MOCK_ORDER.item.name}</Text>
              <Text style={styles.productWeight}>{MOCK_ORDER.item.weight}</Text>
              <Text style={styles.vendorName}>{MOCK_ORDER.item.vendor}</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-sharp" size={14} color="#898989" />
                <Text style={styles.locationText}>
                  {MOCK_ORDER.item.location} • {MOCK_ORDER.item.distance}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Item Total:</Text>
            <Text style={styles.billValue}>₹ {MOCK_ORDER.item.itemTotal}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Delivery Fee:</Text>
            <Text style={styles.billValue}>₹ {MOCK_ORDER.item.deliveryFee}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Platform Fee:</Text>
            <Text style={styles.billValue}>₹ {MOCK_ORDER.item.platformFee}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount:</Text>
            <Text style={styles.totalValue}>₹ {MOCK_ORDER.item.total}</Text>
          </View>
        </View>

        {/* Conditional Bottom Sections */}
        {!isCompleted && !isCancelled && (
          <>
            {/* Delivery Address Section */}
            <Text style={styles.sectionTitle}>Delivery Address</Text>
            <View style={styles.addressCard}>
              <View style={styles.addressLeft}>
                <View style={styles.addressIconBlock}>
                  <Ionicons name="location-outline" size={18} color="#000000" />
                </View>
                <View style={styles.addressTextContainer}>
                  <Text style={styles.addressType}>{MOCK_ORDER.address.type}</Text>
                  <Text style={styles.addressName}>{MOCK_ORDER.address.name}</Text>
                  <Text style={styles.addressLine}>{MOCK_ORDER.address.line}</Text>
                </View>
              </View>
              <Pressable style={styles.changeButton}>
                <Text style={styles.changeButtonText}>Change</Text>
              </Pressable>
            </View>

            {/* Footer Actions */}
            <View style={styles.actionFooter}>
              <Pressable style={styles.trackButton} onPress={() => router.push('/orders/track' as any)}>
                <Text style={styles.trackButtonText}>Track Order</Text>
              </Pressable>
              <Pressable style={styles.cancelButton} onPress={() => setCancelModalVisible(true)}>
                <Text style={styles.cancelButtonText}>Cancel Order</Text>
              </Pressable>
            </View>
          </>
        )}
        
        {isCompleted && (
          <>
            {/* Rating Section */}
            <View style={styles.ratingCard}>
              <View style={styles.ratingHeader}>
                <Text style={styles.ratingTitle}>Rate your order</Text>
                <Text style={styles.ratingSubtitle}>How was your experience?</Text>
              </View>
              <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons key={star} name="star" size={26} color="#FFD700" />
                ))}
              </View>
              <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackLabel}>Write a review</Text>
                <TextInput
                  style={styles.feedbackInput}
                  placeholder="Write your feedback here..."
                  placeholderTextColor="#898989"
                  multiline
                />
              </View>
              <Pressable style={styles.submitRatingButton}>
                <Text style={styles.submitRatingText}>Submit</Text>
              </Pressable>
            </View>

            {/* Footer Actions for Completed */}
            <View style={styles.actionFooter}>
              <Pressable style={styles.buyAgainButton}>
                <Text style={styles.buyAgainButtonText}>Buy Again</Text>
              </Pressable>
              <Pressable style={styles.viewInvoiceButton}>
                <Text style={styles.viewInvoiceButtonText}>View Invoice</Text>
              </Pressable>
            </View>
          </>
        )}

        {isCancelled && (
          <View style={styles.actionFooter}>
            <Pressable style={styles.viewInvoiceHollowButton}>
              <Text style={styles.viewInvoiceHollowButtonText}>View Invoice</Text>
            </Pressable>
          </View>
        )}

      </ScrollView>

      {/* Cancel Order Modal */}
      <Modal visible={isCancelModalVisible} animationType="slide" transparent={true}>
        <KeyboardAvoidingView 
          style={styles.modalOverlay} 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Pressable style={styles.backButton} onPress={() => setCancelModalVisible(false)}>
                <Ionicons name="arrow-back" size={18} color="#FFFFFF" />
              </Pressable>
              <Text style={styles.modalTitle}>Cancel Order</Text>
            </View>

            {/* Warning Banner */}
            <View style={styles.warningBanner}>
              <Ionicons name="alert-circle-outline" size={17} color="#E62326" style={styles.warningIcon} />
              <Text style={styles.warningText}>Once Cancelled this action cannot be undone.</Text>
            </View>

            <Text style={styles.modalQuestion}>Why are you cancelling this order?</Text>

            {/* Radio Options */}
            <ScrollView showsVerticalScrollIndicator={false}>
              {CANCEL_REASONS.map((reason) => (
                <Pressable 
                  key={reason} 
                  style={styles.radioRow} 
                  onPress={() => setSelectedReason(reason)}
                >
                  <View style={styles.radioCircle}>
                    {selectedReason === reason && <View style={styles.radioInnerCircle} />}
                  </View>
                  <Text style={styles.radioText}>{reason}</Text>
                </Pressable>
              ))}

              {selectedReason === 'Others (please specify)' && (
                <View>
                  <Text style={styles.reasonLabel}>Please tell us more</Text>
                  <TextInput
                    style={styles.reasonInput}
                    placeholder="Write your reason here..."
                    placeholderTextColor="#898989"
                    multiline
                    value={otherReason}
                    onChangeText={setOtherReason}
                  />
                </View>
              )}

              {/* Action Buttons */}
              <View style={styles.modalFooter}>
                <Pressable style={styles.goBackButton} onPress={() => setCancelModalVisible(false)}>
                  <Text style={styles.goBackButtonText}>Go Back</Text>
                </Pressable>
                <Pressable style={styles.confirmCancelButton}>
                  <Text style={styles.confirmCancelButtonText}>Cancel order</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
