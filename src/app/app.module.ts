import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularRestLabCreateComponent } from './angular-rest-lab-create/angular-rest-lab-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularRestLabCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
