import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon, 
  SettingsIcon,
  StarIcon,
  CheckIcon,
  EyeIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  LockIcon
} from '../components/Icons';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface StatCard {
  id: string;
  value: string;
  label: string;
  color: string;
  subtitle?: string;
  progress?: number;
}

interface Achievement {
  id: string;
  icon: string;
  title: string;
  unlocked: boolean;
  color: string;
}

interface Activity {
  id: string;
  type: 'completed' | 'vr';
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const stats: StatCard[] = [
    {
      id: '1',
      value: '9/12',
      label: 'Modules Terminés',
      color: '#10B981',
      progress: 75,
    },
    {
      id: '2',
      value: '47h',
      label: 'Temps d\'Entraînement',
      color: '#3B82F6',
      subtitle: '+5h cette semaine',
    },
    {
      id: '3',
      value: '4.8',
      label: 'Note Moyenne',
      color: '#8B5CF6',
    },
    {
      id: '4',
      value: '23',
      label: 'Sessions VR',
      color: '#06B6D4',
      subtitle: '12h total',
    },
  ];

  const achievements: Achievement[] = [
    {
      id: '1',
      icon: 'star',
      title: 'Première Étoile',
      unlocked: true,
      color: '#F59E0B',
    },
    {
      id: '2',
      icon: 'check',
      title: 'Régulier',
      unlocked: true,
      color: '#10B981',
    },
    {
      id: '3',
      icon: 'eye',
      title: 'Maître VR',
      unlocked: true,
      color: '#8B5CF6',
    },
    {
      id: '4',
      icon: 'lock',
      title: 'Verrouillé',
      unlocked: false,
      color: '#6B7280',
    },
  ];

