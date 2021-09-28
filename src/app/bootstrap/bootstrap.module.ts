import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ElementModule } from '../elements';
import { BootstrapComponent } from './components';
import { BootstrapRouter } from './bootstrap.router';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    BootstrapRouter,

    ElementModule,
  ],
  declarations: [
    BootstrapComponent,
  ],
  bootstrap: [
    BootstrapComponent,
  ],
})

export class BootstrapModule {}
