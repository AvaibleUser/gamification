import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { GameOneComponent } from './game-one/game-one/game-one.component';
import { GameInicioComponent } from './game-one/game-inicio/game-inicio.component';
import { GameRankingComponent } from './game-one/game-ranking/game-ranking.component';
import { GameTwoComponent } from './gameTwo/game-two/game-two.component';
import { GameSopaComponent } from './gameTwo/game-sopa/game-sopa.component';

import { PreguntaComponent } from './game-preguntas/components/pregunta/pregunta.component';
import { CrearPreguntasComponent } from './game-preguntas/components/crear-preguntas/crear-preguntas.component';
import { HomeComponent } from "./principal/home/home.component";
import { LoginComponent } from './autenticacion/pages/login/login.component';
import { RegistroComponent } from './autenticacion/pages/registro/registro.component';
import { CrearTriviaComponent } from './game-preguntas/components/crear-trivia/crear-trivia.component';
<<<<<<< HEAD
import { InicioPreguntasComponent } from './game-preguntas/inicio-preguntas/inicio-preguntas.component';

=======
import { InicioComponent} from "./principal/inicio/inicio.component";
>>>>>>> remotes/origin/gameMixWords


const routes: Routes = [
  { path: 'juego', component: GameOneComponent },
  { path: 'inicio', component: GameInicioComponent},
  { path: 'ranking', component: GameRankingComponent },
  { path: 'sopa', component: GameTwoComponent },
  { path: 'playsopa', component: GameSopaComponent },
  { path: 'welcome', component: InicioComponent},

//Juego de crear palabras
  { path: '', component: HomeComponent }, 
  {path: 'pregunta', component: PreguntaComponent },
  {path: 'crear-preguntas', component: CrearPreguntasComponent  },
  {path: 'home', component: HomeComponent  },
  {path: 'login', component: LoginComponent  },
  {path: 'registro', component: RegistroComponent  },
  {path: 'crear', component: CrearTriviaComponent  },
  {path: 'inicio-preguntas', component: InicioPreguntasComponent  },
  { path: '**', component: HomeComponent }, 

  
=======
import { MatchComponent } from './components/match/match.component';
import { CreatorComponent } from './crosswords/components/creator/creator.component';
import { MatchCreatorComponent } from './components/match-creator/match-creator.component';

const routes: Routes = [
  {
    path: 'match/:id',
    component: MatchComponent,
  },
  {
    path: 'match',
    component: MatchCreatorComponent,
  },
>>>>>>> remotes/origin/backend-base
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule]

=======
  exports: [RouterModule],
>>>>>>> remotes/origin/backend-base
})
export class AppRoutingModule {}
