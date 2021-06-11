import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BankComponent } from './components/bank/bank.component';
import { AccountComponent } from './components/account/account.component';
import { BankCreateComponent } from './components/bank/bank-create/bank-create.component';
import { BankEditComponent } from './components/bank/bank-edit/bank-edit.component';
import { BankViewComponent } from './components/bank/bank-view/bank-view.component';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { AccountEditComponent } from './components/account/account-edit/account-edit.component';
import { AccountViewComponent } from './components/account/account-view/account-view.component';
import { NavComponent } from './components/nav/nav.component';

import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    BankComponent,
    AccountComponent,
    BankCreateComponent,
    BankEditComponent,
    BankViewComponent,
    AccountCreateComponent,
    AccountEditComponent,
    AccountViewComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
