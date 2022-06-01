import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import {MainpageRoutingModule} from "./mainpage-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainpageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule
  ]
})
export class MainpageModule { }
