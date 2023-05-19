import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trivia } from '../interfaces/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  preguntas: any[] = [];
  apiUrl: any;
  http: any;

 
  agregarPregunta(pregunta: any): Observable<any> {
    this.preguntas.push(pregunta);
    console.log(this.preguntas.length);
    return of(pregunta);
  }

  obtenerPreguntas(): Observable<any[]> {
    return of(this.preguntas);
  }

  eliminarPregunta(index: number): Observable<any> {
    const preguntaEliminada = this.preguntas.splice(index, 1);
    return of(preguntaEliminada);
  }

  constructor() {}

  // guardarPregunta(pregunta: Pregunta): Observable<any> {
  //   const url = `${this.apiUrl}/preguntas`;
  //   return this.http.post(url, pregunta);
  // }

  guardarTrivia(trivia: Trivia): Observable<any> {
    const url = `${this.apiUrl}/trivias`;
    return this.http.post(url, trivia);
  }
  

  
}
