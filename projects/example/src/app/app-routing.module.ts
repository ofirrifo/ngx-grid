import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputModule, CheckboxModule } from 'sentinelone-components-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), InputModule, BrowserAnimationsModule, CheckboxModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
