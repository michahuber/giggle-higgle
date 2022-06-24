import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnlinecalcComponent} from "./onlinecalc.component";

const routes: Routes = [
  {
    path: '',
    component: OnlinecalcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlinecalcRoutingModule { }
