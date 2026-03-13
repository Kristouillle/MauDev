export type Locale = 'fr' | 'en';

export const isLocale = (value: unknown): value is Locale => value === 'fr' || value === 'en';

export const siteContent = {
  fr: {
    meta_description: 'MauDev est un développeur immobilier axé sur la durabilité et l’impact positif.',
    languageLabel: 'Français',
    alternateLanguageLabel: 'English',
    navigation: [
      { href: '/fr', label: 'Présentation' },
      { href: '/fr/about', label: 'À propos' },
      { href: '/fr/projects', label: 'Projets' },
      { href: '/fr/contact', label: 'Contact' }
    ],
    home: {
      title: 'Construire avec vision.',
      meta_description:'MauDev est un développeur immobilier axé sur la durabilité et l’impact positif.',
      intro:'Nous créons des projets immobiliers durables qui inspirent confiance aux investisseurs et aux communautés.'
    },
    about: {
      title: 'À propos de nous',
      meta_description:'Notre équipe combine expertise en développement, finance et exécution de chantier pour livrer des projets à fort impact.',
      body:
        'Notre équipe combine expertise en développement, finance et exécution de chantier pour livrer des projets à fort impact.'
    },
    projects: {
      title: 'Nos projets',
      subtitle: 'Cliquez sur un projet pour voir plus de détails.',
      meta_description:'Découvrez nos projets immobiliers durables et innovants.',
      modalCta: 'Voir les détails',
      close: 'Fermer'
    },
    contact: {
      title: 'Contact',
      intro: 'Parlez-nous de votre prochaine opportunité.',
      meta_description:'Contactez-nous pour discuter de votre prochaine opportunité.',
      emailLabel: 'Courriel',
      phoneLabel: 'Téléphone'
    },
    footer: '© 2026 MauDev — Tous droits réservés.',
    cookieBanner: {
      title: 'Préférences de confidentialité',
      description: 'Nous utilisons des témoins pour mesurer l’audience du site. Vous pouvez accepter ou refuser les cookies analytiques.',
      accept: 'Accepter',
      reject: 'Refuser',
      personalize:'Personnaliser',
      essentials: 'Essentiels au fonctionnement du site.',
      analytics: 'Les cookies analytiques nous aident à comprendre comment les visiteurs interagissent avec notre site pour améliorer l’expérience utilisateur.',
      saveBtn: 'Enregistrer les préférences',
      ip_notice:'Nous recueillons votre adresse IP à des fins de sécurité et d’analyse. Conformément à la lois sur la protection des données, nous ne partageons pas cette information avec des tiers et nous la conservons uniquement pour la durée nécessaire à ces fins.'
    }
    
  },
  en: {
    meta_description: 'MauDev is a real estate developer focused on sustainability and positive impact.',
    languageLabel: 'English',
    alternateLanguageLabel: 'Français',
    navigation: [
      { href: '/en', label: 'Overview' },
      { href: '/en/about', label: 'About us' },
      { href: '/en/projects', label: 'Projects' },
      { href: '/en/contact', label: 'Contact' }
    ],
    home: {
      title: 'Building with vision.',
      meta_description:'MauDev is a real estate developer focused on sustainability and positive impact.',
      intro:
        'We develop sustainable real-estate projects that inspire confidence for investors and communities.'
    },
    about: {
      title: 'About us',
      meta_description:'Our team combines development, finance and construction expertise to deliver high-impact projects.',
      body:
        'Our team combines development, finance and construction expertise to deliver high-impact projects.'
    },
    projects: {
      title: 'Our projects',
      subtitle: 'Click a project to view more details.',
      modalCta: 'View details',
      close: 'Close',
      meta_description:'Discover our sustainable and innovative real estate projects.',
    },
    contact: {
      title: 'Contact',
      meta_description:'Get in touch with us to discuss your next opportunity.',
      intro: 'Tell us about your next opportunity.',
      emailLabel: 'Email',
      phoneLabel: 'Phone'
    },
    footer: '© 2026 MauDev — All rights reserved.',
    cookieBanner: {
      title: 'Privacy preferences',
      description:
        'We use cookies to measure site traffic. You can accept or reject analytics cookies.',
      accept: 'Accept',
      reject: 'Reject',
      personalize:'Personalize',      
      essentials: 'Essentials for site functionality.',
      analytics: 'Analytics cookies help us understand how visitors interact with our site to improve user experience.',
      saveBtn: 'Save preferences',
      ip_notice:'We collect your IP address for security and analytics purposes. In accordance with data protection laws, we do not share this information with third parties and we retain it only for as long as necessary for these purposes.'
    }
  }
} as const;
