import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  UsersIcon,
  CheckIcon,
  StarIcon,
  VideoIcon,
  SettingsIcon,
  BellIcon,
  ChartIcon,
  PencilIcon,
  UserIcon,
  HomeIcon
} from '../components/Icons';

type CoachDashboardScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface MetricCard {
  id: string;
  value: string;
  label: string;
  icon: string;
  color: string;
  change: string;
  changeColor: string;
}

interface StudentActivity {
  id: string;
  name: string;
  avatar: string;
  action: string;
  time: string;
  progress?: number;
  status?: string;
  rating?: number;
}

export const CoachDashboardScreen: React.FC = () => {
  const navigation = useNavigation<CoachDashboardScreenNavigationProp>();

  const metrics: MetricCard[] = [
    {
      id: '1',
      value: '247',
      label: 'Active Students',
      icon: 'users',
      color: '#3B82F6',
      change: '+12%',
      changeColor: '#60A5FA',
    },
    {
      id: '2',
      value: '89%',
      label: 'Completion Rate',
      icon: 'check',
      color: '#10B981',
      change: '+8%',
      changeColor: '#34D399',
    },
    {
      id: '3',
      value: '4.8',
      label: 'Avg Rating',
      icon: 'star',
      color: '#F59E0B',
      change: '4.9',
      changeColor: '#F59E0B',
    },
    {
      id: '4',
      value: '12',
      label: 'VR Sessions',
      icon: 'video',
      color: '#8B5CF6',
      change: 'Live',
      changeColor: '#A78BFA',
    },
  ];

  const activities: StudentActivity[] = [
    {
      id: '1',
      name: 'Alex Martin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      action: 'Completed Module 6: Body Language',
      time: '2 min ago',
      progress: 85,
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      action: 'Requested VR coaching session',
      time: '5 min ago',
      status: 'Pending',
    },
    {
      id: '3',
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      action: 'Left 5-star feedback on Module 8',
      time: '12 min ago',
      rating: 5.0,
    },
  ];

  const getIconComponent = (iconName: string, color: string) => {
    switch (iconName) {
      case 'users':
        return <UsersIcon size={16} color="#FFFFFF" />;
      case 'check':
        return <CheckIcon size={16} color="#FFFFFF" />;
      case 'star':
        return <StarIcon size={16} color="#000000" />;
      case 'video':
        return <VideoIcon size={16} color="#FFFFFF" />;
      default:
        return <UsersIcon size={16} color="#FFFFFF" />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Mawa SIMBA</Text>
            <Text style={styles.profileTitle}>Expert Coach</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.notificationButton}>
            <BellIcon size={24} color="#FFFFFF" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <SettingsIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Live Session Alert */}
        <View style={styles.liveSessionSection}>
          <View style={styles.liveSessionCard}>
            <View style={styles.liveSessionContent}>
              <View style={styles.liveIndicator}>
                <View style={styles.liveDot} />
                <Text style={styles.liveText}>Live Session Active</Text>
              </View>
              <Text style={styles.liveSubtext}>VR Coaching - Alex M. (TEDx Module)</Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Key Metrics */}
        <View style={styles.metricsSection}>
          <Text style={styles.sectionTitle}>Today's Overview</Text>
          <View style={styles.metricsGrid}>
            {metrics.map((metric) => (
              <View key={metric.id} style={styles.metricCard}>
                <View style={styles.metricHeader}>
                  <View style={[styles.metricIcon, { backgroundColor: metric.color }]}>
                    {getIconComponent(metric.icon, metric.color)}
                  </View>
                  <Text style={[styles.metricChange, { color: metric.changeColor }]}>
                    {metric.change}
                  </Text>
                </View>
                <Text style={styles.metricValue}>{metric.value}</Text>
                <Text style={styles.metricLabel}>{metric.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.activitiesSection}>
          <Text style={styles.sectionTitle}>Recent Student Activities</Text>
          <View style={styles.activitiesList}>
            {activities.map((activity) => (
              <View key={activity.id} style={styles.activityCard}>
                <Image source={{ uri: activity.avatar }} style={styles.activityAvatar} />
                <View style={styles.activityContent}>
                  <View style={styles.activityHeader}>
                    <Text style={styles.activityName}>{activity.name}</Text>
                    <Text style={styles.activityTime}>{activity.time}</Text>
                  </View>
                  <Text style={styles.activityAction}>{activity.action}</Text>
                  {activity.progress && (
                    <View style={styles.progressContainer}>
                      <View style={styles.progressBar}>
                        <View 
                          style={[
                            styles.progressFill, 
                            { width: `${activity.progress}%` }
                          ]} 
                        />
                      </View>
                      <Text style={styles.progressText}>{activity.progress}%</Text>
                    </View>
                  )}
                  {activity.status && (
                    <View style={styles.statusContainer}>
                      <Text style={styles.statusText}>{activity.status}</Text>
                    </View>
                  )}
                  {activity.rating && (
                    <View style={styles.ratingContainer}>
                      <StarIcon size={12} color="#F59E0B" />
                      <Text style={styles.ratingText}>{activity.rating}</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <VideoIcon size={20} color="#000000" />
              <Text style={styles.actionButtonText}>Start Live Session</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <ChartIcon size={20} color="#000000" />
              <Text style={styles.actionButtonText}>View Analytics</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButtonSecondary}>
              <PencilIcon size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonTextSecondary}>Create Content</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButtonSecondary}>
              <UserIcon size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonTextSecondary}>Student Profiles</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <HomeIcon size={24} color="#F59E0B" />
          <Text style={styles.navTextActive}>Dashboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <ChartIcon size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Analytics</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <VideoIcon size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Sessions</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <UsersIcon size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Students</Text>
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
    borderColor: '#F59E0B',
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
    color: '#F59E0B',
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
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#EF4444',
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
  liveSessionSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  liveSessionCard: {
    backgroundColor: 'rgba(34, 197, 94, 0.3)',
    borderWidth: 1,
    borderColor: '#22C55E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveSessionContent: {
    flex: 1,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  liveDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#22C55E',
    marginRight: 8,
  },
  liveText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#22C55E',
  },
  liveSubtext: {
    fontSize: 12,
    color: '#D1D5DB',
  },
  joinButton: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  joinButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
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
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  metricChange: {
    fontSize: 10,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  activitiesSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  activitiesList: {
    gap: 12,
  },
  activityCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
  },
  activityAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    fontWeight: '500',
    color: '#FFFFFF',
  },
  activityTime: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  activityAction: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#22C55E',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 10,
    color: '#22C55E',
  },
  statusContainer: {
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 10,
    backgroundColor: '#F59E0B',
    color: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 10,
    color: '#F59E0B',
    marginLeft: 4,
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
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    width: '48%',
  },
  actionButtonSecondary: {
    backgroundColor: '#374151',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    width: '48%',
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    marginTop: 4,
  },
  actionButtonTextSecondary: {
    fontSize: 12,
    fontWeight: '500',
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
    color: '#9CA3AF',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 10,
    color: '#F59E0B',
    marginTop: 4,
  },
});

export default CoachDashboardScreen;
