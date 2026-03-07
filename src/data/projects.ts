export type LocalizedText = {
  fr: string;
  en: string;
};

export type LocalizedOrPlainText = LocalizedText | string;

export type Project = {
  id: string;
  category: LocalizedText;
  city: LocalizedText;
  province: LocalizedText;
  addressNumber: LocalizedOrPlainText;
  addressStreet: LocalizedOrPlainText;
  title: LocalizedText;
  yearBuilt: string;
  squareFeet: string;
  propertyType: LocalizedText;
  tenant: LocalizedText;
  status: LocalizedText;
  detailsIntro: LocalizedText;
  detailsBody: LocalizedText;
  owner: LocalizedText;
  manager: LocalizedText;
  gallery: string[];
};

const seededGallery = (seed: string) =>
  [1, 2, 3].map((index) => `https://picsum.photos/seed/${seed}-${index}/1600/1100`);

export const projects: Project[] = [
  {
    id: 'griffintown-lofts',
    category: { fr: 'Montréal', en: 'Montreal' },
    city: { fr: 'Montreal', en: 'Montreal' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '2152',
    addressStreet: 'De la Montagne',
    title: { fr: 'Lofts Griffintown', en: 'Griffintown Lofts' },
    yearBuilt: '1870',
    squareFeet: '6175',
    propertyType: { fr: 'Commerce de rue', en: 'Highstreet Retail' },
    tenant: { fr: 'Suit Supply', en: 'Suit Supply' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Cet immeuble est situe sur la rue de la Montagne au coeur du centre-ville.',
      en: 'This building is located on De la Montagne Street in downtown Montreal.'
    },
    detailsBody: {
      fr: 'Construit en 1870 et modernise recemment, le site se distingue par sa facade et son ancrage commercial.',
      en: 'Built in 1870 and recently modernized, the property stands out through its facade and strong retail frontage.'
    },
    owner: { fr: '9352-8198 Quebec Inc.', en: '9352-8198 Quebec Inc.' },
    manager: { fr: 'Keystone Building Management', en: 'Keystone Building Management' },
    gallery: seededGallery('griffintown-lofts')
  },
  {
    id: 'mile-end-hub',
    category: { fr: 'Montréal', en: 'Montreal' },
    city: { fr: 'Montréal', en: 'Montreal' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '1181',
    addressStreet: 'De la Montagne',
    title: { fr: 'Pavillon Mile-End', en: 'Mile End Hub' },
    yearBuilt: '1928',
    squareFeet: '12400',
    propertyType: { fr: 'Bureaux + commerce', en: 'Office + Retail' },
    tenant: { fr: 'Locataires multiples', en: 'Multi-tenant' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Le projet transforme un volume industriel en destination creative.',
      en: 'The project transforms an industrial shell into a creative destination.'
    },
    detailsBody: {
      fr: 'Le programme combine ateliers, bureaux et commerces de proximite avec une exploitation flexible.',
      en: 'The program combines studios, offices, and neighborhood retail with flexible operations.'
    },
    owner: { fr: 'MauDev', en: 'MauDev' },
    manager: { fr: 'Equipe interne', en: 'In-house team' },
    gallery: seededGallery('mile-end-hub')
  },
  {
    id: 'plateau-courtyard',
    category: { fr: 'Montréal', en: 'Montreal' },
    city: { fr: 'Montréal', en: 'Montreal' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '1500',
    addressStreet: 'De Maisonneuve',
    title: { fr: 'Cours du Plateau', en: 'Plateau Courtyard' },
    yearBuilt: '1996',
    squareFeet: '9800',
    propertyType: { fr: 'Residentiel locatif', en: 'Rental Residential' },
    tenant: { fr: 'Residents', en: 'Residents' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Immeuble de moyenne hauteur avec cour commune et commerces animes.',
      en: 'Mid-rise building with a shared courtyard and active storefronts.'
    },
    detailsBody: {
      fr: 'La performance energetique est renforcee par une enveloppe revue et une toiture vegetale.',
      en: 'Energy performance is reinforced through envelope upgrades and a green roof.'
    },
    owner: { fr: 'MauDev', en: 'MauDev' },
    manager: { fr: 'MauDev Operations', en: 'MauDev Operations' },
    gallery: seededGallery('plateau-courtyard')
  },
  {
    id: 'atwater-commons',
    category: { fr: 'Montréal', en: 'Montreal' },
    city: { fr: 'Montréal', en: 'Montreal' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '44',
    addressStreet: 'Saint-Antoine',
    title: { fr: 'Communes Atwater', en: 'Atwater Commons' },
    yearBuilt: '2008',
    squareFeet: '10250',
    propertyType: { fr: 'Mixte', en: 'Mixed-use' },
    tenant: { fr: 'Locataires multiples', en: 'Multi-tenant' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Projet urbain combinant logements et services de proximite.',
      en: 'Urban project combining housing and local services.'
    },
    detailsBody: {
      fr: 'La programmation integre une place pietonne et un pole communautaire.',
      en: 'The program integrates a pedestrian plaza and community hub.'
    },
    owner: { fr: 'Fonds Atwater', en: 'Atwater Fund' },
    manager: { fr: 'Equipe locale', en: 'Local team' },
    gallery: seededGallery('atwater-commons')
  },
  {
    id: 'old-port-terraces',
    category: { fr: 'Quebec City', en: 'Quebec City' },
    city: { fr: 'Quebec City', en: 'Quebec City' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '733',
    addressStreet: 'Cathcart',
    title: { fr: 'Terrasses du Vieux-Port', en: 'Old Port Terraces' },
    yearBuilt: '2012',
    squareFeet: '11400',
    propertyType: { fr: 'Residentiel haut de gamme', en: 'Premium Residential' },
    tenant: { fr: 'Residents', en: 'Residents' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Ensemble residentiel avec terrasses et vues sur le fleuve.',
      en: 'Residential complex with terraces and river views.'
    },
    detailsBody: {
      fr: 'Le rez-de-chaussee anime accueille des commerces de quartier.',
      en: 'The active ground floor hosts neighborhood-facing retail.'
    },
    owner: { fr: 'Quebec City Holdings', en: 'Quebec City Holdings' },
    manager: { fr: 'Riverfront Management', en: 'Riverfront Management' },
    gallery: seededGallery('old-port-terraces')
  },
  {
    id: 'saint-roch-exchange',
    category: { fr: 'Quebec City', en: 'Quebec City' },
    city: { fr: 'Quebec City', en: 'Quebec City' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '1260',
    addressStreet: 'Crescent',
    title: { fr: 'Carrefour Saint-Roch', en: 'Saint Roch Exchange' },
    yearBuilt: '1979',
    squareFeet: '12600',
    propertyType: { fr: 'Bureaux + services', en: 'Office + Services' },
    tenant: { fr: 'Locataires institutionnels', en: 'Institutional Tenants' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Requalification d un ilot majeur en coeur de quartier.',
      en: 'Redevelopment of a key block in the heart of the district.'
    },
    detailsBody: {
      fr: 'Le projet met l accent sur la mobilite active et les plateaux adaptables.',
      en: 'The project emphasizes active mobility and adaptable floorplates.'
    },
    owner: { fr: 'SRX Asset', en: 'SRX Asset' },
    manager: { fr: 'SRX Operations', en: 'SRX Operations' },
    gallery: seededGallery('saint-roch-exchange')
  },
  {
    id: 'cap-blanc-collection',
    category: { fr: 'Quebec City', en: 'Quebec City' },
    city: { fr: 'Quebec City', en: 'Quebec City' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '698',
    addressStreet: 'Sainte-Catherine',
    title: { fr: 'Collection Cap-Blanc', en: 'Cap Blanc Collection' },
    yearBuilt: '1905',
    squareFeet: '7420',
    propertyType: { fr: 'Patrimonial converti', en: 'Heritage Conversion' },
    tenant: { fr: 'Locataires residentiels', en: 'Residential Tenants' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Conversion de batiments patrimoniaux en residences contemporaines.',
      en: 'Conversion of heritage buildings into contemporary residences.'
    },
    detailsBody: {
      fr: 'Les facades historiques ont ete conservees et restaurees.',
      en: 'Historic facades were preserved and carefully restored.'
    },
    owner: { fr: 'Cap-Blanc Patrimoine', en: 'Cap-Blanc Patrimoine' },
    manager: { fr: 'Patrimoine Urbain', en: 'Patrimoine Urbain' },
    gallery: seededGallery('cap-blanc-collection')
  },
  {
    id: 'chomedey-gateway',
    category: { fr: 'Laval', en: 'Laval' },
    city: { fr: 'Laval', en: 'Laval' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '954',
    addressStreet: { fr: 'Sainte-Catherine Ouest', en: 'Sainte-Catherine West' },
    title: { fr: 'Porte Chomedey', en: 'Chomedey Gateway' },
    yearBuilt: '2018',
    squareFeet: '16300',
    propertyType: { fr: 'Campus tertiaire', en: 'Service Campus' },
    tenant: { fr: 'Locataires corporatifs', en: 'Corporate Tenants' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Campus de services avec acces direct aux axes routiers.',
      en: 'Service campus with direct access to major roadways.'
    },
    detailsBody: {
      fr: 'Les espaces sont modules pour accueillir des usages evolutifs.',
      en: 'Spaces are modular to accommodate evolving business uses.'
    },
    owner: { fr: 'Chomedey Investments', en: 'Chomedey Investments' },
    manager: { fr: 'North Axis Property', en: 'North Axis Property' },
    gallery: seededGallery('chomedey-gateway')
  },
  {
    id: 'laval-riverline',
    category: { fr: 'Laval', en: 'Laval' },
    city: { fr: 'Laval', en: 'Laval' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '1449-1455',
    addressStreet: { fr: 'Sainte-Catherine Ouest', en: 'Sainte-Catherine West' },
    title: { fr: 'Parc Riverline', en: 'Laval Riverline' },
    yearBuilt: '2021',
    squareFeet: '18900',
    propertyType: { fr: 'Residentiel + commerces', en: 'Residential + Retail' },
    tenant: { fr: 'Residents + commerces', en: 'Residents + Retail' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Developpement locatif avec promenade riveraine et commerces de quartier.',
      en: 'Rental development with riverside promenade and neighborhood retail.'
    },
    detailsBody: {
      fr: 'Le plan masse privilegie de grands espaces publics amenages.',
      en: 'The master plan prioritizes generous, landscaped public spaces.'
    },
    owner: { fr: 'Riverline GP', en: 'Riverline GP' },
    manager: { fr: 'Riverline Management', en: 'Riverline Management' },
    gallery: seededGallery('laval-riverline')
  },
  {
    id: 'vieux-longueuil-quarter',
    category: { fr: 'Longueuil', en: 'Longueuil' },
    city: { fr: 'Longueuil', en: 'Longueuil' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '1201',
    addressStreet: { fr: 'Sherbrooke Ouest', en: 'Sherbrooke West' },
    title: { fr: 'Quartier Vieux-Longueuil', en: 'Old Longueuil Quarter' },
    yearBuilt: '2004',
    squareFeet: '10860',
    propertyType: { fr: 'Mixte de centre-ville', en: 'Downtown Mixed-use' },
    tenant: { fr: 'Locataires multiples', en: 'Multi-tenant' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Projet mixte implante en coeur de ville.',
      en: 'Mixed-use development in the downtown core.'
    },
    detailsBody: {
      fr: 'Le phasage a ete planifie pour maintenir les activites en place.',
      en: 'Phasing was planned to preserve existing business continuity.'
    },
    owner: { fr: 'Vieux-Longueuil Partners', en: 'Vieux-Longueuil Partners' },
    manager: { fr: 'Centre Core Operations', en: 'Centre Core Operations' },
    gallery: seededGallery('vieux-longueuil-quarter')
  },
  {
    id: 'jacques-cartier-point',
    category: { fr: 'Longueuil', en: 'Longueuil' },
    city: { fr: 'Longueuil', en: 'Longueuil' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '1300',
    addressStreet: { fr: 'Sherbrooke Ouest', en: 'Sherbrooke West' },
    title: { fr: 'Point Jacques-Cartier', en: 'Jacques Cartier Point' },
    yearBuilt: '2016',
    squareFeet: '14150',
    propertyType: { fr: 'Mixte transit', en: 'Transit-oriented Mixed-use' },
    tenant: { fr: 'Locataires mixtes', en: 'Mixed Tenancy' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Site strategique connecte au reseau metropolitain.',
      en: 'Strategic site connected to the regional transit network.'
    },
    detailsBody: {
      fr: 'Le projet regroupe logements, bureaux et services communautaires.',
      en: 'The project combines housing, offices, and community services.'
    },
    owner: { fr: 'JC Point Holdings', en: 'JC Point Holdings' },
    manager: { fr: 'Transit District Mgmt', en: 'Transit District Mgmt' },
    gallery: seededGallery('jacques-cartier-point')
  },
  {
    id: 'hull-fabric',
    category: { fr: 'Gatineau', en: 'Gatineau' },
    city: { fr: 'Hull', en: 'Hull' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '300',
    addressStreet: 'St-Sacrement',
    title: { fr: 'Trame Hull', en: 'Hull Fabric' },
    yearBuilt: '1988',
    squareFeet: '9650',
    propertyType: { fr: 'Mixte urbain', en: 'Urban Mixed-use' },
    tenant: { fr: 'Locataires divers', en: 'Diverse Tenants' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Intervention urbaine visant la revitalisation du secteur Hull.',
      en: 'Urban intervention focused on revitalizing the Hull district.'
    },
    detailsBody: {
      fr: 'Le projet introduit de nouvelles connexions pietonnes vers le front d eau.',
      en: 'The project introduces new pedestrian connections to the waterfront.'
    },
    owner: { fr: 'Hull Fabric LP', en: 'Hull Fabric LP' },
    manager: { fr: 'Outaouais Property Team', en: 'Outaouais Property Team' },
    gallery: seededGallery('hull-fabric')
  },
  {
    id: 'plateau-civic-hall',
    category: { fr: 'Gatineau', en: 'Gatineau' },
    city: { fr: 'Gatineau', en: 'Gatineau' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '241',
    addressStreet: 'Yonge',
    title: { fr: 'Forum du Plateau', en: 'Plateau Civic Hall' },
    yearBuilt: '2015',
    squareFeet: '15220',
    propertyType: { fr: 'Institutionnel + commerce', en: 'Institutional + Retail' },
    tenant: { fr: 'Usages civiques', en: 'Civic Uses' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Ensemble ancre par une place publique et des services de proximite.',
      en: 'Complex anchored by a public square and local-serving amenities.'
    },
    detailsBody: {
      fr: 'Le batiment cible une operation a haute performance energetique.',
      en: 'The building targets high-performance operational energy metrics.'
    },
    owner: { fr: 'Plateau Civic Trust', en: 'Plateau Civic Trust' },
    manager: { fr: 'Civic Hall Operations', en: 'Civic Hall Operations' },
    gallery: seededGallery('plateau-civic-hall')
  },
  {
    id: 'lennox-promenade',
    category: { fr: 'Sherbrooke', en: 'Sherbrooke' },
    city: { fr: 'Sherbrooke', en: 'Sherbrooke' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '275',
    addressStreet: 'Yonge',
    title: { fr: 'Promenade Lennox', en: 'Lennox Promenade' },
    yearBuilt: '2011',
    squareFeet: '8875',
    propertyType: { fr: 'Residentiel de densification', en: 'Infill Residential' },
    tenant: { fr: 'Residents', en: 'Residents' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Projet residentiel de densification douce proche des services.',
      en: 'Gentle-density residential project close to everyday services.'
    },
    detailsBody: {
      fr: 'Les rez-de-chaussee actifs renforcent l animation du domaine public.',
      en: 'Active ground floors strengthen public-realm animation.'
    },
    owner: { fr: 'Lennox Communities', en: 'Lennox Communities' },
    manager: { fr: 'Eastern Townships Property', en: 'Eastern Townships Property' },
    gallery: seededGallery('lennox-promenade')
  },
  {
    id: 'estrie-innovation-park',
    category: { fr: 'Sherbrooke', en: 'Sherbrooke' },
    city: { fr: 'Sherbrooke', en: 'Sherbrooke' },
    province: { fr: 'QC', en: 'QC' },
    addressNumber: '333',
    addressStreet: 'Yonge',
    title: { fr: 'Parc Innovation Estrie', en: 'Estrie Innovation Park' },
    yearBuilt: '2020',
    squareFeet: '20540',
    propertyType: { fr: 'Parc tertiaire durable', en: 'Sustainable Business Park' },
    tenant: { fr: 'Entreprises en croissance', en: 'Growth-stage Companies' },
    status: { fr: 'Occupe', en: 'Occupied' },
    detailsIntro: {
      fr: 'Parc d affaires concu pour des entreprises en expansion.',
      en: 'Business park designed for expanding companies.'
    },
    detailsBody: {
      fr: 'Infrastructures evolutives pour la recherche et la fabrication legere.',
      en: 'Scalable infrastructure for research and light-manufacturing uses.'
    },
    owner: { fr: 'Estrie Innovation Holdings', en: 'Estrie Innovation Holdings' },
    manager: { fr: 'Innovation Park Services', en: 'Innovation Park Services' },
    gallery: seededGallery('estrie-innovation-park')
  }
];
