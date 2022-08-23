import { INavData } from '@coreui/angular';

export const navItems: any[] = [
  {
    title: true,
    name: 'Utilisateurs',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Sociétés',
   url: '/admin/user/societe',
    icon: 'fa fa-building-o fa-lg',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Candidats',
   url: '/admin/user/candidat',
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
   url: '/admin/settings/specialite',
    icon: 'icon-star',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Type Postes',
   url: '/admin/settings/type-poste',
    icon: 'icon-layers',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Pays et villes',
   url: '/admin/settings/pays',
    icon: 'icon-flag',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Langues',
   url: '/admin/settings/langue',
    icon: 'fa fa-language fa-lg',
    roles: ['ROLE_ADMIN']
  },
  {
    name: 'Mon CV',
   url: '/admin/cv',
    icon: 'cil-file',
    roles: ['ROLE_CANDIDAT']
  },
];
