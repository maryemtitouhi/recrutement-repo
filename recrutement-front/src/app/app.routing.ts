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
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {path: 'settings/specialite', component: SpecialiteComponent},
      {path: 'settings/type-poste', component: TypePosteComponent},
      {path: 'settings/pays', component: PaysComponent},
      {path: 'settings/ville/:id', component: VillesComponent},
      {path: 'settings/langue', component: LangueComponent},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
