import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { ElementModule } from '../../elements';
import { DashboardComponent } from './components';
import { DashboardRouter } from './dashboard.router';

@NgModule({
  imports: [
    CommonModule,

    DashboardRouter,

    SharedModule,
    ElementModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})

export class DashboardModule {}
