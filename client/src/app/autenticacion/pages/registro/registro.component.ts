import { Component } from '@angular/core';
import { User } from '../../user/user.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  user: User = {
    name: '',
    email: '',
    username: '',
    password: '',
    student: false,
    wins: 0,
    playedGames: []
  };
  
  guardarUsuario() {
    // Aquí puedes agregar la lógica para guardar el usuario en la base de datos
    console.log(this.user); // Imprime el objeto `user` en la consola
    // ...
  }

}
