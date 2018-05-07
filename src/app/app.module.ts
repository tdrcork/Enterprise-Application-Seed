/* Required / Angular Specific / unchanging */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store'; // ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducer'; // my reducer

import {AmplifyService, AmplifyAngularModule } from 'aws-amplify-angular'; // aws

/* Core */
import { AuthService } from '../app/core/auth/auth.service'; // auth
import { AuthModule } from '../app/core/auth/auth.module';
import { AuthEffects } from './core/auth/state/auth.effects';
import { PermissionsService } from './core/permissions/permissions.service'; // permissions

import { UIModule } from './core/ui/ui.module'; // ui

/* Navigation */
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';

/* Modules */
import { StaticModule } from './pages_static/static.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaticModule,
    UIModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    AmplifyAngularModule,
    StoreRouterConnectingModule,
    AuthModule
  ],
  providers: [
    AuthService,
    PermissionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
