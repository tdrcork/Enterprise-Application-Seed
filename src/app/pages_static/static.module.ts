import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UIModule } from '../core/ui/ui.module';
import { FeaturesComponent } from './features/features.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    ArchitectureComponent,
    UsageComponent
  ],
  imports: [
    CommonModule,
    UIModule
  ],
  exports: [
    HomeComponent
  ],
})
export class StaticModule { }