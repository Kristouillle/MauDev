export type LocalizedText = {
  fr: string;
  en: string;
};

export type LocalizedOrPlainText = LocalizedText | string;

export type ProjectFact = {
  label: LocalizedText;
  value: LocalizedOrPlainText;
};

export type Project = {
  id: string;
  category: LocalizedText;
  city: LocalizedText;
  province: LocalizedText;
  addressNumber: LocalizedOrPlainText;
  addressStreet: LocalizedOrPlainText;
  title: LocalizedText;
  status: LocalizedText;
  detailsIntro: LocalizedText;
  detailsBody: LocalizedText;
  facts: ProjectFact[];
  gallery: string[];
};

const same = (value: string): LocalizedText => ({ fr: value, en: value });

const fact = (frLabel: string, enLabel: string, value: LocalizedOrPlainText): ProjectFact => ({
  label: { fr: frLabel, en: enLabel },
  value
});

const delivered = { fr: 'Livré', en: 'Delivered' };
const inDevelopment = { fr: 'À venir', en: 'Upcoming' };

const projectGalleryMap = {
  '110-alphonse-desjardins': ['/images/projects/110-alphonse-desjardins.jpg'],
  '94-saint-louis': ['/images/projects/94-saint-louis.jpg'],
  '145-salaberry': ['/images/projects/145-salaberry.jpg'],
  'pierre-paul-messier': ['/images/projects/pierre-paul-messier.jpg'],
  '47-nicholson': ['/images/projects/47-nicholson.jpg'],
  '5515-pierre-dansereau': ['/images/projects/5515-pierre-dansereau.jpg'],
  '5593-pierre-dansereau': ['/images/projects/5593-pierre-dansereau.jpg'],
  '2055-61-chemin-ridge': ['/images/projects/2055-61-chemin-ridge.jpg'],
  '4a-b-henderson': ['/images/projects/4a-b-henderson.jpg'],
  '110-ste-cecile': ['/images/projects/110-ste-cecile.jpg'],
  '142-saint-joseph': ['/images/projects/142-saint-joseph.jpg'],
  '19-hermine': ['/images/projects/19-hermine.jpg'],
  '116-saint-jean-baptiste': ['/images/projects/116-saint-jean-baptiste.jpg'],
  '82-90-dalhousie': ['/images/projects/82-90-dalhousie.jpg']
} as const;

const gallery = (id: keyof typeof projectGalleryMap) => [...projectGalleryMap[id]];

