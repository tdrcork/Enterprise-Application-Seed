import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignupComponent, SigninComponent, ConfirmComponent, ResetpasswordComponent, ForgotpasswordComponent]
})
export class AuthModule { }
