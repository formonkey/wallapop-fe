import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { AdminRouter } from './admin.router';
import { AdminComponent, AdminMenuComponent } from './components';

@NgModule({
  imports: [
    AdminRouter,

    SharedModule,
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
  ],
})

export class AdminModule {}
