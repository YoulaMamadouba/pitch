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
import { Button } from '../components/Button';
import { UserIcon, ArrowLeftIcon, GoogleIcon, FacebookIcon, AppleIcon } from '../components/Icons';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const { width, height } = Dimensions.get('window');

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@exemple.com',
    phone: '+33 6 12 34 56 78',
    password: 'password123',
    country: 'France',
    termsAccepted: false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignUp = () => {
    // Handle sign up logic
    navigation.navigate('PhoneVerification', { email: formData.email });
  };

  const handleSocialLogin = (provider: string) => {
    // Handle social login logic
    console.log(`${provider} login`);
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
            <Text style={styles.headerTitle}>Créer un compte</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressDot, styles.progressActive]} />
              <View style={[styles.progressDot, styles.progressInactive]} />
              <View style={[styles.progressDot, styles.progressInactive]} />
            </View>
            <Text style={styles.progressText}>Étape 1 sur 3</Text>
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.heroIcon}>
              <UserIcon size={30} color="#F4C056" />
            </View>
            <Text style={styles.heroTitle}>Rejoignez Pitch to Me</Text>
            <Text style={styles.heroSubtitle}>Commencez votre voyage vers la maîtrise de la prise de parole</Text>
          </View>

          {/* Social Login */}
          <View style={styles.socialContainer}>
            <TouchableOpacity 
              style={styles.socialButton}
              onPress={() => handleSocialLogin('Google')}
            >
              <View style={styles.socialButtonContent}>
                <GoogleIcon size={20} color="#FFFFFF" />
                <Text style={styles.socialButtonText}>Continuer avec Google</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.socialButton, styles.facebookButton]}
              onPress={() => handleSocialLogin('Facebook')}
            >
              <View style={styles.socialButtonContent}>
                <FacebookIcon size={20} color="#FFFFFF" />
                <Text style={styles.socialButtonText}>Continuer avec Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.socialButton, styles.appleButton]}
              onPress={() => handleSocialLogin('Apple')}
            >
              <View style={styles.socialButtonContent}>
                <AppleIcon size={20} color="#FFFFFF" />
                <Text style={styles.socialButtonText}>Continuer avec Apple</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Separator */}
          <View style={styles.separator}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>ou</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <View style={styles.inputRow}>
              <View style={styles.inputHalf}>
                <Text style={styles.inputLabel}>Prénom</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.firstName}
                  onChangeText={(value) => handleInputChange('firstName', value)}
                  placeholder="Jean"
                  placeholderTextColor="#6B7280"
                />
              </View>
              <View style={styles.inputHalf}>
                <Text style={styles.inputLabel}>Nom</Text>
                <TextInput
                  style={styles.textInput}
                  value={formData.lastName}
                  onChangeText={(value) => handleInputChange('lastName', value)}
                  placeholder="Dupont"
                  placeholderTextColor="#6B7280"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.textInput}
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                placeholder="jean.dupont@exemple.com"
                placeholderTextColor="#6B7280"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Numéro de téléphone</Text>
              <TextInput
                style={styles.textInput}
                value={formData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
                placeholder="+33 6 12 34 56 78"
                placeholderTextColor="#6B7280"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Mot de passe</Text>
              <TextInput
                style={styles.textInput}
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                placeholder="••••••••"
                placeholderTextColor="#6B7280"
                secureTextEntry
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Pays</Text>
              <TextInput
                style={styles.textInput}
                value={formData.country}
                onChangeText={(value) => handleInputChange('country', value)}
                placeholder="France"
                placeholderTextColor="#6B7280"
              />
            </View>

            <View style={styles.termsContainer}>
              <TouchableOpacity 
                style={styles.checkbox}
                onPress={() => setFormData(prev => ({ ...prev, termsAccepted: !prev.termsAccepted }))}
              >
                <Text style={styles.checkboxText}>
                  {formData.termsAccepted ? '☑' : '☐'}
                </Text>
              </TouchableOpacity>
              <Text style={styles.termsText}>
                J'accepte les{' '}
                <Text style={styles.termsLink}>Conditions d'utilisation</Text>
                {' '}et la{' '}
                <Text style={styles.termsLink}>Politique de confidentialité</Text>
              </Text>
            </View>

            <Button
              title="Créer un compte"
              onPress={handleSignUp}
              variant="gradient"
              size="large"
              style={styles.signUpButton}
              gradientColors={['#F4C056', '#FFD700']}
            />
          </View>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Vous avez déjà un compte ?{' '}
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Se connecter</Text>
              </TouchableOpacity>
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
    marginBottom: 30,
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
  },
  socialContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    alignItems: 'center',
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  facebookButton: {
    backgroundColor: 'rgba(59, 89, 152, 0.2)',
    borderColor: '#3B5998',
  },
  appleButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: '#000000',
  },
  socialButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#4B5563',
  },
  separatorText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: '#9CA3AF',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  inputHalf: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  checkbox: {
    marginRight: 12,
    marginTop: 2,
  },
  checkboxText: {
    fontSize: 18,
    color: '#F4C056',
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
  },
  termsLink: {
    color: '#F4C056',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  loginContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  loginLink: {
    color: '#F4C056',
    fontWeight: '600',
  },
});

