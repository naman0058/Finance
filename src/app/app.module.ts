import { ReactiveFormsModule , FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FeedbackReportComponent } from './feedback-report/feedback-report.component';
import { DdoReportComponent } from './ddo-report/ddo-report.component';
import { RcoReportComponent } from './rco-report/rco-report.component';
import { DdoUsersComponent } from './ddo-users/ddo-users.component';
import { RcoUsersComponent } from './rco-users/rco-users.component';
import { CreateSbsAdminComponent } from './create-sbs-admin/create-sbs-admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReportsFormComponent } from './reports-form/reports-form.component';
import { SbsUploadComponent } from './sbs-upload/sbs-upload.component';
import { DdoRegisterationComponent } from './ddo-registeration/ddo-registeration.component';
import { RcoRegisterationComponent } from './rco-registeration/rco-registeration.component';
import { SbsAdminLoginComponent } from './sbs-admin-login/sbs-admin-login.component';
import { SbsPaymentAndReceiptComponent } from './sbs-payment-and-receipt/sbs-payment-and-receipt.component';
import { SbsPaymentDetailsComponent } from './sbs-payment-details/sbs-payment-details.component';
import { SbsReceiptDetailsComponent } from './sbs-receipt-details/sbs-receipt-details.component';
import { ProfileAndPayslipComponent } from './profile-and-payslip/profile-and-payslip.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PayslipDetailsComponent } from './payslip-details/payslip-details.component';
import { GpfLoginComponent } from './gpf-login/gpf-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminNavbarEndComponent } from './admin-navbar-end/admin-navbar-end.component';

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
    PressReleaseComponent,
    FeedbackReportComponent,
    DdoReportComponent,
    RcoReportComponent,
    DdoUsersComponent,
    RcoUsersComponent,
    CreateSbsAdminComponent,
    AdminUsersComponent,
    UpdatePasswordComponent,
    ChangePasswordComponent,
    ReportsFormComponent,
    SbsUploadComponent,
    DdoRegisterationComponent,
    RcoRegisterationComponent,
    SbsAdminLoginComponent,
    SbsPaymentAndReceiptComponent,
    SbsPaymentDetailsComponent,
    SbsReceiptDetailsComponent,
    ProfileAndPayslipComponent,
    ProfileDetailsComponent,
    PayslipDetailsComponent,
    GpfLoginComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminNavbarEndComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
