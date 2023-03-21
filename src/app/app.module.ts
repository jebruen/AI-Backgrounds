import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenBackgroundComponent } from './gen-background/gen-background.component';
import { HttpClientModule} from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenBackgroundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
