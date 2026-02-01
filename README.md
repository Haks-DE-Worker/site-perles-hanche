# 🌟 Site Perles de Hanche - Landing Page E-commerce

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Une landing page élégante et luxueuse pour la vente de chaînes de hanche en or 18 carats**

Site web moderne et responsive conçu pour présenter et commercialiser des chaînes de hanche de luxe avec une expérience utilisateur raffinée et des animations subtiles.

---

## 📸 Aperçu

Site de vente en ligne proposant une collection exclusive de chaînes de hanche en or (rose, jaune et blanc), avec :
- Design premium noir et or
- Animations fluides et interactives
- Interface entièrement responsive
- Intégration WhatsApp pour les commandes
- Expérience utilisateur immersive

---

## ✨ Fonctionnalités

### 🎨 Interface Utilisateur
- **Design Luxueux** : Palette de couleurs noir/or avec dégradés subtils
- **Animations Sophistiquées** : Effets de survol, transitions fluides, éléments animés
- **Responsive Design** : Optimisé pour mobile, tablette et desktop
- **Dark Theme** : Interface sombre élégante avec accents dorés

### 🛍️ Sections Principales
1. **Hero Section** : Bannière d'accueil captivante avec CTA
2. **Benefits** : 4 avantages clés présentés en grille
3. **Product Showcase** : Galerie d'images des produits
4. **Description** : Présentation détaillée du produit
5. **Testimonials** : Témoignages clients avec système d'étoiles
6. **Pricing** : 3 options de prix (Or Rose, Jaune, Blanc)
7. **CTA** : Call-to-action final
8. **Footer** : Informations de contact et liens

### 🔧 Fonctionnalités Techniques
- **Intégration WhatsApp** : Redirection automatique avec message pré-rempli
- **Sélection de produits** : Système de choix interactif pour les options de prix
- **Optimisation des images** : Support des formats modernes (JFIF, WebP)
- **Icônes Lucide** : Bibliothèque d'icônes modernes

---

## 🚀 Technologies Utilisées

### Frontend Core
- **React 19.2.0** - Framework JavaScript moderne
- **Vite 7.2.4** - Build tool ultra-rapide
- **Tailwind CSS 3.4.17** - Framework CSS utility-first

### Bibliothèques UI
- **Lucide React 0.563.0** - Icônes SVG modernes

### Outils de Développement
- **ESLint 9.39.1** - Linting du code
- **PostCSS 8.5.6** - Transformation CSS
- **Autoprefixer 10.4.24** - Préfixes CSS automatiques

---

## 📋 Prérequis

- **Node.js** : Version 16.x ou supérieure
- **npm** ou **yarn** : Gestionnaire de paquets
- **Git** : Pour le clonage du repository

---

## 🛠️ Installation

### 1️⃣ Cloner le repository

```bash
git clone https://github.com/votre-username/site-perles-hanche.git
cd site-perles-hanche/frontend
```

### 2️⃣ Installer les dépendances

```bash
npm install
# ou
yarn install
```

### 3️⃣ Lancer le serveur de développement

```bash
npm start
# ou
yarn start
```

---

## 📄 Structure du projet

- **frontend/**
  - **public/**                  # Fichiers statiques
    - **images/**             # Images des produits
    - **chaine1.jfif**
    - **chaine2.jfif**
    - **chaine4.webp**
    - **chaine5.webp**
  - **src/**                     # Code source
    - **components/**          # Composants React
      - **Hero.jsx**        # Section héro
      - **Benefits.jsx**    # Section bénéfices
      - **ProductShowCase.jsx** # Galerie produits
      - **Description.jsx**  # Description détaillée
      - **Testimonials.jsx** # Témoignages clients
      - **Pricing.jsx**     # Options de prix
      - **CTA.jsx**         # Call-to-action
      - **Footer.jsx**      # Pied de page
    - **App.jsx**             # Composant principal
    - **main.jsx**            # Point d'entrée
    - **App.css**             # Styles App
    - **index.css**           # Styles globaux
  - **index.html**              # Template HTML
  - **package.json**            # Dépendances
  - **vite.config.js**          # Configuration Vite
  - **tailwind.config.js**      # Configuration Tailwind
  - **postcss.config.js**       # Configuration PostCSS
  - **eslint.config.js**        # Configuration ESLint