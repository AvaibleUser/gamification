import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntaModule } from './game-preguntas/pregunta.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PreguntaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
