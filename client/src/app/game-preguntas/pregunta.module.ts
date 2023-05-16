import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { CrearPreguntasComponent } from './components/crear-preguntas/crear-preguntas.component';
import { ListadoPreguntasComponent } from './components/listado-preguntas/listado-preguntas.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PreguntaComponent,
    CrearPreguntasComponent,
    ListadoPreguntasComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
    
  ],
  exports: [PreguntaComponent]
})
export class PreguntaModule { }
