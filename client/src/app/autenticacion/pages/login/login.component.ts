import { Component } from '@angular/core';
import { AutenticationService } from '../../autentication.service';
import { User } from '../../user/user.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;  
  email?: string;
  password?: string;
  user: User | undefined;

  constructor(private authService: AutenticationService, private router: Router,private userService: UserService) { }

  login() {
    if (!this.username || !this.password) {
      // Realiza alguna validación de los campos de inicio de sesión
      return;
    }

    this.authService.login(this.username, this.password)
      .subscribe(
        (response: Object) => {
          this.user = response as User;
          console.log('Inicio de sesión exitoso', this.user);

          const message = `Bienvenido, ${this.user.name} (${this.user.username})`;
          this.userService.setCurrentUser(this.user);
          //alert(message);
          Swal.fire({
            icon: 'success',
            title: message,
            timer: 2000,
            showConfirmButton: false
          });

          if (this.user.student) {
            this.router.navigate(['/homeStudent']);
          } else {
            this.router.navigate(['/homeProfesor']);
          }
        },
        error => {
          console.error('Error al iniciar sesión', error);
          // Maneja el error de inicio de sesión, muestra un mensaje de error, etc.
        }
      );
  }
}
