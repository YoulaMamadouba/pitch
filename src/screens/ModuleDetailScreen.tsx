import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon,
  HeartIcon,
  PlayIcon,
  CheckIcon,
  LockIcon,
  ClockIcon,
  StarIcon
} from '../components/Icons';

type ModuleDetailScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'current' | 'locked';
  rating?: number;
  progress?: number;
}

export const ModuleDetailScreen: React.FC = () => {
  const navigation = useNavigation<ModuleDetailScreenNavigationProp>();

  const lessons: Lesson[] = [
    {
      id: '1',
      title: 'Introduction to Body Language',
      description: 'Understanding non-verbal cues',
      duration: '8 min',
      status: 'completed',
      rating: 4.9,
    },
    {
      id: '2',
      title: 'Posture & Presence',
      description: 'Command attention with your stance',
      duration: '12 min',
      status: 'current',
      progress: 60,
    },
    {
      id: '3',
      title: 'Hand Gestures & Movement',
      description: 'Enhance your message with gestures',
      duration: '15 min',
      status: 'locked',
    },
    {
      id: '4',
      title: 'Final Assessment',
      description: 'Test your body language skills',
      duration: '10 min',
      status: 'locked',
    },
  ];

  const getLessonIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckIcon size={20} color="#FFFFFF" />;
      case 'current':
        return <PlayIcon size={20} color="#000000" />;
      case 'locked':
        return <LockIcon size={20} color="#9CA3AF" />;
      default:
        return <PlayIcon size={20} color="#000000" />;
    }
  };

  const getLessonStatus = (status: string) => {
    switch (status) {
      case 'completed':
        return { text: 'Completed', color: '#22C55E' };
      case 'current':
        return { text: 'In Progress', color: '#F59E0B' };
      case 'locked':
        return { text: 'Locked', color: '#6B7280' };
      default:
        return { text: 'Available', color: '#9CA3AF' };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 6</Text>
        <TouchableOpacity style={styles.favoriteButton}>
          <HeartIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Module Hero */}
        <View style={styles.heroSection}>
          <View style={styles.heroCard}>
            <TouchableOpacity style={styles.playButton}>
              <PlayIcon size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.moduleTitle}>Body Language Mastery</Text>
            <Text style={styles.moduleSubtitle}>Master non-verbal communication and presence</Text>
            <View style={styles.moduleStats}>
              <View style={styles.statItem}>
                <ClockIcon size={16} color="#000000" />
                <Text style={styles.statText}>45 min</Text>
              </View>
              <View style={styles.statItem}>
                <StarIcon size={16} color="#000000" />
                <Text style={styles.statText}>4.8/5</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Progress Overview */}
        <View style={styles.progressSection}>
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Your Progress</Text>
              <Text style={styles.progressValue}>3/4 lessons</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressBarBackground}>
                <View style={styles.progressBarFill} />
              </View>
            </View>
            <View style={styles.progressFooter}>
              <Text style={styles.progressText}>75% Complete</Text>
              <Text style={styles.progressText}>1 lesson remaining</Text>
            </View>
          </View>
        </View>

        {/* Lessons List */}
        <View style={styles.lessonsSection}>
          <Text style={styles.sectionTitle}>Lessons</Text>
          <View style={styles.lessonsList}>
            {lessons.map((lesson) => {
              const status = getLessonStatus(lesson.status);
              return (
                <View 
                  key={lesson.id} 
                  style={[
                    styles.lessonCard,
                    lesson.status === 'completed' && styles.lessonCompleted,
                    lesson.status === 'current' && styles.lessonCurrent,
                    lesson.status === 'locked' && styles.lessonLocked,
                  ]}
                >
                  <View style={styles.lessonContent}>
                    <View style={[
                      styles.lessonIcon,
                      lesson.status === 'completed' && styles.iconCompleted,
                      lesson.status === 'current' && styles.iconCurrent,
                      lesson.status === 'locked' && styles.iconLocked,
                    ]}>
                      {getLessonIcon(lesson.status)}
                    </View>
                    <View style={styles.lessonInfo}>
                      <Text style={[
                        styles.lessonTitle,
                        lesson.status === 'locked' && styles.lessonTitleLocked
                      ]}>
                        {lesson.id}. {lesson.title}
                      </Text>
                      <Text style={[
                        styles.lessonDescription,
                        lesson.status === 'locked' && styles.lessonDescriptionLocked
                      ]}>
                        {lesson.description}
                      </Text>
                      <View style={styles.lessonMeta}>
                        <Text style={[
                          styles.lessonStatus,
                          { color: status.color }
                        ]}>
                          {status.text}
                        </Text>
                        <Text style={[
                          styles.lessonDuration,
                          lesson.status === 'locked' && styles.lessonDurationLocked
                        ]}>
                          {lesson.duration}
                        </Text>
                        {lesson.rating && (
                          <Text style={styles.lessonRating}>★ {lesson.rating}</Text>
                        )}
                        {lesson.progress && (
                          <View style={styles.lessonProgress}>
                            <View style={styles.lessonProgressBar}>
                              <View 
                                style={[
                                  styles.lessonProgressFill,
                                  { width: `${lesson.progress}%` }
                                ]} 
                              />
                            </View>
                          </View>
                        )}
                      </View>
                    </View>
                    {lesson.status === 'current' && (
                      <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Continue Current Lesson</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Practice in VR</Text>
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
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  favoriteButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  heroCard: {
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    padding: 24,
    position: 'relative',
  },
  playButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    padding: 8,
  },
  moduleTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  moduleSubtitle: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 16,
  },
  moduleStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  progressSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  progressCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  progressValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F59E0B',
  },
  progressBar: {
    marginBottom: 8,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#374151',
    borderRadius: 6,
  },
  progressBarFill: {
    width: '75%',
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 6,
  },
  progressFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  lessonsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  lessonsList: {
    gap: 12,
  },
  lessonCard: {
    borderRadius: 12,
    padding: 16,
  },
  lessonCompleted: {
    backgroundColor: 'rgba(34, 197, 94, 0.3)',
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  lessonCurrent: {
    backgroundColor: 'rgba(245, 158, 11, 0.3)',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  lessonLocked: {
    backgroundColor: 'rgba(55, 65, 81, 0.3)',
    borderWidth: 1,
    borderColor: '#4B5563',
    opacity: 0.6,
  },
  lessonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconCompleted: {
    backgroundColor: '#22C55E',
  },
  iconCurrent: {
    backgroundColor: '#F59E0B',
  },
  iconLocked: {
    backgroundColor: '#4B5563',
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  lessonTitleLocked: {
    color: '#9CA3AF',
  },
  lessonDescription: {
    fontSize: 12,
    color: '#D1D5DB',
    marginBottom: 8,
  },
  lessonDescriptionLocked: {
    color: '#6B7280',
  },
  lessonMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  lessonStatus: {
    fontSize: 10,
    fontWeight: '500',
  },
  lessonDuration: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  lessonDurationLocked: {
    color: '#6B7280',
  },
  lessonRating: {
    fontSize: 10,
    color: '#F59E0B',
  },
  lessonProgress: {
    flex: 1,
  },
  lessonProgressBar: {
    width: 64,
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
  },
  lessonProgressFill: {
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 2,
  },
  continueButton: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  continueButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },
  actionSection: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  primaryButton: {
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default ModuleDetailScreen;
