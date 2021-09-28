import { NgModule } from '@angular/core';

import { ContainerComponent } from './components';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  exports: [
    ContainerComponent,
  ],
})

export class ContainerModule {}
