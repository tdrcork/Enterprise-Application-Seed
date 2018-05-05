import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticModule } from './pages_static/static.module';
import { HomeComponent } from './pages_static/home/home.component';
import { FeaturesComponent } from './pages_static/features/features.component';
import { UsageComponent } from './pages_static/usage/usage.component';
import { ArchitectureComponent } from './pages_static/architecture/architecture.component';

const appRoutes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'architecture', component:  ArchitectureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
