import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOneComponent } from './game-one/game-one/game-one.component';
import { GameInicioComponent } from './game-one/game-inicio/game-inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    GameOneComponent,
    GameInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
