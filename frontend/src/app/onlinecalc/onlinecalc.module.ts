import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlinecalcComponent } from './onlinecalc.component';
import {FormsModule} from "@angular/forms";
import {OnlinecalcRoutingModule} from "./onlinecalc-routing.module";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    OnlinecalcComponent
  ],
    imports: [
        CommonModule,
        OnlinecalcRoutingModule,
        FormsModule,
        FlexModule
    ]
})
export class OnlinecalcModule { }
