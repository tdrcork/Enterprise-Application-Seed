import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticModule } from './pages/static/static.module';
import { HomeComponent } from './pages/static/home/home.component';

const appRoutes: Routes = [
  { path: '', component:  HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
