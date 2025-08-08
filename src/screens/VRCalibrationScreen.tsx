import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  CheckIcon,
  EyeIcon,
  CogIcon,
} from '../components/Icons';

type VRCalibrationScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface CalibrationStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'pending';
  progress?: number;
}

export const VRCalibrationScreen: React.FC = () => {
  const navigation = useNavigation<VRCalibrationScreenNavigationProp>();

  const steps: CalibrationStep[] = [
    {
      id: '1',
      title: 'Configuration de l\'Espace',
      description: 'Définir les limites de votre zone de jeu',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Calibrage de la Hauteur',
      description: 'Ajuster votre hauteur debout',
      status: 'active',
      progress: 60,
    },
    {
      id: '3',
      title: 'Calibrage des Contrôleurs',
      description: 'Calibrer les contrôleurs VR',
      status: 'pending',
    },
    {
      id: '4',
      title: 'Test Audio',
      description: 'Vérifier le système audio',
      status: 'pending',
    },
  ];

  const renderStep = (step: CalibrationStep) => {
    const isCompleted = step.status === 'completed';
    const isActive = step.status === 'active';
    const isPending = step.status === 'pending';

    return (
      <View
        key={step.id}
        style={[
          styles.stepCard,
          isCompleted && styles.completedStep,
          isActive && styles.activeStep,
          isPending && styles.pendingStep,
        ]}
      >
        <View style={styles.stepHeader}>
          <View style={[
            styles.stepIcon,
            isCompleted && styles.completedIcon,
            isActive && styles.activeIcon,
            isPending && styles.pendingIcon,
          ]}>
            {isCompleted ? (
              <CheckIcon size={16} color="#FFFFFF" />
            ) : (
              <Text style={[
                styles.stepNumber,
                isActive && styles.activeStepNumber,
                isPending && styles.pendingStepNumber,
              ]}>
                {step.id}
              </Text>
            )}
          </View>
          <View style={styles.stepInfo}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
            {isActive && step.progress && (
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill,
                      { width: `${step.progress}%` }
                    ]} 
                  />
                </View>
                <Text style={styles.progressText}>{step.progress}%</Text>
              </View>
            )}
          </View>
          <View style={styles.stepStatus}>
            {isCompleted && (
              <Text style={styles.completedText}>Terminé</Text>
            )}
            {isActive && (
              <Text style={styles.activeText}>En cours</Text>
            )}
            {isPending && (
              <Text style={styles.pendingText}>En attente</Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Configuration VR</Text>
        
        <TouchableOpacity>
          <QuestionMarkCircleIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* VR Headset Visual */}
        <View style={styles.vrVisualContainer}>
          <View style={styles.vrHeadsetIcon}>
            <EyeIcon size={64} color="#000000" />
          </View>
          <Text style={styles.vrTitle}>Calibrage VR</Text>
          <Text style={styles.vrSubtitle}>
            Configurons votre casque VR pour des performances optimales
          </Text>
        </View>

        {/* Device Detection */}
        <View style={styles.deviceSection}>
          <View style={styles.deviceCard}>
            <View style={styles.deviceHeader}>
              <Text style={styles.deviceTitle}>Détection d'Appareil</Text>
              <View style={styles.statusIndicator}>
                <CheckIcon size={16} color="#FFFFFF" />
              </View>
            </View>
            <View style={styles.deviceInfo}>
              <View style={styles.deviceIcon}>
                <EyeIcon size={24} color="#06B6D4" />
              </View>
              <View style={styles.deviceDetails}>
                <Text style={styles.deviceName}>Oculus Quest 2</Text>
                <Text style={styles.deviceStatus}>Connecté • Batterie: 85%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Calibration Steps */}
        <View style={styles.stepsSection}>
          <Text style={styles.stepsTitle}>Étapes de Calibrage</Text>
          <View style={styles.stepsList}>
            {steps.map(renderStep)}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <CogIcon size={20} color="#000000" />
              <Text style={styles.actionButtonText}>Recalibrer</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButtonSecondary}>
              <EyeIcon size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonTextSecondary}>Test VR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tips */}
        <View style={styles.tipsSection}>
          <View style={styles.tipsCard}>
            <Text style={styles.tipsTitle}>Conseils pour un Calibrage Optimal</Text>
            <View style={styles.tipsList}>
              <Text style={styles.tipText}>• Assurez-vous d'avoir suffisamment d'espace libre</Text>
              <Text style={styles.tipText}>• Évitez les sources de lumière vive</Text>
              <Text style={styles.tipText}>• Gardez vos contrôleurs à portée de main</Text>
              <Text style={styles.tipText}>• Suivez les instructions à l'écran</Text>
            </View>
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
  vrVisualContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  vrHeadsetIcon: {
    width: 128,
    height: 128,
    backgroundColor: '#06B6D4',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  vrTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  vrSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  deviceSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  deviceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  deviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  deviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statusIndicator: {
    width: 24,
    height: 24,
    backgroundColor: '#10B981',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  deviceIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#374151',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceDetails: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  deviceStatus: {
    fontSize: 14,
    color: '#10B981',
  },
  stepsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  stepsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  stepsList: {
    gap: 12,
  },
  stepCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  completedStep: {
    backgroundColor: 'rgba(16, 185, 129, 0.3)',
    borderColor: '#10B981',
  },
  activeStep: {
    backgroundColor: 'rgba(6, 182, 212, 0.3)',
    borderColor: '#06B6D4',
  },
  pendingStep: {
    backgroundColor: 'rgba(55, 65, 81, 0.3)',
    borderColor: '#374151',
    opacity: 0.6,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  stepIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedIcon: {
    backgroundColor: '#10B981',
  },
  activeIcon: {
    backgroundColor: '#06B6D4',
  },
  pendingIcon: {
    backgroundColor: '#374151',
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  activeStepNumber: {
    color: '#FFFFFF',
  },
  pendingStepNumber: {
    color: '#9CA3AF',
  },
  stepInfo: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#06B6D4',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#06B6D4',
    fontWeight: '500',
  },
  stepStatus: {
    alignItems: 'flex-end',
  },
  completedText: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
  },
  activeText: {
    fontSize: 12,
    color: '#06B6D4',
    fontWeight: '500',
  },
  pendingText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  actionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#06B6D4',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  actionButtonSecondary: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  actionButtonTextSecondary: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  tipsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  tipsCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  tipsList: {
    gap: 8,
  },
  tipText: {
    fontSize: 12,
    color: '#9CA3AF',
    lineHeight: 16,
  },
});

export default VRCalibrationScreen;
