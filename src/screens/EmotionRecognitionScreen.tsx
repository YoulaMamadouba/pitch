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
  ShareIcon,
  UserIcon,
  EyeIcon,
  ChartBarIcon,
} from '../components/Icons';

type EmotionRecognitionScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface EmotionData {
  name: string;
  percentage: number;
  color: string;
  icon: string;
}

export const EmotionRecognitionScreen: React.FC = () => {
  const navigation = useNavigation<EmotionRecognitionScreenNavigationProp>();

  const currentEmotions: EmotionData[] = [
    {
      name: 'Confiant',
      percentage: 87,
      color: '#10B981',
      icon: 'confident',
    },
    {
      name: 'Neutre',
      percentage: 8,
      color: '#9CA3AF',
      icon: 'neutral',
    },
    {
      name: 'Nerveux',
      percentage: 5,
      color: '#F59E0B',
      icon: 'nervous',
    },
  ];

  const timelineData = [
    { time: '0s', emotion: 'Nerveux', color: '#F59E0B' },
    { time: '15s', emotion: 'Confiant', color: '#10B981' },
    { time: '30s', emotion: 'Confiant', color: '#10B981' },
    { time: '45s', emotion: 'Neutre', color: '#9CA3AF' },
    { time: '60s', emotion: 'Confiant', color: '#10B981' },
  ];

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case 'confident':
        return <Text style={{ fontSize: 24, marginRight: 8 }}>😊</Text>;
      case 'neutral':
        return <Text style={{ fontSize: 24, marginRight: 8 }}>😐</Text>;
      case 'nervous':
        return <Text style={{ fontSize: 24, marginRight: 8 }}>😰</Text>;
      default:
        return <Text style={{ fontSize: 24, marginRight: 8 }}>😐</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Analyse des Émotions</Text>
        
        <TouchableOpacity>
          <ShareIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Real-time Analysis */}
        <View style={styles.analysisContainer}>
          <View style={styles.analysisCard}>
            <View style={styles.analysisHeader}>
              <View style={styles.analysisInfo}>
                <Text style={styles.analysisTitle}>Suivi Émotionnel en Temps Réel</Text>
                <Text style={styles.analysisSubtitle}>IA analysant les expressions faciales</Text>
              </View>
              <View style={styles.liveIndicator}>
                <EyeIcon size={24} color="#FFFFFF" />
              </View>
            </View>
          </View>
        </View>

        {/* Face Detection */}
        <View style={styles.faceSection}>
          <View style={styles.faceContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=face' }}
              style={styles.faceImage}
            />
            
            {/* Face Detection Overlay */}
            <View style={styles.faceOverlay}>
              {/* Face Boundary */}
              <View style={styles.faceBoundary}>
                {/* Emotion Points */}
                <View style={[styles.emotionPoint, { top: 24, left: 32 }]} />
                <View style={[styles.emotionPoint, { top: 24, right: 32 }]} />
                <View style={[styles.emotionPoint, { top: 64, left: '50%' }]} />
                <View style={[styles.emotionPoint, { bottom: 32, left: '50%', width: 32, height: 8 }]} />
              </View>
              
              {/* Current Emotion */}
              <View style={styles.currentEmotionBadge}>
                <View style={styles.emotionIndicator}>
                  <Text style={{ fontSize: 16, marginRight: 4 }}>😊</Text>
                  <Text style={styles.emotionLabel}>Confiant</Text>
                  <Text style={styles.emotionPercentage}>87%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Current Emotions */}
        <View style={styles.emotionsSection}>
          <Text style={styles.emotionsTitle}>État Émotionnel Actuel</Text>
          <View style={styles.emotionsList}>
            {currentEmotions.map((emotion, index) => (
              <View key={index} style={styles.emotionCard}>
                <View style={styles.emotionHeader}>
                  <View style={styles.emotionInfo}>
                    {getEmotionIcon(emotion.icon)}
                    <Text style={styles.emotionName}>{emotion.name}</Text>
                  </View>
                  <Text style={[styles.emotionValue, { color: emotion.color }]}>
                    {emotion.percentage}%
                  </Text>
                </View>
                <View style={styles.emotionBar}>
                  <View style={styles.emotionBarBackground}>
                    <View 
                      style={[
                        styles.emotionBarFill,
                        { 
                          width: `${emotion.percentage}%`,
                          backgroundColor: emotion.color,
                        }
                      ]} 
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Emotion Timeline */}
        <View style={styles.timelineSection}>
          <Text style={styles.timelineTitle}>Chronologie des Émotions</Text>
          <View style={styles.timelineCard}>
            <View style={styles.timelineContainer}>
              {/* Timeline Line */}
              <View style={styles.timelineLine} />
              
              {/* Timeline Points */}
              {timelineData.map((point, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.timelinePoint,
                    { left: `${(index / (timelineData.length - 1)) * 100}%` }
                  ]}
                >
                  <View style={[styles.timelineDot, { backgroundColor: point.color }]} />
                  <Text style={styles.timelineTime}>{point.time}</Text>
                  <Text style={styles.timelineEmotion}>{point.emotion}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Insights */}
        <View style={styles.insightsSection}>
          <Text style={styles.insightsTitle}>Analyses et Conseils</Text>
          <View style={styles.insightsList}>
            <View style={styles.insightCard}>
              <View style={styles.insightHeader}>
                <ChartBarIcon size={20} color="#10B981" />
                <Text style={styles.insightTitle}>Performance Émotionnelle</Text>
              </View>
              <Text style={styles.insightText}>
                Votre niveau de confiance est excellent ! Vous maintenez une posture positive 
                pendant 87% de votre présentation.
              </Text>
            </View>

            <View style={styles.insightCard}>
              <View style={styles.insightHeader}>
                <EyeIcon size={20} color="#F59E0B" />
                <Text style={styles.insightTitle}>Points d'Amélioration</Text>
              </View>
              <Text style={styles.insightText}>
                Travaillez sur la réduction des moments de nervosité en pratiquant 
                des techniques de respiration avant vos présentations.
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsSection}>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <ChartBarIcon size={20} color="#000000" />
              <Text style={styles.actionButtonText}>Voir Rapport</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButtonSecondary}>
              <EyeIcon size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonTextSecondary}>Nouvelle Analyse</Text>
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
  analysisContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  analysisCard: {
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    padding: 16,
  },
  analysisHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  analysisInfo: {
    flex: 1,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  analysisSubtitle: {
    fontSize: 14,
    color: '#E0E7FF',
  },
  liveIndicator: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  faceContainer: {
    position: 'relative',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    overflow: 'hidden',
  },
  faceImage: {
    width: '100%',
    height: 192,
    resizeMode: 'cover',
  },
  faceOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  faceBoundary: {
    position: 'absolute',
    top: 32,
    left: '50%',
    transform: [{ translateX: -64 }],
    width: 128,
    height: 160,
    borderWidth: 2,
    borderColor: '#F59E0B',
    borderRadius: 8,
  },
  emotionPoint: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: '#10B981',
    borderRadius: 4,
  },
  currentEmotionBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  emotionIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  emotionDot: {
    width: 12,
    height: 12,
    backgroundColor: '#10B981',
    borderRadius: 6,
  },
  emotionLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  emotionPercentage: {
    fontSize: 12,
    color: '#10B981',
  },
  emotionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  emotionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  emotionsList: {
    gap: 12,
  },
  emotionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  emotionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  emotionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  emotionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  emotionValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emotionBar: {
    width: '100%',
  },
  emotionBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 4,
  },
  emotionBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  timelineSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  timelineCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  timelineContainer: {
    position: 'relative',
    height: 80,
  },
  timelineLine: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#374151',
  },
  timelinePoint: {
    position: 'absolute',
    alignItems: 'center',
    width: 60,
    transform: [{ translateX: -30 }],
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 4,
  },
  timelineTime: {
    fontSize: 10,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  timelineEmotion: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  insightsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  insightsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  insightsList: {
    gap: 12,
  },
  insightCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  insightTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  insightText: {
    fontSize: 12,
    color: '#9CA3AF',
    lineHeight: 16,
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
    backgroundColor: '#F59E0B',
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
});

export default EmotionRecognitionScreen;
