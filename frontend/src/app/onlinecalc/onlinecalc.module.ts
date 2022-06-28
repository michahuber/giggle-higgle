import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlinecalcComponent } from './onlinecalc.component';
import {FormsModule} from "@angular/forms";
import {OnlinecalcRoutingModule} from "./onlinecalc-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { NumfieldComponent } from './numfield/numfield.component';



@NgModule({
  declarations: [
    OnlinecalcComponent,
    NumfieldComponent
  ],
  imports: [
    CommonModule,
    OnlinecalcRoutingModule,
    FormsModule,
    FlexModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class OnlinecalcModule { }
