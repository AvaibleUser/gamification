import { Component } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta, Trivia } from '../../interfaces/pregunta.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-preguntas',
  templateUrl: './crear-preguntas.component.html',
  styleUrls: ['./crear-preguntas.component.css'],
})
export class CrearPreguntasComponent {

  trivia?: Trivia;
  enunciado: string = '';
  autor: string = '';
  nombreTrivia: string = '';
  codigo: string = '';
  respuestas: string[] = [];
  respuestaCorrecta: string = '';
  preguntas: Pregunta[] = [];

  constructor(private preguntaService: PreguntaService) {}

  crearPregunta() {
    // Validar si los campos están llenos
    // if (
    //   this.enunciado.trim() === '' ||
    //   this.respuestas[0].trim() === '' ||
    //   this.respuestas[1].trim() === '' ||
    //   this.respuestas[2].trim() === '' ||
    //   this.respuestaCorrecta.trim() === '' 
    // ) {
    //   //alert('Por favor, completa todos los campos prer');
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: `Completa todos los campos pregutna `,
    //     timer: 2000,
    //     showConfirmButton: true
    //   });
    //   return;
    // }

    // Crear objeto de pregunta
    const nuevaPregunta: Pregunta = {
      enunciado: this.enunciado,
      respuestas: this.respuestas,
      respuestaCorrecta: this.respuestaCorrecta
    };

    // Agregar la pregunta al array de preguntas
    this.preguntas.push(nuevaPregunta);

    // Limpiar los campos del formulario
    this.enunciado = '';
    this.respuestas = [];
    this.respuestaCorrecta = '';
  }

  guardarTrivia() {
    // Validar si los campos están llenos
    if (
      this.codigo.trim() === '' ||
      this.autor.trim() === '' ||
      this.preguntas.length === 0
    ) {
      //alert('Por favor, completa todos los campos y agrega al menos una pregunta');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Completa todos los campos y agrega al menos una pregunta `,
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    // Crear objeto de trivia
    this.trivia = {
       // Aquí puedes generar un id único para la trivia
      codigo: this.codigo,
      nombreTrivia: this.nombreTrivia ,
      autor: this.autor,
      preguntas: this.preguntas
    };
    console.log(this.trivia);

    // Guardar la trivia en la base de datos (usando un servicio)
    this.preguntaService.agregarTrivia1(this.trivia).subscribe(
      () => {
        //alert('La trivia se ha guardado correctamente');
        Swal.fire({
          icon: 'success',
          title: 'La trivia se ha guardado correctamente',
          timer: 2000,
          showConfirmButton: false
        });
        // Limpiar los campos del formulario
        this.codigo = '';
        this.autor = '';
        this.preguntas = [];
        
      },
      (error: any) => {
        console.error('Error al guardar la trivia', error);
        alert('Ha ocurrido un error al guardar la trivia');
      }
    );
  }

  
}
