import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntaModule } from './game-preguntas/pregunta.module';
import { LoginComponent } from './autenticacion/pages/login/login.component';
import { RegistroComponent } from './autenticacion/pages/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from "./principal/home/home.component";
import { MaterialModule } from './material/material.module';
import { ListadoGamesComponent } from './principal/listado-games/listado-games.component';
import { GameTarjetaComponent } from './principal/game-tarjeta/game-tarjeta.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BarraComponent } from './principal/barra/barra.component';

import { FormsModule } from '@angular/forms';
import { InicioPreguntasComponent } from './game-preguntas/inicio-preguntas/inicio-preguntas.component';
import { CrearPreguntasComponent } from './game-preguntas/components/crear-preguntas/crear-preguntas.component';
//import { PrincipalModule } from './principal/principal.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ListadoGamesComponent,
    GameTarjetaComponent,
    BarraComponent, 
    InicioPreguntasComponent,
    CrearPreguntasComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    PreguntaModule, 
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
