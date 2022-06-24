import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleShopComponent } from './example-shop.component';
import {FormsModule} from "@angular/forms";
import {ExampleShopRoutingModule} from "./example-shop-routing.module";



@NgModule({
  declarations: [
    ExampleShopComponent
  ],
  imports: [
    CommonModule,
    ExampleShopRoutingModule,
    FormsModule
  ]
})
export class ExampleShopModule { }
