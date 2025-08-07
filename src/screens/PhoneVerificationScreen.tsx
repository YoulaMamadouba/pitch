import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Button } from '../components';
import { PhoneIcon, ArrowLeftIcon } from '../components/Icons';

type PhoneVerificationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PhoneVerification'>;

const { width, height } = Dimensions.get('window');

export const PhoneVerificationScreen: React.FC = () => {
  const navigation = useNavigation<PhoneVerificationScreenNavigationProp>();
  const [otp, setOtp] = useState(['1', '2', '3', '4', '5', '6']);
  const [timeLeft, setTimeLeft] = useState(165); // 2:45 in seconds
  const [canResend, setCanResend] = useState(false);
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value.length === 1 && index < 5) {
        // Focus next input logic would go here
      }
    }
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      navigation.navigate('Payment', { 
        subscription: {
          id: '1',
          type: 'premium',
          price: 299,
          currency: 'USD',
          features: ['VR Experience', 'AI Coaching', 'All Modules'],
          isActive: false,
          expiresAt: new Date(),
        }
      });
    }
  };

  const handleResendCode = () => {
    setTimeLeft(165);
    setCanResend(false);
    // Resend code logic
  };

  const handleEmailVerification = () => {
    // Switch to email verification
    console.log('Switch to email verification');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Vérifier le téléphone</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressDot, styles.progressCompleted]} />
              <View style={[styles.progressDot, styles.progressActive]} />
              <View style={[styles.progressDot, styles.progressInactive]} />
            </View>
            <Text style={styles.progressText}>Étape 2 sur 3</Text>
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Animated.View style={[styles.heroIcon, { opacity: pulseAnim }]}>
              <PhoneIcon size={30} color="#F4C056" />
            </Animated.View>
            <Text style={styles.heroTitle}>Vérifiez votre téléphone</Text>
            <Text style={styles.heroSubtitle}>
              Nous avons envoyé un code à 6 chiffres à{'\n'}
              <Text style={styles.phoneNumber}>+33 6 12 34 56 78</Text>
            </Text>
          </View>

          {/* OTP Input */}
          <View style={styles.otpContainer}>
            <Text style={styles.otpLabel}>Entrez le code à 6 chiffres</Text>
            <View style={styles.otpInputs}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  value={digit}
                  onChangeText={(value) => handleOtpChange(index, value)}
                  keyboardType="numeric"
                  maxLength={1}
                  textAlign="center"
                  placeholder="0"
                  placeholderTextColor="#6B7280"
                />
              ))}
            </View>
          </View>

          {/* Timer */}
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>
              Renvoyer le code dans{' '}
              <Text style={styles.timerValue}>{formatTime(timeLeft)}</Text>
            </Text>
          </View>

          {/* Verify Button */}
          <View style={styles.buttonContainer}>
            <Button
              title="Vérifier le numéro de téléphone"
              onPress={handleVerify}
              variant="gradient"
              size="large"
              style={styles.verifyButton}
              gradientColors={['#F4C056', '#FFD700']}
            />
          </View>

          {/* Alternative Options */}
          <View style={styles.alternativesContainer}>
            <TouchableOpacity 
              style={styles.alternativeButton}
              onPress={handleResendCode}
              disabled={!canResend}
            >
              <Text style={[
                styles.alternativeButtonText,
                !canResend && styles.alternativeButtonTextDisabled
              ]}>
                Renvoyer le code
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.alternativeButton}
              onPress={handleEmailVerification}
            >
              <Text style={styles.alternativeButtonText}>
                Vérifier par email à la place
              </Text>
            </TouchableOpacity>
          </View>

          {/* Help Section */}
          <View style={styles.helpContainer}>
            <Text style={styles.helpText}>
              Vous n'avez pas reçu le code ? Vérifiez vos spams ou{' '}
              <Text style={styles.helpLink}>contactez le support</Text>
            </Text>
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
    backgroundColor: '#0F1C2E',
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  placeholder: {
    width: 24,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  progressBar: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  progressCompleted: {
    backgroundColor: '#10B981',
  },
  progressActive: {
    backgroundColor: '#F4C056',
  },
  progressInactive: {
    backgroundColor: '#4B5563',
  },
  progressText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heroIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(244, 192, 86, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 24,
  },
  phoneNumber: {
    color: '#F4C056',
    fontWeight: '600',
  },
  otpContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  otpLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  otpInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  otpInput: {
    flex: 1,
    height: 60,
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  timerText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  timerValue: {
    color: '#F4C056',
    fontWeight: '600',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  verifyButton: {
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  alternativesContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  alternativeButton: {
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  alternativeButtonText: {
    fontSize: 16,
    color: '#F4C056',
    fontWeight: '500',
  },
  alternativeButtonTextDisabled: {
    color: '#6B7280',
  },
  helpContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  helpText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
  },
  helpLink: {
    color: '#F4C056',
    textDecorationLine: 'underline',
  },
});

