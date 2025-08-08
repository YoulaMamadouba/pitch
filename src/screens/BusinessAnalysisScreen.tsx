import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon,
  ChartIcon,
  UsersIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  EyeIcon,
  DownloadIcon,
  ShareIcon,
  StarIcon,
  ClockIcon,
  CheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '../components/Icons';

type BusinessAnalysisScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const BusinessAnalysisScreen: React.FC = () => {
  const navigation = useNavigation<BusinessAnalysisScreenNavigationProp>();
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  const teamPerformance = [
    {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      role: 'Commercial Senior',
      presentations: 24,
      successRate: 87,
      improvement: '+12%',
      trend: 'up',
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      role: 'Commercial Junior',
      presentations: 18,
      successRate: 72,
      improvement: '+8%',
      trend: 'up',
    },
    {
      id: '3',
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      role: 'Commercial Senior',
      presentations: 31,
      successRate: 91,
      improvement: '+15%',
      trend: 'up',
    },
  ];

  const departmentStats = [
    {
      name: 'Ventes',
      presentations: 156,
      successRate: 78,
      avgDuration: '18 min',
      improvement: '+14%',
    },
    {
      name: 'Marketing',
      presentations: 89,
      successRate: 82,
      avgDuration: '22 min',
      improvement: '+9%',
    },
    {
      name: 'RH',
      presentations: 67,
      successRate: 85,
      avgDuration: '15 min',
      improvement: '+11%',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analyse d'Entreprise</Text>
        <TouchableOpacity>
          <DownloadIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Company Overview */}
        <View style={styles.companyOverviewSection}>
          <LinearGradient
            colors={['#06B6D4', '#0891B2']}
            style={styles.companyOverviewGradient}
          >
            <View style={styles.companyOverviewContent}>
              <View style={styles.companyInfo}>
                <Text style={styles.companyTitle}>TechCorp Analytics</Text>
                <Text style={styles.companySubtitle}>Plan Entreprise • 150 employés</Text>
              </View>
              <View style={styles.periodInfo}>
                <Text style={styles.periodTitle}>Q3 2024</Text>
                <Text style={styles.periodSubtitle}>Période Actuelle</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Key Metrics */}
        <View style={styles.metricsSection}>
          <Text style={styles.sectionTitle}>Aperçu des Performances</Text>
          <View style={styles.metricsGrid}>
            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={[styles.metricIcon, { backgroundColor: '#10B981' }]}>
                  <CheckCircleIcon size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.trendUp}>+23%</Text>
              </View>
              <Text style={styles.metricValue}>87%</Text>
              <Text style={styles.metricLabel}>Taux de Réussite</Text>
              <Text style={styles.metricComparison}>vs 64% trimestre dernier</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={[styles.metricIcon, { backgroundColor: '#2563EB' }]}>
                  <ClockIcon size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.trendUp}>+15%</Text>
              </View>
              <Text style={styles.metricValue}>42h</Text>
              <Text style={styles.metricLabel}>Temps Moyen Formation</Text>
              <Text style={styles.metricComparison}>par employé</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={[styles.metricIcon, { backgroundColor: '#8B5CF6' }]}>
                  <StarIcon size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.trendUp}>+8%</Text>
              </View>
              <Text style={styles.metricValue}>4.6</Text>
              <Text style={styles.metricLabel}>Score de Satisfaction</Text>
              <Text style={styles.metricComparison}>sur 5.0</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={[styles.metricIcon, { backgroundColor: '#F4C056' }]}>
                  <ChartIcon size={16} color="#000000" />
                </View>
                <Text style={styles.trendDown}>-12%</Text>
              </View>
              <Text style={styles.metricValue}>$2.8M</Text>
              <Text style={styles.metricLabel}>ROI Généré</Text>
              <Text style={styles.metricComparison}>valeur estimée</Text>
            </View>
          </View>
        </View>

        {/* Department Performance Chart */}
        <View style={styles.departmentChartSection}>
          <Text style={styles.sectionTitle}>Performance par Département</Text>
          <View style={styles.departmentChartCard}>
            <View style={styles.chartContainer}>
              <View style={styles.chartBar}>
                <View style={[styles.barFill, { backgroundColor: '#10B981', height: '85%' }]} />
                <Text style={styles.barLabel}>Ventes</Text>
                <Text style={styles.barValue}>85%</Text>
              </View>
              <View style={styles.chartBar}>
                <View style={[styles.barFill, { backgroundColor: '#06B6D4', height: '72%' }]} />
                <Text style={styles.barLabel}>Marketing</Text>
                <Text style={styles.barValue}>72%</Text>
              </View>
              <View style={styles.chartBar}>
                <View style={[styles.barFill, { backgroundColor: '#8B5CF6', height: '68%' }]} />
                <Text style={styles.barLabel}>RH</Text>
                <Text style={styles.barValue}>68%</Text>
              </View>
              <View style={styles.chartBar}>
                <View style={[styles.barFill, { backgroundColor: '#F4C056', height: '45%' }]} />
                <Text style={styles.barLabel}>IT</Text>
                <Text style={styles.barValue}>45%</Text>
              </View>
              <View style={styles.chartBar}>
                <View style={[styles.barFill, { backgroundColor: '#EF4444', height: '38%' }]} />
                <Text style={styles.barLabel}>Finance</Text>
                <Text style={styles.barValue}>38%</Text>
              </View>
            </View>
            <Text style={styles.chartDescription}>Taux de réussite par département</Text>
          </View>
        </View>

        {/* ROI Analysis */}
        <View style={styles.roiSection}>
          <Text style={styles.sectionTitle}>Analyse ROI</Text>
          <View style={styles.roiCard}>
            <View style={styles.roiGrid}>
              <View style={styles.roiItem}>
                <Text style={styles.roiLabel}>Investissement Formation</Text>
                <Text style={styles.roiValue}>$125K</Text>
              </View>
              <View style={styles.roiItem}>
                <Text style={styles.roiLabel}>Retours Estimés</Text>
                <Text style={styles.roiValue}>$2.8M</Text>
              </View>
            </View>
            <View style={styles.roiProgressBar}>
              <View style={styles.roiProgressFill} />
            </View>
            <View style={styles.roiStats}>
              <Text style={styles.roiStat}>ROI: 2,240%</Text>
              <Text style={styles.roiComparison}>+340% vs moyenne secteur</Text>
            </View>
          </View>
        </View>

        {/* AI Insights */}
        <View style={styles.insightsSection}>
          <Text style={styles.sectionTitle}>Insights IA</Text>
          <View style={styles.insightsList}>
            <View style={styles.insightCard}>
              <View style={styles.insightHeader}>
                <View style={styles.insightIcon}>
                  <CheckCircleIcon size={12} color="#FFFFFF" />
                </View>
                <View style={styles.insightContent}>
                  <Text style={styles.insightTitle}>Performance Forte</Text>
                  <Text style={styles.insightText}>
                    L'équipe vente montre 23% d'amélioration dans les scores de confiance en présentation
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.insightCard, { backgroundColor: 'rgba(245, 158, 11, 0.3)', borderColor: '#F4C056' }]}>
              <View style={styles.insightHeader}>
                <View style={[styles.insightIcon, { backgroundColor: '#F4C056' }]}>
                  <ExclamationTriangleIcon size={12} color="#000000" />
                </View>
                <View style={styles.insightContent}>
                  <Text style={[styles.insightTitle, { color: '#F4C056' }]}>Attention Requise</Text>
                  <Text style={styles.insightText}>
                    L'engagement de l'équipe finance est 40% en dessous de la moyenne de l'entreprise
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsSection}>
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity style={styles.primaryActionButton}>
              <LinearGradient
                colors={['#06B6D4', '#0891B2']}
                style={styles.primaryActionGradient}
              >
                <Text style={styles.primaryActionText}>Exporter Rapport</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryActionButton}>
              <Text style={styles.secondaryActionText}>Planifier Révision</Text>
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
  companyOverviewSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  companyOverviewGradient: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
  },
  companyOverviewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyInfo: {
    flex: 1,
  },
  companyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  companySubtitle: {
    fontSize: 12,
    color: '#BFDBFE',
  },
  periodInfo: {
    alignItems: 'flex-end',
  },
  periodTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  periodSubtitle: {
    fontSize: 12,
    color: '#BFDBFE',
  },
  periodSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  periodButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  periodButton: {
    flex: 1,
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#06B6D4',
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  periodButtonTextActive: {
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  metricsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trendUp: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#10B981',
  },
  trendDown: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  metricComparison: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  teamList: {
    gap: 12,
  },
  teamCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  memberDetails: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  memberRole: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  memberStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  trendText: {
    fontSize: 12,
    fontWeight: '500',
  },
  departmentGrid: {
    gap: 12,
  },
  departmentCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
  },
  departmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  departmentName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  departmentBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  departmentBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  departmentStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  deptStat: {
    alignItems: 'center',
  },
  deptStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  deptStatLabel: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickAction: {
    alignItems: 'center',
    gap: 8,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickActionText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  departmentChartSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  departmentChartCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 128,
    marginBottom: 16,
  },
  chartBar: {
    alignItems: 'center',
    flex: 1,
  },
  barFill: {
    width: 32,
    borderRadius: 4,
    marginBottom: 8,
  },
  barLabel: {
    fontSize: 10,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  barValue: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  chartDescription: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  roiSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  roiCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  roiGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  roiItem: {
    flex: 1,
  },
  roiLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  roiValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  roiProgressBar: {
    backgroundColor: '#374151',
    borderRadius: 6,
    height: 12,
    marginBottom: 8,
    overflow: 'hidden',
  },
  roiProgressFill: {
    backgroundColor: '#10B981',
    height: '100%',
    width: '78%',
  },
  roiStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roiStat: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  roiComparison: {
    fontSize: 12,
    color: '#10B981',
  },
  insightsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  insightsList: {
    gap: 12,
  },
  insightCard: {
    backgroundColor: 'rgba(34, 197, 94, 0.3)',
    borderWidth: 1,
    borderColor: '#10B981',
    borderRadius: 12,
    padding: 16,
  },
  insightHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  insightIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#10B981',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insightContent: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#10B981',
    marginBottom: 4,
  },
  insightText: {
    fontSize: 10,
    color: '#FFFFFF',
    lineHeight: 14,
  },
  actionButtonsSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryActionButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  primaryActionGradient: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryActionButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
  },
  secondaryActionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default BusinessAnalysisScreen;
