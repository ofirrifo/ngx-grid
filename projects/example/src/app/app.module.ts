import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputModule } from '../../../sentinelone-components-lib/src/lib/modules/form/input/input.module';
import { CheckboxModule } from 'sentinelone-components-lib';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
