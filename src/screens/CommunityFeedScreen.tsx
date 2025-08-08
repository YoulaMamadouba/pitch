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
  SearchIcon,
  PlusIcon,
  HeartIcon,
  MessageIcon,
  ShareIcon,
  StarIcon,
  PlayIcon,
} from '../components/Icons';

type CommunityFeedScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const CommunityFeedScreen: React.FC = () => {
  const navigation = useNavigation<CommunityFeedScreenNavigationProp>();
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLikePress = (postId: string) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Communauté</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <SearchIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <PlusIcon size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Trending Topics */}
        <View style={styles.trendingSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.trendingBadge}>
              <Text style={styles.trendingText}>🔥 #PriseDeParole</Text>
            </View>
            <View style={styles.trendingBadgeInactive}>
              <Text style={styles.trendingTextInactive}>#LangageCorporel</Text>
            </View>
            <View style={styles.trendingBadgeInactive}>
              <Text style={styles.trendingTextInactive}>#FormationVR</Text>
            </View>
            <View style={styles.trendingBadgeInactive}>
              <Text style={styles.trendingTextInactive}>#ConseilsTEDx</Text>
            </View>
          </ScrollView>
        </View>

        {/* Feed Posts */}
        <View style={styles.feedSection}>
          {/* Success Story Post */}
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' }}
                style={styles.postAvatar}
              />
              <View style={styles.postInfo}>
                <View style={styles.postUserInfo}>
                  <Text style={styles.postUserName}>Sarah Chen</Text>
                  <View style={styles.levelBadge}>
                    <Text style={styles.levelBadgeText}>Niveau 5</Text>
                  </View>
                </View>
                <Text style={styles.postTime}>Il y a 2h • Module 8 terminé</Text>
              </View>
              <TouchableOpacity style={styles.postOptions}>
                <Text style={styles.postOptionsText}>⋯</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.postContent}>
              J'ai réussi mon premier casting TEDx ! 🎉 Les sessions VR m'ont vraiment aidé à surmonter ma peur de la scène. Merci à la communauté @PitchToMe pour tout le soutien ! 
              <Text style={styles.hashtag}> #Succès #TEDx #FormationVR</Text>
            </Text>
            
            <View style={styles.achievementCard}>
              <View style={styles.achievementHeader}>
                <StarIcon size={16} color="#F4C056" />
                <Text style={styles.achievementTitle}>Succès Débloqué !</Text>
              </View>
              <Text style={styles.achievementText}>Candidat TEDx - Premier casting réussi</Text>
            </View>
            
            <View style={styles.postActions}>
              <View style={styles.actionButtons}>
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleLikePress('post-1')}
                >
                  <HeartIcon 
                    size={20} 
                    color={likedPosts.has('post-1') ? '#EF4444' : '#9CA3AF'} 
                  />
                  <Text style={[
                    styles.actionText,
                    { color: likedPosts.has('post-1') ? '#EF4444' : '#9CA3AF' }
                  ]}>47</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <MessageIcon size={20} color="#9CA3AF" />
                  <Text style={styles.actionText}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <ShareIcon size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
              <Text style={styles.postTime}>2h</Text>
            </View>
          </View>

          {/* Video Practice Post */}
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' }}
                style={styles.postAvatar}
              />
              <View style={styles.postInfo}>
                <View style={styles.postUserInfo}>
                  <Text style={styles.postUserName}>Marcus Johnson</Text>
                  <View style={styles.levelBadgeBlue}>
                    <Text style={styles.levelBadgeText}>Niveau 3</Text>
                  </View>
                </View>
                <Text style={styles.postTime}>Il y a 5h • Demande de feedback</Text>
              </View>
            </View>
            
            <Text style={styles.postContent}>
              Je travaille sur mon pitch d'ascenseur. Des retours sur mon langage corporel ? 🤔 
              <Text style={styles.hashtag}> #Feedback #LangageCorporel #Pratique</Text>
            </Text>
            
            <View style={styles.videoContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=150&fit=crop' }}
                style={styles.videoThumbnail}
              />
              <View style={styles.videoOverlay}>
                <TouchableOpacity style={styles.playButton}>
                  <PlayIcon size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
              <View style={styles.videoDuration}>
                <Text style={styles.durationText}>2:15</Text>
              </View>
            </View>
            
            <View style={styles.postActions}>
              <View style={styles.actionButtons}>
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleLikePress('post-2')}
                >
                  <HeartIcon 
                    size={20} 
                    color={likedPosts.has('post-2') ? '#EF4444' : '#9CA3AF'} 
                  />
                  <Text style={[
                    styles.actionText,
                    { color: likedPosts.has('post-2') ? '#EF4444' : '#9CA3AF' }
                  ]}>23</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <MessageIcon size={20} color="#9CA3AF" />
                  <Text style={styles.actionText}>8</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.postTime}>5h</Text>
            </View>
          </View>

          {/* Coach Tip Post */}
          <View style={styles.postCardCoach}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' }}
                style={styles.postAvatar}
              />
              <View style={styles.postInfo}>
                <View style={styles.postUserInfo}>
                  <Text style={styles.postUserName}>Mawa SIMBA</Text>
                  <View style={styles.coachBadge}>
                    <Text style={styles.coachBadgeText}>COACH</Text>
                  </View>
                </View>
                <Text style={styles.postTime}>Il y a 1j • Conseil du jour</Text>
              </View>
            </View>
            
            <Text style={styles.postContent}>
              💡 Conseil du jour : La respiration diaphragmatique est la clé pour contrôler votre nervosité. Pratiquez 5 minutes par jour et vous verrez la différence ! 
              <Text style={styles.hashtag}> #ConseilCoach #Respiration #Confiance</Text>
            </Text>
            
            <View style={styles.postActions}>
              <View style={styles.actionButtons}>
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleLikePress('post-3')}
                >
                  <HeartIcon 
                    size={20} 
                    color={likedPosts.has('post-3') ? '#EF4444' : '#9CA3AF'} 
                  />
                  <Text style={[
                    styles.actionText,
                    { color: likedPosts.has('post-3') ? '#EF4444' : '#9CA3AF' }
                  ]}>89</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <MessageIcon size={20} color="#9CA3AF" />
                  <Text style={styles.actionText}>24</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <ShareIcon size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
              <Text style={styles.postTime}>1j</Text>
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
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  trendingSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  trendingBadge: {
    backgroundColor: '#F4C056',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  trendingText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
  },
  trendingBadgeInactive: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  trendingTextInactive: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  feedSection: {
    paddingHorizontal: 24,
    gap: 16,
  },
  postCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  postCardCoach: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.4)',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postInfo: {
    flex: 1,
  },
  postUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  postUserName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginRight: 8,
  },
  levelBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  levelBadgeBlue: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  levelBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },
  coachBadge: {
    backgroundColor: '#F4C056',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  coachBadgeText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  postOptions: {
    padding: 4,
  },
  postOptionsText: {
    fontSize: 18,
    color: '#9CA3AF',
  },
  postContent: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
    marginBottom: 12,
  },
  hashtag: {
    color: '#06B6D4',
  },
  achievementCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  achievementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  achievementTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 6,
  },
  achievementText: {
    fontSize: 11,
    color: '#9CA3AF',
  },
  videoContainer: {
    position: 'relative',
    backgroundColor: '#1F2937',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  videoThumbnail: {
    width: '100%',
    height: 128,
    resizeMode: 'cover',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoDuration: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});

export default CommunityFeedScreen;
