import { Component } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../interfaces/pregunta.interface';

@Component({
  selector: 'app-crear-preguntas',
  templateUrl: './crear-preguntas.component.html',
  styleUrls: ['./crear-preguntas.component.css'],
})
export class CrearPreguntasComponent {
    enunciado: string = '';
  respuestaCorrecta: string = '';
  respuestaIncorrecta1: string = '';
  respuestaIncorrecta2: string = '';

  preguntas: Pregunta[]=[];
  pregunta?: Pregunta;

  constructor(private preguntaService: PreguntaService) {}

  crearPregunta() {
    // Validar si los campos están llenos
    if (
      this.enunciado.trim() === '' ||
      this.respuestaCorrecta.trim() === '' ||
      this.respuestaIncorrecta1.trim() === '' ||
      this.respuestaIncorrecta2.trim() === ''
    ) {
      alert('Por favor, completa todos los campos');
      return;
    }

    // Crear objeto de pregunta
     this.pregunta = {
      enunciado: this.enunciado,
      tipo: 'opcMul',
      codigo:'HOLA',
      respuestas: [
        { texto: this.respuestaCorrecta, correcta: true },
        { texto: this.respuestaIncorrecta1, correcta: false },
        { texto: this.respuestaIncorrecta2, correcta: false },
      ],
    };

    


    // Guardar la pregunta en la base de datos (usando un servicio)
    this.preguntaService.agregarPregunta(this.pregunta).subscribe(
      () => {
        alert('La pregunta se ha creado correctamente');
        // Limpiar los campos del formulario
        this.enunciado = '';
        this.respuestaCorrecta = '';
        this.respuestaIncorrecta1 = '';
        this.respuestaIncorrecta2 = '';
        this.preguntas.push(this.pregunta!);
        console.log('pregunta ',this.pregunta);
      },  
      (error:any) => {
        console.error('Error al crear la pregunta', error);
        alert('Ha ocurrido un error al crear la pregunta');
      }
    );
  }
  // agregar(){
  //   this.preguntas.push(this.pregunta1!);
  // }
}
