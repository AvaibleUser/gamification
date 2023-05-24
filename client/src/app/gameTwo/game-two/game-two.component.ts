import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.css']
})
export class GameTwoComponent {
  constructor(private router: Router) {}

  comenzarJuego() {
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    if (username.trim() !== '') {
      this.router.navigate(['/playsopa']);
    }
  }
}
