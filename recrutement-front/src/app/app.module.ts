import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {IconModule, IconSetModule, IconSetService} from '@coreui/icons-angular';
import {AppComponent} from './app.component';
// Import containers
import {DefaultLayoutComponent} from './containers';


import {LoginComponent} from './views/auth/login/login.component';
import {RegisterComponent} from './views/auth/register/register.component';
import {AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule} from '@coreui/angular';
// Import routing module
import {AppRoutingModule} from './app.routing';
// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {SpecialiteComponent} from './views/settings/specialite/specialite.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng-lts/table';
import {DialogModule} from 'primeng-lts/dialog';
import {ToastModule} from 'primeng-lts/toast';
import {ButtonModule} from 'primeng-lts/button';
import {FormsModule} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {TooltipModule} from 'primeng-lts/tooltip';
import {ConfirmPopupModule} from 'primeng-lts/confirmpopup';

import {KeyFilterModule} from 'primeng-lts/keyfilter';
import {MultiSelectModule} from 'primeng-lts/multiselect';
import {InputSwitchModule} from 'primeng-lts/inputswitch';
import {TypePosteComponent} from './views/settings/type-poste/type-poste.component';
import {PaysComponent} from './views/settings/pays/pays.component';
import {VillesComponent} from './views/settings/villes/villes.component';
import {LangueComponent} from './views/settings/langue/langue.component';
import {CandidatComponent} from './views/users/candidat/candidat.component';
import {SocieteComponent} from './views/users/societe/societe.component';
import {JwtInterceptorService} from './shared/interceptors/jwt-interceptor.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ProfilComponent } from './views/users/profil/profil.component';
import { ChangePasswordComponent } from './views/users/change-password/change-password.component';
import {DatePipe} from '@angular/common';
import { CvComponent } from './views/cv/cv.component';
import { ExperienceComponent } from './views/cv/experience/experience.component';
import { DiplomeComponent } from './views/cv/diplome/diplome.component';
import { DocumentComponent } from './views/cv/document/document.component';
import { CentreInteretComponent } from './views/cv/centre-interet/centre-interet.component';
import { CompetenceComponent } from './views/cv/competence/competence.component';
import {TabViewModule} from 'primeng-lts/tabview';
import { NiveauLangueComponent } from './views/cv/niveau-langue/niveau-langue.component';
import { InformationComponent } from './views/cv/information/information.component';
import {RatingModule} from 'primeng-lts/rating';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    TableModule,
    DialogModule,
    ToastModule,
    ButtonModule,
    TooltipModule,
    ConfirmPopupModule,
    KeyFilterModule,
    MultiSelectModule,
    InputSwitchModule,
    NgxPermissionsModule.forRoot(),
    TabViewModule,
    RatingModule
  ],
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginComponent,
    RegisterComponent,
    SpecialiteComponent,
    TypePosteComponent,
    PaysComponent,
    VillesComponent,
    LangueComponent,
    CandidatComponent,
    SocieteComponent,
    ProfilComponent,
    ChangePasswordComponent,
    CvComponent,
    ExperienceComponent,
    DiplomeComponent,
    DocumentComponent,
    CentreInteretComponent,
    CompetenceComponent,
    NiveauLangueComponent,
    InformationComponent

  ],
  providers: [
    IconSetService,
    MessageService,
    ConfirmationService,
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
