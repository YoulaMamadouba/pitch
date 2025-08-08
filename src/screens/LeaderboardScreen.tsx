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
  FunnelIcon,
  TrophyIcon,
  StarIcon,
} from '../components/Icons';

type LeaderboardScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  level: string;
  isCurrentUser?: boolean;
}

export const LeaderboardScreen: React.FC = () => {
  const navigation = useNavigation<LeaderboardScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState('global');

  const top3: LeaderboardEntry[] = [
    {
      id: '1',
      rank: 1,
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=70&h=70&fit=crop&crop=face',
      xp: 5240,
      level: 'Expert',
    },
    {
      id: '2',
      rank: 2,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      xp: 4890,
      level: 'Avancé',
    },
    {
      id: '3',
      rank: 3,
      name: 'Alex Martin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      xp: 4650,
      level: 'Intermédiaire',
    },
  ];

  const otherEntries: LeaderboardEntry[] = [
    {
      id: '4',
      rank: 4,
      name: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      xp: 4320,
      level: 'Intermédiaire',
    },
    {
      id: '5',
      rank: 5,
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
      xp: 3980,
      level: 'Débutant',
    },
    {
      id: '6',
      rank: 6,
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face',
      xp: 3650,
      level: 'Débutant',
    },
    {
      id: '7',
      rank: 7,
      name: 'Vous',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      xp: 3420,
      level: 'Intermédiaire',
      isCurrentUser: true,
    },
  ];

  const tabs = [
    { id: 'global', label: 'Global' },
    { id: 'company', label: 'Entreprise' },
    { id: 'friends', label: 'Amis' },
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return '#F59E0B';
      case 2: return '#9CA3AF';
      case 3: return '#F97316';
      default: return '#6B7280';
    }
  };

  const getRankSize = (rank: number) => {
    switch (rank) {
      case 1: return 80;
      case 2: return 64;
      case 3: return 64;
      default: return 50;
    }
  };

  const getPodiumHeight = (rank: number) => {
    switch (rank) {
      case 1: return 64;
      case 2: return 48;
      case 3: return 32;
      default: return 0;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Classement</Text>
        
        <TouchableOpacity>
          <FunnelIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabsBackground}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tabButton,
                activeTab === tab.id && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab.id && styles.activeTabText,
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Top 3 Podium */}
        <View style={styles.podiumContainer}>
          <View style={styles.podiumRow}>
            {/* 2nd Place */}
            <View style={styles.podiumItem}>
              <View style={styles.podiumAvatarContainer}>
                <Image
                  source={{ uri: top3[1].avatar }}
                  style={[styles.podiumAvatar, { width: getRankSize(2), height: getRankSize(2) }]}
                />
                <View style={[styles.rankBadge, { backgroundColor: getRankColor(2) }]}>
                  <Text style={styles.rankBadgeText}>2</Text>
                </View>
              </View>
              <Text style={styles.podiumName}>{top3[1].name}</Text>
              <Text style={styles.podiumXP}>{top3[1].xp.toLocaleString()} XP</Text>
              <View style={[styles.podiumBase, { height: getPodiumHeight(2), backgroundColor: getRankColor(2) }]}>
                <Text style={styles.podiumBaseText}>2</Text>
              </View>
            </View>

            {/* 1st Place */}
            <View style={styles.podiumItem}>
              <View style={styles.crownContainer}>
                <TrophyIcon size={32} color="#F59E0B" />
              </View>
              <View style={styles.podiumAvatarContainer}>
                <Image
                  source={{ uri: top3[0].avatar }}
                  style={[styles.podiumAvatar, { width: getRankSize(1), height: getRankSize(1) }]}
                />
                <View style={[styles.rankBadge, { backgroundColor: getRankColor(1) }]}>
                  <Text style={styles.rankBadgeText}>1</Text>
                </View>
              </View>
              <Text style={styles.podiumName}>{top3[0].name}</Text>
              <Text style={styles.podiumXP}>{top3[0].xp.toLocaleString()} XP</Text>
              <View style={[styles.podiumBase, { height: getPodiumHeight(1), backgroundColor: getRankColor(1) }]}>
                <Text style={styles.podiumBaseText}>1</Text>
              </View>
            </View>

            {/* 3rd Place */}
            <View style={styles.podiumItem}>
              <View style={styles.podiumAvatarContainer}>
                <Image
                  source={{ uri: top3[2].avatar }}
                  style={[styles.podiumAvatar, { width: getRankSize(3), height: getRankSize(3) }]}
                />
                <View style={[styles.rankBadge, { backgroundColor: getRankColor(3) }]}>
                  <Text style={styles.rankBadgeText}>3</Text>
                </View>
              </View>
              <Text style={styles.podiumName}>{top3[2].name}</Text>
              <Text style={styles.podiumXP}>{top3[2].xp.toLocaleString()} XP</Text>
              <View style={[styles.podiumBase, { height: getPodiumHeight(3), backgroundColor: getRankColor(3) }]}>
                <Text style={styles.podiumBaseText}>3</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Your Rank */}
        <View style={styles.yourRankContainer}>
          <View style={styles.yourRankCard}>
            <View style={styles.yourRankContent}>
              <View style={styles.yourRankInfo}>
                <Text style={styles.yourRankLabel}>Votre Classement</Text>
                <Text style={styles.yourRankPosition}>#7</Text>
              </View>
              <View style={styles.yourRankStats}>
                <Text style={styles.yourRankXP}>3,420 XP</Text>
                <Text style={styles.yourRankLevel}>Niveau Intermédiaire</Text>
              </View>
            </View>
            <View style={styles.yourRankAvatar}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face' }}
                style={styles.yourRankAvatarImage}
              />
            </View>
          </View>
        </View>

        {/* Other Entries */}
        <View style={styles.entriesContainer}>
          <Text style={styles.entriesTitle}>Autres Participants</Text>
          {otherEntries.map((entry) => (
            <View key={entry.id} style={[
              styles.entryCard,
              entry.isCurrentUser && styles.currentUserCard,
            ]}>
              <View style={styles.entryRank}>
                <Text style={styles.entryRankText}>#{entry.rank}</Text>
              </View>
              <Image
                source={{ uri: entry.avatar }}
                style={styles.entryAvatar}
              />
              <View style={styles.entryInfo}>
                <Text style={styles.entryName}>{entry.name}</Text>
                <Text style={styles.entryLevel}>{entry.level}</Text>
              </View>
              <View style={styles.entryXP}>
                <Text style={styles.entryXPText}>{entry.xp.toLocaleString()} XP</Text>
              </View>
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
  tabsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  tabsBackground: {
    flexDirection: 'row',
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTabButton: {
    backgroundColor: '#F59E0B',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  activeTabText: {
    color: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  podiumContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  podiumRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 16,
  },
  podiumItem: {
    alignItems: 'center',
  },
  crownContainer: {
    position: 'absolute',
    top: -16,
    zIndex: 1,
  },
  podiumAvatarContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  podiumAvatar: {
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#F59E0B',
  },
  rankBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  podiumName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  podiumXP: {
    fontSize: 12,
    color: '#F59E0B',
    fontWeight: '500',
    marginBottom: 8,
  },
  podiumBase: {
    width: 80,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  podiumBaseText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  yourRankContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  yourRankCard: {
    backgroundColor: '#06B6D4',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  yourRankContent: {
    flex: 1,
  },
  yourRankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 4,
  },
  yourRankLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  yourRankPosition: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  yourRankStats: {
    gap: 2,
  },
  yourRankXP: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  yourRankLevel: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  yourRankAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourRankAvatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  entriesContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  entriesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  entryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  currentUserCard: {
    backgroundColor: 'rgba(6, 182, 212, 0.2)',
    borderWidth: 1,
    borderColor: '#06B6D4',
  },
  entryRank: {
    width: 40,
    alignItems: 'center',
  },
  entryRankText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  entryAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  entryInfo: {
    flex: 1,
  },
  entryName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  entryLevel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  entryXP: {
    alignItems: 'flex-end',
  },
  entryXPText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F59E0B',
  },
});

export default LeaderboardScreen;
