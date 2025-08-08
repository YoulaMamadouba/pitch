import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ChartIcon, 
  SettingsIcon, 
  PlayIcon, 
  CheckIcon, 
  LockIcon,
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
  UserIcon,
  EyeIcon,
  MicrophoneIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
} from '../components/Icons';

type LearnerDashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const { width, height } = Dimensions.get('window');

export const LearnerDashboardScreen: React.FC = () => {
  const navigation = useNavigation<LearnerDashboardScreenNavigationProp>();

  const handleContinueModule = () => {
    // Navigation directe vers VR pour le moment
    navigation.navigate('VRSceneSelection');
  };

  const handleModulePress = (moduleId: string) => {
    // Navigation vers le détail du module
    navigation.navigate('ModuleDetail' as any);
  };

  const handleVRPress = () => {
    navigation.navigate('VRSceneSelection');
  };

  const handleVoiceRecordingPress = () => {
    navigation.navigate('VoiceRecording');
  };

  const handleAICoachChatPress = () => {
    navigation.navigate('AICoachChat' as any);
  };

  const handleLeaderboardPress = () => {
    navigation.navigate('Leaderboard' as any);
  };

  const handleVRCalibrationPress = () => {
    navigation.navigate('VRCalibration' as any);
  };

  const handleEmotionRecognitionPress = () => {
    navigation.navigate('EmotionRecognition' as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.welcomeText}>Bon retour, Alex</Text>
            <Text style={styles.levelText}>Niveau 3 Orateur</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <ChartIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <SettingsIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Progress Overview */}
        <View style={styles.progressSection}>
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <View style={styles.progressInfo}>
                <Text style={styles.progressTitle}>Progression Globale</Text>
                <Text style={styles.progressSubtitle}>5 modules sur 12 terminés</Text>
              </View>
              <View style={styles.progressCircle}>
                <View style={styles.circleContainer}>
                  <View style={styles.circleBackground} />
                  <View style={styles.circleProgress} />
                  <Text style={styles.progressPercentage}>42%</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.progressBar}>
              <View style={styles.progressBarBackground}>
                <View style={styles.progressBarFill} />
              </View>
            </View>
          </View>
        </View>

        {/* Current Module */}
        <View style={styles.currentModuleSection}>
          <Text style={styles.sectionTitle}>Continuer l'Apprentissage</Text>
          <TouchableOpacity style={styles.currentModuleCard} onPress={handleContinueModule}>
            <LinearGradient
              colors={['#F4C056', '#FFD700']}
              style={styles.currentModuleGradient}
            >
              <View style={styles.currentModuleHeader}>
                <View style={styles.currentModuleInfo}>
                  <Text style={styles.currentModuleTitle}>Module 6: Langage Corporel</Text>
                  <Text style={styles.currentModuleSubtitle}>Maîtriser la communication non-verbale</Text>
                </View>
                <View style={styles.playButtonContainer}>
                  <PlayIcon size={24} color="#000000" />
                </View>
              </View>
              
              <View style={styles.currentModuleProgress}>
                <View style={styles.progressInfo}>
                  <View style={styles.progressLabels}>
                    <Text style={styles.progressLabel}>Progression</Text>
                    <Text style={styles.progressValue}>3/5 leçons</Text>
                  </View>
                  <View style={styles.moduleProgressBar}>
                    <View style={styles.moduleProgressBarBackground}>
                      <View style={styles.moduleProgressBarFill} />
                    </View>
                  </View>
                </View>
              </View>
              
              <View style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continuer le Module</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* VR Section */}
        <View style={styles.vrSection}>
          <Text style={styles.sectionTitle}>Pratique VR</Text>
          <TouchableOpacity style={styles.vrCard} onPress={handleVRPress}>
            <LinearGradient
              colors={['#06B6D4', '#0891B2']}
              style={styles.vrCardGradient}
            >
              <View style={styles.vrCardHeader}>
                <View style={styles.vrCardInfo}>
                  <Text style={styles.vrCardTitle}>Scènes VR Immersives</Text>
                  <Text style={styles.vrCardSubtitle}>Pratiquez dans des environnements réalistes</Text>
                </View>
                <View style={styles.vrIconContainer}>
                  <EyeIcon size={24} color="#FFFFFF" />
                </View>
              </View>
              
              <View style={styles.vrCardFooter}>
                <View style={styles.vrBadge}>
                  <Text style={styles.vrBadgeText}>PREMIUM</Text>
                </View>
                <TouchableOpacity style={styles.vrButton}>
                  <Text style={styles.vrButtonText}>Commencer</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Voice Recording Section */}
        <View style={styles.voiceSection}>
          <Text style={styles.sectionTitle}>Analyse Vocale</Text>
          <TouchableOpacity style={styles.voiceCard} onPress={handleVoiceRecordingPress}>
            <LinearGradient
              colors={['#F4C056', '#FFD700']}
              style={styles.voiceCardGradient}
            >
              <View style={styles.voiceCardHeader}>
                <View style={styles.voiceCardInfo}>
                  <Text style={styles.voiceCardTitle}>Enregistrement Vocal</Text>
                  <Text style={styles.voiceCardSubtitle}>Analysez votre technique vocale</Text>
                </View>
                <View style={styles.voiceIconContainer}>
                  <MicrophoneIcon size={24} color="#000000" />
                </View>
              </View>
              
              <View style={styles.voiceCardFooter}>
                <View style={styles.voiceBadge}>
                  <Text style={styles.voiceBadgeText}>GRATUIT</Text>
                </View>
                <TouchableOpacity style={styles.voiceButton}>
                  <Text style={styles.voiceButtonText}>Enregistrer</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Quick Access */}
        <View style={styles.quickAccessSection}>
          <Text style={styles.sectionTitle}>Accès Rapide</Text>
          <View style={styles.quickAccessGrid}>
            <TouchableOpacity style={styles.quickAccessCard} onPress={handleAICoachChatPress}>
              <View style={styles.quickAccessIcon}>
                <ChatBubbleLeftRightIcon size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.quickAccessTitle}>Coach IA</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessCard} onPress={handleLeaderboardPress}>
              <View style={styles.quickAccessIcon}>
                <TrophyIcon size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.quickAccessTitle}>Classement</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessCard} onPress={handleVRCalibrationPress}>
              <View style={styles.quickAccessIcon}>
                <EyeIcon size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.quickAccessTitle}>Calibrage VR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessCard} onPress={handleEmotionRecognitionPress}>
              <View style={styles.quickAccessIcon}>
                <UserIcon size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.quickAccessTitle}>Émotions</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Module Grid */}
        <View style={styles.modulesSection}>
          <Text style={styles.sectionTitle}>Tous les Modules</Text>
          <View style={styles.modulesGrid}>
            {/* Completed Modules */}
            <TouchableOpacity 
              style={styles.moduleCardCompleted} 
              onPress={() => handleModulePress('module-1')}
            >
              <View style={styles.moduleIconContainer}>
                <LinearGradient
                  colors={['#10B981', '#059669']}
                  style={styles.moduleIconGradient}
                >
                  <CheckIcon size={16} color="#000000" />
                </LinearGradient>
              </View>
              <Text style={styles.moduleTitle}>Module 1</Text>
              <Text style={styles.moduleSubtitle}>Fondations</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.moduleCardCompleted} 
              onPress={() => handleModulePress('module-2')}
            >
              <View style={styles.moduleIconContainer}>
                <LinearGradient
                  colors={['#10B981', '#059669']}
                  style={styles.moduleIconGradient}
                >
                  <CheckIcon size={16} color="#000000" />
                </LinearGradient>
              </View>
              <Text style={styles.moduleTitle}>Module 2</Text>
              <Text style={styles.moduleSubtitle}>Contrôle Vocal</Text>
            </TouchableOpacity>

            {/* Current Module */}
            <TouchableOpacity 
              style={styles.moduleCardCurrent} 
              onPress={() => handleModulePress('module-6')}
            >
              <View style={styles.moduleIconContainer}>
                <LinearGradient
                  colors={['#F4C056', '#FFD700']}
                  style={styles.moduleIconGradient}
                >
                  <PlayIcon size={16} color="#000000" />
                </LinearGradient>
              </View>
              <Text style={styles.moduleTitle}>Module 6</Text>
              <Text style={styles.moduleSubtitle}>Langage Corporel</Text>
            </TouchableOpacity>

            {/* Locked Module */}
            <View style={styles.moduleCardLocked}>
              <View style={styles.moduleIconContainer}>
                <View style={styles.moduleIconLocked}>
                  <LockIcon size={16} color="#9CA3AF" />
                </View>
              </View>
              <Text style={styles.moduleTitleLocked}>Module 7</Text>
              <Text style={styles.moduleSubtitleLocked}>Verrouillé</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingTop: 50,
    backgroundColor: 'rgba(0,0,0,0.2)',
    minHeight: 80,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileInfo: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  levelText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 8,
  },
  headerButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 18,
  },
  scrollView: {
    flex: 1,
  },
  progressSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  progressCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressInfo: {
    flex: 1,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  progressSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  progressCircle: {
    width: 64,
    height: 64,
    position: 'relative',
  },
  circleContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 32,
    borderWidth: 8,
    borderColor: '#374151',
  },
  circleProgress: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 32,
    borderWidth: 8,
    borderColor: '#F4C056',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '-90deg' }],
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  progressBar: {
    marginTop: 8,
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 4,
  },
  progressBarFill: {
    width: '42%',
    height: '100%',
    backgroundColor: '#F4C056',
    borderRadius: 4,
  },
  currentModuleSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  currentModuleCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
  currentModuleGradient: {
    padding: 16,
  },
  currentModuleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  currentModuleInfo: {
    flex: 1,
  },
  currentModuleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  currentModuleSubtitle: {
    fontSize: 14,
    color: '#374151',
  },
  playButtonContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentModuleProgress: {
    marginBottom: 12,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: '#374151',
  },
  progressValue: {
    fontSize: 12,
    color: '#374151',
  },
  moduleProgressBar: {
    width: '100%',
  },
  moduleProgressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 4,
  },
  moduleProgressBarFill: {
    width: '60%',
    height: '100%',
    backgroundColor: '#000000',
    borderRadius: 4,
  },
  continueButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
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
  moduleCardCompleted: {
    backgroundColor: 'rgba(34, 197, 94, 0.3)',
    borderWidth: 1,
    borderColor: '#22C55E',
    borderRadius: 8,
    padding: 12,
    width: '48%',
  },
  moduleCardCurrent: {
    backgroundColor: 'rgba(244, 192, 86, 0.3)',
    borderWidth: 1,
    borderColor: '#F4C056',
    borderRadius: 8,
    padding: 12,
    width: '48%',
  },
  moduleCardLocked: {
    backgroundColor: 'rgba(55, 65, 81, 0.3)',
    borderWidth: 1,
    borderColor: '#4B5563',
    borderRadius: 8,
    padding: 12,
    width: '48%',
    opacity: 0.5,
  },
  moduleIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  moduleIconGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moduleIconLocked: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4B5563',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moduleTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  moduleSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  moduleTitleLocked: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9CA3AF',
    marginBottom: 4,
  },
  moduleSubtitleLocked: {
    fontSize: 12,
    color: '#6B7280',
  },
  vrSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  vrCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#06B6D4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  vrCardGradient: {
    padding: 16,
  },
  vrCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  vrCardInfo: {
    flex: 1,
  },
  vrCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  vrCardSubtitle: {
    fontSize: 14,
    color: '#E0F2FE',
  },
  vrIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vrCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vrBadge: {
    backgroundColor: '#F4C056',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  vrBadgeText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  vrButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  vrButtonText: {
    color: '#06B6D4',
    fontSize: 14,
    fontWeight: '500',
  },
  voiceSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  voiceCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  voiceCardGradient: {
    padding: 16,
  },
  voiceCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  voiceCardInfo: {
    flex: 1,
  },
  voiceCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  voiceCardSubtitle: {
    fontSize: 14,
    color: '#374151',
  },
  voiceIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voiceBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  voiceBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  voiceButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  voiceButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  quickAccessSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickAccessCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
  },
  quickAccessIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#F59E0B',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickAccessTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

