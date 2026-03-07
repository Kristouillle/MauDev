export type Locale = 'fr' | 'en';

export const siteContent = {
  fr: {
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
      intro:
        'Nous créons des projets immobiliers durables qui inspirent confiance aux investisseurs et aux communautés.'
    },
    about: {
      title: 'À propos de nous',
      body:
        'Notre équipe combine expertise en développement, finance et exécution de chantier pour livrer des projets à fort impact.'
    },
    projects: {
      title: 'Nos projets',
      subtitle: 'Cliquez sur un projet pour voir plus de détails.',
      modalCta: 'Voir les détails',
      close: 'Fermer'
    },
    contact: {
      title: 'Contact',
      intro: 'Parlez-nous de votre prochaine opportunité.',
      emailLabel: 'Courriel',
      phoneLabel: 'Téléphone'
    },
    footer: '© 2026 MauDev — Tous droits réservés.',
    cookieBanner: {
      title: 'Préférences de confidentialité',
      description:
        'Nous utilisons des témoins pour mesurer l’audience du site. Vous pouvez accepter ou refuser les cookies analytiques.',
      accept: 'Accepter',
      reject: 'Refuser'
    }
  },
  en: {
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
      intro:
        'We develop sustainable real-estate projects that inspire confidence for investors and communities.'
    },
    about: {
      title: 'About us',
      body:
        'Our team combines development, finance and construction expertise to deliver high-impact projects.'
    },
    projects: {
      title: 'Our projects',
      subtitle: 'Click a project to view more details.',
      modalCta: 'View details',
      close: 'Close'
    },
    contact: {
      title: 'Contact',
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
      reject: 'Reject'
    }
  }
} as const;
