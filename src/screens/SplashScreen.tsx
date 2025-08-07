import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { MicrophoneIcon } from '../components/Icons';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const { width, height } = Dimensions.get('window');

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const logoScale = new Animated.Value(0);
  const logoOpacity = new Animated.Value(0);
  const textOpacity = new Animated.Value(0);
  const logoRotation = new Animated.Value(0);
  const dot1Scale = new Animated.Value(0);
  const dot2Scale = new Animated.Value(0);
  const dot3Scale = new Animated.Value(0);

  useEffect(() => {
    const animateLogo = () => {
      // Animation de rotation continue
      Animated.loop(
        Animated.timing(logoRotation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        })
      ).start();

      Animated.sequence([
        Animated.parallel([
          Animated.timing(logoScale, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();
    };

    const animateDots = () => {
      const dotAnimation = (dot: Animated.Value, delay: number) => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(dot, {
              toValue: 1,
              duration: 600,
              delay: delay,
              useNativeDriver: true,
            }),
            Animated.timing(dot, {
              toValue: 0,
              duration: 600,
              useNativeDriver: true,
            }),
          ])
        ).start();
      };

      dotAnimation(dot1Scale, 0);
      dotAnimation(dot2Scale, 200);
      dotAnimation(dot3Scale, 400);
    };

    animateLogo();
    animateDots();

    const timer = setTimeout(() => {
      navigation.replace('Landing');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, logoScale, logoOpacity, textOpacity, logoRotation, dot1Scale, dot2Scale, dot3Scale]);

  const spin = logoRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <LinearGradient
      colors={['#0F1C2E', '#1a2b42']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [{ scale: logoScale }, { rotate: spin }],
              opacity: logoOpacity,
            },
          ]}
        >
          <LinearGradient
            colors={['#F4C056', '#FFD700']}
            style={styles.logo}
          >
            <MicrophoneIcon size={60} color="#000000" />
          </LinearGradient>
        </Animated.View>

        <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
          <Text style={styles.title}>Pitch to Me</Text>
          <Text style={styles.subtitle}>Transformez Votre Voix en Pouvoir</Text>
        </Animated.View>

        <View style={styles.loadingContainer}>
          <View style={styles.loadingDots}>
            <Animated.View 
              style={[
                styles.dot, 
                { 
                  transform: [{ scale: dot1Scale }],
                  backgroundColor: '#F4C056',
                }
              ]} 
            />
            <Animated.View 
              style={[
                styles.dot, 
                { 
                  transform: [{ scale: dot2Scale }],
                  backgroundColor: '#35D0FF',
                }
              ]} 
            />
            <Animated.View 
              style={[
                styles.dot, 
                { 
                  transform: [{ scale: dot3Scale }],
                  backgroundColor: '#A855F7',
                }
              ]} 
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F4C056',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  logoText: {
    fontSize: 60,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 100,
  },
  loadingDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F4C056',
    marginHorizontal: 4,
  },

});
