import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon, 
  StarIcon,
  TrophyIcon
} from '../components/Icons';

type AchievementsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  dateUnlocked?: string;
}

const AchievementsScreen: React.FC = () => {
  const navigation = useNavigation<AchievementsScreenNavigationProp>();

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first module',
      icon: '🌟',
      unlocked: true,
      progress: 1,
      maxProgress: 1,
      dateUnlocked: '2024-01-15',
    },
    {
      id: '2',
      title: 'Voice Master',
      description: 'Complete 5 voice recording sessions',
      icon: '🎤',
      unlocked: false,
      progress: 3,
      maxProgress: 5,
    },
    {
      id: '3',
      title: 'VR Explorer',
      description: 'Try 3 different VR environments',
      icon: '🥽',
      unlocked: true,
      progress: 3,
      maxProgress: 3,
      dateUnlocked: '2024-01-20',
    },
    {
      id: '4',
      title: 'Consistent Learner',
      description: 'Practice for 7 consecutive days',
      icon: '📅',
      unlocked: false,
      progress: 4,
      maxProgress: 7,
    },
    {
      id: '5',
      title: 'Community Builder',
      description: 'Share 10 posts in the community',
      icon: '👥',
      unlocked: false,
      progress: 2,
      maxProgress: 10,
    },
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

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
          <Text style={styles.headerTitle}>Achievements</Text>
          <View style={styles.headerRight} />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Progress Overview */}
        <View style={styles.progressSection}>
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Your Progress</Text>
              <Text style={styles.progressSubtitle}>{unlockedCount} of {totalCount} unlocked</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressBarBackground}>
                <View 
                  style={[
                    styles.progressBarFill, 
                    { width: `${(unlockedCount / totalCount) * 100}%` }
                  ]} 
                />
              </View>
            </View>
          </View>
        </View>

        {/* Achievements List */}
        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>All Achievements</Text>
          
          {achievements.map((achievement) => (
            <View 
              key={achievement.id} 
              style={[
                styles.achievementItem,
                achievement.unlocked && styles.unlockedAchievement
              ]}
            >
              <View style={styles.achievementIcon}>
                <Text style={styles.achievementIconText}>{achievement.icon}</Text>
              </View>
              
              <View style={styles.achievementContent}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
                
                {achievement.unlocked ? (
                  <Text style={styles.unlockedDate}>
                    Unlocked on {achievement.dateUnlocked}
                  </Text>
                ) : (
                  <View style={styles.progressContainer}>
                    <Text style={styles.progressText}>
                      {achievement.progress}/{achievement.maxProgress}
                    </Text>
                    <View style={styles.miniProgressBar}>
                      <View 
                        style={[
                          styles.miniProgressFill,
                          { width: `${(achievement.progress / achievement.maxProgress) * 100}%` }
                        ]} 
                      />
                    </View>
                  </View>
                )}
              </View>
              
              {achievement.unlocked && (
                <View style={styles.unlockedBadge}>
                  <StarIcon size={20} color="#F59E0B" />
                </View>
              )}
            </View>
          ))}
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
    marginLeft: -10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  headerRight: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  progressSection: {
    padding: 16,
  },
  progressCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
  },
  progressHeader: {
    marginBottom: 12,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  progressSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  progressBar: {
    width: '100%',
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 4,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 4,
  },
  achievementsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    opacity: 0.6,
  },
  unlockedAchievement: {
    opacity: 1,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementIconText: {
    fontSize: 24,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  unlockedDate: {
    fontSize: 12,
    color: '#F59E0B',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginRight: 8,
  },
  miniProgressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
  },
  miniProgressFill: {
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 2,
  },
  unlockedBadge: {
    marginLeft: 12,
  },
});

export default AchievementsScreen;
