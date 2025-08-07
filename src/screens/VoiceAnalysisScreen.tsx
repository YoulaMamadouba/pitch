import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon,
  ShareIcon,
  ClockIcon,
  BookOpenIcon,
  CheckIcon,
  UserIcon,
  VolumeIcon,
  StarIcon,
  MicrophoneIcon,
} from '../components/Icons';

type VoiceAnalysisScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VoiceAnalysis'>;

const { width, height } = Dimensions.get('window');

export const VoiceAnalysisScreen: React.FC = () => {
  const navigation = useNavigation<VoiceAnalysisScreenNavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handlePracticeAgain = () => {
    navigation.navigate('VoiceRecording');
  };

  const handleShareResults = () => {
    // Logique pour partager les résultats
    console.log('Partager les résultats');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={handleBack}>
          <ArrowLeftIcon width={24} height={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analyse Vocale</Text>
        <TouchableOpacity style={styles.headerButton}>
          <ShareIcon width={24} height={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Recording Info */}
        <View style={styles.recordingInfoSection}>
          <View style={styles.recordingCard}>
            <View style={styles.recordingHeader}>
              <Text style={styles.recordingTitle}>Dernier Enregistrement</Text>
              <Text style={styles.recordingTime}>Il y a 2 min</Text>
            </View>
            <View style={styles.recordingDetails}>
              <View style={styles.recordingDetail}>
                <ClockIcon width={16} height={16} color="#FFFFFF" />
                <Text style={styles.recordingText}>3:42</Text>
              </View>
              <View style={styles.recordingDetail}>
                <BookOpenIcon width={16} height={16} color="#FFFFFF" />
                <Text style={styles.recordingText}>Module 6 Pratique</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Overall Score */}
        <View style={styles.scoreSection}>
          <LinearGradient
            colors={['#F4C056', '#FFD700']}
            style={styles.scoreCard}
          >
            <View style={styles.scoreCircle}>
              <View style={styles.scoreRing}>
                <View style={styles.scoreRingBackground} />
                <View style={styles.scoreRingProgress} />
              </View>
              <Text style={styles.scoreValue}>85</Text>
            </View>
            <Text style={styles.scoreTitle}>Performance Excellente !</Text>
            <Text style={styles.scoreSubtitle}>Votre voix montre une amélioration significative</Text>
          </LinearGradient>
        </View>

        {/* Voice Metrics */}
        <View style={styles.metricsSection}>
          <Text style={styles.sectionTitle}>Métriques Vocales</Text>
          <View style={styles.metricsGrid}>
            {/* Clarity */}
            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={styles.metricIconContainer}>
                  <CheckIcon width={16} height={16} color="#FFFFFF" />
                </View>
                <Text style={styles.metricChange}>+8%</Text>
              </View>
              <Text style={styles.metricValue}>92%</Text>
              <Text style={styles.metricLabel}>Clarté</Text>
              <View style={styles.metricBar}>
                <View style={[styles.metricBarFill, { width: '92%', backgroundColor: '#10B981' }]} />
              </View>
            </View>

            {/* Pace */}
            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={[styles.metricIconContainer, { backgroundColor: '#F4C056' }]}>
                  <UserIcon width={16} height={16} color="#000000" />
                </View>
                <Text style={[styles.metricChange, { color: '#F4C056' }]}>-3%</Text>
              </View>
              <Text style={styles.metricValue}>78%</Text>
              <Text style={styles.metricLabel}>Rythme</Text>
              <View style={styles.metricBar}>
                <View style={[styles.metricBarFill, { width: '78%', backgroundColor: '#F4C056' }]} />
              </View>
            </View>

            {/* Volume */}
            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={[styles.metricIconContainer, { backgroundColor: '#3B82F6' }]}>
                  <VolumeIcon width={16} height={16} color="#FFFFFF" />
                </View>
                <Text style={[styles.metricChange, { color: '#3B82F6' }]}>+5%</Text>
              </View>
              <Text style={styles.metricValue}>88%</Text>
              <Text style={styles.metricLabel}>Volume</Text>
              <View style={styles.metricBar}>
                <View style={[styles.metricBarFill, { width: '88%', backgroundColor: '#3B82F6' }]} />
              </View>
            </View>

            {/* Confidence */}
            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={[styles.metricIconContainer, { backgroundColor: '#8B5CF6' }]}>
                  <StarIcon width={16} height={16} color="#FFFFFF" />
                </View>
                <Text style={[styles.metricChange, { color: '#8B5CF6' }]}>+12%</Text>
              </View>
              <Text style={styles.metricValue}>85%</Text>
              <Text style={styles.metricLabel}>Confiance</Text>
              <View style={styles.metricBar}>
                <View style={[styles.metricBarFill, { width: '85%', backgroundColor: '#8B5CF6' }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Waveform Visualization */}
        <View style={styles.waveformSection}>
          <Text style={styles.sectionTitle}>Motif Vocal</Text>
          <View style={styles.waveformCard}>
            <View style={styles.waveformContainer}>
              <View style={[styles.waveformBar, { height: '20%' }]} />
              <View style={[styles.waveformBar, { height: '60%' }]} />
              <View style={[styles.waveformBar, { height: '40%' }]} />
              <View style={[styles.waveformBar, { height: '80%' }]} />
              <View style={[styles.waveformBar, { height: '30%' }]} />
              <View style={[styles.waveformBar, { height: '70%' }]} />
              <View style={[styles.waveformBar, { height: '50%' }]} />
              <View style={[styles.waveformBar, { height: '90%' }]} />
              <View style={[styles.waveformBar, { height: '35%' }]} />
              <View style={[styles.waveformBar, { height: '65%' }]} />
            </View>
            <Text style={styles.waveformText}>Énergie constante tout au long de la présentation</Text>
          </View>
        </View>

        {/* Improvement Suggestions */}
        <View style={styles.suggestionsSection}>
          <Text style={styles.sectionTitle}>Recommandations IA</Text>
          <View style={styles.suggestionsList}>
            <View style={styles.suggestionCard}>
              <View style={styles.suggestionContent}>
                <View style={styles.suggestionNumber}>
                  <Text style={styles.suggestionNumberText}>1</Text>
                </View>
                <View style={styles.suggestionInfo}>
                  <Text style={styles.suggestionTitle}>Ralentissez Légèrement</Text>
                  <Text style={styles.suggestionDescription}>Votre rythme est 15% plus rapide que l'optimal. Essayez de faire des pauses entre les points clés.</Text>
                </View>
              </View>
            </View>

            <View style={styles.suggestionCardGreen}>
              <View style={styles.suggestionContent}>
                <View style={styles.suggestionNumberGreen}>
                  <Text style={styles.suggestionNumberTextGreen}>2</Text>
                </View>
                <View style={styles.suggestionInfo}>
                  <Text style={styles.suggestionTitle}>Excellente Clarté !</Text>
                  <Text style={styles.suggestionDescription}>Votre articulation s'est considérablement améliorée. Continuez comme ça !</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.practiceButton} onPress={handlePracticeAgain}>
            <Text style={styles.practiceButtonText}>Pratiquer à Nouveau</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} onPress={handleShareResults}>
            <Text style={styles.shareButtonText}>Partager Résultats</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  recordingInfoSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  recordingCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    marginBottom: 24,
  },
  recordingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  recordingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  recordingTime: {
    fontSize: 14,
    color: '#06B6D4',
  },
  recordingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  recordingDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  recordingText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  scoreSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  scoreCard: {
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  scoreCircle: {
    width: 96,
    height: 96,
    position: 'relative',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreRing: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  scoreRingBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 48,
    borderWidth: 8,
    borderColor: '#1F2937',
  },
  scoreRingProgress: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 48,
    borderWidth: 8,
    borderColor: '#000000',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '-90deg' }],
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  scoreSubtitle: {
    fontSize: 14,
    color: '#374151',
  },
  metricsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    width: '48%',
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#10B981',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  metricChange: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#10B981',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  metricBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
  },
  metricBarFill: {
    height: '100%',
    borderRadius: 2,
  },
  waveformSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  waveformCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  waveformContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 4,
    height: 64,
    marginBottom: 8,
  },
  waveformBar: {
    width: 4,
    backgroundColor: '#06B6D4',
    borderRadius: 2,
  },
  waveformText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  suggestionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  suggestionsList: {
    gap: 12,
  },
  suggestionCard: {
    backgroundColor: 'rgba(120, 53, 15, 0.3)',
    borderWidth: 1,
    borderColor: '#F4C056',
    borderRadius: 12,
    padding: 16,
  },
  suggestionCardGreen: {
    backgroundColor: 'rgba(5, 46, 22, 0.3)',
    borderWidth: 1,
    borderColor: '#10B981',
    borderRadius: 12,
    padding: 16,
  },
  suggestionContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  suggestionNumber: {
    width: 32,
    height: 32,
    backgroundColor: '#F4C056',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionNumberGreen: {
    width: 32,
    height: 32,
    backgroundColor: '#10B981',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  suggestionNumberTextGreen: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  suggestionInfo: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  suggestionDescription: {
    fontSize: 14,
    color: '#D1D5DB',
  },
  actionButtons: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingBottom: 24,
  },
  buttonGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  practiceButton: {
    flex: 1,
    backgroundColor: '#06B6D4',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  practiceButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  shareButton: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
