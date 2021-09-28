import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '../buttons';
import { InputFilterComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    ButtonModule,
  ],
  declarations: [
    InputFilterComponent,
  ],
  exports: [
    InputFilterComponent,
  ],
})

export class InputModule {}
