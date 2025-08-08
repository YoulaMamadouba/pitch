import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon,
  EllipsisVerticalIcon,
  VideoCameraIcon,
  EyeIcon,
  ChartBarIcon,
  PaperAirplaneIcon,
} from '../components/Icons';

type AICoachChatScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface ChatMessage {
  id: string;
  type: 'ai' | 'user';
  text: string;
  time: string;
  exercises?: Array<{
    title: string;
    description: string;
    color: string;
  }>;
  quickActions?: Array<{
    title: string;
    icon: string;
    color: string;
  }>;
}

export const AICoachChatScreen: React.FC = () => {
  const navigation = useNavigation<AICoachChatScreenNavigationProp>();
  const [message, setMessage] = useState('');

  const messages: ChatMessage[] = [
    {
      id: '1',
      type: 'ai',
      text: "Bonjour ! Je suis Alex, votre coach IA d'expression orale. J'ai analysé votre performance récente dans le Module 6. Comment puis-je vous aider à vous améliorer aujourd'hui ?",
      time: '14:34',
    },
    {
      id: '2',
      type: 'user',
      text: "J'ai du mal avec mes gestes des mains. Ils me semblent maladroits et peu naturels.",
      time: '14:35',
    },
    {
      id: '3',
      type: 'ai',
      text: "Je comprends ! D'après votre dernier enregistrement, j'ai remarqué que vous gardez vos mains près de votre corps. Voici 3 exercices spécifiques :",
      time: '14:36',
      exercises: [
        {
          title: 'Exercice 1 : Pratique Miroir',
          description: 'Pratiquez devant un miroir pendant 5 minutes par jour',
          color: '#3B82F6',
        },
        {
          title: 'Exercice 2 : Technique de la Boîte',
          description: 'Imaginez une boîte autour de votre torse et gesticulez à l\'extérieur',
          color: '#10B981',
        },
        {
          title: 'Exercice 3 : Pratique VR',
          description: 'Essayez la scène VR "Salle de Réunion" pour une pratique réaliste',
          color: '#8B5CF6',
        },
      ],
    },
    {
      id: '4',
      type: 'ai',
      text: 'Actions rapides pour vous :',
      time: '14:37',
      quickActions: [
        {
          title: 'Enregistrer Session',
          icon: 'video',
          color: '#F59E0B',
        },
        {
          title: 'Démarrer VR',
          icon: 'vr',
          color: '#06B6D4',
        },
        {
          title: 'Voir Progression',
          icon: 'chart',
          color: '#8B5CF6',
        },
      ],
    },
  ];

  const renderMessage = (msg: ChatMessage) => {
    if (msg.type === 'ai') {
      return (
        <View key={msg.id} style={styles.messageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' }}
            style={styles.aiAvatar}
          />
          <View style={styles.aiMessageBubble}>
            <Text style={styles.messageText}>{msg.text}</Text>
            
            {msg.exercises && (
              <View style={styles.exercisesContainer}>
                {msg.exercises.map((exercise, index) => (
                  <View key={index} style={[styles.exerciseCard, { backgroundColor: `${exercise.color}20` }]}>
                    <Text style={[styles.exerciseTitle, { color: exercise.color }]}>
                      {exercise.title}
                    </Text>
                    <Text style={styles.exerciseDescription}>
                      {exercise.description}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {msg.quickActions && (
              <View style={styles.quickActionsContainer}>
                {msg.quickActions.map((action, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.quickActionButton, { backgroundColor: action.color }]}
                  >
                    <Text style={styles.quickActionText}>
                      {action.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <Text style={styles.messageTime}>{msg.time}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View key={msg.id} style={styles.userMessageContainer}>
          <View style={styles.userMessageBubble}>
            <Text style={styles.userMessageText}>{msg.text}</Text>
            <Text style={styles.userMessageTime}>{msg.time}</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' }}
            style={styles.userAvatar}
          />
        </View>
      );
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <View style={styles.headerCenter}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' }}
            style={styles.headerAvatar}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>Alex Coach IA</Text>
            <Text style={styles.headerStatus}>● En ligne</Text>
          </View>
        </View>
        
        <TouchableOpacity>
          <EllipsisVerticalIcon size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
        {messages.map(renderMessage)}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Tapez votre message..."
          placeholderTextColor="#9CA3AF"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <PaperAirplaneIcon size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  headerInfo: {
    alignItems: 'center',
  },
  headerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  headerStatus: {
    fontSize: 12,
    color: '#10B981',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  aiAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  aiMessageBubble: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 16,
    borderTopLeftRadius: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: '#374151',
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  exercisesContainer: {
    marginTop: 12,
    gap: 8,
  },
  exerciseCard: {
    borderRadius: 8,
    padding: 8,
  },
  exerciseTitle: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  exerciseDescription: {
    fontSize: 11,
    color: '#FFFFFF',
  },
  quickActionsContainer: {
    marginTop: 12,
    gap: 8,
  },
  quickActionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  messageTime: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 8,
  },
  userMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
    gap: 12,
  },
  userMessageBubble: {
    backgroundColor: '#F59E0B',
    borderRadius: 16,
    borderTopRightRadius: 4,
    padding: 16,
    maxWidth: '80%',
  },
  userMessageText: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
  },
  userMessageTime: {
    fontSize: 11,
    color: '#374151',
    marginTop: 8,
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#FFFFFF',
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#F59E0B',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AICoachChatScreen;
