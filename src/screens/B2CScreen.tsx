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
import { ArrowLeftIcon, PlayIcon, HeartIcon, CheckIcon } from '../components/Icons';

type B2CScreenNavigationProp = StackNavigationProp<RootStackParamList, 'B2C'>;

const { width, height } = Dimensions.get('window');

export const B2CScreen: React.FC = () => {
  const navigation = useNavigation<B2CScreenNavigationProp>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleStandardPlan = () => {
    navigation.navigate('SignUp');
  };

  const handlePremiumPlan = () => {
    navigation.navigate('SignUp');
  };

  const handleFreeTrial = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Formation Individuelle</Text>
        <TouchableOpacity>
          <HeartIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Maîtrisez Votre Voix</Text>
            <Text style={styles.heroSubtitle}>12 modules complets pour transformer votre prise de parole</Text>
          </View>

          {/* Video Preview */}
          <View style={styles.videoPreview}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop' }}
              style={styles.videoImage}
            />
            <View style={styles.videoOverlay}>
              <TouchableOpacity style={styles.videoPlayButton}>
                <PlayIcon size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.liveBadge}>
              <Text style={styles.liveBadgeText}>EN DIRECT</Text>
            </View>
          </View>
        </View>

        {/* Training Plans */}
        <View style={styles.plansSection}>
          {/* Standard Plan */}
          <View style={styles.standardPlan}>
            <View style={styles.planHeader}>
              <View style={styles.planInfo}>
                <Text style={styles.planTitle}>Formation Standard</Text>
                <Text style={styles.planSubtitle}>Expérience web interactive</Text>
              </View>
              <View style={styles.planPrice}>
                <Text style={styles.priceText}>99 €</Text>
                <Text style={styles.priceSubtext}>unique</Text>
              </View>
            </View>
            
            <View style={styles.featuresList}>
              <View style={styles.featureItem}>
                <CheckIcon size={16} color="#10B981" />
                <Text style={styles.featureText}>12 modules complets</Text>
              </View>
              <View style={styles.featureItem}>
                <CheckIcon size={16} color="#10B981" />
                <Text style={styles.featureText}>Analyse vocale IA</Text>
              </View>
              <View style={styles.featureItem}>
                <CheckIcon size={16} color="#10B981" />
                <Text style={styles.featureText}>Accès à la communauté</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.standardButton} onPress={handleStandardPlan}>
              <Text style={styles.standardButtonText}>Choisir Standard</Text>
            </TouchableOpacity>
          </View>

          {/* Premium VR Plan */}
          <View style={styles.premiumPlan}>
            <LinearGradient
              colors={['#F4C056', '#FFD700']}
              style={styles.premiumGradient}
            >
              <View style={styles.premiumBadge}>
                <Text style={styles.premiumBadgeText}>PREMIUM</Text>
              </View>
              
              <View style={styles.planHeader}>
                <View style={styles.planInfo}>
                  <Text style={styles.premiumTitle}>VR Immersive</Text>
                  <Text style={styles.premiumSubtitle}>Expérience réalité virtuelle</Text>
                </View>
                <View style={styles.planPrice}>
                  <Text style={styles.premiumPriceText}>299 €</Text>
                  <Text style={styles.premiumPriceSubtext}>unique</Text>
                </View>
              </View>
              
              <View style={styles.featuresList}>
                <View style={styles.featureItem}>
                  <CheckIcon size={16} color="#000000" />
                  <Text style={styles.premiumFeatureText}>Tout du Standard</Text>
                </View>
                <View style={styles.featureItem}>
                  <CheckIcon size={16} color="#000000" />
                  <Text style={styles.premiumFeatureText}>Environnements VR</Text>
                </View>
                <View style={styles.featureItem}>
                  <CheckIcon size={16} color="#000000" />
                  <Text style={styles.premiumFeatureText}>Retour en temps réel</Text>
                </View>
                <View style={styles.featureItem}>
                  <CheckIcon size={16} color="#000000" />
                  <Text style={styles.premiumFeatureText}>Sessions coaching 1-à-1</Text>
                </View>
              </View>
              
              <TouchableOpacity style={styles.premiumButton} onPress={handlePremiumPlan}>
                <Text style={styles.premiumButtonText}>Choisir Premium VR</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>

        {/* Bottom CTA */}
        <View style={styles.bottomCTA}>
          <View style={styles.bottomCTAContent}>
            <Text style={styles.bottomCTAText}>Rejoignez 10 000+ orateurs qui ont transformé leur voix</Text>
          </View>
          <TouchableOpacity style={styles.freeTrialButton} onPress={handleFreeTrial}>
            <LinearGradient
              colors={['#35D0FF', '#00B4D8']}
              style={styles.freeTrialGradient}
            >
              <Text style={styles.freeTrialText}>Commencer l'Essai Gratuit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  backIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  heartIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  heroContent: {
    textAlign: 'center',
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#D1D5DB',
    textAlign: 'center',
  },
  videoPreview: {
    position: 'relative',
    backgroundColor: '#374151',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  videoImage: {
    width: '100%',
    height: 128,
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 2,
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  liveBadgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  plansSection: {
    paddingHorizontal: 24,
    gap: 16,
  },
  standardPlan: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#4B5563',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  planInfo: {
    flex: 1,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  planSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  planPrice: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  priceSubtext: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  featuresList: {
    gap: 8,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkIcon: {
    fontSize: 16,
    color: '#10B981',
  },
  featureText: {
    fontSize: 14,
    color: '#D1D5DB',
  },
  standardButton: {
    backgroundColor: '#4B5563',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  standardButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  premiumPlan: {
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  premiumGradient: {
    padding: 16,
  },
  premiumBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  premiumBadgeText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  premiumTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  premiumSubtitle: {
    fontSize: 14,
    color: '#374151',
  },
  premiumPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  premiumPriceSubtext: {
    fontSize: 12,
    color: '#374151',
  },
  premiumCheckIcon: {
    fontSize: 16,
    color: '#000000',
  },
  premiumFeatureText: {
    fontSize: 14,
    color: '#000000',
  },
  premiumButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  premiumButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  bottomCTA: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 16,
  },
  bottomCTAContent: {
    alignItems: 'center',
    marginBottom: 16,
  },
  bottomCTAText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  freeTrialButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  freeTrialGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  freeTrialText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});

