import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icons';
import { ButtonModule } from '../buttons';
import { CardComponent } from './components';

@NgModule({
  imports: [
    CommonModule,

    IconModule,
    ButtonModule,
  ],
  declarations: [
    CardComponent,
  ],
  exports: [
    CardComponent,
  ],
})

export class CardModule {}