  const activities: Activity[] = [
    {
      id: '1',
      type: 'completed',
      title: 'Module 9 Terminé : Techniques Avancées',
      subtitle: 'Il y a 2 heures • Note : 4.9/5',
      icon: 'check',
      color: '#10B981',
    },
    {
      id: '2',
      type: 'vr',
      title: 'Session VR : Entraînement Scène TEDx',
      subtitle: 'Il y a 1 jour • Durée : 18 min',
      icon: 'eye',
      color: '#8B5CF6',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profil</Text>
          <TouchableOpacity 
            style={styles.settingsButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <SettingsIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face' }}
              style={styles.profileImage}
            />
            <View style={styles.levelBadge}>
              <Text style={styles.levelBadgeText}>7</Text>
            </View>
          </View>
          
          <Text style={styles.userName}>Alex Martin</Text>
          <Text style={styles.userTitle}>Directeur Marketing • TechCorp</Text>
          
          {/* Level Progress */}
          <View style={styles.levelProgressCard}>
            <View style={styles.levelProgressHeader}>
              <Text style={styles.levelProgressTitle}>Niveau 7 - Orateur Avancé</Text>
              <Text style={styles.levelProgressXP}>2,340 XP</Text>
            </View>
            <View style={styles.levelProgressBar}>
              <View style={styles.levelProgressBarBackground}>
                <View style={styles.levelProgressBarFill} />
              </View>
            </View>
            <View style={styles.levelProgressStats}>
              <Text style={styles.levelProgressText}>2,340 / 3,000 XP</Text>
              <Text style={styles.levelProgressText}>660 XP pour le Niveau 8</Text>
            </View>
          </View>
        </View>

        {/* Performance Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Statistiques de Performance</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat) => (
              <View key={stat.id} style={styles.statCard}>
                <View style={styles.statContent}>
                  <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                  {stat.progress && (
                    <View style={styles.statProgressBar}>
                      <View 
                        style={[
                          styles.statProgressFill, 
                          { width: `${stat.progress}%`, backgroundColor: stat.color }
                        ]} 
                      />
                    </View>
                  )}
                  {stat.subtitle && (
                    <Text style={[styles.statSubtitle, { color: stat.color }]}>{stat.subtitle}</Text>
                  )}
                  {!stat.progress && !stat.subtitle && (
                    <View style={styles.statStar}>
                      <StarIcon size={16} color="#F59E0B" />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Succès Récents</Text>
          <View style={styles.achievementsGrid}>
            {achievements.map((achievement) => (
              <View key={achievement.id} style={styles.achievementBadge}>
                <View style={[
                  styles.achievementIcon,
                  { backgroundColor: achievement.unlocked ? achievement.color : '#4B5563' }
                ]}>
                  {achievement.icon === 'star' && <StarIcon size={24} color={achievement.unlocked ? '#000000' : '#9CA3AF'} />}
                  {achievement.icon === 'check' && <CheckIcon size={24} color={achievement.unlocked ? '#000000' : '#9CA3AF'} />}
                  {achievement.icon === 'eye' && <EyeIcon size={24} color={achievement.unlocked ? '#000000' : '#9CA3AF'} />}
                  {achievement.icon === 'lock' && <LockIcon size={24} color={achievement.unlocked ? '#000000' : '#9CA3AF'} />}
                </View>
                <Text style={[
                  styles.achievementTitle,
                  { color: achievement.unlocked ? '#FFFFFF' : '#9CA3AF' }
                ]}>
                  {achievement.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Activité Récente</Text>
          <View style={styles.activityList}>
            {activities.map((activity) => (
              <View key={activity.id} style={styles.activityItem}>
                <View style={[styles.activityIcon, { backgroundColor: activity.color }]}>
                  {activity.icon === 'check' && <CheckIcon size={16} color="#FFFFFF" />}
                  {activity.icon === 'eye' && <EyeIcon size={16} color="#FFFFFF" />}
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activitySubtitle}>{activity.subtitle}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Access Buttons */}
        <View style={styles.quickAccessSection}>
          <Text style={styles.sectionTitle}>Accès Rapide</Text>
          <View style={styles.quickAccessGrid}>
            <TouchableOpacity 
              style={styles.quickAccessButton}
              onPress={() => navigation.navigate('Notifications')}
            >
              <BellIcon size={20} color="#F59E0B" />
              <Text style={styles.quickAccessText}>Notifications</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.quickAccessButton}
              onPress={() => navigation.navigate('Feedback' as any)}
            >
              <ChatBubbleLeftRightIcon size={20} color="#F59E0B" />
              <Text style={styles.quickAccessText}>Feedback</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.quickAccessButton}
              onPress={() => navigation.navigate('HelpAndSupport' as any)}
            >
              <QuestionMarkCircleIcon size={20} color="#F59E0B" />
              <Text style={styles.quickAccessText}>Aide</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.quickAccessButton}
              onPress={() => navigation.navigate('Achievements' as any)}
            >
              <TrophyIcon size={20} color="#F59E0B" />
              <Text style={styles.quickAccessText}>Succès</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.quickAccessButton}
              onPress={() => navigation.navigate('Settings')}
            >
              <SettingsIcon size={20} color="#F59E0B" />
              <Text style={styles.quickAccessText}>Paramètres</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileButtonText}>Modifier le Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareProfileButton}>
            <Text style={styles.shareProfileButtonText}>Partager le Profil</Text>
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
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#0F1C2E',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  settingsButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 4,
    borderColor: '#F59E0B',
  },
  levelBadge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#10B981',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  userTitle: {
    fontSize: 14,
    color: '#D1D5DB',
    marginBottom: 16,
  },
  levelProgressCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
  },
  levelProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  levelProgressTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  levelProgressXP: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F59E0B',
  },
  levelProgressBar: {
    marginBottom: 8,
  },
  levelProgressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#374151',
    borderRadius: 6,
  },
  levelProgressBarFill: {
    width: '78%',
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 6,
  },
  levelProgressStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  levelProgressText: {
    fontSize: 12,
    color: '#D1D5DB',
  },
  statsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    width: '48%',
  },
  statContent: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  statProgressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
  },
  statProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  statSubtitle: {
    fontSize: 10,
    marginTop: 4,
  },
  statStar: {
    marginTop: 4,
  },
  achievementsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  achievementsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievementBadge: {
    alignItems: 'center',
    width: '25%',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  achievementIconText: {
    fontSize: 24,
  },
  achievementTitle: {
    fontSize: 10,
    textAlign: 'center',
  },
  activitySection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityIconText: {
    fontSize: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  activitySubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  quickAccessSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickAccessButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '48%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  quickAccessText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  shareProfileButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  shareProfileButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfileScreen;
