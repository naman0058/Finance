import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ContactusComponent,
    ForgotPasswordComponent,
    EmpolyeeVacanciesComponent,
    TransferAndPromotionComponent,
    FormsComponent,
    TrainingsComponent,
    LettersComponent,
    NotificationComponent,
    DaEnhancementComponent,
    OfficeMemoComponent,
    GazetteComponent,
    RulesComponent,
    CircularsComponent,
    ActComponent,
    PressReleaseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
