import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { CompthreeComponent } from './compthree/compthree.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponeComponent,
    ComptwoComponent,
    CompthreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
