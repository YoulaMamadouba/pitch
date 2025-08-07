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
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { MicrophoneIcon, ArrowLeftIcon, GoogleIcon, FacebookIcon, AppleIcon } from '../components/Icons';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const { height } = Dimensions.get('window');

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password123');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = () => {
    // Validation basique
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Ici, vous ajouteriez la logique de connexion
    console.log('Tentative de connexion:', { email, password });
    navigation.navigate('MainTabs');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleForgotPassword = () => {
    // Navigation vers l'écran de récupération de mot de passe
    console.log('Mot de passe oublié');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeftIcon size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Connexion</Text>
            <View style={{ width: 40 }} />
          </View>

          {/* Logo et titre */}
          <View style={styles.logoSection}>
            <View style={styles.logoContainer}>
              <LinearGradient
                colors={['#F4C056', '#FFD700']}
                style={styles.logo}
              >
                <MicrophoneIcon size={40} color="#000000" />
              </LinearGradient>
            </View>
            <Text style={styles.title}>Bienvenue !</Text>
            <Text style={styles.subtitle}>Connectez-vous à votre compte</Text>
          </View>

          {/* Formulaire */}
          <View style={styles.formSection}>
            <Input
              label="Email"
              placeholder="votre.email@exemple.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
            />

            <Input
              label="Mot de passe"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
            />

            <TouchableOpacity 
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>

            <Button
              title="Se connecter"
              onPress={handleLogin}
              variant="gradient"
              size="large"
              style={styles.loginButton}
              gradientColors={['#F4C056', '#FFD700']}
            />
          </View>

          {/* Séparateur */}
          <View style={styles.separator}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>ou</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Connexion sociale */}
          <View style={styles.socialSection}>
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.socialButtonContent}>
                <GoogleIcon size={20} color="#FFFFFF" />
                <Text style={styles.socialButtonText}>Continuer avec Google</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.socialButtonContent}>
                <FacebookIcon size={20} color="#FFFFFF" />
                <Text style={styles.socialButtonText}>Continuer avec Facebook</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.socialButtonContent}>
                <AppleIcon size={20} color="#FFFFFF" />
                <Text style={styles.socialButtonText}>Continuer avec Apple</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Inscription */}
          <View style={styles.signUpSection}>
            <Text style={styles.signUpText}>
              Pas encore de compte ?{' '}
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpLink}>S'inscrire</Text>
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
  logoSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  formSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#F4C056',
    textDecorationLine: 'underline',
  },
  loginButton: {
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
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
  socialSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
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
    gap: 8,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  signUpSection: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  signUpLink: {
    color: '#F4C056',
    fontWeight: '600',
  },
});

