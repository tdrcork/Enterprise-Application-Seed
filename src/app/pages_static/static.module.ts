import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../core/shared/shared.module';
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
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
})
export class StaticModule { }