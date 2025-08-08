import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon,
  PlayIcon,
  ChartIcon,
  UsersIcon,
  CheckIcon,
  VideoIcon,
  MicrophoneIcon,
  CogIcon,
  StarIcon,
  BuildingIcon,
} from '../components/Icons';

type BusinessSolutionsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const { width } = Dimensions.get('window');

export const BusinessSolutionsScreen: React.FC = () => {
  const navigation = useNavigation<BusinessSolutionsScreenNavigationProp>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePresentationCreatorPress = () => {
    navigation.navigate('PresentationCreator' as any);
  };

  const handleBusinessAnalysisPress = () => {
    navigation.navigate('BusinessAnalysis' as any);
  };

  const handleTeamManagementPress = () => {
    navigation.navigate('TeamManagement' as any);
  };

  const handleRecordingStudioPress = () => {
    navigation.navigate('RecordingStudio' as any);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Solutions Entreprise</Text>
        <View style={{ width: 24 }} />
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
              style={styles.videoThumbnail}
            />
            <View style={styles.videoOverlay}>
              <TouchableOpacity style={styles.playButton}>
                <PlayIcon size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.enterpriseBadge}>
              <Text style={styles.enterpriseBadgeText}>ENTREPRISE</Text>
            </View>
          </View>
        </View>

        {/* Company Size Selection */}
        <View style={styles.companySection}>
          <Text style={styles.sectionTitle}>Sélectionnez la Taille de Votre Entreprise</Text>
          <View style={styles.companyOptions}>
            <TouchableOpacity style={styles.companyOption}>
              <View style={styles.companyOptionContent}>
                <View>
                  <Text style={styles.companyOptionTitle}>PME (1-50 employés)</Text>
                  <Text style={styles.companyOptionSubtitle}>Parfait pour les équipes en croissance</Text>
                </View>
                <Text style={styles.companyOptionPrice}>99€/utilisateur</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.companyOption}>
              <View style={styles.companyOptionContent}>
                <View>
                  <Text style={styles.companyOptionTitle}>Marché Moyen (51-500)</Text>
                  <Text style={styles.companyOptionSubtitle}>Solutions évolutives</Text>
                </View>
                <Text style={styles.companyOptionPrice}>79€/utilisateur</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.companyOptionActive}>
              <View style={styles.companyOptionContent}>
                <View>
                  <Text style={styles.companyOptionTitleActive}>Entreprise (500+)</Text>
                  <Text style={styles.companyOptionSubtitleActive}>Solutions d'entreprise personnalisées</Text>
                </View>
                <Text style={styles.companyOptionPriceActive}>Sur mesure</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Business Tools */}
        <View style={styles.toolsSection}>
          <Text style={styles.sectionTitle}>Outils d'Entreprise</Text>
          <View style={styles.toolsGrid}>
            <TouchableOpacity style={styles.toolCard} onPress={handlePresentationCreatorPress}>
              <LinearGradient
                colors={['#F4C056', '#FFD700']}
                style={styles.toolIconContainer}
              >
                <VideoIcon size={24} color="#000000" />
              </LinearGradient>
              <Text style={styles.toolTitle}>Créateur de Présentations</Text>
              <Text style={styles.toolSubtitle}>Concevez des présentations percutantes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.toolCard} onPress={handleBusinessAnalysisPress}>
              <LinearGradient
                colors={['#06B6D4', '#0891B2']}
                style={styles.toolIconContainer}
              >
                <ChartIcon size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.toolTitle}>Analyse d'Entreprise</Text>
              <Text style={styles.toolSubtitle}>Mesurez les performances de votre équipe</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.toolCard} onPress={handleTeamManagementPress}>
              <LinearGradient
                colors={['#8B5CF6', '#7C3AED']}
                style={styles.toolIconContainer}
              >
                <UsersIcon size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.toolTitle}>Gestion d'Équipe</Text>
              <Text style={styles.toolSubtitle}>Organisez et supervisez vos équipes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.toolCard} onPress={handleRecordingStudioPress}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.toolIconContainer}
              >
                <MicrophoneIcon size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.toolTitle}>Studio d'Enregistrement</Text>
              <Text style={styles.toolSubtitle}>Enregistrez et analysez vos présentations</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Training Modules */}
        <View style={styles.modulesSection}>
          <Text style={styles.sectionTitle}>6 Modules Commerciaux</Text>
          <View style={styles.modulesGrid}>
            <View style={styles.moduleCard}>
              <View style={styles.moduleIcon}>
                <ChartIcon size={16} color="#000000" />
              </View>
              <Text style={styles.moduleTitle}>Pitch Commercial</Text>
              <Text style={styles.moduleSubtitle}>Maîtrisez la persuasion</Text>
            </View>

            <View style={styles.moduleCard}>
              <View style={styles.moduleIcon}>
                <CogIcon size={16} color="#000000" />
              </View>
              <Text style={styles.moduleTitle}>Gestion des Objections</Text>
              <Text style={styles.moduleSubtitle}>Transformez non en oui</Text>
            </View>

            <View style={styles.moduleCard}>
              <View style={styles.moduleIcon}>
                <UsersIcon size={16} color="#FFFFFF" />
              </View>
              <Text style={styles.moduleTitle}>Relations Clients</Text>
              <Text style={styles.moduleSubtitle}>Construisez la confiance</Text>
            </View>

            <View style={styles.moduleCard}>
              <View style={styles.moduleIcon}>
                <CheckIcon size={16} color="#000000" />
              </View>
              <Text style={styles.moduleTitle}>Clôture de Ventes</Text>
              <Text style={styles.moduleSubtitle}>Finalisez les accords</Text>
            </View>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <TouchableOpacity style={styles.ctaButton}>
            <LinearGradient
              colors={['#06B6D4', '#0891B2']}
              style={styles.ctaGradient}
            >
              <Text style={styles.ctaButtonText}>Demander une Démo & Devis</Text>
            </LinearGradient>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Planifier une Consultation</Text>
          </TouchableOpacity>
          
          <View style={styles.trustSection}>
            <Text style={styles.trustText}>Approuvé par 500+ entreprises dans le monde</Text>
          </View>
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
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  videoSection: {
    position: 'relative',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: 128,
    resizeMode: 'cover',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(6, 182, 212, 0.3)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterpriseBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#06B6D4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  enterpriseBadgeText: {
    color: '#000000',
    fontSize: 10,
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
  companyOptionActive: {
    backgroundColor: '#06B6D4',
    borderRadius: 12,
    padding: 16,
  },
  companyOptionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyOptionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  companyOptionTitleActive: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
  },
  companyOptionSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  companyOptionSubtitleActive: {
    fontSize: 12,
    color: '#374151',
  },
  companyOptionPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#06B6D4',
  },
  companyOptionPriceActive: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  toolsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  toolCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
  },
  toolIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  toolTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  toolSubtitle: {
    fontSize: 10,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  modulesSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  modulesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  moduleCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 8,
    padding: 12,
    width: '48%',
  },
  moduleIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#F4C056',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  moduleTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  moduleSubtitle: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  ctaSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 12,
  },
  ctaButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  ctaGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  trustSection: {
    alignItems: 'center',
    marginTop: 8,
  },
  trustText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});

export default BusinessSolutionsScreen;
