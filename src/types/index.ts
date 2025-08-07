export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: number;
  progress: number;
  accountType: 'B2C' | 'B2B';
  subscription: 'free' | 'standard' | 'premium';
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  progress: number;
  isCompleted: boolean;
  isLocked: boolean;
  icon: string;
  color: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  content: string;
  duration: number;
  isCompleted: boolean;
  quiz?: Quiz;
}

export interface Quiz {
  id: string;
  questions: Question[];
  timeLimit?: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface VRScene {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  rating: number;
  category: string;
  isPremium: boolean;
}

export interface VoiceAnalysis {
  clarity: number;
  pace: number;
  volume: number;
  pitch: number;
  confidence: number;
  recommendations: string[];
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  title: string;
  description: string;
  videoUrl?: string;
  likes: number;
  comments: Comment[];
  createdAt: Date;
  isPublic: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likes: number;
  createdAt: Date;
  replies?: Comment[];
}

export interface Notification {
  id: string;
  type: 'coach' | 'community' | 'module' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export interface Subscription {
  id: string;
  type: 'standard' | 'premium';
  price: number;
  currency: string;
  features: string[];
  isActive: boolean;
  expiresAt: Date;
}

export type RootStackParamList = {
  Splash: undefined;
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  PhoneVerification: { email: string };
  Payment: { subscription: Subscription };
  Onboarding: undefined;
  MainTabs: undefined;
  B2C: undefined;
  B2B: undefined;
  VRSceneSelection: undefined;
  VRSession: { sceneId: string };
  VoiceRecording: undefined;
  VoiceAnalysis: { recordingId: string };
  ModuleView: { moduleId: string };
  LessonView: { lessonId: string };
  Quiz: { quizId: string };
  QuizResults: { quizId: string; score: number };
  Certificate: { moduleId: string };
  Leaderboard: undefined;
  CommunityFeed: undefined;
  PublishVideo: undefined;
  Comments: { postId: string };
  Notifications: undefined;
  Profile: undefined;
  Settings: undefined;
  Subscription: undefined;
  FAQ: undefined;
  Support: undefined;
  Error: { message: string };
};

export type MainTabParamList = {
  Home: undefined;
  Modules: undefined;
  Community: undefined;
  Profile: undefined;
};
