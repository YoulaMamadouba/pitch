import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  CheckIcon,
  HomeIcon,
  ExclamationTriangleIcon,
  StarIcon,
  SettingsIcon,
  DownloadIcon,
  SearchIcon,
  BellIcon,
  UsersIcon,
  ChartIcon
} from '../components/Icons';

type HRDashboardScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface DepartmentProgress {
  id: string;
  name: string;
  progress: number;
  completed: number;
  total: number;
  avgScore: number;
  avgTime: string;
  color: string;
}

interface EmployeeActivity {
  id: string;
  name: string;
  avatar: string;
  action: string;
  department: string;
  time: string;
  status: 'done' | 'active';
}

export const HRDashboardScreen: React.FC = () => {
  const navigation = useNavigation<HRDashboardScreenNavigationProp>();

  const departments: DepartmentProgress[] = [
    {
      id: '1',
      name: 'Sales Team',
      progress: 92,
      completed: 23,
      total: 25,
      avgScore: 4.8,
      avgTime: '12h avg',
      color: '#22C55E',
    },
    {
      id: '2',
      name: 'Marketing',
      progress: 76,
      completed: 19,
      total: 25,
      avgScore: 4.2,
      avgTime: '15h avg',
      color: '#F59E0B',
    },
    {
      id: '3',
      name: 'Management',
      progress: 45,
      completed: 9,
      total: 20,
      avgScore: 3.8,
      avgTime: '8h avg',
      color: '#EF4444',
    },
  ];

  const activities: EmployeeActivity[] = [
    {
      id: '1',
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      action: 'Completed Module 4',
      department: 'Sales Team',
      time: '5 min ago',
      status: 'done',
    },
    {
      id: '2',
      name: 'Lisa Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
      action: 'Started Module 2',
      department: 'Marketing',
      time: '12 min ago',
      status: 'active',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sarah Mitchell</Text>
            <Text style={styles.profileTitle}>HR Manager • TechCorp</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.notificationButton}>
            <BellIcon size={24} color="#FFFFFF" />
            <View style={styles.alertBadge} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <SettingsIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Company Overview */}
        <View style={styles.overviewSection}>
          <View style={styles.overviewCard}>
            <View style={styles.overviewHeader}>
              <View style={styles.overviewInfo}>
                <Text style={styles.companyName}>TechCorp Training</Text>
                <Text style={styles.companyPlan}>Enterprise Plan • 150 employees</Text>
              </View>
              <View style={styles.progressCircle}>
                <View style={styles.circleContainer}>
                  <View style={styles.circleBackground} />
                  <View style={styles.circleProgress} />
                  <Text style={styles.progressPercentage}>70%</Text>
                </View>
              </View>
            </View>
            <Text style={styles.overviewTitle}>Overall Team Progress</Text>
          </View>
        </View>

        {/* Key Metrics */}
        <View style={styles.metricsSection}>
          <Text style={styles.sectionTitle}>Team Performance</Text>
          <View style={styles.metricsGrid}>
            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={styles.metricIcon}>
                  <CheckIcon size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.metricChange}>+15%</Text>
              </View>
              <Text style={styles.metricValue}>105</Text>
              <Text style={styles.metricLabel}>Completed</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={styles.metricIcon}>
                  <HomeIcon size={16} color="#000000" />
                </View>
                <Text style={styles.metricChange}>Active</Text>
              </View>
              <Text style={styles.metricValue}>32</Text>
              <Text style={styles.metricLabel}>In Progress</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={styles.metricIcon}>
                  <ExclamationTriangleIcon size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.metricChange}>Alert</Text>
              </View>
              <Text style={styles.metricValue}>13</Text>
              <Text style={styles.metricLabel}>Inactive</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <View style={styles.metricIcon}>
                  <StarIcon size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.metricChange}>4.6</Text>
              </View>
              <Text style={styles.metricValue}>4.4</Text>
              <Text style={styles.metricLabel}>Avg Score</Text>
            </View>
          </View>
        </View>

        {/* Department Breakdown */}
        <View style={styles.departmentsSection}>
          <Text style={styles.sectionTitle}>Department Progress</Text>
          <View style={styles.departmentsList}>
            {departments.map((dept) => (
              <View key={dept.id} style={styles.departmentCard}>
                <View style={styles.departmentHeader}>
                  <Text style={styles.departmentName}>{dept.name}</Text>
                  <Text style={[styles.departmentProgress, { color: dept.color }]}>
                    {dept.progress}%
                  </Text>
                </View>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View 
                      style={[
                        styles.progressFill, 
                        { 
                          width: `${dept.progress}%`,
                          backgroundColor: dept.color
                        }
                      ]} 
                    />
                  </View>
                  <Text style={styles.progressText}>{dept.completed}/{dept.total}</Text>
                </View>
                <View style={styles.departmentStats}>
                  <Text style={styles.statText}>Avg: {dept.avgScore}/5</Text>
                  <Text style={styles.statText}>Time: {dept.avgTime}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activitiesSection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activitiesList}>
            {activities.map((activity) => (
              <View key={activity.id} style={styles.activityCard}>
                <Image source={{ uri: activity.avatar }} style={styles.activityAvatar} />
                <View style={styles.activityContent}>
                  <View style={styles.activityHeader}>
                    <Text style={styles.activityName}>{activity.name}</Text>
                    <Text style={styles.activityTime}>{activity.time}</Text>
                  </View>
                  <Text style={styles.activityAction}>
                    {activity.action} • {activity.department}
                  </Text>
                </View>
                <View style={[
                  styles.statusBadge,
                  activity.status === 'done' ? styles.statusDone : styles.statusActive
                ]}>
                  <Text style={styles.statusText}>
                    {activity.status === 'done' ? '✓ Done' : '⏳ Active'}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsSection}>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <DownloadIcon size={20} color="#000000" />
              <Text style={styles.actionButtonText}>Export Report</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <SearchIcon size={20} color="#000000" />
              <Text style={styles.actionButtonText}>View Details</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButtonSecondary}>
              <BellIcon size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonTextSecondary}>Send Reminder</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButtonSecondary}>
              <UsersIcon size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonTextSecondary}>Manage Users</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <HomeIcon size={24} color="#06B6D4" />
          <Text style={styles.navTextActive}>Overview</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <ChartIcon size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Reports</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <UsersIcon size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Team</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <SettingsIcon size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
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
    minHeight: 80,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#06B6D4',
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  profileTitle: {
    fontSize: 12,
    color: '#06B6D4',
    fontWeight: '500',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 8,
  },
  notificationButton: {
    position: 'relative',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 18,
  },
  alertBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F97316',
  },
  settingsButton: {
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
  overviewSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  overviewCard: {
    backgroundColor: '#06B6D4',
    borderRadius: 12,
    padding: 16,
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  overviewInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  companyPlan: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
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
    borderWidth: 4,
    borderColor: '#1F2937',
  },
  circleProgress: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 32,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '-90deg' }],
  },
  progressPercentage: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  metricsSection: {
    paddingHorizontal: 24,
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
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
    width: '48%',
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
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metricChange: {
    fontSize: 10,
    fontWeight: '700',
    color: '#22C55E',
  },
  metricValue: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  departmentsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  departmentsList: {
    gap: 12,
  },
  departmentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
  },
  departmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  departmentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  departmentProgress: {
    fontSize: 14,
    fontWeight: '700',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 4,
    marginRight: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  departmentStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  activitiesSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  activitiesList: {
    gap: 12,
  },
  activityCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  activityName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  activityTime: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  activityAction: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusDone: {
    backgroundColor: 'rgba(34, 197, 94, 0.5)',
  },
  statusActive: {
    backgroundColor: 'rgba(245, 158, 11, 0.5)',
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  actionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    width: '48%',
  },
  actionButtonSecondary: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    width: '48%',
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
    marginTop: 4,
  },
  actionButtonTextSecondary: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#FFFFFF',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 10,
    color: '#06B6D4',
    marginTop: 4,
  },
});

export default HRDashboardScreen;
