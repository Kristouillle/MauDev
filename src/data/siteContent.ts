export type Locale = 'fr' | 'en';

export const isLocale = (value: unknown): value is Locale => value === 'fr' || value === 'en';

export const siteContent = {
  fr: {
    meta_description:
      'MauDev est un développeur immobilier et entrepreneur général intégré qui prend en charge l\'acquisition, la densification, la construction, la location et la gestion.',
    languageLabel: 'Français',
    alternateLanguageLabel: 'English',
    navigation: [
      { href: '/fr', label: 'Présentation' },
      { href: '/fr/about', label: 'À propos' },
      { href: '/fr/projects', label: 'Projets' },
      { href: '/fr/contact', label: 'Contact' }
    ],
    home: {
      title: 'Développement immobilier et construction intégrée',
      meta_description:
        'MauDev est un développeur immobilier et entrepreneur général intégré qui prend en charge l\'acquisition, la densification, la construction, la location et la gestion.',
      intro:
        'Entreprise familiale, MauDev pilote tout le cycle d\'un projet afin de réduire le risque d\'exécution et d\'optimiser la valeur créée.'
    },
    about: {
      title: 'Notre modèle intégré',
      meta_description:
        'MauDev réunit le développement, le financement, la construction, la location et l\'administration au sein d\'un même modèle intégré.',
      body:
        'MauDev réunit le développement, le financement, la construction, la location et l\'administration au sein d\'un même modèle intégré.'
    },
    projects: {
      title: 'Nos projets',
      subtitle: 'Consultez les projets livrés et à venir de MauDev par municipalité.',
      meta_description:
        'Découvrez les projets livrés et à venir de MauDev à Salaberry-de-Valleyfield, Huntingdon, Saint-Eustache et Sainte-Martine.',
      modalCta: 'Voir les détails',
      close: 'Fermer'
    },
    contact: {
      title: 'Contact',
      intro: 'Parlez-nous d\'un terrain, d\'un partenariat ou d\'une opportunité d\'investissement.',
      meta_description:
        'Contactez MauDev pour discuter d\'un terrain, d\'un partenariat ou d\'une opportunité d\'investissement.',
      emailLabel: 'Courriel',
      phoneLabel: 'Téléphone'
    },
    footer: '© 2026 MauDev - Tous droits réservés.',
    cookieBanner: {
      title: 'Préférences de confidentialité',
      description:
        'Nous utilisons des témoins pour mesurer l\'audience du site. Vous pouvez accepter ou refuser les cookies analytiques.',
      accept: 'Accepter',
      reject: 'Refuser',
      personalize: 'Personnaliser',
      essentials: 'Essentiels au fonctionnement du site.',
      analytics:
        'Les cookies analytiques nous aident à comprendre comment les visiteurs interagissent avec notre site pour améliorer l\'expérience utilisateur.',
      saveBtn: 'Enregistrer les préférences',
      ip_notice:
        'Nous recueillons votre adresse IP à des fins de sécurité et d\'analyse. Conformément aux lois sur la protection des données, nous ne partageons pas cette information avec des tiers et nous la conservons uniquement pour la durée nécessaire à ces fins.'
    }
  },
  en: {
    meta_description:
      'MauDev is an integrated real estate developer and general contractor handling acquisition, densification, construction, leasing, and property management.',
    languageLabel: 'English',
    alternateLanguageLabel: 'Français',
    navigation: [
      { href: '/en', label: 'Overview' },
      { href: '/en/about', label: 'About us' },
      { href: '/en/projects', label: 'Projects' },
      { href: '/en/contact', label: 'Contact' }
    ],
    home: {
      title: 'Real Estate Development & Integrated Construction',
      meta_description:
        'MauDev is an integrated real estate developer and general contractor handling acquisition, densification, construction, leasing, and property management.',
      intro:
        'As a family business, MauDev leads the full project cycle to reduce execution risk and maximize the value created.'
    },
    about: {
      title: 'Our integrated model',
      meta_description:
        'MauDev brings development, financing, construction, leasing, and administration together within one integrated operating model.',
      body:
        'MauDev brings development, financing, construction, leasing, and administration together within one integrated operating model.'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Browse MauDev\'s delivered and upcoming projects by municipality.',
      modalCta: 'View details',
      close: 'Close',
      meta_description:
        'Explore MauDev\'s delivered and upcoming projects across Salaberry-de-Valleyfield, Huntingdon, Saint-Eustache, and Sainte-Martine.'
    },
    contact: {
      title: 'Contact',
      meta_description:
        'Contact MauDev to discuss a site, partnership, or investment opportunity.',
      intro: 'Tell us about a site, partnership, or investment opportunity.',
      emailLabel: 'Email',
      phoneLabel: 'Phone'
    },
    footer: '© 2026 MauDev - All rights reserved.',
    cookieBanner: {
      title: 'Privacy preferences',
      description:
        'We use cookies to measure site traffic. You can accept or reject analytics cookies.',
      accept: 'Accept',
      reject: 'Reject',
      personalize: 'Personalize',
      essentials: 'Essentials for site functionality.',
      analytics:
        'Analytics cookies help us understand how visitors interact with our site to improve user experience.',
      saveBtn: 'Save preferences',
      ip_notice:
        'We collect your IP address for security and analytics purposes. In accordance with data protection laws, we do not share this information with third parties and we retain it only for as long as necessary for these purposes.'
    }
  }
} as const;
