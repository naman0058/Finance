import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent} from "./contactus/contactus.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmpolyeeVacanciesComponent } from './empolyee-vacancies/empolyee-vacancies.component';
import { TransferAndPromotionComponent } from './transfer-and-promotion/transfer-and-promotion.component';
import { FormsComponent } from './forms/forms.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { LettersComponent } from './letters/letters.component';
import { NotificationComponent } from './notification/notification.component';
import { DaEnhancementComponent } from './da-enhancement/da-enhancement.component';
import { OfficeMemoComponent } from './office-memo/office-memo.component';
import { GazetteComponent } from './gazette/gazette.component';
import { RulesComponent } from './rules/rules.component';
import { CircularsComponent } from './circulars/circulars.component';
import { ActComponent } from './act/act.component';
import { PressReleaseComponent } from './press-release/press-release.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path : 'contact-us', component : ContactusComponent},
    {path : 'forgot-password', component : ForgotPasswordComponent},
    {path:'employees-vacancies' , component : EmpolyeeVacanciesComponent},
    {path:'transfer-and-promotion' , component : TransferAndPromotionComponent},
    {path: 'forms' , component : FormsComponent},
    {path: 'training' , component : TrainingsComponent },
    {path : 'letter', component : LettersComponent},
    {path:'notification' , component : NotificationComponent},
    {path:'DA-Enhancement' , component : DaEnhancementComponent},
    {path: 'office' , component : OfficeMemoComponent},
    {path: 'gazette' , component : GazetteComponent },
    {path:'rules' , component : RulesComponent},
    {path:'circular' , component : CircularsComponent},
    {path: 'act' , component : ActComponent},
    {path: 'press-release' , component : PressReleaseComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
