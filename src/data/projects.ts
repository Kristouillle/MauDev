export type Project = {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  summary: {
    fr: string;
    en: string;
  };
  details: {
    fr: string;
    en: string;
  };
};

export const projects: Project[] = [
  {
    id: 'northshore-residences',
    title: {
      fr: 'Résidences Northshore',
      en: 'Northshore Residences'
    },
    summary: {
      fr: 'Projet résidentiel mixte de 120 unités avec espaces communs durables.',
      en: '120-unit mixed-use residential development with sustainable shared spaces.'
    },
    details: {
      fr: 'Livraison prévue en 2026. Le projet intègre des matériaux à faible empreinte carbone et un système énergétique hybride.',
      en: 'Completion expected in 2026. The project includes low-carbon materials and a hybrid energy system.'
    }
  },
  {
    id: 'riverfront-campus',
    title: {
      fr: 'Campus Riverfront',
      en: 'Riverfront Campus'
    },
    summary: {
      fr: 'Complexe corporatif de nouvelle génération situé au bord de l’eau.',
      en: 'Next-generation corporate complex located on the waterfront.'
    },
    details: {
      fr: 'Le campus combine bureaux, commerces et espaces verts avec une approche orientée bien-être des occupants.',
      en: 'The campus combines offices, retail and green spaces with an occupant wellness-first approach.'
    }
  },
  {
    id: 'greenline-industrial',
    title: {
      fr: 'Parc industriel Greenline',
      en: 'Greenline Industrial Park'
    },
    summary: {
      fr: 'Développement industriel flexible pour logistique et production légère.',
      en: 'Flexible industrial development for logistics and light production.'
    },
    details: {
      fr: 'Conçu pour accueillir des locataires multiples avec infrastructures évolutives et certifications environnementales ciblées.',
      en: 'Designed for multi-tenant occupancy with scalable infrastructure and targeted environmental certifications.'
    }
  }
];
