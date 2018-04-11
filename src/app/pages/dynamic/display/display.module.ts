import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  imports: [
    CommonModule,
    DisplayRoutingModule
  ],
  declarations: [AnalyticsComponent]
})
export class DisplayModule { }
