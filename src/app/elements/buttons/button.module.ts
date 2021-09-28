import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icons';
import { ButtonComponent } from './components';

@NgModule({
  imports: [
    CommonModule,

    IconModule,
  ],
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent,
  ],
})

export class ButtonModule {}
