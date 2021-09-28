import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouter } from './home.router';
import { SharedModule } from '../../shared';
import { HomeComponent } from './components';
import { ElementModule } from '../../elements';

@NgModule({
  imports: [
    CommonModule,

    HomeRouter,

    SharedModule,
    ElementModule,
  ],
  declarations: [
    HomeComponent,
  ],
})

export class HomeModule {}
