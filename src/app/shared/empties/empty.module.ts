import { NgModule } from '@angular/core';

import { EmptyComponent } from './components';

@NgModule({
  declarations: [
    EmptyComponent,
  ],
  exports: [
    EmptyComponent,
  ],
})

export class EmptyModule {}
