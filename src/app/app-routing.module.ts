import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
   {
     path: 'onlinecalc',
     loadChildren: () => import('./onlinecalc/onlinecalc.module').then(m => m.OnlinecalcModule)
   },
  {
    path: 'example-shop',
    loadChildren: () => import('./example-shop/example-shop.module').then(m => m.ExampleShopModule)
  },
  {
    path: 'main',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
