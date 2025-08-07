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
  ArrowLeftIcon, 
  MicrophoneIcon, 
  PlayIcon, 
  PauseIcon, 
  StopIcon,
  CheckIcon,
  ClockIcon,
  VolumeIcon,
} from '../components/Icons';

type VoiceRecordingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VoiceRecording'>;

const { width, height } = Dimensions.get('window');

export const VoiceRecordingScreen: React.FC = () => {
  const navigation = useNavigation<VoiceRecordingScreenNavigationProp>();
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasRecording, setHasRecording] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    // Simuler l'enregistrement
    const interval = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setIsRecording(false);
      setHasRecording(true);
    }, 5000);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setHasRecording(true);
  };

  const handlePlayRecording = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSaveRecording = () => {
    navigation.navigate('VoiceAnalysis');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const voiceMetrics = [
    { label: 'Clarté', value: '85%', color: '#10B981' },
    { label: 'Rythme', value: '72%', color: '#F4C056' },
    { label: 'Volume', value: '91%', color: '#3B82F6' },
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
            <Text style={styles.headerTitle}>Enregistrement Vocal</Text>
            <View style={styles.headerSpacer} />
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.heroIconContainer}>
              <LinearGradient
                colors={['#F4C056', '#FFD700']}
                style={styles.heroIcon}
              >
                <MicrophoneIcon size={32} color="#000000" />
              </LinearGradient>
            </View>
            <Text style={styles.heroTitle}>Enregistrez votre voix</Text>
            <Text style={styles.heroSubtitle}>Analysez votre technique vocale et améliorez votre élocution</Text>
          </View>

          {/* Recording Interface */}
          <View style={styles.recordingSection}>
            <View style={styles.recordingCard}>
              <LinearGradient
                colors={['#374151', '#4B5563']}
                style={styles.recordingGradient}
              >
                {/* Recording Status */}
                <View style={styles.recordingStatus}>
                  {isRecording && (
                    <View style={styles.recordingIndicator}>
                      <View style={styles.recordingDot} />
                      <Text style={styles.recordingText}>ENREGISTREMENT...</Text>
                    </View>
                  )}
                  {!isRecording && hasRecording && (
                    <Text style={styles.recordingText}>Enregistrement terminé</Text>
                  )}
                  {!isRecording && !hasRecording && (
                    <Text style={styles.recordingText}>Prêt à enregistrer</Text>
                  )}
                </View>

                {/* Timer */}
                <View style={styles.timerContainer}>
                  <ClockIcon size={24} color="#F4C056" />
                  <Text style={styles.timerText}>{formatTime(recordingTime)}</Text>
                </View>

                {/* Voice Wave Visualization */}
                <View style={styles.voiceWaveContainer}>
                  {[...Array(20)].map((_, index) => (
                    <View
                      key={index}
                      style={[
                        styles.voiceWave,
                        {
                          height: isRecording ? Math.random() * 40 + 10 : 5,
                          backgroundColor: isRecording ? '#F4C056' : '#6B7280',
                        }
                      ]}
                    />
                  ))}
                </View>

                {/* Recording Controls */}
                <View style={styles.controlsContainer}>
                  {!hasRecording ? (
                    <TouchableOpacity
                      style={[styles.recordButton, isRecording && styles.recordingButton]}
                      onPress={isRecording ? handleStopRecording : handleStartRecording}
                    >
                      {isRecording ? (
                        <StopIcon size={32} color="#FFFFFF" />
                      ) : (
                        <MicrophoneIcon size={32} color="#FFFFFF" />
                      )}
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.playbackControls}>
                      <TouchableOpacity
                        style={styles.playButton}
                        onPress={handlePlayRecording}
                      >
                        {isPlaying ? (
                          <PauseIcon size={24} color="#FFFFFF" />
                        ) : (
                          <PlayIcon size={24} color="#FFFFFF" />
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.saveButton}
                        onPress={handleSaveRecording}
                      >
                        <CheckIcon size={20} color="#FFFFFF" />
                        <Text style={styles.saveButtonText}>Analyser</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </LinearGradient>
            </View>
          </View>

          {/* Voice Metrics Preview */}
          <View style={styles.metricsSection}>
            <Text style={styles.sectionTitle}>Métriques en Temps Réel</Text>
            <View style={styles.metricsGrid}>
              {voiceMetrics.map((metric, index) => (
                <View key={index} style={styles.metricCard}>
                  <View style={styles.metricIconContainer}>
                    <VolumeIcon size={20} color={metric.color} />
                  </View>
                  <Text style={styles.metricLabel}>{metric.label}</Text>
                  <Text style={[styles.metricValue, { color: metric.color }]}>
                    {metric.value}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Instructions */}
          <View style={styles.instructionsSection}>
            <Text style={styles.sectionTitle}>Instructions</Text>
            <View style={styles.instructionCard}>
              <Text style={styles.instructionText}>
                • Parlez clairement et à un rythme modéré{'\n'}
                • Maintenez une distance constante du microphone{'\n'}
                • Évitez les bruits de fond{'\n'}
                • L'enregistrement dure maximum 2 minutes
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
  headerSpacer: {
    width: 40,
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
    shadowColor: '#F4C056',
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
  recordingSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  recordingCard: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  recordingGradient: {
    padding: 24,
    alignItems: 'center',
  },
  recordingStatus: {
    marginBottom: 16,
  },
  recordingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  recordingDot: {
    width: 12,
    height: 12,
    backgroundColor: '#DC2626',
    borderRadius: 6,
  },
  recordingText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  timerText: {
    color: '#F4C056',
    fontSize: 24,
    fontWeight: 'bold',
  },
  voiceWaveContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
    height: 50,
    marginBottom: 32,
  },
  voiceWave: {
    width: 3,
    borderRadius: 2,
  },
  controlsContainer: {
    alignItems: 'center',
  },
  recordButton: {
    width: 80,
    height: 80,
    backgroundColor: '#10B981',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  recordingButton: {
    backgroundColor: '#DC2626',
    shadowColor: '#DC2626',
  },
  playbackControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: '#3B82F6',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B981',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  metricsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  metricCard: {
    flex: 1,
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  metricIconContainer: {
    marginBottom: 8,
  },
  metricLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructionsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  instructionCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
  },
  instructionText: {
    color: '#D1D5DB',
    fontSize: 14,
    lineHeight: 20,
  },
});
