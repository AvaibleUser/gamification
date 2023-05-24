import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOneComponent } from './game-one/game-one/game-one.component';
import { GameInicioComponent } from './game-one/game-inicio/game-inicio.component';
import { GameRankingComponent } from './game-one/game-ranking/game-ranking.component';
import { GameDataService } from './game-one/game-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GameTwoComponent } from './gameTwo/game-two/game-two.component';
import { GameSopaComponent } from './gameTwo/game-sopa/game-sopa.component';
import { FormsModule } from '@angular/forms';


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
import { AdminComponent } from './principal/adminVisual/admin/admin.component';
import { NavAdminComponent } from './principal/adminVisual/nav-admin/nav-admin.component';
import { StudentComponent } from './principal/studentVisual/student/student.component';
import { NavStudComponent } from './principal/studentVisual/nav-stud/nav-stud.component';
import { VisualJuegosComponent } from './principal/visual-juegos/visual-juegos.component';
import { PalabrasComponent } from './gameTwo/palabras/palabras.component';


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
    InicioComponent,
    NavJuegosComponent,
    AdminComponent,
    NavAdminComponent,
    StudentComponent,
    NavStudComponent,
    VisualJuegosComponent,
    PalabrasComponent
    

  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    PreguntaModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
