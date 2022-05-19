import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';


import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import {SpecialiteComponent} from './views/settings/specialite/specialite.component';
import {TypePosteComponent} from './views/settings/type-poste/type-poste.component';
import {PaysComponent} from './views/settings/pays/pays.component';
import {VillesComponent} from './views/settings/villes/villes.component';
import {LangueComponent} from './views/settings/langue/langue.component';
import {CandidatComponent} from './views/users/candidat/candidat.component';
import {SocieteComponent} from './views/users/societe/societe.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {ProfilComponent} from './views/users/profil/profil.component';
import {ChangePasswordComponent} from './views/users/change-password/change-password.component';
import {CvComponent} from './views/cv/cv.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register/:type',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'settings/specialite', component: SpecialiteComponent},
      {path: 'settings/type-poste', component: TypePosteComponent},
      {path: 'settings/pays', component: PaysComponent},
      {path: 'settings/ville/:id', component: VillesComponent},
      {path: 'settings/langue', component: LangueComponent},
      {path: 'user/candidat', component: CandidatComponent},
      {path: 'user/societe', component: SocieteComponent},
      {path: 'user/profil', component: ProfilComponent},
      {path: 'user/change-password', component: ChangePasswordComponent},
      {path: 'cv', component: CvComponent},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
