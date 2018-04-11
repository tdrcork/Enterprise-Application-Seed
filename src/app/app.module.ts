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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
