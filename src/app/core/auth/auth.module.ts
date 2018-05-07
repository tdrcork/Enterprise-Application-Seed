import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIModule } from '../../core/ui/ui.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    UIModule,
    AuthRoutingModule
  ],
  providers: [AuthService],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
