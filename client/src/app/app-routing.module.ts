import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOneComponent } from './game-one/game-one/game-one.component';
import { GameInicioComponent } from './game-one/game-inicio/game-inicio.component';
import { GameRankingComponent } from './game-one/game-ranking/game-ranking.component';
import { GameTwoComponent } from './gameTwo/game-two/game-two.component';
import { GameSopaComponent } from './gameTwo/game-sopa/game-sopa.component';

const routes: Routes = [
  { path: 'juego', component: GameOneComponent },
  { path: 'inicio', component: GameInicioComponent},
  { path: 'ranking', component: GameRankingComponent },
  { path: 'sopa', component: GameTwoComponent },
  { path: 'playsopa', component: GameSopaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
