import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputModule} from '../../../sentinelone-components-lib/src/lib/modules/form/input/input.module';
import {CheckboxModule} from '../../../sentinelone-components-lib/src/lib/modules/form/checkbox/checkbox.module';




const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), InputModule, BrowserAnimationsModule, CheckboxModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
