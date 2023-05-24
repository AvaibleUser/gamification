import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches/matches.service';

@Component({
  selector: 'app-match-creator',
  templateUrl: './match-creator.component.html',
  styleUrls: ['./match-creator.component.css'],
})
export class MatchCreatorComponent {
  games = ['crucigrama'];
  selectedGame: string = '';
  state: any;

  constructor(private router: Router, private matchesService: MatchesService) {}

  public createMatch() {
    this.matchesService.createMatch(this.selectedGame, this.state).subscribe({
      next: (match) => {
        alert(
          `Se creo el juego con exito.\nEl codigo del juego es ${match._id}`
        );

        this.router.navigate(['/', 'match', match._id]);
      },
      error: console.error,
    });
  }
}
