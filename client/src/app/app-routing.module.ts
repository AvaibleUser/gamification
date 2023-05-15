import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOneComponent } from './game-one/game-one/game-one.component';
import { GameInicioComponent } from './game-one/game-inicio/game-inicio.component';

const routes: Routes = [
  { path: 'juego', component: GameOneComponent },
  { path: 'inicio', component: GameInicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
