import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon,
  PlusIcon,
  PlayIcon,
  EditIcon,
  TrashIcon,
  DownloadIcon,
  ShareIcon,
  StarIcon,
  ClockIcon,
  UserIcon,
  UsersIcon,
  ChartIcon,
} from '../components/Icons';

type PresentationCreatorScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const PresentationCreatorScreen: React.FC = () => {
  const navigation = useNavigation<PresentationCreatorScreenNavigationProp>();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCreateNew = () => {
    console.log('Créer une nouvelle présentation');
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const templates = [
    {
      id: 'template-1',
      name: 'Pitch Commercial',
      description: 'Présentation de vente professionnelle',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      duration: '15-20 min',
      slides: 12,
      rating: 4.8,
    },
    {
      id: 'template-2',
      name: 'Présentation Produit',
      description: 'Démonstration de produit avec storytelling',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
      duration: '10-15 min',
      slides: 8,
      rating: 4.6,
    },
    {
      id: 'template-3',
      name: 'Rapport Annuel',
      description: 'Présentation des résultats annuels',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      duration: '20-25 min',
      slides: 15,
      rating: 4.9,
    },
  ];

  const recentPresentations = [
    {
      id: 'presentation-1',
      name: 'Pitch Q4 2024',
      lastModified: 'Il y a 2h',
      slides: 14,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
    },
    {
      id: 'presentation-2',
      name: 'Formation Équipe',
      lastModified: 'Hier',
      slides: 8,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Créateur de Présentations</Text>
        <TouchableOpacity>
          <ShareIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Presentation Info */}
        <View style={styles.presentationInfoSection}>
          <LinearGradient
            colors={['#A78BFA', '#8B5CF6']}
            style={styles.presentationInfoGradient}
          >
            <Text style={styles.presentationTitle}>Stratégie Marketing Q3</Text>
            <View style={styles.presentationMeta}>
              <View style={styles.metaItem}>
                <ClockIcon size={16} color="#FFFFFF" />
                <Text style={styles.metaText}>8 diapositives</Text>
              </View>
              <View style={styles.metaItem}>
                <StarIcon size={16} color="#FFFFFF" />
                <Text style={styles.metaText}>15 min</Text>
              </View>
              <View style={styles.metaItem}>
                <UsersIcon size={16} color="#FFFFFF" />
                <Text style={styles.metaText}>Réunion conseil</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Slide Overview */}
        <View style={styles.slideOverviewSection}>
          <View style={styles.slideOverviewHeader}>
            <Text style={styles.sectionTitle}>Aperçu des Diapositives</Text>
            <TouchableOpacity style={styles.addSlideButton}>
              <Text style={styles.addSlideButtonText}>+ Ajouter Diapositive</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.slidesGrid}>
            {/* Active Slide */}
            <TouchableOpacity style={[styles.slidePreview, styles.slidePreviewActive]}>
              <View style={styles.slidePreviewContent}>
                <View style={styles.slidePreviewPlaceholder}>
                  <View style={styles.slidePreviewLine} />
                  <View style={[styles.slidePreviewLine, styles.slidePreviewLineShort]} />
                  <View style={[styles.slidePreviewLine, styles.slidePreviewLineMedium]} />
                </View>
              </View>
              <Text style={styles.slideTitle}>1. Diapositive Titre</Text>
              <Text style={styles.slideSubtitle}>Introduction</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.slidePreview}>
              <View style={styles.slidePreviewContent}>
                <View style={styles.slidePreviewChart}>
                  <View style={[styles.chartBar, { backgroundColor: '#06B6D4' }]} />
                  <View style={[styles.chartBar, { backgroundColor: '#F4C056' }]} />
                  <View style={[styles.chartBar, { backgroundColor: '#10B981' }]} />
                  <View style={[styles.chartBar, { backgroundColor: '#8B5CF6' }]} />
                </View>
              </View>
              <Text style={styles.slideTitle}>2. Analyse Marché</Text>
              <Text style={styles.slideSubtitle}>Données & Graphiques</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.slidePreview}>
              <View style={styles.slidePreviewContent}>
                <View style={styles.slidePreviewText}>
                  <View style={styles.slidePreviewLine} />
                  <View style={[styles.slidePreviewLine, styles.slidePreviewLineShort]} />
                  <View style={[styles.slidePreviewLine, styles.slidePreviewLineMedium]} />
                </View>
              </View>
              <Text style={styles.slideTitle}>3. Aperçu Stratégie</Text>
              <Text style={styles.slideSubtitle}>Points Clés</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.slidePreview}>
              <View style={styles.slidePreviewContent}>
                <View style={styles.slidePreviewCircle}>
                  <View style={styles.slidePreviewCircleInner} />
                </View>
              </View>
              <Text style={styles.slideTitle}>4. Objectifs & KPIs</Text>
              <Text style={styles.slideSubtitle}>Métriques</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* AI Suggestions */}
        <View style={styles.aiSuggestionsSection}>
          <Text style={styles.sectionTitle}>Suggestions IA</Text>
          <View style={styles.aiSuggestionsList}>
            <View style={styles.aiSuggestion}>
              <View style={styles.aiSuggestionHeader}>
                <View style={styles.aiSuggestionIcon}>
                  <StarIcon size={16} color="#FFFFFF" />
                </View>
                <View style={styles.aiSuggestionContent}>
                  <Text style={styles.aiSuggestionTitle}>Ajouter un Impact Visuel</Text>
                  <Text style={styles.aiSuggestionText}>
                    Considérez ajouter une infographie à la diapositive 2 pour une meilleure visualisation des données
                  </Text>
                  <TouchableOpacity style={styles.aiSuggestionButton}>
                    <Text style={styles.aiSuggestionButtonText}>Appliquer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.aiSuggestion}>
              <View style={styles.aiSuggestionHeader}>
                <View style={[styles.aiSuggestionIcon, { backgroundColor: '#10B981' }]}>
                  <ClockIcon size={16} color="#FFFFFF" />
                </View>
                <View style={styles.aiSuggestionContent}>
                  <Text style={styles.aiSuggestionTitle}>Optimisation du Timing</Text>
                  <Text style={styles.aiSuggestionText}>
                    La diapositive 3 a trop de contenu pour un segment de 2 minutes. Considérez la diviser.
                  </Text>
                  <TouchableOpacity style={[styles.aiSuggestionButton, { backgroundColor: '#10B981' }]}>
                    <Text style={styles.aiSuggestionButtonText}>Diviser Diapositive</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Templates */}
        <View style={styles.quickTemplatesSection}>
          <Text style={styles.sectionTitle}>Templates Rapides</Text>
          <View style={styles.quickTemplatesGrid}>
            <TouchableOpacity style={styles.quickTemplateCard}>
              <LinearGradient
                colors={['#06B6D4', '#0891B2']}
                style={styles.quickTemplateIcon}
              >
                <ChartIcon size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.quickTemplateText}>Données</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickTemplateCard}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.quickTemplateIcon}
              >
                <ClockIcon size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.quickTemplateText}>Chronologie</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickTemplateCard}>
              <LinearGradient
                colors={['#8B5CF6', '#7C3AED']}
                style={styles.quickTemplateIcon}
              >
                <UsersIcon size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.quickTemplateText}>Équipe</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsSection}>
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Aperçu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.practiceButton}>
              <Text style={styles.practiceButtonText}>Mode Entraînement</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.primaryButton}>
            <LinearGradient
              colors={['#F4C056', '#FFD700']}
              style={styles.primaryButtonGradient}
            >
              <Text style={styles.primaryButtonText}>Commencer Présentation VR</Text>
            </LinearGradient>
          </TouchableOpacity>
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
  presentationInfoSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  presentationInfoGradient: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
  },
  presentationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  presentationMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  slideOverviewSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  slideOverviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addSlideButton: {
    backgroundColor: '#F4C056',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  addSlideButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },
  slidesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  slidePreview: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 12,
    width: '48%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  slidePreviewActive: {
    borderWidth: 2,
    borderColor: '#F4C056',
  },
  slidePreviewContent: {
    backgroundColor: '#374151',
    borderRadius: 4,
    height: 64,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidePreviewPlaceholder: {
    alignItems: 'center',
    gap: 2,
  },
  slidePreviewLine: {
    width: 32,
    height: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  slidePreviewLineShort: {
    width: 24,
    backgroundColor: '#9CA3AF',
  },
  slidePreviewLineMedium: {
    width: 28,
    backgroundColor: '#9CA3AF',
  },
  slidePreviewChart: {
    flexDirection: 'row',
    gap: 2,
    width: 32,
  },
  chartBar: {
    flex: 1,
    height: 16,
    borderRadius: 1,
  },
  slidePreviewText: {
    alignItems: 'center',
    gap: 2,
  },
  slidePreviewCircle: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#10B981',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidePreviewCircleInner: {
    width: 8,
    height: 8,
    backgroundColor: '#10B981',
    borderRadius: 4,
  },
  slideTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  slideSubtitle: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  aiSuggestionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  aiSuggestionsList: {
    gap: 12,
  },
  aiSuggestion: {
    backgroundColor: 'rgba(30, 58, 138, 0.3)',
    borderWidth: 1,
    borderColor: '#2563EB',
    borderRadius: 12,
    padding: 16,
  },
  aiSuggestionHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  aiSuggestionIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#2563EB',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiSuggestionContent: {
    flex: 1,
  },
  aiSuggestionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  aiSuggestionText: {
    fontSize: 12,
    color: '#D1D5DB',
    marginBottom: 8,
    lineHeight: 16,
  },
  aiSuggestionButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  aiSuggestionButtonText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  quickTemplatesSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  quickTemplatesGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  quickTemplateCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 12,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  quickTemplateIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickTemplateText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  actionButtonsSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: '#374151',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4B5563',
    flex: 1,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  practiceButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
  },
  practiceButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  primaryButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  primaryButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});

export default PresentationCreatorScreen;
