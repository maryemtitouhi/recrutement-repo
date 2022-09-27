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
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './views/home/home.component';
import {ChangePasswordCandidatSocieteComponent} from './views/users/change-password-candidat-societe/change-password-candidat-societe.component';
import {ViewCvComponent} from './views/cv/view-cv/view-cv.component';
import {OffreComponent} from './views/offre/offre.component';
import {AddEditOffreComponent} from './views/offre/add-edit-offre/add-edit-offre.component';
import {OffreDetailComponent} from './views/offre/offre-detail/offre-detail.component';
import {CandidatureComponent} from './views/candidature/candidature.component';
import {MeetingComponent} from './views/meeting/meeting.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'change-password', component: ChangePasswordCandidatSocieteComponent, canActivate: [AuthGuard]},
  {path: 'user/profil', component: ProfilComponent , canActivate: [AuthGuard]},
  {path: 'cv', component: CvComponent , canActivate: [AuthGuard]},
  {path: 'offre/candidature/cv/:cvId/:offreId', component: ViewCvComponent , canActivate: [AuthGuard]},
  {path: 'cv/view', component: ViewCvComponent , canActivate: [AuthGuard]},
  {path: 'offre', component: OffreComponent , canActivate: [AuthGuard]},
  {path: 'offre/new', component: AddEditOffreComponent , canActivate: [AuthGuard]},
  {path: 'offre/edit/:id', component: AddEditOffreComponent , canActivate: [AuthGuard]},
  {path: 'candidature', component: CandidatureComponent , canActivate: [AuthGuard]},
  {path: 'offre/candidature/:id', component: CandidatureComponent , canActivate: [AuthGuard]},
  {path: 'offre/detail/:id', component: OffreDetailComponent },
  {path: 'offre/candidature/meeting/:cvId/:offreId', component: MeetingComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'admin',
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

      {path: 'user/change-password', component: ChangePasswordComponent},

    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
