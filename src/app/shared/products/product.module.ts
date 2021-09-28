import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementModule } from '../../elements';
import { ProductListComponent } from './components';

@NgModule({
  imports: [
    CommonModule,

    ElementModule,
  ],
  declarations: [
    ProductListComponent,
  ],
  exports: [
    ProductListComponent,
  ],
})

export class ProductModule {}
