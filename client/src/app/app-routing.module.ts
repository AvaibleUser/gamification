import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntaComponent } from './game-preguntas/components/pregunta/pregunta.component';
import { CrearPreguntasComponent } from './game-preguntas/components/crear-preguntas/crear-preguntas.component';
import { HomeComponent } from "./principal/home/home.component";
import { LoginComponent } from './autenticacion/pages/login/login.component';
import { RegistroComponent } from './autenticacion/pages/registro/registro.component';
import { CrearTriviaComponent } from './game-preguntas/components/crear-trivia/crear-trivia.component';
import { InicioPreguntasComponent } from './game-preguntas/inicio-preguntas/inicio-preguntas.component';



const routes: Routes = [
  { path: '', component: HomeComponent }, 
  {path: 'pregunta', component: PreguntaComponent },
  {path: 'crear-preguntas', component: CrearPreguntasComponent  },
  {path: 'home', component: HomeComponent  },
  {path: 'login', component: LoginComponent  },
  {path: 'registro', component: RegistroComponent  },
  {path: 'crear', component: CrearTriviaComponent  },
  {path: 'inicio-preguntas', component: InicioPreguntasComponent  },
  { path: '**', component: HomeComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
