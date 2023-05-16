import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntaComponent } from './components/pregunta/pregunta.component';



@NgModule({
  declarations: [
    PreguntaComponent
  ],
  imports: [
    CommonModule, 
  ],
  exports: [PreguntaComponent]
})
export class PreguntaModule { }
