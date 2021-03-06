import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {OnlinecalcModule} from "./onlinecalc/onlinecalc.module";
import {MainModule} from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        FormsModule,
        OnlinecalcModule,
        MainModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
