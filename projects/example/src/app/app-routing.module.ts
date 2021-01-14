import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputModule } from 'sentinelone-components-lib';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), InputModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
