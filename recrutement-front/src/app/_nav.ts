import { INavData } from '@coreui/angular';

export const navItems: any[] = [
  {
    title: true,
    name: 'Utilisateurs'
  },
  {
    name: 'Sociétés',
    url: '/formateur',
    icon: 'fa fa-building-o fa-lg',
    role: ['ROLE_ADMIN']
  },
  {
    name: 'Candidats',
    url: '/candidat',
    icon: 'icon-people',
    role: ['ROLE_ADMIN']
  },
  {
    title: true,
    name: 'Parmètrages'
  },
  {
    name: 'Spécialités',
    url: '/settings/specialite',
    icon: 'icon-star',
    role: ['ROLE_ADMIN']
  },
  {
    name: 'Type Postes',
    url: '/settings/type-poste',
    icon: 'icon-layers',
    role: ['ROLE_ADMIN']
  },
  {
    name: 'Pays et villes',
    url: '/settings/pays',
    icon: 'icon-flag',
    role: ['ROLE_ADMIN']
  },
  {
    name: 'Langues',
    url: '/settings/langue',
    icon: 'fa fa-language fa-lg',
    role: ['ROLE_ADMIN']
  },
];
