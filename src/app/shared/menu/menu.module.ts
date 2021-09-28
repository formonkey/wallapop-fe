import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ElementModule } from '../../elements';
import { MenuComponent, MenuItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ElementModule,
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
  ],
  exports: [
    MenuComponent,
  ],
})

export class MenuModule {}
