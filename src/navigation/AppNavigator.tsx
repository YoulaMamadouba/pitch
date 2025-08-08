import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from '../types';

// Import des écrans
import { SplashScreen } from '../screens/SplashScreen';
import { LandingScreen } from '../screens/LandingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { B2CScreen } from '../screens/B2CScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { PhoneVerificationScreen } from '../screens/PhoneVerificationScreen';
import { PaymentScreen } from '../screens/PaymentScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { B2BScreen } from '../screens/B2BScreen';
import { LearnerDashboardScreen } from '../screens/LearnerDashboardScreen';

import { VRSceneSelectionScreen } from '../screens/VRSceneSelectionScreen';
import { VRSessionScreen } from '../screens/VRSessionScreen';
import { VoiceRecordingScreen } from '../screens/VoiceRecordingScreen';
import { VoiceAnalysisScreen } from '../screens/VoiceAnalysisScreen';

// Import des nouveaux écrans
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import HelpAndSupportScreen from '../screens/HelpAndSupportScreen';
import { CoachDashboardScreen } from '../screens/CoachDashboardScreen';
import { HRDashboardScreen } from '../screens/HRDashboardScreen';
import { ModuleDetailScreen } from '../screens/ModuleDetailScreen';

// Créer les navigateurs
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

import { View, Text, StyleSheet } from 'react-native';
import { HomeIcon, BookOpenIcon, UsersIcon, UserIcon, BellIcon } from '../components/Icons';

// Placeholder pour les écrans non encore créés
const PlaceholderScreen = ({ route }: any) => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>
      {route.name} - En cours de développement
    </Text>
  </View>
);

// Navigation des onglets principaux
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 10,
          height: 80,
        },
        tabBarActiveTintColor: '#F4C056',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={LearnerDashboardScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Modules"
        component={PlaceholderScreen}
        options={{
          tabBarLabel: 'Modules',
          tabBarIcon: ({ color, size }) => (
            <BookOpenIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={PlaceholderScreen}
        options={{
          tabBarLabel: 'Communauté',
          tabBarIcon: ({ color, size }) => (
            <UsersIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <UserIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <BellIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Navigation principale
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#0F1C2E' },
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        <Stack.Screen name="B2C" component={B2CScreen} />
        <Stack.Screen name="B2B" component={B2BScreen} />
        <Stack.Screen name="VRSceneSelection" component={VRSceneSelectionScreen} />
        <Stack.Screen name="VRSession" component={VRSessionScreen} />
        <Stack.Screen name="VoiceRecording" component={VoiceRecordingScreen} />
        <Stack.Screen name="VoiceAnalysis" component={VoiceAnalysisScreen} />
        <Stack.Screen name="ModuleView" component={PlaceholderScreen} />
        <Stack.Screen name="LessonView" component={PlaceholderScreen} />
        <Stack.Screen name="Quiz" component={PlaceholderScreen} />
        <Stack.Screen name="QuizResults" component={PlaceholderScreen} />
        <Stack.Screen name="Certificate" component={PlaceholderScreen} />
        <Stack.Screen name="Leaderboard" component={PlaceholderScreen} />
        <Stack.Screen name="CommunityFeed" component={PlaceholderScreen} />
        <Stack.Screen name="PublishVideo" component={PlaceholderScreen} />
                 <Stack.Screen name="Comments" component={PlaceholderScreen} />
         <Stack.Screen name="Notifications" component={NotificationsScreen} />
         <Stack.Screen name="Profile" component={ProfileScreen} />
         <Stack.Screen name="Settings" component={SettingsScreen} />
         <Stack.Screen name="Feedback" component={FeedbackScreen} />
         <Stack.Screen name="Achievements" component={AchievementsScreen} />
         <Stack.Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
         <Stack.Screen name="CoachDashboard" component={CoachDashboardScreen} />
         <Stack.Screen name="HRDashboard" component={HRDashboardScreen} />
         <Stack.Screen name="ModuleDetail" component={ModuleDetailScreen} />
         <Stack.Screen name="Subscription" component={PlaceholderScreen} />
        <Stack.Screen name="FAQ" component={PlaceholderScreen} />
        <Stack.Screen name="Support" component={PlaceholderScreen} />
        <Stack.Screen name="Error" component={PlaceholderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1C2E',
  },
  placeholderText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
