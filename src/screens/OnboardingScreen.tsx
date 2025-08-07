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
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  PlayIcon, 
  CheckIcon, 
  VideoIcon, 
  BookOpenIcon, 
  TrashIcon, 
  UsersIcon, 
  CheckCircleIcon 
} from '../components/Icons';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

const { width, height } = Dimensions.get('window');

export const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const [videoProgress, setVideoProgress] = useState(0);

  const handleSkip = () => {
    navigation.navigate('MainTabs');
  };

  const handleContinue = () => {
    navigation.navigate('MainTabs');
  };

  const handleRecordVideo = () => {
    // Handle video recording
    console.log('Record video');
  };

  const checklistItems = [
    {
      id: 'account',
      title: 'Compte créé',
      subtitle: 'Configuration du profil terminée',
      icon: 'check',
      status: 'completed',
      color: '#22C55E',
    },
    {
      id: 'video',
      title: 'Enregistrer la vidéo de motivation',
      subtitle: 'Dites-nous vos objectifs de prise de parole',
      icon: 'video',
      status: 'current',
      color: '#F4C056',
      action: 'Enregistrer',
    },
    {
      id: 'terms',
      title: 'Accepter les conditions générales',
      subtitle: 'Consultez nos politiques',
      icon: 'book',
      status: 'pending',
      color: '#6B7280',
    },
    {
      id: 'module',
      title: 'Commencer le module 1',
      subtitle: 'Démarrez votre parcours d\'apprentissage',
      icon: 'book',
      status: 'pending',
      color: '#6B7280',
    },
  ];

  const features = [
    {
      title: 'Contrôle vocal',
      icon: 'voice',
      color: ['#F4C056', '#FFD700'] as const,
    },
    {
      title: 'Langage corporel',
      icon: 'body',
      color: ['#06B6D4', '#0891B2'] as const,
    },
    {
      title: 'Persuasion',
      icon: 'persuasion',
      color: ['#A855F7', '#9333EA'] as const,
    },
  ];

  const renderIcon = (iconName: string, size: number = 20, color: string = '#FFFFFF') => {
    switch (iconName) {
      case 'check':
        return <CheckIcon size={size} color={color} />;
      case 'video':
        return <VideoIcon size={size} color={color} />;
      case 'book':
        return <BookOpenIcon size={size} color={color} />;
      case 'voice':
        return <TrashIcon size={size} color={color} />;
      case 'body':
        return <UsersIcon size={size} color={color} />;
      case 'persuasion':
        return <CheckCircleIcon size={size} color={color} />;
      default:
        return <CheckIcon size={size} color={color} />;
    }
  };

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
            <View style={styles.progressDots}>
              <View style={styles.progressDot} />
              <View style={styles.progressDot} />
              <View style={styles.progressDotInactive} />
              <View style={styles.progressDotInactive} />
            </View>
            <Text style={styles.progressText}>Étape 2 sur 4</Text>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipButton}>Passer</Text>
            </TouchableOpacity>
          </View>

          {/* AI Avatar Welcome */}
          <View style={styles.welcomeSection}>
            <View style={styles.avatarContainer}>
              <LinearGradient
                colors={['#F4C056', '#F59E0B']}
                style={styles.avatarBackground}
              >
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face' }}
                  style={styles.avatarImage}
                />
              </LinearGradient>
              <View style={styles.onlineIndicator}>
                <View style={styles.onlineDot} />
              </View>
            </View>

            <Text style={styles.welcomeTitle}>Bienvenue dans votre parcours !</Text>
            <Text style={styles.welcomeDescription}>
              Je suis Alex, votre coach de prise de parole alimenté par l'IA. Je vous guiderai à travers 12 modules transformateurs pour maîtriser l'art de la persuasion.
            </Text>

            {/* Video Message */}
            <View style={styles.videoCard}>
              <View style={styles.videoHeader}>
                <View style={styles.videoIconContainer}>
                  <PlayIcon size={20} color="#000000" />
                </View>
                <View style={styles.videoInfo}>
                  <Text style={styles.videoTitle}>Message de bienvenue personnalisé</Text>
                  <Text style={styles.videoDuration}>2:30 min • Appuyez pour lire</Text>
                </View>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${videoProgress}%` }]} />
              </View>
            </View>
          </View>

          {/* Onboarding Checklist */}
          <View style={styles.checklistSection}>
            <Text style={styles.sectionTitle}>Commençons votre configuration</Text>
            
            {checklistItems.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.checklistItem,
                  item.status === 'completed' && styles.checklistItemCompleted,
                  item.status === 'current' && styles.checklistItemCurrent,
                  item.status === 'pending' && styles.checklistItemPending,
                ]}
              >
                <View style={styles.checklistContent}>
                  <View style={styles.checklistIconContainer}>
                    <View style={[
                      styles.checklistIcon,
                      { backgroundColor: item.color }
                    ]}>
                      {renderIcon(item.icon, 16, item.status === 'current' ? '#000000' : '#FFFFFF')}
                    </View>
                  </View>
                  <View style={styles.checklistText}>
                    <Text style={[
                      styles.checklistTitle,
                      item.status === 'pending' && styles.checklistTitlePending
                    ]}>
                      {item.title}
                    </Text>
                    <Text style={[
                      styles.checklistSubtitle,
                      item.status === 'pending' && styles.checklistSubtitlePending
                    ]}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
                {item.action && (
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={handleRecordVideo}
                  >
                    <Text style={styles.actionButtonText}>{item.action}</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>

          {/* Key Features Preview */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionTitle}>Ce que vous maîtriserez</Text>
            <View style={styles.featuresGrid}>
              {features.map((feature, index) => (
                <View key={index} style={styles.featureCard}>
                  <LinearGradient
                    colors={feature.color}
                    style={styles.featureIcon}
                  >
                    {renderIcon(feature.icon, 16, '#000000')}
                  </LinearGradient>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Bottom CTA */}
          <View style={styles.bottomSection}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
            >
              <LinearGradient
                colors={['#F4C056', '#FFD700']}
                style={styles.continueButtonGradient}
              >
                <Text style={styles.continueButtonText}>
                  Continuer la configuration
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            
            <View style={styles.bottomText}>
              <Text style={styles.bottomDescription}>
                Cela prendra moins de 2 minutes
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
  progressDots: {
    flexDirection: 'row',
    gap: 8,
  },
  progressDot: {
    width: 8,
    height: 8,
    backgroundColor: '#F4C056',
    borderRadius: 4,
  },
  progressDotInactive: {
    width: 8,
    height: 8,
    backgroundColor: '#6B7280',
    borderRadius: 4,
  },
  progressText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  skipButton: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  avatarBackground: {
    width: 128,
    height: 128,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  avatarImage: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    width: 32,
    height: 32,
    backgroundColor: '#10B981',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onlineDot: {
    width: 12,
    height: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  welcomeDescription: {
    color: '#D1D5DB',
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 20,
  },
  videoCard: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  videoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  videoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F4C056',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  videoInfo: {
    flex: 1,
  },
  videoTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  videoDuration: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
  },
  progressFill: {
    height: 4,
    backgroundColor: '#F4C056',
    borderRadius: 2,
  },
  checklistSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  checklistItem: {
    backgroundColor: 'rgba(31, 41, 55, 0.3)',
    borderWidth: 1,
    borderColor: '#6B7280',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checklistItemCompleted: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderColor: '#22C55E',
  },
  checklistItemCurrent: {
    backgroundColor: 'rgba(244, 192, 86, 0.3)',
    borderColor: '#F4C056',
  },
  checklistItemPending: {
    opacity: 0.6,
  },
  checklistContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checklistIconContainer: {
    marginRight: 12,
  },
  checklistIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checklistText: {
    flex: 1,
  },
  checklistTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  checklistTitlePending: {
    color: '#9CA3AF',
  },
  checklistSubtitle: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  checklistSubtitlePending: {
    color: '#6B7280',
  },
  actionButton: {
    backgroundColor: '#F4C056',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
  },
  featuresSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  featuresGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  featureCard: {
    flex: 1,
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  featureIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  continueButton: {
    marginBottom: 12,
  },
  continueButtonGradient: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomText: {
    alignItems: 'center',
  },
  bottomDescription: {
    color: '#9CA3AF',
    fontSize: 12,
  },
});

