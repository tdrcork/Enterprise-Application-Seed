/* Required */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Components */
import { HeaderComponent } from './core/navigation/header/header.component';
import { FooterComponent } from './core/navigation/footer/footer.component';

/* Modules */
import { SharedModule } from './core/shared/shared.module';
import { StaticModule } from './pages/static/static.module';

/* Authentication */
import { AuthModule } from '../app/core/auth/auth.module';
import { AuthEffects } from './core/auth/ngrx/auth.effects';

/* NGRX */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './core/ngrx/app.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* AWS */
import {AmplifyService, AmplifyAngularModule } from 'aws-amplify-angular';


import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaticModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    AmplifyAngularModule,
    StoreRouterConnectingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
