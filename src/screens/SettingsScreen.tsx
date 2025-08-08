import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon, 
  BellIcon, 
  LockIcon, 
  SettingsIcon, 
  ShieldIcon, 
  ArrowRightIcon
} from '../components/Icons';

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);

  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          id: 'profile',
          title: 'Edit Profile',
          icon: <SettingsIcon size={20} color="#6B7280" />,
          type: 'navigate',
          screen: 'Profile',
        },
        {
          id: 'security',
          title: 'Security',
          icon: <ShieldIcon size={20} color="#6B7280" />,
          type: 'navigate',
          screen: 'Settings',
        },
        {
          id: 'notifications',
          title: 'Notifications',
          icon: <BellIcon size={20} color="#6B7280" />,
          type: 'toggle',
          value: notificationsEnabled,
          onValueChange: setNotificationsEnabled,
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          id: 'appearance',
          title: 'Dark Mode',
          icon: <SettingsIcon size={20} color="#6B7280" />,
          type: 'toggle',
          value: darkModeEnabled,
          onValueChange: setDarkModeEnabled,
        },
        {
          id: 'language',
          title: 'Language',
          icon: <SettingsIcon size={20} color="#6B7280" />,
          type: 'navigate',
          screen: 'Settings',
          value: 'English',
        },
        {
          id: 'biometric',
          title: 'Biometric Login',
          icon: <LockIcon size={20} color="#6B7280" />,
          type: 'toggle',
          value: biometricEnabled,
          onValueChange: setBiometricEnabled,
        },
        {
          id: 'auto-save',
          title: 'Auto-save Progress',
          icon: <DocumentTextIcon size={20} color="#6B7280" />,
          type: 'toggle',
          value: autoSaveEnabled,
          onValueChange: setAutoSaveEnabled,
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          id: 'help',
          title: 'Help Center',
          icon: <QuestionMarkCircleIcon size={20} color="#6B7280" />,
          type: 'navigate',
          screen: 'HelpAndSupport',
        },
        {
          id: 'privacy',
          title: 'Privacy Policy',
          icon: <ShieldIcon size={20} color="#6B7280" />,
          type: 'navigate',
          screen: 'Settings',
        },
        {
          id: 'terms',
          title: 'Terms of Service',
          icon: <DocumentTextIcon size={20} color="#6B7280" />,
          type: 'navigate',
          screen: 'Settings',
        },
      ],
    },
  ];

  const handleLogout = () => {
    // Implement logout logic here
    console.log('User logged out');
  };

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
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={styles.headerRight} />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face' }} 
            style={styles.profileImage} 
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Alex Johnson</Text>
            <Text style={styles.profileEmail}>alex.johnson@example.com</Text>
          </View>
        </View>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map((item) => (
                <TouchableOpacity 
                  key={item.id}
                  style={styles.settingItem}
                  onPress={() => {
                    if (item.type === 'navigate') {
                      navigation.navigate(item.screen as any);
                    }
                  }}
                >
                  <View style={styles.settingLeft}>
                    <View style={styles.settingIcon}>{item.icon}</View>
                    <View style={styles.settingText}>
                      <Text style={styles.settingTitle}>{item.title}</Text>
                      {item.value && (
                        <Text style={styles.settingValue}>{item.value}</Text>
                      )}
                    </View>
                  </View>
                  
                  {item.type === 'toggle' ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onValueChange}
                      trackColor={{ false: '#E5E7EB', true: '#F59E0B' }}
                      thumbColor="#FFFFFF"
                    />
                  ) : (
                    <ArrowRightIcon size={20} color="#D1D5DB" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    padding: 20,
    marginBottom: 16,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  sectionContent: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    marginHorizontal: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(156, 163, 175, 0.2)',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  settingValue: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 2,
  },
  logoutButton: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
  },
});

export default SettingsScreen;
