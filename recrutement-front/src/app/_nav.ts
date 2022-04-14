import { INavData } from '@coreui/angular';

export const navItems: any[] = [
  {
    title: true,
    name: 'Utilisateurs',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Sociétés',
    url: '/user/societe',
    icon: 'fa fa-building-o fa-lg',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Candidats',
    url: '/user/candidat',
    icon: 'icon-people',
    roles: ['ROLE_ADMIN']
  },
  {
    title: true,
    name: 'Parmètrages',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Spécialités',
    url: '/settings/specialite',
    icon: 'icon-star',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Type Postes',
    url: '/settings/type-poste',
    icon: 'icon-layers',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Pays et villes',
    url: '/settings/pays',
    icon: 'icon-flag',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Langues',
    url: '/settings/langue',
    icon: 'fa fa-language fa-lg',
    roles: ['ROLE_ADMIN']
  },
];
