import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-preguntas',
  templateUrl: './inicio-preguntas.component.html',
  styleUrls: ['./inicio-preguntas.component.css']
})
export class InicioPreguntasComponent {
  triviasPublicas: any[] = [
    {
      titulo: 'Ciencia General',
      descripcion: 'Una trivia sobre conceptos científicos generales.'
    },
    {
      titulo: 'Historia Mundial',
      descripcion: 'Una trivia para poner a prueba tus conocimientos históricos.'
    },
    // Agrega más trivias públicas aquí
  ];

  puntajesAltos: any[] = [
    {
      nombre: 'Jugador1',
      puntaje: 100
    },
    {
      nombre: 'Jugador2',
      puntaje: 90
    },
    {
      nombre: 'Jugador1',
      puntaje: 100
    },
    {
      nombre: 'Jugador2',
      puntaje: 90
    },
    {
      nombre: 'Jugador1',
      puntaje: 100
    },
    {
      nombre: 'Jugador2',
      puntaje: 90
    },
    {
      nombre: 'Jugador1',
      puntaje: 100
    },
    {
      nombre: 'Jugador2',
      puntaje: 90
    },
    {
      nombre: 'Jugador1',
      puntaje: 100
    },
    {
      nombre: 'Jugador2',
      puntaje: 90
    },
    // Agrega más puntajes altos aquí
  ];

  codigoAcceso!:string;

  ingresarTrivia(){

  }
}
