import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  preguntas: any[] = [];

  constructor() { }
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
  

  
}
