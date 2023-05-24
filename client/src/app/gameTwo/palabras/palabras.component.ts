import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchesService } from './../services/matches.service';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent {
  matchForm: FormGroup;
  palabras: string[] = [];
  partidaCreada: any = null;
  mensajes: string[] = [];

  constructor(private formBuilder: FormBuilder, private matchService: MatchesService) {
    this.matchForm = this.formBuilder.group({
      game: ['', Validators.required],
      creator: ['', Validators.required],
      state: ['']
    });
  }

  onSubmit() {
    if (this.matchForm.invalid) {
      return;
    }

    const game = this.matchForm.value.game;
    const creator = this.matchForm.value.creator;
    const palabrasConcatenadas = this.palabras.join(', ');
    const data = {
      game,
      creator,
      state: palabrasConcatenadas
    };

    this.matchService.createMatch(data)
    .subscribe(
      response => {
        console.log('Partida creada correctamente', response);
        this.partidaCreada = response; // Guardar la partida creada en una variable

        // Mostrar mensaje o alerta con el nombre de la partida y el _id
        const mensaje = `Partida creada: ${this.partidaCreada.game}, Copie el ID: ${this.partidaCreada._id}`;
         this.mensajes.push(mensaje);

        // Reiniciar el formulario
        this.matchForm.reset();
      },
      error => {
        console.error('Error al crear la partida', error);
      }
    );
  }

  agregarPalabra(palabra: string) {
    const palabrasIngresadas = palabra.split(' ');
  
    if (palabrasIngresadas.length === 1) {
      const palabraValida = palabrasIngresadas[0].trim();
  
      if (palabraValida.length > 0) {
        this.palabras.push(palabraValida);
        this.matchForm.patchValue({ state: '' });
      } else {
        console.error('Error: Debe ingresar una palabra');
      }
    } else {
      console.error('Error: Solo se permite ingresar una palabra a la vez');
    }
  }
  
  
  convertToUpperCase(event: any) {
    const inputValue = event.target.value.toUpperCase();
    this.matchForm.get('state')?.setValue(inputValue);
  }
  
}
