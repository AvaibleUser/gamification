import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  email?: string;
  password?: string;

  login() {
    // Aquí puedes implementar la lógica de inicio de sesión, buscar el usuario y ver si ecxite o no y con eso se inicia la sesion 
    console.log('Iniciar sesión:', this.username, this.email, this.password);
    // Por ejemplo, puedes llamar a un servicio para autenticar al usuario
  }
}
