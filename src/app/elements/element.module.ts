import { NgModule } from '@angular/core';
import { ModalModule } from '@cowoco/angular';

import { IconModule } from './icons';
import { CardModule } from './cards';
import { InputModule } from './inputs';
import { ButtonModule } from './buttons';
import { ContainerModule } from './container';
import { ListItemModule } from './list-items';

const modules = [
  IconModule,
  CardModule,
  InputModule,
  ModalModule,
  ButtonModule,
  ListItemModule,
  ContainerModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class ElementModule {}
