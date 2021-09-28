import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyModule } from '../empties';
import { ProductModule } from '../products';
import { ElementModule } from '../../elements';
import { FavoriteComponent } from './components';

@NgModule({
  imports: [
    CommonModule,

    EmptyModule,
    ElementModule,
    ProductModule,
  ],
  declarations: [
    FavoriteComponent,
  ],
  entryComponents: [
    FavoriteComponent,
  ],
})

export class FavoriteModule {}
