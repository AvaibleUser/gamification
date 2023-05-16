import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntaComponent } from './game-preguntas/components/pregunta/pregunta.component';
import { CrearPreguntasComponent } from './game-preguntas/components/crear-preguntas/crear-preguntas.component';



const routes: Routes = [
  { path: '', component: PreguntaComponent }, 
  {path: 'pregunta', component: PreguntaComponent },
  {path: 'crear-preguntas', component: CrearPreguntasComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
