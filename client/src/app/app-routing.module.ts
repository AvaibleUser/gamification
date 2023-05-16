import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntaComponent } from './game-preguntas/components/pregunta/pregunta.component';



const routes: Routes = [
  { path: '', component: PreguntaComponent }, 
  {path: 'pregunta', component: PreguntaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
