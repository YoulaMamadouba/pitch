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
  EyeIcon, 
  CheckIcon, 
  ExclamationTriangleIcon, 
  PauseIcon, 
  StopIcon, 
  CogIcon 
} from '../components/Icons';

type VRSessionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VRSession'>;

const { width, height } = Dimensions.get('window');

export const VRSessionScreen: React.FC = () => {
  const navigation = useNavigation<VRSessionScreenNavigationProp>();
  const [isRecording, setIsRecording] = useState(true);

  const handleExitVR = () => {
    navigation.goBack();
  };

  const handlePause = () => {
    setIsRecording(!isRecording);
  };

  const handleStop = () => {
    navigation.goBack();
  };

  const handleSettings = () => {
    // Handle settings
    console.log('Settings');
  };

  const voiceMetrics = [
    { label: 'Clarté', value: '85%', color: '#10B981' },
    { label: 'Rythme', value: '72%', color: '#F4C056' },
    { label: 'Volume', value: '91%', color: '#3B82F6' },
  ];

  const performanceMetrics = [
    { label: 'Engagement du public', value: 94, color: '#10B981' },
    { label: 'Contact visuel', value: 78, color: '#F4C056' },
    { label: 'Utilisation des gestes', value: 86, color: '#3B82F6' },
  ];

  const aiFeedback = [
    {
      type: 'positive',
      title: 'Excellente introduction !',
      message: 'Votre accroche a capturé l\'attention du public efficacement.',
      icon: 'check',
    },
    {
      type: 'warning',
      title: 'Ralentissez légèrement',
      message: 'Votre rythme est 15% plus rapide que l\'optimal pour ce public.',
      icon: 'warning',
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
          {/* VR Status Header */}
          <View style={styles.vrHeader}>
            <View style={styles.vrStatus}>
              <View style={styles.liveIndicator} />
              <Text style={styles.vrStatusText}>VR ACTIVE</Text>
            </View>
            <Text style={styles.sceneName}>Scène TEDx</Text>
            <TouchableOpacity
              style={styles.exitButton}
              onPress={handleExitVR}
            >
              <Text style={styles.exitButtonText}>Quitter VR</Text>
            </TouchableOpacity>
          </View>

          {/* VR Environment Preview */}
          <View style={styles.vrPreview}>
            <LinearGradient
              colors={['#991B1B', '#000000']}
              style={styles.vrPreviewGradient}
            >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop' }}
                style={styles.vrPreviewImage}
              />
              <View style={styles.vrPreviewOverlay} />
              
              {/* VR Overlay Elements */}
              <View style={styles.vrOverlayLeft}>
                <Text style={styles.vrOverlayText}>Public: 487 personnes</Text>
                <Text style={styles.vrOverlayTextAttention}>Attention: 94%</Text>
              </View>
              
              <View style={styles.vrOverlayRight}>
                <Text style={styles.vrOverlayText}>Temps: 03:42</Text>
                <Text style={styles.vrOverlayTextConfidence}>Confiance: Élevée</Text>
              </View>

              {/* Center VR Icon */}
              <View style={styles.vrCenterIcon}>
                <View style={styles.vrIconContainer}>
                  <EyeIcon size={40} color="#FFFFFF" />
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Voice Analysis */}
          <View style={styles.voiceSection}>
            <View style={styles.voiceCard}>
              <View style={styles.voiceHeader}>
                <Text style={styles.voiceTitle}>Analyse vocale</Text>
                <View style={styles.voiceWaves}>
                  <View style={styles.voiceWave} />
                  <View style={styles.voiceWave} />
                  <View style={styles.voiceWave} />
                  <View style={styles.voiceWave} />
                  <View style={styles.voiceWave} />
                </View>
              </View>
              
              <View style={styles.voiceMetrics}>
                {voiceMetrics.map((metric, index) => (
                  <View key={index} style={styles.voiceMetric}>
                    <Text style={[styles.voiceMetricValue, { color: metric.color }]}>
                      {metric.value}
                    </Text>
                    <Text style={styles.voiceMetricLabel}>{metric.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Real-time AI Feedback */}
          <View style={styles.feedbackSection}>
            <Text style={styles.sectionTitle}>Retour du coach IA</Text>
            {aiFeedback.map((feedback, index) => (
              <View
                key={index}
                style={[
                  styles.feedbackCard,
                  feedback.type === 'positive' && styles.feedbackPositive,
                  feedback.type === 'warning' && styles.feedbackWarning,
                ]}
              >
                <View style={styles.feedbackHeader}>
                  {feedback.icon === 'check' ? (
                    <CheckIcon size={16} color="#10B981" />
                  ) : (
                    <ExclamationTriangleIcon size={16} color="#F4C056" />
                  )}
                  <Text style={[
                    styles.feedbackTitle,
                    feedback.type === 'positive' && styles.feedbackTitlePositive,
                    feedback.type === 'warning' && styles.feedbackTitleWarning,
                  ]}>
                    {feedback.title}
                  </Text>
                </View>
                <Text style={styles.feedbackMessage}>{feedback.message}</Text>
              </View>
            ))}
          </View>

          {/* Performance Metrics */}
          <View style={styles.performanceSection}>
            <View style={styles.performanceCard}>
              <Text style={styles.sectionTitle}>Performance en direct</Text>
              {performanceMetrics.map((metric, index) => (
                <View key={index} style={styles.performanceMetric}>
                  <Text style={styles.performanceLabel}>{metric.label}</Text>
                  <View style={styles.performanceBarContainer}>
                    <View style={styles.performanceBar}>
                      <View 
                        style={[
                          styles.performanceBarFill, 
                          { 
                            width: `${metric.value}%`,
                            backgroundColor: metric.color 
                          }
                        ]} 
                      />
                    </View>
                    <Text style={[styles.performanceValue, { color: metric.color }]}>
                      {metric.value}%
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Control Panel */}
          <View style={styles.controlSection}>
            <View style={styles.controlButtons}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={handlePause}
              >
                <PauseIcon size={24} color="#FFFFFF" />
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.controlButtonRecord}
                onPress={handleStop}
              >
                <StopIcon size={24} color="#FFFFFF" />
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.controlButton}
                onPress={handleSettings}
              >
                <CogIcon size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <Text style={styles.controlLabels}>Pause • Enregistrer • Paramètres</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
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
  vrHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: 'rgba(220, 38, 38, 0.5)',
  },
  vrStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveIndicator: {
    width: 12,
    height: 12,
    backgroundColor: '#DC2626',
    borderRadius: 6,
    marginRight: 8,
  },
  vrStatusText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  sceneName: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  exitButton: {
    backgroundColor: '#DC2626',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  exitButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  vrPreview: {
    height: 192,
  },
  vrPreviewGradient: {
    flex: 1,
    position: 'relative',
  },
  vrPreviewImage: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  vrPreviewOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  vrOverlayLeft: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 8,
    borderRadius: 8,
  },
  vrOverlayRight: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 8,
    borderRadius: 8,
  },
  vrOverlayText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  vrOverlayTextAttention: {
    color: '#DC2626',
    fontSize: 12,
  },
  vrOverlayTextConfidence: {
    color: '#10B981',
    fontSize: 12,
  },
  vrCenterIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vrIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(220, 38, 38, 0.3)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#DC2626',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  voiceSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  voiceCard: {
    backgroundColor: 'rgba(17, 24, 39, 0.5)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  voiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  voiceTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  voiceWaves: {
    flexDirection: 'row',
    gap: 4,
  },
  voiceWave: {
    width: 8,
    backgroundColor: '#10B981',
    borderRadius: 2,
  },
  voiceMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  voiceMetric: {
    alignItems: 'center',
  },
  voiceMetricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  voiceMetricLabel: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  feedbackSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  feedbackCard: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  feedbackPositive: {
    backgroundColor: 'rgba(5, 150, 105, 0.3)',
    borderLeftColor: '#10B981',
  },
  feedbackWarning: {
    backgroundColor: 'rgba(245, 158, 11, 0.3)',
    borderLeftColor: '#F4C056',
  },
  feedbackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  feedbackTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  feedbackTitlePositive: {
    color: '#10B981',
  },
  feedbackTitleWarning: {
    color: '#F4C056',
  },
  feedbackMessage: {
    color: '#D1D5DB',
    fontSize: 12,
  },
  performanceSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  performanceCard: {
    backgroundColor: 'rgba(17, 24, 39, 0.5)',
    borderRadius: 12,
    padding: 16,
  },
  performanceMetric: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  performanceLabel: {
    color: '#D1D5DB',
    fontSize: 14,
  },
  performanceBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  performanceBar: {
    width: 80,
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 4,
  },
  performanceBarFill: {
    height: 8,
    borderRadius: 4,
  },
  performanceValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  controlSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 8,
  },
  controlButton: {
    backgroundColor: '#374151',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonRecord: {
    backgroundColor: '#DC2626',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlLabels: {
    color: '#9CA3AF',
    fontSize: 12,
    textAlign: 'center',
  },
});
