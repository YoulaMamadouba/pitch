import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon, 
  EyeIcon, 
  StarIcon, 
  UsersIcon 
} from '../components/Icons';

type VRSceneSelectionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VRSceneSelection'>;

const { width, height } = Dimensions.get('window');

export const VRSceneSelectionScreen: React.FC = () => {
  const navigation = useNavigation<VRSceneSelectionScreenNavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEnterVR = (sceneId: string) => {
    navigation.navigate('VRSession', { sceneId });
  };

  const vrScenes = [
    {
      id: 'tedx',
      title: 'Scène TEDx Talk',
      description: 'Présentez devant plus de 500 membres du public sur le cercle rouge iconique',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=150&fit=crop',
      badge: 'TEDx',
      badgeColor: '#DC2626',
      gradient: ['#991B1B', '#B91C1C'] as const,
      rating: 4.9,
      difficulty: 'Avancé',
      difficultyColor: '#DC2626',
      duration: '18 min',
      buttonColor: '#DC2626',
    },
    {
      id: 'boardroom',
      title: 'Salle de conseil exécutif',
      description: 'Présentez aux dirigeants C-level dans un cadre de salle de conseil de luxe',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=150&fit=crop',
      badge: 'EXEC',
      badgeColor: '#6B7280',
      gradient: ['#374151', '#4B5563'] as const,
      rating: 4.7,
      difficulty: 'Intermédiaire',
      difficultyColor: '#D97706',
      duration: '12 min',
      buttonColor: '#374151',
    },
    {
      id: 'oneonone',
      title: 'Réunion en tête-à-tête',
      description: 'Perfectionnez votre pitch personnel dans une conversation intime',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=150&fit=crop',
      badge: '1:1',
      badgeColor: '#2563EB',
      gradient: ['#1E3A8A', '#1D4ED8'] as const,
      rating: 4.8,
      difficulty: 'Débutant',
      difficultyColor: '#059669',
      duration: '8 min',
      buttonColor: '#1E3A8A',
    },
    {
      id: 'classroom',
      title: 'Salle de classe universitaire',
      description: 'Enseignez et présentez à des étudiants engagés dans un cadre académique',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=150&fit=crop',
      badge: 'EDU',
      badgeColor: '#059669',
      gradient: ['#14532D', '#166534'] as const,
      rating: 4.6,
      difficulty: 'Débutant',
      difficultyColor: '#059669',
      duration: '10 min',
      buttonColor: '#14532D',
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
            <Text style={styles.headerTitle}>Pratique VR</Text>
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumBadgeText}>PREMIUM</Text>
            </View>
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.heroIconContainer}>
              <LinearGradient
                colors={['#06B6D4', '#0891B2']}
                style={styles.heroIcon}
              >
                <EyeIcon size={32} color="#000000" />
              </LinearGradient>
            </View>
            <Text style={styles.heroTitle}>Choisissez votre scène</Text>
            <Text style={styles.heroSubtitle}>Pratiquez dans des environnements VR réalistes</Text>
          </View>

          {/* VR Scenes */}
          <View style={styles.scenesSection}>
            {vrScenes.map((scene) => (
              <View key={scene.id} style={styles.sceneCard}>
                <LinearGradient
                  colors={scene.gradient}
                  style={styles.sceneGradient}
                >
                  <View style={styles.sceneImageContainer}>
                    <Image
                      source={{ uri: scene.image }}
                      style={styles.sceneImage}
                    />
                    <View style={styles.sceneOverlay} />
                    <View style={[styles.sceneBadge, { backgroundColor: scene.badgeColor }]}>
                      <Text style={styles.sceneBadgeText}>{scene.badge}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.sceneContent}>
                    <View style={styles.sceneHeader}>
                      <Text style={styles.sceneTitle}>{scene.title}</Text>
                      <View style={styles.ratingContainer}>
                        <StarIcon size={16} color="#F4C056" />
                        <Text style={styles.ratingText}>{scene.rating}</Text>
                      </View>
                    </View>
                    
                    <Text style={styles.sceneDescription}>{scene.description}</Text>
                    
                    <View style={styles.sceneFooter}>
                      <View style={styles.sceneInfo}>
                        <View style={[styles.difficultyBadge, { backgroundColor: scene.difficultyColor }]}>
                          <Text style={styles.difficultyText}>{scene.difficulty}</Text>
                        </View>
                        <Text style={styles.durationText}>{scene.duration}</Text>
                      </View>
                      
                      <TouchableOpacity
                        style={[styles.enterButton, { backgroundColor: '#FFFFFF' }]}
                        onPress={() => handleEnterVR(scene.id)}
                      >
                        <Text style={[styles.enterButtonText, { color: scene.buttonColor }]}>
                          Entrer en VR
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            ))}
          </View>

          {/* Bottom Info */}
          <View style={styles.bottomSection}>
            <View style={styles.bottomContent}>
              <View style={styles.bottomIconContainer}>
                <UsersIcon size={20} color="#06B6D4" />
              </View>
              <Text style={styles.bottomTitle}>Casque VR requis</Text>
            </View>
            <Text style={styles.bottomDescription}>
              Compatible avec Oculus, HTC Vive et PlayStation VR
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
  premiumBadge: {
    backgroundColor: '#F4C056',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  premiumBadgeText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  heroIconContainer: {
    marginBottom: 16,
  },
  heroIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#06B6D4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    color: '#D1D5DB',
    fontSize: 14,
    textAlign: 'center',
  },
  scenesSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sceneCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  sceneGradient: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  sceneImageContainer: {
    position: 'relative',
    height: 96,
  },
  sceneImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  sceneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  sceneBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  sceneBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  sceneContent: {
    padding: 16,
  },
  sceneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sceneTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    color: '#F4C056',
    fontSize: 14,
  },
  sceneDescription: {
    color: '#D1D5DB',
    fontSize: 14,
    marginBottom: 12,
  },
  sceneFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sceneInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  difficultyText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },
  durationText: {
    color: '#9CA3AF',
    fontSize: 10,
  },
  enterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  enterButtonText: {
    fontSize: 12,
    fontWeight: '500',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
  },
  bottomContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bottomIconContainer: {
    marginRight: 8,
  },
  bottomTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  bottomDescription: {
    color: '#9CA3AF',
    fontSize: 12,
    textAlign: 'center',
  },
});
