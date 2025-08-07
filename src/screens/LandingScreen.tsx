import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { PlayIcon, UserIcon, BuildingIcon, CheckIcon, GamepadIcon, UsersIcon } from '../components/Icons';

type LandingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Landing'>;

const { width, height } = Dimensions.get('window');

export const LandingScreen: React.FC = () => {
  const navigation = useNavigation<LandingScreenNavigationProp>();

  const handleIndividualPress = () => {
    navigation.navigate('B2C');
  };

  const handleBusinessPress = () => {
    navigation.navigate('B2B');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pitch to Me</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.languageButtonText}>FR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.loginButtonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Video Section */}
        <View style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop' }}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.9)']}
            style={styles.heroOverlay}
          />
          
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Transformez Votre Voix en Pouvoir</Text>
            <Text style={styles.heroSubtitle}>Maîtrisez l'art de la persuasion avec un entraînement alimenté par l'IA</Text>
          </View>

          <TouchableOpacity style={styles.playButton}>
            <PlayIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Main CTA Buttons */}
        <View style={styles.ctaSection}>
          <TouchableOpacity style={styles.individualButton} onPress={handleIndividualPress}>
            <LinearGradient
              colors={['#F4C056', '#FFD700']}
              style={styles.individualGradient}
            >
              <UserIcon size={20} color="#000000" />
              <Text style={styles.individualText}>Je suis un Particulier</Text>
            </LinearGradient>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.businessButton} onPress={handleBusinessPress}>
            <LinearGradient
              colors={['#35D0FF', '#00B4D8']}
              style={styles.businessGradient}
            >
              <BuildingIcon size={20} color="#000000" />
              <Text style={styles.businessText}>Je suis une Entreprise</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Features Preview */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>Pourquoi Choisir Pitch to Me ?</Text>
          
          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <LinearGradient
                colors={['#F4C056', '#FFD700']}
                style={styles.featureIconGradient}
              >
                <CheckIcon size={20} color="#000000" />
              </LinearGradient>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Formation Alimentée par l'IA</Text>
              <Text style={styles.featureDescription}>Coaching personnalisé avec analyse vocale</Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <LinearGradient
                colors={['#35D0FF', '#00B4D8']}
                style={styles.featureIconGradient}
              >
                <GamepadIcon size={20} color="#000000" />
              </LinearGradient>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Expérience VR</Text>
              <Text style={styles.featureDescription}>Environnements d'entraînement immersifs</Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <LinearGradient
                colors={['#A855F7', '#8B5CF6']}
                style={styles.featureIconGradient}
              >
                <UsersIcon size={20} color="#000000" />
              </LinearGradient>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Communauté Mondiale</Text>
              <Text style={styles.featureDescription}>Connectez-vous avec des orateurs du monde entier</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Text style={styles.bottomNavText}>À Propos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Text style={styles.bottomNavText}>Témoignages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Text style={styles.bottomNavText}>Presse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Text style={styles.bottomNavText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1C2E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  languageButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  languageButtonText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  loginButtonText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    height: 256,
    position: 'relative',
    marginBottom: 32,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  heroContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#D1D5DB',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -32 }, { translateY: -32 }],
    width: 64,
    height: 64,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#35D0FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  playIcon: {
    fontSize: 24,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  ctaSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 16,
  },
  individualButton: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  individualGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  individualIcon: {
    fontSize: 20,
  },
  individualText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  businessButton: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#35D0FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  businessGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  businessIcon: {
    fontSize: 20,
  },
  businessText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  featuresSection: {
    paddingHorizontal: 24,
    gap: 16,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  featureCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  featureIconGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureIconText: {
    fontSize: 20,
    color: '#000000',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    gap: 24,
  },
  bottomNavButton: {
    paddingHorizontal: 8,
  },
  bottomNavText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});

