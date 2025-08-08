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
  PlusIcon,
  UsersIcon,
  ChartIcon,
  ClockIcon,
  CheckIcon,
  StarIcon,
  EyeIcon,
  DownloadIcon,
  ShareIcon,
  UserIcon,
  BookOpenIcon,
  BellIcon,
  EllipsisVerticalIcon,
  SearchIcon,
} from '../components/Icons';

type TeamManagementScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const TeamManagementScreen: React.FC = () => {
  const navigation = useNavigation<TeamManagementScreenNavigationProp>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gestion d'Équipe</Text>
        <TouchableOpacity>
          <PlusIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Team Overview */}
        <View style={styles.teamOverviewSection}>
          <LinearGradient
            colors={['#A78BFA', '#8B5CF6']}
            style={styles.teamOverviewGradient}
          >
            <View style={styles.teamOverviewContent}>
              <View style={styles.teamInfo}>
                <Text style={styles.teamTitle}>Équipe Ventes</Text>
                <Text style={styles.teamSubtitle}>25 membres • 92% taux de réussite</Text>
              </View>
              <View style={styles.progressRing}>
                <View style={styles.progressRingBackground} />
                <View style={styles.progressRingFill} />
                <Text style={styles.progressText}>92%</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Actions Rapides</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity style={styles.quickActionCard}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.quickActionIcon}
              >
                <UserIcon size={20} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.quickActionText}>Ajouter Membres</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionCard}>
              <LinearGradient
                colors={['#06B6D4', '#0891B2']}
                style={styles.quickActionIcon}
              >
                <BookOpenIcon size={20} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.quickActionText}>Assigner Modules</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionCard}>
              <LinearGradient
                colors={['#F4C056', '#FFD700']}
                style={styles.quickActionIcon}
              >
                <ChartIcon size={20} color="#000000" />
              </LinearGradient>
              <Text style={styles.quickActionText}>Voir Rapports</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionCard}>
              <LinearGradient
                colors={['#EF4444', '#DC2626']}
                style={styles.quickActionIcon}
              >
                <BellIcon size={20} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.quickActionText}>Envoyer Rappels</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Team Members */}
        <View style={styles.teamMembersSection}>
          <View style={styles.teamMembersHeader}>
            <Text style={styles.sectionTitle}>Membres de l'Équipe</Text>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerAction}>
                <EyeIcon size={20} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerAction}>
                <SearchIcon size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.teamMembersList}>
            {/* Team Member 1 */}
            <View style={styles.teamMemberCard}>
              <View style={styles.memberInfo}>
                <View style={styles.memberAvatarContainer}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face' }}
                    style={styles.memberAvatar}
                  />
                  <View style={[styles.statusIndicator, { backgroundColor: '#10B981' }]} />
                </View>
                <View style={styles.memberDetails}>
                  <View style={styles.memberHeader}>
                    <Text style={styles.memberName}>Alex Martin</Text>
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusBadgeText}>Terminé</Text>
                    </View>
                  </View>
                  <Text style={styles.memberRole}>Commercial Senior • Niveau 7</Text>
                  <View style={styles.memberProgress}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: '100%', backgroundColor: '#10B981' }]} />
                    </View>
                    <Text style={styles.progressText}>12/12</Text>
                  </View>
                  <Text style={styles.lastActive}>Dernière activité : il y a 2h</Text>
                </View>
                <TouchableOpacity style={styles.memberActions}>
                  <EllipsisVerticalIcon size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Team Member 2 */}
            <View style={styles.teamMemberCard}>
              <View style={styles.memberInfo}>
                <View style={styles.memberAvatarContainer}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face' }}
                    style={styles.memberAvatar}
                  />
                  <View style={[styles.statusIndicator, { backgroundColor: '#F4C056' }]} />
                </View>
                <View style={styles.memberDetails}>
                  <View style={styles.memberHeader}>
                    <Text style={styles.memberName}>Sarah Chen</Text>
                    <View style={[styles.statusBadge, { backgroundColor: 'rgba(245, 158, 11, 0.3)' }]}>
                      <Text style={[styles.statusBadgeText, { color: '#F4C056' }]}>En Cours</Text>
                    </View>
                  </View>
                  <Text style={styles.memberRole}>Manager Commercial • Niveau 5</Text>
                  <View style={styles.memberProgress}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: '75%', backgroundColor: '#F4C056' }]} />
                    </View>
                    <Text style={styles.progressText}>9/12</Text>
                  </View>
                  <Text style={styles.lastActive}>Dernière activité : il y a 1j</Text>
                </View>
                <TouchableOpacity style={styles.memberActions}>
                  <EllipsisVerticalIcon size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Team Member 3 */}
            <View style={styles.teamMemberCard}>
              <View style={styles.memberInfo}>
                <View style={styles.memberAvatarContainer}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' }}
                    style={styles.memberAvatar}
                  />
                  <View style={[styles.statusIndicator, { backgroundColor: '#6B7280' }]} />
                </View>
                <View style={styles.memberDetails}>
                  <View style={styles.memberHeader}>
                    <Text style={styles.memberName}>Marcus Johnson</Text>
                    <View style={[styles.statusBadge, { backgroundColor: 'rgba(239, 68, 68, 0.3)' }]}>
                      <Text style={[styles.statusBadgeText, { color: '#EF4444' }]}>En Retard</Text>
                    </View>
                  </View>
                  <Text style={styles.memberRole}>Commercial Junior • Niveau 3</Text>
                  <View style={styles.memberProgress}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: '25%', backgroundColor: '#EF4444' }]} />
                    </View>
                    <Text style={styles.progressText}>3/12</Text>
                  </View>
                  <Text style={styles.lastActive}>Dernière activité : il y a 5j</Text>
                </View>
                <TouchableOpacity style={styles.memberActions}>
                  <EllipsisVerticalIcon size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Team Member 4 */}
            <View style={styles.teamMemberCard}>
              <View style={styles.memberInfo}>
                <View style={styles.memberAvatarContainer}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face' }}
                    style={styles.memberAvatar}
                  />
                  <View style={[styles.statusIndicator, { backgroundColor: '#10B981' }]} />
                </View>
                <View style={styles.memberDetails}>
                  <View style={styles.memberHeader}>
                    <Text style={styles.memberName}>Emma Wilson</Text>
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusBadgeText}>Terminé</Text>
                    </View>
                  </View>
                  <Text style={styles.memberRole}>Account Executive • Niveau 6</Text>
                  <View style={styles.memberProgress}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: '100%', backgroundColor: '#10B981' }]} />
                    </View>
                    <Text style={styles.progressText}>12/12</Text>
                  </View>
                  <Text style={styles.lastActive}>Dernière activité : il y a 30m</Text>
                </View>
                <TouchableOpacity style={styles.memberActions}>
                  <EllipsisVerticalIcon size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Bulk Actions */}
        <View style={styles.bulkActionsSection}>
          <View style={styles.bulkActionsCard}>
            <View style={styles.bulkActionsContent}>
              <Text style={styles.bulkActionsText}>3 membres sélectionnés</Text>
              <View style={styles.bulkActionsButtons}>
                <TouchableOpacity style={styles.bulkActionButton}>
                  <Text style={styles.bulkActionButtonText}>Assigner</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bulkActionButton}>
                  <Text style={styles.bulkActionButtonText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.manageAllButton}>
            <LinearGradient
              colors={['#A78BFA', '#8B5CF6']}
              style={styles.manageAllGradient}
            >
              <Text style={styles.manageAllText}>Gérer Toutes les Équipes</Text>
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
  teamOverviewSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  teamOverviewGradient: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
  },
  teamOverviewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamInfo: {
    flex: 1,
  },
  teamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  teamSubtitle: {
    fontSize: 12,
    color: '#E9D5FF',
  },
  progressRing: {
    width: 48,
    height: 48,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressRingBackground: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  progressRingFill: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '-90deg' }],
  },
  progressText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  quickActionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  quickActionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  teamMembersSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  teamMembersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerAction: {
    padding: 4,
  },
  teamMembersList: {
    gap: 12,
  },
  teamMemberCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  memberAvatarContainer: {
    position: 'relative',
  },
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  memberDetails: {
    flex: 1,
  },
  memberHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  memberName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  statusBadge: {
    backgroundColor: 'rgba(34, 197, 94, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#10B981',
  },
  memberRole: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  memberProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  progressBar: {
    width: 64,
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  lastActive: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  memberActions: {
    padding: 4,
  },
  bulkActionsSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  bulkActionsCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  bulkActionsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bulkActionsText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  bulkActionsButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  bulkActionButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  bulkActionButtonText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  manageAllButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  manageAllGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  manageAllText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default TeamManagementScreen;
