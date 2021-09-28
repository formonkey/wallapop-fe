import { NgModule } from '@angular/core';

import { MainRouter } from './main.router';
import { SharedModule } from '../../shared';
import { MainComponent, MainMenuComponent } from './components';

@NgModule({
  imports: [
    MainRouter,

    SharedModule,
  ],
  declarations: [
    MainComponent,
    MainMenuComponent,
  ],
})

export class MainModule {}
