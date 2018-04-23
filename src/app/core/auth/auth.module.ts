import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/core';

import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

import {AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import * as fromApp from '../ngrx/app.reducer';

@NgModule({
  imports: [
    CommonModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService],
  declarations: [SignupComponent, SigninComponent, ConfirmComponent, ResetpasswordComponent, ForgotpasswordComponent]
})
export class AuthModule { }
