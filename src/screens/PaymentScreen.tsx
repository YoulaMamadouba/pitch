import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { ArrowLeftIcon, CreditCardIcon, ShieldIcon, VisaIcon, MastercardIcon, PayPalIcon, MobileMoneyIcon } from '../components/Icons';

type PaymentScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Payment'>;

const { width, height } = Dimensions.get('window');

export const PaymentScreen: React.FC = () => {
  const navigation = useNavigation<PaymentScreenNavigationProp>();
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('1234 5678 9012 3456');
  const [expiry, setExpiry] = useState('12/25');
  const [cvv, setCvv] = useState('123');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCompletePayment = () => {
    // Handle payment completion
    console.log('Payment completed');
    // Navigate to next screen after payment
    navigation.navigate('Onboarding');
  };

  const currencies = [
    { code: 'USD', symbol: '$', amount: '299' },
    { code: 'EUR', symbol: '€', amount: '279' },
    { code: 'XOF', symbol: '', amount: '175k' },
  ];

  const paymentMethods = [
    {
      id: 'card',
      title: 'Carte de crédit/débit',
      subtitle: 'Visa, Mastercard, Amex',
      icon: 'credit-card',
      color: '#2563EB',
    },
    {
      id: 'paypal',
      title: 'PayPal',
      subtitle: 'Payer avec votre compte PayPal',
      icon: 'paypal',
      color: '#3B82F6',
    },
    {
      id: 'mobile',
      title: 'Mobile Money',
      subtitle: 'Orange Money, MTN, Moov',
      icon: 'mobile',
      color: '#059669',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleBack}
            >
              <ArrowLeftIcon size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Paiement</Text>
            <View style={styles.secureBadge}>
              <Text style={styles.secureBadgeText}>SÉCURISÉ</Text>
            </View>
          </View>

          {/* Progress Indicator */}
          <View style={styles.progressSection}>
            <View style={styles.progressDots}>
              <View style={styles.progressDot} />
              <View style={styles.progressDot} />
              <View style={styles.progressDot} />
            </View>
            <Text style={styles.progressText}>Étape 3 sur 3</Text>
          </View>

          {/* Order Summary */}
          <View style={styles.orderSection}>
            <LinearGradient
              colors={['#F4C056', '#FFD700']}
              style={styles.orderCard}
            >
              <View style={styles.orderHeader}>
                <Text style={styles.orderTitle}>Formation VR Premium</Text>
                <View style={styles.premiumBadge}>
                  <Text style={styles.premiumBadgeText}>PREMIUM</Text>
                </View>
              </View>
              <Text style={styles.orderDescription}>
                12 modules + environnements VR + coaching IA
              </Text>
              <View style={styles.orderTotal}>
                <Text style={styles.orderTotalLabel}>Total</Text>
                <Text style={styles.orderTotalAmount}>299,00 €</Text>
              </View>
            </LinearGradient>
          </View>

          {/* Currency Selection */}
          <View style={styles.currencySection}>
            <Text style={styles.sectionTitle}>Sélectionner la devise</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <TouchableOpacity
                  key={currency.code}
                  style={[
                    styles.currencyButton,
                    selectedCurrency === currency.code && styles.currencyButtonSelected
                  ]}
                  onPress={() => setSelectedCurrency(currency.code)}
                >
                  <Text style={styles.currencyCode}>{currency.code}</Text>
                  <Text style={[
                    styles.currencyAmount,
                    selectedCurrency === currency.code && styles.currencyAmountSelected
                  ]}>
                    {currency.symbol}{currency.amount}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Payment Methods */}
          <View style={styles.paymentSection}>
            <Text style={styles.sectionTitle}>Méthode de paiement</Text>
            
            {/* Credit Card */}
            <TouchableOpacity
              style={[
                styles.paymentMethod,
                selectedPaymentMethod === 'card' && styles.paymentMethodSelected
              ]}
              onPress={() => setSelectedPaymentMethod('card')}
            >
              <View style={styles.paymentMethodHeader}>
                <View style={styles.paymentMethodInfo}>
                  <View style={[styles.paymentIcon, { backgroundColor: '#2563EB' }]}>
                    <CreditCardIcon size={24} color="#FFFFFF" />
                  </View>
                  <View>
                    <Text style={styles.paymentMethodTitle}>Carte de crédit/débit</Text>
                    <Text style={styles.paymentMethodSubtitle}>Visa, Mastercard, Amex</Text>
                  </View>
                </View>
                <View style={[
                  styles.paymentRadio,
                  selectedPaymentMethod === 'card' && styles.paymentRadioSelected
                ]} />
              </View>
              
              {selectedPaymentMethod === 'card' && (
                <View style={styles.cardForm}>
                  <TextInput
                    style={styles.cardInput}
                    placeholder="1234 5678 9012 3456"
                    placeholderTextColor="#9CA3AF"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    keyboardType="numeric"
                  />
                  <View style={styles.cardFormRow}>
                    <TextInput
                      style={styles.cardInputHalf}
                      placeholder="MM/AA"
                      placeholderTextColor="#9CA3AF"
                      value={expiry}
                      onChangeText={setExpiry}
                    />
                    <TextInput
                      style={styles.cardInputHalf}
                      placeholder="CVV"
                      placeholderTextColor="#9CA3AF"
                      value={cvv}
                      onChangeText={setCvv}
                      keyboardType="numeric"
                      secureTextEntry
                    />
                  </View>
                </View>
              )}
            </TouchableOpacity>

            {/* PayPal */}
            <TouchableOpacity
              style={[
                styles.paymentMethod,
                selectedPaymentMethod === 'paypal' && styles.paymentMethodSelected
              ]}
              onPress={() => setSelectedPaymentMethod('paypal')}
            >
              <View style={styles.paymentMethodHeader}>
                <View style={styles.paymentMethodInfo}>
                  <View style={[styles.paymentIcon, { backgroundColor: '#3B82F6' }]}>
                    <PayPalIcon size={24} color="#FFFFFF" />
                  </View>
                  <View>
                    <Text style={styles.paymentMethodTitle}>PayPal</Text>
                    <Text style={styles.paymentMethodSubtitle}>Payer avec votre compte PayPal</Text>
                  </View>
                </View>
                <View style={[
                  styles.paymentRadio,
                  selectedPaymentMethod === 'paypal' && styles.paymentRadioSelected
                ]} />
              </View>
            </TouchableOpacity>

            {/* Mobile Money */}
            <TouchableOpacity
              style={[
                styles.paymentMethod,
                selectedPaymentMethod === 'mobile' && styles.paymentMethodSelected
              ]}
              onPress={() => setSelectedPaymentMethod('mobile')}
            >
              <View style={styles.paymentMethodHeader}>
                <View style={styles.paymentMethodInfo}>
                  <View style={[styles.paymentIcon, { backgroundColor: '#059669' }]}>
                    <MobileMoneyIcon size={24} color="#FFFFFF" />
                  </View>
                  <View>
                    <Text style={styles.paymentMethodTitle}>Mobile Money</Text>
                    <Text style={styles.paymentMethodSubtitle}>Orange Money, MTN, Moov</Text>
                  </View>
                </View>
                <View style={[
                  styles.paymentRadio,
                  selectedPaymentMethod === 'mobile' && styles.paymentRadioSelected
                ]} />
              </View>
              
              {selectedPaymentMethod === 'mobile' && (
                <View style={styles.mobileMoneyButtons}>
                  <TouchableOpacity style={styles.mobileMoneyButton}>
                    <Text style={styles.mobileMoneyButtonText}>Orange Money</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.mobileMoneyButton}>
                    <Text style={styles.mobileMoneyButtonText}>MTN Money</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.mobileMoneyButton}>
                    <Text style={styles.mobileMoneyButtonText}>Moov Money</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Security Info */}
          <View style={styles.securitySection}>
            <View style={styles.securityCard}>
              <View style={styles.securityContent}>
                <ShieldIcon size={24} color="#10B981" />
                <View>
                  <Text style={styles.securityTitle}>Paiement sécurisé</Text>
                  <Text style={styles.securityDescription}>
                    Chiffrement SSL 256-bit • Conforme PCI DSS
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Complete Payment */}
          <View style={styles.completeSection}>
            <TouchableOpacity
              style={styles.completeButton}
              onPress={handleCompletePayment}
            >
              <LinearGradient
                colors={['#F4C056', '#FFD700']}
                style={styles.completeButtonGradient}
              >
                <Text style={styles.completeButtonText}>
                  Finaliser le paiement - 299,00 €
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            
            <View style={styles.termsSection}>
              <Text style={styles.termsText}>
                En finalisant cet achat, vous acceptez nos{' '}
                <Text style={styles.termsLink}>Conditions d'utilisation</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F1C2E',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secureBadge: {
    backgroundColor: '#059669',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  secureBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  progressSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  progressDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  progressDot: {
    width: 32,
    height: 4,
    backgroundColor: '#F4C056',
    borderRadius: 2,
    marginHorizontal: 4,
  },
  progressText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 14,
  },
  orderSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  orderCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderTitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  premiumBadge: {
    backgroundColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  premiumBadgeText: {
    color: '#F4C056',
    fontSize: 10,
    fontWeight: 'bold',
  },
  orderDescription: {
    color: '#374151',
    fontSize: 14,
    marginBottom: 12,
  },
  orderTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderTotalLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  orderTotalAmount: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  currencySection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  currencyGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  currencyButton: {
    flex: 1,
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  currencyButtonSelected: {
    borderColor: '#F4C056',
    backgroundColor: 'rgba(244, 192, 86, 0.1)',
  },
  currencyCode: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  currencyAmount: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  currencyAmountSelected: {
    color: '#F4C056',
  },
  paymentSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  paymentMethod: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  paymentMethodSelected: {
    borderColor: '#F4C056',
    backgroundColor: 'rgba(244, 192, 86, 0.1)',
  },
  paymentMethodHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  paymentMethodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paypalText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  mobileText: {
    fontSize: 20,
  },
  paymentMethodTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  paymentMethodSubtitle: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  paymentRadio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#4B5563',
  },
  paymentRadioSelected: {
    backgroundColor: '#F4C056',
    borderColor: '#F4C056',
  },
  cardForm: {
    gap: 12,
  },
  cardInput: {
    backgroundColor: '#374151',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  cardFormRow: {
    flexDirection: 'row',
    gap: 12,
  },
  cardInputHalf: {
    flex: 1,
    backgroundColor: '#374151',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  mobileMoneyButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  mobileMoneyButton: {
    flex: 1,
    backgroundColor: '#EA580C',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  mobileMoneyButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },
  securitySection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  securityCard: {
    backgroundColor: 'rgba(5, 150, 105, 0.3)',
    borderWidth: 1,
    borderColor: '#059669',
    borderRadius: 12,
    padding: 16,
  },
  securityContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  securityTitle: {
    color: '#10B981',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  securityDescription: {
    color: '#D1D5DB',
    fontSize: 12,
  },
  completeSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  completeButton: {
    marginBottom: 16,
  },
  completeButtonGradient: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  termsSection: {
    alignItems: 'center',
  },
  termsText: {
    color: '#9CA3AF',
    fontSize: 12,
    textAlign: 'center',
  },
  termsLink: {
    color: '#F4C056',
    textDecorationLine: 'underline',
  },
});

