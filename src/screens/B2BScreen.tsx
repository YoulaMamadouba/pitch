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
import { ArrowLeftIcon, PlayIcon, PlusIcon, CheckIcon } from '../components/Icons';

type B2BScreenNavigationProp = StackNavigationProp<RootStackParamList, 'B2B'>;

const { width, height } = Dimensions.get('window');

export const B2BScreen: React.FC = () => {
  const navigation = useNavigation<B2BScreenNavigationProp>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleRequestDemo = () => {
    navigation.navigate('SignUp');
  };

  const handleScheduleConsultation = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Solutions Entreprise</Text>
        <TouchableOpacity>
          <PlusIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Renforcez Votre Équipe Commerciale</Text>
            <Text style={styles.heroSubtitle}>6 modules spécialisés pour l'excellence commerciale</Text>
          </View>

          {/* Video Section */}
          <View style={styles.videoSection}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop' }}
              style={styles.videoImage}
            />
            <View style={styles.videoOverlay}>
              <TouchableOpacity style={styles.videoPlayButton}>
                <PlayIcon size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.enterpriseBadge}>
              <Text style={styles.enterpriseBadgeText}>ENTREPRISE</Text>
            </View>
          </View>
        </View>

        {/* Company Type Selection */}
        <View style={styles.companySection}>
          <Text style={styles.sectionTitle}>Sélectionnez la Taille de Votre Entreprise</Text>
          
          <View style={styles.companyOptions}>
            <TouchableOpacity style={styles.companyOption}>
              <View style={styles.companyOptionContent}>
                <View style={styles.companyInfo}>
                  <Text style={styles.companyTitle}>PME (1-50 employés)</Text>
                  <Text style={styles.companySubtitle}>Parfait pour les équipes en croissance</Text>
                </View>
                <Text style={styles.companyPrice}>99 €/utilisateur</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.companyOption}>
              <View style={styles.companyOptionContent}>
                <View style={styles.companyInfo}>
                  <Text style={styles.companyTitle}>Marché Moyen (51-500)</Text>
                  <Text style={styles.companySubtitle}>Solutions évolutives</Text>
                </View>
                <Text style={styles.companyPrice}>79 €/utilisateur</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.enterpriseOption}>
              <LinearGradient
                colors={['#35D0FF', '#00B4D8']}
                style={styles.enterpriseGradient}
              >
                <View style={styles.enterpriseContent}>
                  <View style={styles.companyInfo}>
                    <Text style={styles.enterpriseTitle}>Grande Entreprise (500+)</Text>
                    <Text style={styles.enterpriseSubtitle}>Solutions sur mesure</Text>
                  </View>
                  <Text style={styles.enterprisePrice}>Sur devis</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Fonctionnalités Entreprise</Text>
          
          <View style={styles.featureGrid}>
            <View style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                <LinearGradient
                  colors={['#F4C056', '#FFD700']}
                  style={styles.featureIconGradient}
                >
                  <CheckIcon size={20} color="#000000" />
                </LinearGradient>
              </View>
              <Text style={styles.featureTitle}>Analytics Avancés</Text>
              <Text style={styles.featureDescription}>Suivi des performances par équipe</Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                <LinearGradient
                  colors={['#35D0FF', '#00B4D8']}
                  style={styles.featureIconGradient}
                >
                  <CheckIcon size={20} color="#000000" />
                </LinearGradient>
              </View>
              <Text style={styles.featureTitle}>Formation Personnalisée</Text>
              <Text style={styles.featureDescription}>Modules adaptés à votre secteur</Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                <LinearGradient
                  colors={['#A855F7', '#8B5CF6']}
                  style={styles.featureIconGradient}
                >
                  <CheckIcon size={20} color="#000000" />
                </LinearGradient>
              </View>
              <Text style={styles.featureTitle}>Support Dédié</Text>
              <Text style={styles.featureDescription}>Accompagnement personnalisé</Text>
            </View>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <TouchableOpacity style={styles.demoButton} onPress={handleRequestDemo}>
            <LinearGradient
              colors={['#F4C056', '#FFD700']}
              style={styles.demoGradient}
            >
              <Text style={styles.demoButtonText}>Demander une Démo</Text>
            </LinearGradient>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.consultationButton} onPress={handleScheduleConsultation}>
            <Text style={styles.consultationButtonText}>Planifier une Consultation</Text>
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
  addIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    paddingHorizontal: 24,
    paddingVertical: 24,
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
  videoSection: {
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
    backgroundColor: 'rgba(53, 208, 255, 0.3)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#35D0FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  videoPlayIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 2,
  },
  enterpriseBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#35D0FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  enterpriseBadgeText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  companySection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  companyOptions: {
    gap: 12,
  },
  companyOption: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 12,
    padding: 16,
  },
  companyOptionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyInfo: {
    flex: 1,
  },
  companyTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  companySubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  companyPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#35D0FF',
  },
  enterpriseOption: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#35D0FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  enterpriseGradient: {
    padding: 16,
  },
  enterpriseContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  enterpriseTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
  },
  enterpriseSubtitle: {
    fontSize: 14,
    color: '#374151',
  },
  enterprisePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  featuresSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  featureCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 8,
    padding: 12,
    width: '48%',
  },
  featureIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  featureIconGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  ctaSection: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 16,
  },
  demoButton: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#35D0FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  demoGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  demoButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  consultationButton: {
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  consultationButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  trustSection: {
    alignItems: 'center',
  },
  trustText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});

