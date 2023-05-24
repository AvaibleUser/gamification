import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './components/match/match.component';
import { MatchCreatorComponent } from './components/match-creator/match-creator.component';

import { GameOneComponent } from './game-one/game-one/game-one.component';

//Juegos
import { GameInicioComponent } from './game-one/game-inicio/game-inicio.component';
import { GameRankingComponent } from './game-one/game-ranking/game-ranking.component';
import { GameTwoComponent } from './gameTwo/game-two/game-two.component';
import { GameSopaComponent } from './gameTwo/game-sopa/game-sopa.component';
import { PreguntaComponent } from './game-preguntas/components/pregunta/pregunta.component';
import { CrearPreguntasComponent } from './game-preguntas/components/crear-preguntas/crear-preguntas.component';
import { CrearTriviaComponent } from './game-preguntas/components/crear-trivia/crear-trivia.component';

//Login y registro
import { LoginComponent } from './autenticacion/pages/login/login.component';
import { RegistroComponent } from './autenticacion/pages/registro/registro.component';

//Paginas de inicio
import { InicioComponent } from './principal/inicio/inicio.component';
import { HomeComponent } from './principal/home/home.component';

const routes: Routes = [
  {
    path: 'match/:id',
    component: MatchComponent,
  },
  {
    path: 'match',
    component: MatchCreatorComponent,
  },
  { path: 'juego', component: GameOneComponent },
  { path: 'inicio', component: GameInicioComponent },
  { path: 'ranking', component: GameRankingComponent },
  { path: 'sopa', component: GameTwoComponent },
  { path: 'playsopa', component: GameSopaComponent },
  { path: 'welcome', component: InicioComponent },
  //Juego de crear palabras
  { path: 'pregunta', component: PreguntaComponent },
  { path: 'crear-preguntas', component: CrearPreguntasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'crear', component: CrearTriviaComponent },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}