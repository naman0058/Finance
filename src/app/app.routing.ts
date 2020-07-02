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
import { FrbmComponent } from './frbm/frbm.component';
import { FrbmSmrComponent } from './frbm-smr/frbm-smr.component';
import { AccountsComponent } from './accounts/accounts.component';
import { EmplanmentAccountsComponent } from './emplanment-accounts/emplanment-accounts.component';
import { TenderingAccountsComponent } from './tendering-accounts/tendering-accounts.component';
import { PaoComponent } from './pao/pao.component';
import { GpfComponent } from './gpf/gpf.component';
import { GisComponent } from './gis/gis.component';
import { PensionComponent } from './pension/pension.component';
import { PensionNotificationComponent } from './pension-notification/pension-notification.component';
import { BudgetCircularComponent } from './budget-circular/budget-circular.component';
import { FcdCircularComponent } from './fcd-circular/fcd-circular.component';
import { AccountsCircularComponent } from './accounts-circular/accounts-circular.component';
import { BudgetComponent } from './budget/budget.component';
import { FcdComponent } from './fcd/fcd.component';
import { SitemapComponent } from './sitemap/sitemap.component';







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
    {path: 'press-release' , component : PressReleaseComponent },
    {path: 'feedback-report' , component : FeedbackReportComponent },
    {path : 'ddo-report', component : DdoReportComponent},
    {path:'rco-report' , component : RcoReportComponent},
    {path:'ddo-users' , component : DdoUsersComponent},
    {path: 'rco-users' , component : RcoUsersComponent},
    {path: 'create-sbs-admin' , component : CreateSbsAdminComponent },
    {path:'admin-users' , component : AdminUsersComponent},
    {path:'update-password' , component : UpdatePasswordComponent},
    {path:'change-password' , component : ChangePasswordComponent},
    {path:'reports' , component : ReportsFormComponent},
    {path:'sbs-upload' , component : SbsUploadComponent},
    {path:'DDO-Registeration' , component : DdoRegisterationComponent},
    {path:'RCO-Registeration' , component : RcoRegisterationComponent},
    {path: 'sbs-admin-login' , component : SbsAdminLoginComponent},
    {path:'sbs-payment-receipt' , component : SbsPaymentAndReceiptComponent},
    {path:'sbs-payment-details' , component : SbsPaymentDetailsComponent},
    {path:'sbs-receipt-details' , component : SbsReceiptDetailsComponent},
    {path:'profile-payslip' , component : ProfileAndPayslipComponent},
    {path:'profile-details' , component : ProfileDetailsComponent},
    {path:'payslip-details' , component : PayslipDetailsComponent},
    {path:'gpf-login' , component : GpfLoginComponent},
    {path:'Admin-Dashboard' , component : AdminDashboardComponent},
    {path:'admin-navbar' , component : AdminNavbarComponent},
    {path:'admin-navbar-end' , component : AdminNavbarEndComponent},
    {path:'FRBM', component : FrbmComponent },
     {path:'FRBM-SMR', component : FrbmSmrComponent },
     {path:'accounts' , component : AccountsComponent},
    {path:'emaplment-account', component : EmplanmentAccountsComponent },
     {path:'tendering-account', component : TenderingAccountsComponent },
        {path:'pao', component : PaoComponent },
        {path:'GPF', component : GpfComponent },
        {path:'GIS', component : GisComponent },
                {path:'pension', component : PensionComponent },
        {path:'pension-notification', component : PensionNotificationComponent },
        {path:'Budget-Circular', component : GisComponent },
                {path:'FCD-Circular', component : PensionComponent },
        {path:'Accounts-Circular', component : PensionNotificationComponent },
  {path:'FCD', component : FcdComponent },
        {path:'Budget', component : BudgetComponent },
        {path:'sitemap', component : BudgetComponent }





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
