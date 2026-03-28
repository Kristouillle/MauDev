export type Locale = 'fr' | 'en';

export const isLocale = (value: unknown): value is Locale => value === 'fr' || value === 'en';

type PageLocaleContent = {
  nav: {
    projects: string;
    about: string;
  };
  home: {
    heroDescription: string;
    tickerItems: string[];
    institutionalTitle: string;
    trustStatement: string;
    projects: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      image: string;
      seeMore: string;
    }>;
    links: {
      investing: string;
      projects: string;
      howToInvest: string;
    };
    steps: Array<{
      title: string;
      body: string;
      iconMask: string;
    }>;
  };
  about: {
    title: string;
    intro: string;
    capitalLabel: string;
    capitalValue: string;
    formulaHeading: string;
    formulaSteps: Array<{
      label: string;
      body: string;
    }>;
    valuesHeading: string;
    values: Array<{
      title: string;
      body: string;
    }>;
    teamTitle: string;
    teamBody: string;
  };
};

export const homeAssets = {
  iconMask1: '/images/blueprint.png',
  iconMask2: '/images/investment.png',
  iconMask3: '/images/construction.png',
  iconMask4: '/images/cashout.png'
} as const;

export const pageContent: Record<Locale, PageLocaleContent> = {
  en: {
    nav: {
      projects: 'Projects',
      about: 'Our model'
    },
    home: {
      heroDescription:
        'MauDev is a family real estate developer and general contractor that sources sites, unlocks density, builds, leases, and manages assets through one integrated platform.',
      tickerItems: [
        '483 homes built',
        '136,000 sq. ft. of commercial and industrial space delivered',
        '151 homes under construction',
        '$30M of 2025 construction volume',
        '776 homes in development'
      ],
      institutionalTitle: 'From acquisition to day-to-day management',
      trustStatement:
        'A growing track record of delivered and upcoming projects across Quebec local markets.',
      projects: [
        {
          id: '110-alphonse-desjardins',
          title: '110 Alphonse-Desjardins',
          subtitle: 'Salaberry-de-Valleyfield',
          description:
            'A completed 23-unit residential building that shows MauDev\'s execution in local rental housing.',
          image: '/images/projects/110-alphonse-desjardins.jpg',
          seeMore: 'See project'
        },
        {
          id: '145-salaberry',
          title: '145 Salaberry',
          subtitle: 'Salaberry-de-Valleyfield',
          description:
            'A mixed-use asset combining 41 homes with 10,000 sq. ft. of commercial space.',
          image: '/images/projects/145-salaberry.jpg',
          seeMore: 'See project'
        },
        {
          id: '82-90-dalhousie',
          title: '82-90 Dalhousie',
          subtitle: 'Huntingdon',
          description:
            'An upcoming five-phase development totaling 170 residential units in MauDev\'s forward pipeline.',
          image: '/images/projects/82-90-dalhousie.jpg',
          seeMore: 'See project'
        }
      ],
      links: {
        investing: 'Our model',
        projects: 'Projects',
        howToInvest: 'Discuss an opportunity'
      },
      steps: [
        {
          title: 'The site',
          body: 'We buy well, identify density upside, and move planning and zoning work forward before construction begins.',
          iconMask: homeAssets.iconMask1
        },
        {
          title: 'The capital',
          body: 'MauDev structures financing, manages CMHC files, and keeps cost control tight from day one.',
          iconMask: homeAssets.iconMask2
        },
        {
          title: 'The construction',
          body: 'Integrated partners strengthen control over excavation risk, materials, schedule, and field execution.',
          iconMask: homeAssets.iconMask3
        },
        {
          title: 'The operations',
          body: 'The team handles leasing, day-to-day management, bookkeeping, and year-end reporting in house.',
          iconMask: homeAssets.iconMask4
        }
      ]
    },
    about: {
      title: 'Our integrated model',
      intro:
        'MauDev is a family-owned developer and general contractor built for long-term execution. The team combines acquisition, densification, financing, construction, leasing, and administration under one roof to reduce friction and protect investor returns.',
      capitalLabel: '2025 construction volume',
      capitalValue: '30m$',
      formulaHeading: 'One integrated platform',
      formulaSteps: [
        {
          label: 'Acquire & densify',
          body: 'MauDev targets sites at a favorable land basis and creates value through zoning work, densification, and disciplined market selection.'
        },
        {
          label: 'Finance & build',
          body: 'The team manages financing, tendering, contracts, and site execution, while Trexco and Distributions M. Dion improve control over risk, pricing, and supply.'
        },
        {
          label: 'Lease & manage',
          body: 'MauDev carries the asset through tenant selection, lease-up, administration, quarterly statements, and year-end reporting.'
        }
      ],
      valuesHeading: 'Why investors partner with MauDev',
      values: [
        {
          title: 'Long-term vision',
          body: 'As a family business, MauDev develops assets with a long view of quality, durability, and investor alignment.'
        },
        {
          title: 'Transparency',
          body: 'The company emphasizes clear communication, disciplined reporting, and visible accountability throughout the project lifecycle.'
        },
        {
          title: 'Vertical integration',
          body: 'Trexco and Distributions M. Dion improve control over excavation risk, supply, pricing, and construction execution.'
        },
        {
          title: 'Local market discipline',
          body: 'MauDev focuses on local markets with strong rental demand, stable pricing, and identifiable value-add opportunities.'
        }
      ],
      teamTitle: 'Leadership',
      teamBody:
        'MauDev is led by Alexandre Paquin, President - Finance, Jean-Christophe Paquin, President - Development, and Samuel Brisson, President - Construction. The broader team also includes Pierre-Hugue in development, Stéphanie Grenon in finance, and Marc-André Dion in business development.'
    }
  },
  fr: {
    nav: {
      projects: 'Projets',
      about: 'Notre modèle'
    },
    home: {
      heroDescription:
        'MauDev est un développeur immobilier familial et entrepreneur général qui repère des sites, optimise leur densification, construit, loue et gère les actifs au sein d\'une même plateforme intégrée.',
      tickerItems: [
        '483 logements construits',
        '136 000 pi² commercial et industriel livrés',
        '151 logements en construction',
        '30 M$ en volume de construction 2025',
        '776 logements en développement'
      ],
      institutionalTitle: 'De l\'acquisition à la gestion quotidienne',
      trustStatement:
        'Un historique de projets livrés et un pipeline actif dans des marchés locatifs locaux du Québec.',
      projects: [
        {
          id: '110-alphonse-desjardins',
          title: '110 Alphonse-Desjardins',
          subtitle: 'Salaberry-de-Valleyfield',
          description:
            'Un immeuble résidentiel livré de 23 unités qui illustre l\'exécution de MauDev en logement locatif.',
          image: '/images/projects/110-alphonse-desjardins.jpg',
          seeMore: 'Voir le projet'
        },
        {
          id: '145-salaberry',
          title: '145 Salaberry',
          subtitle: 'Salaberry-de-Valleyfield',
          description:
            'Un actif mixte combinant 41 logements et 10 000 pi² d\'espaces commerciaux.',
          image: '/images/projects/145-salaberry.jpg',
          seeMore: 'Voir le projet'
        },
        {
          id: '82-90-dalhousie',
          title: '82-90 Dalhousie',
          subtitle: 'Huntingdon',
          description:
            'Un développement à venir de 170 logements répartis en 5 phases au cœur du pipeline MauDev.',
          image: '/images/projects/82-90-dalhousie.jpg',
          seeMore: 'Voir le projet'
        }
      ],
      links: {
        investing: 'Notre modèle',
        projects: 'Projets',
        howToInvest: 'Parler à l\'équipe'
      },
      steps: [
        {
          title: 'Le site',
          body: 'Nous achetons au bon prix, repérons le potentiel de densification et faisons progresser le zonage avant le chantier.',
          iconMask: homeAssets.iconMask1
        },
        {
          title: 'Le capital',
          body: 'MauDev structure le financement, gère les dossiers SCHL et maintient un contrôle serré des coûts dès le départ.',
          iconMask: homeAssets.iconMask2
        },
        {
          title: 'La construction',
          body: 'Les partenaires intégrés renforcent le contrôle du risque d\'excavation, des matériaux, de l\'échéancier et de l\'exécution.',
          iconMask: homeAssets.iconMask3
        },
        {
          title: 'L\'exploitation',
          body: 'L\'équipe prend en charge la location, la gestion quotidienne, la tenue de livres et les rapports de fin d\'année.',
          iconMask: homeAssets.iconMask4
        }
      ]
    },
    about: {
      title: 'Notre modèle intégré',
      intro:
        'MauDev est un développeur familial et entrepreneur général conçu pour l\'exécution à long terme. L\'équipe réunit l\'acquisition, la densification, le financement, la construction, la location et l\'administration sous un même toit afin de réduire la friction et de protéger le rendement des investisseurs.',
      capitalLabel: 'Volume de construction 2025',
      capitalValue: '30m$',
      formulaHeading: 'Une seule plateforme intégrée',
      formulaSteps: [
        {
          label: 'Acquérir et densifier',
          body: 'MauDev cible des sites à bon prix et crée de la valeur grâce au zonage, à la densification et à une sélection disciplinée des marchés.'
        },
        {
          label: 'Financer et construire',
          body: 'L\'équipe gère le financement, les appels d\'offres, les contrats et le chantier, tandis que Trexco et Les Distributions M. Dion améliorent le contrôle du risque, des prix et de l\'approvisionnement.'
        },
        {
          label: 'Louer et administrer',
          body: 'MauDev accompagne l\'actif jusqu\'à la sélection des locataires, la location, l\'administration, les états trimestriels et les rapports de fin d\'année.'
        }
      ],
      valuesHeading: 'Pourquoi les investisseurs choisissent MauDev',
      values: [
        {
          title: 'Vision long terme',
          body: 'Comme entreprise familiale, MauDev développe des actifs avec une vision durable de la qualité, de la pérennité et de l\'alignement avec les investisseurs.'
        },
        {
          title: 'Transparence',
          body: 'L\'entreprise privilégie une communication claire, une reddition de comptes disciplinée et une responsabilité visible tout au long du cycle du projet.'
        },
        {
          title: 'Intégration verticale',
          body: 'Trexco et Les Distributions M. Dion améliorent le contrôle du risque d\'excavation, de l\'approvisionnement, des prix et de l\'exécution en chantier.'
        },
        {
          title: 'Discipline de marché',
          body: 'MauDev se concentre sur des marchés locaux où la demande locative est forte, les prix stables et les occasions de création de valeur bien identifiées.'
        }
      ],
      teamTitle: 'Équipe de direction',
      teamBody:
        'MauDev est dirigée par Alexandre Paquin, président - finances, Jean-Christophe Paquin, président - développement, et Samuel Brisson, président - construction. L\'équipe élargie comprend aussi Pierre-Hugue au développement, Stéphanie Grenon aux finances et Marc-André Dion au développement des affaires.'
    }
  }
};
