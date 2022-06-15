import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExampleShopComponent} from "./example-shop.component";

const routes: Routes = [
  {
    path: '',
    component: ExampleShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleShopRoutingModule { }
