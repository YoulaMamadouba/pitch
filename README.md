# Pitch to Me - Application React Native Expo

Une application e-learning innovante pour s'entraîner à la prise de parole en public, alimentée par l'IA et proposant des modules interactifs, un coach virtuel, des scènes VR, un système de quiz, une analyse vocale et un fil communautaire.

## 🚀 Fonctionnalités

### Écrans principaux implémentés :
- ✅ **Splash Screen** - Écran de démarrage avec animation
- ✅ **Landing Page** - Page d'accueil avec navigation vers B2C/B2B
- ✅ **Login Screen** - Connexion utilisateur avec validation
- ✅ **B2C Screen** - Formation pour particuliers avec plans d'abonnement

### Écrans en cours de développement :
- 🔄 **B2B Screen** - Solutions pour entreprises
- 🔄 **SignUp Screen** - Inscription utilisateur
- 🔄 **Onboarding** - Configuration initiale avec coach IA
- 🔄 **Dashboard** - Tableau de bord utilisateur
- 🔄 **VR Scene Selection** - Sélection d'environnements VR
- 🔄 **Voice Recording** - Enregistrement de pitch
- 🔄 **Voice Analysis** - Analyse vocale IA
- 🔄 **Module View** - Vue des modules de formation
- 🔄 **Quiz Interface** - Système de quiz interactif
- 🔄 **Community Feed** - Fil communautaire
- 🔄 **Profile** - Profil utilisateur
- 🔄 **Settings** - Paramètres de l'application

## 🛠️ Technologies utilisées

- **React Native** avec **Expo** (compatible web et mobile)
- **TypeScript** pour la sécurité des types
- **React Navigation** pour la navigation entre écrans
- **Expo Linear Gradient** pour les effets visuels
- **Expo AV** pour la gestion audio/vidéo
- **Expo Camera** pour l'enregistrement vidéo
- **React Native Reanimated** pour les animations

## 📱 Compatibilité

- ✅ **Web** (React Native Web)
- ✅ **iOS** (via Expo)
- ✅ **Android** (via Expo)
- ✅ **Responsive Design** - S'adapte à toutes les tailles d'écran

## 🎨 Design System

### Couleurs principales :
- **Primary**: `#F4C056` (Jaune doré)
- **Secondary**: `#35D0FF` (Cyan)
- **Background**: `#0F1C2E` → `#1a2b42` (Dégradé bleu foncé)
- **Text**: `#FFFFFF` (Blanc)
- **Text Secondary**: `#9CA3AF` (Gris clair)

### Composants UI :
- **Button** - Boutons avec variantes (primary, secondary, outline, gradient)
- **Input** - Champs de saisie avec validation
- **Navigation** - Navigation par onglets et stack

## 🚀 Installation et démarrage

### Prérequis :
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Expo CLI

### Installation :
```bash
# Cloner le projet
git clone [url-du-repo]
cd pitch-to-me-app

# Installer les dépendances
npm install

# Démarrer l'application
npm run web      # Pour le web
npm run ios      # Pour iOS (macOS requis)
npm run android  # Pour Android
```

## 📁 Structure du projet

```
src/
├── components/          # Composants UI réutilisables
│   ├── Button.tsx
│   ├── Input.tsx
│   └── index.ts
├── screens/            # Écrans de l'application
│   ├── SplashScreen.tsx
│   ├── LandingScreen.tsx
│   ├── LoginScreen.tsx
│   ├── B2CScreen.tsx
│   └── ...
├── navigation/         # Configuration de la navigation
│   └── AppNavigator.tsx
├── types/             # Types TypeScript
│   └── index.ts
├── utils/             # Utilitaires
└── assets/            # Ressources (images, icônes)
```

## 🔧 Configuration

### Navigation :
L'application utilise React Navigation avec :
- **Stack Navigator** pour la navigation principale
- **Tab Navigator** pour les onglets principaux
- **TypeScript** pour la sécurité des types de navigation

### Responsive Design :
- Utilisation de `useWindowDimensions` pour les dimensions d'écran
- Flexbox pour la mise en page
- Dimensions en pourcentage pour l'adaptabilité

## 🎯 Fonctionnalités à venir

### Phase 1 (En cours) :
- [ ] Écran B2B
- [ ] Écran d'inscription
- [ ] Onboarding avec coach IA
- [ ] Tableau de bord utilisateur

### Phase 2 :
- [ ] Sélection de scènes VR
- [ ] Enregistrement de pitch
- [ ] Analyse vocale IA
- [ ] Système de quiz

### Phase 3 :
- [ ] Fil communautaire
- [ ] Profil utilisateur
- [ ] Paramètres
- [ ] Système de paiement

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support, contactez-nous à :
- Email: support@pitchtome.com
- Site web: https://pitchtome.com

---

**Pitch to Me** - Transform Your Voice Into Power 🎤

