import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOneComponent } from './game-one/game-one/game-one.component';
import { GameInicioComponent } from './game-one/game-inicio/game-inicio.component';
import { GameRankingComponent } from './game-one/game-ranking/game-ranking.component';
import { GameDataService } from './game-one/game-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GameTwoComponent } from './gameTwo/game-two/game-two.component';
import { GameSopaComponent } from './gameTwo/game-sopa/game-sopa.component';
//import { FormsModule } from '@angular/forms';


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
import { InicioComponent } from './principal/inicio/inicio.component';
import { NavJuegosComponent } from './principal/nav-juegos/nav-juegos.component';


import { FormsModule } from '@angular/forms';
import { InicioPreguntasComponent } from './game-preguntas/inicio-preguntas/inicio-preguntas.component';
import { CrearPreguntasComponent } from './game-preguntas/components/crear-preguntas/crear-preguntas.component';
//import { PrincipalModule } from './principal/principal.module';


@NgModule({
  declarations: [
    AppComponent,
    GameOneComponent,
    GameInicioComponent,
    GameRankingComponent,
    NavbarComponent,
    GameTwoComponent,
    GameSopaComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ListadoGamesComponent,
    GameTarjetaComponent,
    BarraComponent, 
    InicioPreguntasComponent,
    CrearPreguntasComponent,
    BarraComponent,
    InicioComponent,
    NavJuegosComponent
    

  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    PreguntaModule, 
    PreguntaModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule    
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
