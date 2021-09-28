import { NgModule } from '@angular/core';

import { MenuModule } from './menu';
import { EmptyModule } from './empties';
import { ProductModule } from './products';
import { FavoriteModule } from './favorites';

const modules = [
  MenuModule,
  EmptyModule,
  ProductModule,
  FavoriteModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class SharedModule {}
