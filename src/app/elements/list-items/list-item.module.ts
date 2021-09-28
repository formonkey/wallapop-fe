import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../buttons';
import { ListItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule,

    ButtonModule,
  ],
  declarations: [
    ListItemComponent,
  ],
  exports: [
    ListItemComponent,
  ],
})

export class ListItemModule {}
