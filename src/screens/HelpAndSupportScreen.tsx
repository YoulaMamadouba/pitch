import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { 
  ArrowLeftIcon, 
  StarIcon,
  ArrowRightIcon
} from '../components/Icons';

type HelpAndSupportScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const HelpAndSupportScreen: React.FC = () => {
  const navigation = useNavigation<HelpAndSupportScreenNavigationProp>();
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'How do I start my first VR session?',
      answer: 'To start your first VR session, go to the VR Practice section and select a scene. Make sure your VR headset is connected and calibrated before starting.',
      category: 'VR',
    },
    {
      id: '2',
      question: 'How does voice analysis work?',
      answer: 'Voice analysis uses AI to evaluate your speaking clarity, pace, volume, and confidence. Record your speech and get instant feedback with improvement suggestions.',
      category: 'Voice',
    },
    {
      id: '3',
      question: 'Can I use the app without VR?',
      answer: 'Yes! While VR provides the most immersive experience, you can use all other features including voice recording, modules, and community features without VR.',
      category: 'General',
    },
    {
      id: '4',
      question: 'How do I track my progress?',
      answer: 'Your progress is automatically tracked in the dashboard. You can see completed modules, achievements, and overall statistics in your profile.',
      category: 'Progress',
    },
    {
      id: '5',
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption to protect your data. Your recordings and personal information are never shared without your consent.',
      category: 'Privacy',
    },
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
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
          <Text style={styles.headerTitle}>Help & Support</Text>
          <View style={styles.headerRight} />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Search Section */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionIcon}>
                <StarIcon size={24} color="#F59E0B" />
              </View>
              <Text style={styles.quickActionText}>Contact Support</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionIcon}>
                <StarIcon size={24} color="#F59E0B" />
              </View>
              <Text style={styles.quickActionText}>Report Bug</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionIcon}>
                <StarIcon size={24} color="#F59E0B" />
              </View>
              <Text style={styles.quickActionText}>Feature Request</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionIcon}>
                <StarIcon size={24} color="#F59E0B" />
              </View>
              <Text style={styles.quickActionText}>Tutorial</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          
          {filteredFAQs.map((faq) => (
            <TouchableOpacity 
              key={faq.id}
              style={styles.faqItem}
              onPress={() => toggleFAQ(faq.id)}
            >
              <View style={styles.faqHeader}>
                <View style={styles.faqContent}>
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                  <Text style={styles.faqCategory}>{faq.category}</Text>
                </View>
                <ArrowRightIcon 
                  size={20} 
                  color="#9CA3AF" 
                  style={[
                    styles.faqArrow,
                    expandedFAQ === faq.id && styles.faqArrowExpanded
                  ]}
                />
              </View>
              
              {expandedFAQ === faq.id && (
                <View style={styles.faqAnswer}>
                  <Text style={styles.faqAnswerText}>{faq.answer}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Still Need Help?</Text>
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Get in Touch</Text>
            <Text style={styles.contactText}>
              Our support team is here to help you 24/7. We typically respond within 2 hours.
            </Text>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Contact Support</Text>
            </TouchableOpacity>
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
  searchSection: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#374151',
  },
  quickActionsSection: {
    padding: 16,
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
  quickActionItem: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '48%',
  },
  quickActionIcon: {
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  faqSection: {
    padding: 16,
  },
  faqItem: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  faqContent: {
    flex: 1,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  faqCategory: {
    fontSize: 12,
    color: '#F59E0B',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  faqArrow: {
    marginLeft: 12,
    transform: [{ rotate: '0deg' }],
  },
  faqArrowExpanded: {
    transform: [{ rotate: '90deg' }],
  },
  faqAnswer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(156, 163, 175, 0.2)',
  },
  faqAnswerText: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
  },
  contactSection: {
    padding: 16,
    paddingBottom: 32,
  },
  contactCard: {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: '#F59E0B',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  contactButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HelpAndSupportScreen;
