import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularRestLabCreateComponent } from './angular-rest-lab-create/angular-rest-lab-create.component';
import { FormularioComponent } from './clientes/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularRestLabCreateComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
