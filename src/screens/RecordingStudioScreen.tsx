import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import {
  ArrowLeftIcon,
  CogIcon,
  VideoCameraIcon,
  SearchIcon,
  ExpandIcon,
  VolumeIcon,
  PauseIcon,
  StopIcon,
  RefreshIcon,
} from '../components/Icons';

type RecordingStudioScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const RecordingStudioScreen: React.FC = () => {
  const navigation = useNavigation<RecordingStudioScreenNavigationProp>();
  const [isRecording, setIsRecording] = useState(true);
  const [selectedCamera, setSelectedCamera] = useState('front');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCameraSelect = (camera: string) => {
    setSelectedCamera(camera);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Studio d'Enregistrement</Text>
        <TouchableOpacity>
          <CogIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Recording Status */}
        <View style={styles.recordingStatusSection}>
          <View style={styles.recordingStatusCard}>
            <View style={styles.recordingStatusHeader}>
              <View style={styles.recordingIndicator}>
                <View style={styles.recordingPulse} />
                <Text style={styles.recordingText}>ENREGISTREMENT</Text>
              </View>
              <Text style={styles.timerText}>03:42</Text>
            </View>
            <View style={styles.recordingInfo}>
              <Text style={styles.sessionText}>Session: Entraînement Pitch Élévateur</Text>
              <View style={styles.qualityInfo}>
                <Text style={styles.qualityLabel}>Qualité:</Text>
                <Text style={styles.qualityValue}>4K • 60fps</Text>
                <Text style={styles.qualitySeparator}>•</Text>
                <Text style={styles.audioValue}>Audio Spatial</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Main Camera View */}
        <View style={styles.cameraViewSection}>
          <View style={styles.cameraViewContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop' }}
              style={styles.cameraView}
            />
            
            {/* Recording Overlay */}
            <View style={styles.cameraOverlay}>
              {/* Grid Lines */}
              <View style={styles.gridLines}>
                <View style={styles.gridRow}>
                  <View style={styles.gridCell} />
                  <View style={styles.gridCell} />
                  <View style={styles.gridCell} />
                </View>
                <View style={styles.gridRow}>
                  <View style={styles.gridCell} />
                  <View style={styles.gridCell} />
                  <View style={styles.gridCell} />
                </View>
                <View style={styles.gridRow}>
                  <View style={styles.gridCell} />
                  <View style={styles.gridCell} />
                  <View style={styles.gridCell} />
                </View>
              </View>
              
              {/* Focus Point */}
              <View style={styles.focusPoint}>
                <View style={styles.focusRing}>
                  <View style={styles.focusCenter} />
                </View>
              </View>
            </View>

            {/* Camera Controls */}
            <View style={styles.cameraControls}>
              <TouchableOpacity style={styles.cameraControl}>
                <SearchIcon size={20} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={styles.cameraLabel}>
                <Text style={styles.cameraLabelText}>Caméra Principale</Text>
              </View>
              <TouchableOpacity style={styles.cameraControl}>
                <ExpandIcon size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Camera Angles */}
        <View style={styles.cameraAnglesSection}>
          <Text style={styles.sectionTitle}>Angles de Caméra</Text>
          <View style={styles.cameraAnglesGrid}>
            <TouchableOpacity 
              style={[styles.cameraAngleCard, selectedCamera === 'front' && styles.cameraAngleActive]}
              onPress={() => handleCameraSelect('front')}
            >
              <View style={styles.cameraAnglePreview}>
                <VideoCameraIcon size={24} color={selectedCamera === 'front' ? '#F4C056' : '#9CA3AF'} />
              </View>
              <Text style={[styles.cameraAngleText, selectedCamera === 'front' && styles.cameraAngleTextActive]}>
                Vue Avant
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.cameraAngleCard, selectedCamera === 'side' && styles.cameraAngleActive]}
              onPress={() => handleCameraSelect('side')}
            >
              <View style={styles.cameraAnglePreview}>
                <VideoCameraIcon size={24} color={selectedCamera === 'side' ? '#F4C056' : '#9CA3AF'} />
              </View>
              <Text style={[styles.cameraAngleText, selectedCamera === 'side' && styles.cameraAngleTextActive]}>
                Vue Latérale
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.cameraAngleCard, selectedCamera === 'wide' && styles.cameraAngleActive]}
              onPress={() => handleCameraSelect('wide')}
            >
              <View style={styles.cameraAnglePreview}>
                <VideoCameraIcon size={24} color={selectedCamera === 'wide' ? '#F4C056' : '#9CA3AF'} />
              </View>
              <Text style={[styles.cameraAngleText, selectedCamera === 'wide' && styles.cameraAngleTextActive]}>
                Plan Large
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Audio Levels */}
        <View style={styles.audioLevelsSection}>
          <Text style={styles.sectionTitle}>Niveaux Audio</Text>
          <View style={styles.audioLevelsCard}>
            <View style={styles.audioLevelsHeader}>
              <Text style={styles.audioLevelsLabel}>Entrée Vocale</Text>
              <Text style={styles.audioLevelsValue}>-12 dB</Text>
            </View>
            <View style={styles.waveformContainer}>
              <View style={styles.waveform}>
                <View style={[styles.waveformBar, { backgroundColor: '#10B981', height: '60%' }]} />
                <View style={[styles.waveformBar, { backgroundColor: '#10B981', height: '80%' }]} />
                <View style={[styles.waveformBar, { backgroundColor: '#F4C056', height: '100%' }]} />
                <View style={[styles.waveformBar, { backgroundColor: '#F4C056', height: '90%' }]} />
                <View style={[styles.waveformBar, { backgroundColor: '#10B981', height: '70%' }]} />
                <View style={[styles.waveformBar, { backgroundColor: '#10B981', height: '85%' }]} />
                <View style={[styles.waveformBar, { backgroundColor: '#F4C056', height: '95%' }]} />
                <View style={[styles.waveformBar, { backgroundColor: '#10B981', height: '75%' }]} />
              </View>
            </View>
            <View style={styles.volumeControl}>
              <TouchableOpacity style={styles.volumeButton}>
                <VolumeIcon size={20} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={styles.volumeSlider}>
                <View style={styles.volumeSliderTrack}>
                  <View style={[styles.volumeSliderFill, { width: '75%' }]} />
                </View>
              </View>
              <Text style={styles.volumeText}>75%</Text>
            </View>
          </View>
        </View>

        {/* Recording Controls */}
        <View style={styles.recordingControlsSection}>
          <View style={styles.recordingControlsRow}>
            {/* Stop */}
            <TouchableOpacity style={styles.controlButton}>
              <StopIcon size={32} color="#FFFFFF" />
            </TouchableOpacity>

            {/* Pause/Resume */}
            <TouchableOpacity style={styles.recordButton}>
              <LinearGradient
                colors={['#EF4444', '#DC2626']}
                style={styles.recordButtonGradient}
              >
                <PauseIcon size={40} color="#FFFFFF" />
              </LinearGradient>
            </TouchableOpacity>

            {/* Switch Camera */}
            <TouchableOpacity style={styles.controlButton}>
              <RefreshIcon size={32} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.actionButtonsRow}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Sauvegarder Brouillon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <LinearGradient
                colors={['#F4C056', '#FFD700']}
                style={styles.primaryButtonGradient}
              >
                <Text style={styles.primaryButtonText}>Terminer & Analyser</Text>
              </LinearGradient>
            </TouchableOpacity>
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
  recordingStatusSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  recordingStatusCard: {
    backgroundColor: 'rgba(127, 29, 29, 0.3)',
    borderWidth: 1,
    borderColor: '#DC2626',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  recordingStatusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  recordingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  recordingPulse: {
    width: 16,
    height: 16,
    backgroundColor: '#EF4444',
    borderRadius: 8,
  },
  recordingText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  timerText: {
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recordingInfo: {
    marginTop: 12,
  },
  sessionText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
  },
  qualityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  qualityLabel: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  qualityValue: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '500',
  },
  qualitySeparator: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  audioValue: {
    color: '#06B6D4',
    fontSize: 12,
    fontWeight: '500',
  },
  cameraViewSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  cameraViewContainer: {
    position: 'relative',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cameraView: {
    width: '100%',
    height: 192,
    resizeMode: 'cover',
  },
  cameraOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  gridLines: {
    flex: 1,
    opacity: 0.3,
  },
  gridRow: {
    flex: 1,
    flexDirection: 'row',
  },
  gridCell: {
    flex: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
  },
  focusPoint: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -32 }, { translateY: -32 }],
  },
  focusRing: {
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: '#F4C056',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusCenter: {
    width: 8,
    height: 8,
    backgroundColor: '#F4C056',
    borderRadius: 4,
  },
  cameraControls: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cameraControl: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 20,
  },
  cameraLabel: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  cameraLabelText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  cameraAnglesSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  cameraAnglesGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  cameraAngleCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  cameraAngleActive: {
    borderColor: '#F4C056',
    backgroundColor: 'rgba(244, 192, 86, 0.1)',
  },
  cameraAnglePreview: {
    width: 64,
    height: 64,
    backgroundColor: '#374151',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cameraAngleText: {
    color: '#9CA3AF',
    fontSize: 10,
    textAlign: 'center',
  },
  cameraAngleTextActive: {
    color: '#FFFFFF',
  },
  audioLevelsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  audioLevelsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  audioLevelsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  audioLevelsLabel: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  audioLevelsValue: {
    color: '#10B981',
    fontSize: 14,
    fontWeight: '500',
  },
  waveformContainer: {
    marginBottom: 16,
  },
  waveform: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 32,
    gap: 4,
  },
  waveformBar: {
    width: 8,
    borderRadius: 4,
  },
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  volumeButton: {
    padding: 4,
  },
  volumeSlider: {
    flex: 1,
  },
  volumeSliderTrack: {
    backgroundColor: '#374151',
    borderRadius: 4,
    height: 8,
    overflow: 'hidden',
  },
  volumeSliderFill: {
    backgroundColor: '#10B981',
    height: '100%',
    borderRadius: 4,
  },
  volumeText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  recordingControlsSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  recordingControlsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    marginBottom: 24,
  },
  controlButton: {
    width: 64,
    height: 64,
    backgroundColor: '#374151',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  recordButtonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#374151',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4B5563',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  primaryButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  primaryButtonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default RecordingStudioScreen;
