import type { Locale } from './siteContent';

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
      title: string;
      subtitle: string;
      description: string;
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
  bgVideo: 'https://www.figma.com/api/mcp/asset/e0d71555-63a9-4aa0-b6ae-0e99bf006842',
  projectImage: 'https://www.figma.com/api/mcp/asset/48bc5c3e-7c4b-4ad8-a460-d4f2e34a16c4',
  iconMask1: 'https://www.figma.com/api/mcp/asset/db2d8980-7e45-4a4d-92ca-8c34b9e649e9',
  iconMask2: 'https://www.figma.com/api/mcp/asset/d104c0c1-b6aa-4f8a-b892-ffa1edc176c5',
  iconMask3: 'https://www.figma.com/api/mcp/asset/59526fa9-1678-4fae-9b1a-33689b843572',
  iconMask4: 'https://www.figma.com/api/mcp/asset/7cdd7fdb-a714-4d18-87c2-664c8afe824e'
} as const;

export const pageContent: Record<Locale, PageLocaleContent> = {
  en: {
    nav: {
      projects: "What we've done",
      about: 'How we do it'
    },
    home: {
      heroDescription:
        'Proin lectus nisi, efficitur in ex at, imperdiet consequat massa. Aenean ultrices ut tortor vel porttitor. Vivamus euismod lorem ac tortor placerat varius.',
      tickerItems: [
        'Turn your salary into wealth',
        'Built our portfolio filling your wallet',
        'Helping investors since 2019',
        'Opportunities for first time investors'
      ],
      institutionalTitle: 'Institutional quality for individual investors',
      trustStatement: 'We seek to build lasting partnerships underpinned by trust and credibility.',
      projects: [
        {
          title: '80 Nicholson',
          subtitle: 'The heart of Valleyfield',
          description:
            'Proin aliquam id velit nec pulvinar. Integer non nunc congue, semper nulla id, porta eros. Nam fringilla congue nisi quis vestibulum.',
          seeMore: 'See more'
        },
        {
          title: 'Le 80 Nicholson',
          subtitle: 'Residential',
          description:
            'Mauris malesuada libero vel mi hendrerit, non dictum arcu mattis. Donec varius, odio quis rhoncus posuere, nibh dui luctus metus.',
          seeMore: 'See more'
        },
        {
          title: 'Saint-Charles Lofts',
          subtitle: 'Mixed-use conversion',
          description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; suspendisse faucibus dui vel lorem iaculis.',
          seeMore: 'See more'
        }
      ],
      links: {
        investing: 'Investing',
        projects: 'Projects',
        howToInvest: 'How to invest'
      },
      steps: [
        {
          title: 'The plan',
          body: 'Proin aliquam id velit nec pulvinar. Integer non nunc congue, semper nulla id, porta eros.',
          iconMask: homeAssets.iconMask1
        },
        {
          title: 'The funds',
          body: 'Nam fringilla congue nisi quis vestibulum. Curabitur feugiat leo vitae sapien tristique.',
          iconMask: homeAssets.iconMask2
        },
        {
          title: 'The build',
          body: 'Aenean ultrices ut tortor vel porttitor. Vivamus euismod lorem ac tortor placerat varius.',
          iconMask: homeAssets.iconMask3
        },
        {
          title: 'The cashout',
          body: 'Maecenas volutpat sem non auctor rhoncus. Nunc ac sapien lectus et est imperdiet.',
          iconMask: homeAssets.iconMask4
        }
      ]
    },
    about: {
      title: 'How we do it',
      intro:
        'When we perform for our investors, they entrust us with more capital, support our firm growth, and reinforce our position in alternatives.',
      capitalLabel: 'Capital Under Management',
      capitalValue: 'XXm$',
      formulaHeading: 'Our formula',
      formulaSteps: [
        {
          label: 'Step 1',
          body: 'We start by tristique molestie mauris, eu molestie augue suscipit eget. Aliquam lorem massa, fermentum non aliquet a, ornare a lorem.'
        },
        {
          label: 'Step 2',
          body: 'Morbi ullamcorper ultrices est, vel interdum metus maximus a. Class aptent taciti sociosqu ad litora torquent per conubia.'
        },
        {
          label: 'Step 3',
          body: 'Per inceptos himenaeos, we refine operations, then scale outcomes with disciplined execution and investor transparency.'
        }
      ],
      valuesHeading: 'What we believe in',
      values: [
        {
          title: 'Trust',
          body: 'We communicate clearly with investors at every step and execute with transparency from acquisition to exit.'
        },
        {
          title: 'Accountability',
          body: 'Every project has clear owners, measurable milestones, and disciplined follow-through.'
        },
        {
          title: 'Ingenuity',
          body: 'We solve constraints creatively while protecting fundamentals like risk, quality, and timeline.'
        },
        {
          title: 'Community',
          body: 'We build projects that create durable value for both investors and local neighborhoods.'
        }
      ],
      teamTitle: 'The family behind MauDev',
      teamBody:
        'Donec elementum mauris in aliquet facilisis. Maecenas volutpat sem non auctor rhoncus. Nunc ac sapien lectus. Fusce lobortis nec dui at sagittis. Aenean placerat semper elit ut dignissim. Vivamus sed turpis enim.'
    }
  },
  fr: {
    nav: {
      projects: 'Ce que nous avons réalisé',
      about: 'Comment nous opérons'
    },
    home: {
      heroDescription:
        'Proin lectus nisi, efficitur in ex at, imperdiet consequat massa. Aenean ultrices ut tortor vel porttitor. Vivamus euismod lorem ac tortor placerat varius.',
      tickerItems: [
        'Transformez votre salaire en patrimoine',
        'Un portefeuille bâti pour votre croissance',
        'Investissement depuis 2019',
        'Des opportunités accessibles'
      ],
      institutionalTitle: 'Qualité institutionnelle pour les investisseurs individuels',
      trustStatement: 'Nous bâtissons des partenariats durables fondés sur la confiance et la crédibilité.',
      projects: [
        {
          title: '80 Nicholson',
          subtitle: 'Au cœur de Valleyfield',
          description:
            'Proin aliquam id velit nec pulvinar. Integer non nunc congue, semper nulla id, porta eros. Nam fringilla congue nisi quis vestibulum.',
          seeMore: 'Voir plus'
        },
        {
          title: 'Le 80 Nicholson',
          subtitle: 'Résidentiel',
          description:
            'Mauris malesuada libero vel mi hendrerit, non dictum arcu mattis. Donec varius, odio quis rhoncus posuere, nibh dui luctus metus.',
          seeMore: 'Voir plus'
        },
        {
          title: 'Lofts Saint-Charles',
          subtitle: 'Conversion mixte',
          description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; suspendisse faucibus dui vel lorem iaculis.',
          seeMore: 'Voir plus'
        }
      ],
      links: {
        investing: 'Investir',
        projects: 'Projets',
        howToInvest: 'Comment investir'
      },
      steps: [
        {
          title: 'Le plan',
          body: 'Proin aliquam id velit nec pulvinar. Integer non nunc congue, semper nulla id, porta eros.',
          iconMask: homeAssets.iconMask1
        },
        {
          title: 'Les fonds',
          body: 'Nam fringilla congue nisi quis vestibulum. Curabitur feugiat leo vitae sapien tristique.',
          iconMask: homeAssets.iconMask2
        },
        {
          title: 'La construction',
          body: 'Aenean ultrices ut tortor vel porttitor. Vivamus euismod lorem ac tortor placerat varius.',
          iconMask: homeAssets.iconMask3
        },
        {
          title: 'Le retrait',
          body: 'Maecenas volutpat sem non auctor rhoncus. Nunc ac sapien lectus et est imperdiet.',
          iconMask: homeAssets.iconMask4
        }
      ]
    },
    about: {
      title: 'Comment nous opérons',
      intro:
        'Quand nous livrons des résultats pour nos investisseurs, ils nous confient davantage de capital et soutiennent notre croissance.',
      capitalLabel: 'Capital sous gestion',
      capitalValue: 'XXm$',
      formulaHeading: 'Notre méthode',
      formulaSteps: [
        {
          label: 'Étape 1',
          body: 'Nous commençons par une analyse terrain et une structuration financière précise des opportunités.'
        },
        {
          label: 'Étape 2',
          body: 'Nous exécutons chaque chantier avec rigueur opérationnelle et un suivi serré des risques.'
        },
        {
          label: 'Étape 3',
          body: 'Nous optimisons la sortie et redistribuons la valeur créée dans une logique de long terme.'
        }
      ],
      valuesHeading: 'Nos convictions',
      values: [
        {
          title: 'Confiance',
          body: 'Nous communiquons avec transparence à chaque étape, de l’acquisition à la sortie.'
        },
        {
          title: 'Responsabilité',
          body: 'Chaque projet a des responsables clairs, des jalons mesurables et un suivi rigoureux.'
        },
        {
          title: 'Ingéniosité',
          body: 'Nous résolvons les contraintes de manière créative sans compromettre la qualité ni les délais.'
        },
        {
          title: 'Communauté',
          body: 'Nous créons de la valeur durable pour les investisseurs et les milieux où nous développons.'
        }
      ],
      teamTitle: 'La famille derrière MauDev',
      teamBody:
        'Donec elementum mauris in aliquet facilisis. Maecenas volutpat sem non auctor rhoncus. Nunc ac sapien lectus. Fusce lobortis nec dui at sagittis. Aenean placerat semper elit ut dignissim. Vivamus sed turpis enim.'
    }
  }
};
