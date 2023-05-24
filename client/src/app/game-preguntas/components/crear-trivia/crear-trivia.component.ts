import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-trivia',
  templateUrl: './crear-trivia.component.html',
  styleUrls: ['./crear-trivia.component.css']
})
export class CrearTriviaComponent {
  codigoAcceso!: string;
  autor!: string;
  preguntas: any[] = [];

  agregarPregunta() {
    const nuevaPregunta = {
      enunciado: '',
      opciones: ['', '', '', ''],
      respuestaCorrecta: 0
    };
    this.preguntas.push(nuevaPregunta);
  }

  crearTrivia() {
    const trivia = {
      codigo: this.codigoAcceso,
      autor: this.autor,
      preguntas: this.preguntas
    };
    // Aquí puedes realizar la lógica para guardar la trivia en la base de datos o realizar otras acciones
    console.log(trivia);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key !== "Enter") {
      event.preventDefault();
    }
  }
  
}