export const projects: Project[] = [
  {
    id: '110-alphonse-desjardins',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '110',
    addressStreet: same('Alphonse-Desjardins'),
    title: same('110 Alphonse-Desjardins'),
    status: delivered,
    detailsIntro: {
      fr: 'Projet résidentiel livré à Salaberry-de-Valleyfield.',
      en: 'Completed residential project in Salaberry-de-Valleyfield.'
    },
    detailsBody: {
      fr: 'Un immeuble résidentiel compact de 23 unités qui s\'inscrit dans la présence croissante de MauDev à Valleyfield.',
      en: 'A compact 23-unit residential building that strengthens MauDev\'s growing presence in Valleyfield.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Programme', 'Program', { fr: 'Résidentiel', en: 'Residential' }),
      fact('Bâtiments', 'Buildings', '1'),
      fact('Unités résidentielles', 'Residential units', '23')
    ],
    gallery: gallery('110-alphonse-desjardins')
  },
  {
    id: '94-saint-louis',
    category: same('Saint-Eustache'),
    city: same('Saint-Eustache'),
    province: same('QC'),
    addressNumber: '94',
    addressStreet: same('Saint-Louis'),
    title: same('94 Saint-Louis'),
    status: delivered,
    detailsIntro: {
      fr: 'Projet mixte livré à Saint-Eustache.',
      en: 'Completed mixed-use project in Saint-Eustache.'
    },
    detailsBody: {
      fr: 'Un petit immeuble mixte réunissant 6 logements et 2 espaces commerciaux dans un format de proximité.',
      en: 'A small mixed-use building bringing together 6 homes and 2 commercial spaces in a neighborhood-scale format.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Programme', 'Program', { fr: 'Mixte', en: 'Mixed-use' }),
      fact('Bâtiments', 'Buildings', '1'),
      fact('Logements', 'Residential units', '6'),
      fact('Espaces commerciaux', 'Commercial spaces', '2')
    ],
    gallery: gallery('94-saint-louis')
  },
  {
    id: '145-salaberry',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '145',
    addressStreet: same('Salaberry'),
    title: same('145 Salaberry'),
    status: delivered,
    detailsIntro: {
      fr: 'Actif mixte livré à Salaberry-de-Valleyfield.',
      en: 'Completed mixed-use asset in Salaberry-de-Valleyfield.'
    },
    detailsBody: {
      fr: 'Un actif mixte qui combine une base résidentielle dense à une composante commerciale de 10 000 pi².',
      en: 'A mixed-use asset that combines a dense residential base with 10,000 sq. ft. of commercial area.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Programme', 'Program', { fr: 'Mixte', en: 'Mixed-use' }),
      fact('Logements', 'Residential units', '41'),
      fact('Surface commerciale', 'Commercial area', { fr: '10 000 pi²', en: '10,000 sq. ft.' })
    ],
    gallery: gallery('145-salaberry')
  },
  {
    id: 'pierre-paul-messier',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '',
    addressStreet: same('Pierre-Paul Messier'),
    title: same('Pierre-Paul Messier'),
    status: { fr: '2 phases livrées', en: '2 phases delivered' },
    detailsIntro: {
      fr: 'Projet phasé à Salaberry-de-Valleyfield.',
      en: 'Phased project in Salaberry-de-Valleyfield.'
    },
    detailsBody: {
      fr: 'Un développement résidentiel phasé conçu pour croître sur plusieurs bâtiments, avec deux phases déjà complétées.',
      en: 'A phased residential development designed to scale across multiple buildings, with two phases already completed.'
    },
    facts: [
      fact('Statut', 'Status', { fr: '2 phases livrées', en: '2 phases delivered' }),
      fact('Programme', 'Program', { fr: 'Résidentiel phasé', en: 'Phased residential' }),
      fact('Bâtiments', 'Buildings', '6'),
      fact('Unités par phase', 'Units per phase', '32'),
      fact('Phases terminées', 'Completed phases', '2')
    ],
    gallery: gallery('pierre-paul-messier')
  },
  {
    id: '47-nicholson',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '47',
    addressStreet: same('Nicholson'),
    title: same('47 Nicholson'),
    status: delivered,
    detailsIntro: {
      fr: 'Actif rénové dans le portefeuille de projets antérieurs de MauDev.',
      en: 'Renovated asset within MauDev\'s completed-project portfolio.'
    },
    detailsBody: {
      fr: 'Un bâtiment existant repositionné grâce à une rénovation réalisée en 2022.',
      en: 'An existing building repositioned through a renovation completed in 2022.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Bâtiments', 'Buildings', '1'),
      fact('Surface du bâtiment', 'Building area', { fr: '± 12 000 pi²', en: '± 12,000 sq. ft.' }),
      fact('Échéancier', 'Timeline', { fr: 'Rénovation 2022', en: 'Renovation 2022' })
    ],
    gallery: gallery('47-nicholson')
  },
  {
    id: '5515-pierre-dansereau',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '5515',
    addressStreet: same('Pierre-Dansereau'),
    title: same('5515 Pierre-Dansereau'),
    status: delivered,
    detailsIntro: {
      fr: 'Projet construit à Salaberry-de-Valleyfield dans le volet commercial et industriel de MauDev.',
      en: 'Constructed project in Salaberry-de-Valleyfield within MauDev\'s commercial and industrial track record.'
    },
    detailsBody: {
      fr: 'Un bâtiment de plus grand gabarit livré en 2023 dans le volet commercial et industriel de MauDev.',
      en: 'A larger-format building delivered in 2023 within MauDev\'s commercial and industrial portfolio.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Bâtiments', 'Buildings', '1'),
      fact('Surface du bâtiment', 'Building area', { fr: '± 30 000 pi²', en: '± 30,000 sq. ft.' }),
      fact('Échéancier', 'Timeline', { fr: 'Construction 2023', en: 'Construction 2023' })
    ],
    gallery: gallery('5515-pierre-dansereau')
  },
  {
    id: '5593-pierre-dansereau',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '5593',
    addressStreet: same('Pierre-Dansereau'),
    title: same('5593 Pierre-Dansereau'),
    status: { fr: 'Construit en 2025', en: 'Built in 2025' },
    detailsIntro: {
      fr: 'Projet récent du portefeuille de Salaberry-de-Valleyfield.',
      en: 'Recent project within the Salaberry-de-Valleyfield portfolio.'
    },
    detailsBody: {
      fr: 'Un projet récent qui étend l\'empreinte de MauDev dans le secteur Pierre-Dansereau.',
      en: 'A recent project that expands MauDev\'s footprint in the Pierre-Dansereau corridor.'
    },
    facts: [
      fact('Statut', 'Status', { fr: 'Construit en 2025', en: 'Built in 2025' }),
      fact('Bâtiments', 'Buildings', '1'),
      fact('Surface du bâtiment', 'Building area', { fr: '± 42 000 pi²', en: '± 42,000 sq. ft.' }),
      fact('Échéancier', 'Timeline', { fr: 'Construction 2025', en: 'Construction 2025' })
    ],
    gallery: gallery('5593-pierre-dansereau')
  },
  {
    id: '2055-61-chemin-ridge',
    category: same('Huntingdon'),
    city: same('Huntingdon'),
    province: same('QC'),
    addressNumber: '2055-61',
    addressStreet: same('Chemin Ridge'),
    title: same('2055-61 Chemin Ridge'),
    status: delivered,
    detailsIntro: {
      fr: 'Projet mixte livré à Huntingdon.',
      en: 'Completed mixed-use project in Huntingdon.'
    },
    detailsBody: {
      fr: 'Un ensemble mixte qui répartit logements et espaces commerciaux sur quatre bâtiments distincts.',
      en: 'A mixed-use cluster that distributes homes and commercial space across four distinct buildings.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Programme', 'Program', { fr: 'Mixte', en: 'Mixed-use' }),
      fact('Bâtiments', 'Buildings', '4'),
      fact('Logements', 'Residential units', '42'),
      fact('Espaces commerciaux', 'Commercial spaces', '6')
    ],
    gallery: gallery('2055-61-chemin-ridge')
  },
  {
    id: '4a-b-henderson',
    category: same('Huntingdon'),
    city: same('Huntingdon'),
    province: same('QC'),
    addressNumber: '4A-B',
    addressStreet: same('Henderson'),
    title: same('4A-B Henderson'),
    status: delivered,
    detailsIntro: {
      fr: 'Projet résidentiel livré à Huntingdon.',
      en: 'Completed residential project in Huntingdon.'
    },
    detailsBody: {
      fr: 'Un projet résidentiel de deux bâtiments dimensionné pour répondre à la demande locative locale.',
      en: 'A two-building residential project sized to serve local rental demand.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Programme', 'Program', { fr: 'Résidentiel', en: 'Residential' }),
      fact('Bâtiments', 'Buildings', '2'),
      fact('Unités résidentielles', 'Residential units', '32')
    ],
    gallery: gallery('4a-b-henderson')
  },
  {
    id: '110-ste-cecile',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '110',
    addressStreet: same('Ste-Cécile'),
    title: same('110 Ste-Cécile'),
    status: delivered,
    detailsIntro: {
      fr: 'Projet mixte livré à Salaberry-de-Valleyfield.',
      en: 'Completed mixed-use project in Salaberry-de-Valleyfield.'
    },
    detailsBody: {
      fr: 'Un immeuble mixte qui associe 24 logements à une composante commerciale en rez-de-chaussée.',
      en: 'A mixed-use building pairing 24 residential units with a ground-floor commercial component.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Programme', 'Program', { fr: 'Mixte', en: 'Mixed-use' }),
      fact('Bâtiments', 'Buildings', '1'),
      fact('Logements', 'Residential units', '24'),
      fact('Locaux commerciaux', 'Commercial spaces', '2')
    ],
    gallery: gallery('110-ste-cecile')
  },
  {
    id: '142-saint-joseph',
    category: same('Sainte-Martine'),
    city: same('Sainte-Martine'),
    province: same('QC'),
    addressNumber: '142',
    addressStreet: same('Saint-Joseph'),
    title: same('142 Saint-Joseph'),
    status: delivered,
    detailsIntro: {
      fr: 'Projet structuré à Sainte-Martine avec locataire ancré.',
      en: 'Structured project in Sainte-Martine with an anchor tenant.'
    },
    detailsBody: {
      fr: 'Un projet structuré autour de 12 unités résidentielles, d\'un locataire ancré et d\'une approche de montage créative.',
      en: 'A structured project built around 12 residential units, an anchor tenant, and a creative deal setup.'
    },
    facts: [
      fact('Statut', 'Status', delivered),
      fact('Programme', 'Program', { fr: 'Résidentiel avec locataire ancré', en: 'Residential with anchor tenant' }),
      fact('Unités résidentielles', 'Residential units', '12'),
      fact('Locataire', 'Tenant', { fr: 'Caisse Populaire Desjardins', en: 'Caisse Populaire Desjardins' }),
      fact('Structure', 'Structure', { fr: 'Subdivision du lot initial', en: 'Subdivision of the initial lot' }),
      fact('Note d\'investissement', 'Investment note', { fr: 'Mise de fonds remboursée (no cash deal)', en: 'Equity reimbursed (no cash deal)' })
    ],
    gallery: gallery('142-saint-joseph')
  },
  {
    id: '19-hermine',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '19',
    addressStreet: same('Hermine'),
    title: same('19 Hermine'),
    status: inDevelopment,
    detailsIntro: {
      fr: 'Projet à venir à Salaberry-de-Valleyfield.',
      en: 'Upcoming project in Salaberry-de-Valleyfield.'
    },
    detailsBody: {
      fr: 'Un développement résidentiel à venir qui ajoutera 54 unités au marché de Valleyfield.',
      en: 'An upcoming residential development planned to add 54 units to the Valleyfield market.'
    },
    facts: [
      fact('Statut', 'Status', inDevelopment),
      fact('Programme', 'Program', { fr: 'Résidentiel', en: 'Residential' }),
      fact('Unités résidentielles', 'Residential units', '54')
    ],
    gallery: gallery('19-hermine')
  },
  {
    id: '116-saint-jean-baptiste',
    category: same('Salaberry-de-Valleyfield'),
    city: same('Salaberry-de-Valleyfield'),
    province: same('QC'),
    addressNumber: '116',
    addressStreet: same('Saint-Jean-Baptiste'),
    title: same('116 Saint-Jean-Baptiste'),
    status: inDevelopment,
    detailsIntro: {
      fr: 'Projet résidentiel à venir à Salaberry-de-Valleyfield.',
      en: 'Upcoming residential project in Salaberry-de-Valleyfield.'
    },
    detailsBody: {
      fr: 'Un projet résidentiel à venir de 32 unités pensé comme ajout ciblé au tissu urbain existant.',
      en: 'An upcoming 32-unit residential project conceived as a focused addition to the existing urban fabric.'
    },
    facts: [
      fact('Statut', 'Status', inDevelopment),
      fact('Programme', 'Program', { fr: 'Résidentiel', en: 'Residential' }),
      fact('Unités résidentielles', 'Residential units', '32')
    ],
    gallery: gallery('116-saint-jean-baptiste')
  },
  {
    id: '82-90-dalhousie',
    category: same('Huntingdon'),
    city: same('Huntingdon'),
    province: same('QC'),
    addressNumber: '82-90',
    addressStreet: same('Dalhousie'),
    title: same('82-90 Dalhousie'),
    status: inDevelopment,
    detailsIntro: {
      fr: 'Projet résidentiel à venir à Huntingdon.',
      en: 'Upcoming residential project in Huntingdon.'
    },
    detailsBody: {
      fr: 'Un développement résidentiel multi-phases appelé à livrer 170 unités sur cinq étapes successives.',
      en: 'A multi-phase residential development set to deliver 170 units across five successive phases.'
    },
    facts: [
      fact('Statut', 'Status', inDevelopment),
      fact('Programme', 'Program', { fr: 'Résidentiel', en: 'Residential' }),
      fact('Unités résidentielles', 'Residential units', '170'),
      fact('Phases', 'Phases', '5')
    ],
    gallery: gallery('82-90-dalhousie')
  }
];
