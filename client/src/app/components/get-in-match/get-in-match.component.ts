import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals/globals.service';
import { MatchesService } from 'src/app/services/matches/matches.service';

@Component({
  selector: 'app-get-in-match',
  templateUrl: './get-in-match.component.html',
  styleUrls: ['./get-in-match.component.css'],
})
export class GetInMatchComponent implements OnInit {
  matchId: string = '';
  username: string = '';

  constructor(
    private router: Router,
    private matchesService: MatchesService,
    private globalsService: GlobalsService
  ) {}

  ngOnInit(): void {
    this.username = this.globalsService.getUser().username;

    if (!this.username) {
      this.router.navigate(['/']);
    }
  }

  public addPlayerToMatch() {
    this.matchesService.addPlayer(
      this.matchId,
      this.username,
      !this.router.url.includes('student')
    );
  }
}
