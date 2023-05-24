import { Component } from '@angular/core';
import { PreguntaService } from '../services/pregunta.service';
import { Trivia } from '../interfaces/pregunta.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-preguntas',
  templateUrl: './inicio-preguntas.component.html',
  styleUrls: ['./inicio-preguntas.component.css']
})
export class InicioPreguntasComponent {
  constructor(private preguntaService: PreguntaService, private router: Router) {}
  // 

  
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
    
    // Agrega más puntajes altos aquí
  ];

  trivia!:Trivia;

  
  codigoAcceso!:string;



  // ingresarTrivia(){
  //   this.preguntaService.buscarTriviaPorcodigo(this.codigoAcceso)
  //   .subscribe(trivia => {
  //     this.trivia=trivia
  //     console.log(this.trivia)
  //   })
  
  // }

  

  ingresarTrivia() {
    this.preguntaService.buscarTriviaPorcodigo(this.codigoAcceso)
      .subscribe(
        trivia => {
          this.trivia = trivia;
          console.log(this.trivia);
          if (!trivia) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se encontró la trivia',
              timer: 2000,
              showConfirmButton: true
            });
          } else {
            this.router.navigate(['/pregunta', { trivia: JSON.stringify(this.trivia) }]);
          }
        },
        error => {
          // Manejar el error
        }
      );
  }
  

}
